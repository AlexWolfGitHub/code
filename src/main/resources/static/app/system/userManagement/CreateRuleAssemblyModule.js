/**
 * Created by guosc on 2016/10/25 0025.
 */
define(["www/bower_components/angular/angular",
    "framework/utils/JSONPrettyFormat",
    'framework/dataGrid/DataGridModule',
    'framework/pagination/GillionPaginationModule',
    'framework/msg/GillionMsgModule'
],function (angular, JSONPrettyFormat) {
    var CreateRuleAssemblyModule = angular.module("CreateRuleAssemblyModule", [
        'DataGridModule',
        'GillionPaginationModule',
        'GillionMsgModule']);

    CreateRuleAssemblyModule.controller("CreateRuleAssemblyController", function ($scope,Resource,$location,GillionMsg,GillionMsgService,$http) {
        var app = Resource("/grule-manager/ruleAssembly");
        $scope.packageId=GillionMsgService.getInputData();
        $scope.ruleAssembly={
            conditions:"{}",
            rulePackageId:$scope.packageId,
            priority:1,
            assemblyStatus:0
        }

        $scope.confirm=function(){
            $scope.RuleAssemblyForm.verify().then(function(){
                app.create($scope.ruleAssembly,function(response){
                    if (response.success) {
                        GillionMsgService.setOutputData(response);
                        GillionMsgService.close();
                    } else {
                        GillionMsg.alert("提示", "规则集新建失败");
                    }
                })
            })
        };
        $scope.cancel=function(){
            GillionMsgService.close();
        }

    });

});