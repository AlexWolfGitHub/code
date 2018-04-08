define([
    'angular',
    'jquery',
    'system/elasticLayout'
], function (angular, $) {
    return  function ($scope, Resource, $dataSourceManager,GillionMsg,$timeout,$routeParams,$rootScope) {
            $('#titleName').html("Http服务新增");
            $('div').removeClass('modal-backdrop fade in')
            var serviceGroupResource = Resource("/esb-manager/projects/:projectName/serviceGroup/:id",{
                "projectName":"@projectName",
                "id":"@id"
            });
            var httpServiceResource = Resource("/esb-manager/projects/:projectName/services",{
                "projectName":"@projectName",
                "id":"@id"
            },{
                "save":{
                    "url":"/esb-manager/projects/:projectName/services/HTTP",
                    "method":"POST"
                },
                "get":{
                    "url":"/esb-manager/projects/:projectName/services/:id",
                    "method":"GET"
                },
                "update":{
                    "url":"/esb-manager/projects/:projectName/services/HTTP",
                    "method":"PUT"
                }
            });
            if($routeParams.serviceId){
                httpServiceResource.get({
                    projectName:$routeParams.projectName,
                    protocol:"HTTP",
                    id:$routeParams.serviceId
                },function (response) {
                    $scope.service = response.data;
                    $scope.service.protocol = "HTTP";
                    $scope.service.projectName = $routeParams.projectName;
                    if(!isEmpty($scope.service.settings)){
                        $scope.service.settings = JSON.stringify($scope.service.settings);
                    }
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
                            protocol:"HTTP",
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
                if(!isEmpty($scope.service.settings)){
                    $scope.service.settings = JSON.parse($scope.service.settings);
                }else {
                    $scope.service.settings = null;
                }
                if($scope.service.id){
                    httpServiceResource.update($scope.service,function (response) {
                        if(response.success){
                            $scope.toServiceHtml();
                        }
                    })
                }else {
                    httpServiceResource.save($scope.service,function (response) {
                        if(response.success){
                            $scope.toServiceHtml();
                        }
                    })
                }
            }
            $scope.methodSource = [
                {methodName:"GET",methodValue:"GET"},
                {methodName:"POST",methodValue:"POST"},
                {methodName:"PUT",methodValue:"PUT"},
                {methodName:"DELETE",methodValue:"DELETE"}
                ]
            $scope.toServiceHtml = function () {
                location.href="/html/index#/projectName/"+$routeParams.projectName+"/serviceManager"
            }

        function isEmpty(obj){
            if(typeof obj == "undefined" || obj == null || obj == ""){
                return true;
            }else{
                return false;
            }
        }
        }
});