define([
    'angular',
], function (angular) {
    return angular.module('myapp1')
        .controller('MyCon1', function ($scope, $http, $log, Arrays, $compile, $q) {
            $scope.num02 = "i am num02";
            $scope.click2 = function () {
                alert($scope.num02);
            }
        });
});
