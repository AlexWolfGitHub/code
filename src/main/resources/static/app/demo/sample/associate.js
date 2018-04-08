this.registerAssociateSetting({
    settleOfficeNameCsCustCreditQSource: [
        {
            cmd: "self",
            columnName: ["VESSEL_ALIAS_CODE", "VESSEL_NAME_EN", "VESSEL_NAME_CN", "VESSEL_CODE"],
            dataType: 'S',
            junction: 'or',
            operation: 'LIKEIC'
        }
    ],
    settleOfficeNameCsCustCreditQSource: [
        {
            cmd: "self",
            columnName: ["VOYAGE", "VESSEL_NAME_EN", "VESSEL_CODE", "PORT_CODE"],
            dataType: 'S',
            junction: 'or',
            operation: 'LIKEIC'
        },
        {
            cmd: "sort",
            columnName: 'VOYAGE',
            sortDirection: 'asc',
            sortOrder: '1'
        }
    ],
    settleOfficeNameCsCustCreditQSource: [
        {
            cmd: "self",
            columnName: ["MEMONIC_NO", "CUST_CODE", "CUST_ALIAS", "CUST_NAME_CN"],
            dataType: 'S',
            junction: 'or',
            operation: 'LIKEIC'
        },
        {
            cmd: "custom",
            columnName: 'CUST_TYPE',
            dataType: 'S',
            value: "CM",
            operation: 'EQ'
        },
        {
            cmd: "custom",
            columnName: 'SETTLE_OFFICE',
            dataType: 'S',
            valueType: 'dynamic',
            value: "$sessionAttrs.loginUser.settleOffice",
            operation: 'EQ'
        },
        {
            cmd: 'sort',
            columnName: 'CUST_NAME_CN',
            sortDirection: 'asc',
            sortOrder: '1'
        }
    ],
    settleOfficeNameCsCustCreditQSource: [
        {
            cmd: "self",
            columnName: ["MEMONIC_NO", "CUST_CODE", "CUST_ALIAS", "CUST_NAME_CN"],
            dataType: 'S',
            junction: 'or',
            operation: 'LIKEIC'
        },
        {
            cmd: "custom",
            columnName: 'CUST_TYPE',
            dataType: 'S',
            value: "CM",
            operation: 'EQ'
        },
        {
            cmd: "custom",
            columnName: 'SETTLE_OFFICE',
            dataType: 'S',
            valueType: 'dynamic',
            value: "$sessionAttrs.loginUser.settleOffice",
            operation: 'EQ'
        },
        {
            cmd: 'sort',
            columnName: 'CUST_NAME_CN',
            sortDirection: 'asc',
            sortOrder: '1'
        }
    ],
    settleOfficeNameCsCustCreditQSource: [
        {
            cmd: "self",
            columnName: ["MEMONIC_NO", "CUST_CODE", "CUST_ALIAS", "CUST_NAME_CN"],
            dataType: 'S',
            junction: 'or',
            operation: 'LIKEIC'
        },
        {
            cmd: "custom",
            columnName: 'CUST_TYPE',
            dataType: 'S',
            value: "CM",
            operation: 'EQ'
        },
        {
            cmd: "custom",
            columnName: 'SETTLE_OFFICE',
            dataType: 'S',
            valueType: 'dynamic',
            value: "$sessionAttrs.loginUser.settleOffice",
            operation: 'EQ'
        },
        {
            cmd: 'sort',
            columnName: 'CUST_NAME_CN',
            sortDirection: 'asc',
            sortOrder: '1'
        }
    ],
    settleOfficeNameCsCustCreditQSource: [
        {
            cmd: "self",
            columnName: ["USER_NAME", "USER_NAME_CN", "USER_NAME_EN", "OFFICE_NAME"],
            dataType: 'S',
            junction: 'or',
            operation: 'LIKEIC'
        },
        {
            cmd: 'sort',
            columnName: 'USER_NAME_CN',
            sortDirection: 'asc',
            sortOrder: '0'
        }
    ],
    settleOfficeNameCsCustCreditQSource: [
        {
            cmd: "self",
            columnName: ["OFFICE_CODE", "OFFICE_NAME", "SETTLE_OFFICE_NAME"],
            dataType: 'S',
            junction: 'or',
            operation: 'LIKEIC'
        }
    ],
    settleOfficeNameCsCustCreditQSource: [
        {
            cmd: "self",
            columnName: ["SUB_BUSINESS_CODE", "SUB_BUSINESS_NAME", "SETTLE_OFFICE", "BUSINESS_TYPE"],
            dataType: 'S',
            junction: 'or',
            operation: 'LIKEIC'
        },
        {
            cmd: "custom",
            columnName: 'SETTLE_OFFICE',
            dataType: 'S',
            valueType: 'dynamic',
            value: "$sessionAttrs.loginUser.settleOffice",
            operation: 'EQ'
        },
        {
            cmd: 'sort',
            columnName: 'USER_NAME_CN',
            sortDirection: 'asc',
            sortOrder: '0'
        }
    ],
    settleOfficeNameCsCustCreditQSource: [
        {
            cmd: "self",
            columnName: ["DISPLAY_VALUE_CN", "CODE_VALUE", "CODE_TYPE"],
            dataType: 'S',
            junction: 'or',
            operation: 'LIKEIC'
        },
        {
            cmd: 'sort',
            columnName: 'CODE_VALUE',
            sortDirection: 'asc',
            sortOrder: '1'
        }
    ],
    settleOfficeNameCsCustCreditQSource: [
        {
            cmd: "self",
            columnName: ["OFFICE_CODE", "OFFICE_CODE", "OFFICE_NAME","IS_SETTLEMENT_OBJ"],
            dataType: 'S',
            junction: 'or',
            operation: 'LIKEIC'
        }
    ],
});

