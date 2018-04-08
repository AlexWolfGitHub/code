/**
 * Created by guosc on 2016/10/25 0025.
 */
define(["angular",
    'framework/dataGrid/DataGridModule',
    'framework/pagination/GillionPaginationModule',
    'framework/msg/GillionMsgModule'
],function (angular) {
    var AddGroupModule = angular.module("AddGroupModule", [
        'DataGridModule',
        'GillionPaginationModule',
        'GillionMsgModule']);

    AddGroupModule.controller("SysGroupController", function ($scope,Resource,$location,GillionMsg,GillionMsgService) {
        var addGroups = Resource("/esb-manager/user_configs/group");
        $scope.confirm=function(){
            $scope.GroupForm.verify().then(function() {
                addGroups.create($scope.group,function(response){
                    if (response.success) {
                        GillionMsgService.setOutputData(response);
                        GillionMsgService.close();
                    } else {
                        GillionMsg.alert("提示", "用户组新建失败");
                    }
                })
            })
        };
        $scope.cancel=function(){
            GillionMsgService.close();
        }

    });

});