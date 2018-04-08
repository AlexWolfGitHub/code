/**
 * Created by guosc on 2016/10/25 0025.
 */
define(["www/bower_components/angular/angular",
    'framework/msg/GillionMsgModule'
],function (angular, JSONPrettyFormat) {
    var CreateDecisionTableModule = angular.module("CreateDecisionTableModule", ['GillionMsgModule']);

    CreateDecisionTableModule.controller("CreateDecisionTableController", function ($scope,Resource,GillionMsg,GillionMsgService,$http) {
        var app = Resource("/grule-manager/decision-tables");
        $scope.packageId=GillionMsgService.getInputData();
        $scope.decisionTable={
            conditions:"{}",
            rulePackageId:$scope.packageId,
            priority:1,
            tableStatus:0
        };
        $scope.confirm=function(){
            $scope.DecisiontableForm.verify().then(function(){
                app.create($scope.decisionTable,function(response){
                    if (response.success) {
                        GillionMsgService.setOutputData(response);
                        GillionMsgService.close();
                    }
                })
            });
        };
        $scope.cancel=function(){
            GillionMsgService.close();
        }

    });

});