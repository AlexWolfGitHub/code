define('demo/AssociateQuery', ["underscore"], function (_) {
    var AssociateQuery = function (instance) {
        this.instance = instance;
        this._condition = {};
        this._commonCondition = {};
        this._commonSort = {};
        this._associateParams = {};
    };

    var Proto = AssociateQuery.prototype;
    Proto.registerCondition = function (key, condition) {
        this._commonCondition[key] = condition;
        return this;
    };

    Proto.registerSort = function (key, sort) {
        this._commonSort[key] = sort;
        return this;
    };

    Proto.new = function (opts, conditions, sorts) {
        var _this = this;
        if (opts) _.extendOwn(_this._condition, opts);
        else _.extendOwn(_this._condition, {"queryResultType": "page", "sum": false});

        if (_.isArray(conditions)) {
            _.each(conditions, function (key) {
                if (_this._commonCondition[key]) _this._condition.searchColumns.push(_this._commonCondition[key]);
            });
        } else {
            if (_this._commonCondition[key]) _this._condition.searchColumns.push(_this._commonCondition[key]);
        }

        if (_.isArray(sorts)) {
            _.each(sorts, function (key) {
                if (_this._commonSort[key]) _this._condition.sortColumns.push(_this._commonSort[key]);
            });
        } else {
            if (_this._commonSort[key]) _this._condition.sortColumns.push(_this._commonSort[key]);
        }
        return _this;
    };

    Proto.addCondition = function (condition) {
        this._condition.searchColumns.push(condition);
    };

    Proto.addSort = function (sort) {
        this._condition.sortColumns.push(sort);
    };

    Proto.registerSetting = function (key, setting) {
        var _this = this;
        if (_.isObject(key)) _.extendOwn(this._associateParams, key);
        else if (key !== undefined && key !== false && setting) this._associateParams[key] = setting;
    };

    Proto.getParams = function (associate) {
        var _this = this;
        if (!_this._associateParams[associate.sourceName]) return {};
        var setting = _this._associateParams[associate.sourceName];
        var params = {searchColumns: [], sortColumns: [], "queryResultType": "page", "sum": false};
        if (_.isObject(setting)) {
            _.extend(params, setting);
            delete params.cmdList;
        }

        function getConditionItem(cmd) {
            var item = {
                columnName: cmd.columnName,
                propertyName: _this._getPropertyName(cmd),
                dataType: "S",
                junction: "and",
                operation: "EQ"
            };
            if (cmd.dataType) item.dataType = cmd.dataType;
            if (cmd.type) item.type = cmd.type;
            if (cmd.junction) item.junction = cmd.junction;
            return item;
        }

        function getQueryText() {
            if (associate.scope.multi) {
                if (associate.scope.selectedRows) {
                    var arr = associate.scope.inputText.val().split(associate.scope.valueSeparator);
                    return arr.length != associate.scope.selectedRow.length ? arr[arr.length - 1] : "";
                } else {
                    return "";
                }
            } else {
                return associate.scope.inputText.val();
            }
        }

        var cmdList = _.isArray(setting) ? setting : (setting.cmdList || []);
        _.each(cmdList, function (cmd) {
            if (cmd.cmd === "common") {
                if (cmd.condition) {
                    var keyList = !_.isArray(cmd.condition) ? [cmd.condition] : cmd.condition;

                    _.each(keyList, function (key) {
                        if (!_this._commonCondition[key]) return;
                        var cmd = _this._commonCondition[key];
                        var item = getConditionItem(cmd);
                        if (cmd.valueType === "dynamic") {
                            if (item.value) item.value = _this._getDynamicValue(cmd, cmd.value);
                            else if (item.listValue) item.listValue = _this._getDynamicValue(cmd, cmd.listValue);
                        } else if (cmd.valueType === "function") {
                            if (cmd.value && _.isFunction(cmd.value)) item.value = cmd.value(cmd);
                            else if (cmd.listValue && _.isFunction(cmd.listValue)) item.listValue = cmd.listValue(cmd);
                        } else if (item.value) {
                            item.value = cmd.value;
                        } else if (item.listValue) {
                            item.listValue = cmd.listValue;
                        } else {
                            item.value = "";
                        }
                        params.searchColumns.push(item);
                    });
                }

                if (cmd.sort) {
                    var keyList = !_.isArray(cmd.sort) ? [cmd.sort] : cmd.sort;
                    _.each(keyList, function (key) {
                        if (!_this._commonSort[key]) return;
                        params.sortColumns.push(_this._commonSort[key]);
                    });
                }
            } else if (cmd.cmd === "self") {
                var columnNameList = _.isArray(cmd.columnName) ? cmd.columnName : [cmd.columnName];
                var propertyNameList = cmd.propertyName ? (_.isArray(cmd.columnName) ? cmd.columnName : [cmd.columnName]) : false;
                _.each(columnNameList, function (columnName, i) {
                    var item = {
                        columnName: columnName,
                        propertyName: (propertyNameList ? propertyNameList[i] : _this._getPropertyName(cmd, columnName)),
                        dataType: cmd.dataType || "S",
                        junction: cmd.junction,
                        operation: cmd.operation,
                        value: getQueryText()
                    };
                    if (cmd.type) item.type = cmd.type;
                    params.searchColumns.push(item);
                });
            } else if (cmd.cmd === "custom") {
                var item = getConditionItem(cmd);
                if (cmd.valueType === "dynamic") {
                    if (item.value) item.value = _this._getDynamicValue(cmd, cmd.value);
                    else if (item.listValue) item.listValue = _this._getDynamicValue(cmd, cmd.listValue);
                } else if (cmd.valueType === "function") {
                    if (cmd.value && _.isFunction(cmd.value)) item.value = cmd.value(cmd);
                    else if (cmd.listValue && _.isFunction(cmd.listValue)) item.listValue = cmd.listValue(cmd);
                } else if (item.value) {
                    item.value = cmd.value;
                } else if (item.listValue) {
                    item.listValue = cmd.listValue;
                } else {
                    item.value = "";
                }
                params.searchColumns.push(item);
            } else if (cmd.cmd === "sort") {
                var columnNameList = _.isArray(cmd.columnName) ? cmd.columnName : [cmd.columnName];
                _.each(columnNameList, function (columnName) {
                    params.sortColumns.push({
                        propertyName: _this._getPropertyName(cmd, columnName),
                        columnName: columnName,
                        sortDirection: cmd.sortDirection,
                        sortOrder: cmd.sortOrder
                    });
                });
            }
        });

        return params;
    };

    Proto._getPropertyName = function (cmd, columnName) {
        if (cmd.propertyName) return cmd.propertyName;
        if (!columnName && !cmd.columnName) return undefined;

        function func(str) {
            var tmp = str.substr(0, 1).toUpperCase();
            if (str.length > 1) tmp += str.substr(1);
            return tmp;
        }

        var result = "";
        var str = columnName || cmd.columnName;
        if (cmd.converter && _.isFunction(cmd.converter)) result = cmd.converter(str);
        if (!result) {
            var ary = str.toLowerCase().split("_");
            _.each(ary, function (str, i) {
                result += i === 0 ? str : func(str);
            });
        }
        return result;
    };

    Proto._getDynamicValue = function (cmd, str) {
        if (cmd.valueType !== "dynamic") return undefined;
        var ary = str.split(".");
        var value = this.scope;
        for (var i = 0; i < ary.length; i++) {
            if (i === 0 && ary[i] === "this") value = this;
            if ((i === 0 || i === 1) && ary[i] === "scope") value = this.scope;
            if (value[ary[i]] !== undefined) value = value[ary[i]];
            else return "";
        }
        return value;
    };

    Proto.destroy = function () {
        delete this._condition;
        delete this._commonCondition;
        delete this._commonSort;
        delete this._associateParams;
    };

    return AssociateQuery;
});

Proto.getAssociateQuery = function () {
    if (!this._associateQuery) this._associateQuery = new AssociateQuery(this);
    return this._associateQuery;
};

Proto.registerAssociateSetting = function (key, setting) {
    this.getAssociateQuery().registerSetting(key, setting);
};

Proto.registerAssociateCommonCondition = function (key, condition) {
    this.getAssociateQuery().registerCondition(key, condition);
};

Proto.registerAssociateCommonSort = function (key, sort) {
    this.getAssociateQuery().registerSort(key, sort);
};