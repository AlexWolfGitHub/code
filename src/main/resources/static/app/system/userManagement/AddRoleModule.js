/**
 * Created by guosc on 2016/10/25 0025.
 */
define(["www/bower_components/angular/angular",
    "framework/utils/JSONPrettyFormat",
    'framework/dataGrid/DataGridModule',
    'framework/pagination/GillionPaginationModule',
    'framework/msg/GillionMsgModule',
    'framework/groupDataSource/GroupDataSourceModule'
],function (angular, JSONPrettyFormat) {
    var AddRoleModule = angular.module("AddRoleModule", [
        'DataGridModule',
        'GillionPaginationModule',
        'GillionMsgModule',
        'GroupDataSourceModule']);

    AddRoleModule.controller("SysRoleController", function ($scope,Resource,$location,GillionMsg,GillionMsgService,$http,Arrays) {
        var groupUserRoles=Resource("/grule-manager/groupUserRole");
        $scope.user= GillionMsgService.getInputData();
        $scope.userParams = {
            userId:$scope.user.userId,
            groupId:$scope.user.groupId
        };
        $http({
            method:'GET',
            url:"/grule-manager/role",
            params:$scope.userParams
        }).success(function(resp){
            $scope.roleId=Arrays.extract(resp, 'id');
        });

        $scope.items = [{key:'超级管理员', value:1},{key:'普通用户',value:2}];
        $scope.groupUserRole={
        };
        $scope.groupUserRole.userId=$scope.user.id;
        $scope.confirm=function(){
            var arr=[], row;
            if($scope.roleId.length==0){
                row = {};
                row.groupId = $scope.user.groupId;
                row.userId = $scope.user.userId;
                row.roleId=null;
                arr.push(row);
            }else {
                for (var i = 0; i < $scope.roleId.length; i++) {
                    row = {};
                    row.groupId = $scope.user.groupId;
                    row.userId = $scope.user.userId;
                    row.roleId = $scope.roleId[i];
                    arr.push(row);
                }
            }
                groupUserRoles.update(arr,function(response){
                    if (response.success) {
                        GillionMsg.alert("提示", "角色修改成功.");
                        GillionMsgService.close();
                    } else {
                        GillionMsg.alert("提示", "角色修改失败.");
                    }
                })

        };
        $scope.cancel=function(){
            GillionMsgService.close();
        }
    });

});