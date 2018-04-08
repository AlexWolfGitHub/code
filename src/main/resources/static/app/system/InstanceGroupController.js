define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout'
], function (angular, $) {
    return function ($scope, Resource, $dataSourceManager, GillionMsg, $timeout, $routeParams, $rootScope) {
        elasticLayout();
        $scope.groupName = $routeParams.groupName;
        $('#titleName').html('应用部署/'+ $scope.groupName);
        alert($scope.groupName);
        // $scope.instanceGroupResource=function () {
        //     return{
        //         networkType:"经典网络"
        //     }
        // }
        $scope.instanceGroupParams = function () {
            return {
                groupName:$scope.groupName,
            }
        }
    };
});