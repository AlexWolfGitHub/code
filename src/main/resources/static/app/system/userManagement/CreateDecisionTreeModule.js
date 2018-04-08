/**
 * Created by guosc on 2016/10/25 0025.
 */
define(["www/bower_components/angular/angular",
    'framework/msg/GillionMsgModule'
],function (angular, JSONPrettyFormat) {
    var CreateDecisionTreeModule = angular.module("CreateDecisionTreeModule", ['GillionMsgModule']);

    CreateDecisionTreeModule.controller("CreateDecisionTreeController", function ($scope,Resource,GillionMsgService) {
        var app = Resource("/grule-manager/decisionTrees");
        $scope.packageId=GillionMsgService.getInputData();
        $scope.decisionTree={
            conditions:"{}",
            rulePackageId:$scope.packageId,
            priority:1,
            treeStatus:0
        };
        $scope.confirm=function(){
            $scope.DecisionTreeForm.verify().then(function(){
                app.create($scope.decisionTree,function(response){
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