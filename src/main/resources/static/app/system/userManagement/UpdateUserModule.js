/**
 * Created by guosc on 2016/10/20 0020.
 */
define(["angular",
    'framework/dataGrid/DataGridModule',
    'framework/pagination/GillionPaginationModule',
    'framework/msg/GillionMsgModule'
],function (angular) {
    var updateUserModule = angular.module("UpdateUserModule", [
        'DataGridModule',
        'GillionPaginationModule',
        'GillionMsgModule']);

    updateUserModule.controller("updateUser", function ($scope,Resource,GillionMsgService,GillionMsg) {
        $scope.user= GillionMsgService.getInputData();
        var users = Resource("/esb-manager/user_configs/user");
        $scope.confirm=function(){
            users.update($scope.user,function(response){
                if (response.success) {
                    GillionMsgService.setOutputData({success:true});
                    GillionMsgService.close();
                } else {
                    GillionMsg.alert("提示", "修改失败");
                }
            })
        }
        $scope.cancel=function(){
            GillionMsgService.close();
        }

    });
    return updateUserModule;
});