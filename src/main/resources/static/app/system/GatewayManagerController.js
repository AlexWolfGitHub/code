define([
    'angular',
    'jquery',
    'system/elasticLayout'
], function (angular, $) {
    return  function ($scope, Resource, $dataSourceManager,GillionMsg,$timeout,$routeParams,$rootScope) {
            elasticLayout();
            $scope.projectId = $routeParams.projectId;
            $scope.projectName = $routeParams.projectName;
            $('#titleName').html("网关配置");
            var gatewayConfigResource = Resource("/esb-manager/projects/:projectName/gateway",{
                "projectName":"@projectName"
            },{
                "save":{
                    "url":"/esb-manager/projects/:projectName/gateway",
                    "method":"POST"
                },
                "update":{
                    "url":"/esb-manager/projects/:projectName/gateway",
                    "method":"PUT"
                },
                "delete":{
                    "url":"/esb-manager/projects/:projectName/gateway/:gatewayId",
                    "method":"DELETE"
                }
            })
            $scope.gatewayParams = {
                projectName:$scope.projectName
            }
            //查询
            $scope.searchGatewayConfig = function () {
                $dataSourceManager.dataSources["GatewayConfigSource"].doRequestData(1,$scope.gatewayParams);
            }
            //打开新增网关配置界面
            $scope.add = function () {
                $scope.inbound = {signCheckFilter:{}};
                $scope.outbound = {signCheckFilter:{}};
                $scope.gatewayConfig = {
                    projectName:$scope.projectName,
                    projectId:$scope.projectId
                };
                $('#signCheckTab li:first').tab('show');
                $('#signCheckTab li').click(function (e) {
                    e.preventDefault();
                    $(this).tab('show');
                })
                $("#gatewayConfigModal").modal();
            }

            $scope.$watch('filter.signCheckFilter',function (newValue) {
                if(newValue){
                    $timeout(function () {
                        $('#signCheckTab li:first').tab('show');
                        $('#signCheckTab li').click(function (e) {
                            e.preventDefault();
                            $(this).tab('show');
                        })
                    })
                }
            })

        $scope.$watch('gatewayConfig.protocol',function (newValue) {
            if(newValue){
                switch (newValue){
                    case "EDS":
                        $scope.showWebServiceSettings = false;
                        $scope.showEDSSettings = true;
                        break;
                    case "WebService":
                        $scope.showEDSSettings = false;
                        $scope.showWebServiceSettings = true;
                        break;
                    default:
                        $scope.showWebServiceSettings = false;
                        $scope.showEDSSettings = false;
                }
            }
        })

            $scope.save = function () {
                setGatewayConfig();
                //编辑网关配置
                if($scope.gatewayConfig.id){
                    gatewayConfigResource.update($scope.gatewayConfig,function (response) {
                        if(response.success){
                            $scope.searchGatewayConfig();
                            $("#gatewayConfigModal").modal('hide');
                            $scope.showWebServiceSettings = false;
                            $scope.showEDSSettings = false;
                        }
                    })
                } else {//新增网关配置
                    gatewayConfigResource.save($scope.gatewayConfig,function (response) {
                        if(response.success){
                            $scope.searchGatewayConfig();
                            $("#gatewayConfigModal").modal('hide');
                            $scope.showWebServiceSettings = false;
                            $scope.showEDSSettings = false;
                        }
                    })
                }
            }
            function setGatewayConfig(){
                var inboundFilters = new Array;
                var outboundFilters = new Array;
                if($scope.inbound.signCheckFilterStatus){
                    $scope.inbound.signCheckFilter.filterName = "SIGN_CHECK_FILTER";
                    inboundFilters.push($scope.inbound.signCheckFilter);
                }
                if($scope.inbound.appKeyFilter){
                    inboundFilters.push({filterName:'APPKEY_FILTER'});
                }
                if($scope.inbound.timelinessFilter){
                    inboundFilters.push({filterName:'TIMELINESS_FILTER'});
                }
                if($scope.outbound.signCheckFilterStatus){
                    $scope.outbound.signCheckFilter.filterName = "SIGN_CHECK_FILTER";
                    outboundFilters.push($scope.outbound.signCheckFilter);
                }
                if($scope.outbound.appKeyFilter){
                    outboundFilters.push({filterName:'APPKEY_FILTER'});
                }
                if($scope.outbound.timelinessFilter){
                    outboundFilters.push({filterName:'TIMELINESS_FILTER'});
                }

                $scope.gatewayConfig.filters = {
                    inboundFilters:inboundFilters,
                    outboundFilters:outboundFilters
                };
                // if($scope.gatewayConfig.errorConversionStatus){
                //     $scope.gatewayConfig.errorTemplate = JSON.parse($scope.gatewayConfig.errorTemplate);
                // }
            }
            //打开网关配置编辑界面
            $scope.updateGatewayConfig = function (row) {
                $scope.inbound = {signCheckFilter:{}};
                $scope.outbound = {signCheckFilter:{}};
                $scope.gatewayConfig = _.clone(row);
                var inboundFilters = $scope.gatewayConfig.filters.inboundFilters;
                var outboundFilters = $scope.gatewayConfig.filters.outboundFilters;
                for(var i=0;i<inboundFilters.length;i++){
                    if(inboundFilters[i].filterName == "SIGN_CHECK_FILTER"){
                        $scope.inbound.signCheckFilterStatus = true;
                        $scope.inbound.signCheckFilter.filterName = "SIGN_CHECK_FILTER";
                        $scope.inbound.signCheckFilter.key = inboundFilters[i].key;
                        $scope.inbound.signCheckFilter.field = inboundFilters[i].field;
                        $scope.inbound.signCheckFilter.settings = inboundFilters[i].settings;
                    }else if(inboundFilters[i].filterName == "APPKEY_FILTER"){
                        $scope.inbound.appKeyFilter = true;
                    }else if(inboundFilters[i].filterName == "TIMELINESS_FILTER"){
                        $scope.inbound.timelinessFilter = true;
                    }
                }
                for(var i=0;i<outboundFilters.length;i++){
                    if(outboundFilters[i].filterName == "SIGN_CHECK_FILTER"){
                        $scope.outbound.signCheckFilterStatus = true;
                        $scope.outbound.signCheckFilter.filterName = "SIGN_CHECK_FILTER";
                        $scope.outbound.signCheckFilter.key = outboundFilters[i].key;
                        $scope.outbound.signCheckFilter.field = outboundFilters[i].field;
                        $scope.outbound.signCheckFilter.settings = outboundFilters[i].settings;
                    }else if(outboundFilters[i].filterName == "APPKEY_FILTER"){
                        $scope.outbound.appKeyFilter = true;
                    }else if(outboundFilters[i].filterName == "TIMELINESS_FILTER"){
                        $scope.outbound.timelinessFilter = true;
                    }
                }
                // if($scope.gatewayConfig.errorTemplate!=null && $scope.gatewayConfig.errorTemplateConverter!=null){
                //     $scope.gatewayConfig.errorTemplate = JSON.stringify($scope.gatewayConfig.errorTemplate);
                //     $scope.gatewayConfig.errorConversionStatus = true;
                // }
                $('#signCheckTab li:first').tab('show');
                $('#signCheckTab li').click(function (e) {
                    e.preventDefault();
                    $(this).tab('show');
                })
                $("#gatewayConfigModal").modal();
            }
            //删除网关配置
            $scope.deleteGatewayConfig = function (record) {
                GillionMsg.confirm('提示信息', '是否确定删除？', function (r) {
                    if (r) {
                        gatewayConfigResource.delete({projectName:record.projectName,gatewayId:record.id},function(response){
                            if(response.success){
                                $scope.searchGatewayConfig();
                            }
                        })
                    }
                })
            }

        $scope.protocolSource = [
            {protocolName:"EDS",protocolValue:"EDS"},
            {protocolName:"Netty",protocolValue:"Netty"},
            {protocolName:"WebService",protocolValue:"WebService"},
            {protocolName:"Http",protocolValue:"HTTP"}
        ]
            
        }
});