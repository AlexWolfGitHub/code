/**
 * Created by guosc on 2016/11/10 0010.
 */
define(["www/bower_components/angular/angular",
    "framework/utils/JSONPrettyFormat",
    'framework/dataGrid/DataGridModule',
    'framework/pagination/GillionPaginationModule',
    'framework/msg/GillionMsgModule'
],function (angular, JSONPrettyFormat) {
    var AccountModule = angular.module("AccountModule", [
        'DataGridModule',
        'GillionPaginationModule',
        'GillionMsgModule']);

    AccountModule.controller("AccountController", function ($scope,Resource,GillionMsg,GillionMsgService,$http) {
        var accounts=Resource("/grule-manager/user/account");
        $http({
            method:'GET',
            url:"/grule-manager/groupUser/account"
        }).success(function(resp){
            $scope.account=resp;
        });
        $scope.read=true;
        $scope.edit=function(){
            $scope.read=false;
        };
        $scope.save=function(){
            accounts.update($scope.account,function(response){
                if(response.success){
                    GillionMsg.alert("提示","修改成功！");
                    $scope.read=true;
                }
          })
        };
        $scope.editPassword=function(){
            GillionMsg.showUrl({
                title: '修改密码',
                url: '/html2/account/updatePassword',
                width: 400,
                height: 400,
                data:$scope.account
            });
        };


    });

});