/**
 * Created by marcos on 2017/9/21.
 */
define(["angular"], function(angular) {
    return {
        "of": function(controllerName) {
            return angular.element("[ng-controller=" + controllerName + "]").data().$scope;
        },
    }
});