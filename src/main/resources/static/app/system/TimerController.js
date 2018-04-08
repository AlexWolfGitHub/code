define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout',
    '../../css/cron/icheck/icheck.min',
    '../../css/cron/spinner/jquery.spinner.min',
    '../../css/cron/init',
    '../../css/cron/cronboot'
], function (angular, $) {
    return  function ($scope, $http, $log, Arrays, $compile, $q,$routeParams,Resource,GillionMsg,$dataSourceManager,$timeout) {
        elasticLayout();
        $('#titleName').html("定时调度");
        var scheduleTaskResource = Resource('/esb-manager/projects/:projectName/scheduleTasks',{
            "projectName":"@projectName"
        },{
            "save":{
                "url":"/esb-manager/projects/:projectName/scheduleTasks",
                "method":"POST"
            },
            "update":{
                "url":"/esb-manager/projects/:projectName/scheduleTasks",
                "method":"PUT"
            },
            "delete":{
                "url":"/esb-manager/projects/:projectName/scheduleTasks/:id",
                "method":"DELETE"
            },
            "start":{
                "url":"/esb-manager/projects/:projectName/scheduleTasks/command",
                "method":"POST"
            },
            "stop":{
                "url":"/esb-manager/projects/:projectName/scheduleTasks/command",
                "method":"DELETE"
            },
            "reset":{
                "url":"/esb-manager/projects/:projectName/scheduleTasks/command",
                "method":"PUT"
            }
        });
        $scope.scheduleTaskParams = {
            projectName:$routeParams.projectName
        }
        $scope.gatewayServiceParams = {
            projectName:$routeParams.projectName
        }
        $scope.add = function () {
            resetting();
            $scope.scheduleTask = {status:1};
            $("#cron").val("* * * * * ? ");
            reverseExp();
            $(".radio-inline input[value='1']").iCheck("check");
            $("#TimerModal").modal();
        }
        $scope.update = function (row) {
            resetting();
            $scope.scheduleTask = row;
            $("#cron").val($scope.scheduleTask.cronExpression);
            reverseExp();
            if($scope.scheduleTask.status == 1){
                $(".radio-inline input[value='1']").iCheck("check");
            }else{
                $(".radio-inline input[value='0']").iCheck("check");
            }
            $("#TimerModal").modal();
        }
        $scope.search = function(){
            $dataSourceManager.dataSources["ScheduleTaskSource"].doRequestData(1,$scope.scheduleTaskParams);
        }
        $scope.save = function () {
            if($('#inlineRadio1')[0].checked){
                $scope.scheduleTask.status = 1;
            }else{
                $scope.scheduleTask.status = 0;
            }
            $scope.scheduleTask.cronExpression = $('#cron').val();
            $scope.scheduleTask.projectName = $routeParams.projectName;
            $scope.scheduleTask.projectId = $routeParams.projectId;
            if($scope.scheduleTask.id){
                scheduleTaskResource.update($scope.scheduleTask,function (response) {
                    if(response.success){
                        $scope.search();
                        $("#TimerModal").modal('hide');
                    }
                })
            }else {
                scheduleTaskResource.save($scope.scheduleTask,function (response) {
                    if(response.success){
                        $scope.search();
                        $("#TimerModal").modal('hide');
                    }
                })
            }
        }
        $scope.delete = function (id) {
            GillionMsg.confirm("提示信息","是否确认删除？",function (r) {
                if(r){
                    scheduleTaskResource.delete({id:id,projectName:$routeParams.projectName},function (response) {
                        if(response.success){
                            $scope.search();
                        }
                    })
                }
            })
        }
        $scope.start = function (row) {
            row.projectName = $routeParams.projectName;
            scheduleTaskResource.start(row,function (response) {
                if (response.success) {
                    GillionMsg.alert("提示信息", "定时器启动成功");
                }
            })
        }
        $scope.stop = function (row) {
            row.projectName = $routeParams.projectName;
            scheduleTaskResource.stop(row,function (response) {
                if (response.success) {
                    GillionMsg.alert("提示信息", "定时器停止成功");
                }
            })
        }
        $scope.reset = function (row) {
            row.projectName = $routeParams.projectName;
            scheduleTaskResource.reset(row,function (response) {
                if (response.success) {
                    GillionMsg.alert("提示信息", "定时器重置成功");
                }
            })
        }
        //服务查询界面相关操作
        $scope.protocols = [{"name":"Netty","value":"netty://"},{"name":"HTTP","value":"http://"},{"name":"WebService","value":"webService://"},{"name":"EDS","value":"eds://"},{"name":"RuleNumber","value":"ruleNumber://"},{"name":"Sap","value":"sap://"}]
        $scope.searchParams = {projectName:$routeParams.projectName}
        $scope.$watch('gatewayService.serviceMapping',function () {
            var serviceName = _.clone($scope.gatewayService.serviceMapping);
            for(var i=0;i<$scope.protocols.length;i++){
                if(serviceName.indexOf($scope.protocols[i].value)==0){
                    serviceName = serviceName.replace($scope.protocols[i].value,'');
                    $scope.searchParams.protocol = $scope.protocols[i].name;
                    break;
                }
            }
            $scope.searchParams.serviceName = serviceName;
            $dataSourceManager.dataSources["ServiceSource"].doRequestData(1,$scope.searchParams);
        })
        $scope.goPage = function (size) {
            $dataSourceManager.dataSources["ServiceSource"].doRequestData(size,$scope.searchParams);
        }

        $scope.selectProtocol = function (protocolName) {
            $scope.searchParams.protocol = protocolName;
            $dataSourceManager.dataSources["ServiceSource"].doRequestData(1,$scope.searchParams);
        }
        $scope.selectService = function(serviceMapping){
            $scope.scheduleTask.serviceMapping = serviceMapping;
            $scope.serviceShow = false;
        }

        $scope.showService = function ($event) {
            var position = getElemPos($event.target);
            $scope.serviceShowStyle = {
                top:position.y+$event.target.offsetHeight-$('#TimerModal').scrollTop(),
                left:position.x
            }
            $scope.searcheParams = {};
            $scope.goPage(1);
            $scope.serviceShow = true;
        }
        $(document).bind('click', function (e) {
            $scope.$apply(function () {
                $scope.serviceShow = false;
            })
        });
        $(document).bind('mousewheel', function (e) {
            $scope.$apply(function () {
                $scope.serviceShow = false;
            })
        });

        $('#serviceMapping').bind('click', function (e) {
            stopPropagation(e);
        });
        $('#serviceShow').bind('click', function (e) {
            stopPropagation(e);
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
            return {x:pos.left, y:pos.top};
        }
    }
});