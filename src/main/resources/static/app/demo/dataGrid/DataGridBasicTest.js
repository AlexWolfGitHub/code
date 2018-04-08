define([
    'angular',
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
    'framework/grid/fixgrid',
], function (angular) {
    return angular.module('DataGridBasicTest', ['ColSettingsModule', 'DataGridModule', 'GillionPaginationModule', 'GillionDictModule', 'GillionDropdownModule', 'GillionNumberSpinnerModule', 'GillionAssociateModule', 'GillionTabModule', 'PrintSettingsModule'])
        .controller('dataGridTestController', function ($scope, $http, $log, Arrays, $compile, $q) {
            $scope.empCheckedRows = [];
            $scope.gridInstance = undefined;
            /*$scope.empCheckedRows = [];
             $scope.employeeGridPage = 1;
             $scope.gridRendered = function (grid) {
             var allCheckedRows = grid.getAllCheckedRows();
             console.log(allCheckedRows)
             };
             $scope.chooses = ['choose3', 'choose2'];

             $scope.removeFirst = function () {
             $scope.chooses.splice(0, 1);

             };

             $scope.beforeGridSorting = function (grid, sort, direction) {
             console.log('onBeforeSort', arguments);
             };

             $scope.gridSorting = function () {
             console.log('onSorting', arguments);
             };
             $scope.beforeRowSelected = function ($event, record) {
             console.log('beforeRowSelected', arguments);
             };
             $scope.rowSelected = function ($event, record) {
             console.log('rowSelected', arguments);
             };
             */

            $scope.lang = 'zh,en-us';

            $scope.toggleLang = function() {
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
                testFunc: function(str) {
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
                alert(name);
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

            $scope.startEditEmp = function (rowIndex, grid, e) {
                console.log(e);
                console.log('start edit row index: ', rowIndex);
                grid.startEdit(rowIndex);
                if (e) {
                    e.stopPropagation();
                }
            };

            $scope.finishEditEmp = function(e) {
                $scope.gridInstance.finishEdit(true);
                if (e) {
                    e.stopPropagation();
                }
            }

            $scope.getIdClass = function (row, column, rowIndex) {
                if (rowIndex < 6 && rowIndex > 3) {
                    return 'prime';
                }
            };

            $scope.printModifiedRows = function () {
                console.log($scope.gridInstance.getModifiedRows());
            };
            $scope.printModifiedRecords = function () {
                console.log($scope.gridInstance.getModifiedRecords());
            };
            $scope.printModifiedRecordMap = function () {
                console.log($scope.gridInstance.getModifiedRecordMap());
            };

            $scope.verifySourceRequires = function () {
                var gridVerifyRequiresPromise = $scope.gridInstance.verifySourceRequires();
                $q.all(gridVerifyRequiresPromise).then(function () {
                    alert('校验成功');
                })
            };

            $scope.somTest = '<input type="button" value="SomeTest"/>',
            $scope.consoleSelectedRow = function () {
                console.log($scope.selectedEmp);
            }
            $scope.setSelectRow = function(index) {
                var records = $scope.gridInstance.scope.dataSource.records;
                $scope.selectedEmp = records[index];
            }

            $scope.newRowRecord = {
                email: '',
            }

            $scope.addRow = function(rowData, force) {
                $scope.gridInstance.addRow();
            }

            $scope.onSelect = function ($event, record, isSelected) {
                // console.log('onSelect =======>');
                // console.log('$event:', $event);
                // console.log('record:', record);
                // console.log('isSelected:', isSelected);
            }

            $scope.onCheck = function ($event, record, isChecked) {
                console.log('onCheck ==========================>');
                console.log('$event:', $event);
                console.log('record:', record);
                console.log('isChecked:', isChecked);
            }

            $scope.newRowFunc = function(grid, source) {
                console.log('newRowFuc >>>>>');
                console.log(grid);
            }

            $scope.addRow2 = function() {
                console.log($scope.grid);
                var grid = $scope.grid;
                var newSource = {
                    age: 10,
                    name: 'xxxxx',
                    email: 'xxxxx@xx.com'
                };
                if (!grid.scope.source) {
                    grid.scope.source = [];
                }
                grid.scope.source.push(newSource);
            };

            $scope.onRender = function(grid) {
                $scope.grid = grid;
                console.log(grid);
            };

            $scope.hasChildren = function(record) {
                return record.hasChildren;
            };

            $scope.fetchChildren = function (record, callback) {
                console.log(record);
                var result = [];
                if (Array.isArray(record)) {
                    for (var i = 0, len = record.length; i < len; i++) {
                        result = result.concat(mockSource(record[i]));
                    }
                } else {
                    result = mockSource(record);
                }
                setTimeout(function() {
                    callback(result);
                }, Math.floor(Math.random() * 3000));

                function mockSource(r) {
                    var count = Math.round(Math.random() * 6) + 1;
                    var ret = [];
                    for (var i = 0; i < count; i++) {
                        var mockRecord = {
                            "id": newId(),
                            "name": "name" + Math.floor(Math.random() * 10000),
                            "mobile": "mobile" + Math.floor(Math.random() * 10000),
                            "telephone": "telephone" + Math.floor(Math.random() * 10000),
                            "email": "email" + Math.floor(Math.random() * 10000),
                            "age": Math.round(Math.random() * 100),
                            "birthDay": 1487551394685,
                            "parentId": r.id
                        };
                        if (r.id === 'id-1' && i === 1) {
                            mockRecord.hasChildren = true;
                        }
                        ret.push(mockRecord);
                    }
                    return ret;
                }
            };

            $scope.treeExpandAll = function () {
                $scope.grid.treeExpandAll();
            };

            $scope.treeFoldAll = function () {
                $scope.grid.treeFoldAll();
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
