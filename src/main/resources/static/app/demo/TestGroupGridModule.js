/**
 * Created by huangzx on 2015/7/28.
 */
define([
    'angular',
    'framework/groupgrid/GillionGroupGridModule',
    'framework/pagination/GillionPaginationModule',
    'framework/dropdown/GillionDropdownModule',
    'framework/numberspinner/GillionNumberSpinnerModule',
], function (angular) {
    return angular.module('TestGroupGridModule', ['GillionGroupGridModule', 'GillionPaginationModule', 'GillionDropdownModule', 'GillionNumberSpinnerModule'])
        .controller('TestGroupGridController', ['$scope', 'GroupDataSources', function ($scope, GroupDataSources) {
            $scope.empCheckedRows = [];

            $scope.sexData = [
                {
                    name: '男',
                    value: 'Male'
                }, {
                    name: '女',
                    value: 'Female'
                }
            ];

            $scope.fmtSex = function (value, rowData, rowIndex) {
                console.log(value);
                console.log(rowData);
                console.log(rowIndex);
                return value;
            };

            $scope.rowSelected = function (record) {
                console.log(record);
            };

            $scope.getQueryParams = function () {
                return $scope.searchUser;
            };

            $scope.queryUsers = function () {
                GroupDataSources.get('userSourceFired').doRequestData();
            };

            $scope.beforeRowDbclick = function ($event, record) {
                console.log('beforeRowDbclick:');
                console.log(arguments);
            };

            $scope.rowDbclick = function ($event, record, grid) {
                var $row = $($event.target).closest('tr');
                var rowIndex = $row.index();
                console.log(rowIndex);
                grid.finishEdit(true);
                grid.startEdit(rowIndex);
            };

            $scope.onBeforeSelect = function () {
                return true;
            };

            $scope.goodluck = {};
            $scope.onSelect = function () {
            };

            $scope.ccc = {};
            $scope.getSelectRow = function () {
                $scope.ccc = $scope.goodluck;
                console.log($scope.goodluck);
            };

            $scope.changeSelectRow = function () {
                $scope.goodluck = $scope.ccc;
            };

            $scope.onRender = function (grid) {
                console.log(grid);
                $scope.grid = grid;
            };

            $scope.finishEdit = function() {
                $scope.grid.finishEdit(true);
            };

            $scope.consoleGrid = function() {
                console.log($scope.grid);
            };

            $scope.printModifiedRows = function () {
                console.log($scope.grid.getModifiedRows());
            };

            $scope.printModifiedRecords = function () {
                console.log($scope.grid.getModifiedRecords());
            };

            $scope.printModifiedRecordMap = function () {
                console.log($scope.grid.getModifiedRecordMap());
            };

            $scope.reverseModified = function () {
                $scope.grid.reverseModified();
            };

        }])
        .filter('wrapNoneLeaf', function () {
            return function (value, record, prefix, suffix) {
                var grid = this;
                if (value === undefined) return '';
                try {
                    var node = grid.dataSource.$node(record);
                    if (!node.isLeaf()) {
                        if (prefix) {
                            value = prefix + value;
                        }
                        if (suffix) {
                            value += suffix;
                        }
                    }
                } catch (e) {
                }
                return value;
            };
        });
});
