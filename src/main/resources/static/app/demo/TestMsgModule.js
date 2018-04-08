define(['jquery', 'angular', 'framework/msg/GillionMsgModule'], function ($, angular) {
    return angular.module('TestMsgModule', ['GillionMsgModule'])
        .controller('TestMsgController', ['$scope', 'GillionMsg', '$window', function ($scope, GillionMsg, $window) {
            $scope.show = function() {
                GillionMsg.show({
                    title:'提示',
                    msg:'恭喜你注册成功！恭喜你注册成功！恭喜你注册成功！恭喜你注册成功！恭喜你注册成功！',
                    icon: 'right',
                    width: 400,
                    height: 400,
                    maxHeight:300,
                    //timeout:2000,

                    onBeforeClose: function(){
                        console.log('onBeforeClose');
                    },
                    onClose: function(){
                        console.log('onClose');
                    },
                    onBeforeOpen: function(){
                        console.log('onBeforeOpen');
                    },
                    onOpen: function(){
                        console.log('onOpen');
                    },
                    buttons: [{
                        text:'确定',
                        type:'sure',
                        handler: function(){
                            console.log('你点击了确认');
                        }
                    },{
                        text:'取消',
                        type:'cancel',
                        handler: function(){
                            console.log('你点击了取消');
                        }
                    }]
                });
            };

            $scope.alert = function() {
                GillionMsg.alert('提示信息','注册时即自动开通托管账户',
                    function(){
                        // console.info('关闭提示');
                    },
                    {
                        modal: true
                    }
                );
            };

            $scope.confirm = function() {
                GillionMsg.confirm('提示信息','注册时即自动开通托管账户，同时进行实名认证并绑定手机号码。',
                    function(r){
                        console.info(r);
                    }
                );
            };

            $scope.wait = function() {
                $scope.dlgWait= GillionMsg.wait('提示信息', '努力加载中。。。');
            };

            $scope.closeWait = function(){
                $scope.dlgWait.close();
            };

            $scope.progress = function() {
                var prg = GillionMsg.progress('提示信息');

                var f = function(v){
                    return function(){
                        if(v == 12){
                            prg.close();
                        }else{
                            var i = v/11;
                            if (prg.$ele) {
                                prg.updateProgress(Math.round(100*i));
                            }
                        }
                    };
                };
                for(var i = 1; i < 13; i++){
                    setTimeout(f(i), i*500);
                }
            };


            $scope.showUrl = function() {
                //$scope.dlg = GillionMsg.showUrl( '提示','../dict/demo', {
                //    userName: 'zhangsan',
                //    password: '12345'
                //}, 400, 400);

                $scope.dlg = GillionMsg.showUrl({
                    title: '编辑',
                    url: 'demo_edit',
                    maximization:true,
                    data:{
                        userName: '张三XXXX',
                        age: 88,
                        remark: 'zhangsansadsds'
                    },
                    width: 400,
                    height:500,
                    onBeforeClose: function(data){
                        console.log('onBeforeClose', data);
                    },
                    onClose: function(data){
                        console.log('onClose', data);
                        $scope.resp = data;
                    }
                });
            };

            $scope.onopen=function(){
                console.log("打开弹窗事件！");
            }
            $scope.onclose=function(){
                console.log("关闭弹窗事件！");
            }

            $scope.sure2=function(){
            }
            $scope.deal=function(){
                alert("您点击了取消按钮！");
            }


        }]);
})
