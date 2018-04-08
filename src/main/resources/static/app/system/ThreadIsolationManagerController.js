define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout'
], function (angular, $) {
    return function ($scope, Resource, $dataSourceManager, GillionMsg, $timeout, $routeParams, $rootScope) {
        elasticLayout();

        $scope.projectName = $routeParams.projectName;

        $('#titleName').html("线程隔离管理");


        var threadIsolationResource = Resource("/esb-manager/projects/:projectName/threadIsolationStrategies",{
            "projectName":"@projectName"
        },{
            "save":{
                "url":"/esb-manager/projects/:projectName/threadIsolationStrategies",
                "method":"POST"
            },
            "update":{
                "url":"/esb-manager/projects/:projectName/threadIsolationStrategies",
                "method":"PUT"
            },
            "delete":{
                "url":"/esb-manager/projects/:projectName/threadIsolationStrategies/:configName",
                "method":"DELETE"
            }
        })
        $scope.searchConfigName=""


        $scope.add = function () {
            $scope.threadIsolationConfig= {};
            $("#testModal").modal();
        }

        $scope.threadIsolationServiceParams=function () {
            return{
                "projectName":$scope.projectName
            }
        }

        $scope.search=function () {
            $dataSourceManager.dataSources["threadIsolationServiceSource"].doRequestData(1, {
                "projectName":$scope.projectName,
                "configName": $scope.searchConfigName
            });
        }



        $scope.addThreadIsolationService=function () {
            $scope.threadIsolationConfig.projectName=$scope.projectName
            threadIsolationResource.save($scope.threadIsolationConfig,function (response) {
                if (response.success){
                    GillionMsg.alert("提示", "线程隔离策略新增成功.");
                    $scope.search();
                    $("#testModal").modal("hide");
                }
            })
        }
        $scope.updateThreadIsolation=function (row) {
            $scope.threadIsolationConfigs = _.clone(row);
            $scope.threadIsolationConfigs.projectName = $scope.projectName;
            $("#testModal2").modal();
        }
        $scope.keepThreadIsolation=function () {
            threadIsolationResource.update($scope.threadIsolationConfigs,function (response) {
                if (response.success){
                    GillionMsg.alert("提示", "修改线程隔离策略成功.");
                    $scope.search();
                    $("#testModal2").modal("hide");
                }
            })
        }
        $scope.deleteThreadIsolation=function (row) {

            GillionMsg.confirm('提示信息', '是否删除该线程隔离策略？', function (r) {
                if (r) {
                    threadIsolationResource.delete({projectName: $scope.projectName, configName:row.configName},function (response) {
                        if (response.success) {
                            $scope.search();
                        }
                    })
                }
            })
        }
        var globalThreadIsolationResource = Resource("/esb-manager/projects/:projectName/threadIsolationStrategies/global",{
            "projectName":"@projectName"
        },{
            "get":{
                "url":"/esb-manager/projects/:projectName/threadIsolationStrategies/global",
                "method":"GET"
            },
            "update":{
                "url":"/esb-manager/projects/:projectName/threadIsolationStrategies/global",
                "method":"PUT"
            }
        })
        $scope.edit = function () {

            globalThreadIsolationResource.get({projectName:$scope.projectName},function (response) {

                $scope.GlobalMaxThread=response["maxThread"]
                $scope.GlobalMaxWaitTime=response["maxWaitTime"]
            })
            $("#testModal1").modal();

        }

        $scope.GlobalTimeout=""
        $scope.updateGlobalThreadIsolation=function () {
            globalThreadIsolationResource.update({maxThread:$scope.GlobalMaxThread,maxWaitTime:$scope.GlobalMaxWaitTime,projectName: $scope.projectName },function (response) {
                if (response.success) {
                    $("#testModal1").modal('hide');
                }
            })
        }
    };
});