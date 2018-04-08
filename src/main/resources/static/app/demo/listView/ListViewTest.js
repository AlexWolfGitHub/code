define([
    'angular',
    'framework/listview/GillionListViewModule',
    'framework/dropdown/GillionDropdownModule',
    'framework/numberspinner/GillionNumberSpinnerModule',
    'framework/associate/GillionAssociateModule',
    'framework/pagination/GillionPaginationModule',
    'framework/textsearch/GillionTextSearchModule',
    'framework/tab/GillionTabModule',
    'framework/dict/GillionDictModule',
    'framework/colSettings/ColSettingsModule',
    'framework/print/PrintSettingsModule',
    'framework/grid/fixgrid',
], function (angular) {
    return angular.module('ListViewTest', ['ColSettingsModule', 'GillionListViewModule', 'GillionPaginationModule', 'GillionDictModule', 'GillionDropdownModule', 'GillionNumberSpinnerModule', 'GillionAssociateModule', 'GillionTabModule', 'PrintSettingsModule'])
        .controller('listViewTestController', function ($scope, $http, $log, Arrays, $compile, $q) {
            $scope.empCheckedRows = [];
            $scope.gridInstance = undefined;

            $scope.lang = 'zh,en-us';

            $scope.toggleLang = function () {
                if ($scope.lang === 'zh') {
                    $scope.lang = 'en';
                } else {
                    $scope.lang = 'zh';
                }
            };

            $scope.test = {
                operation: '操作',
                name: '姓名',
                heji: '合计',
                testFunc: function (str) {
                    return '#' + str + '#';
                }
            };

            $scope.beforeGridSorting = function (grid, sort, direction) {
                console.log('onBeforeSort', arguments);
            };

            $scope.gridSorting = function () {
                console.log('onSorting', arguments);
            };
            $scope.sexData = [
                {
                    name: '男',
                    value: 'Male'
                }, {
                    name: '女',
                    value: 'Female'
                }
            ];

            $scope.beforeCheckRow = function (record) {
                console.log('row checked', record.name)
            };

            $scope.onRemoveRecord = function () {
                return confirm('您确定要删除该行数据吗？');
            };
            $scope.empGridSuccess = function (grid, source) {
                $scope.empCheckedRows.push(source[2], source[3]);
                $scope.gridInstance = grid;
            };

            $scope.startEdit = function (rowState, rowIndex) {
                console.log(rowState, rowIndex);
                rowState.editing = true;
            };

            $scope.selectRow = function (record, isSelected) {
                console.log('selectedRow', record);
                console.log('isSelected', isSelected);
                console.log('checkedRows', $scope.empCheckedRows);
            };
            $scope.showName = function (name) {
                $scope.gridInstance.toggleRowHeight();
            };
            $scope.isFullName = function (row) {
                if (/^\w+\s\w+$/.test(row.name)) {
                    console.log('fullName');
                    return 'fullName';
                }
            };

            $scope.dbclickEmp = function (row, grid) {
                console.log('rowDbclick', row, grid);
            };
            $scope.beforeDbclickEmp = function (row, grid) {
                console.log('beforeDbclickEmp', row, grid);
            };

            $scope.allCellBeforeDbclick = function (row, column, grid) {
                console.log('allCellBeforeDbclick', arguments);
                return false;
            };
            $scope.allCellDbclick = function ($event, column, grid) {
                console.log('allCellDbclick', arguments);
                console.log('pre editing row Index: ', grid.getEditingRowIndex());
                var $target = $($event.target);
                var $row = $target.closest('tr');
                var rowIndex = $row[0].rowIndex;
                grid.finishEdit(true);
                grid.startEdit(rowIndex);
                $row = $(grid.tbody.rows[rowIndex]);
                var $input;
                if (!column) return;
                if (column.canEdit) {
                    $input = $row.find('.' + column.colWidthClassName).find('[data-role="editor"]').find(':input');
                    if ($input.length) {
                        $input[0].focus();
                    }
                } else {
                    $input = $row.find('[data-role="editor"]').first().find(':input');
                    if ($input.length) {
                        $input[0].focus();
                    }
                }
            };
            $scope.ageCellBeforeDbclick = function (row, column, grid) {
                console.log('ageCellBeforeDbclick', arguments);
                return false;
            };
            $scope.ageCellDbclick = function (row, column, grid) {
                console.log('ageCellDbclick', arguments);
            };

            $scope.getIdClass = function (row, column, rowIndex) {
                if (rowIndex < 6 && rowIndex > 3) {
                    return 'prime';
                }
            };

            $scope.somTest = '<input type="button" value="SomeTest"/>';
            $scope.consoleSelectedRow = function () {
                console.log($scope.selectedEmp);
                alert($scope.selectedEmp.name);
            }
            $scope.setSelectRow = function (index) {
                var records = $scope.gridInstance.scope.dataSource.records;
                $scope.selectedEmp = records[index];
            }

            $scope.onCheck = function ($event, record, isChecked) {
                console.log('onCheck ==========================>');
                console.log('$event:', $event);
                console.log('record:', record);
                console.log('isChecked:', isChecked);
            }

            $scope.onRender = function (grid) {
                //$scope.grid = grid;
                console.log(grid);
            };

            var lastId = 100;

            function newId() {
                lastId++;
                return 'id-' + lastId;
            }
        })
        .filter('testFilter', function () {
            return function (str) {
                return str.substr(0, 5);
            };
        })
        .filter('testFilter2', function () {
            return function (str, a) {
                return str + a;
            };
        });
});
