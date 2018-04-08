define([
    'jquery',
    'underscore'
], function ($, _) {

    var Component = function () {}
    var component = Component.prototype;
    component.getComponentSettings = function(componentId) {
        var componentCode = component.getComponentCode(componentId);
        if(componentSettings[componentCode]){
            var settings = componentSettings[componentCode];
            if(settings.length==0){
                return false;
            }
            return component.initSettings(settings,componentId);
        }
    }
    component.getComponents = function () {
        return components;
    }
    component.initSettings = function(settings,componentId){
        var str = new StringBuilder();
        for(var i=0;i<settings.length;i++){
            str.append(getHtml(settings[i],componentId));
        }
        return str.toString('');
    }

    component.getComponentName = function(compontCode){
        return components[compontCode];
    }

    component.getComponentCode = function(componentId) {
        for(key in components){
            if(componentId.indexOf(key)!=-1){
                return key;
            }
        }
    }

    function getHtml(setting,componentId) {
        switch (setting.type){
            case 'text':
                if(setting.if){
                    return "<div class='form-group' ng-if='service.flow.componentQueue."+componentId+".settings."+setting.if+"'><label>"+setting.title+"</label> <input type='text' class='form-control' placeholder='"+setting.title+"' ng-model='service.flow.componentQueue."+componentId+'.settings.'+setting.field+"'/> </div>"
                }else {
                    return "<div class='form-group'><label>"+setting.title+"</label> <input type='text' class='form-control' placeholder='"+setting.title+"' ng-model='service.flow.componentQueue."+componentId+'.settings.'+setting.field+"'/> </div>"
                }
            case 'textarea':
                return "<div class='form-group'><label>"+setting.title+"</label> <textarea rows='6'  class='form-control' placeholder='"+setting.title+"' ng-model='service.flow.componentQueue."+componentId+'.settings.'+setting.field+"'></textarea> </div>"
            case 'checkbox':
                if(setting.if){
                    return "<div class='form-group' ng-if='service.flow.componentQueue."+componentId+".settings."+setting.if+"'><label>"+setting.title+"</label> <input type='checkbox'  class='form-control' placeholder='"+setting.title+"' ng-model='service.flow.componentQueue."+componentId+'.settings.'+setting.field+"'/> </div>"
                }else {
                    return "<div class='form-group'><label>"+setting.title+"</label> <input type='checkbox'  class='form-control' placeholder='"+setting.title+"' ng-model='service.flow.componentQueue."+componentId+'.settings.'+setting.field+"'/> </div>"
                }
            case 'json':
                return component.initSettings(setting.settings,componentId)
            case 'button':
                var str = new StringBuilder();
                if(component.getComponentCode(componentId) == 'broadcastComponent'){
                    str.append("<div class='form-group'><button type='button' ng-click='addComponentNode($event,\""+setting.nodeName+"\",\""+componentId+"\")'>"+setting.title+"</button></div><div name='"+setting.nodeName+"' ng-repeat='row in service.flow.componentQueue."+componentId+".settings.flows'><div style='border:1px solid #cccccc'>");
                }else {
                    str.append("<div class='form-group'><button type='button' ng-click='addComponentNode($event,\""+setting.nodeName+"\",\""+componentId+"\")'>"+setting.title+"</button></div><div name='"+setting.nodeName+"' ng-repeat='row in service.flow.componentQueue."+componentId+".settings'><div style='border:1px solid #cccccc'>");
                }
                str.append(component.initSettings(setting.settings,componentId));
                str.append("<button type=button  ng-click='deleteNode(row,\""+setting.nodeName+"\",\""+componentId+"\")'><i class='fi fi-close-xs'></i></button></div></div>");
                return str.toString('');
            case 'select':
                var str = new StringBuilder();
                str.append("<div class='form-group'><label>"+setting.title+"</label> <select class='form-control'  ng-model='service.flow.componentQueue."+componentId+'.settings.'+setting.field+"'>");
                for(var i=0;i<setting.settings.length;i++){
                    str.append("<option value='"+setting.settings[i].value+"'>"+setting.settings[i].title+"</option>");
                }
                str.append("</select> </div>");
                return str.toString('');
            case 'associate':
                var str = new StringBuilder();
                str.append("<g-data-source url='"+setting.url+"'  data-source-name='"+setting.datasourceName+"' page='true'\n" +
                    "                data-params='"+setting.params+"' ></g-data-source>"+
                    "<div class='form-group'><label>"+setting.title+"</label> "+
                    "<div class='form-group'><g-associate ng-cloak data-source-name='"+setting.datasourceName+"' keyword-prop='"+setting.requestParamName+"' selected-row='selectedRow4"+setting.field+"'" );
                if(setting.asyncDisplayInit){
                    str.append("async-display-init='"+setting.asyncDisplayInit+"(value, callback)'");
                }
                str.append(" delay-time='400' unmatch-remove='true' ng-model='service.flow.componentQueue."+componentId+'.settings.'+setting.field+"' display-init='service.flow.componentQueue."+componentId+'.settings.'+setting.field+"'" +
                    " display-express='"+setting.displayExpress+"' value-prop='"+setting.valueProp+"'>\n" +
                    "   <g-associate-column width='100px' display-express='"+setting.displayExpress+"' >"+setting.title+"</g-associate-column>\n" +
                    "   </g-associate> </div></div>");
                return  str.toString('');
            case 'service':
                return "<div class='form-group'><label>"+setting.title+"</label> " +
                    "<input type='text' class='form-control' id='"+setting.id+"' placeholder='"+setting.title+"' ng-model='service.flow.componentQueue."+componentId+'.settings.'+setting.field+"' ng-click='showService($event,\""+componentId+"\",\""+setting.field+"\")'/></div>"
            //按钮点击后添加
            case 'addText':
                if(setting.if){
                    return"<div ng-if='row."+setting.if+"'>"+setting.title+"：<input type='text' placeholder='"+setting.title+"' ng-model='row."+setting.field+"'/> </div>";
                }else{
                    return"<div>"+setting.title+"：<input type='text' placeholder='"+setting.title+"' ng-model='row."+setting.field+"'/> </div>";
                }
            case 'addTextarea':
                return "<div>"+setting.title+":<textarea rows='6'  placeholder='"+setting.title+"' ng-model='row."+setting.field+"'></textarea> </div>";
            case 'addCheckbox':
                return "<div>"+setting.title+": <input type='checkbox' placeholder='"+setting.title+"' ng-model='row."+setting.field+"'/> </div>";
            case 'addSelect':
                var str = new StringBuilder();
                str.append("<div>"+setting.title+"： <select   ng-model='row."+setting.field+"'>");
                for(var i=0;i<setting.settings.length;i++){
                    str.append("<option value='"+setting.settings[i].value+"'>"+setting.settings[i].title+"</option>");
                }
                str.append("</select> </div>");
                return str.toString('');
            case 'addAssociate':
                var str = new StringBuilder();
                str.append("<g-data-source url='"+setting.url+"'  data-source-name='"+setting.datasourceName+"' page='true'\n" +
                    "                data-params='"+setting.params+"' ></g-data-source>"+
                    "<div class='form-group'><label>"+setting.title+"</label> "+
                    "<div class='form-group'><g-associate ng-cloak data-source-name='"+setting.datasourceName+"' keyword-prop='"+setting.requestParamName+"' selected-row='selectedRow4"+setting.field+"'\n" +
                    "  delay-time='400' unmatch-remove='true' ng-model='row."+setting.field+"' display-init='row."+setting.field+"' ");
                if(setting.asyncDisplayInit){
                    str.append("async-display-init='"+setting.asyncDisplayInit+"(value, callback)'")
                }
                str.append("                      display-express='"+setting.displayExpress+"' value-prop='"+setting.valueProp+"'>\n" +
                    "   <g-associate-column width='100px' display-express='"+setting.displayExpress+"' >"+setting.title+"</g-associate-column>\n" +
                    "   </g-associate> </div></div>")
                return  str.toString('');
            case 'addService':
                return "<div>"+setting.title+":<input type='text' id='"+setting.id+"' placeholder='"+setting.title+"' ng-model='row."+setting.field+"' ng-click='showService($event,\""+componentId+"\",\""+setting.field+"\",$index)'/></div>"
        }
    }


    function StringBuilder() {
        this._stringArray = new Array();
    }
    StringBuilder.prototype.append = function(str){
        this._stringArray.push(str);
    }
    StringBuilder.prototype.toString = function(joinGap){
        return this._stringArray.join(joinGap);
    }

    var componentSettings = {
        'lockComponent':[{
            'title':'加锁字段',
            'type':'text',
            'field':'lockByField'
        },{
            'title':'最长持有锁时间(ms)',
            'type':'text',
            'field':'maxLockTime'
        },{
            'title':'服务名',
            'type':'service',
            'field':'serviceMapping',
            'id':'lockServiceSign'

        },{
            'title':'锁类型',
            'type':'select',
            'field':'lockType',
            'settings':[{
                'title':'单把锁',
                "value":"0"
            },{
                'title':'多把锁',
                "value":"1"
            }]
        }],
        'asyncMqConsumerComponent':[{

        }],
        'systemResourceComponent':[{
            'title':'资源ID',
            'type':'text',
            'field':'resourceId'
        }],
        'jdbcComponent':[{
            'title':'数据源名称',
            'type':'associate',
            'field':'dataSourceName',
            'displayInit':'dataSourceName',
            'datasourceName':"dataSource",
            'displayExpress':"dataSourceName",
            'valueProp':'dataSourceName',
            'requestParamName':"dataSourceName",
            'url':'/esb-manager/projects/:projectName/dataSourceConfig',
            'params':'dataSourceParams'
        },{
            'title':'sql语句',
            'type':'text',
            'field':'sql'
        },{
            'title':'执行类型',
            'type':'select',
            'field':'type',
            'settings':[{
                'title':'GET',
                "value":"GET"
            },{
                'title':'POST',
                "value":"POST"
            },{
                'title':'PUT',
                "value":"PUT"
            },{
                'title':'DELETE',
                "value":"DELETE"
            }]
        },{
            'title':'失败重试次数',
            'type':'text',
            'field':'retryTimes'
        },{
            'title':'参数配置',
            'type':'textarea',
            'field':'params'
        }],
        'mqComponent':[{
            'title':'队列名称',
            'type':'associate',
            'field':'topicName',
            'displayInit':'topicName',
            'datasourceName':"MQQueueSource",
            'displayExpress':"topicName",
            'valueProp':'topicName',
            'requestParamName':"topicName",
            'url':'/esb-manager/projects/:projectName/mqTopic',
            'params':'mqQueueParams'
        }],
        'broadcastComponent':[{
            'title':'添加流程',
            'type':'button',
            'nodeName':'flowNodes',
            'settings':[{
                'type':'json',
                'field':'flows',
                'settings':[{
                    'title':'服务名',
                    'type':'addService',
                    'field':'serviceMapping',
                    'id':'ServiceSign'
                }]
            }]
        },{
            'title':'是否容错',
            'type':'checkbox',
            'field':'faultTolerant'
        }],
        'edi2xmlComponent':[{
            'title':'EDI转XML映射配置',
            'type':'textarea',
            'field':'settings'
        }],
        'xml2ediComponent':[{
            'title':'XML转EDI映射配置',
            'type':'textarea',
            'field':'settings'
        }],
        'xml2jsonComponent':[{
            'title':'XML转JSON映射配置',
            'type':'textarea',
            'field':'settings'
        }],
        'xml2xmlComponent':[{
            'title':'XML转XML映射配置',
            'type':'textarea',
            'field':'settings'
        }],
        'string2jsonComponent':[],
        'json2stringComponent':[],
        'batchComponent':[{
            'title':'服务名',
            'type':'service',
            'field':'serviceMapping',
            'id':'batchServiceSign'
        },{
            'title':'是否容错',
            'type':'checkbox',
            'field':'faultTolerant'
        },{
            'title':'处理模式',
            'type':'select',
            'field':'mode',
            'settings':[{
                'title':'串行',
                "value":"SERIAL"
                },{
                'title':'并行',
                "value":"CONCURRENT"
            }]
        },{
            'title':'处理数据',
            'type':'text',
            'field':'batchDataRef',
        }],
        'dataDecoderComponent':[{
            'title':'添加节点',
            'type':'button',
            'nodeName':'dataDecoderNodes',
            'settings':[{
                'title':'转换节点',
                'type':'addText',
                'field':'selector'
            },{
                'title':'转换编码',
                'type':'addAssociate',
                'field':'dictCode',
                'displayInit':'dictName',
                'datasourceName':'dictConfigSource',
                'displayExpress':"dictName",
                'valueProp':'dictCode',
                'requestParamName':'dictName',
                'asyncDisplayInit':'asyncDisplayInitDataDecoder',
                'url':'/esb-manager/projects/:projectName/dictConfigs',
                'params':'dictConfigParams'
            },{
                'title':'是否反转',
                'type':'addCheckbox',
                'field':'reversal'
            }]
        }],
        "commonOutContentComponent":[{
            'title':'是否进行空返回',
            'type':'checkbox',
            'field':'isNullContent'
        },{
            'title':'是否自定义数据返回',
            'type':'checkbox',
            'field':'customData'
        },{
            'type':'json',
            'field':'customDataContent',
            'settings':[{
                'title':'orderNo',
                'type':'text',
                'field':'orderNo'
            }]
        }],
        "asyncMqComponent":[{
            'title':'topic名称',
            'type':'text',
            'field':'queue'
        },{
            'title':'mq消息关键字',
            'type':'text',
            'field':'key'
        },{
            'title':'发送分片字段',
            'type':'text',
            'field':'shard'
        }],
        "securityCombinationManagerComponent":[{
            'title':'命令',
            'type':'text',
            'field':'command'
        }],
        "secretKeyManagerComponent":[{
            'title':'命令',
            'type':'text',
            'field':'command'
        }],
        "identitySwitchComponent":[{
            'title':'配置',
            'type':'textarea',
            'field':'settings'
        }],
        "choiceComponent":[{
            'title':'添加',
            'type':'button',
            'nodeName':'choiceNodes',
                'settings':[{
                'title':'类型',
                'type':'addSelect',
                'field':'type',
                'settings':[{
                    'title':'when',
                    "value":"when"
                },{
                    'title':'otherwise',
                    "value":"otherwise"
                }]
            },{
                'title':'条件表达式',
                'type':'addText',
                'field':'expression',
                'if':'type=="when"'
            },{
                'title':'服务名',
                'type':'addService',
                'field':'serviceMapping',
                'id':'choiceServiceSign'
            }]
        }],
        "orderNoConvertComponent":[{
            'title':'序列号表达式',
            'type':'text',
            'field':'expression'
        },{
            'title':'原始订单编号字段',
            'type':'text',
            'field':'sourceOrderNoField'
        },{
            'title':'目标订单编号字段',
            'type':'text',
            'field':'targetOrderNoField'
        }],
        "routeMapperComponent":[{
            'title':'路由编码',
            'type':'associate',
            'field':'routeCode',
            'displayInit':'routeCode',
            'datasourceName':"routeConfigSource",
            'displayExpress':"routeCode",
            'valueProp':'routeCode',
            'requestParamName':"routeCode",
            'url':'/esb-manager/projects/:projectName/routeConfig',
            'params':'routeConfigParams'
        },{
            'title':'路由标识字段',
            'type':'text',
            'field':'appKeyProperty'
        }],
        "templateComponent":[{
            'title':'转换配置',
            'type':'textarea',
            'field':'config'
        }],
        "jdbcSelectComponent":[{
            'title':'数据源名称',
            'type':'associate',
            'field':'selectDataSourceName',
            'displayInit':'dataSourceName',
            'datasourceName':"selectDataSource",
            'displayExpress':"dataSourceName",
            'valueProp':'dataSourceName',
            'requestParamName':"dataSourceName",
            'url':'/esb-manager/projects/:projectName/dataSourceConfig',
            'params':'dataSourceParams'
        },{
            'title':'sql语句',
            'type':'text',
            'field':'sql'
        },{
            'title':'单次拉取数据行数',
            'type':'text',
            'field':'fetchSize'
        },{
            'title':'服务名',
            'type':'service',
            'field':'serviceMapping',
            'id':'jdbcServiceSign'
        },{
            'title':'参数配置',
            'type':'textarea',
            'field':'params'
        }],
        "rpcComponent":[{
            'title':'RPC服务路径',
            'type':'text',
            'field':'rpcServiceId'
        }],
        "dubboComponent":[{
            'title':'接口名称',
            'type':'text',
            'field':'service'
        },{
            'title':'方法',
            'type':'text',
            'field':'method'
        }],
        "eaiComponent":[{
            'title':'配置',
            'type':'textarea',
            'field':'settings'
        }],
        "httpComponent":[{
            'title':'请求地址',
            'type':'text',
            'field':'address'
        },{
            'title':'方法',
            'type':'text',
            'field':'method'
        },{
            'title':'内容类型',
            'type':'text',
            'field':'contentType'
        }],
        'serviceComponent':[{
            'title':'服务名',
            'type':'service',
            'field':'serviceMapping',
            'id':'ServiceSign'
        }],
        "ftpComponent":[{
            'title':'配置类型',
            'type':'select',
            'field':'operation',
            'settings':[{
                'title':'上传',
                "value":"upload"
            },{
                'title':'下载',
                "value":"download"
            }]
        },{
            'title':'是否根据日期创建目录',
            'type':'checkbox',
            'field':'createDirByDay',
            'if':'operation=="upload"'
        },{
            'title':'文件名',
            'type':'text',
            'field':'fieldName',
            'if':'operation=="upload"'
        },{
            'title':'扩展名',
            'type':'text',
            'field':'extName',
            'if':'operation=="upload"'
        },{
            'title':'下载文件名',
            'type':'text',
            'field':'downloadFileName',
            'if':'operation=="download"'
        },{
            'title':'连接信息',
            'type':'textarea',
            'field':'ftpConnParam'
        }],
        "groovyComponent":[{
            'title':'脚本',
            'type':'textarea',
            'field':'script'
        }]
    }

    var components = {
        "lockComponent":"分布式锁组件",
        "broadcastComponent":"广播组件",
        "jdbcComponent":"JDBC组件",
        "mqComponent":"MQ消息生产组件",
        "edi2xmlComponent":"EDI转XML组件",
        "xml2ediComponent":"XML转EDI组件",
        "xml2jsonComponent":"XML转JSON组件",
        "xml2xmlComponent":"XML转XML组件",
        "string2jsonComponent":"String转JSON组件",
        "json2stringComponent":"JSON转String组件",
        "batchComponent":"批处理组件",
        "dataDecoderComponent":"数据映射组件",
        "commonOutContentComponent":"默认对外组件",
        "choiceComponent":"选择组件",
        "routeMapperComponent":"路由映射组件",
        "templateComponent":"模板转换组件",
        "jdbcSelectComponent":"JDBC SELECT组件",
        "serviceComponent":"服务组件",
        "ftpComponent":"FTP组件",
        "groovyComponent":"Groovy组件"
    }
    return Component;
});
