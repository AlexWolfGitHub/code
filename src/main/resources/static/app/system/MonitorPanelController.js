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
    'framework/date/DateModule',
    'system/elasticLayout'
], function (angular, $) {
    return  function ($scope, $http, $log, Arrays,$dataSourceManager, $routeParams,$compile, $q) {
        $scope.projectName = $routeParams.projectName;timerLogInfoTab
        $('#titleName').html("监控面板");
        $('#logInfoTab li:first').tab('show');
        $('#logInfoTab li').click(function (e) {
            e.preventDefault();
            $(this).tab('show');
        })
        $('#timerLogInfoTab li:first').tab('show');
        $('#timerLogInfoTab li').click(function (e) {
            e.preventDefault();
            $(this).tab('show');
        })
    };
});