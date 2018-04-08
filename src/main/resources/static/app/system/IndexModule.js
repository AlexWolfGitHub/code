define([
    'angular',
    'jquery',
    'system/GatewayManagerController',
    'system/GatewayServiceController',
    'system/TopicManagerController',
    'system/ConsumeGroupController',
    'system/UserManagerController',
    'system/ApplicationDeploymentController',
    'system/LogInfoController',
    'system/ProjectController',
    'system/BreakerManagersController',
    'system/RateLimitController',
    'system/ResponseTimeoutManagerController',
    'system/RetryManagerController',
    'system/ThreadIsolationManagerController',
    'system/ThreadStateController',
    'system/service/ServiceManagerController',
    'system/service/HttpServiceManagerController',
    'system/service/WebServiceManagerController',
    'system/service/SapServiceManagerController',
    'system/service/RuleNumberManagerController',
    'system/service/NativeServiceManagerController',
    'system/service/ComponentManagerController',
    'system/service/RateLimitServiceManagerController',
    'system/service/BreakerServiceManagerController',
    'system/service/ResponseTimeoutServiceManagerController',
    'system/service/RetryServiceManagerController',
    'system/service/ThreadIsolationServiceManagerController',
    'system/MonitorPanelController',
    'system/TopologyController',
    'system/LoggerLevelController',
    'system/ServiceGroupController',
    'system/DictConfigController',
    'system/TimerController',
    'system/ServiceDispatchController',
    'system/MqMonitorController',
    'system/DataSourceConfigController',
    'system/RouteConfigController',
    'framework/date/DateModule',
    'bootstrap',
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
    'framework/uploader/UploadGroupModule',
    'framework/msg/GillionMsgModule',
    'framework/groupDataSource/GroupDataSourceModule',
    'framework/echart/GillionEchartsModule',
    'angular-route',
    'system/elasticLayout'
], function (
    angular,
    $,
    GatewayManagerController,
    GatewayServiceController,
    TopicManagerController,
    ConsumeGroupController,
    UserManagerController,
    ApplicationDeploymentController,
    LogInfoController,
    ProjectController,
    BreakerManagersController,
    RateLimitController,
    ResponseTimeoutManagerController,
    RetryManagerController,
    ThreadIsolationManagerController,
    ThreadStateController,
    ServiceManagerController,
    HttpServiceManagerController,
    WebServiceManagerController,
    SapServiceManagerController,
    RuleNumberManagerController,
    NativeServiceManagerController,
    ComponentManagerController,
    RateLimitServiceManagerController,
    BreakerServiceManagerController,
    ResponseTimeoutServiceManagerController,
    RetryServiceManagerController,
    ThreadIsolationServiceManagerController,
    MonitorPanelController,
    TopologyController,
    LoggerLevelController,
    ServiceGroupController,
    DictConfigController,
    TimerController,
    ServiceDispatchController,
    MqMonitorController,
    DataSourceConfigController,
    RouteConfigController
) {
    var app = angular.module('IndexModule', ['ngRoute','ColSettingsModule', 'DataGridModule', 'GillionPaginationModule', 'GillionDictModule', 'GillionDropdownModule', 'GillionNumberSpinnerModule', 'GillionAssociateModule', 'GillionTabModule', 'PrintSettingsModule','UploadGroupModule','GillionMsgModule','GroupDataSourceModule','GillionEchartsModule','DateModule']);
        app.controller('IndexController', function ($scope,$rootScope, Resource,$dataSourceManager,$http,$log, Arrays, $compile, $q) {

            var height = window.innerHeight-50+$('html, body').scrollTop();
            $scope.menuStyle = {
                height:height
            }
            $http.get('/esb-manager/projectManager/list').success(function (data) {
                $scope.projects = data;
                $rootScope.currProject={
                    projectName:"OMS",
                    id:"1"
                }
                $scope.projectName = $rootScope.currProject.projectName;
                $scope.projectId = $rootScope.currProject.id;
            });

            $scope.selectProjects = function () {
                $("#selectProject").show();
            }

            $scope.selectProject = function (project) {
                $rootScope.currProject=project;
                $scope.projectName = project.projectName;
                $scope.projectId = project.id;
                $("#selectProject").hide();
            };
            $("ul.menu a").on('click',function () {
                $("ul.menu li").removeClass('current');
                this.parentNode.setAttribute('class','current')
            })
            $("ul.menu a.navt").on('click', function () {
                $(this).next('.node').toggle();
            });

        }).directive('onFinishRender',function($timeout,$rootScope){
            return {
                restrict:'A',
                link:function(scope,element,attr){
                    $(window).resize();
                }
            }
        });

    app.controller('GatewayManagerController', GatewayManagerController);
    app.controller('GatewayServiceController', GatewayServiceController);
    app.controller('TopicManagerController', TopicManagerController);
    app.controller('ConsumeGroupController', ConsumeGroupController);
    app.controller('UserManagerController',UserManagerController);
    app.controller('ApplicationDeploymentController', ApplicationDeploymentController);
    app.controller('LogInfoController', LogInfoController);
    app.controller('BreakerManagersController',BreakerManagersController);
    app.controller('RateLimitController',RateLimitController);
    app.controller('ResponseTimeoutManagerController',ResponseTimeoutManagerController);
    app.controller('RetryManagerController',RetryManagerController);
    app.controller('ThreadIsolationManagerController',ThreadIsolationManagerController);
    app.controller('ThreadStateController',ThreadStateController);
    app.controller('ProjectController',ProjectController);
    app.controller('ServiceManagerController', ServiceManagerController);
    app.controller('HttpServiceManagerController', HttpServiceManagerController);
    app.controller('WebServiceManagerController', WebServiceManagerController);
    app.controller('SapServiceManagerController', SapServiceManagerController);
    app.controller('RuleNumberManagerController', RuleNumberManagerController);
    app.controller('NativeServiceManagerController', NativeServiceManagerController);
    app.controller('ComponentManagerController', ComponentManagerController);
    app.controller('RateLimitServiceManagerController', RateLimitServiceManagerController);
    app.controller('BreakerServiceManagerController',  BreakerServiceManagerController);
    app.controller('ResponseTimeoutServiceManagerController', ResponseTimeoutServiceManagerController);
    app.controller('RetryServiceManagerController', RetryServiceManagerController);
    app.controller('ThreadIsolationServiceManagerController', ThreadIsolationServiceManagerController);
    app.controller('MonitorPanelController',MonitorPanelController);
    app.controller('TopologyController',TopologyController);
    app.controller('LoggerLevelController',LoggerLevelController);
    app.controller('ServiceGroupController',ServiceGroupController);
    app.controller('DictConfigController',DictConfigController);
    app.controller('TimerController',TimerController);
    app.controller('ServiceDispatchController',ServiceDispatchController);
    app.controller('MqMonitorController',MqMonitorController);
    app.controller('DataSourceConfigController',DataSourceConfigController);
    app.controller('RouteConfigController',RouteConfigController);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/projectId/:projectId/projectName/:projectName/gatewayManager', {
            controller: 'GatewayManagerController',
            templateUrl: '/html/gateway-manager'
        }).when('/projectName/:projectName/gatewayId/:gatewayId',{
            controller: 'GatewayServiceController',
            templateUrl:'/html/gateway-service'
        }).when('/projectName/:projectName/:projectId/mqTopic',{
            controller: 'TopicManagerController',
            templateUrl:'/html/topic-manager'
        }).when('/projectName/:projectName/:projectId/topicName/:topicName',{
            controller: 'ConsumeGroupController',
            templateUrl:'/html/consume-group'
        }).when('/projectName/:projectName/rateLimitManager',{
            controller: 'RateLimitController',
            templateUrl:'/html/rateLimit-manager'
        }).when('/projectManager',{
            controller: 'ProjectController',
            templateUrl:'/html/project-manager'
        }).when('/user',{
            controller: 'UserManagerController',
            templateUrl:'/html/user-manager'
        }).when('/projectName/:projectName/serviceManager',{
            controller: 'ServiceManagerController',
            templateUrl:'/html/service/service-manager'
        }).when('/projects/:projectName/protocol/HTTP/serviceGroup/:serviceGroupId',{
            controller: 'HttpServiceManagerController',
            templateUrl:'/html/service/http-service-manager'
        }).when('/projects/:projectName/protocol/HTTP/serviceId/:serviceId',{
            controller: 'HttpServiceManagerController',
            templateUrl:'/html/service/http-service-manager'
        }).when('/projects/:projectName/protocol/WebService/serviceGroup/:serviceGroupId',{
            controller: 'WebServiceManagerController',
            templateUrl:'/html/service/web-service-manager'
        }).when('/projects/:projectName/protocol/WebService/serviceId/:serviceId',{
            controller: 'WebServiceManagerController',
            templateUrl:'/html/service/web-service-manager'
        }).when('/projects/:projectName/protocol/Sap/serviceGroup/:serviceGroupId',{
            controller: 'SapServiceManagerController',
            templateUrl:'/html/service/sap-service-manager'
        }).when('/projects/:projectName/protocol/Sap/serviceId/:serviceId',{
            controller: 'SapServiceManagerController',
            templateUrl:'/html/service/sap-service-manager'
        }).when('/projects/:projectName/protocol/RuleNumber/serviceGroup/:serviceGroupId',{
            controller: 'RuleNumberManagerController',
            templateUrl:'/html/service/rule-number-manager'
        }).when('/projects/:projectName/protocol/RuleNumber/serviceId/:serviceId',{
            controller: 'RuleNumberManagerController',
            templateUrl:'/html/service/rule-number-manager'
        }).when('/projects/:projectName/protocol/EDS/serviceGroup/:serviceGroupId',{
            controller: 'NativeServiceManagerController',
            templateUrl:'/html/service/native-service-manager'
        }).when('/projects/:projectName/protocol/EDS/serviceId/:serviceId',{
            controller: 'NativeServiceManagerController',
            templateUrl:'/html/service/native-service-manager'
        }).when('/projects/:projectName/rateLimit/:strategyName/services',{
            controller: 'RateLimitServiceManagerController',
            templateUrl:'/html/service/rateLimit-service-manager'
        }).when('/projects/:projectName',{
            controller: 'MonitorPanelController',
            templateUrl:'/html/monitor-panel'
        }).when('/projects/:projectName/services',{
            controller: 'TopologyController',
            templateUrl:'/html/service-topology'
        }).when('/projectName/:projectName/log',{
            controller: 'LogInfoController',
            templateUrl:'/html/log-info'
        }).when('/applicationDeployment',{
            controller: 'ApplicationDeploymentController',
            templateUrl:'/html/application-deployment'
        }).when('/projectName/:projectName/BreakerServiceManager',{
            controller: 'BreakerManagersController',
            templateUrl:'/html/breaker-manager'
        }).when('/projects/:projectName/breaker/:configName/services',{
            controller: 'BreakerServiceManagerController',
            templateUrl:'/html/service/breaker-service-manager'
        }).when('/projectName/:projectName/responseTimeoutManager',{
            controller: 'ResponseTimeoutManagerController',
            templateUrl:'/html/response-timeout-manager'
        }).when('/projects/:projectName/timeout/:configName/services',{
            controller: 'ResponseTimeoutServiceManagerController',
            templateUrl:'/html/service/response-timeout-service-manager'
        }).when('/projectName/:projectName/RetryServiceManager',{
            controller: 'RetryManagerController',
            templateUrl:'/html/retry-manager'
        }).when('/projects/:projectName/retry/:configName/services',{
            controller: 'RetryServiceManagerController',
            templateUrl:'/html/service/retry-service-manager'
        }).when('/projectName/:projectName/threadlsolationManager',{
            controller: 'ThreadIsolationManagerController',
            templateUrl:'/html/thread-isolation-manager'
        }).when('/projects/:projectName/threadIsolation/:configName/services',{
            controller: 'ThreadIsolationServiceManagerController',
            templateUrl:'/html/service/thread-isolation-service-manager'
        }).when('/projects/:projectName/threadState/see',{
            controller: 'ThreadStateController',
            templateUrl:'/html/thread-state'
        }).when('/projectName/:projectName/loggerLevelManager',{
            controller: 'LoggerLevelController',
            templateUrl:'/html/loggerLevel-manager'
        }).when('/projectName/:projectName/serviceGroupManager',{
            controller: 'ServiceGroupController',
            templateUrl:'/html/service-group'
        }).when('/projectId/:projectId/projectName/:projectName/dictConfig',{
            controller: 'DictConfigController',
            templateUrl:'/html/dict-manager'
        }).when('/projectId/:projectId/projectName/:projectName/timerManager',{
            controller: 'TimerController',
            templateUrl:'/html/timer'
        }).when('/projectName/:projectName/:traceId/serviceDispatch',{
            controller: 'ServiceDispatchController',
            templateUrl:'/html/service-dispatch'
        }).when('/system/:projectName/mqMonitor',{
            controller: 'MqMonitorController',
            templateUrl:'/html/mq-monitor'
        }).when('/projectId/:projectId/projectName/:projectName/dataSourceConfig',{
            controller: 'DataSourceConfigController',
            templateUrl:'/html/data-source-config'
        }).when('/projectId/:projectId/projectName/:projectName/routeConfig',{
            controller: 'RouteConfigController',
            templateUrl:'/html/route-config'
        }).otherwise({
            redirectTo: '/locusMonitor'
        });
    }]);

    var processingModeSource = [
        {processingMode: "SINGLE", processing: "单条消费"},
        {processingMode: "MULTITERM", processing: "批量消费"}
    ]

    app.filter('processingModeFilter',function () {
        return function (input) {
            for (var i = 0 ; i<processingModeSource.length;i++){
                if (processingModeSource[i].processingMode == input)
                    return processingModeSource[i].processing;
            }
        }
    });

    var concurrencyModeSource = [
        {concurrencyMode: "SEQUENCE", concurrency: "顺序模式"},
        {concurrencyMode: "CONCURRENCY", concurrency: "并发模式"}
    ]

    app.filter('concurrencyModeFilter',function () {
        return function (input) {
            for (var i = 0 ; i<concurrencyModeSource.length;i++){
                if (concurrencyModeSource[i].concurrencyMode == input)
                    return concurrencyModeSource[i].concurrency;
            }
        }
    });

    var states = [
        {statesId: 0, statesName: "失败"},
        {statesId: 1, statesName: "等待移除"},
        {statesId: 2, statesName: "移除成功"}
    ]

    app.filter('statesFilter',function () {
        return function (input) {
            for (var i = 0 ; i<states.length;i++){
                if (states[i].statesId == input)
                    return states[i].statesName;
            }
        }
    });

    var timeUnitRef = [
        {timeUnitValue: "NANOSECONDS", timeUnitName: "纳秒"},
        {timeUnitValue: "MICROSECONDS", timeUnitName: "微秒"},
        {timeUnitValue: "MILLISECONDS", timeUnitName: "毫秒"},
        {timeUnitValue: "SECONDS", timeUnitName: "秒"},
        {timeUnitValue: "MINUTES", timeUnitName: "分"},
        {timeUnitValue: "HOURS", timeUnitName: "时"},
        {timeUnitValue: "DAYS", timeUnitName: "日"}
    ]

    app.filter('timeUnitRefFilter',function () {
        return function (input) {
            for (var i = 0 ; i<timeUnitRef.length;i++){
                if (timeUnitRef[i].timeUnitValue == input)
                    return timeUnitRef[i].timeUnitName;
            }
        }
    });
    app.filter('maxLength', function() {
        return function(input, maxLength) {
            if (!input) return '';
            var newLen = 0,
                newStr = "",
                chineseRegex = /[^\x00-\xff]/g,
                singleChar = "",
                len = input.replace(chineseRegex, "**").length;
            for (var i = 0; i < len; i++) {
                singleChar = input.charAt(i).toString();
                if (singleChar.match(chineseRegex) != null) {
                    newLen += 2;
                } else {
                    newLen++;
                }
                if (newLen > maxLength) break;
                newStr += singleChar;
            }

            if (len > maxLength) {
                newStr += "...";
            }
            return newStr;
        };
    });

});