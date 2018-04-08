define(["underscore"], function (_) {
    return {
        tabLocation: function (options) {
            var _this = this,
                settings = options.settings || [],
                tab = options.tab,
                execAll = options.execAll || true;
            if (!_.isArray(settings)) settings = [settings];
            var result = true, contentHint = "", selectTabIndexs = [], promises = [];
            _.each(settings, function (setting) {
                if (!setting.scope) return;
                var flag = true;
                if (execAll && setting.gridForm) {
                    var gridFormList = _.isArray(setting.gridForm) ? setting.gridForm : [setting.gridForm];
                    _.each(gridFormList, function (gridForm) {
                        var scope = setting.scope || {},
                            formName = gridForm.name,
                            object = gridForm.object,
                            key = gridForm.key;
                        if (scope[object] && scope[object][key] && scope[formName]) {
                            if (scope[formName].$validator && scope[formName].verify) {
                                scope[formName].$validator.enable();
                                scope[formName].verify();
                            }
                        }
                        if (scope[formName] && !scope[formName].$valid) {
                            result = false;
                            flag = false;
                            return;
                        }
                    });
                }
                if (execAll && setting.form) {
                    var formList = _.isArray(setting.form) ? setting.form : [setting.form];
                    _.each(formList, function (form) {
                        if (setting.scope[form] && !setting.scope[form].$valid) {
                            result = false;
                            flag = false;
                            return;
                        }
                    });
                }
                if (setting.grid) {
                    var gridList = _.isArray(setting.grid) ? setting.grid : [setting.grid];
                    _.each(gridList, function (key) {
                        var scope = setting.scope || {},
                            grid = key + "Grid",
                            record = key + "s";
                        if (scope[grid] && scope[grid].formController) {
                            if (scope[grid].gridType === "HotTable") {
                                var promise = scope[grid].finishEdit()
                                    .then(function () {
                                        return scope[grid].validateAddedAndModifiedRows()
                                            .then(function () {
                                                _this.finishEditGridWrap(scope[grid], scope[record], scope);
                                            }).catch(function () {
                                                contentHint += "\r\n" + "【" + setting.hint + "】";
                                                selectTabIndexs.push(setting.index);
                                            });
                                    });
                                promises.push(promise);
                            } else if (!scope[grid].formController.$valid || (!execAll && scope[grid].$$requireGridValid == false)) {
                                if (!execAll) delete scope[grid].$$requireGridValid;
                                result = false;
                                flag = false;
                                return;
                            }
                        }
                    });


                }
                if (!flag) {
                    contentHint += "\r\n" + "【" + setting.hint + "】";
                    tab.selectTab(setting.index);
                    selectTabIndexs.push(setting.index);
                    $(".popover").hide();
                    var errorItems = [];
                    if (setting.form) {
                        var formList = _.isArray(setting.form) ? setting.form : [setting.form];
                        _.each(formList, function (form) {
                            if (setting.scope[form] && setting.scope[form].$error) {
                                for (var prop in setting.scope[form].$error) {
                                    if (angular.isArray(setting.scope[form].$error[prop])) {
                                        errorItems = errorItems.concat(setting.scope[form].$error[prop]);
                                    }
                                }
                                _this.errorLocation(errorItems);
                            }
                        });
                    }
                }
            });
            return {validationFlag: result, contentHint: contentHint, selectTabIndexs: selectTabIndexs, promises: promises};
        },
        //废弃
        gridTabLocation: function (settings, tab) {
            var _this = this, result = true;
            if (!_.isArray(settings)) settings = [settings];
            _.each(settings, function (setting) {
                var scope = setting.scope || {},
                    gridList = _.isArray(setting.grid) ? setting.grid : [setting.grid],
                    flag = true;
                _.each(gridList, function (grid) {
                    if (scope[grid] && scope[grid].formController) {
                        if (!scope[grid].formController.$valid || scope[grid].$$requireGridValid == false) {
                            delete scope[grid].$$requireGridValid;
                            flag = false;
                            result = false;
                        }
                    }
                });
                if (!flag) tab.selectTab(setting.index);
            });
            return result;
        }
    };
});