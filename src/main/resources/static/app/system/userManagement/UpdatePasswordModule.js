/**
 * Created by guosc on 2016/11/10 0010.
 */
define(["www/bower_components/angular/angular",
    "framework/utils/JSONPrettyFormat",
    'framework/dataGrid/DataGridModule',
    'framework/pagination/GillionPaginationModule',
    'framework/msg/GillionMsgModule'
],function (angular, JSONPrettyFormat) {
    var UpdatePasswordModule = angular.module("UpdatePasswordModule", [
        'DataGridModule',
        'GillionPaginationModule',
        'GillionMsgModule']);

    UpdatePasswordModule.controller("UpdatePassword", function ($scope,Resource,GillionMsgService,GillionMsg) {
        $scope.user= GillionMsgService.getInputData();
        var accounts = Resource("/grule-manager/user/account");
        $scope.confirm=function(){
            if($scope.user.newPassword==null||$scope.user.oldPassword==null){
                GillionMsg.alert("提示", "请输入完整");
            }else{
                if($scope.user.newPassword!=$scope.user.next){
                    GillionMsg.alert("提示", "两次输入的密码不一致，请重输");
                }
                else{
                    accounts.update($scope.user,function(response){
                        if (response.success) {
                            GillionMsgService.setOutputData({success:true})
                            GillionMsgService.close();
                        }
                    })
                }
            }

        }
        $scope.cancel=function(){
            GillionMsgService.close();
        }

    });

});