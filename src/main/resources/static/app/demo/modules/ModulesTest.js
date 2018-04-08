define([
    'angular'
], function (angular) {
    return angular.module('ModulesTest',[]).controller('mycon1', function ($scope) {
        $scope.num1 = 0;
        $scope.click1 = function() {
            $scope.num1 += 1;
        };
    }).controller('mycon2', function ($scope) {
        $scope.num2 = 0;
        $scope.click2 = function() {
            $scope.num2 += 1;
        };
    });
});
