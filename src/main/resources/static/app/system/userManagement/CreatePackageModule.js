/**
 * Created by guosc on 2016/10/25 0025.
 */
define(["www/bower_components/angular/angular",
    "framework/utils/JSONPrettyFormat",
    'framework/dataGrid/DataGridModule',
    'framework/pagination/GillionPaginationModule',
    'framework/msg/GillionMsgModule'
],function (angular, JSONPrettyFormat) {
    var CreatePackageModule = angular.module("CreatePackageModule", [
        'DataGridModule',
        'GillionPaginationModule',
        'GillionMsgModule']);

    CreatePackageModule.controller("CreatePackageController", function ($scope,Resource,$location,GillionMsg,GillionMsgService) {
        var app = Resource("/grule-manager/rulePackage/returnId");
        $scope.project=GillionMsgService.getInputData();
        $scope.rulePackage={
            status:0,
            conditions:"{}",
            projectid:$scope.project.projectId,
            groupId:$scope.project.projectCode,
            packageStatus:0
        }
        $scope.confirm=function(){
            $scope.businessModel={};
            $scope.RulePackageForm.verify().then(function(){
                Resource("/grule-manager/businessModel/id").create($scope.businessModel,function(response){
                    if(response.id){
                        $scope.rulePackage.businessModelId=String(response.id);
                        app.create($scope.rulePackage,function(response){
                            if (response.success) {
                                GillionMsgService.setOutputData(response.data);
                                GillionMsgService.close();
                            }
                        })
                    }
                })
            })
        };
        $scope.cancel=function(){
            GillionMsgService.close();
        }

    });

});