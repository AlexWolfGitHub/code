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
            $scope.add = function () {
                $("#testModal").modal();
            }
            $scope.edit = function () {
                $("#testModal1").modal();
            }

    };
});