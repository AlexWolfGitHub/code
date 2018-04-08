var inherit = function (Sub, Super, independence) {
    function beget(obj) {
        var F = function () {
        };
        F.prototype = obj;
        return new F();
    }

    var proto = beget(Super.prototype);
    proto.constructor = Sub;
    Sub.prototype = proto;
    if (!!independence) Sub.prototype.super = new Super();
    return Sub;
};

var getCommonDirective = function (module) {

    this.AreaDic = function () {
        module.filter("AreaDic", function (AreaService) {
            return function YesOrNoFunc(areaCode) {
                if (areaCode != null && areaCode != "") {
                    var areaStr = "";
                    if (AreaService.findProvince(areaCode)) {
                        areaStr = AreaService.findProvince(areaCode).name;
                    }
                    if (AreaService.findCity(areaCode)) {
                        areaStr += '/' + AreaService.findCity(areaCode).name;
                    }
                    if (AreaService.findCounty(areaCode)) {
                        areaStr += '/' + AreaService.findCounty(areaCode).name;
                    }
                    return areaStr;
                }
            };
        });
        return this;
    };

    this.floor = function () {
        module.filter("FLOOR", function () {
            return function floor(data) {
                if (data && angular.isNumber(data))
                    return Math.floor(data);
                else
                    return data;
            };
        });
        return this;
    };

    this.YesOrNo = function () {
        module.filter("YesOrNo", function () {
            return function YesOrNoFunc(data) {
                if (data && (data == "X" || data == "1" || data == "Y"))
                    return "是";
                else if (data == " ")
                    return "";
                else
                    return "否";
            };
        });
        return this;
    };

    this.wrapNoneLeaf = function () {
        module.filter('wrapNoneLeaf', function () {
            return function (value, record, prefix, suffix) {
                var grid = this;
                if (value === undefined) return '';
                try {
                    var node = grid.dataSource.$node(record);
                    if (!node.isLeaf()) {
                        if (prefix) {
                            value = prefix + value;
                        }
                        if (suffix) {
                            value += suffix;
                        }
                    }
                } catch (e) {
                }
                return value;
            };
        });
        return this;
    };

    this.onFinishRender = function (isView, isGroupFilter) {
        module.directive('onFinishRender', function ($timeout, $rootScope) {
            return {
                restrict: 'A',
                link: function (scope, element, attr) {
                    scope.initFocus = function () {
                        var formElement = $("body :text[ng-model!=currentPage]:enabled[readonly !='readonly']:not([ng-model^=calendar]),body textarea[readonly !='readonly']");
                        if (formElement != undefined && formElement.length > 0) {
                            $(formElement[0]).focus();
                        } else {
                            formElement = $("body button[type=button]:enabled[disabled !='disabled']")
                            if (formElement != undefined && formElement.length > 0) {
                                $(formElement[0]).focus();
                            }
                        }
                    }

                    $(window).resize();
                    if (isView)
                        $timeout(scope.initFocus);

                    if (isGroupFilter)
                        document.getElementById("groupFilter").style.display = "block";

                    $timeout(function () {
                        $rootScope.$broadcast('pageRenderFinish');
                    }, 1);
                }
            }
        });
        return this;
    };

    this.AreaDic = function () {
        module.filter("AreaDic", function (AreaService) {
            return function YesOrNoFunc(areaCode) {
                if (areaCode != null && areaCode != "") {
                    var areaStr = "";
                    if (AreaService.findProvince(areaCode)) {
                        areaStr = AreaService.findProvince(areaCode).name;
                    }
                    if (AreaService.findCity(areaCode)) {
                        areaStr += '/' + AreaService.findCity(areaCode).name;
                    }
                    if (AreaService.findCounty(areaCode)) {
                        areaStr += '/' + AreaService.findCounty(areaCode).name;
                    }
                    return areaStr;
                }
            };
        });
        return this;
    };

    this.MultiValues = function (valueSeparator) {
        module.filter("MultiValues", function () {
            return function (inputs, params) {
                if (inputs && params) {
                    var objectArray = $rootScope.$dict[params] || [],
                        keys = inputs.split(valueSeparator),
                        objects = {},
                        values = [];
                    angular.forEach(objectArray, function (object) {
                        objects[object.key] = object.value;
                    });
                    angular.forEach(keys, function (key) {
                        if (objects[key] != undefined) values.push(objects[key]);
                    });
                    return values.join(valueSeparator);
                }
                return inputs;
            };
        });
        return this;
    };

    return this;
};
