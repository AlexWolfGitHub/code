define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout'
], function (angular, $) {
    return function ($scope, Resource, $dataSourceManager, GillionMsg, $timeout, $routeParams, $rootScope) {
        elasticLayout();
        $('#titleName').html("<a href='#/projectName/"+$routeParams.projectName+"/"+$routeParams.projectId + "/mqTopic'>队列配置</a>/" + $routeParams.topicName);
        var consumerGroupResource = Resource("/esb-manager/projects/:projectName/mqTopic/:topicName/consumerGroup", {
            "projectName": "@projectName",
            "topicName": "@topicName"

        }, {
            "save": {
                "url": "/esb-manager/projects/:projectName/mqTopic/:topicName/consumerGroup",
                "method": "POST"
            },
            "update": {
                "url": "/esb-manager/projects/:projectName/mqTopic/:topicName/consumerGroup",
                "method": "PUT"
            },
            "delete": {
                "url": "/esb-manager/projects/:projectName/mqTopic/:topicName/consumerGroup/:id",
                "method": "DELETE"
            }
        })

        $scope.consumerGroupParams = {
            projectName: $routeParams.projectName,
            topicName: $routeParams.topicName
        }
        $scope.searchConsumerGroup = function () {
            $dataSourceManager.dataSources["consumerGroupResource"].doRequestData(1, $scope.consumerGroupParams);
        }

        $scope.add = function () {
            $scope.consumerGroupConfig = {
                projectName: $routeParams.projectName,
                projectId:$routeParams.projectId,
                topicName: $routeParams.topicName
            };
            $("#consumerGroupModal").modal();
        }

        var height = window.innerHeight - 86;
        $scope.searchBoxHeight = {
            "height": height,
            "min-height": height
        }

        //打开消费组编辑界面
        $scope.updateConsumerGroup = function (row) {
            $scope.consumerGroupConfig = _.clone(row);
            $("#consumerGroupModal").modal();
        }

        //删除消费组
        $scope.deleteConsumerGroup = function (record) {
            GillionMsg.confirm('提示信息', '是否确定删除？', function (r) {
                if (r) {
                    consumerGroupResource.delete({
                        projectName: $scope.projectName,
                        topicName: record.topicName,
                        id: record.id
                    }, function (response) {
                        if (response.success) {
                            $scope.searchConsumerGroup();
                        }else{
                            GillionMsg.alert("删除失败")
                        }
                    })
                }
            })
        }

        $scope.save = function () {
            //编辑消费组信息
            if ($scope.consumerGroupConfig.id) {
                consumerGroupResource.update($scope.consumerGroupConfig, function (response) {
                        if (response.success) {
                            $("#consumerGroupModal").modal('hide');
                            $scope.searchConsumerGroup();
                        }
                    }
                )
            } else {//新增消费组
                consumerGroupResource.save($scope.consumerGroupConfig, function (response) {
                    if (response.success) {
                        $("#consumerGroupModal").modal('hide');
                        $scope.searchConsumerGroup();
                    }
                })
            }
        }


        $scope.processingModeSource = [
            {processingMode: "SINGLE", processing: "单条消费"},
            {processingMode: "MULTITERM", processing: "批量消费"}
        ]

        $scope.concurrencyModeSource = [
            {concurrencyMode: "SEQUENCE", concurrency: "顺序模式"},
            {concurrencyMode: "CONCURRENCY", concurrency: "并发模式"}
        ]
    };
});