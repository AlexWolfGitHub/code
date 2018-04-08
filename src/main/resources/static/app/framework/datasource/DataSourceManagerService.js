// Generated by CoffeeScript 1.9.3

define(["angular"], function (angular) {
    var DataSourceManager, dataSourceManager;
    DataSourceManager = (function () {
        function DataSourceManager($q1, $rootScope1) {
            this.$q = $q1;
            this.$rootScope = $rootScope1;
            this.dataSources = {};
            this.defereds = {};
            this.$rootScope.dataSources = {};
        }


        /*注册一个数据源 */

        DataSourceManager.prototype.registerDataSource = function (name, dataSource) {
            this.dataSources[name] = dataSource;
            this.$rootScope.dataSources[name] = dataSource;
        };


        /*删除一个数据源 */

        DataSourceManager.prototype.removeDataSource = function (name) {
            delete this.dataSources[name];
            delete this.defereds[name];
        };


        /*获取一个数据源 */

        DataSourceManager.prototype.getDataSource = function (name) {
            var me;
            me = this;
            if (angular.isUndefined(this.defereds[name])) {
                this.defereds[name] = this.$q.defer();
            }
            return this.defereds[name].promise.then(function () {
                return me.dataSources[name];
            });
        };

        return DataSourceManager;

    })();

    dataSourceManager = void 0;
    return function ($window, $q, $rootScope) {
        if (angular.isUndefined(dataSourceManager)) {
            dataSourceManager = new DataSourceManager($q, $rootScope);
            dataSourceManager.destroy = function () {
                if (dataSourceManager.$rootScope){
                    delete dataSourceManager.dataSources;
                    delete dataSourceManager.$rootScope.dataSources;
                    delete dataSourceManager.$rootScope;
                    delete dataSourceManager.defereds;
                }
            }
        }
        return dataSourceManager;
    };
});