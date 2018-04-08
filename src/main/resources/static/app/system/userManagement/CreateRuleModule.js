/**
 * Created by guosc on 2016/10/25 0025.
 */
define(["www/bower_components/angular/angular",
    "framework/utils/JSONPrettyFormat",
    'framework/dataGrid/DataGridModule',
    'framework/pagination/GillionPaginationModule',
    'framework/msg/GillionMsgModule'
],function (angular, JSONPrettyFormat) {
    var CreateRuleModule = angular.module("CreateRuleModule", [
        'DataGridModule',
        'GillionPaginationModule',
        'GillionMsgModule']);

    CreateRuleModule.controller("CreateRuleController", function ($scope,Resource,$location,GillionMsg,GillionMsgService,$http) {
        var app = Resource("/grule-manager/rule");
        $scope.ruleAssemblyId=GillionMsgService.getInputData();
        $http({
            url:"/grule-manager/rule/getPriority",
            method:"GET",
            params:{
                id:$scope.ruleAssemblyId
            }
        }).success(function(resp){
            $scope.rule={
                expression:"{}",
                ruleAssemblyId:$scope.ruleAssemblyId,
                priority:resp,
                ruleStatus:0
            }
        });
        $scope.confirm=function(){
            $scope.RuleForm.verify().then(function(){
                app.create($scope.rule,function(response){
                    if (response.success) {
                        GillionMsgService.setOutputData(response);
                        GillionMsgService.close();
                    } else {
                        GillionMsg.alert("提示", "规则新建失败");
                    }
                })
            })
        };
        $scope.cancel=function(){
            GillionMsgService.close();
        }

    });

});