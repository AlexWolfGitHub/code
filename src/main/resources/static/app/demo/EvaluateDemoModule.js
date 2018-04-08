/**
 * Created by yanpp on 15-3-3.
 */
define(['angular', 'framework/evaluate/GillionEvaluateModule'], function (angular) {
    return angular.module('EvaluateDemoModule', ['GillionEvaluateModule'])
        .controller('EvaluateDemoController', function ($scope) {
            $scope.init = function() {
                $scope.greeting = "0";
            }
        })
});