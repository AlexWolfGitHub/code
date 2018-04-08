define(['require', 'angular', 'config.properties'], function (require, angular, config) {

        var scripts = document.getElementsByTagName('script'),
            i = scripts.length - 1,
            moduleNames = [],
            $prepareLoadModules = config.controls.$prepareLoadModules || [],
            script, bootstrapModules, len, path, moduleName,
            global = window;

        global.$config = config.$window_$config || {};

        function evalObject(script) {
            return Function('return ' + script + '')();
        }

        function isArray(source) {
            return Object.prototype.toString.call(source) === '[object Array]';
        }

        while (i >= 0 && !bootstrapModules) {
            script = scripts[i];
            bootstrapModules = script.getAttribute('data-bootstrap-modules');
            i--;
        }
        if (!bootstrapModules) {
            throw new Error('DynamicModuleLoader require a script block defined \'data-bootstrap-modules\' attribute,  it\'s a string or array of module names.');
        }
        bootstrapModules = evalObject(bootstrapModules);
        if (typeof bootstrapModules === 'string') {
            bootstrapModules = [bootstrapModules];
        }
        if (isArray(bootstrapModules)) {
            for (i = 0, len = bootstrapModules.length; i < len; i++) {
                path = bootstrapModules[i];
                moduleName = path.substring(path.lastIndexOf('/') + 1);
                if (!!moduleName) {
                    moduleNames.push(moduleName);
                }
            }
            if (moduleNames.length === bootstrapModules.length) {
                require($prepareLoadModules, function () {
                    require(['framework/commonsModules'].concat(bootstrapModules), function (commonsModules) {
                        var doc = document;
                        var $document = angular.element(doc);
                        $document.ready(function () {
                            // 屏蔽退格键返回 by liaowj
                            $document.on('keydown', function (event) {
                                var target = event.srcElement || event.target,
                                    tagName = target.tagName;
                                if (event.keyCode === 8 && !((tagName === 'INPUT' || tagName === 'TEXTAREA') && !target.getAttribute("disabled") && !target.getAttribute("readonly"))) {
                                    event.preventDefault();
                                }
                            });
                            angular.bootstrap(doc, commonsModules.concat(moduleNames));
                        });
                    });
                });
                return;
            }
        }
        throw new Error('动态启动失败，请检查模块名称是否正确.');
});