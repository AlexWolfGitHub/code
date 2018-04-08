/**
 * Created by guosc on 2016/10/25 0025.
 */
define(["angular",
    'framework/dataGrid/DataGridModule',
    'framework/pagination/GillionPaginationModule',
    'framework/msg/GillionMsgModule'
],function (angular) {
    var AddUserModule = angular.module("AddUserModule", [
        'DataGridModule',
        'GillionPaginationModule',
        'GillionMsgModule']);

    AddUserModule.controller("SysUserController", function ($scope,Resource,$location,GillionMsg,GillionMsgService) {
        var addUsers = Resource("/esb-manager/user_configs");
        $scope.confirm=function(){
            $scope.UserForm.verify().then(function() {
                if($scope.user.passWord==$scope.confirmPassword){
                        addUsers.create($scope.user, function (response) {
                            if (response.success) {
                                GillionMsgService.setOutputData({success: true});
                                GillionMsgService.close();
                            }
                        })
                }else{
                    GillionMsg.alert("提示","两次输入的密码不一致");
                }
            })
        };
        $scope.cancel=function(){
            GillionMsgService.close();
        }

    });

});