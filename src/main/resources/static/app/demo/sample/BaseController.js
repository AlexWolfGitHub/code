define([
    'require',
    'angular',
    'underscore',
    'jquery'
], function (require, angular, _, $) {
    function getTopWindow(win) {
        if (!win) win = window;
        if (win === window.parent) return win;
        else win = window.parent;
        return getTopWindow(win);
    }

    var BaseController = function (options) {
        var _this = this;
        var scope = this.scope = options.scope;
        var rootScope = this.rootScope = options.rootScope;
        var config = this.config = options.config;

        scope.clickEvent = function (eventName, p1, p2, p3, p4, p5, p6) {
            var $target = $(event.target);
            var delayClick = $target.attr("delay-click");
            if (delayClick) {
                $target.attr("disabled", "disabled");
                setTimeout(function () {
                    $target.removeAttr("disabled");
                }, delayClick);
            }
            if (_.isFunction(_this[eventName])) _this[eventName](p1, p2, p3, p4, p5, p6);
        };

        scope.resize = function () {
            $(window).resize();
        };
        
        scope.close = function () {
            var indexScope = getTopWindow().angular.element("body").scope();
            if (scope.openType && scope.openType == '2')
                indexScope.closeModal();
            else {
                indexScope.removeTab();
                indexScope.$apply();
            }
        };

        if(options.grid){
            require(["main/GridIntegration"], function(GridIntegration){
                _.extendOwn(BaseController.prototype, GridIntegration);
            });
        }

        if(options.tab){
            require(["main/TabIntegration"], function(TabIntegration){
                _.extendOwn(BaseController.prototype, TabIntegration);
            });
        }

        if(options.form){
            require(["main/FormIntegration"], function(FormIntegration){
                _.extendOwn(BaseController.prototype, FormIntegration);
            });
        }
    };

    var Proto = BaseController.prototype;

    Proto.init = function () {
    };

    Proto.getAssociateQueryText = function (associate) {
        if (associate.scope.multi) {
            if (associate.scope.selectedRows) {
                var arr = associate.scope.inputText.val().split(associate.scope.valueSeparator);
                return arr.length != associate.scope.selectedRow.length ? arr[arr.length - 1] : "";
            } else {
                return "";
            }
        } else {
            return associate.scope.inputText.val();
        }
    };

    Proto.initPageState = function (options, tabUrlList) {
        var scope = this.scope,
            config = options.config,
            boInsName = options.boInsName,
            pageType = options.pageType,
            isNewConfig = options.isNewConfig,
            isTabPage = options.isTabPage;

        scope._pageState = {
            _dataState: config.dataState.NORMAL,
            _operateType: "",
            pageType: pageType
        };

        scope._pageState.isDataModified = function () {
            if (!config.pageStateTip) {
                return false;
            }

            if (scope._pageState._dataState == config.dataState.MODIFY) {
                return true;
            }

            if (tabUrlList && !_.isArray(tabUrlList)) tabUrlList = [tabUrlList];
            if (tabUrlList && tabUrlList.length) {
                var injector = angular.element(document).injector(),
                    GillionTabService = injector.get("GillionTabService");
                for (var i = 0; i < tabUrlList.length; i++) {
                    var layoutScope = GillionTabService.invoke(tabUrlList[i].title,tabUrlList[i].url,"$scope",null);
                    if (layoutScope && layoutScope._pageState && layoutScope._pageState.isDataModified && layoutScope._pageState.isDataModified())
                        return true;
                }
            }
            return false;
        };

        scope._pageState.resetDataState = function () {
            var injector = angular.element(document).injector(),
                $timeout = injector.get("$timeout");

            $timeout(function () {
                scope._pageState._dataState = $config.dataState.NORMAL;
                if(isNewConfig && !isTabPage){
                    if(pageType=="add"){
                      if(scope[boInsName] && (scope[boInsName].rowStatus == 2  || scope[boInsName].rowStatus == 16)){
                        scope[boInsName].rowStatus = 2;
                      }else{
                        scope[boInsName].rowStatus = 4;
                      }
                    } else if(pageType=="edit") {
                      if(scope[boInsName]) scope[boInsName].rowStatus = 2;
                    }
                }
            }, config.pageStateResetTimeout);
        };

        scope._pageState.setDataStateModify = function () {
            scope._pageState._dataState = config.dataState.MODIFY;
        };
    };

    /**
     * 添加表单对象监听
     * 监听对象属性值改变，改变业务状态
     * @param listenObjectName 监听对象
     * @param propertyCol 对象属性列表
     * @param assertFunc 指定条件下执行状态改变
     */
    Proto.pageStateWatch = function (listenObjectName, propertyCol, firstAssertFunc, secondAssertFunc, gridRender, callback) {
        var $scope = this.scope;
        var injector = angular.element(document).injector(),
            Arrays = injector.get("Arrays");

        $scope.$watch(listenObjectName, function (newVal, oldVal) {
            var func = function () {
                if (newVal.rowStatus == 16 || newVal.rowStatus == 4) {
                    if ($scope._pageState && $scope._pageState.setDataStateModify)
                        $scope._pageState.setDataStateModify();
                } else {
                    _.mapObject(newVal, function (val, key) {
                        var checked = Arrays.exists(propertyCol, key);
                        if (checked) {
                            var newData = val;
                            var oldData = oldVal[key];
                            if (!($scope._compareNewAndOldObjIsEqual(newData, oldData, $scope))) {
                                if (newVal.rowStatus == 2) {
                                    newVal.rowStatus = 16;
                                }

                                if ($scope._pageState && $scope._pageState.setDataStateModify)
                                    $scope._pageState.setDataStateModify();

                                return false;
                            }
                        }
                    });
                }

            };

            if (_.isFunction(firstAssertFunc) && firstAssertFunc(newVal, oldVal)) {
                if (_.isFunction(secondAssertFunc)) {
                    if (secondAssertFunc(newVal, oldVal)) func();
                } else {
                    func();
                    if(_.isFunction(gridRender)) gridRender();
                }
            }

            if(_.isFunction(callback)) callback();
        }, true);
    };

    Proto.initRefresh = function () {
        var $scope = this.scope;

        $scope.refreshParent = function (objectName) {
            var indexScope = getTopWindow().angular.element("body").scope();
            var objectNames = objectName.split(",");
            angular.forEach(objectNames, function (data) {
                //2 = 弹出框刷新底层窗口
                indexScope.refresh($scope.openType, data);
            });
        };

        $scope.refreshUperLayer = function () {
            var indexScope = getTopWindow().angular.element("body").scope();
            indexScope.refreshUperLayer($scope.openType);
        };

        $scope.refreshPages = function (modelName) {
            $scope.refreshCurrentPage(modelName);
        };

        $scope.refreshCurrentPage = function () {
            if ($scope.__reloadCurrentPage) {
                $scope.__reloadCurrentPage();
            }
        };
    };

    Proto.errorLocation = function (errorItems) {
        for (var j = 0; j < errorItems.length; j++) {
            if ($("input[name='" + errorItems[j].$name + "']").parents("div[api]")[0]) {
                var apiName = $("input[name='" + errorItems[j].$name + "']").parents("div[api]")[0].attributes.api.value;
                var title = $("input[name='" + errorItems[j].$name + "']").parents("div[title]")[0].attributes.title.value;
                this.scope[apiName].selectTab(title + "_" + undefined);
                if ($("input[name='" + errorItems[j].$name + "']")[0])
                    $("input[name='" + errorItems[j].$name + "']")[0].focus();
            }
        }
    };

    Proto.registerTab = function () {
        var _this = this,
            injector = angular.element(document).injector(),
            GillionTabService = injector.get("GillionTabService"),
            GillionMsg = injector.get("GillionMsg");

        GillionTabService.register(function (active, param) {
            if (active && active === "$scope") {
                return _this.scope;
            } else {
                var obj = _this.scope[active];
                if (obj) {
                    if (angular.isFunction(obj)) return _this.scope[active](param);
                    else return obj;
                } else {
                    GillionMsg.alert("提示", active + "方法或者对象不存在！");
                    return false;
                }
            }
        });
    };

    return BaseController;
});