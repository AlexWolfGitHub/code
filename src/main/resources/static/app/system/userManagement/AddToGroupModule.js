/**
 * Created by guosc on 2016/10/25 0025.
 */
define(["angular",
    'framework/dataGrid/DataGridModule',
    'framework/pagination/GillionPaginationModule',
    'framework/msg/GillionMsgModule',
    'framework/groupDataSource/GroupDataSourceModule'
],function (angular) {
    var AddToGroupModule = angular.module("AddToGroupModule", [
        'DataGridModule',
        'GillionPaginationModule',
        'GillionMsgModule',
        'GroupDataSourceModule']);

    AddToGroupModule.controller("SysGroupController", function ($scope,Resource,$location,GillionMsg,GillionMsgService,$http) {
        $scope.user= GillionMsgService.getInputData();
        var groupUserRoles=Resource("/esb-manager/user_configs",{},{
            "addToGroup": {
                "method": "POST",
                "url": "/esb-manager/user_configs/usersGroupIds/:userId"
            }
        });
        $http({
            url:"/esb-manager/user_configs/othergroup",
            method:"GET",
            params:{
                userId:$scope.user.id
            }
        }).success(function (resp) {
            $scope.groups=resp;
        });
        $scope.groupUserRole={
        };
        var checkRows = document.getElementsByName("checkbox");
        var checks=[];
        $scope.groupUserRole.userId=$scope.user.id;
        $scope.confirm=function(){
            for(var i=0;i<checkRows.length;i++){
                if(checkRows[i].checked){
                    checks.push(checkRows[i].value)
                }
            }
            if(checks.length==0){
                GillionMsg.alert("提示", "没有选择用户组.");
            }else{
                var arr=[];
                for(var i=0;i<checks.length;i++){

                    var groupId = checks[i];
                    arr.push(groupId);
                }


                groupUserRoles.addToGroup({userId:$scope.groupUserRole.userId},arr,function(response){
                    if (response.success) {
                        GillionMsgService.setOutputData({success:true});
                        GillionMsgService.close();
                    } else {
                        GillionMsg.alert("提示", "加入失败.");
                    }
                })
            }

        };
        $scope.cancel=function(){
            GillionMsgService.close();
        }
    });

});