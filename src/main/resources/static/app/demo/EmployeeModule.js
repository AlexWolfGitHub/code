define([
    'angular',
    'framework/grid/GillionGridModule',
    'validation/rules/commons',
    'framework/date/GillionDateModule'
], function (angular) {
    return angular.module('EmployeeModule', ['GillionGridModule', 'GillionDateModule'])
        .controller('employeeController', function ($scope, $http, Resource, Arrays, Params) {
            var Employees = Resource(window.basePath + '/system/employees/:id', {id: '@id'}, {
                destroyAll: {
                    url: window.basePath + '/system/employees/destroyAll',
                    method: 'delete'
                }
            });

            $http.get(window.basePath + '/system/roles/getAll')
                .success(function (result) {
                    $scope.roles = result;
                });

            $scope.depts = [
                {deptId: 1, deptName: "总裁办公室"},
                {deptId: 2, deptName: "制造部"},
                {deptId: 3, deptName: "研发部"}
            ];

            $scope.employeeColumns = [
                {
                    data: 'id',
                    type: 'hidden'
                },
                {
                    header: "姓名",
                    data: 'name'
                }, {
                    header: "年龄",
                    data: 'age'
                }, {
                    header: "电子邮箱",
                    data: 'email'
                }, {
                    header: "移动电话",
                    data: 'mobile'
                }, {
                    header: "固定电话",
                    data: 'telephone'
                }, {
                    header: "操作",
                    template: '<button g-per="/system/employees/edit" data-no-per="disabled" ng-click="grid.actions.edit(row)">编辑</button>&nbsp;&nbsp;<button g-per="/system/employees/destroy" data-no-per="disabled" ng-click="grid.actions.destroy(row)">删除</a>'
                }
            ];
            $scope.empGridInitCallback = function (grid) {
                $scope.deleteCheckedRows = function () {
                    var checkedIds = Arrays.extractToArray(grid.getAllCheckedRows(), "id");
                    Employees.destroyAll({ids: checkedIds});
                };

                grid.actions.edit = function (row) {
                    $scope.editEmp = row.entity;
                    if ($scope.newEmp !== undefined) {
                        $scope.newEmp = undefined;
                    }
                };
                grid.actions.destroy = function (row) {
                    var sureDestroy = confirm("您确定要删除该用户吗？本操作不可恢复！");
                    if (sureDestroy) {
                        Employees.remove(row.entity, function () {
                            grid.goPage();
                        });
                    }
                };
                $scope.search = function () {
                    grid.goPage(1, angular.extend({}, $scope.searchEmp));
                };

                $scope.save = function (form) {
                    form.verify();
                    console.log(form.$valid)
                    if (form.$valid) {
                        console.log($scope.newEmp)
                        Employees.save($scope.newEmp, function () {
                            $scope.newEmp = undefined;
                            grid.goPage();
                        }, function (data) {
                            alert(JSON.stringify(data))
                        });
                    }
                };

                $scope.update = function (form) {
                    Employees.update($scope.editEmp, function () {
                        $scope.editEmp = undefined;
                        grid.goPage();
                    }, function (data) {
                        alert(JSON.stringify(data))
                    });
                };
            };

            $scope.addEmp = function () {
                $scope.newEmp = {};
                if ($scope.editEmp !== undefined) {
                    $scope.editEmp = undefined;
                }
            };

        });
});