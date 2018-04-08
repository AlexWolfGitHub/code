define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout'
], function (angular, $) {
    return function ($scope, Resource, $dataSourceManager, GillionMsg, $timeout, $routeParams, $rootScope) {
        elasticLayout();
        $scope.groupName = $routeParams.groupName;

        $('#titleName').html('应用部署');

        $scope.add = function () {
            $.ajax({
                url:"/esb-manager/applicationDeployment/get",
                type:"GET",
                dataType:"json",
                processData:false,
                contentType:false,
                success:function (data) {
                    if(data)
                    {
                        var list=[];
                        for (var i=0;i<data.length;i++) {
                            var obj={};
                            obj['groupName']=data[i]
                            list.push(obj)
                        }
                        $scope.roles= list;
                        $("#testModal").modal();
                    }

                }

            })

        }
        $scope.group={

        }
        $scope.release = function () {

            var formData = new FormData();
            formData.append("upload",document.getElementById("upload").files[0]);
            formData.append("version",$("#version").val());
            formData.append("description",$("#description").val());
            formData.append("jvmArgs",$("#jvmArgs").val());
            formData.append("groupName" ,$("#groupName").val())
            //alert($("#groupName").val());
            $.ajax({
                contentType:"multipart/form-data",
                url:"/esb-manager/applicationDeployment/add",
                type:"POST",
                data:formData,
                dataType:"json",
                processData:false,
                contentType:false,
                success:function (result) {
                    if(result["data"])
                    {
                        GillionMsg.alert("提示", "发布不成功");
                    }else {
                        GillionMsg.alert("提示", "发布成功");
                        $scope.searchGroups();
                        $("#testModal").modal('hide');
                    }
                }
            })
        }
        $scope.searchParams = ""
        $scope.searchGroups=function () {
            $dataSourceManager.dataSources["groupsResource"].doRequestData(1, $scope.searchParams);
        }


        $scope.start=function (row) {

            $scope.instanceParams ={
                "appName" : row.appName,
                "jvmArgs" : row.jvmArgs,
                "setSourceFilePath":row.savePath,
                "groupId": row.instanceGroupId,
                "versionId":row.currentVersionId
            }
            var instanceResource = Resource("/esb-manager/applicationDeployment/start")
            instanceResource.get($scope.instanceParams,function (r) {
                if(r)
                {
                    GillionMsg.alert("提示", "启动成功");
                }else{
                    GillionMsg.alert("提示", "启动失败");
                }
            })
        }

    };
});