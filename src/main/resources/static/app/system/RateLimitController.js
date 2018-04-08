define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout'
], function (angular, $) {
    return function ($scope, Resource, $dataSourceManager, GillionMsg, $timeout, $routeParams, $rootScope) {
        elasticLayout();
        $scope.projectName = $routeParams.projectName;
        $('#titleName').html("限流管理");
        var rateLimitResource = Resource("/esb-manager/projects/:projectName/rateLimitStrategies", {
            "projectName": "@projectName"
        }, {
            "save": {
                "url": "/esb-manager/projects/:projectName/rateLimitStrategies",
                "method": "POST"
            },
            "update": {
                "url": "/esb-manager/projects/:projectName/rateLimitStrategies",
                "method": "PUT"
            },
            "delete": {
                "url": "/esb-manager/projects/:projectName/rateLimitStrategies/:configName",
                "method": "DELETE"
            }
        })

        $scope.rateLimitParams = {
            projectName: $scope.projectName
        }

        $scope.searchRateLimit = function () {
            $dataSourceManager.dataSources["rateLimitResource"].doRequestData($dataSourceManager.dataSources["rateLimitResource"].currentPage, $scope.rateLimitParams);
        }

        $scope.add = function () {
            $scope.rateLimitConfig = {
                projectName: $scope.projectName
            };
            $scope.rateLimitConfig.state = false;
            $("#rateLimitModal").modal();
        }

        var height = window.innerHeight - 86;
        $scope.searchBoxHeight = {
            "height": height,
            "min-height": height
        }

        //打开限流策略编辑界面
        $scope.updateRateLimit = function (row) {
            $scope.rateLimitConfig = _.clone(row);
            $scope.rateLimitConfig.state = true;
            $scope.rateLimitConfig.projectName = $scope.projectName;
            $("#rateLimitModal").modal();
        }

        //删除限流策略
        $scope.deleteRateLimit = function (row) {
            GillionMsg.confirm('提示信息', '是否删除该限流策略？', function (r) {
                if (r) {
                    rateLimitResource.delete({
                        projectName: $scope.projectName,
                        configName: row.configName
                    }, function (response) {
                        if (response.success) {
                            $scope.searchRateLimit();
                        }
                    })
                }
            })
        }

        $scope.save = function () {
            //编辑限流策略信息
            if ($scope.rateLimitConfig.state) {
                rateLimitResource.update($scope.rateLimitConfig, function (response) {
                    if (response.success) {
                        $("#rateLimitModal").modal('hide');
                        $scope.searchRateLimit();
                    }
                })
            } else {//新增限流策略
                rateLimitResource.save($scope.rateLimitConfig, function (response) {
                    if (response.success) {
                        $("#rateLimitModal").modal('hide');
                        $scope.searchRateLimit();
                    }
                })
            }
        }

        $scope.timeUnitRef = [
            {timeUnitValue: "NANOSECONDS", timeUnitName: "纳秒"},
            {timeUnitValue: "MICROSECONDS", timeUnitName: "微秒"},
            {timeUnitValue: "MILLISECONDS", timeUnitName: "毫秒"},
            {timeUnitValue: "SECONDS", timeUnitName: "秒"},
            {timeUnitValue: "MINUTES", timeUnitName: "分"},
            {timeUnitValue: "HOURS", timeUnitName: "时"},
            {timeUnitValue: "DAYS", timeUnitName: "日"}
        ]

        var globalRateLimitResource = Resource("/esb-manager/projects/:projectName/rateLimitStrategies/global", {
            "projectName": "@projectName"
        }, {
            "get": {
                "url": "/esb-manager/projects/:projectName/rateLimitStrategies/global",
                "method": "GET"
            },
            "save": {
                "url": "/esb-manager/projects/:projectName/rateLimitStrategies/global",
                "method": "POST"
            },
            "update": {
                "url": "/esb-manager/projects/:projectName/rateLimitStrategies/global",
                "method": "PUT"
            },
            "delete": {
                "url": "/esb-manager/projects/:projectName/rateLimitStrategies/global",
                "method": "DELETE"
            }
        })

        //打开全局限流策略查看界面
        $scope.getGlobalRateLimitStrategy = function () {
            $scope.state = false;
            globalRateLimitResource.get({projectName: $scope.projectName}, function (response) {
                $scope.rateLimitConfig = response;
                $scope.rateLimitConfig.projectName = $scope.projectName;
            });
            $("#globalRateLimitModal").modal();
        }

        //打开全局限流策略设置界面
        $scope.updateGlobalRateLimitStrategy = function () {
            $scope.state = true;
            globalRateLimitResource.get({projectName: $scope.projectName}, function (response) {
                $scope.rateLimitConfig = response;
                $scope.rateLimitConfig.projectName = $scope.projectName;
            });
            $("#globalRateLimitModal").modal();
        }

        //关闭全局限流策略
        $scope.deleteGlobalRateLimitStrategy = function () {
            GillionMsg.confirm('提示信息', '是否关闭全局限流策略？', function (r) {
                if (r) {
                    globalRateLimitResource.delete({projectName: $scope.projectName})
                }
            })
        }

        $scope.saveGlobalRateLimitStrategy = function () {
            //编辑全局限流策略
            globalRateLimitResource.update($scope.rateLimitConfig, function (response) {
                if (response.success) {
                    $("#globalRateLimitModal").modal('hide');
                }
            })

        }

    };
});