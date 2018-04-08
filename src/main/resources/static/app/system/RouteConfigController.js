define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout'
], function (angular, $) {
    return function ($scope, Resource, $dataSourceManager, GillionMsg, $timeout, $routeParams, $rootScope) {
        elasticLayout();
        $('#titleName').html("服务路由管理");
        var routeConfigResource = Resource("/esb-manager/projects/:projectName/routeConfig", {
            "projectName": "@projectName"
        }, {
            "save": {
                "url": "/esb-manager/projects/:projectName/routeConfig",
                "method": "POST"
            },
            "update": {
                "url": "/esb-manager/projects/:projectName/routeConfig",
                "method": "PUT"
            },
            "delete": {
                "url": "/esb-manager/projects/:projectName/routeConfig/:id",
                "method": "DELETE"
            }
        })

        $scope.routeConfigParams = {
            projectName: $routeParams.projectName
        }
        $scope.searchRouteConfig = function () {
            $dataSourceManager.dataSources["routeConfigResource"].doRequestData(1, $scope.routeConfigParams);
        }

        $scope.add = function () {
            $scope.routeConfigConfig = {
                projectName: $routeParams.projectName,
                projectId:$routeParams.projectId
            };
            $("#routeConfigModal").modal();
        }

        var height = window.innerHeight - 86;
        $scope.searchBoxHeight = {
            "height": height,
            "min-height": height
        }

        //打开消费组编辑界面
        $scope.updateRouteConfig = function (row) {
            $scope.routeConfigConfig = _.clone(row);
            $("#routeConfigModal").modal();
        }

        //删除消费组
        $scope.deleteRouteConfig = function (record) {
            GillionMsg.confirm('提示信息', '是否确定删除？', function (r) {
                if (r) {
                    routeConfigResource.delete({
                        projectName: record.projectName,
                        id: record.id
                    }, function (response) {
                        if (response.success) {
                            $scope.searchRouteConfig();
                        }else{
                            GillionMsg.alert("删除失败")
                        }
                    })
                }
            })
        }

        $scope.save = function () {
            //编辑消费组信息
            if ($scope.routeConfigConfig.id) {
                routeConfigResource.update($scope.routeConfigConfig, function (response) {
                        if (response.success) {
                            $("#routeConfigModal").modal('hide');
                            $scope.searchRouteConfig();
                        }
                    }
                )
            } else {//新增消费组
                routeConfigResource.save($scope.routeConfigConfig, function (response) {
                    if (response.success) {
                        $("#routeConfigModal").modal('hide');
                        $scope.searchRouteConfig();
                    }
                })
            }
        }

    };
});