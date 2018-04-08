define([
        'angular',
        'jquery',
        'bootstrap',
        'system/elasticLayout'
    ], function (angular, $) {
        return function ($scope, $http, Resource, $dataSourceManager, GillionMsg, $timeout, $routeParams, $rootScope) {
            elasticLayout();
            $scope.projectName = $routeParams.projectName;
            $('#titleName').html("用户管理");
            var userResource = Resource("/esb-manager/user_configs", {}, {
                "get": {
                    "url": "/esb-manager/user_configs",
                    "method": "GET"
                },
                "save": {
                    "url": "/esb-manager/user_configs",
                    "method": "POST"
                },
                "update": {
                    "url": "/esb-manager/user_configs/user",
                    "method": "PUT"
                },
                "delete": {
                    "url": "/esb-manager/user_configs/user/:id",
                    "method": "DELETE"
                },
                "deleteMutiUser": {
                    "url": "/esb-manager/user_configs/userIds",
                    "method": "POST"
                }
            })

            $scope.searchUser = function () {
                $dataSourceManager.dataSources["userResource"].doRequestData($dataSourceManager.dataSources["userResource"].currentPage, $scope.userParams);
            }

            $('#userTab li:first').tab('show');
            $('#userTab li').click(function (e) {
                e.preventDefault();
                $(this).tab('show');
            })

            $scope.add = function () {
                $scope.userConfig = {};
                $("#userModal").modal();
            }

            var height = window.innerHeight + 600;
            $scope.searchBoxHeight = {
                "height": height,
                "min-height": height
            }

            //打开用户编辑界面
            $scope.updateUser = function (row) {
                $scope.userConfig = _.clone(row);
                $scope.userConfig.passWord = null;
                $scope.userConfig.confirmPassWord = null;
                $("#userModal").modal();
            }

            //删除用户
            $scope.deleteUser = function (record) {
                GillionMsg.confirm('提示信息', '是否确定删除？', function (r) {
                    if (r) {
                        userResource.delete({id: record.id}, function (response) {
                            if (response.success) {
                                $scope.searchUser();
                            }
                        })
                    }
                })
            }

            $scope.empCheckedRows1 = {};

            $scope.addToUserGroup = function () {
                if ($scope.empCheckedRows1.length > 1) {
                    GillionMsg.alert("提示", "不能选定多个.");
                    return;
                }
                if ($scope.empCheckedRows1.length < 1) {
                    GillionMsg.alert("提示", "请选定用户.");
                    return;
                }
                $http({
                    method: "GET",
                    url: "/esb-manager/user_configs/othergroup",
                    params: {
                        userId: $scope.empCheckedRows1[0].id
                    }
                }).success(function (response) {
                    $scope.otherGroup = response;
                });
                $("#addUserSelectGroupModal").modal();
            }

            var checkRows2 = document.getElementsByName("checkbox2");
            var checks2 = [];
            $scope.saveUserSelectGroup = function () {
                for (var i = 0; i < checkRows2.length; i++) {
                    if (checkRows2[i].checked) {
                        checks2.push(checkRows2[i].value)
                    }
                }
                if (checks2.length == 0) {
                    GillionMsg.alert("提示", "没有选择用户组.");
                } else {
                    var arr = [];
                    arr.push($scope.empCheckedRows1[0].id);
                    for (var j = 0; j < checks2.length; j++) {
                        userGroupResource.save({groupId: checks2[j]}, arr, function (response) {
                            if (response.success) {
                            } else {
                                GillionMsg.alert("提示", "用户添加至用户组失败.");
                                return;
                            }
                        })
                    }
                    $("#addUserSelectGroupModal").modal('hide');
                }
            }

            //删除用户
            $scope.deleteMutiUser = function () {
                if ($scope.empCheckedRows1.length < 1) {
                    GillionMsg.alert("提示", "请选定用户");
                    return;
                }

                GillionMsg.confirm('提示信息', '是否确定删除？', function (r) {
                    if (r) {
                        var arr = [];
                        for (var i = 0; i < $scope.empCheckedRows1.length; i++) {
                            arr.push($scope.empCheckedRows1[i].id);
                        }
                        userResource.deleteMutiUser(arr, function (response) {
                            if (response.success) {
                                $scope.searchUser();
                            }
                        })
                    }
                })
            }

            $scope.save = function () {

                if ($scope.userConfig.userName == null || $scope.userConfig.userName == "") {
                    GillionMsg.alert("提示", "请输入用户名.");
                    return;
                }

                if ($scope.userConfig.email == null || $scope.userConfig.email == "") {
                    GillionMsg.alert("提示", "请输入邮箱.");
                    return;
                }


                if ($scope.userConfig.passWord == "" || $scope.userConfig.confirmPassWord == "" || $scope.userConfig.passWord == null || $scope.userConfig.confirmPassWord == null) {
                    GillionMsg.alert("提示", "请输入密码或确认密码.");
                    return;
                }

                if ($scope.userConfig.passWord != $scope.userConfig.confirmPassWord) {
                    GillionMsg.alert("提示", "两次密码不一致.");
                    $scope.userConfig.passWord = null;
                    $scope.userConfig.confirmPassWord = null;
                    return;
                }

                //编辑用户信息
                if ($scope.userConfig.id) {
                    userResource.update($scope.userConfig, function (response) {
                        if (response.success) {
                            $("#userModal").modal('hide');
                            $scope.searchUser();
                        }
                    })
                } else {//新增用户
                    userResource.save($scope.userConfig, function (response) {
                        if (response.success) {
                            $("#userModal").modal('hide');
                            $scope.searchUser();
                        }
                    })
                }
            }

            var groupResource = Resource("/esb-manager/user_configs/group", {}, {
                "get": {
                    "url": "/esb-manager/user_configs/group",
                    "method": "GET"
                },
                "save": {
                    "url": "/esb-manager/user_configs/group",
                    "method": "POST"
                },
                "update": {
                    "url": "/esb-manager/user_configs/group",
                    "method": "PUT"
                },
                "delete": {
                    "url": "/esb-manager/user_configs/group/:groupId",
                    "method": "DELETE"
                }
            })

            $scope.getGroups = function () {
                groupResource.get(function (response) {
                    if (response.success) {
                        $scope.userGroups = response.data;
                        $scope.searchUserGroup($scope.userGroups[0].id);
                    }
                });
            }

            $scope.addGroup = function () {
                $scope.groupConfig = {};
                $("#groupModal").modal();
            }

            $scope.updateGroup = function (row) {
                $scope.groupConfig = _.clone(row);
                $("#groupModal").modal();
            }

            $scope.groupSave = function () {

                if ($scope.groupConfig.groupName == null || $scope.groupConfig.groupName == "") {
                    GillionMsg.alert("提示", "请输入用户组名.");
                    return;
                }

                if ($scope.groupConfig.groupCode == null || $scope.groupConfig.groupCode == "") {
                    GillionMsg.alert("提示", "请输入用户组编码.");
                    return;
                }

                if ($scope.groupConfig.id) {
                    groupResource.update($scope.groupConfig, function (response) {
                        if (response.success) {
                            $scope.getGroups();
                        } else {
                            GillionMsg.alert("提示", "用户组修改失败.");
                        }
                    });
                } else {
                    groupResource.save($scope.groupConfig, function (response) {
                        if (response.success) {
                            $scope.getGroups();
                        } else {
                            GillionMsg.alert("提示", "用户组添加失败.");
                        }
                    });
                }
            }

            $scope.deleteGroup = function (id) {
                GillionMsg.confirm('提示信息', '是否确定删除？', function (r) {
                    if (r) {
                        groupResource.delete({groupId: id}, function (response) {
                            if (response.success) {
                                $scope.getGroups();
                            } else {
                                GillionMsg.alert("提示", "用户组删除失败.");
                            }
                        });
                    }
                })
            }

            var userGroupResource = Resource("/esb-manager/user_configs/usergroup", {}, {
                "save": {
                    "url": "/esb-manager/user_configs/usersGroupIds/:groupId",
                    "method": "POST"
                },
                "remove": {
                    "url": "/esb-manager/user_configs/userGroupIds/:groupId",
                    "method": "POST"
                }
            })

            $scope.searchUserGroup = function (id) {
                $scope.userGroupParams = {
                    groupId: id
                };
                $dataSourceManager.dataSources["userGroupResource"].doRequestData($dataSourceManager.dataSources["userGroupResource"].currentPage, $scope.userGroupParams);
            }

            $scope.empCheckedRows2 = {};

            $scope.insertMutiUserFromGroup = function () {
                $http({
                    method: "GET",
                    url: "/esb-manager/user_configs/groupuser",
                    params: {
                        groupId: $scope.userGroupParams.groupId
                    }
                }).success(function (response) {
                    $scope.usersNotInGroup = response;
                });
                $("#addUserToGroupModal").modal();
            }

            var checkRows = document.getElementsByName("checkbox");
            var checks = [];
            $scope.saveUserToGroupModal = function () {
                for (var i = 0; i < checkRows.length; i++) {
                    if (checkRows[i].checked) {
                        checks.push(checkRows[i].value)
                    }
                }
                if (checks.length == 0) {
                    GillionMsg.alert("提示", "请选择用户.");
                } else {
                    var arr = [];
                    for (var i = 0; i < checks.length; i++) {

                        var id = checks[i];
                        arr.push(id);
                    }
                    userGroupResource.save({groupId: $scope.userGroupParams.groupId}, arr, function (response) {
                        if (response.success) {
                            $("#addUserToGroupModal").modal('hide');
                            $scope.searchUserGroup($scope.userGroupParams.groupId);
                        } else {
                            GillionMsg.alert("提示", "用户添加至用户组失败.");
                        }
                    })
                }
            }

            $scope.deleteMutiUserFromGroup = function () {

                if ($scope.empCheckedRows2.length < 1) {
                    GillionMsg.alert("提示", "请选定用户");
                    return;
                }

                GillionMsg.confirm('提示信息', '是否确定移除？', function (r) {
                    if (r) {
                        var arr = [];
                        for (var i = 0; i < $scope.empCheckedRows2.length; i++) {
                            arr.push($scope.empCheckedRows2[i].id);
                        }
                        userGroupResource.remove({groupId: $scope.userGroupParams.groupId}, arr, function (response) {
                            if (response.success) {
                                $scope.searchUserGroup($scope.userGroupParams.groupId);
                            } else {
                                GillionMsg.alert("提示", "用户组中用户移除失败.");
                            }
                        })
                    }
                })
            };

            $scope.deleteUserFromGroup = function (id) {
                GillionMsg.confirm('提示信息', '是否确定移除？', function (r) {
                    if (r) {
                        var arr = [];
                        arr.push(id);
                        userGroupResource.remove({groupId: $scope.userGroupParams.groupId}, arr, function (response) {
                            if (response.success) {
                                $scope.searchUserGroup($scope.userGroupParams.groupId);
                            } else {
                                GillionMsg.alert("提示", "用户组中用户移除失败.");
                            }
                        })
                    }
                })
            };

        };

    }
)
;