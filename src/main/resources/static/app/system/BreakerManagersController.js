define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout'
], function (angular, $) {
    return function ($scope, Resource, $dataSourceManager, GillionMsg, $timeout, $routeParams, $rootScope) {
        elasticLayout();
        $scope.projectName = $routeParams.projectName;

        $('#titleName').html("熔断管理");

        var breakerServiceResource = Resource("/esb-manager/:projectName/RPCServiceBreakManager",{
            "projectName":"@projectName"
        },{
            "save":{
                "url":"/esb-manager/:projectName/RPCServiceBreakManager",
                "method":"POST"
            },
            "update":{
                "url":"/esb-manager/:projectName/RPCServiceBreakManager",
                "method":"PUT"
            },
            "delete":{
                "url":"/esb-manager/:projectName/RPCServiceBreakManager/:configName",
                "method":"DELETE"
            }
        })
        $scope.add = function () {
            $scope.breakerConfig={}
            $("#testModal").modal();
        }
        $scope.edit = function () {
            $("#testModal1").modal();
        }
        $scope.breakerServiceParams=function () {
            return{
                "projectName":$scope.projectName
            }
        }
        $scope.search=function () {
            $dataSourceManager.dataSources["breakerServiceSource"].doRequestData(1, {
                "projectName":$scope.projectName,
                "configName": $scope.searchConfigName
            });
        }



        $scope.addBreakerService=function () {
            $scope.breakerConfig.projectName=$scope.projectName
            breakerServiceResource.save($scope.breakerConfig,function (response) {
                if (response.success){
                    GillionMsg.alert("提示", "熔断策略新增成功.");
                    $scope.search();
                    $("#testModal").modal("hide");
                }
            })
        }
        $scope.updateBreakerService=function (row) {
            $scope.breakerConfigs = _.clone(row);
            $scope.breakerConfigs.projectName = $scope.projectName;
            $("#testModal2").modal();
        }
        $scope.keepBreakerService=function () {
            breakerServiceResource.update($scope.breakerConfigs,function (response) {
                if (response.success){
                    GillionMsg.alert("提示", "修改熔断策略成功.");
                    $scope.search();
                    $("#testModal2").modal("hide");
                }
            })
        }
        $scope.deleteBreakerService=function (row) {
            GillionMsg.confirm('提示信息', '是否删除该服务熔断？', function (r) {
                if (r) {
                    breakerServiceResource.delete({projectName: $scope.projectName, configName:row.configName},function (response) {
                        if (response.success) {
                            GillionMsg.alert("提示", "熔断策略删除成功.");
                            $scope.search();
                        }
                    })
                }
            })
        }
        var globalBreakerServiceResource = Resource("/esb-manager/:projectName/RPCServiceBreakManager/global",{
            "projectName":"@projectName"
        },{
            "get":{
                "url":"/esb-manager/:projectName/RPCServiceBreakManager/global",
                "method":"GET"
            },
            "update":{
                "url":"/esb-manager/:projectName/RPCServiceBreakManager/global",
                "method":"PUT"
            }
        })
        $scope.edit = function () {
            globalBreakerServiceResource.get({projectName:$scope.projectName},function (response) {
                $scope.interval=response["interval"]
                $scope.rate=response["rate"]
                $scope.minJudgeTimes=response["minJudgeTimes"]
                $scope.minRetryRestoreTime=response["minRetryRestoreTime"]
                $scope.halfBreakMinResumeTimes=response["halfBreakMinResumeTimes"]
            })
            $("#testModal1").modal();

        }
        $scope.interval=""
        $scope.rate=""
        $scope.minJudgeTimes=""
        $scope.minRetryRestoreTime=""
        $scope.halfBreakMinResumeTimes=""

        $scope.updateGlobalBreakService=function () {
            globalBreakerServiceResource.update({interval:$scope.interval,rate:$scope.rate,minJudgeTimes:$scope.minJudgeTimes,
                minRetryRestoreTime:$scope.minRetryRestoreTime,halfBreakMinResumeTimes:$scope.halfBreakMinResumeTimes,projectName:$scope.projectName},function (response) {
                if (response.success) {
                     GillionMsg.alert("提示", "全局熔断策略修改成功.");
                    $("#testModal1").modal('hide');
                }
            })
        }

    };
});