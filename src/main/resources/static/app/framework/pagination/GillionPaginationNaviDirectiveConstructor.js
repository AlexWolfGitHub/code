define('framework/pagination/GillionPaginationNaviDirectiveConstructor',['angular'], function (angular) {
    return function ($parse, $dataSourceManager,$timeout,$document) {

        var Pagination = function($scope, $element, $attrs){
            var me = this;
            me.scope = $scope;
            me.element = $element;
            me.attrs = $attrs;
        }

        Pagination.prototype.setPageSizeList = function(pageSizeList){
            if(angular.isArray(pageSizeList)){
                this.scope.pageSizeList = pageSizeList;
            }else if(pageSizeList){
                this.scope.pageSizeList = pageSizeList.split(',');
            }else{
                this.scope.pageSizeList = [5,10,20,30,50];
            }

        }

        Pagination.prototype.initDataSource = function(){
            var me = this,
                scope = me.scope;
            scope.$on(scope.sourceName,function(context,dataSource){
            //$dataSourceManager.getDataSource(scope.sourceName).then(function(dataSource) {
                scope.totalRecord = dataSource.totalRecord || 0;
                scope.pageSize = dataSource.pageSize || 0;
                scope.currentPage = dataSource.currentPage || 1;

                scope.dataSource =  dataSource.records;
                scope.totalPage = dataSource.totalPage || 0;

                scope.recordFrom = (dataSource.currentPage-1)*dataSource.pageSize+1;
                if(dataSource.records){
                    var summaryRow = 0;
                    if(dataSource.records.length > 0 && dataSource.records[dataSource.records.length-1].__SUMMARY_ROW){
                        summaryRow = 1;
                    }
                    scope.recordTo = scope.recordFrom+dataSource.records.length-1-summaryRow;
                    if(scope.recordFrom+dataSource.records.length-1>scope.totalRecord){
                        scope.recordTo = scope.totalRecord;
                    }
                    if(scope.recordFrom > scope.recordTo){
                        scope.recordFrom = scope.recordTo;
                    }
                }else{
                    scope.recordFrom = 0;
                    scope.recordTo = scope.recordFrom;
                }
                me.pageStyle(scope.currentPage);
                if(!scope.$root.$$phase){
                    scope.$digest();
                }
            });
        }

        Pagination.prototype.refresh = function(){
            var params,
                scope = this.scope;
            if(angular.isFunction( $dataSourceManager.dataSources[scope.sourceName].params)){
                params =  $dataSourceManager.dataSources[scope.sourceName].params;
            }else{
                params = angular.extend({}, $dataSourceManager.dataSources[scope.sourceName].params  || {});
            }
            //$dataSourceManager.dataSources[scope.sourceName].params=params;
            $dataSourceManager.dataSources[scope.sourceName].doRequestData(null,params,function(_dataSource){
                //
            });
            //this.initDataSource();
        }

        Pagination.prototype.pageStyle= function(pageNum){
            if(pageNum==1) {
                this.element.find(".pager-btn-first").attr("disabled", "disabled");
                this.element.find(".pager-btn-prev").attr("disabled", "disabled");
            }
            if(pageNum>1){
                this.element.find(".pager-btn-first").removeAttr("disabled") ;
                this.element.find(".pager-btn-prev").removeAttr("disabled") ;
            }
            if(pageNum==this.scope.totalPage || this.scope.totalPage == 0){
                this.element.find(".pager-btn-next").attr("disabled","disabled");
                this.element.find(".pager-btn-last").attr("disabled","disabled");

            }
            if(pageNum<this.scope.totalPage){
                this.element.find(".pager-btn-next").removeAttr("disabled") ;
                this.element.find(".pager-btn-last").removeAttr("disabled") ;
            }
        }

        Pagination.prototype.goPage = function(pageNum){
            if(Number(pageNum)){
                var scope = this.scope;
                //$dataSourceManager.dataSources[scope.sourceName].currentPage=pageNum;
                $dataSourceManager.dataSources[scope.sourceName].doRequestData(pageNum);
                //this.initDataSource();
                this.pageStyle(pageNum);
            }
        }

            return {
            scope:{
                sourceName:'@',
                refreshable:'@'
            },
            replace:true,
            template:
                    '<div class="pager pager-skin-tp">'+
                    '<button type="button" class="btn pager-btn-first" ng-click="firstPage()" ><i class="fi fi-first"></i></button>'+
                    '<button type="button" class="btn pager-btn-prev" ng-click="previousPage()"><i class="fi fi-prev"></i></button>'+
                    ($config.i18nInfo.beforeCurrentPage ? '<span class="pager-desc">' + $config.i18nInfo.beforeCurrentPage + ' </span>' : '')+
                    '<input type="text" g-dbc g-numeric  ng-disabled="disabled" ng-change="verifyNum(oldVal,newVal)" class="form-text pager-index" ng-model="currentPage">'+
                    '<span class="pager-desc">/ {{totalPage}} ' + $config.i18nInfo.afterCurrentPage + '</span>'+
                    '<button type="button" class="btn pager-btn-next" ng-click="nextPage()"><i class="fi fi-next"></i></button>'+
                    '<button type="button" class="btn pager-btn-last" ng-click="lastPage()"><i class="fi fi-last"></i></button>'+
                    '<button ng-show="showRefresh" type="button" class="btn pager-btn-refresh" ng-click="refresh()"><i class="fi fi-refresh"></i></button>'+
                    '<span class="pager-desc pager-last-item">{{recordFrom}}-{{recordTo}}&nbsp;&nbsp;' + $config.i18nInfo.beforeTotalRecord + '<span ng-bind="totalRecord"></span>'+ $config.i18nInfo.afterTotalRecord + '</span>'+
                    '</div>',
            restrict: 'E',
            compile:function(tElement, tAttrs){

                return function (scope, element,attrs) {
                    /*初始化参数*/
                    var keyIndex = -1,
                        timer;
                    scope.isShow =false;
                    scope.pagination = new Pagination(scope, element,attrs);
                    if(attrs.disabled == "true"){
                        scope.disabled = true;
                    }else{
                        scope.disabled = false;
                    }

                    scope.showRefresh = scope.refreshable === 'false'
                        ? false
                        : true

                    scope.changeToNum = function(){
                        scope.currentPage = parseInt(scope.currentPage);
                    }

                    scope.showPageSize = function(){
                        scope.isShow = !scope.isShow;
                    }

                    scope.pagination.initDataSource();

                    element.find("button.pager-btn-refresh").attr("id", "grid-refresh-" + attrs.sourceName);
                    scope.refresh = function(){
                        if(!scope.disabled)
                        scope.pagination.refresh();
                    }

                    element.find("button.pager-btn-next").attr("id", "grid-nextPage-" + attrs.sourceName);
                    scope.nextPage = function(){
                        if(scope.currentPage+1<=scope.totalPage && !scope.disabled){
                            scope.pagination.goPage(scope.currentPage+1);
                        }
                    }

                    element.find("button.pager-btn-prev").attr("id", "grid-previousPage-" + attrs.sourceName);
                    scope.previousPage = function(){
                        if(scope.currentPage-1>=1 && !scope.disabled){
                            scope.pagination.goPage(scope.currentPage-1);
                        }
                    }

                    element.find("button.pager-btn-first").attr("id", "grid-firstPage-" + attrs.sourceName);
                    scope.firstPage = function(){
                        if(!scope.disabled){
                            scope.pagination.goPage(1);
                        }
                    }

                    scope.verifyNum = function(){
                        //scope.currentPage = scope.currentPage;
                        if ( scope.currentPage<=0){
                            //scope.currentPage=1;
                        }else if(scope.currentPage > scope.totalPage){
                            scope.currentPage = scope.totalPage;
                        }
                    }

                    element.find("button.pager-btn-last").attr("id", "grid-lastPage-" + attrs.sourceName);
                    scope.lastPage = function(){
                        if(!scope.disabled)
                        scope.pagination.goPage(scope.totalPage);
                    }
                    scope.inputText = element.find("input");
                    scope.inputText.attr("id", "grid-currentPage-" + attrs.sourceName);
                    scope.inputText.on('change', function () {
                        scope.pagination.goPage(parseInt(scope.inputText.val()));
                        scope.$apply();
                    });

                    element.find("span[ng-bind='totalRecord']").attr("id", "grid-totalRecord-" + attrs.sourceName);
                    scope.pagination.pageStyle();
                    // scope.inputText.on('keyup', function (event) {
                    //     var e = e || event,
                    //         currKey = e.keyCode || e.which || e.charCode;
                    //     switch (currKey) {

                    //         //空格键
                    //         case 32:

                    //             break;
                    //         //回车键
                    //         case 13:
                    //             scope.pagination.goPage(parseInt(scope.inputText.val()));
                    //             scope.$apply();
                    //             break;
                    //         default :
                    //             break;
                    //     }
                    // });
                }
            }
        }
    }
});
