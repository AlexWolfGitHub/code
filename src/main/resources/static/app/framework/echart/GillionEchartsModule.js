/**
 * Created by linxh on 2015/5/29.
 */
define('framework/echart/GillionEchartsModule', [
    'angular',
    'echarts',
/*  'echarts/chart/line',
    'echarts/chart/bar',
    'echarts/chart/force',
    'echarts/chart/chord',*/
    'angular-underscore'
], function (angular,ec) {
    var GillionMessageModule = angular.module('GillionEchartsModule',[],  ['$compileProvider', function ($compileProvider) {
        $compileProvider.directive('gEchart',function(){
            return {
                restrict: 'A',
                replace:true,
                scope: {
                    titleData:'=',
                    xaxisData:'=',
                    yaxisData:'=',
                    nodeClick:'=',
                    unitDate:'='
                },
                link:function(scope,element,attrs){
                    var option = {
                        tooltip : {
                            trigger: 'axis'
                        },
                        legend: {
                            data:[]
                        },
                        toolbox: {
                            show : true,
                            feature : {
                                dataView : {show: true, readOnly: false},
                                magicType : {show: true, type: ['line', 'bar']},
                                restore : {show: true},
                                saveAsImage : {show: true}
                            }
                        },
                        calculable : true,
                        xAxis : [
                            {
                                type : 'category',
                                boundaryGap : true,//类目起始和结束两端空白策略
                                /* axisLabel : {
                                 show:true,
                                 interval: 'auto',    // {number}
                                 formatter: '{value}min',
                                 }, */
                                data : [],

                                splitLine : {
                                    show: true
                                }
                            }
                        ],
                        yAxis : [
                            {
                                type : 'value',
                                //min:0,
                                //max:100,
                                axisLabel : {
                                    formatter: function (value) {
                                        return value +scope.unitDate;
                                    }
                                },
                                splitNumber:10,//坐标轴分割成几段，默认五段

                                splitLine : {
                                    show: true
                                }

                            }
                        ],
                        series : [

                        ]
                    };
                    option.animation = true;
                    if(attrs.animation == 'false'){
                        option.animation = false;
                    }
                    var chartContainer = element[0];
                    var myChart = ec.init(chartContainer);
                    function refreshEchart(){
                        if(scope.titleData && scope.xaxisData && scope.yaxisData){
                            option.legend.data = scope.titleData;
                            option.xAxis[0].data = scope.xaxisData;
                            option.series = scope.yaxisData;
                            myChart.setOption(option);
                        }
                    }

                    refreshEchart();
                    scope.$watchCollection("titleData",refreshEchart);
                    scope.$watchCollection("xaxisData",refreshEchart);
                    scope.$watchCollection("yaxisData",refreshEchart);

                }
            }
        });

        $compileProvider.directive('gEchartRelation',function(){
            return {
                restrict: 'A',
                replace:true,
                scope: {
                    titleText:'@',
                    legendData:'=',
                    nodesData:'=',
                    linksData:'=',
                    nodeClick:"="
                },
                link:function(scope,element,attrs){
                    var option = {
                        title : {
                            text: '关系图',
                            subtext: '数据来自监测端',
                            x:'right',
                            y:'bottom'
                        },
                        tooltip : {
                            trigger: 'item',
                            formatter: function (params) {
                                var tar = params[5].value;
                                return tar;
                            }
                        },
                        toolbox: {
                            show : true,
                            feature : {
                                restore : {show: true},
                                magicType: {show: true, type: ['force', 'chord']},
                                saveAsImage : {show: true}
                            }
                        },
                        legend: {
                            x: 'left',
                            data:[]
                        },
                        series : [
                            {
                                type:'force',
                                ribbonType: false,
                                categories : [

                                ],
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            textStyle: {
                                                color: '#333'
                                            }
                                        },
                                        nodeStyle : {
                                            brushType : 'both',
                                            borderColor : 'rgba(255,215,0,0.4)',
                                            borderWidth : 1
                                        },
                                        linkStyle: {
                                            type: 'curve'
                                        }
                                    },
                                    emphasis: {
                                        label: {
                                            show: false
                                            // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                                        },
                                        nodeStyle : {
                                            //r: 30
                                        },
                                        linkStyle : {}
                                    }
                                },
                                useWorker: false,
                                minRadius : 15,
                                maxRadius : 25,
                                gravity: 1.1,
                                scaling: 1.1,
                                symbolSize:40,//节点的大小
                                roam: 'move',
                                draggable:true,//节点拖拽
                                nodes:[],
                                links : []
                            }
                        ]
                    };
                    function refreshEchart(){
                        if(scope.legendData && scope.nodesData && scope.linksData){
                            if(attrs.titleText){
                                option.title.text = attrs.titleText;
                            }
                            option.series.categories = [];
                            var legend=[];
                            angular.forEach(scope.legendData,function(item){
                                var data= item.split("*");
                                legend.push(data[0]);
                                option.series[0].categories.push({name:data[0],itemStyle:{normal: {color : data[1]}
                                }});
                            });
                            option.legend.data =legend;
                            option.series[0].nodes = scope.nodesData;
                            option.series[0].links = scope.linksData;
                            var chartContainer = element[0];
                            var myChart = ec.init(chartContainer);
                            myChart.setOption(option);
                            myChart.on("click", scope.nodeClick);
                        }
                    }

                    refreshEchart();

                    scope.$watchCollection("legendData",refreshEchart);
                    scope.$watchCollection("nodesData",refreshEchart);
                    scope.$watchCollection("linksData",refreshEchart);
                }
            }

        });
    }]);
    return GillionMessageModule;
})
