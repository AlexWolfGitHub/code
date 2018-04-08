define([
    'angular',
    'framework/areas/AreasModule',
    'framework/tabindex/TabindexModule'
], function (angular) {
    return angular
        .module('BasicDemo', ['AreasModule', 'TabindexModule'])
        .controller('AreasBasicDemoController', function ($scope) {

            $scope.beforeSelectArea = function () {
                console.log(arguments);
            }
        });

});