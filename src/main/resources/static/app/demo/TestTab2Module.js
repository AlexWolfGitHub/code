define(['angular', 'framework/tab/GillionTabModule'], function (angular) {
    return angular.module('TestTab2Module', ['GillionTabModule'])
        .controller('TestTab2Controller', ['$scope', function ($scope) {
            var i= 0;
            $scope.add = function(){
                $scope.tabPanel.addTab({
                    title: '新建' + (i++),
                    active: true,
                    url: '/html/demo/associate/testMultiAssociate.html' // 联想控件
                    // url: '/html/demo/dropdown/testDropdown.html' // 下拉控件
                    // url: '/html/demo/date/example.html' // 日期控件
                    // url: '/html/demo/time/example.html' // 时间控件
                    // url: '/html/demo/areas/demo.html' // 地区控件
                    // url: '/html/demo/dataGrid/demo-tree.html' // 表格
                    // url: '/html/demo/groupGrid/demo.html' // 分组表格
                    // url: '/html/demo/msg/demo.html' // 弹框控件
                    // url: '/html/demo/dropdownbtn/testDropDownBtn.html' // 下拉按钮
                    // url: '/html/demo/tooltip/testTooltip.html' // 消息提示
                    // url: '/html/demo/tab/testTab.html'
                });
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
