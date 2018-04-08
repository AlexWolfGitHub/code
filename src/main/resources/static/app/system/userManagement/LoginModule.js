/**
 * Created by guosc on 2016/11/4 0004.
 */
define(["angular",
    "framework/utils/JSONPrettyFormat",
    'framework/dataGrid/DataGridModule',
    'framework/pagination/GillionPaginationModule',
    'framework/msg/GillionMsgModule'
],function (angular, JSONPrettyFormat) {
    var LoginModule = angular.module("LoginModule", [
        'DataGridModule',
        'GillionPaginationModule',
        'GillionMsgModule'
    ]);

    LoginModule.controller("LoginController", function ($scope, Resource,GillionMsg) {
        var logins = Resource("/esb-manager/user_configs/session")
        $scope.login = function () {
            logins.create(JSON.stringify($scope.user), function (result) {
                $scope.user.userId=result.userId;
                if ($scope.user.userId!=null) {
                    var arr=new Array();
                   var url=window.location.href;
                    arr=url.split("?")
                    if(arr.length>1){
                        window.location.href=arr[1];
                    }else{
                        window.location.href="/html/index";
                    }
                }
            })
        };

        $scope.myKeyup = function(e){
            var keycode = window.event?e.keyCode:e.which;
            if(keycode==13){
                $scope.login();
            }
        };
    });
});


