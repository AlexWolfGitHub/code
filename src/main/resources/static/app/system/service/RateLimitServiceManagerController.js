define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout'
], function (angular, $) {
    return function ($scope, $http, Resource, $dataSourceManager, GillionMsg, $timeout, $routeParams, $rootScope) {
        elasticLayout();
        $scope.projectName = $routeParams.projectName;
        $scope.strategyName = $routeParams.strategyName;
        $('#titleName').html("<a href='#/projectName/" + $scope.projectName + "/rateLimitManager'>限流管理</a>/" + $scope.strategyName);
        var rateLimitServiceResource = Resource("/esb-manager/projects/:projectName/rateLimitStrategies/:strategyName/services", {
            "projectName": "@projectName",
            "strategyName": "@strategyName"
        }, {
            "save": {
                "url": "/esb-manager/projects/:projectName/rateLimitStrategies/:strategyName/services",
                "method": "POST"
            },
            "delete": {
                "url": "/esb-manager/projects/:projectName/rateLimitStrategies/:strategyName/services",
                "method": "PUT"
            }
        })

        $scope.params = {
            projectName: $scope.projectName,
            strategyName: $scope.strategyName
        }

        $scope.searchRateLimitService = function () {
            $dataSourceManager.dataSources["rateLimitServiceResource"].doRequestData($dataSourceManager.dataSources["rateLimitServiceResource"].currentPage, $scope.params);
        }

        $scope.add = function () {
            $scope.rateLimitServiceName = null;
            $scope.serviceTypeId = null;
            $("#rateLimitServiceModal").modal();
        }

        var height = window.innerHeight - 86;
        $scope.searchBoxHeight = {
            "height": height,
            "min-height": height
        }


        //删除限流策略下多个服务
        $scope.deleteMutiRateLimitService = function () {

            if ($scope.empCheckedRows.length < 1) {
                GillionMsg.alert("提示", "请选定服务");
                return;
            }

            GillionMsg.confirm('提示信息', '是否删除该限流策略下服务？', function (r) {
                if (r) {
                    var arr = [];
                    for (var i = 0; i < $scope.empCheckedRows.length; i++) {
                        arr.push($scope.empCheckedRows[i].serviceName);
                    }
                    rateLimitServiceResource.delete({
                        projectName: $scope.projectName,
                        strategyName: $scope.strategyName,
                    }, arr, function (response) {
                        if (response.success) {
                            $scope.searchRateLimitService();
                        }
                    })
                }
            })
        }

        //删除限流策略下单个服务
        $scope.deleteRateLimitService = function (serviceName) {
            GillionMsg.confirm('提示信息', '是否删除该限流策略下服务？', function (r) {
                if (r) {
                    var arr = [];
                    arr.push(serviceName);
                    rateLimitServiceResource.delete({
                        projectName: $scope.projectName,
                        strategyName: $scope.strategyName
                    }, arr, function (response) {
                        if (response.success) {
                            $scope.searchRateLimitService();
                        }
                    })
                }
            })
        }


        $scope.save = function () {
            var arr = [];
            arr.push($scope.rateLimitServiceName);
            rateLimitServiceResource.save({
                projectName: $scope.projectName,
                strategyName: $scope.strategyName
            }, arr, function (response) {
                if (response.success) {
                    $("#rateLimitServiceModal").modal('hide');
                    $scope.searchRateLimitService();
                }
            })
        }

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
            $scope.rateLimitServiceName = serviceMapping;
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