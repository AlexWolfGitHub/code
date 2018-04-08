define('demo/sample/testSample', [
    'angular',
    'demo/QueryFilter'
], function (angular, QueryFilter) {
    var module = angular.module('testSample', [])
        .controller('testSampleController', function ($rootScope, $scope) {
            /*var controller = new BusinessController({
                rootScope: $rootScope,
                scope: $scope
            });

            $scope.xxxparams = function () {

            };

            $scope.loadGridSuccess = function () {

            }*/

            var queryFilter1 = new QueryFilter({
                data: [{text: "全部", value: "qb"},
                    {text: "厦门", value: "xm"},
                    {text: "上海", value: "sh"},
                    {text: "宁波", value: "nb"},
                    {text: "深圳", value: "sz"},
                    {text: "广州", value: "gz"},
                    {text: "青岛", value: "qd"},
                    {text: "天津", value: "tj"},
                    {text: "大连", value: "dl"},
                    {text: "福州", value: "fz"},
                    {text: "武汉", value: "wh"}],
                isMulti:true,
                el:"#query-filter1",
                callback:function () {
                    alert(queryFilter1.getValue());
                }
            });
            var queryFilter2 = new QueryFilter({
                data: [{text: "全部", value: "qb"},
                    {text: "厦门", value: "xm"},
                    {text: "上海", value: "sh"},
                    {text: "宁波", value: "nb"},
                    {text: "深圳", value: "sz"},
                    {text: "广州", value: "gz"},
                    {text: "青岛", value: "qd"},
                    {text: "天津", value: "tj"},
                    {text: "大连", value: "dl"},
                    {text: "福州", value: "fz"},
                    {text: "武汉", value: "wh"}],
                el:"#query-filter2",
                callback:function () {
                    alert(queryFilter2.getValue());
                }
            });

            $scope.getValue = function () {
                alert(queryFilter1.getValue());
                alert(queryFilter2.getValue());
            }
        });

    //registerCommonDirective(module, {});
    return module;
});