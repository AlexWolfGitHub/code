define('demo/multiSelect/MultiSelectDemoModule', [
    'angular',
    'framework/datasource/DataSourceModule',
    'framework/colSettings/ColSettingsModule'
], function (angular) {
    return angular.module('MultiSelectDemoModule', ['DataSourceModule', 'ColSettingsModule'])
        .controller('MultiSelectDemoController', function ($scope, $dataSourceManager) {
            $dataSourceManager.registerDataSource('empColumns', [
                {field: 'name', text: '姓名'},
                {field: 'sex', text: '性别'},
                {field: 'birthDay', text: '出生日期'},
                {field: 'email', text: '年龄'},
                {field: 'telephone', text: 'Email'},
                {field: 'mobile', text: '固定电话'}
            ]);
        });
});