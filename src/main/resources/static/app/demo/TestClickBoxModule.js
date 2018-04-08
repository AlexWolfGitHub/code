define('demo/TestClickBoxModule', ['angular', 'framework/clickbox/GillionClickBoxModule'], function (angular) {
    return angular.module('TestClickBoxModule', ['GillionClickBoxModule'])
        .controller('TestClickBoxController', ['$scope', function ($scope) {
            $scope.sex="female";
            $scope.opts= [{
                name: '男',
                value: 'male'
            },{
                name: '女',
                value: 'female'
            }];
            $scope.items = [{key:'篮球', value:'basketball'},{key:'乒乓球',value:'pingpong'},{key:'羽毛球',value:'badminton'},{key:'游泳',value:'swimming'}];

            $scope.beforeChk = function(){
                console.log('before...');
            }

            $scope.chk = function(checked) {
                console.log(checked);
            }
        }]);
});