define([
    'angular',
    'jquery',
    'system/ComponentSettings',
    'framework/utils/ControllerUtils',
    'system/elasticLayout'
], function (angular, $,Component,$controller) {
    return function ($scope, Resource, $dataSourceManager,GillionMsg,$routeParams,$rootScope) {
            elasticLayout();
            var component = new Component();
            var projectName = $routeParams.projectName;
            var gatewayId = $routeParams.gatewayId;
            var gatewayServiceResource = Resource("/esb-manager/projects/:projectName/gateway/:gatewayId",{
                "projectName":"@projectName",
                "gatewayId":"@gatewayId"
            },{
                "get":{
                    "url":"/esb-manager/projects/:projectName/gateway/:gatewayId",
                    "method":"GET"
                },
                "delete":{
                    "url":"/esb-manager/projects/:projectName/gateway/:gatewayId/services/:id",
                    "method":"DELETE"
                },
                "save":{
                    "url":"/esb-manager/projects/:projectName/gateway/:gatewayId/services",
                    "method":"POST"
                },
                "update":{
                    "url":"/esb-manager/projects/:projectName/gateway/:gatewayId/services",
                    "method":"PUT"
                }
            })
            gatewayServiceResource.get({projectName:projectName,gatewayId:gatewayId},function (response) {
                if(response.id){
                    $scope.gatewayConfig = response;
                    $('#titleName').html("<a href='#/projectId/"+$scope.gatewayConfig.projectId+"/projectName/"+$scope.gatewayConfig.projectName+"/gatewayManager'>网关配置</a>/"+$scope.gatewayConfig.name)
                }
            })
            $scope.gatewayServiceParams = {
                projectName:projectName,
                gatewayId:gatewayId
            }
            $scope.searchGatewayService = function () {
                $scope.showEdit = false;
                $dataSourceManager.dataSources["GatewayServiceSource"].doRequestData(1,$scope.gatewayServiceParams);
            }
            //打开服务新增界面
            $scope.add = function () {
                $scope.searchParams = {
                    projectName:projectName
                };
                $scope.gatewayService = {
                    gatewayId:gatewayId
                }
                showServiceModal();
            }
            $scope.editGatewayService = function (row) {
                $scope.searchParams = {
                    projectName:projectName
                };
                $scope.gatewayService = row;
                showServiceModal();
            }

            //保存服务
            $scope.save = function () {
                $scope.gatewayService.projectName = projectName;
                if($scope.gatewayService.id){
                    gatewayServiceResource.update($scope.gatewayService,function (response) {
                        if(response.success){
                            $scope.searchGatewayService();
                            hideServiceModal();
                        }
                    })
                }else {
                    gatewayServiceResource.save($scope.gatewayService,function (response) {
                        if(response.success){
                            $scope.searchGatewayService();
                            hideServiceModal();
                        }
                    })
                }
            }

            function showServiceModal(){
                switch ($scope.gatewayConfig.protocol){
                    case "HTTP":
                        $("#httpServiceModal").modal();
                        break;
                    case "EDS":
                        $("#edsServiceModal").modal();
                        break;
                    case "Netty":
                        $("#nettyServiceModal").modal();
                        break;
                    case "WebService":
                        $("#webServiceModal").modal();
                        break;
                }
            }
            function hideServiceModal() {
                switch ($scope.gatewayConfig.protocol){
                    case "HTTP":
                        $("#httpServiceModal").modal('hide');
                        break;
                    case "EDS":
                        $("#edsServiceModal").modal('hide');
                        break;
                    case "Netty":
                        $("#nettyServiceModal").modal('hide');
                        break;
                    case "WebService":
                        $("#webServiceModal").modal('hide');
                        break;
                }
            }
            //删除服务
            $scope.deleteGatewayService = function(record){
                GillionMsg.confirm('提示信息', '是否确定删除？', function (r) {
                    if (r) {
                        gatewayServiceResource.delete({projectName:$scope.gatewayConfig.projectName,gatewayId:record.gatewayId,id:record.id},function(response){
                            if(response.success){
                                $scope.searchGatewayService();
                            }
                        })
                    }
                })
            }

            //配置出入口数据转换
            $scope.configure = function (row,sign) {
                $scope.sign = sign;
                $scope.gatewayService = row;
                if(sign == 'inbound'){
                    $controller.of('ComponentManagerController').initTransform(row.inboundTransform);
                }else {
                    $controller.of('ComponentManagerController').initTransform(row.outboundTransform);
                }
                $('#componentModal').modal();
            }


            $scope.saveTransformSetting = function () {
                var service = $controller.of('ComponentManagerController').getService();
                var nodes = $('.topology-element');
                var components = new Array();
                //按组件顺序保存
                for(var i=0;i<nodes.length;i++){
                    for(var key in service.flow.componentQueue){
                        if(key == nodes[i].id){
                            service.flow.componentQueue[key].componentName = component.getComponentCode(key);
                            components.push(service.flow.componentQueue[key]);
                        }
                    }
                }
                if($scope.sign == 'inbound'){
                    $scope.gatewayService.inboundTransform = components;
                }else {
                    $scope.gatewayService.outboundTransform = components;
                }
                $scope.save();
                $('#componentModal').modal('hide');
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
            $scope.gatewayService.serviceMapping = serviceMapping;
            $scope.serviceShow = false;
        }

        $scope.showService = function ($event) {
            var position = getElemPos($event.target);
            $scope.serviceShowStyle = {
                top:position.y+$event.target.offsetHeight,
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

        $('#edsServiceMapping').bind('click', function (e) {
            stopPropagation(e);
        });
        $('#nettyServiceMapping').bind('click', function (e) {
            stopPropagation(e);
        });
        $('#webServiceMapping').bind('click', function (e) {
            stopPropagation(e);
        });
        $('#httpServiceMapping').bind('click', function (e) {
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
        }
});