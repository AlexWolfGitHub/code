/**
 * Created by huangzx on 2015/6/24.
 */
define(['angular', 'jquery', 'framework/dict/GillionDictModule'], function (angular, $) {
    return angular.module('TestDictModule', ['GillionDictModule'])
        .controller('TestDictController', ['$scope', '$http', '$rootScope',function ($scope, $http, $rootScope) {
            console.log($rootScope)

            $scope.u1 = 'male';
            $scope.u2 = '男';
        }]);
});