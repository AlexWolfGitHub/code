define(["angular", "underscore"], function (angular, _) {
    return {
        finishEditGridWrap: function (grid, records, scope) {
            if (grid.gridType && grid.gridType == "HotTable") {
                var modifiedRecords = grid.getModifiedRecordMap();
                _.each(modifiedRecords, function (record) {
                    if (record.rowStatus != 8) record.rowStatus = 16;
                });
                if (modifiedRecords.length > 0 && scope && scope._pageState && scope._pageState.setDataStateModify) {
                    scope._pageState.setDataStateModify();
                }
            } else {
                var $$currentEditingRowIndex = grid.__editingRowIndex;
                if ($$currentEditingRowIndex >= 0) {
                    grid.finishEdit();
                    if (grid.getModifiedRecordMap()[$$currentEditingRowIndex] && records && records.length > 0) {
                        var tempAlreadyModify = records[$$currentEditingRowIndex];
                        if (tempAlreadyModify.rowStatus && tempAlreadyModify.rowStatus == 2 && tempAlreadyModify.rowStatus != 8) {
                            records[$$currentEditingRowIndex].rowStatus = 16;
                            if (scope && scope._pageState && scope._pageState.setDataStateModify)
                                scope._pageState.setDataStateModify();
                        }
                    }
                }
                $$currentEditingRowIndex = undefined;
            }
        },
        gridReset: function (scope, key) {
            var gridName = key + "Grid";
            var recordName = key + "s";
            if (scope[gridName]) scope[gridName]._reset();
            if (scope[recordName] !== undefined) scope[recordName].splice(0, scope[recordName].length);
            //if (scope[key] !== undefined) scope[key] = {};
        },
        gridVerify: function (options) {
            if (!_.isObject(options))
                return;
            var _this = this,
                    settings = options.settings || [];
            if (!_.isArray(settings)) settings = [settings];
            _.each(settings, function (setting) {
                var scope = setting.scope,
                        gridKeys = _.isArray(setting.grid) ? setting.grid : [setting.grid];
                if (_.isEmpty(scope)) return;
                _.each(gridKeys, function (key) {
                    var gridName = key + "Grid",
                            formName = key + "Form",
                            recordName = key + "s";
                    //1比1子对象对象
                    if (setting.loadOneToOneSubBoData) {
                        if (setting.type == "add" && scope[options.boName]) {
                            scope[options.boName][key] = {};
                            if (scope[setting.key])
                                scope[setting.key] = scope[options.boName][key];
                        }
                    }
                    if (setting.resetValid == "G") {
                        if (scope[gridName]) {
                            if (scope[gridName].formController) {
                                if (_.isFunction(scope[gridName].formController.verify)) scope[gridName].formController.verify();
                                if (scope[gridName].formController.$valid) _this.finishEditGridWrap(scope[gridName], scope[recordName], scope);
                            } else {
                                _this.finishEditGridWrap(scope[gridName], scope[recordName], scope);
                            }
                        }
                    } else if (setting.resetValid == "F") {
                        if (scope[formName] && scope[formName].$validator) {
                            if (_.isFunction(scope[formName].$validator.reset)) scope[formName].$validator.reset();
                            if (_.isFunction(scope[formName].$validator.disable)) scope[formName].$validator.disable();
                        }
                    } else {
                        if (scope[gridName])
                            _this.finishEditGridWrap(scope[gridName], scope[recordName], scope);
                    }
                    if (setting.clearDeletedJsVariable) {
                        if (scope[key] !== undefined) scope[key] = {};
                    }
                    if (setting.reset) _this.gridReset(scope, key);
                    if (_.isFunction(setting.callback)) setting.callback();
                });
            })
        },
        gridPromise: function (options) {
            if (!_.isObject(options))
                return;
            var settings = options.settings || [],
                    contentHint = options.contentHint;
            if (!_.isArray(settings)) settings = [settings];
            var promises = [];
            _.each(settings, function (setting) {
                var scope = setting.scope || {},
                        gridKeys = _.isArray(setting.grid) ? setting.grid : [setting.grid];
                _.each(gridKeys, function (key) {
                    var gridKey = key + "Grid";
                    if (scope[setting.grid] && scope[gridKey].tbody.rows[0]) {
                        var promise = scope[gridKey].verifySourceRequires();
                        promises.push(promise);
                        if (contentHint.indexOf(setting.hint) == -1) {
                            promise.then(function () {
                            }).catch(function (result) {
                                contentHint += "\r\n" + setting.hint;
                            });
                        }
                    }
                });
            });
            return {promises: promises, contentHint: contentHint};
        },
        gridRequest: function (setting) {
            var _this = this,
                    scope = setting.scope || {},
                    form = setting.form || "",
                    grid = setting.grid || "",
                    record = setting.record || "",
                    injector = angular.element(document).injector(),
                    GillionMsg = injector.get("GillionMsg");
            if (scope[form] && scope[form].$validator) scope[form].verify();
            if (scope[form] && !scope[form].$valid) return false;
            this.finishEditGridWrap(scope[grid], scope[record], scope);
            if (scope._pageState && scope._pageState._dataState == $config.dataState.MODIFY) {
                GillionMsg.confirm(null, "是否保存编辑的数据？", function (btn) {
                    if (btn) {
                    } else {
                        scope[grid].$$currentSelKey = undefined;
                        scope[record] = [];
                        scope._pageState._dataState = $config.dataState.NORMAL;
                        _this.gridRequest(setting);
                    }
                });
                return;
            }
            if (scope[grid] && scope[grid].formController) {
                var $validator = scope[grid].formController.$validator;
                $validator.disable();
                $validator.reset();
            }
            this.finishEditGridWrap(scope[grid], scope[record], scope);
            if (scope[grid].formController) {
                $validator.enable();
            }
            scope[grid]._reset();
            if (setting && setting.requestFunc && _.isFunction(scope[setting.requestFunc])) scope[setting.requestFunc]();
            scope[grid].$$currentSelKey = undefined;
            if (scope._pageState) scope._pageState.resetDataState();
        },
        gridFinishNonValidate: function (setting) {
            var _this = this,
                    scope = setting.scope || {},
                    grid = setting.grid || "",
                    record = setting.record || "";
            if (scope[grid] && scope[grid].formController) {
                var $validator = scope[grid].formController.$validator;
                $validator.disable();
                $validator.reset();
            }
            _this.finishEditGridWrap(scope[grid], scope[record], scope);
            if (scope[grid].formController) {
                $validator.enable();
            }
        }
    }
});