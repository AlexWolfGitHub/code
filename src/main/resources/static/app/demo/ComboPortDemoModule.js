/**
 * Created by yanpp on 15-2-11.
 */
define(['angular', 'framework/comboPort/ComboPortModule'], function (angular) {
    return angular.module('ComboPortDemoModule', ['ComboPortModule'])
        .controller('ComboPortDemoController', function ($scope) {
            $scope.print = function print(){
                console.log($scope);
                console.log($scope.testVal);
            }
        })
});