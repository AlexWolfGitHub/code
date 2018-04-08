/**
 * Created by yanpp on 15-2-11.
 */
define(['angular', 'framework/comboPort/NewComboPortModule'], function (angular) {

    return angular.module('NewComboPortDemoModule', ['NewComboPortModule'])
        .controller('NewComboPortDemoController', function ($scope) {
            $scope.print = function print(){

            }
        });
});