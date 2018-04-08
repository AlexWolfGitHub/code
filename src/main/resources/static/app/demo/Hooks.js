define('demo/Hooks', [], function () {

    var REGISTERED_HOOKS = [];
    var Hooks = function () {
        this.globalBucket = this.createEmptyBucket();
    };
    var Proto = Hooks.prototype;
    Proto.createEmptyBucket = function createEmptyBucket() {
        var bucket = Object.create(null);
        for (var i = 0; i < REGISTERED_HOOKS.length; i++) {
            bucket[REGISTERED_HOOKS[i]] = [];
        }
        return bucket;
    };

    Proto.getBucket = function getBucket() {
        var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (context) {
            if (!context.pluginHookBucket) {
                context.pluginHookBucket = this.createEmptyBucket();
            }

            return context.pluginHookBucket;
        }

        return this.globalBucket;
    };

    Proto.add = function add(key, callback) {
        var _this = this;

        var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        if (Array.isArray(callback)) {
            for (var i = 0; i < callback.length; i++) {
                var c = callback[i];
                _this.add(key, c, context);
            }
        } else {
            var bucket = this.getBucket(context);

            if (typeof bucket[key] === 'undefined') {
                this.register(key);
                bucket[key] = [];
            }
            callback.skip = false;

            if (bucket[key].indexOf(callback) === -1) {
                var foundInitialHook = false;

                if (callback.initialHook) {
                    for (var i in bucket[key]) {
                        var cb = bucket[key][i];
                        if (cb.initialHook) {
                            bucket[key][i] = callback;
                            foundInitialHook = true;

                            return false;
                        }
                    }
                }

                if (!foundInitialHook) {
                    bucket[key].push(callback);
                }
            }
        }

        return this;
    };
    Proto.once = function once(key, callback) {
        var _this = this;

        var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        if (Array.isArray(callback)) {
            for (var k in callback) {
                var c = callback[k];
                return _this.once(key, c, context);
            }
        } else {
            callback.runOnce = true;
            this.add(key, callback, context);
        }
    };
    Proto.remove = function remove(key, callback) {
        var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var bucket = this.getBucket(context);

        if (typeof bucket[key] !== 'undefined') {
            if (bucket[key].indexOf(callback) >= 0) {
                callback.skip = true;

                return true;
            }
        }

        return false;
    };
    Proto.has = function has(key) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var bucket = this.getBucket(context);
        return !!(bucket[key] !== void 0 && bucket[key].length);
    };
    Proto.run = function run(context, key, p1, p2, p3, p4, p5, p6) {
        var _this = this;

        function func(handlers) {
            var index = -1;
            var length = handlers ? handlers.length : 0;

            if (length) {
                while (++index < length) {
                    if (!handlers[index] || handlers[index].skip) continue;
                    var res = handlers[index].call(context, p1, p2, p3, p4, p5, p6);

                    if (res !== void 0) p1 = res;
                    if (handlers[index] && handlers[index].runOnce) {
                        _this.remove(key, handlers[index]);
                    }
                }
            }
        }

        if (this.globalBucket[key]) func(this.globalBucket[key]);
        if (context) func(this.getBucket(context)[key]);
        return p1;
    };
    Proto.destroy = function destroy() {
        var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        var bucket = this.getBucket(context);
        for (var key in bucket) {
            bucket[key].length = 0;
        }
    };
    Proto.register = function register(key) {
        if (!this.isRegistered(key)) {
            REGISTERED_HOOKS.push(key);
        }
    };
    Proto.deregister = function deregister(key) {
        if (this.isRegistered(key)) {
            REGISTERED_HOOKS.splice(REGISTERED_HOOKS.indexOf(key), 1);
        }
    };
    Proto.isRegistered = function isRegistered(key) {
        return REGISTERED_HOOKS.indexOf(key) >= 0;
    };
    Proto.getRegistered = function getRegistered() {
        return REGISTERED_HOOKS;
    };

    return new Hooks();
});