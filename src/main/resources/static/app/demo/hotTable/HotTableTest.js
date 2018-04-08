define([
    'angular',
    'framework/hotTable/HotTableModule',
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
    return angular.module('HotTableTest', ['ColSettingsModule', 'HotTableModule', 'GillionPaginationModule', 'GillionDictModule', 'GillionDropdownModule', 'GillionNumberSpinnerModule', 'GillionAssociateModule', 'GillionTabModule', 'PrintSettingsModule'])
        .controller('hotTableTestController', function ($scope, $http, $log, Arrays, $compile, $q) {
            $scope.empCheckedRows = [];
            $scope.gridInstance = undefined;


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

            $scope.finishEditEmp = function (e) {
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

            $scope.printModifiedRecords = function () {
                console.log($scope.gridInstance.getModifiedRecords());
            };
            $scope.printModifiedRecordMap = function () {
                console.log($scope.gridInstance.getModifiedRecordMap());
            };

            $scope.verifySourceRequires = function () {
                $scope.gridInstance.validateRow(0);
            };

            $scope.somTest = '<input type="button" value="SomeTest"/>',
                $scope.consoleSelectedRow = function () {
                    console.log($scope.selectedEmp);
                }
            $scope.setSelectRow = function (index) {
                var records = $scope.gridInstance.scope.dataSource.records;
                $scope.selectedEmp = records[index];
            }

            $scope.newRowRecord = {
                email: '',
            }

            $scope.addRow = function (rowData, force) {
                $scope.gridInstance.addRow(0);
            }

            $scope.onSelect = function ($event, record, isSelected) {
                // console.log('onSelect =======>');
                // console.log('$event:', $event);
                console.log('record:', record);
                // console.log('isSelected:', isSelected);
            }

            $scope.onCheck = function (record, checked) {
                console.log('onCheck ==========================>');
                console.log('record:', record);
                console.log('checked:', checked);
            };

            $scope.addRow2 = function () {
                var grid = $scope.gridInstance;
                var newSource = {
                    age: 10,
                    name: 'xxxxx',
                    email: 'xxxxx@xx.com'
                };
                grid.newRow(0, newSource);
            };

            $scope.deleteRow = function () {
                $scope.gridInstance.deleteRow(0);
            };

            $scope.onRender = function (grid) {
                $scope.grid = grid;
                console.log(grid);
            };

            $scope.hasChildren = function (record) {
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
                setTimeout(function () {
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
                $scope.gridInstance.treeExpandAll();
            };

            $scope.treeFoldAll = function () {
                $scope.gridInstance.treeFoldAll();
            };

            var lastId = 100;

            function newId() {
                lastId++;
                return 'id-' + lastId;
            }

            $scope.rowClass = function (row) {
                return row.age > 60 ? "bgRed" : "";
            };

            $scope.startEdit = function ($event, record, grid, physicalRow, field) {
                grid.startEdit(physicalRow);
            };

            $scope.save = function () {
                $scope.gridInstance.finishEdit("row").then(function(){
                    $scope.gridInstance.validateAddedAndModifiedRows().then(function () {
                        var records = $scope.gridInstance.getModifiedRecords();
                        console.log("保存分割线-------------------------------------------------");
                        console.log(records);
                    }).catch(function () {
                        // 校验未通过后执行的操作...
                        return;
                    });
                });
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
