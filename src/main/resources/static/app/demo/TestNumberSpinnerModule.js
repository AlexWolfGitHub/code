define(['angular', 'framework/numberspinner/GillionNumberSpinnerModule'], function (angular) {
    return angular.module('TestNumberSpinnerModule', ['GillionNumberSpinnerModule'])
        .controller('TestNumberSpinnerController', ['$scope',function ($scope) {
            $scope.t = 2.88;
            $scope.t2 = 95;
        }]);
})