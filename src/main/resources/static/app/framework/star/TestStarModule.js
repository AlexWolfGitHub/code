// Generated by CoffeeScript 1.9.3
(function() {
    define('framework/star/TestStarModule', ['angular', 'framework/star/GillionStarModule'], function (angular,GillionStarModule) {
        var TestStarModule;
        TestStarModule = angular.module("TestStarModule",['GillionStarModule']);
        TestStarModule.controller('StarController', function ($scope) {
            $scope.starValue = 3;
            $scope.show=true;

            $scope.test = {};
            $scope.test.isReadonly = true;
            $scope.test.isDisabled = false;

            $scope.changeDisabled= function(){
                $scope.test.isDisabled  = !$scope.test.isDisabled;
            }
        });
    });
})(this)