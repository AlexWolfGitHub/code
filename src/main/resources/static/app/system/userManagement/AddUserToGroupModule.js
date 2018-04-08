/**
 * Created by guosc on 2016/10/25 0025.
 */
define(["angular",
    'framework/dataGrid/DataGridModule',
    'framework/pagination/GillionPaginationModule',
    'framework/msg/GillionMsgModule',
    'framework/groupDataSource/GroupDataSourceModule'
], function (angular) {
    var AddUserToGroupModule = angular.module("AddUserToGroupModule", [
        'DataGridModule',
        'GillionPaginationModule',
        'GillionMsgModule',
        'GroupDataSourceModule']);

    AddUserToGroupModule.controller("SysGroupController", function ($scope, Resource, $location, GillionMsg, GillionMsgService, $http) {
        var groupUserRoles = Resource("/esb-manager/user_configs", {}, {
            "createByList": {
                "method": "POST",
                "url": "/esb-manager/user_configs/usersGroupIds/:groupId"
            }

        });
        $scope.groupId = GillionMsgService.getInputData();
        $http({
            url: "/esb-manager/user_configs/groupuser",
            method: "GET",
            params: {
                groupId: $scope.groupId
            }
        }).success(function (resp) {
            $scope.users = resp;
        });
        var checkRows = document.getElementsByName("checkbox");
        var checks = [];
        $scope.confirm = function () {

            for (var i = 0; i < checkRows.length; i++) {
                if (checkRows[i].checked) {
                    checks.push(checkRows[i].value)
                }
            }
            if (checks.length == 0) {
                GillionMsg.alert("提示", "没有选择用户.");
            } else {
                var arr = [];
                for (var i = 0; i < checks.length; i++) {
                    var userId = checks[i];
                    arr.push(userId);
                }
                groupUserRoles.createByList({groupId: $scope.groupId},arr, function (response) {
                    if (response.success) {
                        GillionMsgService.setOutputData({success: true});
                        GillionMsgService.close();
                    } else {
                        GillionMsg.alert("提示", "加入失败.");
                    }
                })
            }

        };
        $scope.cancel = function () {
            GillionMsgService.close();
        }
    });

});