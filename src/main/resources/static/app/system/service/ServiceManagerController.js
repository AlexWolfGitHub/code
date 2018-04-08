define([
    'angular',
    'jquery',
    'system/elasticLayout'
], function (angular, $) {
    return  function ($scope, Resource, $dataSourceManager,GillionMsg,$timeout,$routeParams,$rootScope) {
            var serviceResource = Resource("/esb-manager/projects/:projectName/services",{
                "projectName":"@projectName"
            },{
                "delete":{
                    "url":"/esb-manager/projects/:projectName/services/:id",
                    "method":"DELETE"
                }
            })
            elasticLayout();
            $scope.projectName = $routeParams.projectName;
            $('#titleName').html("服务管理");
            $scope.serviceParams = {
                projectName:$scope.projectName
            }
            $scope.serviceGroupParams = {
                projectName:$scope.projectName
            }
            //查询
            $scope.searchServices = function () {
                $dataSourceManager.dataSources["ServiceResource"].doRequestData(1,$scope.serviceParams);
            }
            //打开新增服务配置界面
            $scope.add = function () {
                $("#serviceModal").modal();
            }
            $scope.deleteService = function (row) {
                GillionMsg.confirm("提示信息","是否确定删除",function (r) {
                    if(r){
                        serviceResource.delete({
                            "protocol":row.protocol,
                            "id":row.id,
                            "projectName":$scope.projectName
                        },function (response) {
                            if(response.success){
                                $scope.searchServices();
                            }
                        })
                    }
                })
            }

            $scope.goNext = function () {
                if($scope.service.serviceGroupId!=null&&$scope.service.serviceGroupId!=''&&$scope.service.protocol!=null&&$scope.service.protocol!=''){
                    location.href="/html/index#/projects/"+$scope.projectName+"/protocol/"+$scope.service.protocol+"/serviceGroup/"+$scope.service.serviceGroupId;
                }else {
                    GillionMsg.alert("提示信息","协议或服务组不能为空");
                }
            }

            $scope.protocolSource = [
                {protocolName:"EDS",protocolValue:"EDS"},
                {protocolName:"RuleNumber",protocolValue:"RuleNumber"},
                {protocolName:"WebService",protocolValue:"WebService"},
                {protocolName:"Http",protocolValue:"HTTP"},
                {protocolName:"Sap",protocolValue:"Sap"}
            ]
        }
});