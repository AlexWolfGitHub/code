define(['angular', 'framework/drag/GillionDragModule'], function (angular) {
    return angular.module('TestDragModule', ['GillionDragModule'])
        .controller('TestDragController', ['$scope', 'DragService', function ($scope, DragService) {
            console.log(document.getElementById('d1'))
            DragService.draggable({
                //容器
                container: document.getElementById('d1'),
                //容器上可以拖拽的元素,无配置的话则为整个容器
                dragDom: document.getElementById('d2'),
                //在拖动之前触发，返回false将取消拖动
                onBeforeDrag: function(e){
                    console.log('onBeforeDrag');
                },
                //在拖动过程中触发，当不能再拖动时返回false
                onDrag: function(e){
                    console.log('onDrag');
                },
                //在拖动停止时触发
                onStopDrag: function(e){
                    console.log('onStopDrag');
                }
            });

            DragService.draggable( document.getElementById('d3'));
        }]
    );
});