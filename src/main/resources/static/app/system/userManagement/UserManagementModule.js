define(["www/bower_components/angular/angular",
    "framework/utils/JSONPrettyFormat",
    'framework/dataGrid/DataGridModule',
    'framework/pagination/GillionPaginationModule',
    'framework/msg/GillionMsgModule',
    'framework/groupDataSource/GroupDataSourceModule'
],function (angular, JSONPrettyFormat) {
    var UserManagementModule = angular.module("UserManagementModule", [
        'DataGridModule',
        'GillionPaginationModule',
        'GillionMsgModule',
        'GroupDataSourceModule'
    ]);

    UserManagementModule.controller("SysUserController", function ($scope, Resource, $location, GillionMsg, $dataSourceManager,$http) {
        var users = Resource("/grule-manager/user/:id", {
            id: "@id"
        });
        var groupUserRoles=Resource("/grule-manager/groupUserRole/:id", {
            id: "@id"
        });
        var groupUserRoles2=Resource("/grule-manager/groupUserRole");
        var groupid;
        $scope.groups={};
        $scope.groupId={};
        $scope.all=true;
        $scope.groupUser=false;
        $scope.add = function () {
            GillionMsg.showUrl({
                title: '新建用户',
                url: '/html2/userManagement/addUser',
                width: 400,
                height: 400,
                onClose: function (data) {
                    if (data=="success") {
                        GillionMsg.alert("提示", "用户新建成功");
                        $dataSourceManager.dataSources["UserSource"].doRequestData();
                    }
                }
            });
        };
        $scope.addGroup = function () {
            GillionMsg.showUrl({
                title: '新建',
                url: '/html2/userManagement/addGroup',
                width: 400,
                height: 400,
                onClose: function (data) {
                    if (data.id!=null) {
                        GillionMsg.alert("提示", "项目组新建成功", function () {
                            $scope.$apply(function () {
                                $scope.groups.push(data);
                            });
                        });
                    }
                }
            });

        };
        $scope.remove = function (row) {
            GillionMsg.confirm('提示信息', '是否确定删除？', function (r) {
                if (r) {
                    users.remove(row, function (result) {
                        if (result.success) {
                            GillionMsg.alert("提示", "用户删除成功.");
                            $dataSourceManager.dataSources["UserSource"].doRequestData();
                        } else {
                            GillionMsg.alert("提示", "用户删除失败.");
                        }
                    })
                    groupUserRoles.remove(row);
                }
            })
        };
        $scope.searchUser = function () {
            var params = angular.extend($scope.search);
            $dataSourceManager.dataSources["UserSource"].doRequestData(1, params);
        };

        $scope.update = function (row) {
            GillionMsg.showUrl({
                title: '修改账号资料',
                url: '/html2/userManagement/updateUser',
                width: 400,
                height: 400,
                data: row,
                onClose: function (data) {
                    if (data = "success") {
                        $dataSourceManager.dataSources["UserSource"].doRequestData();
                    }
                }
            });

        };

        $scope.delete = function () {
            GillionMsg.confirm('提示信息', '是否确定删除？', function (r) {
                if (r) {
                    var arr = [];
                    for (var i = 0; i < $scope.empCheckedRows.length; i++) {
                        arr.push($scope.empCheckedRows[i].id);
                    }
                    $http({
                        method:'DELETE',
                        url:"/grule-manager/user/",
                        params: {
                            ids: arr
                        }
                    }).success(function(response) {
                        if (response.success) {
                            GillionMsg.alert("提示", "用户删除成功.");
                            $dataSourceManager.dataSources["UserSource"].doRequestData();
                        } else {
                            GillionMsg.alert("提示", "用户删除失败.");
                        }
                    })
                }
            })
        };

        $scope.addToGroup=function(){
            if($scope.empCheckedRows.length==1){
                GillionMsg.showUrl({
                    title: '加入用户组',
                    url: '/html2/userManagement/addToGroup',
                    width: 400,
                    height: 400,
                    data:$scope.empCheckedRows[0]
                });
            }else if($scope.empCheckedRows.length==0){
                GillionMsg.alert("提示", "未选定！");
            }else{
                GillionMsg.alert("提示", "不能选定多个！");
            }

        };
        $http({
            method:'GET',
            url:"/grule-manager/group/groups"
        }).success(function(resp){
            $scope.groups = resp;
        });

        $scope.selectGroup= function (group) {
            $scope.all=false;
            $scope.groupParams = {
                groupId:group.id
            };
            $scope.groupId=group.id;
            $scope.groupName=group.groupName;
            $scope.groupUser=true;
            groupid=group.id;
            $dataSourceManager.dataSources["GroupUserSource"].doRequestData(1,$scope.groupParams);
        };

        $scope.selectAll= function () {
            $scope.all=true;
            $scope.groupUser=false;
            $dataSourceManager.dataSources["GroupUserSource"].doRequestData();
        };


        //项目组
        $scope.addUserToGroup= function () {
            GillionMsg.showUrl({
                title: '选择要加入的用户',
                url: '/html2/userManagement/addUserToGroup',
                width: 400,
                height: 400,
                data:groupid,
                onClose: function (data) {
                    if (data = "success") {
                        $dataSourceManager.dataSources["GroupUserSource"].doRequestData();
                    }
                }
            });
        }
        $scope.remove2 = function (row) {
            GillionMsg.confirm('提示信息', '是否确定删除？', function (r) {
                if (r) {
                    groupUserRoles2.remove(row, function (result) {
                        if (result.success) {
                            GillionMsg.alert("提示", "用户已从该组删除.");
                            $dataSourceManager.dataSources["GroupUserSource"].doRequestData();
                        } else {
                            GillionMsg.alert("提示", "删除失败.");
                        }
                    })
                }
            })
        };

        $scope.delete2 = function () {
            GillionMsg.confirm('提示信息', '是否确定删除？', function (r) {
                if (r) {
                    var arr = [];
                    for (var i = 0; i < $scope.empCheckedRows2.length; i++) {
                        arr.push($scope.empCheckedRows2[i].userId);
                    }
                    $http({
                        method:'DELETE',
                        url:"/grule-manager/groupUserRole/ids",
                        params: {
                            ids: arr,
                            groupId:$scope.groupId
                        }
                    }).success(function(response) {
                        if (response.success) {
                            GillionMsg.alert("提示", "用户删除成功.");
                            $dataSourceManager.dataSources["GroupUserSource"].doRequestData();
                        } else {
                            GillionMsg.alert("提示", "用户删除失败.");
                        }
                    })
                }
            })
        };

        $scope.searchUser2 = function () {
            var params2 = angular.extend($scope.search2);
            $dataSourceManager.dataSources["GroupUserSource"].doRequestData(1, params2);
        };

        $scope.update2 = function (row) {
            GillionMsg.showUrl({
                title: '添加角色',
                url: '/html2/userManagement/addRole',
                width: 400,
                height: 400,
                data: row,
                onClose: function (data) {
                    if (data = "success") {
                        $dataSourceManager.dataSources["GroupUserSource"].doRequestData();
                    }
                }
            });

        };

        $scope.deleteGroup=function(groups,index,group){
            GillionMsg.confirm('提示信息', '是否确定删除？', function (r) {
                if (r) {
                    groups.splice(index,1);
                    Resource("/grule-manager/group").remove(group,function (result) {
                        if (result.success) {
                            GillionMsg.alert("提示", "用户组删除成功.");
                            $scope.all=true;
                            $scope.groupUser=false;
                        } else {
                            GillionMsg.alert("提示", "用户组删除失败.");
                        }
                    })
                }
            })
        }

    });
});

