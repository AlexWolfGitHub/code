define(['angular',
    'jquery',
    'system/FlowChart',
    'system/ComponentSettings',
    'bootstrap',
    'svg',
],function (angular, $,FlowChart,Component) {
    return function ($scope, Resource, $dataSourceManager,GillionMsg,$timeout,$routeParams,$rootScope,$compile) {
        var serviceGroupResource = Resource("/esb-manager/projects/:projectName/serviceGroup/:id",{
            "projectName":"@projectName",
            "id":"@id"
        });
        var component = new Component();
        var flowChart= new FlowChart({
            el: "#flowChart",
            nodes: [],
            connections: [],
            onClick: function (el, node) {
            }
        });
        $scope.components = component.getComponents();
        //根据服务信息初始化
        $scope.initService = function (data) {
            $scope.nodes = [];
            $scope.connections = [];
            $scope.service = data;
            $scope.service.protocol = "EDS";

            $scope.service.projectName = $routeParams.projectName;
            serviceGroupResource.get({projectName : $routeParams.projectName,id:$scope.service.serviceGroupId},function (response) {
                if(response.success){
                    $('#nativeService').scope().serviceGroupName = response.data.name;
                }
            })
            $scope.service.flow.componentQueue = transformComponentQueue();
            flowChart.flowModel.nodes =$scope.nodes;
            flowChart.flowModel.connections =$scope.connections;
            $('#nativeService').scope().service = $scope.service;
            $scope.showSettings = false;
        }

        //数据转换配置初始化
        $scope.initTransform = function (transform) {
            flowChart.$el = $("#flowChart")
            if(transform){
                $scope.nodes = [];
                $scope.connections = [];
                $scope.service = {flow:{componentQueue:transform}}
                $scope.service.flow.componentQueue = transformComponentQueue();
                flowChart.flowModel.nodes =$scope.nodes;
                flowChart.flowModel.connections =$scope.connections;
            }else {
                $scope.service = {};
                flowChart.flowModel.nodes = [];
                flowChart.flowModel.connections = [];
                flowChart.deleteDrawing();
            }
            setTimeout(function () {
                flowChart.reRender();
            },500)
            $scope.showSettings = false;
        }

        $scope.initGatewayService = function (componentQueue) {
            flowChart.$el = $("#edsServiceModal #flowChart");
            if(componentQueue){
                $scope.nodes = [];
                $scope.connections = [];
                $scope.service = {flow:{componentQueue:componentQueue}}
                $scope.service.flow.componentQueue = transformComponentQueue();
                flowChart.flowModel.nodes =$scope.nodes;
                flowChart.flowModel.connections =$scope.connections;
            }else {
                $scope.service = {};
                flowChart.flowModel.nodes = [];
                flowChart.flowModel.connections = [];
                flowChart.deleteDrawing();
            }
            setTimeout(function () {
                flowChart.reRender();
            },500)
            $scope.showSettings = false;
        }


        //编辑时将组件信息转换成界面显示需要的格式
        function transformComponentQueue(){
            var componentQueue = [];
            var sourceName;
            for(key in $scope.service.flow.componentQueue){
                var componentCode = $scope.service.flow.componentQueue[key].componentName;
                var title = component.getComponentName(componentCode);
                if(componentQueue[componentCode]!=null){
                    var size = 0;
                    for(name in componentQueue){
                        if(name.indexOf(componentCode)>-1){
                            var nodeSize = name.replace(componentCode,'');
                            if(nodeSize!=''&&nodeSize>size){
                                size = new Number(nodeSize);
                            }
                        }
                    }
                    componentCode = componentCode+(size+1);
                }
                if(sourceName != null){
                    $scope.connections.push({"source":sourceName,"target":componentCode});
                }
                sourceName = componentCode;
                $scope.nodes.push({"id":componentCode,"title":title});
                componentQueue[componentCode]={"settings":$scope.service.flow.componentQueue[key].settings}
            }
            return componentQueue;
        }

        $("#flowChart").delegate(".topology-element","click",function($event){
            $scope.$apply(function () {
                initNodeSettings();
            })
        });


        function initNodeSettings() {
            var componentId = document.getElementsByClassName('topology-element selected')[0].id;
            $scope.componentName = document.getElementsByClassName('topology-element selected')[0].firstElementChild.innerHTML;
            var html = component.getComponentSettings(componentId);
            if(html){
                var $html = $compile(html)($scope);
                $("#component-settings").html(
                    $html
                )
                $scope.showSettings = true;
            }else {
                $scope.service.flow.componentQueue[component.getComponentCode(componentId)] = {};
                $scope.showSettings = false;
            }
        }
        //数据映射组件，选择组件和广播组件配置信息添加
        $scope.addComponentNode = function ($event,nodeName,componentId) {
             if(nodeName == 'flowNodes'){
                if(!$scope.service.flow){
                    $scope.service.flow = {componentQueue:{}}
                    $scope.service.flow.componentQueue[componentId] = {settings:{}}
                    $scope.service.flow.componentQueue[componentId].settings.flows = [];
                }else if(!$scope.service.flow.componentQueue[componentId]){
                    $scope.service.flow.componentQueue[componentId] = {settings:{}}
                    $scope.service.flow.componentQueue[componentId].settings.flows = [];
                }
                $scope.service.flow.componentQueue[componentId].settings.flows.push({
                    serviceMapping:[]
                });
            }else {
                 if(!$scope.service.flow){
                     $scope.service.flow = {componentQueue:{}}
                     $scope.service.flow.componentQueue[componentId] = {settings:[]}
                 }else if(!$scope.service.flow.componentQueue[componentId]){
                     $scope.service.flow.componentQueue[componentId] = {settings:[]}
                 }
                 if(nodeName == "dataDecoderNodes"){
                     $scope.service.flow.componentQueue[componentId].settings.push({
                         selector:[],
                         dictCode:[],
                         reversal:false
                     });
                 }else{
                     $scope.service.flow.componentQueue[componentId].settings.push({
                         type:[],
                         expression:[],
                         serviceMapping:[]
                     });
                 }

             }
        }
        //数据映射组件,选择组件和广播组件配置信息删除
        $scope.deleteNode = function(row,nodeName,componentId){
            if (nodeName == "dataDecoderNodes"||nodeName == "choiceNodes"){
                for (var i = 0; i < $scope.service.flow.componentQueue[componentId].settings.length; i++) {
                    if ($scope.service.flow.componentQueue[componentId].settings[i] == row) {
                        $scope.service.flow.componentQueue[componentId].settings.splice(i, 1);
                        break;
                    }
                }
            }else if(nodeName == 'flowNodes'){
                for (var i = 0; i < $scope.service.flow.componentQueue[componentId].settings.flows.length; i++) {
                    if ($scope.service.flow.componentQueue[componentId].settings.flows[i] == row) {
                        $scope.service.flow.componentQueue[componentId].settings.flows.splice(i, 1);
                        break;
                    }
                }
            }
        }

        $scope.addNode = function ($event) {

            var el = $event.target;
            if(el.children.length==0){
                var _id = getNodeId(el);
                var _title = $(el).text();
                var newNode = {
                    id : _id,
                    title: _title
                }
                flowChart.addNode(newNode);
                flowChart.reRender();
                flowChart.$el.find(".topology-element").last().addClass("selected");
                initNodeSettings();
            }
        };

        function getNodeId(el) {
            var _id = $(el).attr("data-id");
            var nodes = $('[id^='+_id+']');
            if(nodes.length == 0){
                return _id;
            }else{
                var size=0;
                nodes.each(function (i) {
                    var nodeSize = $(this)[0].id.replace(_id,'');
                    if(nodeSize!=''&&new Number(nodeSize)>size){
                        size = new Number(nodeSize);
                    }
                })
                return _id+(size+1);
            }
        }
        setTimeout(function () {
            flowChart.render();
        }, 500);

        $scope.getService = function () {
            return $scope.service;
        }

        //联想控件数据源参数赋值
        $scope.mqQueueParams = {
            projectName : $routeParams.projectName
        }
        $scope.dictConfigParams = {
            projectName : $routeParams.projectName
        }
        $scope.routeConfigParams = {
            projectName : $routeParams.projectName
        }
        $scope.dataSourceParams = {
            projectName : $routeParams.projectName
        }
        //编辑时联想控件赋值
        $scope.asyncDisplayInitDataDecoder = function (value, callback) {
            var dataDecoderResource = Resource('/esb-manager/projects/:projectName/dictConfigs',{'projectName':$routeParams.projectName,'dictCode':value});
            dataDecoderResource.get(function (result){
                if(result.records.length==1){
                    callback(result.records[0].dictName);
                }
            })
        }
        //服务查询界面相关操作
        $scope.protocols = [{"name":"Netty","value":"netty://"},{"name":"HTTP","value":"http://"},{"name":"WebService","value":"webService://"},{"name":"EDS","value":"eds://"},{"name":"RuleNumber","value":"ruleNumber://"},{"name":"Sap","value":"sap://"}]
        $scope.searchParams = {projectName:$routeParams.projectName}
        $scope.goPage = function (size) {
            $dataSourceManager.dataSources["ServiceSource"].doRequestData(size,$scope.searchParams);
        }

        $scope.selectProtocol = function (protocolName) {
            $scope.searchParams.protocol = protocolName;
            $dataSourceManager.dataSources["ServiceSource"].doRequestData(1,$scope.searchParams);
        }
        $scope.selectService = function(serviceMapping){
            if(component.getComponentCode(componentName) == 'broadcastComponent'){
                try {
                    $scope.service.flow.componentQueue[componentName].settings.flows[serviceMappingIndex].serviceMapping=serviceMapping;
                }catch (e){
                    $scope.service.flow.componentQueue[componentName] = {settings:{flows:[]}}
                    $scope.service.flow.componentQueue[componentName].settings.flows[serviceMappingIndex] ={serviceMapping:serviceMapping}
                }
            }else if(component.getComponentCode(componentName) == 'choiceComponent'){
                try {
                    $scope.service.flow.componentQueue[componentName].settings[serviceMappingIndex].serviceMapping=serviceMapping;
                }catch (e){
                    $scope.service.flow.componentQueue[componentName] = {settings:{serviceMapping:{}}}
                    $scope.service.flow.componentQueue[componentName].settings[serviceMappingIndex].serviceMapping=serviceMapping;
                }
            }else {
                try {
                    $scope.service.flow.componentQueue[componentName].settings[fieldName]=serviceMapping;
                }catch (e){
                    $scope.service.flow.componentQueue[componentName] = {settings:{}}
                    $scope.service.flow.componentQueue[componentName].settings[fieldName]=serviceMapping;
                }
            }
            $scope.serviceShow = false;
        }
        var componentName = null;
        var fieldName = null;
        var serviceMappingIndex = null;

        $scope.showService = function ($event,componentId,field,index) {
            componentName = componentId;
            fieldName = field;
            var position = getElemPos($event.target);
            $scope.serviceShowStyle = {
                top:position.y+$event.target.offsetHeight-130,
                left:position.x-200
            }
            $scope.searchParams = {projectName:$routeParams.projectName};
            $scope.goPage(1);
            $scope.serviceShow = true;
            serviceMappingIndex = index;
            if(component.getComponentCode(componentName) == 'broadcastComponent'){
                $scope.$watch("service.flow.componentQueue."+componentName+".settings.flows",function (newValue) {
                    var serviceName = _.clone(newValue[index][fieldName]);
                    for(var i=0;i<$scope.protocols.length;i++){
                        if(serviceName != null&&serviceName.indexOf($scope.protocols[i].value)>-1){
                            serviceName = serviceName.replace($scope.protocols[i].value,'');
                            $scope.searchParams.protocol = $scope.protocols[i].name;
                            break;
                        }
                    }
                    $scope.searchParams.serviceName = serviceName;
                    $dataSourceManager.dataSources["ServiceSource"].doRequestData(1,$scope.searchParams);
                },true)
            }else if(component.getComponentCode(componentName) == 'choiceComponent'){
                $scope.$watch("service.flow.componentQueue."+componentName+".settings",function (newValue) {
                    var serviceName = _.clone(newValue[index][fieldName]);
                    for(var i=0;i<$scope.protocols.length;i++){
                        if(serviceName != null&&serviceName.indexOf($scope.protocols[i].value)>-1){
                            serviceName = serviceName.replace($scope.protocols[i].value,'');
                            $scope.searchParams.protocol = $scope.protocols[i].name;
                            break;
                        }
                    }
                    $scope.searchParams.serviceName = serviceName;
                    $dataSourceManager.dataSources["ServiceSource"].doRequestData(1,$scope.searchParams);
                },true)
            }else{
                $scope.$watch("service.flow.componentQueue."+componentName+".settings."+fieldName,function (newValue) {
                    var serviceName = _.clone(newValue);
                    for(var i=0;i<$scope.protocols.length;i++){
                        if(serviceName != null&&serviceName.indexOf($scope.protocols[i].value)>-1){
                            serviceName = serviceName.replace($scope.protocols[i].value,'');
                            $scope.searchParams.protocol = $scope.protocols[i].name;
                            break;
                        }
                    }
                    $scope.searchParams.serviceName = serviceName;
                    $dataSourceManager.dataSources["ServiceSource"].doRequestData(1,$scope.searchParams);
                })
            }
        }
        $('#serviceShow').bind('click', function (e) {
            stopPropagation(e);
        });
        $(document).bind('click', function (e) {
            if(e.target.id.indexOf('ServiceSign')<0){
                $scope.$apply(function () {
                    $scope.serviceShow = false;
                })
            }
        });
        $(document).bind('mousewheel', function (e) {
            $scope.$apply(function () {
                $scope.serviceShow = false;
            })
        });




        function stopPropagation(e) {
            if (e.stopPropagation)
                e.stopPropagation();
            else
                e.cancelBubble = true;
        }
        function getElemPos(obj){
            var pos = {"top":0, "left":0};
            if (obj.offsetParent){
                while (obj.offsetParent){
                    pos.top += obj.offsetTop;
                    pos.left += obj.offsetLeft;
                    obj = obj.offsetParent;
                }
            }else if(obj.x){
                pos.left += obj.x;
            }else if(obj.x){
                pos.top += obj.y;
            }
            if(pos.left+550>1360){
                pos.left = 1360 -550;
            }
            return {x:pos.left, y:pos.top};
        }
    }
})