define(['angular', 'framework/tab/GillionTabModule'], function (angular) {
    return angular.module('TestTabModule', ['GillionTabModule'])
        .controller('TestTabController', ['$scope', function ($scope) {

            $scope.init = function(tabPanel){
                //tabPanel.addTab({
                //    title: '新建2',
                //    active: true,
                //    url: 'http://localhost/html/demo/dataGrid/demo'
                //})
            };

            var i= 0;
            $scope.add = function(){
                $scope.tabPanel.addTab({
                    title: '新建' + (i++),
                    active: true,
                    url: 'http://localhost/html/demo/msg/demo'
                })
            };

            $scope.onBeforeSelect = function(title, url){
                console.log('onBeforeSelect', 'title:'+ title, 'url:'+ url);
            };
            $scope.onSelect = function(title, url){
                console.log('onSelect', 'title:'+ title, 'url:'+ url);
            };
            $scope.onBeforeClose = function(title, url){
                console.log('onBeforeClose', 'title:'+ title, 'url:'+ url);
            };
            $scope.onClose = function(title, url){
                console.log('onClose', 'title:'+ title, 'url:'+ url);
            };

        }]);
});