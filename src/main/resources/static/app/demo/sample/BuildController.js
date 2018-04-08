define('demo/sample/BuildController', [
    'underscore',
    'demo/Hooks',
    'demo/sample/BaseController',
    'demo/utils'
], function (_, Hooks, BaseController) {
    var BuildController = inherit(function (options) {
        BaseController.call(this, options);

        function propertyNameConverter(name) {
            switch (name) {
                case "MEMONIC_NO":
                    return "memonicNo";
                default:
                    return false;
            }
        }

        //单个注册
        this.registerAssociateSetting("settleOfficeNameCsCustCreditQSource", [
            {cmd: "self", columnName: ["MEMONIC_NO", "CUST_NAME_CN"]},
            {cmd: "common", condition: ["k1", "k2"], sort: ["k1", "k2"]}
        ]);

        this.registerAssociateSetting("settleOfficeNameCsCustCreditQSource", {
            "queryResultType": "page", "sum": false,
            cmdList: [
                {cmd: "self", columnName: ["MEMONIC_NO", "CUST_NAME_CN"]},
                {cmd: "common", condition: ["k1", "k2"], sort: ["k1", "k2"]}
            ]
        });

        this.registerAssociateCommonCondition("key");
        //批量注册
        this.registerAssociateSetting({
            settleOfficeNameCsCustCreditQSource: [
                {cmd: "common", condition: ["k1", "k2"], sort: ["k1", "k2"]},
                {
                    cmd: "self",
                    propertyName: ["memonicNo"],
                    columnName: ["MEMONIC_NO", "CUST_NAME_CN"],
                    type: "V",
                    dataType: 'S',
                    junction: 'or',
                    operation: 'LIKEE',
                    converter: propertyNameConverter
                },
                {
                    cmd: "custom",
                    columnName: "CUST_NAME_CN",
                    type: "V",
                    dataType: 'S',
                    junction: 'or',
                    operation: 'LIKEE',
                    value: "dd"
                },
                {
                    cmd: "custom",
                    columnName: "CUST_NAME_CN",
                    type: "V",
                    dataType: 'S',
                    junction: 'or',
                    operation: 'LIKEE',
                    valueType: 'dynamic',
                    value: "myOrder.orderCode",
                    value: "this.scope.myOrder.orderCode",
                    value: "this.xxx"
                },
                {
                    cmd: "custom",
                    columnName: "CUST_NAME_CN",
                    type: "V",
                    dataType: 'S',
                    junction: 'or',
                    operation: 'LIKEE',
                    valueType: 'function',
                    value: function (item) {
                    },
                    listValue: function (item) {
                    }
                },
                {
                    cmd: "sort",
                    columnName: ["USER_NAME_CN", "USER_NAME"],
                    sortDirection: 'asc',
                    sortOrder: '0'
                },
                {
                    cmd: "sort",
                    columnName: "USER_NAME_CN",
                    sortDirection: 'asc',
                    sortOrder: '0'
                },
                {
                    cmd: "sort",
                    columnName: "USER_NAME",
                    sortDirection: 'desc',
                    sortOrder: '1'
                }
            ]
        });


    }, BaseController);

    var Proto = BuildController.prototype;
    Proto.businessHandle = function (p1) {
        alert(p1);
        Hooks.run(null, "hookFunc", "hookParam");
    };

    Proto.testFunc1 = function () {

    };

    return BuildController;
});