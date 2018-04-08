define([
    'angular',
    'jquery',
    'system/ServiceTopology',
    'bootstrap',
    'svg',
    'framework/datatree/GillionDataTreeModule',
    'system/elasticLayout'
], function (angular, $, ServiceTopology) {
    return  function ($scope, $http, $log, Arrays,$routeParams, $compile, $q) {
        $scope.traceId = $routeParams.traceId;
        var projectName = $routeParams.projectName;
        $('#titleName').html("<a    href=\"#/projectName/"+projectName+"/log\"  >返回</a>");
        var options = "" ;
       $http.get('/esb-manager/projects/serviceProcess/dispatchTree',{params: {"traceId": $scope.traceId}} ).success(function (data) {
             options = data;
           var config = {
               el: "#topology",
               //title：圆圈名；
               // desc服务名；
               // time：花费时间；
               // tps：每秒数量；
               // fuse 是否熔断；
               // expend 是否显示节点；
               // icon：图标
               //parent 该属性所在节点为根节点的父节点
               //children 子节点
               options: options
           };
           var topology = new ServiceTopology(config);
           topology.render();
             });
    }
});