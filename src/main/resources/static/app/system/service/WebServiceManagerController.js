define([
    'angular',
    'jquery',
    'system/elasticLayout'
], function (angular, $) {
    return  function ($scope, Resource, $dataSourceManager,GillionMsg,$timeout,$routeParams,$rootScope) {
            $('#titleName').html("WebService服务新增");
            $('div').removeClass('modal-backdrop fade in')
            var serviceGroupResource = Resource("/esb-manager/projects/:projectName/serviceGroup/:id",{
                "projectName":"@projectName",
                "id":"@id"
            });
            var webServiceResource = Resource("/esb-manager/projects/:projectName/services",{
                "projectName":"@projectName",
                "id":"@id"
            },{
                "save":{
                    "url":"/esb-manager/projects/:projectName/services/WebService",
                    "method":"POST"
                },
                "get":{
                    "url":"/esb-manager/projects/:projectName/services/:id",
                    "method":"GET"
                },
                "update":{
                    "url":"/esb-manager/projects/:projectName/services/WebService",
                    "method":"PUT"
                }
            });
            if($routeParams.serviceId){
                webServiceResource.get({
                    projectName:$routeParams.projectName,
                    protocol:"WebService",
                    id:$routeParams.serviceId
                },function (response) {
                    $scope.service = response.data;
                    $scope.service.protocol = "WebService";
                    $scope.service.projectName = $routeParams.projectName;
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
                            protocol:"WebService",
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
                if($scope.service.id){
                    webServiceResource.update($scope.service,function (response) {
                        if(response.success){
                            $scope.toServiceHtml();
                        }
                    })
                }else {
                    webServiceResource.save($scope.service,function (response) {
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