define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout'
], function (angular, $) {
    return function ($scope, Resource, $dataSourceManager, GillionMsg, $timeout, $routeParams, $rootScope) {
        elasticLayout();
        $('#titleName').html("队列管理");
        var topicResource = Resource("/esb-manager/projects/:projectName/mqTopic", {
            "projectName": "@projectName"
        }, {
            "save": {
                "url": "/esb-manager/projects/:projectName/mqTopic",
                "method": "POST"
            },
            "update": {
                "url": "/esb-manager/projects/:projectName/mqTopic",
                "method": "PUT"
            },
            "delete": {
                "url": "/esb-manager/projects/:projectName/mqTopic/:topicId",
                "method": "DELETE"
            }
        })
        $scope.mqTopicParams = {
            projectName: $routeParams.projectName
        }
        $scope.searchTopic = function () {
            $dataSourceManager.dataSources["topicResource"].doRequestData($dataSourceManager.dataSources["topicResource"].currentPage, $scope.mqTopicParams);
        }

        $('#topicTab li:first').tab('show');
        $('#topicTab li').click(function (e) {
            e.preventDefault();
            $(this).tab('show');
        })

        $scope.add = function () {
            $scope.topicConfig = {
                projectName: $routeParams.projectName,
                projectId: $routeParams.projectId
            };
            $("#topicModal").modal();
        }

        var height = window.innerHeight + 600;
        $scope.searchBoxHeight = {
            "height": height,
            "min-height": height
        }

        //打开队列编辑界面
        $scope.updateTopic = function (row) {
            $scope.topicConfig = _.clone(row);
            $scope.topicConfig.projectName = $routeParams.projectName;
            $scope.topicConfig.projectId = $routeParams.projectId;
            $("#topicModal").modal();
        }

        //删除队列
        $scope.deleteTopic = function (record) {
            GillionMsg.confirm('提示信息', '是否确定删除？', function (r) {
                if (r) {
                    topicResource.delete({projectName: record.projectName, topicId: record.id}, function (response) {
                        if (response.success) {
                            $scope.searchTopic();
                        }
                    })
                }
            })
        }

        $scope.save = function () {
            //编辑队列信息
            if ($scope.topicConfig.id) {
                topicResource.update($scope.topicConfig, function (response) {
                    if (response.success) {
                        $("#topicModal").modal('hide');
                        $scope.searchTopic();
                    }
                })
            } else {//新增队列
                topicResource.save($scope.topicConfig, function (response) {
                    if (response.success) {
                        $("#topicModal").modal('hide');
                        $scope.searchTopic();
                    }
                })
            }
        }

        $scope.processingModeSource = [
            {processingMode: "SINGLE", processing: "单条消费"},
            {processingMode: "MULTITERM", processing: "批量消费"}
        ]

        $scope.concurrencyModeSource = [
            {concurrencyMode: "SEQUENCE", concurrency: "顺序模式"},
            {concurrencyMode: "CONCURRENCY", concurrency: "并发模式"}
        ]

        $scope.states = [
            {statesId: 0, statesName: "失败"},
            {statesId: 1, statesName: "等待移除"},
            {statesId: 2, statesName: "移除成功"}
        ]


        var mqMesResource = Resource("/esb-manager/projects/:projectName/mqMes", {
            "projectName": "@projectName",
            "groupName": "@groupName"
        }, {
            "groupResend": {
                "url": "/esb-manager/projects/:projectName/mqMes/group/:groupName",
                "method": "POST"
            },
            "groupRemove": {
                "url": "/esb-manager/projects/:projectName/mqMes/group/:groupName",
                "method": "PUT"
            },
            "resend": {
                "url": "/esb-manager/projects/:projectName/mqMes",
                "method": "POST"
            },
            "remove": {
                "url": "/esb-manager/projects/:projectName/mqMes",
                "method": "PUT"
            }
        })
        $scope.mqMesParams = {
            projectName: $scope.projectName
        }
        $scope.searchMqMes = function () {
            $dataSourceManager.dataSources["mqMesResource"].doRequestData(1, $scope.mqMesParams);
        }

        $scope.getMqMes = function (row) {
            $scope.mqMesConfig = _.clone(row);
            $scope.mqMesConfig.projectName = $scope.projectName;
            $("#mqMesModal").modal();
        }

        $scope.resendMes = function (id) {
            GillionMsg.confirm('提示信息', '是否确定重发？', function (r) {
                if (r) {
                    var arr = [];
                    arr.push(id);
                    mqMesResource.resend({projectName: $scope.projectName}, arr, function (response) {
                        if (response.success) {
                            $scope.searchMqMes();
                        } else {
                            GillionMsg.alert("提示", "失败消息重发失败.");
                        }
                    })
                }
            })
        };

        $scope.resendMutiMes = function () {
            GillionMsg.confirm('提示信息', '是否确定重发？', function (r) {
                if (r) {
                    var arr = [];
                    for (var i = 0; i < $scope.empCheckedRows.length; i++) {
                        arr.push($scope.empCheckedRows[i].id);
                    }
                    mqMesResource.resend({projectName: $scope.projectName}, arr, function (response) {
                        if (response.success) {
                            $scope.searchMqMes();
                        } else {
                            GillionMsg.alert("提示", "失败消息重发失败.");
                        }
                    })
                }
            })
        };

        $scope.deleteMutiMes = function () {
            GillionMsg.confirm('提示信息', '是否确定移除？', function (r) {
                if (r) {
                    var arr = [];
                    for (var i = 0; i < $scope.empCheckedRows.length; i++) {
                        arr.push($scope.empCheckedRows[i].id);
                    }
                    mqMesResource.remove({projectName: $scope.projectName}, arr, function (response) {
                        if (response.success) {
                            $scope.searchMqMes();
                        } else {
                            GillionMsg.alert("提示", "失败消息移除失败.");
                        }
                    })
                }
            })
        };

        $scope.deleteMes = function (id) {
            GillionMsg.confirm('提示信息', '是否确定移除？', function (r) {
                if (r) {
                    var arr = [];
                    arr.push(id);
                    mqMesResource.remove({projectName: $scope.projectName}, arr, function (response) {
                        if (response.success) {
                            $scope.searchMqMes();
                        } else {
                            GillionMsg.alert("提示", "失败消息移除失败.");
                        }
                    })
                }
            })
        };

        $scope.deleteGroup = function () {
            $scope.r = false;
            $("#groupModal").modal();
        };

        $scope.resendGroup = function () {
            $scope.r = true;
            $("#groupModal").modal();
        };

        $scope.groupManage = function () {
            if (!$scope.r) {
                GillionMsg.confirm('提示信息', '是否确定移除该组？', function (r) {
                    if (r) {
                        mqMesResource.groupRemove({
                            projectName: $scope.projectName,
                            groupName: $scope.groupName
                        }, function (response) {
                            if (response.success) {
                                $scope.searchMqMes();
                            } else {
                                GillionMsg.alert("提示", "该组失败消息移除失败.");
                            }
                        })
                    }
                })
            }
            else {
                GillionMsg.confirm('提示信息', '是否重发移除该组？', function (r) {
                    if (r) {
                        mqMesResource.groupResend({
                            projectName: $scope.projectName,
                            groupName: $scope.groupName
                        }, function (response) {
                            if (response.success) {
                                $scope.searchMqMes();
                            } else {
                                GillionMsg.alert("提示", "该组失败消息重发失败.");
                            }
                        })
                    }
                })
            }
        }

        $scope.mqInfoParams = {
            projectName: $routeParams.projectName
        }

    };
});