define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout'
], function (angular, $) {
    return function ($scope, Resource, $dataSourceManager, GillionMsg, $timeout, $routeParams, $rootScope) {
        elasticLayout();

        $scope.projectName = $routeParams.projectName;

        $('#titleName').html("重试策略管理");

        var retryResource = Resource("/esb-manager/projects/:projectName/retryTimesStrategies",{
            "projectName":"@projectName"
        },{
            "save":{
                "url":"/esb-manager/projects/:projectName/retryTimesStrategies",
                "method":"POST"
            },
            "update":{
                "url":"/esb-manager/projects/:projectName/retryTimesStrategies",
                "method":"PUT"
            },
            "delete":{
                "url":"/esb-manager/projects/:projectName/retryTimesStrategies/:configName",
                "method":"DELETE"
            }
        })
        $scope.searchConfigName=""


        $scope.add = function () {
            $scope.retryConfig= {};
            $("#testModal").modal();
        }

        $scope.retryServiceParams=function () {
            return{
                "projectName":$scope.projectName
            }
        }

        $scope.search=function () {
            $dataSourceManager.dataSources["retryServiceSource"].doRequestData(1, {
                "projectName":$scope.projectName,
                "configName": $scope.searchConfigName
            });
        }



        $scope.addRetryService=function () {
            $scope.retryConfig.projectName=$scope.projectName
            retryResource.save($scope.retryConfig,function (response) {
                if (response.success){
                    GillionMsg.alert("提示", "重试策略新增成功.");
                    $scope.search();
                    $("#testModal").modal("hide");
                }
            })
        }
        $scope.updateRetry=function (row) {
            $scope.retryConfigs= _.clone(row);
            $scope.retryConfigs.projectName = $scope.projectName;
            $("#testModal2").modal();
        }
        $scope.keepRetry=function () {
            retryResource.update($scope.retryConfigs,function (response) {
                if (response.success){
                    GillionMsg.alert("提示", "修改重试策略成功.");
                    $scope.search();
                    $("#testModal2").modal("hide");
                }
            })
        }
        $scope.deleteRetry=function (row) {

            GillionMsg.confirm('提示信息', '是否删除该超时策略？', function (r) {
                if (r) {
                    retryResource.delete({projectName: $scope.projectName, configName:row.configName},function (response) {
                        if (response.success) {
                            GillionMsg.alert("提示", "删除成功.");
                            $scope.search();
                        }
                    })
                }
            })
        }
        var globalRetryResource = Resource("/esb-manager/projects/:projectName/retryTimesStrategies/global",{
            "projectName":"@projectName"
        },{
            "get":{
                "url":"/esb-manager/projects/:projectName/retryTimesStrategies/global",
                "method":"GET"
            },
            "update":{
                "url":"/esb-manager/projects/:projectName/retryTimesStrategies/global",
                "method":"PUT"
            }
        })
        $scope.edit = function () {

            globalRetryResource.get({projectName:$scope.projectName},function (response) {
                $scope.GlobalRetry=response["retryTimes"]
            })
            $("#testModal1").modal();

        }
        $scope.GlobalRetry=""
        $scope.updateGlobalRetry=function () {
            globalRetryResource.update({retryTimes:$scope.GlobalRetry,projectName: $scope.projectName },function (response) {
                if (response.success) {
                    $("#testModal1").modal('hide');
                }
            })
        }
    };
});