define([
    'angular',
    'jquery',
    'bootstrap',
    'framework/dataGrid/DataGridModule',
    'framework/dropdown/GillionDropdownModule',
    'framework/numberspinner/GillionNumberSpinnerModule',
    'framework/associate/GillionAssociateModule',
    'framework/pagination/GillionPaginationModule',
    'framework/textsearch/GillionTextSearchModule',
    'framework/tab/GillionTabModule',
    'framework/dict/GillionDictModule',
    'framework/colSettings/ColSettingsModule',
    'framework/print/PrintSettingsModule',
    'system/elasticLayout'
], function (angular, $) {
    return angular.module('RetryStrategyManagerModule', ['ColSettingsModule', 'DataGridModule', 'GillionPaginationModule', 'GillionDictModule', 'GillionDropdownModule', 'GillionNumberSpinnerModule', 'GillionAssociateModule', 'GillionTabModule', 'PrintSettingsModule'])
        .controller('RetryStrategyManagerController', function ($scope, $http, $log, Arrays, $compile, $q) {
            $scope.add = function () {
                $("#testModal").modal();
            }
            $scope.edit = function () {
                $("#testModal1").modal();
            }
            
        }).directive('onFinishRender',function($timeout,$rootScope){
            return {
                restrict:'A',
                link:function(scope,element,attr){
                    $(window).resize();
                }
            }
        });
});