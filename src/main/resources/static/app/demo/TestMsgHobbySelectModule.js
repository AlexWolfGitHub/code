define('demo/TestMsgHobbySelectModule', ['angular', 'framework/clickbox/GillionClickBoxModule', 'framework/msg/GillionMsgModule'], function (angular) {
    return angular.module('TestMsgHobbySelectModule', ['GillionClickBoxModule', 'GillionMsgModule'])
        .controller('TestMsgHobbySelectController', ['$scope', 'GillionMsg', 'GillionMsgService', function ($scope, GillionMsg, GillionMsgService) {

            $scope.items = [{key:'篮球', value:'basketball'},{key:'乒乓球',value:'pingpong'},{key:'羽毛球',value:'badminton'},{key:'游泳',value:'swimming'}];

            $scope.hobby =  GillionMsgService.getInputData();
            console.log($scope.hobby)

            $scope.confirm = function(){
                GillionMsgService.setOutputData($scope.hobby);
                GillionMsgService.close();
            }
        }]);
})