define([
    'angular',
    'jquery',
    'system/DisorderTopology',
    'bootstrap',
    '../../../bower_components/svg/svg',
    'framework/datatree/GillionDataTreeModule',
    'system/elasticLayout'
], function (angular, $, DisorderTopology) {
    return angular.module('TopologyModule', ['GillionDataTreeModule'])
        .controller('AppController', function ($scope, $http, $log, Arrays, $compile, $q) {
            elasticLayout();
            var topology = new DisorderTopology({
                el: "#topology",
                element: [
                    {id: "order", title: "ORDER", x: 100, y: 100},
                    {id: "cms", title: "CMS", x: 250, y: 130},
                    {id: "user", title: "USER", x: 220, y: 180},
                    {id: "wms", title: "WMS", x: 60, y: 170},
                    {id: "dms", title: "DMS", x: 180, y: 280},
                    {id: "gis", title: "GIS", x: 380, y: 150},
                    {id: "bms", title: "BMS", x: 400, y: 280},
                    {id: "tms", title: "TMS", x: 500, y: 160},
                ],
                relation: [
                    {source: "user", target: "order"},
                    {source: "order", target: "cms"},
                    {source: "order", target: "wms"},
                    {source: "user", target: "gis"},
                    {source: "user", target: "bms", status: 1}
                ],
                onClick: function (el, option) {

                },
                onRelationClick: function (source, target) {
                    alert(source);
                }
            });
            setTimeout(function () {
                topology.render();
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