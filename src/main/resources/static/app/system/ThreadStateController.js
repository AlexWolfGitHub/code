define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout'
], function (angular, $) {
    return function ($scope, Resource, $interval,$dataSourceManager, GillionMsg, $timeout, $routeParams, $rootScope) {
        elasticLayout();
        $scope.projectName = $routeParams.projectName;

        $('#titleName').html("<a href='#/projectName/"+$scope.projectName+"/threadlsolationManager'>线程隔离管理</a>/"+"线程状态查看");
        $scope.threadStateParams={
                "projectName":$scope.projectName
        }

        $scope.search=function () {
            $dataSourceManager.dataSources["threadStateSource"].doRequestData(1, {
                "projectName":$scope.projectName,
                "serviceName": $scope.serviceName
            });
        }


        $scope.serviceTypes = [
            {serviceTypeName: "服务", serviceTypeId: 0},
            {serviceTypeName: "服务组", serviceTypeId: 1}
        ]
        $scope.serviceGroupResource = function(){
            $dataSourceManager.dataSources["serviceGroupResource"].doRequestData($dataSourceManager.dataSources["serviceGroupResource"].currentPage,$scope.serviceGroupParams);
        }
        $scope.serviceGroupParams = {
            projectName:$routeParams.projectName
        }

        $scope.refreshInterval = 5;

        //定时刷新
        var next = true;
        var task = $interval(function () {
            if (!next) {
                return;
            }
            // var params = angular.extend({}, $scope.search);
            next = false;
            $scope.threadStateParams.serviceName = $scope.serviceName
            $rootScope.dataSources['threadStateSource'].doRequestData(1,$scope.threadStateParams , function () {
                next = true;
            });
        }, $scope.refreshInterval * 1000);

        $scope.refreshIntervalChange = function () {
            $interval.cancel(task);
            task = $interval(function () {
                if (!next) {
                    return;
                }
                // var params = angular.extend({}, $scope.search);
                next = false;

                $rootScope.dataSources['threadStateSource'].doRequestData(1, $scope.threadStateParams, function () {
                    next = true;
                });
            }, $scope.refreshInterval * 1000);
        };
    };
});