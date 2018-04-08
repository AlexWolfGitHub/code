define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout'
], function (angular, $) {
    return function ($scope, Resource, $dataSourceManager, GillionMsg, $timeout, $routeParams, $rootScope) {
        elasticLayout();
        $scope.projectName = $routeParams.projectName;
        $('#titleName').html("日志管理");
        $('#logInfoTab li:first').tab('show');
        $('#logInfoTab li').click(function (e) {
            e.preventDefault();
            $(this).tab('show');
        })
        var logInfoResource = Resource("/esb-manager/projects/:projectName/logInfos",{
            "projectName":"@projectName",
        });
        $scope.searchLog={};
        $scope.searchLog4Exception={};
        $scope.selectedRow1={}
        $scope.selectedRow3={}
        $scope.service={}

        var height = window.innerHeight - 86;
        $scope.searchBoxHeight = {
            "height":height,
            "min-height":height
        }
        $scope.logInfoParams = {
                projectName:$scope.projectName,
        }
        $scope.serviceGroupParams = {
                projectName: $scope.projectName,
        }
        $scope.logInfoParams4Exception = {
            projectName:$scope.projectName,
        }
        $scope.serviceGroupParams4Exception = {
            projectName: $scope.projectName,
        }
        $scope.selectGroup = function () {
            $rootScope.dataSources['serviceResource'].params =  {
                "projectName":$scope.projectName,
                "serviceGroupName":$scope.selectedRow1.name,
                "protocol":$scope.service.protocol
            } ;
        }
        $scope.selectGroup4Exception = function () {
            $rootScope.dataSources['serviceResource4Exception'].params =  {
                "projectName":$scope.projectName,
                "serviceGroupName":$scope.selectedRow3.name,
                "protocol":$scope.service.protocol4Exception
            } ;
        }



        $scope.searchLogInfo = function () {
            if($scope.service.protocol ==undefined){
                $scope.service.protocol=""
            }
            var logInfoParams = {
                projectName:$routeParams.projectName,
                serviceMapping:$scope.service.protocol.toLocaleLowerCase()+"://"+$scope.selectedRow2.serviceName,
                begin:$scope.begin,
                end:$scope.end
            }
            $dataSourceManager.dataSources["logInfoSource"].doRequestData(1,logInfoParams);
        }
        $scope.searchExceptionInfo = function () {
            if($scope.service.protocol4Exception ==undefined){
                $scope.service.protocol4Exception=""
            }
            var logInfoParams = {
                projectName:$routeParams.projectName,
                serviceMapping:$scope.service.protocol4Exception.toLocaleLowerCase()+"://"+$scope.selectedRow4.serviceName,
                begin:$scope.begin4Exception,
                end:$scope.end4Exception
            }
            console.log(logInfoParams)
            $dataSourceManager.dataSources["logInfosSource4Exception"].doRequestData(1,logInfoParams);
        }
        $scope.resend = function (row) {
            console.log(row)
        }
        };
        });