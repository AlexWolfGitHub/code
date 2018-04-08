define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout'
], function (angular, $) {
    return function ($scope, Resource, $dataSourceManager, GillionMsg, $timeout, $routeParams, $rootScope) {
        elasticLayout();
        $('#titleName').html("项目管理");
        var projectResource = Resource("/esb-manager/projectManager", {}, {
            "save": {
                "url": "/esb-manager/projectManager",
                "method": "POST"
            },
            "update": {
                "url": "/esb-manager/projectManager",
                "method": "PUT"
            },
            "delete": {
                "url": "/esb-manager/projectManager/:projectName",
                "method": "DELETE"
            }
        })

        $scope.projectParams = {}
        $scope.searchProject = function () {
            $dataSourceManager.dataSources["projectResource"].doRequestData($dataSourceManager.dataSources["projectResource"].currentPage, $scope.projectParams);
        }

        $scope.add = function () {
            $scope.projectConfig = {};
            $("#projectModal").modal();
        }

        var height = window.innerHeight - 86;
        $scope.searchBoxHeight = {
            "height": height,
            "min-height": height
        }

        //打开项目编辑界面
        $scope.updateProject = function (row) {
            $scope.projectConfig = _.clone(row);
            $("#projectModal").modal();
        }

        //删除项目
        $scope.deleteProject = function (record) {
            GillionMsg.confirm('提示信息', '是否注销该项目？', function (r) {
                if (r) {
                    projectResource.delete({projectName: record.projectName}, function (response) {
                        if (response.success) {
                            $scope.searchProject();
                        }
                    })
                }
            })
        }

        $scope.save = function () {
            //编辑项目信息
            if ($scope.projectConfig.id) {
                projectResource.update($scope.projectConfig, function (response) {
                    if (response.success) {
                        $("#projectModal").modal('hide');
                        $scope.searchProject();
                    }
                })
            } else {//新增项目
                projectResource.save($scope.projectConfig, function (response) {
                    if (response.success) {
                        $("#projectModal").modal('hide');
                        $scope.searchProject();
                    }
                })
            }
        }
    };
});