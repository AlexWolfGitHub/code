define([
    'angular',
    'jquery',
    'system/ComponentSettings',
    'framework/utils/ControllerUtils',
    'bootstrap',
], function (angular, $,Component,$controller) {
    return  function ($scope, Resource, $dataSourceManager,GillionMsg,$timeout,$routeParams,$rootScope,$compile) {
        $('#titleName').html("EDS流程调度配置");
        $('div').removeClass('modal-backdrop fade in');
        var component = new Component();
        var height = window.innerHeight-50;

        $scope.componentViewHeight = {
            height:height
        }
        var serviceGroupResource = Resource("/esb-manager/projects/:projectName/serviceGroup/:id",{
            "projectName":"@projectName",
            "id":"@id"
        });
        var nativeServiceResource = Resource("/esb-manager/projects/:projectName/services",{
            "projectName":"@projectName",
            "id":"@id"
        },{
            "save":{
                "url":"/esb-manager/projects/:projectName/services/EDS",
                "method":"POST"
            },
            "get":{
                "url":"/esb-manager/projects/:projectName/services/:id",
                "method":"GET"
            },
            "update":{
                "url":"/esb-manager/projects/:projectName/services/EDS",
                "method":"PUT"
            }
        });
        $scope.serviceGroupParams = {
            projectName : $routeParams.projectName
        }
        if($routeParams.serviceId){
            nativeServiceResource.get({
                projectName:$routeParams.projectName,
                protocol:"EDS",
                id:$routeParams.serviceId
            },function (response) {
                $controller.of("ComponentManagerController")
                    .initService(response.data);
            })
        }else {
            serviceGroupResource.get({projectName : $routeParams.projectName,id:$routeParams.serviceGroupId},function (response) {
                if(response.success){
                    $scope.serviceGroupName = response.data.name;
                    $scope.service = {
                        protocol:"EDS",
                        serviceGroupId:$routeParams.serviceGroupId,
                        projectName : $routeParams.projectName,
                    }
                }
            })
        }

        //根据是否有主键进行更新或保存
        $scope.save = function () {
            $scope.service = $controller.of('ComponentManagerController').getService();
            var nodes = $('.topology-element');
            var components = new Array();
            var serviceVO = _.clone($scope.service);
            //按组件顺序保存
            for(var i=0;i<nodes.length;i++){
                for(var key in $scope.service.flow.componentQueue){
                    if(key == nodes[i].id){
                        $scope.service.flow.componentQueue[key].componentName = component.getComponentCode(key);
                        components.push($scope.service.flow.componentQueue[key]);
                    }
                }
            }
            serviceVO.flow.componentQueue = components;
            if($scope.service.id){
                nativeServiceResource.update(serviceVO,function (response) {
                    if(response.success){
                        $scope.toServiceHtml();
                    }
                })
            }else {
                nativeServiceResource.save(serviceVO,function (response) {
                    if(response.success){
                        $scope.toServiceHtml();
                    }
                })
            }
        }
        $scope.toServiceHtml = function () {
            location.href="/html/index#/projectName/"+$routeParams.projectName+"/serviceManager"
        }
        }
});