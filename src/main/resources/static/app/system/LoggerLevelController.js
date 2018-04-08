define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout'
], function (angular, $) {
    return function ($scope, Resource, $dataSourceManager, GillionMsg, $timeout, $routeParams, $rootScope) {
        elasticLayout();
        $scope.projectName = $routeParams.projectName;
        $('#titleName').html("日志级别管理");
        var levelResource = Resource("/esb-manager/projects/:projectName/loggerLevel/:level/services", {
            "projectName": "@projectName",
            "level": "@level"
        }, {
            "save": {
                "url": "/esb-manager/projects/:projectName/loggerLevel/:level/services",
                "method": "POST"
            },
            "delete": {
                "url": "/esb-manager/projects/:projectName/loggerLevel/:level/services",
                "method": "PUT"
            }
        })

        $scope.levelParams = {
            projectName: $scope.projectName,
            level: "LOG_ERROR"
        }

        $scope.searchLoggerLevel = function () {
            $dataSourceManager.dataSources["levelResource"].doRequestData($dataSourceManager.dataSources["levelResource"].currentPage, $scope.levelParams);
        }

        $scope.add = function () {
            if ($scope.levelParams.level == null) {
                GillionMsg.confirm('提示信息', '未选择日志级别');
            }
            else {
                $scope.levelConfig = {
                    projectName: $scope.projectName

                };
                $scope.loggerLevelServiceName = null;
                $scope.serviceTypeId = null;
                $("#levelModal").modal();
            }
        }

        var height = window.innerHeight - 86;
        $scope.searchBoxHeight = {
            "height": height,
            "min-height": height
        }

        //删除日志等级下服务
        $scope.deleteMutiLoggerLevel = function () {

            if ($scope.empCheckedRows.length < 1) {
                GillionMsg.alert("提示", "请选定服务");
                return;
            }

            GillionMsg.confirm('提示信息', '是否删除该日志等级下服务？', function (r) {
                if (r) {
                    var arr = [];
                    for (var i = 0; i < $scope.empCheckedRows.length; i++) {
                        arr.push($scope.empCheckedRows[i].serviceName);
                    }
                    levelResource.delete({
                        projectName: $scope.projectName,
                        level: $scope.levelParams.level
                    }, arr, function (response) {
                        if (response.success) {
                            $scope.searchLoggerLevel();
                        }
                    })
                }
            })
        }

        //删除日志等级下单个服务
        $scope.deleteLoggerLevel = function (serviceName) {
            GillionMsg.confirm('提示信息', '是否删除该日志等级下服务？', function (r) {
                if (r) {
                    var arr = [];
                    arr.push(serviceName);
                    levelResource.delete({
                        projectName: $scope.projectName,
                        level: $scope.levelParams.level
                    }, arr, function (response) {
                        if (response.success) {
                            $scope.searchLoggerLevel();
                        }
                    })
                }
            })
        }

        $scope.save = function () {
            var arr = [];
            arr.push($scope.loggerLevelServiceName);
            levelResource.save({
                projectName: $scope.projectName,
                level: $scope.levelParams.level
            }, arr, function (response) {
                if (response.success) {
                    $("#levelModal").modal('hide');
                    $scope.levelParams.serviceName = null;
                    $scope.searchLoggerLevel();
                }
            })
        }


        var globalLoggerLevelResource = Resource("/esb-manager/projects/:projectName/loggerLevel/global", {
            "projectName": "@projectName",
            "level": "@level"
        }, {
            "get": {
                "url": "/esb-manager/projects/:projectName/loggerLevel/global",
                "method": "GET"
            },
            "update": {
                "url": "/esb-manager/projects/:projectName/loggerLevel/global/:level",
                "method": "PUT"
            }
        })

        $scope.levelConfig = {
            projectName: $scope.projectName
        }

        //打开全局日志等级查看界面
        $scope.getGlobalLoggerLevel = function () {
            $scope.state = false;
            globalLoggerLevelResource.get({projectName: $scope.projectName}, function (response) {
                $scope.levelConfig.level = response.data
            });
            $("#globalLoggerLevelModal").modal();
        }

        //打开全局日志等级设置界面
        $scope.updateGlobalLoggerLevel = function () {
            $scope.state = true;
            globalLoggerLevelResource.get({projectName: $scope.projectName}, function (response) {
                $scope.levelConfig.level = response.data
            });
            $("#globalLoggerLevelModal").modal();
        }

        $scope.saveGlobalLoggerLevel = function () {
            //编辑全局日志等级
            globalLoggerLevelResource.update($scope.levelConfig, function (response) {
                if (response.success) {
                    $("#globalLoggerLevelModal").modal('hide');
                }
            })
        }

        $scope.loggerTypeSource = [
            {loggerTypes: "DETAIL", loggerTypeValue: "LOG_DETAIL"},
            {loggerTypes: "REQUEST", loggerTypeValue: "LOG_REQUEST"},
            {loggerTypes: "ERROR", loggerTypeValue: "LOG_ERROR"},
            {loggerTypes: "IGNORE", loggerTypeValue: "LOG_IGNORE"}
        ]

        $scope.serviceTypes = [
            {serviceTypeName: "服务", serviceTypeId: 0},
            {serviceTypeName: "服务组", serviceTypeId: 1}
        ]

        $scope.serviceGroupResource = function () {
            $dataSourceManager.dataSources["serviceGroupResource"].doRequestData($dataSourceManager.dataSources["serviceGroupResource"].currentPage, $scope.serviceGroupParams);
        }

        $scope.serviceGroupParams = {
            projectName: $routeParams.projectName
        }

        $scope.serviceResource = function () {
            $dataSourceManager.dataSources["serviceResource"].doRequestData($dataSourceManager.dataSources["serviceResource"].currentPage, $scope.serviceParams);
        }

        $scope.serviceParams = {
            projectName: $routeParams.projectName
        }

        //服务查询界面相关操作
        $scope.protocols = [{"name":"Netty","value":"netty://"},{"name":"HTTP","value":"http://"},{"name":"WebService","value":"webService://"},{"name":"EDS","value":"eds://"},{"name":"RuleNumber","value":"ruleNumber://"},{"name":"Sap","value":"sap://"}]
        $scope.searchParams = {projectName:$routeParams.projectName}
        $scope.$watch('gatewayService.serviceMapping',function () {
            var serviceName = _.clone($scope.gatewayService.serviceMapping);
            for(var i=0;i<$scope.protocols.length;i++){
                if(serviceName.indexOf($scope.protocols[i].value)==0){
                    serviceName = serviceName.replace($scope.protocols[i].value,'');
                    $scope.searchParams.protocol = $scope.protocols[i].name;
                    break;
                }
            }
            $scope.searchParams.serviceName = serviceName;
            $dataSourceManager.dataSources["ServiceSource"].doRequestData(1,$scope.searchParams);
        })
        $scope.goPage = function (size) {
            $dataSourceManager.dataSources["ServiceSource"].doRequestData(size, $scope.searchParams);
        }

        $scope.selectProtocol = function (protocolName) {
            $scope.searchParams.protocol = protocolName;
            $dataSourceManager.dataSources["ServiceSource"].doRequestData(1, $scope.searchParams);
        }
        $scope.selectService = function (serviceMapping) {
            $scope.loggerLevelServiceName = serviceMapping;
            $scope.serviceShow = false;
        }

        $scope.showService = function ($event) {
            $scope.id = $event.target.id;
            var position = getElemPos($event.target);
            $scope.serviceShowStyle = {
                top: position.y + $event.target.offsetHeight - $('#TimerModal').scrollTop(),
                left: position.x
            }
            $scope.searcheParams = {};
            $scope.goPage(1);
            $scope.serviceShow = true;
        }
        $(document).bind('click', function (e) {
            $scope.$apply(function () {
                $scope.serviceShow = false;
            })
        });
        $(document).bind('mousewheel', function (e) {
            $scope.$apply(function () {
                $scope.serviceShow = false;
            })
        });

        $('#serviceMapping').bind('click', function (e) {
            stopPropagation(e);
        });
        $('#serviceMapping1').bind('click', function (e) {
            stopPropagation(e);
        });
        $('#serviceShow').bind('click', function (e) {
            stopPropagation(e);
        });

        function stopPropagation(e) {
            if (e.stopPropagation)
                e.stopPropagation();
            else
                e.cancelBubble = true;
        }

        function getElemPos(obj) {
            var pos = {"top": 0, "left": 0};
            if (obj.offsetParent) {
                while (obj.offsetParent) {
                    pos.top += obj.offsetTop;
                    pos.left += obj.offsetLeft;
                    obj = obj.offsetParent;
                }
            } else if (obj.x) {
                pos.left += obj.x;
            } else if (obj.x) {
                pos.top += obj.y;
            }
            return {x: pos.left, y: pos.top};
        }

    };
});