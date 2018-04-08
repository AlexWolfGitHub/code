define(['jquery', 'angular', 'framework/msg/GillionMsgModule'], function ($, angular) {
    return angular.module('TestMsgEditModule', ['GillionMsgModule'])
        .controller('TestMsgEditController', ['$scope', 'GillionMsg', 'GillionMsgService', function ($scope, GillionMsg, GillionMsgService) {

            $scope.record =  GillionMsgService.getInputData();
            console.log($scope.record)

            $scope.showHobby = function() {
                GillionMsg.showUrl({
                    title: '爱好，请选择',
                    url: 'hobby_select',
                    width: 400,
                    height:400,
                    data: $scope.record.hobby ||[],
                    onClose: function(data){
                        console.log('您选择的爱好是：', data);
                        $scope.record.hobby = data;
                    }
                });
            };

            $scope.update = function(){
                GillionMsgService.setOutputData($scope.record);
                GillionMsgService.close();
            };

        }]);
})