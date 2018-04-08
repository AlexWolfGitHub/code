/**
 * Created by guosc on 2016/10/25 0025.
 */
define(["www/bower_components/angular/angular",
    "framework/utils/JSONPrettyFormat",
    'framework/dataGrid/DataGridModule',
    'framework/pagination/GillionPaginationModule',
    'framework/msg/GillionMsgModule'
],function (angular, JSONPrettyFormat) {
    var CreateProjectModule = angular.module("CreateProjectModule", [
        'DataGridModule',
        'GillionPaginationModule',
        'GillionMsgModule']);

    CreateProjectModule.controller("CreateProjectController", function ($scope,Resource,$location,GillionMsg,GillionMsgService) {
        var app = Resource("/grule-manager/projects");
        $scope.confirm=function(){
            app.create($scope.project,function(response){
                if (response.success) {
                    GillionMsgService.setOutputData(response);
                    GillionMsgService.close();
                } else {
                    GillionMsg.alert("提示", "项目新建失败");
                }
            })
        };
        $scope.cancel=function(){
            GillionMsgService.close();
        }

    });

});