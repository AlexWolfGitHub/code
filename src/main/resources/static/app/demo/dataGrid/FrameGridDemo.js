define('demo/dataGrid/FrameGridDemo', [
    'angular',
    'framework/colSettings/ColSettingsModule'
], function (angular) {
    return angular
        .module('FrameGridDemo', ['ColSettingsModule'])
        .controller('FrameGridController', function ($scope, ColSettings) {

        });
});