define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout'
], function (angular, $) {
    return function ($scope, Resource, $dataSourceManager, GillionMsg, $timeout, $routeParams, $rootScope) {
        elasticLayout();
        $('#titleName').html("服务组管理");
        var serviceGroupResource = Resource("/esb-manager/projects/:projectName/serviceGroup", {
            "projectName": "@projectName"
        }, {
            "save": {
                "url": "/esb-manager/projects/:projectName/serviceGroup",
                "method": "POST"
            },
            "update": {
                "url": "/esb-manager/projects/:projectName/serviceGroup",
                "method": "PUT"
            },
            "delete": {
                "url": "/esb-manager/projects/:projectName/serviceGroup/:groupId",
                "method": "DELETE"
            }
        })

        $scope.serviceGroupParams = {
            projectName: $routeParams.projectName
        };

        $scope.searchServiceGroup = function () {
            $dataSourceManager.dataSources["serviceGroupResource"].doRequestData($dataSourceManager.dataSources["serviceGroupResource"].currentPage, $scope.serviceGroupParams);
        }

        $scope.add = function () {
            $scope.serviceGroupConfig = {
                projectName: $routeParams.projectName
            };
            $("#serviceGroupModal").modal();
        }

        var height = window.innerHeight - 86;
        $scope.searchBoxHeight = {
            "height": height,
            "min-height": height
        }

        //打开服务组编辑界面
        $scope.updateServiceGroup = function (row) {
            $scope.serviceGroupConfig = _.clone(row);
            $scope.serviceGroupConfig.projectName = $routeParams.projectName;
            $("#serviceGroupModal").modal();
        }

        //删除项目
        $scope.deleteServiceGroup = function (record) {
            GillionMsg.confirm('提示信息', '是否注销该服务组？', function (r) {
                if (r) {
                    serviceGroupResource.delete({
                        projectName: record.projectName,
                        groupId: record.id
                    }, function (response) {
                        if (response.success) {
                            $scope.searchServiceGroup();
                        }
                    })
                }
            })
        }

        $scope.save = function () {
            //编辑服务组信息
            if ($scope.serviceGroupConfig.id) {
                serviceGroupResource.update($scope.serviceGroupConfig, function (response) {
                    if (response.success) {
                        $("#serviceGroupModal").modal('hide');
                        $scope.searchServiceGroup();
                    }
                })
            } else {//新增项目
                serviceGroupResource.save($scope.serviceGroupConfig, function (response) {
                    if (response.success) {
                        $("#serviceGroupModal").modal('hide');
                        $scope.searchServiceGroup();
                    }
                })
            }

        }
    };
});