define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout'
], function (angular, $) {
    return function ($scope, $http, Resource, $dataSourceManager, GillionMsg, $timeout, $routeParams, $rootScope) {
        elasticLayout();
        $scope.projectName = $routeParams.projectName;
        $scope.configName = $routeParams.configName;
        $('#titleName').html("<a href='#/projectName/"+$scope.projectName+"/threadlsolationManager'>线程隔离管理</a>/"+$scope.configName);
        var threadIsolationServiceResource = Resource("/esb-manager/projects/:projectName/threadIsolationStrategies/:configName/services", {
            "projectName": "@projectName",
            "configName": "@configName"
        }, {
            "save": {
                "url": "/esb-manager/projects/:projectName/threadIsolationStrategies/:configName/services",
                "method": "POST"
            },
            "delete": {
                "url": "/esb-manager/projects/:projectName/threadIsolationStrategies/:configName/services",
                "method": "PUT"
            }
        })
        $scope.params = {
            projectName: $scope.projectName,
            configName: $scope.configName
        }

        $scope.searchThreadIsolationService = function () {
            $dataSourceManager.dataSources["threadIsolationServiceResource"].doRequestData($dataSourceManager.dataSources["threadIsolationServiceResource"].currentPage, $scope.params);
        }

        $scope.add = function () {
            $scope.threadIsolationServiceName=null;
            $scope.serviceTypeId=null;
            $("#threadIsolationServiceModal").modal();
        }
        var height = window.innerHeight - 86;
        $scope.searchBoxHeight = {
            "height": height,
            "min-height": height
        }


        //删除线程隔离策略下多个服务
        $scope.deleteMutiThreadIsolationService = function () {
            GillionMsg.confirm('提示信息', '是否删除该线程隔离策略下服务？', function (r) {
                if (r) {
                    var arr = [];
                    for (var i = 0; i < $scope.empCheckedRows.length; i++) {
                        arr.push($scope.empCheckedRows[i].serviceName);
                    }
                    threadIsolationServiceResource.delete({
                        projectName: $scope.projectName,
                        configName: $scope.configName,
                    }, arr, function (response) {
                        if (response.success) {
                            GillionMsg.alert("提示", "该线程隔离策略下服务删除成功.");
                            $scope.searchThreadIsolationService();
                        }
                    })
                }
            })
        }

        //删除重试策略下单个服务
        $scope.deleteThreadIsolationService= function (serviceName) {
            GillionMsg.confirm('提示信息', '是否删除该线程隔离策略下服务？', function (r) {
                if (r) {
                    var arr = [];
                    arr.push(serviceName);
                    threadIsolationServiceResource.delete({
                        projectName: $scope.projectName,
                        configName: $scope.configName
                    }, arr, function (response) {
                        if (response.success) {
                            GillionMsg.alert("提示", "该线程隔离策略下服务删除成功.");
                            $scope.searchThreadIsolationService();
                        }
                    })
                }
            })
        }


        $scope.save = function () {
            var arr = [];
            arr.push($scope.threadIsolationServiceName);
            threadIsolationServiceResource.save({
                projectName: $scope.projectName,
                configName: $scope.configName
            }, arr, function (response) {
                if (response.success) {
                    GillionMsg.alert("提示", "线程隔离策略下服务新增成功.");
                    $scope.params.serviceName=null;
                    $scope.searchThreadIsolationService();
                    $("#threadIsolationServiceModal").modal('hide');
                }
            })
        }

        $scope.serviceTypes = [
            {serviceTypeName: "服务", serviceTypeId: 0},
            {serviceTypeName: "服务组", serviceTypeId: 1}
        ]
        $scope.serviceGroupResource = function(){
            $dataSourceManager.dataSources["serviceGroupResource"].doRequestData($dataSourceManager.dataSources["serviceGroupResource"].currentPage,$scope.serviceGroupParams);
        }
        $scope.serviceGroupParams = {
            projectName:$routeParams.projectName
        }

        $scope.test="0";

        $scope.select=function () {
            if($scope.test==1)
            {
                $("#show1").css("display","none")
                $("#show2").css("display","block")
            }else{
                $("#show1").css("display","block")
                $("#show2").css("display","none")
            }
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
            $dataSourceManager.dataSources["ServiceSource"].doRequestData(size,$scope.searchParams);
        }

        $scope.selectProtocol = function (protocolName) {
            $scope.searchParams.protocol = protocolName;
            $dataSourceManager.dataSources["ServiceSource"].doRequestData(1,$scope.searchParams);
        }
        $scope.selectService = function(serviceMapping){
            $scope.threadIsolationServiceName= serviceMapping;
            $scope.serviceShow = false;
        }

        $scope.showService = function ($event) {
            var position = getElemPos($event.target);
            $scope.serviceShowStyle = {
                top:position.y+$event.target.offsetHeight-$('#TimerModal').scrollTop(),
                left:position.x
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
        function getElemPos(obj){
            var pos = {"top":0, "left":0};
            if (obj.offsetParent){
                while (obj.offsetParent){
                    pos.top += obj.offsetTop;
                    pos.left += obj.offsetLeft;
                    obj = obj.offsetParent;
                }
            }else if(obj.x){
                pos.left += obj.x;
            }else if(obj.x){
                pos.top += obj.y;
            }
            return {x:pos.left, y:pos.top};
        }
    };
});