define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout'
], function (angular, $) {
    return function ($scope, Resource, $dataSourceManager, GillionMsg, $timeout, $routeParams, $rootScope) {
        elasticLayout();
        $('#titleName').html("字典管理");
        var dictConfigResource = Resource("/esb-manager/projects/:projectName/dictConfigs", {
            "projectName": "@projectName"
        }, {
            "save": {
                "url": "/esb-manager/projects/:projectName/dictConfigs",
                "method": "POST"
            },
            "update": {
                "url": "/esb-manager/projects/:projectName/dictConfigs",
                "method": "PUT"
            },
            "delete": {
                "url": "/esb-manager/projects/:projectName/dictConfigs/:id",
                "method": "DELETE"
            }
        })

        $scope.dictConfigParams = {
            projectName: $routeParams.projectName
        };

        $scope.searchDictConfig = function () {
            $dataSourceManager.dataSources["dictConfigResource"].doRequestData($dataSourceManager.dataSources["dictConfigResource"].currentPage, $scope.dictConfigParams);
        }

        $scope.add = function () {
            $scope.dictConfigConfig = {
                projectName: $routeParams.projectName,
                projectId: $routeParams.projectId,
                dictName: null,
                dictCode: null,
                dicts:null
            };
            $("#dictConfigModal").modal();
        }

        var height = window.innerHeight - 86;
        $scope.searchBoxHeight = {
            "height": height,
            "min-height": height
        }

        //打开字典编辑界面
        $scope.updateDictConfig = function (row) {
            $scope.dictConfigConfig = _.clone(row);
            $("#dictConfigModal").modal();
        }

        $scope.addDict = function () {
            if (!$scope.dictConfigConfig.dicts) {
                $scope.dictConfigConfig.dicts = [];
                $scope.dictConfigConfig.dicts.push({});

            } else {
                var items = $scope.dictConfigConfig.dicts[$scope.dictConfigConfig.dicts.length - 1];
                if (items.source != null && items.source != "" && items.target != null && items.target != "") {
                    $scope.dictConfigConfig.dicts.push({});
                }
            }
        };

        //删除字典
        $scope.deleteDictConfig = function (record) {
            GillionMsg.confirm('提示信息', '是否删除该字典？', function (r) {
                if (r) {
                    dictConfigResource.delete({projectName: record.projectName, id: record.id}, function (response) {
                        if (response.success) {
                            $scope.searchDictConfig();
                        }
                    })
                }
            })
        }

        $scope.save = function () {

            if ($scope.dictConfigConfig.dictName == null || $scope.dictConfigConfig.dictName == "") {
                GillionMsg.alert("提示", "请输入字典名.");
                return;
            }

            if ($scope.dictConfigConfig.email == null || $scope.dictConfigConfig.email == "") {
                GillionMsg.alert("提示", "请输入字典编码.");
                return;
            }

            //编辑字典信息
            if ($scope.dictConfigConfig.dicts != null) {
                var items = $scope.dictConfigConfig.dicts[$scope.dictConfigConfig.dicts.length - 1];
                for (var i = 0; i < $scope.dictConfigConfig.dicts.length-1; i++) {
                    if ($scope.dictConfigConfig.dicts[i].source == items.source) {
                        GillionMsg.alert("提示","字典项中含有相同的转换源");
                        return;
                    }
                }
            }
            if ($scope.dictConfigConfig.dicts == null||(items.source != null && items.source != "" && items.target != null && items.target != "" )) {
                if ($scope.dictConfigConfig.id) {
                    dictConfigResource.update($scope.dictConfigConfig, function (response) {
                        if (response.success) {
                            $("#dictConfigModal").modal('hide');
                            $scope.searchDictConfig();
                        }
                    })
                } else {//新增字典
                    dictConfigResource.save($scope.dictConfigConfig, function (response) {
                        if (response.success) {
                            $("#dictConfigModal").modal('hide');
                            $scope.searchDictConfig();
                        }
                    })
                }
            } else {
                GillionMsg.alert("提示", "字典项未填");
            }
        }

        $scope.deleteDictConfigItems = function (row) {
            for (var i = 0; i < $scope.dictConfigConfig.dicts.length; i++) {
                if ($scope.dictConfigConfig.dicts[i] == row) {
                    $scope.dictConfigConfig.dicts.splice(i, 1);
                    break;
                }
            }
        }

    };
});