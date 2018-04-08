define([
    'angular',
    'jquery'
], function (angular) {
    var app = angular.module('IndexModule1', []);
    app.controller('IndexController1', function ($scope) {
        $scope.test = "110";
    });
});