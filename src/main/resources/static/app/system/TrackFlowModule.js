define([
    'angular',
    'jquery',
    'system/FlowChart',
    'bootstrap',
    'svg',
    'system/elasticLayout'
], function (angular, $, FlowChart) {
    return angular.module('TrackFlowModule', [])
        .controller('AppController', function ($scope, $http, $log, Arrays, $compile, $q) {

            var flowChart = new FlowChart({
                el: "#flowChart",
                nodes: [
                    {id: "node1", title: "序列号生成器组件"},
                    {id: "node2", title: "分布式锁组件"},
                    {id: "node3", title: "异步MQ消费者组件"},
                    {id: "node4", title: "选择组件"},
                    {id: "node5", title: "异常转换组件"},
                    {id: "node6", title: "路由映射组件"}
                ],
                connections: [
                    {source: "node1", target: "node2"},
                    {source: "node2", target: "node3"},
                    {source: "node3", target: "node4"},
                    {source: "node4", target: "node5"},
                    {source: "node5", target: "node6"}
                ],
                onClick: function (el, node) {

                }
            });
            $scope.addNode = function ($event) {
                var el = $event.target;
                var _id = $(el).attr("data-id");
                var _title = $(el).text();
                var newNode = {
                    id : _id,
                    title: _title
                }
                flowChart.addNode(newNode);
                flowChart.reRender();
                flowChart.$el.find(".topology-element").last().addClass("selected");
            };
            setTimeout(function () {
                flowChart.render();
            }, 500);
        }).directive('onFinishRender', function ($timeout, $rootScope) {
            return {
                restrict: 'A',
                link: function (scope, element, attr) {
                    $(window).resize();
                }
            }
        });
});