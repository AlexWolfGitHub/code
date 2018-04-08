define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout'
], function (angular, $) {
    return function ($scope, Resource, $dataSourceManager, GillionMsg, $timeout, $routeParams, $rootScope) {
        elasticLayout();
        $('#titleName').html("数据源管理");
        var dataSourceConfigResource = Resource("/esb-manager/projects/:projectName/dataSourceConfig", {
            "projectName": "@projectName"
        }, {
            "save": {
                "url": "/esb-manager/projects/:projectName/dataSourceConfig",
                "method": "POST"
            },
            "update": {
                "url": "/esb-manager/projects/:projectName/dataSourceConfig",
                "method": "PUT"
            },
            "delete": {
                "url": "/esb-manager/projects/:projectName/dataSourceConfig/:id",
                "method": "DELETE"
            }
        })

        $scope.dataSourceConfigParams = {
            projectName: $routeParams.projectName
        }
        $scope.searchDataSourceConfig = function () {
            $dataSourceManager.dataSources["dataSourceConfigResource"].doRequestData(1, $scope.dataSourceConfigParams);
        }

        $scope.add = function () {
            $scope.dataSourceConfigConfig = {
                projectName: $routeParams.projectName,
                projectId:$routeParams.projectId
            };
            $("#dataSourceConfigModal").modal();
        }

        var height = window.innerHeight - 86;
        $scope.searchBoxHeight = {
            "height": height,
            "min-height": height
        }

        //打开消费组编辑界面
        $scope.updateDataSourceConfig = function (row) {
            $scope.dataSourceConfigConfig = _.clone(row);
            $("#dataSourceConfigModal").modal();
        }

        //删除消费组
        $scope.deleteDataSourceConfig = function (record) {
            GillionMsg.confirm('提示信息', '是否确定删除？', function (r) {
                if (r) {
                    dataSourceConfigResource.delete({
                        projectName: record.projectName,
                        id: record.id
                    }, function (response) {
                        if (response.success) {
                            $scope.searchDataSourceConfig();
                        }else{
                            GillionMsg.alert("删除失败")
                        }
                    })
                }
            })
        }

        $scope.save = function () {
            //编辑消费组信息
            if ($scope.dataSourceConfigConfig.id) {
                dataSourceConfigResource.update($scope.dataSourceConfigConfig, function (response) {
                        if (response.success) {
                            $("#dataSourceConfigModal").modal('hide');
                            $scope.searchDataSourceConfig();
                        }
                    }
                )
            } else {//新增消费组
                dataSourceConfigResource.save($scope.dataSourceConfigConfig, function (response) {
                    if (response.success) {
                        $("#dataSourceConfigModal").modal('hide');
                        $scope.searchDataSourceConfig();
                    }
                })
            }
        }

    };
});