$scope.queryVesselNameVmdAccessoriesQParams = function () {
    var searchColumns = [];
    if ($scope.search_vesselName) {
        searchColumns.push({
            propertyName: 'vesselAliasCode',
            columnName: 'VESSEL_ALIAS_CODE',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_vesselName || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_vesselName) {
        searchColumns.push({
            propertyName: 'vesselNameEn',
            columnName: 'VESSEL_NAME_EN',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_vesselName || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_vesselName) {
        searchColumns.push({
            propertyName: 'vesselNameCn',
            columnName: 'VESSEL_NAME_CN',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_vesselName || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_vesselName) {
        searchColumns.push({
            propertyName: 'vesselCode',
            columnName: 'VESSEL_CODE',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_vesselName || "",
            operation: 'LIKEIC'
        });
    }
    var sortColumns = [];


    sortColumns.push({
        propertyName: 'vesselAliasCode',
        columnName: 'VESSEL_ALIAS_CODE',
        sortDirection: 'asc',
        sortOrder: '0'
    });


    sortColumns.push({
        propertyName: 'vesselNameEn',
        columnName: 'VESSEL_NAME_EN',
        sortDirection: 'asc',
        sortOrder: '1'
    });
    return {
        "searchColumns": searchColumns,
        "sortColumns": sortColumns,
        "queryResultType": "page",
        "sum": false
    };
};
$scope.queryVoyageVmdAccessoriesQParams = function () {
    var searchColumns = [];
    if ($scope.search_voyage) {
        searchColumns.push({
            propertyName: 'voyage',
            columnName: 'VOYAGE',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_voyage || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_voyage) {
        searchColumns.push({
            propertyName: 'vesselNameEn',
            columnName: 'VESSEL_NAME_EN',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_voyage || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_voyage) {
        searchColumns.push({
            propertyName: 'vesselNameCn',
            columnName: 'VESSEL_NAME_CN',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_voyage || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_voyage) {
        searchColumns.push({
            propertyName: 'vesselCode',
            columnName: 'VESSEL_CODE',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_voyage || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_voyage) {
        searchColumns.push({
            propertyName: 'portCode',
            columnName: 'PORT_CODE',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_voyage || "",
            operation: 'LIKEIC'
        });
    }
    var sortColumns = [];


    sortColumns.push({
        propertyName: 'voyage',
        columnName: 'VOYAGE',
        sortDirection: 'asc',
        sortOrder: '1'
    });


    return {
        "searchColumns": searchColumns,
        "sortColumns": sortColumns,
        "queryResultType": "page",
        "sum": false
    };
};
$scope.queryConsignorNameVmdAccessoriesQParams = function () {
    var searchColumns = [];
    if ($scope.search_consignorName) {
        searchColumns.push({
            propertyName: 'memonicNo',
            columnName: 'MEMONIC_NO',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_consignorName || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_consignorName) {
        searchColumns.push({
            propertyName: 'custCode',
            columnName: 'CUST_CODE',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_consignorName || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_consignorName) {
        searchColumns.push({
            propertyName: 'custAlias',
            columnName: 'CUST_ALIAS',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_consignorName || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_consignorName) {
        searchColumns.push({
            propertyName: 'custNameCn',
            columnName: 'CUST_NAME_CN',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_consignorName || "",
            operation: 'LIKEIC'
        });
    }

    searchColumns.push({
        propertyName: 'custType',
        columnName: 'CUST_TYPE',
        dataType: 'S',
        value: "CM",
        operation: 'EQ'
    });

    if ($scope.$sessionAttrs && $scope.$sessionAttrs.loginUser && $scope.$sessionAttrs.loginUser.settleOffice) {
        searchColumns.push({
            propertyName: 'settleOffice',
            columnName: 'SETTLE_OFFICE',
            dataType: 'S',
            value: $scope.$sessionAttrs.loginUser.settleOffice || "",
            operation: 'EQ'
        });
    }

    var sortColumns = [];


    sortColumns.push({
        propertyName: 'custNameCn',
        columnName: 'CUST_NAME_CN',
        sortDirection: 'asc',
        sortOrder: '1'
    });


    return {
        "searchColumns": searchColumns,
        "sortColumns": sortColumns,
        "queryResultType": "page",
        "sum": false
    };
};
$scope.queryBusinessUnitsNameVmdAccessoriesQParams = function () {
    var searchColumns = [];
    if ($scope.search_businessUnitsName) {
        searchColumns.push({
            propertyName: 'memonicNo',
            columnName: 'MEMONIC_NO',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_businessUnitsName || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_businessUnitsName) {
        searchColumns.push({
            propertyName: 'custCode',
            columnName: 'CUST_CODE',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_businessUnitsName || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_businessUnitsName) {
        searchColumns.push({
            propertyName: 'custAlias',
            columnName: 'CUST_ALIAS',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_businessUnitsName || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_businessUnitsName) {
        searchColumns.push({
            propertyName: 'custNameCn',
            columnName: 'CUST_NAME_CN',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_businessUnitsName || "",
            operation: 'LIKEIC'
        });
    }

    searchColumns.push({
        propertyName: 'custType',
        columnName: 'CUST_TYPE',
        dataType: 'S',
        value: "CM",
        operation: 'EQ'
    });
    var sortColumns = [];


    sortColumns.push({
        propertyName: 'custNameCn',
        columnName: 'CUST_NAME_CN',
        sortDirection: 'asc',
        sortOrder: '1'
    });


    return {
        "searchColumns": searchColumns,
        "sortColumns": sortColumns,
        "queryResultType": "page",
        "sum": false
    };
};
$scope.querySecondCarrierNameVmdAccessoriesQParams = function () {
    var searchColumns = [];
    if ($scope.search_secondCarrierName) {
        searchColumns.push({
            propertyName: 'memonicNo',
            columnName: 'MEMONIC_NO',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_secondCarrierName || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_secondCarrierName) {
        searchColumns.push({
            propertyName: 'custCode',
            columnName: 'CUST_CODE',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_secondCarrierName || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_secondCarrierName) {
        searchColumns.push({
            propertyName: 'custAlias',
            columnName: 'CUST_ALIAS',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_secondCarrierName || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_secondCarrierName) {
        searchColumns.push({
            propertyName: 'custNameCn',
            columnName: 'CUST_NAME_CN',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_secondCarrierName || "",
            operation: 'LIKEIC'
        });
    }

    searchColumns.push({
        propertyName: 'custType',
        columnName: 'CUST_TYPE',
        dataType: 'S',
        value: "SO",
        operation: 'EQ'
    });
    var sortColumns = [];


    sortColumns.push({
        propertyName: 'custNameCn',
        columnName: 'CUST_NAME_CN',
        sortDirection: 'asc',
        sortOrder: '1'
    });


    return {
        "searchColumns": searchColumns,
        "sortColumns": sortColumns,
        "queryResultType": "page",
        "sum": false
    };
};
$scope.querySalesNameVmdAccessoriesQParams = function () {
    var searchColumns = [];
    if ($scope.search_salesName) {
        searchColumns.push({
            propertyName: 'userName',
            columnName: 'USER_NAME',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_salesName || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_salesName) {
        searchColumns.push({
            propertyName: 'userNameCn',
            columnName: 'USER_NAME_CN',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_salesName || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_salesName) {
        searchColumns.push({
            propertyName: 'userNameEn',
            columnName: 'USER_NAME_EN',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_salesName || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_salesName) {
        searchColumns.push({
            propertyName: 'officeName',
            columnName: 'OFFICE_NAME',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_salesName || "",
            operation: 'LIKEIC'
        });
    }
    var sortColumns = [];

    sortColumns.push({
        propertyName: 'userNameCn',
        columnName: 'USER_NAME_CN',
        sortDirection: 'asc',
        sortOrder: '0'
    });


    return {
        "searchColumns": searchColumns,
        "sortColumns": sortColumns,
        "queryResultType": "page",
        "sum": false
    };
};
$scope.queryCanvassionDepartmentVmdAccessoriesQParams = function () {
    var searchColumns = [];
    if ($scope.search_canvassionDepartment) {
        searchColumns.push({
            propertyName: 'officeCode',
            columnName: 'OFFICE_CODE',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_canvassionDepartment || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_canvassionDepartment) {
        searchColumns.push({
            propertyName: 'officeName',
            columnName: 'OFFICE_NAME',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_canvassionDepartment || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_canvassionDepartment) {
        searchColumns.push({
            propertyName: 'settleOfficeName',
            columnName: 'SETTLE_OFFICE_NAME',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_canvassionDepartment || "",
            operation: 'LIKEIC'
        });
    }
    var sortColumns = [];


    return {
        "searchColumns": searchColumns,
        "sortColumns": sortColumns,
        "queryResultType": "page",
        "sum": false
    };
};
$scope.querySubBusinessTypeVmdAccessoriesQParams = function () {

    var searchColumns = [];
    if ($scope.subBusinessTypeVmdAccessoriesQSelectedRow) {
        var multiAssociateParamsArr = $scope.search_subBusinessType.split(";");
        if (multiAssociateParamsArr.length != $scope.subBusinessTypeVmdAccessoriesQSelectedRow.length)
            $scope.search_subBusinessType = multiAssociateParamsArr[multiAssociateParamsArr.length - 1];
        else
            $scope.search_subBusinessType = "";
    }
    if ($scope.search_subBusinessType) {
        searchColumns.push({
            propertyName: 'subBusinessCode',
            columnName: 'SUB_BUSINESS_CODE',
            dataType: 'S',
            junction: 'or',
            type: 'V',
            value: $scope.search_subBusinessType || "",
            operation: 'LIKEE'
        });
    }
    if ($scope.search_subBusinessType) {
        searchColumns.push({
            propertyName: 'subBusinessName',
            columnName: 'SUB_BUSINESS_NAME',
            dataType: 'S',
            junction: 'or',
            type: 'V',
            value: $scope.search_subBusinessType || "",
            operation: 'LIKEE'
        });
    }
    if ($scope.search_subBusinessType) {
        searchColumns.push({
            propertyName: 'settleOffice',
            columnName: 'SETTLE_OFFICE',
            dataType: 'S',
            junction: 'or',
            type: 'V',
            value: $scope.search_subBusinessType || "",
            operation: 'IN'
        });
    }
    if ($scope.$sessionAttrs && $scope.$sessionAttrs.loginUser && $scope.$sessionAttrs.loginUser.settleOffice) {
        searchColumns.push({
            propertyName: 'settleOffice',
            columnName: 'SETTLE_OFFICE',
            dataType: 'S',
            value: $scope.$sessionAttrs.loginUser.settleOffice || "",
            operation: 'EQ'
        });
    }
    if ($scope.search_subBusinessType) {
        searchColumns.push({
            propertyName: 'businessType',
            columnName: 'BUSINESS_TYPE',
            dataType: 'S',
            junction: 'or',
            type: 'V',
            value: $scope.search_subBusinessType || "",
            operation: 'LIKEIC'
        });
    }
    var sortColumns = [];
    return {
        "searchColumns": searchColumns,
        "sortColumns": sortColumns,
        "queryResultType": "page",
        "sum": false
    };

};
$scope.queryDocumentModeVmdAccessoriesQParams = function () {
    var searchColumns = [];
    if ($scope.search_documentMode) {
        searchColumns.push({
            propertyName: 'displayValueCn',
            columnName: 'DISPLAY_VALUE_CN',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_documentMode || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_documentMode) {
        searchColumns.push({
            propertyName: 'codeValue',
            columnName: 'CODE_VALUE',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_documentMode || "",
            operation: 'LIKEIC'
        });
    }

    searchColumns.push({
        propertyName: 'codeType',
        columnName: 'CODE_TYPE',
        dataType: 'S',
        value: "DOCUMENT_MODE",
        operation: 'LIKEIC'
    });
    var sortColumns = [];


    sortColumns.push({
        propertyName: 'codeValue',
        columnName: 'CODE_VALUE',
        sortDirection: 'asc',
        sortOrder: '1'
    });


    return {
        "searchColumns": searchColumns,
        "sortColumns": sortColumns,
        "queryResultType": "page",
        "sum": false
    };
};
$scope.queryUserNameCnVmdAccessoriesQParams = function () {
    var searchColumns = [];
    if ($scope.search_userNameCn) {
        searchColumns.push({
            propertyName: 'userName',
            columnName: 'USER_NAME',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_userNameCn || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_userNameCn) {
        searchColumns.push({
            propertyName: 'userNameCn',
            columnName: 'USER_NAME_CN',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_userNameCn || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_userNameCn) {
        searchColumns.push({
            propertyName: 'userNameEn',
            columnName: 'USER_NAME_EN',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_userNameCn || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_userNameCn) {
        searchColumns.push({
            propertyName: 'officeName',
            columnName: 'OFFICE_NAME',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_userNameCn || "",
            operation: 'LIKEIC'
        });
    }
    var sortColumns = [];

    sortColumns.push({
        propertyName: 'userNameCn',
        columnName: 'USER_NAME_CN',
        sortDirection: 'asc',
        sortOrder: '0'
    });


    return {
        "searchColumns": searchColumns,
        "sortColumns": sortColumns,
        "queryResultType": "page",
        "sum": false
    };
};
$scope.querySettleOfficeNameVmdAccessoriesQParams = function (associate) {
    var searchColumns = [];
    if ($scope.settleOfficeNameVmdAccessoriesQSelectedRow) {
        var multiAssociateParamsArr = $scope.search_settleOfficeName.split(";");
        if (multiAssociateParamsArr.length != $scope.settleOfficeNameVmdAccessoriesQSelectedRow.length)
            $scope.search_settleOfficeName = multiAssociateParamsArr[multiAssociateParamsArr.length - 1];
        else
            $scope.search_settleOfficeName = "";
    }
    if ($scope.search_settleOfficeName) {
        searchColumns.push({
            propertyName: 'officeCode',
            columnName: 'OFFICE_CODE',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_settleOfficeName || "",
            operation: 'IN'
        });
    }
    if ($scope.$sessionAttrs && $scope.$sessionAttrs.loginUser && $scope.$sessionAttrs.loginUser.settleAllOffice) {
        searchColumns.push({
            propertyName: 'officeCode',
            columnName: 'OFFICE_CODE',
            dataType: 'S',
            listValue: $scope.$sessionAttrs.loginUser.settleAllOffice,
            operation: 'IN'
        });
    }
    if ($scope.search_settleOfficeName) {
        searchColumns.push({
            propertyName: 'officeCode',
            columnName: 'OFFICE_CODE',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_settleOfficeName || "",
            operation: 'LIKEIC'
        });
    }
    if ($scope.search_settleOfficeName) {
        searchColumns.push({
            propertyName: 'officeName',
            columnName: 'OFFICE_NAME',
            dataType: 'S',
            junction: 'or',
            value: $scope.search_settleOfficeName || "",
            operation: 'LIKEIC'
        });
    }

    searchColumns.push({
        propertyName: 'isSettlementObj',
        columnName: 'IS_SETTLEMENT_OBJ',
        dataType: 'S',
        value: "Y",
        operation: 'EQ'
    });
    var sortColumns = [];
    return {
        "searchColumns": searchColumns,
        "sortColumns": sortColumns,
        "queryResultType": "page",
        "sum": false
    };
};