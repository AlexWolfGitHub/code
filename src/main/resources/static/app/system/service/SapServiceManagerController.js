define([
    'angular',
    'jquery',
], function (angular, $) {
    return  function ($scope, Resource, $dataSourceManager,GillionMsg,$timeout,$routeParams,$rootScope) {
            $('#titleName').html("SapService服务新增");
            $('div').removeClass('modal-backdrop fade in')
            var serviceGroupResource = Resource("/esb-manager/projects/:projectName/serviceGroup/:id",{
                "projectName":"@projectName",
                "id":"@id"
            });
            var sapServiceResource = Resource("/esb-manager/projects/:projectName/services",{
                "projectName":"@projectName",
                "id":"@id"
            },{
                "save":{
                    "url":"/esb-manager/projects/:projectName/services/Sap",
                    "method":"POST"
                },
                "get":{
                    "url":"/esb-manager/projects/:projectName/services/:id",
                    "method":"GET"
                },
                "update":{
                    "url":"/esb-manager/projects/:projectName/services/Sap",
                    "method":"PUT"
                }
            })
            var height = window.innerHeight - 50;
            $scope.showHeight = {"height":height};
            if($routeParams.serviceId){
                sapServiceResource.get({
                    projectName:$routeParams.projectName,
                    protocol:"Sap",
                    id:$routeParams.serviceId
                },function (response) {
                    $scope.service = response.data;
                    $scope.service.protocol = "Sap";
                    $scope.service.projectName = $routeParams.projectName;
                    $scope.service.responseParams = JSON.stringify($scope.service.responseParams)
                    serviceGroupResource.get({projectName : $routeParams.projectName,id:$scope.service.serviceGroupId},function (response) {
                        if(response.success){
                            $scope.serviceGroupName = response.data.name;
                        }
                    })
                })
            }else {
                serviceGroupResource.get({projectName : $routeParams.projectName,id:$routeParams.serviceGroupId},function (response) {
                    if(response.success){
                        $scope.serviceGroupName = response.data.name;
                        $scope.service = {
                            protocol:"SapService",
                            serviceGroupId:$routeParams.serviceGroupId,
                            projectName : $routeParams.projectName
                        }
                    }
                })
            }
            $scope.serviceGroupParams = {
                projectName : $routeParams.projectName
            }

            $scope.save = function () {
                try {
                    var responseParams = _.clone($scope.service.responseParams);
                    $scope.service.responseParams = JSON.parse($scope.service.responseParams)
                }catch (e){
                    $scope.service.responseParams = responseParams;
                    GillionMsg.alert("提示信息","返回参数格式错误");
                    return;
                }
                if($scope.service.id){
                    sapServiceResource.update($scope.service,function (response) {
                        if(response.success){
                            $scope.toServiceHtml();
                        }
                    })
                }else {
                    sapServiceResource.save($scope.service,function (response) {
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