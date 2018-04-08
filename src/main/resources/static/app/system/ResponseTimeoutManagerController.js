define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout'
], function (angular, $) {
    return function ($scope, Resource, $dataSourceManager, GillionMsg, $timeout, $routeParams, $rootScope) {
        elasticLayout();

        $scope.projectName = $routeParams.projectName;

        $('#titleName').html("超时管理");


        var timeoutResource = Resource("/esb-manager/projects/:projectName/responseTimeoutStrategies",{
            "projectName":"@projectName"
        },{
            "save":{
                "url":"/esb-manager/projects/:projectName/responseTimeoutStrategies",
                "method":"POST"
            },
            "update":{
                "url":"/esb-manager/projects/:projectName/responseTimeoutStrategies",
                "method":"PUT"
            },
            "delete":{
                "url":"/esb-manager/projects/:projectName/responseTimeoutStrategies/:configName",
                "method":"DELETE"
            }
        })
        $scope.searchConfigName=""


        $scope.add = function () {
            $scope.responseTimeoutConfig= {};
            $("#testModal").modal();
        }

        $scope.timeoutServiceParams=function () {
            return{
                "projectName":$scope.projectName
            }
        }

        $scope.search=function () {
            $dataSourceManager.dataSources["timeoutServiceSource"].doRequestData(1, {
                "projectName":$scope.projectName,
                "configName": $scope.searchConfigName
            });
        }



        $scope.addTimeoutService=function () {
            $scope.responseTimeoutConfig.projectName=$scope.projectName
            timeoutResource.save($scope.responseTimeoutConfig,function (response) {
                if (response.success){
                    GillionMsg.alert("提示", "超时策略新增成功.");
                    $scope.search();
                    $("#testModal").modal("hide");
                }
            })
        }
        $scope.updateTimeout=function (row) {
            $scope.timeoutConfig = _.clone(row);
            $scope.timeoutConfig.projectName = $scope.projectName;
            $("#testModal2").modal();
        }
        $scope.keepTimeout=function () {
            timeoutResource.update($scope.timeoutConfig,function (response) {
                if (response.success){
                    GillionMsg.alert("提示", "修改超时策略成功.");
                    $scope.search();
                    $("#testModal2").modal("hide");
                }
            })
        }
        $scope.deleteTimeout=function (row) {

            GillionMsg.confirm('提示信息', '是否删除该超时策略？', function (r) {
                if (r) {
                    timeoutResource.delete({projectName: $scope.projectName, configName:row.configName},function (response) {
                        if (response.success) {
                            $scope.search();
                        }
                    })
                }
            })
        }
        var globalTimeoutResource = Resource("/esb-manager/projects/:projectName/responseTimeoutStrategies/global",{
            "projectName":"@projectName"
        },{
            "get":{
                "url":"/esb-manager/projects/:projectName/responseTimeoutStrategies/global",
                "method":"GET"
            },
            "update":{
                "url":"/esb-manager/projects/:projectName/responseTimeoutStrategies/global",
                "method":"PUT"
            }
        })
        $scope.edit = function () {

            globalTimeoutResource.get({projectName:$scope.projectName},function (response) {
                $scope.GlobalTimeout=response["responseTimeout"]
            })
            $("#testModal1").modal();

        }
        $scope.GlobalTimeout=""
        $scope.updateGlobalTimeout=function () {
            globalTimeoutResource.update({responseTimeout:$scope.GlobalTimeout,projectName: $scope.projectName },function (response) {
                if (response.success) {
                    $("#testModal1").modal('hide');
                }
            })
        }
    };
});