define([
    'angular',
    'jquery',
    'bootstrap',
    'system/elasticLayout'
], function (angular, $) {
    return function ($scope, Resource, $dataSourceManager, GillionMsg, $timeout, $routeParams, $parse, $rootScope) {
        elasticLayout();
        $scope.projectName = $routeParams.projectName;
         $('#titleName').html("MQ监控");
        $scope.mqQueueParams={
            projectName:$scope.projectName
        }
        $scope.echartShow = false;
        var mqTimesResource = new Resource("/esb-manager/projects/:projectName/reports/mq")
        $scope.showHide = function (hide) {
            if (hide == 1) {
                $scope.echartShow = false;
            } else {
                $scope.echartShow = !$scope.echartShow;
            }
        }
        var buildParams = function () {
            var param = {};
            param.projectName=$scope.projectName;
            param.intervalType = $scope.intervalType;
            param.createBegin = $scope.createBegin;
            param.createEnd = $scope.createEnd;
            param.queue = $scope.queue_name;
            return param;
        }
        $scope.$on("chartData", function (context, dataSource) {
            var totalRecord = dataSource.records;
            var result = totalRecord;
            var xData = [],
                yData = [],
                yActiveYoung = {
                    name: "生产个数",
                    type: "line",
                    data: []
                };

            $scope.echartShow = true;
            totalRecord = _.sortBy(totalRecord,function(record){
                return record.id.date;
            });

            $dataSourceManager.dataSources["mqSource"].params = buildParams();
            $dataSourceManager.dataSources["mqSource"].doRequestData(1);


            var consumerGroups = _.uniq(
                _.flatten(_.map(
                    _.flatten(_.map(totalRecord, function (record) {
                        return record.value.groupCount;
                    })),
                    function (consumeCount) {
                        return _.keys(consumeCount);
                    })))

                .map(function (groupName) {
                    return {
                        "name": groupName,
                        "type": "line",
                        "data": []
                    }
                });
            $scope.totalConsumerGroupCount = consumerGroups.length;
            $scope.totalProduceCount = 0;
            $scope.totalConsumerCount = 0;
            $scope.totalDifCount = 0;


            angular.forEach(result, function (item) {
                if ($scope.intervalType) {
                    if ($scope.intervalType === "1m") {
                        var dateStr = $parse("date|dateFormatter:'HH:mm'")({
                            "date": item.id.date
                        });
                        xData.push(dateStr);
                    } else if ($scope.intervalType === "1h") {
                        var dateStr = $parse("date|dateFormatter:'HH'")({
                            "date": item.id.date
                        });
                        xData.push(dateStr);
                    } else if ($scope.intervalType === "1d") {
                        var dateStr = $parse("date|dateFormatter:'dd'")({
                            "date": item.id.date
                        });
                        xData.push(dateStr);
                    } else {
                        var dateStr = $parse("date|dateFormatter:'HH:mm'")({
                            "date": item.id.date
                        });
                        xData.push(dateStr);
                    }
                } else {
                    var dateStr = $parse("date|dateFormatter:'HH:mm'")({
                        "date": item.id.date
                    });
                    xData.push(dateStr);


                }
                consumerGroups.forEach(function (consumerGroup) {
                    var hasData = false;
                    for (name in item.value.groupCount) {
                        if (consumerGroup.name == name) {
                            hasData = true;
                            consumerGroup.data.push(item.value.groupCount[name]);
                            $scope.totalConsumerCount += item.value.groupCount[name];
                        }
                    }
                    if (!hasData) {
                        consumerGroup.data.push(0);
                    }
                })
                $scope.totalProduceCount += item.value.produceCount;

                yActiveYoung.data.push(item.value.produceCount);

            });

            $scope.totalDifCount = ($scope.totalConsumerGroupCount * $scope.totalProduceCount) - $scope.totalConsumerCount;
            yData.push(yActiveYoung);

            $scope.titleData = ['生产个数'];


            consumerGroups.forEach(function (consumerGroup) {
                if (consumerGroup.name.length > 20 && consumerGroup.name.startsWith("com")) {
                    var nameArr = consumerGroup.name.split("_");

                    consumerGroup.name = nameArr[nameArr.length - 3] + "_" + nameArr[nameArr.length - 2] + nameArr[nameArr.length - 1];
                }
                consumerGroup.name = "消费组：" + consumerGroup.name;
                $scope.titleData.push(consumerGroup.name);
                yData.push(consumerGroup);
            });
            $scope.xData = xData;
            $scope.yData = yData;
        });
        $scope.showConsumerGroup = function (row) {
            $scope.showConsumerView();
            $scope.consumerGroup = JSON.stringify(row.groupCount, 4, 4);
        }
        $scope.showPageView = function () {
            $scope.showPage = true;
            $scope.showConsumer = false;
        };
        $scope.showConsumerView = function () {
            $scope.showPage = false;
            $scope.showConsumer = true;
        };
        $scope.showPageView();
        $scope.submit = function () {
            if ($scope.queue_name == null || $scope.queue_name == "") {
                GillionMsg.alert('提示信息', "队列名称不能为空！", function () {
                }, {modal: true});
                return;
            }
            if ($scope.intervalType == null) {
                $scope.intervalType = "1h";
            }
            var param = {};
            param.projectName=$scope.projectName;
            param.intervalType = $scope.intervalType;
            param.createBegin = $scope.createBegin;
            param.createEnd = $scope.createEnd;
            param.queue = $scope.queue_name;
            $dataSourceManager.dataSources["chartData"].params = param;
            $dataSourceManager.dataSources["chartData"].doRequestData();

        };

        $scope.clear = function () {
            if ($scope.queue_name == null || $scope.queue_name == "") {
                GillionMsg.alert('提示信息', "队列名称不能为空！", function () {
                }, {modal: true});
                return;
            }
            mqTimesResource.delete({"queue": $scope.queue_name,"projectName":$scope.projectName}, function () {
                GillionMsg.alert('提示信息', "重置成功！", function () {
                    $scope.submit();
                }, {modal: true})
            });
        };
        $scope.titleData = ['生产个数'];
        $scope.xData = null;
        $scope.yData = null;
        $scope.unitDate = "";

        $scope.showHide = function (hide) {
            if (hide == 1) {
                $scope.echartShow = false;
            } else {
                $scope.echartShow = !$scope.echartShow;
            }
        }

    };
});