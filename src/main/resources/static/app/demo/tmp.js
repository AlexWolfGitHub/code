define([
    'angular',
    'layer',
    'hotkeys',
    'framework/datasource/DataSourceModule',
    'framework/dict/GillionDictModule',
    'framework/date/DateModule',
    'framework/time/TimeModule',
    'framework/associate/GillionAssociateModule',
    'framework/dropdown/GillionDropdownModule',
    'framework/dropdownbtn/GillionDropDownBtnModule',
    'framework/dataGrid/DataGridModule',
    'framework/pagination/GillionPaginationModule',
    'framework/tab/GillionTabModule',
    'framework/importexcel/GillionImportExcelModule',
    'framework/dynamic/dynamicForm',
    'service/RuleService',
    'fms/common/DynamicRequireModule',
    'framework/msg/GillionMsgModule',
    'framework/clickbox/GillionClickBoxModule',
    'framework/grid/fixgrid'
], function (angular, layer, hotkeys) {
    return angular.module('mfOrderAdd', ['DataSourceModule','GillionDictModule','DateModule','TimeModule','GillionAssociateModule','GillionDropdownModule','DataGridModule','GillionPaginationModule','GillionTabModule','GillionImportExcelModule','dynamicForm','RuleService','DynamicRequireModule','GillionMsgModule','GillionClickBoxModule','GillionDropDownBtnModule'])
        .controller('mfOrderController', function ($scope,$rootScope,$compile,$q,$filter,$dataSource,$dataSourceManager,$http,$timeout,Params,Arrays,GillionMsgService,RuleService,GillionMsg,GillionTabService,DynamicRequires,AssociatePromiseService) {
            //tabLoadSupportJsLib.generatorPageTabDataUrl
            //tabBuildType: L haveReference ： X fileNamePreFix: MfOrderExtendTabsRefF01322 firstLayoutBoName : MfOrderExtend
            //realElementName: F01322
            //fileNamePreFix: MfOrderExtendTabsRefF01322 webPath: fms/mf--fms/mf
            //pageFileName: mfOrderExtendTabsRefF01322Add.html pageLayoutId:418E0DD4AF6D4523E050007F01002713
            $scope.f0131ApiF01322Url = "/html/fms/mf/mfOrderExtendTabsRefF01322Add.html?mfOrderId="+(Params.mfOrderId || "");
            //tabBuildType: L haveReference ： X fileNamePreFix: MfBookingCargoTabsRefF01323 firstLayoutBoName : MfBookingCargo
            //realElementName: F01323
            //fileNamePreFix: MfBookingCargoTabsRefF01323 webPath: fms/mf--fms/mf
            //pageFileName: mfBookingCargoTabsRefF01323Add.html pageLayoutId:418E0DD4AF984523E050007F01002713
            $scope.f0131ApiF01323Url = "/html/fms/mf/mfBookingCargoTabsRefF01323Add.html?mfOrderId="+(Params.mfOrderId || "");
            //tabBuildType: L haveReference ： X fileNamePreFix: BkContainerTabsRefF01324 firstLayoutBoName : BkContainer
            //realElementName: F01324
            //fileNamePreFix: BkContainerTabsRefF01324 webPath: fms/mf--fms/mf
            //pageFileName: bkContainerTabsRefF01324Add.html pageLayoutId:418E0DD4AFB04523E050007F01002713
            $scope.f0131ApiF01324Url = "/html/fms/mf/bkContainerTabsRefF01324Add.html?mfOrderId="+(Params.mfOrderId || "");
            //tabBuildType: L haveReference ： X fileNamePreFix: ArBcFreightTabsRefF01325 firstLayoutBoName : ArBcFreight
            //realElementName: F01325
            //fileNamePreFix: ArBcFreightTabsRefF01325 webPath: fms/bc--fms/mf
            //pageFileName: arBcFreightTabsRefF01325Add.html pageLayoutId:418E0DD4AF644523E050007F01002713
            $scope.f0131ApiF01325Url = "/html/fms/bc/arBcFreightTabsRefF01325Add.html?mfOrderId="+(Params.mfOrderId || "");
            // "
            $scope.f0131ApiF01326Url = "/html/fms/md/mdAttachAccessoriesManage.html?modelType=MF&orderId="+(Params.mfOrderId || "");

            //tabBuildType: L haveReference ： X fileNamePreFix: TmOrderToMfOrderTabsRefF01328 firstLayoutBoName : TmOrderToMfOrder
            //realElementName: F01328
            //fileNamePreFix: TmOrderToMfOrderTabsRefF01328 webPath: fms/tm--fms/mf
            //pageFileName: tmOrderToMfOrderTabsRefF01328Add.html pageLayoutId:418E0DD4AFCB4523E050007F01002713
            $scope.f0131ApiF01328Url = "/html/fms/tm/tmOrderToMfOrderTabsRefF01328Add.html?mfOrderId="+(Params.mfOrderId || "");
            //tabBuildType: L haveReference ： X fileNamePreFix: CiOrderTabsRefF013210 firstLayoutBoName : CiOrder
            //realElementName: F013210
            //fileNamePreFix: CiOrderTabsRefF013210 webPath: fms/ci--fms/mf
            //pageFileName: ciOrderTabsRefF013210Add.html pageLayoutId:418E0DD4AFFB4523E050007F01002713
            $scope.f0131ApiF013210Url = "/html/fms/ci/ciOrderTabsRefF013210Add.html?mfOrderId="+(Params.mfOrderId || "");
            //tabBuildType: L haveReference ： X fileNamePreFix: CdOrderTabsRefF013211 firstLayoutBoName : CdOrder
            //realElementName: F013211
            //fileNamePreFix: CdOrderTabsRefF013211 webPath: fms/cd--fms/mf
            //pageFileName: cdOrderTabsRefF013211Add.html pageLayoutId:418E0DD4AF964523E050007F01002713
            $scope.f0131ApiF013211Url = "/html/fms/cd/cdOrderTabsRefF013211Add.html?mfOrderId="+(Params.mfOrderId || "");
            //tabBuildType: L haveReference ： X fileNamePreFix: ImOrderTabsRefF013212 firstLayoutBoName : ImOrder
            //realElementName: F013212
            //fileNamePreFix: ImOrderTabsRefF013212 webPath: fms/im--fms/mf
            //pageFileName: imOrderTabsRefF013212Add.html pageLayoutId:418E0DD4AFA84523E050007F01002713
            $scope.f0131ApiF013212Url = "/html/fms/im/imOrderTabsRefF013212Add.html?mfOrderId="+(Params.mfOrderId || "");
            // "
            $scope.f0131ApiF013213Url = "/html/fms/mf/msgOrderStatusEdit.html?mfOrderId="+(Params.mfOrderId || "")  + "&businessType=" + (Params.businessType || "");

// isNewConfig:Y
            //快捷键设置
            $(document).ready(domo);

            function domo() {

                $.hotkeys.add('ALT+C',
                    function(){
                        $scope.$apply(function(){
                            $scope.copyMFE();
                        })
                    });
                $.hotkeys.add('ALT+S',
                    function(){
                        $scope.$apply(function(){
                            $scope.saveOrUpdateCustom();
                        })
                    });
                $.hotkeys.add('ALT+P',
                    function(){
                        $scope.$apply(function(){
                            $scope.print();
                        })
                    });
            }
            // 页面操作变化跟踪
            $scope._pageState = {
                _dataState : $config.dataState.NORMAL,
                _operateType : ""
            };

            $scope._pageState.isDataModified = function() {
                if (!$config.pageStateTip) {
                    return false;
                }
                if ($scope._pageState._dataState == $config.dataState.MODIFY) {
                    return true;
                }

                $scope.bindTabProp('f0131ApiF01322Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01322Url) || {});
                if($scope.f0131ApiF01322Scope &&$scope.f0131ApiF01322Scope._pageState && $scope.f0131ApiF01322Scope._pageState.isDataModified
                    &&$scope.f0131ApiF01322Scope._pageState.isDataModified()){
                    return true ;
                }
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if($scope.f0131ApiF01323Scope &&$scope.f0131ApiF01323Scope._pageState && $scope.f0131ApiF01323Scope._pageState.isDataModified
                    &&$scope.f0131ApiF01323Scope._pageState.isDataModified()){
                    return true ;
                }
                $scope.bindTabProp('f0131ApiF01324Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01324Url) || {});
                if($scope.f0131ApiF01324Scope &&$scope.f0131ApiF01324Scope._pageState && $scope.f0131ApiF01324Scope._pageState.isDataModified
                    &&$scope.f0131ApiF01324Scope._pageState.isDataModified()){
                    return true ;
                }
                $scope.bindTabProp('f0131ApiF01325Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01325Url) || {});
                if($scope.f0131ApiF01325Scope &&$scope.f0131ApiF01325Scope._pageState && $scope.f0131ApiF01325Scope._pageState.isDataModified
                    &&$scope.f0131ApiF01325Scope._pageState.isDataModified()){
                    return true ;
                }
                $scope.bindTabProp('f0131ApiF01326Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01326Url) || {});
                if($scope.f0131ApiF01326Scope &&$scope.f0131ApiF01326Scope._pageState && $scope.f0131ApiF01326Scope._pageState.isDataModified
                    &&$scope.f0131ApiF01326Scope._pageState.isDataModified()){
                    return true ;
                }

                $scope.bindTabProp('f0131ApiF01328Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01328Url) || {});
                if($scope.f0131ApiF01328Scope &&$scope.f0131ApiF01328Scope._pageState && $scope.f0131ApiF01328Scope._pageState.isDataModified
                    &&$scope.f0131ApiF01328Scope._pageState.isDataModified()){
                    return true ;
                }
                return false;

            };
            $scope._pageState.resetDataState = function() {
                $timeout(function() {
                    $scope._pageState._dataState = $config.dataState.NORMAL;
                    $scope.bindTabProp('f0131ApiF01322Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01322Url) || {});
                    if($scope.f0131ApiF01322Scope &&$scope.f0131ApiF01322Scope._pageState ){
                        $scope.f0131ApiF01322Scope._pageState.resetDataState();
                    }
                    $scope.bindTabProp('f0131ApiF01324Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01324Url) || {});
                    if($scope.f0131ApiF01324Scope &&$scope.f0131ApiF01324Scope._pageState){
                        $scope.f0131ApiF01324Scope._pageState.resetDataState();
                    }
                    $scope.bindTabProp('f0131ApiF01325Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01325Url) || {});
                    if($scope.f0131ApiF01325Scope &&$scope.f0131ApiF01325Scope._pageState){
                        $scope.f0131ApiF01325Scope._pageState.resetDataState();
                    }
                    $scope.bindTabProp('f0131ApiF01328Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01328Url) || {});
                    if($scope.f0131ApiF01328Scope &&$scope.f0131ApiF01328Scope._pageState){
                        $scope.f0131ApiF01328Scope._pageState.resetDataState();
                    }
                    $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                    if($scope.f0131ApiF01323Scope &&$scope.f0131ApiF01323Scope._pageState){
                        $scope.f0131ApiF01323Scope._pageState.resetDataState();
                    }
                    if($scope.mfOrder.rowStatus == 2  || $scope.mfOrder.rowStatus == 16){
                        $scope.mfOrder.rowStatus = 2;
                    }else{
                        $scope.mfOrder.rowStatus = 4;
                    }
                }, $config.pageStateResetTimeout);
            };

            $scope._pageState.setDataStateModify = function() {
                $scope._pageState._dataState = $config.dataState.MODIFY;
            };

            $scope.mfOrder = {
                rowStatus : 4,
                mfOrderId : Params.mfOrderId,
                packageTypeName:'PACKAGES',
                packageDescrtption:'PACKAGES',
                grossWeightUnit:'001',
                netWeightUnit:'001',
                chargingWeightUnit:'001',
                cubeUnit:'002',
                temperatureUnit:'°C',
                isBooking:'N',
                isTransshipment:'N',
                orderStatus:'NW',
                transportTerm:'CYCY',
                issueMode:'O',
                loadKind:'FCL',
                isDutyFree:'Y',
                isHbl:'N',
                isTruck:'N',
                isInbuilt:'N',
                isFumigation:'N',
                isWarehouse:'N',
                isInspection:'N',
                isCustomsClearance:'N',
                isInsurance:'N',
                isExistHbl:'N',
                bookingType:'BK',
                systemType:'MF',
                documentLockStatus:'UL',
                settleOffice:$scope.$sessionAttrs.loginUser.settleOffice,
                isBulkyCargo:'N',
                isReefer:'N',
                isHazard:'N',
                isDetainCargo:'N',
                isReleaseCtn:'N',
                isShutOffLoad:'N',
                isOperableBill:'N',
                packageTypeCode:'PKS',
                isPacking:'N',
                isEir:'N',
                isCleanClearance:'N',
                isClearance:'N',
                customsClearanceMode:'CS'
            };

            $scope.mfOrderExtend = {
                mfOrderId : Params.mfOrderId,
            };
            $scope.mfOperationRequire = {
                mfOrderId : Params.mfOrderId,
            };
            $scope.$watch("mfOrder", function(newVal, oldVal) {
                if (newVal && newVal.rowStatus && (newVal.rowStatus == 2 || newVal.rowStatus == 4)) {
                    _.mapObject(newVal,function(val ,key){
                        var propertyCol = [];
                        propertyCol.push("shipSaleName");
                        propertyCol.push("canvassionDepartmentCode");
                        propertyCol.push("documentLockStatus");
                        propertyCol.push("ediRemarks");
                        propertyCol.push("directOwnerName");
                        propertyCol.push("portOfDisTerminalCode");
                        propertyCol.push("secondCarrierName");
                        propertyCol.push("temperatureUnit");
                        propertyCol.push("speSettleIdeName");
                        propertyCol.push("settleCustName");
                        propertyCol.push("speSettleIdeCode");
                        propertyCol.push("settleCustCode");
                        propertyCol.push("flashPoint");
                        propertyCol.push("portOfTransshipment");
                        propertyCol.push("portOfTransshipmentCode");
                        propertyCol.push("isDeclare");
                        propertyCol.push("dispatcherCode");
                        propertyCol.push("bookingAgencyCode");
                        propertyCol.push("cargoDescriptionEn");
                        propertyCol.push("creditRating");
                        propertyCol.push("orderStatus");
                        propertyCol.push("largeShippingAgencyCode");
                        propertyCol.push("transportTerm");
                        propertyCol.push("cargoDescriptionCn");
                        propertyCol.push("loadKind");
                        propertyCol.push("issueMode");
                        propertyCol.push("fullBookingNo");
                        propertyCol.push("inspectionerCode");
                        propertyCol.push("eta");
                        propertyCol.push("portAreaName");
                        propertyCol.push("paymentMode");
                        propertyCol.push("urgentContract");
                        propertyCol.push("goOrderId");
                        propertyCol.push("mblNo");
                        propertyCol.push("preSecondVoyage");
                        propertyCol.push("preSecondVesselEtd");
                        propertyCol.push("porDescription");
                        propertyCol.push("podDeliveryDescription");
                        propertyCol.push("portOfLoadingTerminalCode");
                        propertyCol.push("isBulkyCargo");
                        propertyCol.push("realEtd");
                        propertyCol.push("isClearance");
                        propertyCol.push("isCleanClearance");
                        propertyCol.push("billRemarks");
                        propertyCol.push("customerBusinessNo");
                        propertyCol.push("realVesselName");
                        propertyCol.push("feeRemarks");
                        propertyCol.push("realVesselCode");
                        propertyCol.push("shippingAgencyCode");
                        propertyCol.push("emergencyMedicalAid");
                        propertyCol.push("orderDate");
                        propertyCol.push("isOperableBill");
                        propertyCol.push("emsNo");
                        propertyCol.push("line");
                        propertyCol.push("contractNo");
                        propertyCol.push("isCfmBill");
                        propertyCol.push("vesselAttribute");
                        propertyCol.push("bookingNo");
                        propertyCol.push("countryCode");
                        propertyCol.push("isReefer");
                        propertyCol.push("hsCode");
                        propertyCol.push("preSecondVesselName");
                        propertyCol.push("warehouseCode");
                        propertyCol.push("portOfDestinationCode");
                        propertyCol.push("portOfDeliveryCode");
                        propertyCol.push("loadTerms");
                        propertyCol.push("paymentPlaceCode");
                        propertyCol.push("placeOfIssueCode");
                        propertyCol.push("firstPortAreaName");
                        propertyCol.push("width");
                        propertyCol.push("loadRequired");
                        propertyCol.push("bookingRemarks");
                        propertyCol.push("orderRemarks");
                        propertyCol.push("bookingProtocolNo");
                        propertyCol.push("salesCode");
                        propertyCol.push("isOceanPollution");
                        propertyCol.push("chargingWeight");
                        propertyCol.push("isPacking");
                        propertyCol.push("chargingWeightUnit");
                        propertyCol.push("lineCode");
                        propertyCol.push("vesselCode");
                        propertyCol.push("opCode");
                        propertyCol.push("noOfPackage");
                        propertyCol.push("isExistHbl");
                        propertyCol.push("bookingAgencyName");
                        propertyCol.push("subBusinessCode");
                        propertyCol.push("customsClearanceZoneCode");
                        propertyCol.push("temperatureFrom");
                        propertyCol.push("portOfDischarge");
                        propertyCol.push("portOfDischargeTerminal");
                        propertyCol.push("customsClearanceMode");
                        propertyCol.push("customsClearanceZone");
                        propertyCol.push("polEtd");
                        propertyCol.push("terminalPotCode");
                        propertyCol.push("senderName");
                        propertyCol.push("officeName");
                        propertyCol.push("receiveTime");
                        propertyCol.push("vesselName");
                        propertyCol.push("customsPort");
                        propertyCol.push("canvassionMode");
                        propertyCol.push("canvassionDepartment");
                        propertyCol.push("salesName");
                        propertyCol.push("marks");
                        propertyCol.push("csCode");
                        propertyCol.push("opName");
                        propertyCol.push("settleMode");
                        propertyCol.push("potDescription");
                        propertyCol.push("preSecondVesselEta");
                        propertyCol.push("podDestPort5code");
                        propertyCol.push("billType");
                        propertyCol.push("exchangeAgencyCode");
                        propertyCol.push("customsClearanceSceneName");
                        propertyCol.push("customsClearanceSceneCode");
                        propertyCol.push("subBusinessType");
                        propertyCol.push("portOfDestTerminalCode");
                        propertyCol.push("hblNo");
                        propertyCol.push("exchangeAgencyName");
                        propertyCol.push("sendTime");
                        propertyCol.push("vesselNameCn");
                        propertyCol.push("netWeight");
                        propertyCol.push("cube");
                        propertyCol.push("urgentContractTel");
                        propertyCol.push("urgentContractEmail");
                        propertyCol.push("setTemperature");
                        propertyCol.push("portOfDestination");
                        propertyCol.push("portOfDestinationTerminal");
                        propertyCol.push("polPort5code");
                        propertyCol.push("potPort5code");
                        propertyCol.push("podPort5code");
                        propertyCol.push("secondCarrierCode");
                        propertyCol.push("customsDeclarationCode");
                        propertyCol.push("portOfTransTerminalCode");
                        propertyCol.push("ctnNum");
                        propertyCol.push("inspectionSceneCode");
                        propertyCol.push("freightTerms");
                        propertyCol.push("docCode");
                        propertyCol.push("dispatcherName");
                        propertyCol.push("dangerLabel");
                        propertyCol.push("settleOfficeName");
                        propertyCol.push("airVents");
                        propertyCol.push("overseaAgencyCode");
                        propertyCol.push("combinedForwardCode");
                        propertyCol.push("cargoValue");
                        propertyCol.push("currency");
                        propertyCol.push("projectId");
                        propertyCol.push("placeOfReceipt");
                        propertyCol.push("cargoNameEn");
                        propertyCol.push("placeOfReceiptCode");
                        propertyCol.push("portOfLoading");
                        propertyCol.push("portOfLoadingCode");
                        propertyCol.push("voyage");
                        propertyCol.push("etd");
                        propertyCol.push("transportName");
                        propertyCol.push("shippingAgencyName");
                        propertyCol.push("customsPortCode");
                        propertyCol.push("isShutOffLoad");
                        propertyCol.push("memonicNo");
                        propertyCol.push("isSupervision");
                        propertyCol.push("isEir");
                        propertyCol.push("csDepartmentCode");
                        propertyCol.push("csDepartmentName");
                        propertyCol.push("realVoyage");
                        propertyCol.push("placeOfIssue");
                        propertyCol.push("cubeUnit");
                        propertyCol.push("bookingType");
                        propertyCol.push("packageTypeCode");
                        propertyCol.push("businessCompletionDate");
                        propertyCol.push("combinedForward");
                        propertyCol.push("packageTypeName");
                        propertyCol.push("hazardClass");
                        propertyCol.push("shippingAgencyContacts");
                        propertyCol.push("shippingAgencyContactTel");
                        propertyCol.push("firstPortAreaCode");
                        propertyCol.push("portAreaCode");
                        propertyCol.push("masterMblNo");
                        propertyCol.push("portOfDischargeCode");
                        propertyCol.push("settleOffice");
                        propertyCol.push("ctnCompanyName");
                        propertyCol.push("ctnCompanyCode");
                        propertyCol.push("paymentPlace");
                        propertyCol.push("warehouseName");
                        propertyCol.push("ctnFlow");
                        propertyCol.push("isDutyFree");
                        propertyCol.push("portOfLoadingTerminal");
                        propertyCol.push("length");
                        propertyCol.push("height");
                        propertyCol.push("portOfDelivery");
                        propertyCol.push("dangerPage");
                        propertyCol.push("inspectionSceneName");
                        propertyCol.push("podDescription");
                        propertyCol.push("isHazard");
                        propertyCol.push("isDetainCargo");
                        propertyCol.push("isReleaseCtn");
                        propertyCol.push("largeShippingAgencyName");
                        propertyCol.push("projectName");
                        propertyCol.push("freeOfDetention");
                        propertyCol.push("freeStorage");
                        propertyCol.push("countryName");
                        propertyCol.push("temperatureTo");
                        propertyCol.push("grossWeight");
                        propertyCol.push("grossWeightUnit");
                        propertyCol.push("netWeightUnit");
                        propertyCol.push("isApproval");
                        propertyCol.push("approvalRemark");
                        propertyCol.push("inspectionerName");
                        propertyCol.push("carrierCode");
                        propertyCol.push("sourceType");
                        propertyCol.push("businessType");
                        propertyCol.push("systemType");
                        propertyCol.push("isNvocc");
                        propertyCol.push("docName");
                        propertyCol.push("carrierName");
                        propertyCol.push("hazardSubClass");
                        propertyCol.push("cartridgeNo");
                        propertyCol.push("packageDescrtption");
                        propertyCol.push("projectCode");
                        propertyCol.push("receiverName");
                        propertyCol.push("csName");
                        propertyCol.push("customsDeclarationName");
                        propertyCol.push("portOfTransTerminal");
                        propertyCol.push("polDescription");
                        propertyCol.push("imoNo");
                        propertyCol.push("podDestDescription");
                        propertyCol.push("requireSecondEtd");
                        propertyCol.push("overseaAgencyName");
                        propertyCol.push("unNo");
                        propertyCol.push("hazardPackage");
                        propertyCol.push("mfOrderId");
                        checked = Arrays.exists(propertyCol, key);
                        if(checked){
                            var newData = val;
                            var oldData = oldVal[key];
                            if (!($scope._compareNewAndOldObjIsEqual(newData,oldData,$scope)))
                            {
                                if(newVal.rowStatus == 2){
                                    newVal.rowStatus = 16;
                                }
                                $scope._pageState.setDataStateModify();

                                return false;
                            }
                        }
                    });
                }
            }, true);
            $scope.$watch("goOrder", function(newVal, oldVal) {
                if (newVal && newVal.rowStatus && (newVal.rowStatus == 2 || newVal.rowStatus == 4)) {
                    if(oldVal && oldVal.goOrderId && newVal.goOrderId && !(_.isNull(newVal.goOrderId) || _.isUndefined(newVal.goOrderId) || newVal.goOrderId === '')
                        && oldVal.goOrderId == newVal.goOrderId) {
                        _.mapObject(newVal,function(val ,key){
                            var propertyCol = [];
                            propertyCol.push("isInsurance");
                            propertyCol.push("systemType");
                            propertyCol.push("isInbuilt");
                            propertyCol.push("isFumigation");
                            propertyCol.push("customerBusinessNo");
                            propertyCol.push("consignorCode");
                            propertyCol.push("consignorName");
                            propertyCol.push("businessUnitsName");
                            propertyCol.push("businessUnitsCode");
                            propertyCol.push("salesName");
                            propertyCol.push("salesCode");
                            propertyCol.push("canvassionDepartment");
                            propertyCol.push("isBooking");
                            propertyCol.push("isHbl");
                            propertyCol.push("isTruck");
                            propertyCol.push("isInspection");
                            propertyCol.push("isCustomsClearance");
                            propertyCol.push("jobNo");
                            propertyCol.push("isAllocate");
                            propertyCol.push("isExchange");
                            propertyCol.push("isLegalInspection");
                            propertyCol.push("isDestinationWarehouse");
                            propertyCol.push("isDestinationTruck");
                            propertyCol.push("isWarehouse");
                            propertyCol.push("projectId");
                            propertyCol.push("settleOffice");
                            propertyCol.push("goOrderId");
                            checked = Arrays.exists(propertyCol, key);
                            if(checked){
                                var newData = val;
                                var oldData = oldVal[key];
                                if (!($scope._compareNewAndOldObjIsEqual(newData,oldData,$scope)))
                                {
                                    if(newVal.rowStatus == 2){
                                        newVal.rowStatus = 16;
                                    }
                                    $scope._pageState.setDataStateModify();

                                    return false;
                                }
                            }
                        });
                    }
                }
            }, true);
            $scope.$watch("mfOrderExtend", function(newVal, oldVal) {
                if (newVal && newVal.rowStatus && (newVal.rowStatus == 2 || newVal.rowStatus == 4)) {
                    if(oldVal && oldVal.mfOrderExtendId && newVal.mfOrderExtendId && !(_.isNull(newVal.mfOrderExtendId) || _.isUndefined(newVal.mfOrderExtendId) || newVal.mfOrderExtendId === '')
                        && oldVal.mfOrderExtendId == newVal.mfOrderExtendId) {
                        _.mapObject(newVal,function(val ,key){
                            var propertyCol = [];
                            propertyCol.push("realNotifyPostcode");
                            propertyCol.push("realNotifyContactPerson");
                            propertyCol.push("realNotifyTel");
                            propertyCol.push("realNotifyFax");
                            propertyCol.push("realShipperMobilePhone");
                            propertyCol.push("realShipperEmail");
                            propertyCol.push("realNotifyMobilePhone");
                            propertyCol.push("realNotifyEmail");
                            propertyCol.push("destinationDeliveryPlace");
                            propertyCol.push("realShipperCountryCode");
                            propertyCol.push("realConsigneeCountryCode");
                            propertyCol.push("realNotifyCountryName2");
                            propertyCol.push("realNotifyProvinceName2");
                            propertyCol.push("realNotifyCityName2");
                            propertyCol.push("realNotifyPostcode2");
                            propertyCol.push("realNotifyContactPerson2");
                            propertyCol.push("realNotifyTel2");
                            propertyCol.push("realNotifyFax2");
                            propertyCol.push("realNotifyMobilePhone2");
                            propertyCol.push("consigneeCityName");
                            propertyCol.push("consigneePostcode");
                            propertyCol.push("consigneeContactPerson");
                            propertyCol.push("consigneeTel");
                            propertyCol.push("consigneeFax");
                            propertyCol.push("consigneeMobilePhone");
                            propertyCol.push("consigneeEmail");
                            propertyCol.push("notifyCountryName");
                            propertyCol.push("realNotifyEmail2");
                            propertyCol.push("shipperNameCn");
                            propertyCol.push("requestDeliveryDate");
                            propertyCol.push("destinationDeliveryDate");
                            propertyCol.push("realNotifyCountryCode");
                            propertyCol.push("realNotifyCountryCode2");
                            propertyCol.push("transportCompanyName");
                            propertyCol.push("transportCompanyCode");
                            propertyCol.push("shipperCountryName");
                            propertyCol.push("shipperProvinceName");
                            propertyCol.push("shipperCityName");
                            propertyCol.push("shipperPostcode");
                            propertyCol.push("shipperContactPerson");
                            propertyCol.push("shipperTel");
                            propertyCol.push("shipperFax");
                            propertyCol.push("shipperMobilePhone");
                            propertyCol.push("shipperEmail");
                            propertyCol.push("consigneeCountryName");
                            propertyCol.push("consigneeProvinceName");
                            propertyCol.push("notifyProvinceName");
                            propertyCol.push("notifyCityName");
                            propertyCol.push("notifyPostcode");
                            propertyCol.push("notifyContactPerson");
                            propertyCol.push("notifyTel");
                            propertyCol.push("notifyFax");
                            propertyCol.push("notifyMobilePhone");
                            propertyCol.push("notifyEmail");
                            propertyCol.push("secondNotifyCountryName");
                            propertyCol.push("secondNotifyProvinceName");
                            propertyCol.push("secondNotifyCityName");
                            propertyCol.push("secondNotifyPostcode");
                            propertyCol.push("secondNotifyContactPerson");
                            propertyCol.push("secondNotifyTel");
                            propertyCol.push("secondNotifyFax");
                            propertyCol.push("secondNotifyMobilePhone");
                            propertyCol.push("secondNotifyEmail");
                            propertyCol.push("shipperCountryCode");
                            propertyCol.push("consigneeCountryCode");
                            propertyCol.push("notifyCountryCode");
                            propertyCol.push("secondNotifyCountryCode");
                            propertyCol.push("destinationAgentNameCn");
                            propertyCol.push("destAgentCountryCode");
                            propertyCol.push("destAgentCountryName");
                            propertyCol.push("destAgentProvinceName");
                            propertyCol.push("destAgentCityName");
                            propertyCol.push("destAgentPostcode");
                            propertyCol.push("destAgentContactPerson");
                            propertyCol.push("destAgentTel");
                            propertyCol.push("destAgentFax");
                            propertyCol.push("destAgentMobilePhone");
                            propertyCol.push("destAgentEmail");
                            propertyCol.push("realSecondNotifyCode");
                            propertyCol.push("realSecondNotifyName");
                            propertyCol.push("realSecondNotifyAddress");
                            propertyCol.push("shipperName");
                            propertyCol.push("shipperAddress");
                            propertyCol.push("consigneeAddress");
                            propertyCol.push("consigneeCode");
                            propertyCol.push("consigneeName");
                            propertyCol.push("notifyAddress");
                            propertyCol.push("notifyName");
                            propertyCol.push("notifyCode");
                            propertyCol.push("secondNotifyAddress");
                            propertyCol.push("secondNotifyName");
                            propertyCol.push("secondNotifyCode");
                            propertyCol.push("realSecondNotifyNameCn");
                            propertyCol.push("realShipperCountryName");
                            propertyCol.push("realShipperProvinceName");
                            propertyCol.push("realShipperCityName");
                            propertyCol.push("realShipperPostcode");
                            propertyCol.push("realShipperContactPerson");
                            propertyCol.push("realShipperTel");
                            propertyCol.push("realShipperFax");
                            propertyCol.push("realConsigneeCountryName");
                            propertyCol.push("realConsigneeProvinceName");
                            propertyCol.push("realConsigneeCityName");
                            propertyCol.push("realConsigneePostcode");
                            propertyCol.push("realConsigneeContactPerson");
                            propertyCol.push("realConsigneeTel");
                            propertyCol.push("realConsigneeFax");
                            propertyCol.push("realConsigneeMobilePhone");
                            propertyCol.push("realConsigneeEmail");
                            propertyCol.push("realNotifyCountryName");
                            propertyCol.push("realNotifyProvinceName");
                            propertyCol.push("realNotifyCityName");
                            propertyCol.push("destinationAgentAddress");
                            propertyCol.push("destinationAgentCode");
                            propertyCol.push("destinationAgentName");
                            propertyCol.push("mfOrderId");
                            propertyCol.push("shipperCode");
                            propertyCol.push("realShipperCode");
                            propertyCol.push("realShipperName");
                            propertyCol.push("realShipperAddress");
                            propertyCol.push("realConsigneeCode");
                            propertyCol.push("realConsigneeName");
                            propertyCol.push("realConsigneeAddress");
                            propertyCol.push("realNotifyCode");
                            propertyCol.push("realNotifyName");
                            propertyCol.push("realNotifyAddress");
                            propertyCol.push("consigneeNameCn");
                            propertyCol.push("notifyNameCn");
                            propertyCol.push("secondNotifyNameCn");
                            propertyCol.push("realShipperNameCn");
                            propertyCol.push("realConsigneeNameCn");
                            propertyCol.push("realNotifyNameCn");
                            propertyCol.push("mfOrderExtendId");
                            checked = Arrays.exists(propertyCol, key);
                            if(checked){
                                var newData = val;
                                var oldData = oldVal[key];
                                if (!($scope._compareNewAndOldObjIsEqual(newData,oldData,$scope)))
                                {
                                    if(newVal.rowStatus == 2){
                                        newVal.rowStatus = 16;
                                    }
                                    $scope._pageState.setDataStateModify();

                                    return false;
                                }
                            }
                        });
                    }
                }
            }, true);
            $scope.$watch("mfOperationRequire.shipownerRequire",function(newVal, oldVal){
                if(newVal&&newVal!=oldVal){
                    if ($scope._pageState && $scope._pageState.setDataStateModify)
                        $scope._pageState.setDataStateModify();
                }
            })
            $scope.$watch("mfOperationRequire.customerRequire",function(newVal, oldVal){
                if(newVal&&newVal!=oldVal){
                    if ($scope._pageState && $scope._pageState.setDataStateModify)
                        $scope._pageState.setDataStateModify();
                }
            })
            $scope.$watch("mfOperationRequire", function(newVal, oldVal) {
                if (newVal && newVal.rowStatus && (newVal.rowStatus == 2 || newVal.rowStatus == 4)) {
                    if(oldVal && oldVal.mfOperationRequireId && newVal.mfOperationRequireId && !(_.isNull(newVal.mfOperationRequireId) || _.isUndefined(newVal.mfOperationRequireId) || newVal.mfOperationRequireId === '')
                        && oldVal.mfOperationRequireId == newVal.mfOperationRequireId) {
                        _.mapObject(newVal,function(val ,key){
                            var propertyCol = [];
                            propertyCol.push("mfOrderId");
                            propertyCol.push("shipownerRequire");
                            propertyCol.push("customerRequire");
                            propertyCol.push("mfOperationRequireId");
                            checked = Arrays.exists(propertyCol, key);
                            if(checked){
                                var newData = val;
                                var oldData = oldVal[key];
                                if (!($scope._compareNewAndOldObjIsEqual(newData,oldData,$scope)))
                                {
                                    if(newVal.rowStatus == 2){
                                        newVal.rowStatus = 16;
                                    }
                                    $scope._pageState.setDataStateModify();

                                    return false;
                                }
                            }
                        });
                    }
                }
            }, true);

            $scope.$watch("mfCtnRequest", function(newVal, oldVal) {
                if (newVal && newVal.rowStatus && (newVal.rowStatus == 2 || newVal.rowStatus == 4)) {
                    if(oldVal && oldVal.mfCtnRequestId && newVal.mfCtnRequestId && !(_.isNull(newVal.mfCtnRequestId) || _.isUndefined(newVal.mfCtnRequestId) || newVal.mfCtnRequestId === '')
                        && oldVal.mfCtnRequestId == newVal.mfCtnRequestId) {
                        _.mapObject(newVal,function(val ,key){
                            var propertyCol = [];
                            propertyCol.push("mfCtnRequestId");
                            propertyCol.push("containerSizeType");
                            propertyCol.push("quantityOfCtn");
                            propertyCol.push("fclLclEmpty");
                            propertyCol.push("isSoc");
                            propertyCol.push("memonicNo");
                            propertyCol.push("ctnCompanyName");
                            propertyCol.push("ctnCompanyCode");
                            checked = Arrays.exists(propertyCol, key);
                            if(checked){
                                var newData = val;
                                var oldData = oldVal[key];
                                if (!($scope._compareNewAndOldObjIsEqual(newData,oldData,$scope)))
                                {
                                    if(newVal.rowStatus == 2){
                                        newVal.rowStatus = 16;
                                    }
                                    if ($scope._pageState && $scope._pageState.setDataStateModify)
                                        $scope._pageState.setDataStateModify();
                                    return false;
                                }
                            }
                        });
                    }
                }else if (newVal && newVal.rowStatus && newVal.rowStatus == 16 ) {
                    if ($scope._pageState && $scope._pageState.setDataStateModify)
                        $scope._pageState.setDataStateModify();
                    return false;
                }
                console.log(newVal);
            }, true);
            $scope.$watch("mfMultiVessel", function(newVal, oldVal) {
                if (newVal && newVal.rowStatus && (newVal.rowStatus == 2 || newVal.rowStatus == 4)) {
                    if(oldVal && oldVal.mfMultiVesselId && newVal.mfMultiVesselId && !(_.isNull(newVal.mfMultiVesselId) || _.isUndefined(newVal.mfMultiVesselId) || newVal.mfMultiVesselId === '')
                        && oldVal.mfMultiVesselId == newVal.mfMultiVesselId) {
                        _.mapObject(newVal,function(val ,key){
                            var propertyCol = [];
                            propertyCol.push("mfMultiVesselId");
                            propertyCol.push("multiVesselInformation");
                            propertyCol.push("vesselName");
                            propertyCol.push("voyage");
                            propertyCol.push("etd");
                            checked = Arrays.exists(propertyCol, key);
                            if(checked){
                                var newData = val;
                                var oldData = oldVal[key];
                                if (!($scope._compareNewAndOldObjIsEqual(newData,oldData,$scope)))
                                {
                                    if(newVal.rowStatus == 2){
                                        newVal.rowStatus = 16;
                                    }
                                    if ($scope._pageState && $scope._pageState.setDataStateModify)
                                        $scope._pageState.setDataStateModify();
                                    return false;
                                }
                            }
                        });
                    }
                }else if (newVal && newVal.rowStatus && newVal.rowStatus == 16 ) {
                    if ($scope._pageState && $scope._pageState.setDataStateModify)
                        $scope._pageState.setDataStateModify();
                    return false;
                }
                console.log(newVal);
            }, true);

            /**
             * 根据主键取值
             */
            $scope.getMfOrder = function(mfOrderId){
                //haveTabLoadSupport : X
                //tabPageLayout.groupTitle 基本信息 -

                //tabPageLayout.groupTitle 船舶信息 -

                //tabPageLayout.groupTitle 多程信息 -

                //tabPageLayout.groupTitle 收发通 -

                //tabPageLayout.groupTitle 收发通 -

                //tabPageLayout.groupTitle 真实收发通 -

                //tabPageLayout.groupTitle 货物 -

                //tabPageLayout.groupTitle 集装箱 -

                //tabPageLayout.groupTitle 费用信息 -

                //tabPageLayout.groupTitle 附件单据 -

                //tabPageLayout.groupTitle 操作要求 -

                //tabPageLayout.groupTitle 拖车 -

                //tabPageLayout.groupTitle 仓储 -

                //tabPageLayout.groupTitle 报检 -

                //tabPageLayout.groupTitle 报关 -

                //tabPageLayout.groupTitle 保险 -

                //tabPageLayout.groupTitle 动态跟踪 -

                var param = {};
                param.mfOrderId = mfOrderId || "";
                param.subBusinessType = $scope.mfOrder_add_subBusinessType || "";
                param.isDutyFree = $scope.mfOrder_add_isDutyFree || "";
                param.subBusinessCode = $scope.mfOrder_add_subBusinessCode || "";
                param.businessType = $scope.mfOrder_add_businessType || "";
                param.cascade = false;
                var tip = layer.load(0, {shade: false});
                $http.get($config.ctx + '/mfOrder/getMfOrder',{params:param}).success(function(data){
                    layer.close(tip);
                    if (data.success != undefined && data.success == true) {
                        $scope.mfOrder = data.mfOrder;
                        //subBoName: TmOrderToMfOrder scopeVariable: $scope isTabPage: false
                        //subBoName: VbcFreightStatistics scopeVariable: $scope isTabPage: false
                        //subBoName: CiOrder scopeVariable: $scope.f0131ApiF013210Scope isTabPage: false
                        //subBoName: MfCtnRequest scopeVariable: $scope isTabPage: false
                        //subBoName: MfOrderExtend scopeVariable: $scope isTabPage: false
                        if (data.mfOrder.mfOrderExtends) {
                            $scope.mfOrderExtend = data.mfOrder.mfOrderExtends;
                        }
                        $scope.bindTabProp('f0131ApiF01322Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01322Url) || {});
                        if ($scope.f0131ApiF01322Scope && $scope.f0131ApiF01322Scope.mfOrder) {
                            $scope.f0131ApiF01322Scope.mfOrder = data.mfOrder;
                            if ($scope.f0131ApiF01322Scope.refreshMfOrderExtendDataSource) $scope.f0131ApiF01322Scope.refreshMfOrderExtendDataSource();
                        }
                        $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                        if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfOrder) {
                            $scope.f0131ApiF01323Scope.mfOrder = data.mfOrder;
                            if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource) $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                        }
                        $scope.bindTabProp('f0131ApiF01324Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01324Url) || {});
                        if ($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.mfOrder) {
                            $scope.f0131ApiF01324Scope.mfOrder = data.mfOrder;
                            if ($scope.f0131ApiF01324Scope.refreshBkContainerDataSource) $scope.f0131ApiF01324Scope.refreshBkContainerDataSource();
                        }
                        //subBoName: MfMultiVessel scopeVariable: $scope isTabPage: false
                        //subBoName: ArBcFreight scopeVariable: $scope isTabPage: false
                        //subBoName: ApBcFreight scopeVariable: $scope isTabPage: false
                        //subBoName: ImOrder scopeVariable: $scope.f0131ApiF013212Scope isTabPage: false
                        //subBoName: MfOperationRequire scopeVariable: $scope isTabPage: false
                        if(data.mfOrder.mfOperationRequires) {
                            $scope.mfOperationRequire = data.mfOrder.mfOperationRequires;
                        }
                        //subBoName: BkContainer scopeVariable: $scope isTabPage: false
                        //subBoName: CdOrder scopeVariable: $scope isTabPage: false
                        //subBoName: MfBookingCargo scopeVariable: $scope isTabPage: false

                        $scope.initAcceptParams && $scope.initAcceptParams();
                        if($scope._pageState) $scope._pageState.resetDataState();
                    }
                });
            };

            //<!--FORM_TOOLBAR-->
            //TODO LayoutElementType.FORM_TOOLBAR


            /**
             * 新增海运出口制作 form
             */
            $scope.create = function(){
                var url = "/html/fms/mf/addOrderExtrance.html";

                var openType = "2";
                if (url.indexOf("?")>=0){
                    url = url + "&openType=" + openType;
                } else {
                    url = url + "?openType=" + openType;
                }
                var isBooking = "N";
                url = url + "&isBooking="+isBooking;
                var isInsurance = "N";
                url = url + "&isInsurance="+isInsurance;
                var businessType = "MFE";
                url = url + "&businessType="+businessType;
                var isCustomsClearance = "N";
                url = url + "&isCustomsClearance="+isCustomsClearance;
                var isWarehouse = "N";
                url = url + "&isWarehouse="+isWarehouse;
                var isTruck = "N";
                url = url + "&isTruck="+isTruck;
                var isInspection = "N";
                url = url + "&isInspection="+isInspection;
                var options = {
                    title : '新增' ,
                    closable : true ,
                    modal : true ,
                    url : url ,
                    width:680,
                    height:600
                };
                var indexScope = top.angular.element("body").scope();
                indexScope.showUrl(options);
            };

            /**
             * 保存 海运出口制作
             */
            $scope.update = function(){
                //校验联想控件是否初始化完
                if(!$scope._associateInitValid($scope)){
                    return ;
                }
                //haveTabLoadSupport : X
                $scope.bindTabProp('f0131ApiF01322Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01322Url) || {});
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                $scope.bindTabProp('f0131ApiF01324Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01324Url) || {});
                $scope.bindTabProp('f0131ApiF01325Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01325Url) || {});
                $scope.bindTabProp('f0131ApiF01326Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01326Url) || {});
                $scope.bindTabProp('f0131ApiF01328Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01328Url) || {});
                $scope.bindTabProp('f0131ApiF013210Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF013210Url) || {});
                $scope.bindTabProp('f0131ApiF013211Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF013211Url) || {});
                $scope.bindTabProp('f0131ApiF013212Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF013212Url) || {});
                $scope.bindTabProp('f0131ApiF013213Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF013213Url) || {});
                //generatorSubBoGridClear isNewConfig:Y
                //子对象TmOrderToMfOrder
                if($scope.f0131ApiF01328Scope && $scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid) {
                    if($scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid && $scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid.formController && $scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid.formController){
                        if($scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid,$scope.f0131ApiF01328Scope.tmOrderToMfOrders);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid,$scope.f0131ApiF01328Scope.tmOrderToMfOrders);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象TmOrderCtnRequestCopy
                if($scope.f0131ApiF01328Scope && $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid) {
                    if( $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid){
                        if($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.formController){
                            var $validator = $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.formController.$validator;
                            if($validator){
                                $validator.disable();
                                $validator.reset();
                            }

                            //$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.finishEdit();
                            $scope._finishEditGridWrap($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid,$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopys);

                            if($validator){
                                $validator.enable();
                            }
                        }else{
                            $scope._finishEditGridWrap($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid,$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopys);
                        }

                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象VbcFreightStatistics
                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid) {
                    if($scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid && $scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid.formController && $scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid.formController){
                        if($scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid,$scope.f0131ApiF01325Scope.vbcFreightStatisticss);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid,$scope.f0131ApiF01325Scope.vbcFreightStatisticss);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CiOrder
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderGrid) {
                    if($scope.f0131ApiF013210Scope.ciOrderGrid && $scope.f0131ApiF013210Scope.ciOrderGrid.formController && $scope.f0131ApiF013210Scope.ciOrderGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF013210Scope.ciOrderGrid.formController){
                        if($scope.f0131ApiF013210Scope.ciOrderGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderGrid,$scope.f0131ApiF013210Scope.ciOrders);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderGrid,$scope.f0131ApiF013210Scope.ciOrders);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CiOrderDocAttach
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid) {
                    if( $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid){
                        if($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController){
                            var $validator = $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController.$validator;
                            if($validator){
                                $validator.disable();
                                $validator.reset();
                            }

                            //$scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.finishEdit();
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid,$scope.f0131ApiF013210Scope.ciOrderDocAttachs);

                            if($validator){
                                $validator.enable();
                            }
                        }else{
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid,$scope.f0131ApiF013210Scope.ciOrderDocAttachs);
                        }

                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CiOrderCargo
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderCargoGrid) {
                    if( $scope.f0131ApiF013210Scope.ciOrderCargoGrid){
                        if($scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController){
                            var $validator = $scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController.$validator;
                            if($validator){
                                $validator.disable();
                                $validator.reset();
                            }

                            //$scope.f0131ApiF013210Scope.ciOrderCargoGrid.finishEdit();
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderCargoGrid,$scope.f0131ApiF013210Scope.ciOrderCargos);

                            if($validator){
                                $validator.enable();
                            }
                        }else{
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderCargoGrid,$scope.f0131ApiF013210Scope.ciOrderCargos);
                        }

                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CiOrderDocument
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderDocumentGrid) {
                    if( $scope.f0131ApiF013210Scope.ciOrderDocumentGrid){
                        if($scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController){
                            var $validator = $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController.$validator;
                            if($validator){
                                $validator.disable();
                                $validator.reset();
                            }

                            //$scope.f0131ApiF013210Scope.ciOrderDocumentGrid.finishEdit();
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocumentGrid,$scope.f0131ApiF013210Scope.ciOrderDocuments);

                            if($validator){
                                $validator.enable();
                            }
                        }else{
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocumentGrid,$scope.f0131ApiF013210Scope.ciOrderDocuments);
                        }

                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象MfCtnRequest
                if($scope && $scope.mfCtnRequestGrid) {
                    if($scope.mfCtnRequestGrid && $scope.mfCtnRequestGrid.formController && $scope.mfCtnRequestGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.mfCtnRequestGrid.formController){
                        if($scope.mfCtnRequestGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.mfCtnRequestGrid,$scope.mfCtnRequests);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.mfCtnRequestGrid,$scope.mfCtnRequests);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //界面布局不存在MfOrderExtend表格。。
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象MfMultiVessel
                if($scope && $scope.mfMultiVesselGrid) {
                    if($scope.mfMultiVesselGrid && $scope.mfMultiVesselGrid.formController && $scope.mfMultiVesselGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.mfMultiVesselGrid.formController){
                        if($scope.mfMultiVesselGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.mfMultiVesselGrid,$scope.mfMultiVessels);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.mfMultiVesselGrid,$scope.mfMultiVessels);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象ArBcFreight
                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.arBcFreightGrid) {
                    if($scope.f0131ApiF01325Scope.arBcFreightGrid && $scope.f0131ApiF01325Scope.arBcFreightGrid.formController && $scope.f0131ApiF01325Scope.arBcFreightGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF01325Scope.arBcFreightGrid.formController){
                        if($scope.f0131ApiF01325Scope.arBcFreightGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.arBcFreightGrid,$scope.f0131ApiF01325Scope.arBcFreights);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.arBcFreightGrid,$scope.f0131ApiF01325Scope.arBcFreights);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象ApBcFreight
                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.apBcFreightGrid) {
                    if($scope.f0131ApiF01325Scope.apBcFreightGrid && $scope.f0131ApiF01325Scope.apBcFreightGrid.formController && $scope.f0131ApiF01325Scope.apBcFreightGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF01325Scope.apBcFreightGrid.formController){
                        if($scope.f0131ApiF01325Scope.apBcFreightGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.apBcFreightGrid,$scope.f0131ApiF01325Scope.apBcFreights);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.apBcFreightGrid,$scope.f0131ApiF01325Scope.apBcFreights);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象ImOrder
                if($scope.f0131ApiF013212Scope && $scope.f0131ApiF013212Scope.imOrderGrid) {
                    if($scope.f0131ApiF013212Scope.imOrderGrid && $scope.f0131ApiF013212Scope.imOrderGrid.formController && $scope.f0131ApiF013212Scope.imOrderGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF013212Scope.imOrderGrid.formController){
                        if($scope.f0131ApiF013212Scope.imOrderGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF013212Scope.imOrderGrid,$scope.f0131ApiF013212Scope.imOrders);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF013212Scope.imOrderGrid,$scope.f0131ApiF013212Scope.imOrders);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //界面布局不存在MfOperationRequire表格。。
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象BkContainer
                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.bkContainerGrid) {
                    if($scope.f0131ApiF01324Scope.bkContainerGrid && $scope.f0131ApiF01324Scope.bkContainerGrid.formController && $scope.f0131ApiF01324Scope.bkContainerGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF01324Scope.bkContainerGrid.formController){
                        if($scope.f0131ApiF01324Scope.bkContainerGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.bkContainerGrid,$scope.f0131ApiF01324Scope.bkContainers);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.bkContainerGrid,$scope.f0131ApiF01324Scope.bkContainers);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象MfContainer2Cargo
                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.mfContainer2CargoGrid) {
                    if( $scope.f0131ApiF01324Scope.mfContainer2CargoGrid){
                        if($scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController){
                            var $validator = $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController.$validator;
                            if($validator){
                                $validator.disable();
                                $validator.reset();
                            }

                            //$scope.f0131ApiF01324Scope.mfContainer2CargoGrid.finishEdit();
                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.mfContainer2CargoGrid,$scope.f0131ApiF01324Scope.mfContainer2Cargos);

                            if($validator){
                                $validator.enable();
                            }
                        }else{
                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.mfContainer2CargoGrid,$scope.f0131ApiF01324Scope.mfContainer2Cargos);
                        }

                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CdOrder
                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrderGrid) {
                    if($scope.f0131ApiF013211Scope.cdOrderGrid && $scope.f0131ApiF013211Scope.cdOrderGrid.formController && $scope.f0131ApiF013211Scope.cdOrderGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF013211Scope.cdOrderGrid.formController){
                        if($scope.f0131ApiF013211Scope.cdOrderGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF013211Scope.cdOrderGrid,$scope.f0131ApiF013211Scope.cdOrders);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF013211Scope.cdOrderGrid,$scope.f0131ApiF013211Scope.cdOrders);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CdOrder2Ctn
                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrder2CtnGrid) {
                    if( $scope.f0131ApiF013211Scope.cdOrder2CtnGrid){
                        if($scope.f0131ApiF013211Scope.CdOrder2CtnForm && $scope.f0131ApiF013211Scope.CdOrder2CtnForm.$validator){
                            $scope.f0131ApiF013211Scope.CdOrder2CtnForm.$validator.reset();
                            $scope.f0131ApiF013211Scope.CdOrder2CtnForm.$validator.disable();
                        }
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CdOrderDocument
                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrderDocumentGrid) {
                    if( $scope.f0131ApiF013211Scope.cdOrderDocumentGrid){
                        if($scope.f0131ApiF013211Scope.CdOrderDocumentForm && $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator){
                            $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator.reset();
                            $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator.disable();
                        }
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CdOrderCargo
                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrderCargoGrid) {
                    if( $scope.f0131ApiF013211Scope.cdOrderCargoGrid){
                        if($scope.f0131ApiF013211Scope.CdOrderCargoForm && $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator){
                            $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator.reset();
                            $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator.disable();
                        }
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象MfBookingCargo
                if($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargoGrid) {
                    if($scope.f0131ApiF01323Scope.mfBookingCargoGrid && $scope.f0131ApiF01323Scope.mfBookingCargoGrid.formController && $scope.f0131ApiF01323Scope.mfBookingCargoGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF01323Scope.mfBookingCargoGrid.formController){
                        if($scope.f0131ApiF01323Scope.mfBookingCargoGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF01323Scope.mfBookingCargoGrid,$scope.f0131ApiF01323Scope.mfBookingCargos);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF01323Scope.mfBookingCargoGrid,$scope.f0131ApiF01323Scope.mfBookingCargos);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                if($scope.MfOrderFormTop && $scope.MfOrderFormTop.$validator && $scope.MfOrderFormTop.verify && $scope.mfOrder && $scope.mfOrder.hasOwnProperty('mfOrderId')){
                    $scope.MfOrderFormTop.$validator.enable();
                    $scope.MfOrderFormTop.verify();
                }
                if ($scope.MfOperationRequireForm && $scope.MfOperationRequireForm.$validator && $scope.MfOperationRequireForm.verify && $scope.mfOrder && $scope.mfOrder.hasOwnProperty('mfOrderId')) {
                    $scope.MfOperationRequireForm.$validator.enable();
                    $scope.MfOperationRequireForm.verify();
                }
                if($scope.MfOrderForm && $scope.MfOrderForm.$validator && $scope.MfOrderForm.verify && $scope.mfOrder && $scope.mfOrder.hasOwnProperty('mfOrderId')){
                    $scope.MfOrderForm.$validator.enable();
                    $scope.MfOrderForm.verify();
                }
                if($scope.isBulkyCargo && $scope.isBulkyCargo.$validator && $scope.isBulkyCargo.verify && $scope.mfOrder && $scope.mfOrder.hasOwnProperty('mfOrderId')){
                    $scope.isBulkyCargo.$validator.enable();
                    $scope.isBulkyCargo.verify();
                }
                if($scope.isHazardForm && $scope.isHazardForm.$validator && $scope.isHazardForm.verify && $scope.mfOrder && $scope.mfOrder.hasOwnProperty('mfOrderId')){
                    $scope.isHazardForm.$validator.enable();
                    $scope.isHazardForm.verify();
                }
                if($scope.isReeferForm && $scope.isReeferForm.$validator && $scope.isReeferForm.verify && $scope.mfOrder && $scope.mfOrder.hasOwnProperty('mfOrderId')){
                    $scope.isReeferForm.$validator.enable();
                    $scope.isReeferForm.verify();
                }
                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.CdOrder2Ctn && $scope.f0131ApiF013211Scope.CdOrder2Ctn.$validator && $scope.f0131ApiF013211Scope.CdOrder2Ctn.verify && $scope.f0131ApiF013211Scope.mfOrder && $scope.f0131ApiF013211Scope.mfOrder.hasOwnProperty('mfOrderId')){
                    $scope.f0131ApiF013211Scope.CdOrder2Ctn.$validator.enable();
                    $scope.f0131ApiF013211Scope.CdOrder2Ctn.verify();
                }
                var allValidationFlag = true ;
                //TABS F0-1-3-1
                //TAB  F0-1-3-2-13 F0131Api 0
                var tabs13_F0131Api_Valid = true ;
                if(!tabs13_F0131Api_Valid){
                    $scope.F0131Api.selectTab(12);

                }
                //TAB  F0-1-3-2-12 F0131Api 0
                var tabs12_F0131Api_Valid = true ;

                if ($scope.f0131ApiF01322Scope.mfOrderExtend  && $scope.f0131ApiF01322Scope.MfOrderExtendForm) {
                    if ($scope.f0131ApiF01322Scope.MfOrderExtendForm.$validator && $scope.f0131ApiF01322Scope.MfOrderExtendForm.verify) {
                        $scope.f0131ApiF01322Scope.MfOrderExtendForm.$validator.enable();
                        $scope.f0131ApiF01322Scope.MfOrderExtendForm.verify();
                    }
                    if (!$scope.f0131ApiF01322Scope.MfOrderExtendForm.$valid) {
                        tabs11_F0131Api_Valid = false;
                        allValidationFlag = false;
                    }
                }
                // DIV;;F0-1-3-2-12-1
                // DIV;GRID;F0-1-3-2-12-1-1

                if($scope.f0131ApiF013212Scope.imOrder && $scope.f0131ApiF013212Scope.imOrder.imOrderId && $scope.f0131ApiF013212Scope.ImOrderForm){
                    if($scope.f0131ApiF013212Scope.ImOrderForm.$validator && $scope.f0131ApiF013212Scope.ImOrderForm.verify){
                        $scope.f0131ApiF013212Scope.ImOrderForm.$validator.enable();
                        $scope.f0131ApiF013212Scope.ImOrderForm.verify();
                    }
                    if(!$scope.f0131ApiF013212Scope.ImOrderForm.$valid){
                        tabs12_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;GRID_TOOLBAR;F0-1-3-2-12-1-2
                // DIV;FORM_CELL;F0-1-3-2-12-1-3
                if(!tabs12_F0131Api_Valid){
                    $scope.F0131Api.selectTab(11);

                }
                //TAB  F0-1-3-2-11 F0131Api 0
                var tabs11_F0131Api_Valid = true ;
                // DIV;REFERENCE;F0-1-3-2-11-1
                // DIV;;F0
                // DIV;GRID_TOOLBAR;F0-2
                // DIV;GRID;F0-1

                if($scope.f0131ApiF013211Scope.cdOrder && $scope.f0131ApiF013211Scope.cdOrder.cdOrderId && $scope.f0131ApiF013211Scope.CdOrderForm){
                    if($scope.f0131ApiF013211Scope.CdOrderForm.$validator && $scope.f0131ApiF013211Scope.CdOrderForm.verify){
                        $scope.f0131ApiF013211Scope.CdOrderForm.$validator.enable();
                        $scope.f0131ApiF013211Scope.CdOrderForm.verify();
                    }
                    if(!$scope.f0131ApiF013211Scope.CdOrderForm.$valid){
                        tabs11_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;REFERENCE;F0-1-3-2-11-2
                // DIV;;F1
                // DIV;;F1-1
                // DIV;;F1-1-1
                // DIV;;F1-1-1-1
                // GROUP;;F1-1-1-1-1-1
                // DIV;;F1-1-1-1-1-1-1-0
                // DIV;;F1-1-1-1-1-1-1
                // DIV;;F1-1-1-1-1-1-1-1
                // DIV;;F1-1-1-1-1-1-1-2
                // DIV;;F1-1-1-1-1-1-1-3
                // DIV;;F1-1-1-1-1-1-1-4
                // DIV;;F1-1-1-1-1-1-1-5
                // DIV;;F1-1-1-1-1-1-1-6
                // DIV;;F1-1-1-1-1-1-1-7
                // DIV;;F1-1-1-1-1-1-1-8
                // DIV;;F1-1-1-1-1-1-1-9
                // DIV;;F1-1-1-1-1-1-1-10
                // DIV;;F1-1-1-1-1-1-1-11
                // DIV;;F1-1-1-1-1-1-2
                // DIV;;F1-1-1-1-1-1-2-1
                // DIV;;F1-1-1-1-1-1-2-2
                // DIV;;F1-1-1-1-1-1-2-3
                // DIV;;F1-1-1-1-1-1-2-4
                // DIV;;F1-1-1-1-1-1-2-5
                // DIV;;F1-1-1-1-1-1-2-6
                // DIV;;F1-1-1-1-1-1-2-7
                // DIV;;F1-1-1-1-1-1-2-8
                // DIV;;F1-1-1-1-1-1-2-8-1
                // DIV;;F1-1-1-1-1-1-2-8-2
                // DIV;;F1-1-1-1-1-1-2-9
                // DIV;;F1-1-1-1-1-1-2-10
                // DIV;;F1-1-1-1-1-1-2-11
                // DIV;;F1-1-1-1-1-1-3
                // DIV;;F1-1-1-1-1-1-3-1
                // DIV;;F1-1-1-1-1-1-3-2
                // DIV;;F1-1-1-1-1-1-3-3
                // DIV;;F1-1-1-1-1-1-3-4
                // DIV;;F1-1-1-1-1-1-3-5
                // DIV;;F1-1-1-1-1-1-3-6
                // DIV;;F1-1-1-1-1-1-3-7
                // DIV;;F1-1-1-1-1-1-3-8
                // DIV;;F1-1-1-1-1-1-3-9
                // DIV;;F1-1-1-1-1-1-3-10
                // DIV;;F1-1-1-1-1-1-3-11
                // DIV;;F1-1-1-1-1-1-4
                // DIV;;F1-1-1-1-1-1-4-1
                // DIV;;F1-1-1-1-1-1-4-2
                // DIV;;F1-1-1-1-1-1-4-3
                // DIV;;F1-1-1-1-1-1-4-4
                // DIV;;F1-1-1-1-1-1-4-5
                // DIV;;F1-1-1-1-1-1-4-6
                // DIV;;F1-1-1-1-1-1-4-7
                // DIV;;F1-1-1-1-1-1-4-8
                // DIV;;F1-1-1-1-1-1-4-9
                // DIV;;F1-1-1-1-1-1-4-10
                // DIV;;F1-1-1-1-1-1-4-10-1
                // DIV;;F1-1-1-1-1-1-4-10-2
                // DIV;;F1-1-1-1-1-1-4-11
                // DIV;;F1-1-1-2
                // DIV;;F1-1-1-2-1
                // GROUP;;F1-1-1-2-1-1
                // DIV;GRID_TOOLBAR;F1-1-1-2-1-1-2
                // DIV;GRID;F1-1-1-2-1-1-1

                if($scope.f0131ApiF013211Scope.cdOrderCargo && $scope.f0131ApiF013211Scope.cdOrderCargo.cdOrderCargoId && $scope.f0131ApiF013211Scope.CdOrderCargoForm){
                    if($scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator && $scope.f0131ApiF013211Scope.CdOrderCargoForm.verify){
                        $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator.enable();
                        $scope.f0131ApiF013211Scope.CdOrderCargoForm.verify();
                    }
                    if(!$scope.f0131ApiF013211Scope.CdOrderCargoForm.$valid){
                        tabs11_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F1-1-1-2-1-1-3
                // DIV;;F1-1-1-2-1-1-3-1
                // PANEL;;F1-1-1-2-1-1-3-1-1
                // DIV;;F1-1-1-2-1-1-3-1-1-1
                // DIV;;F1-1-1-2-1-1-3-1-1-2
                // DIV;;F1-1-1-2-1-1-3-1-1-3
                // DIV;;F1-1-1-2-1-1-3-1-1-4
                // DIV;;F1-1-1-2-1-1-3-1-1-5
                // DIV;;F1-1-1-2-1-1-3-2
                // PANEL;;F1-1-1-2-1-1-3-2-1
                // DIV;;F1-1-1-2-1-1-3-2-1-1
                // DIV;;F1-1-1-2-1-1-3-2-1-2
                // DIV;;F1-1-1-2-1-1-3-2-1-3
                // DIV;;F1-1-1-2-1-1-3-2-1-4
                // DIV;;F1-1-1-2-1-1-3-2-1-5
                // DIV;;F1-1-1-2-1-1-3-3
                // PANEL;;F1-1-1-2-1-1-3-3-1
                // DIV;;F1-1-1-2-1-1-3-3-1-1
                // DIV;;F1-1-1-2-1-1-3-3-1-2
                // DIV;;F1-1-1-2-1-1-3-3-1-3
                // DIV;;F1-1-1-2-1-1-3-3-1-4
                // DIV;;F1-1-1-2-1-1-3-3-1-5
                // DIV;;F1-1-1-2-1-1-3-4
                // PANEL;;F1-1-1-2-1-1-3-4-1
                // DIV;;F1-1-1-2-1-1-3-4-1-1
                // DIV;;F1-1-1-2-1-1-3-4-1-2
                // DIV;;F1-1-1-2-1-1-3-4-1-3
                // DIV;;F1-1-1-2-1-1-3-4-1-4
                // DIV;;F1-1-1-2-1-1-3-4-1-5
                // DIV;;F1-1-2
                // DIV;;F1-1-2-1
                // GROUP;;F1-1-2-1-1
                // FORM;;F1-1-2-1-1-1-0
                if($scope.f0131ApiF013211Scope &&  $scope.f0131ApiF013211Scope.CdOrder2Ctn && !$scope.f0131ApiF013211Scope.CdOrder2Ctn.$valid){
                    tabs11_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                // DIV;;F1-1-2-1-1-3
                // DIV;;F1-1-2-1-1-3-1
                // DIV;;F1-1-2-1-1-3-2
                // DIV;;F1-1-2-1-1-3-3
                // DIV;GRID_TOOLBAR;F1-1-2-1-1-5
                // DIV;GRID;F1-1-2-1-1-4

                if($scope.f0131ApiF013211Scope.cdOrderDocument && $scope.f0131ApiF013211Scope.cdOrderDocument.cdOrderDocumentId && $scope.f0131ApiF013211Scope.CdOrderDocumentForm){
                    if($scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator && $scope.f0131ApiF013211Scope.CdOrderDocumentForm.verify){
                        $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator.enable();
                        $scope.f0131ApiF013211Scope.CdOrderDocumentForm.verify();
                    }
                    if(!$scope.f0131ApiF013211Scope.CdOrderDocumentForm.$valid){
                        tabs11_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F1-1-2-1-1-6
                // PANEL;;F1-1-2-1-1-6-1
                // DIV;;F1-1-2-1-1-6-1-1
                // DIV;;F1-1-2-1-1-6-1-2
                // DIV;;F1-1-2-1-1-6-1-3
                // DIV;;F1-1-2-1-1-6-1-4
                // DIV;;F1-1-2-1-1-6-1-5
                // DIV;;F1-1-2-1-1-6-1-6
                // DIV;;F1-1-2-1-1-6-1-7
                // DIV;;F1-1-2-1-1-6-1-8
                // DIV;;F1-1-2-1-1-6-1-9
                if(!tabs11_F0131Api_Valid){
                    $scope.F0131Api.selectTab(10);
                    var errF013211s = [];
                    // DIV F0-1-3-2-11-1
                    // DIV F0
                    // DIV F0-2
                    // DIV F0-1
                    // DIV F0-1-3-2-11-2
                    // DIV F1
                    // DIV F1-1
                    // DIV F1-1-1
                    // DIV F1-1-1-1
                    // GROUP F1-1-1-1-1-1
                    // DIV F1-1-1-1-1-1-1-0
                    // DIV F1-1-1-1-1-1-1
                    // DIV F1-1-1-1-1-1-1-1
                    // DIV F1-1-1-1-1-1-1-2
                    // DIV F1-1-1-1-1-1-1-3
                    // DIV F1-1-1-1-1-1-1-4
                    // DIV F1-1-1-1-1-1-1-5
                    // DIV F1-1-1-1-1-1-1-6
                    // DIV F1-1-1-1-1-1-1-7
                    // DIV F1-1-1-1-1-1-1-8
                    // DIV F1-1-1-1-1-1-1-9
                    // DIV F1-1-1-1-1-1-1-10
                    // DIV F1-1-1-1-1-1-1-11
                    // DIV F1-1-1-1-1-1-2
                    // DIV F1-1-1-1-1-1-2-1
                    // DIV F1-1-1-1-1-1-2-2
                    // DIV F1-1-1-1-1-1-2-3
                    // DIV F1-1-1-1-1-1-2-4
                    // DIV F1-1-1-1-1-1-2-5
                    // DIV F1-1-1-1-1-1-2-6
                    // DIV F1-1-1-1-1-1-2-7
                    // DIV F1-1-1-1-1-1-2-8
                    // DIV F1-1-1-1-1-1-2-8-1
                    // DIV F1-1-1-1-1-1-2-8-2
                    // DIV F1-1-1-1-1-1-2-9
                    // DIV F1-1-1-1-1-1-2-10
                    // DIV F1-1-1-1-1-1-2-11
                    // DIV F1-1-1-1-1-1-3
                    // DIV F1-1-1-1-1-1-3-1
                    // DIV F1-1-1-1-1-1-3-2
                    // DIV F1-1-1-1-1-1-3-3
                    // DIV F1-1-1-1-1-1-3-4
                    // DIV F1-1-1-1-1-1-3-5
                    // DIV F1-1-1-1-1-1-3-6
                    // DIV F1-1-1-1-1-1-3-7
                    // DIV F1-1-1-1-1-1-3-8
                    // DIV F1-1-1-1-1-1-3-9
                    // DIV F1-1-1-1-1-1-3-10
                    // DIV F1-1-1-1-1-1-3-11
                    // DIV F1-1-1-1-1-1-4
                    // DIV F1-1-1-1-1-1-4-1
                    // DIV F1-1-1-1-1-1-4-2
                    // DIV F1-1-1-1-1-1-4-3
                    // DIV F1-1-1-1-1-1-4-4
                    // DIV F1-1-1-1-1-1-4-5
                    // DIV F1-1-1-1-1-1-4-6
                    // DIV F1-1-1-1-1-1-4-7
                    // DIV F1-1-1-1-1-1-4-8
                    // DIV F1-1-1-1-1-1-4-9
                    // DIV F1-1-1-1-1-1-4-10
                    // DIV F1-1-1-1-1-1-4-10-1
                    // DIV F1-1-1-1-1-1-4-10-2
                    // DIV F1-1-1-1-1-1-4-11
                    // DIV F1-1-1-2
                    // DIV F1-1-1-2-1
                    // GROUP F1-1-1-2-1-1
                    // DIV F1-1-1-2-1-1-2
                    // DIV F1-1-1-2-1-1-1
                    // DIV F1-1-1-2-1-1-3
                    // DIV F1-1-1-2-1-1-3-1
                    // PANEL F1-1-1-2-1-1-3-1-1
                    // DIV F1-1-1-2-1-1-3-1-1-1
                    // DIV F1-1-1-2-1-1-3-1-1-2
                    // DIV F1-1-1-2-1-1-3-1-1-3
                    // DIV F1-1-1-2-1-1-3-1-1-4
                    // DIV F1-1-1-2-1-1-3-1-1-5
                    // DIV F1-1-1-2-1-1-3-2
                    // PANEL F1-1-1-2-1-1-3-2-1
                    // DIV F1-1-1-2-1-1-3-2-1-1
                    // DIV F1-1-1-2-1-1-3-2-1-2
                    // DIV F1-1-1-2-1-1-3-2-1-3
                    // DIV F1-1-1-2-1-1-3-2-1-4
                    // DIV F1-1-1-2-1-1-3-2-1-5
                    // DIV F1-1-1-2-1-1-3-3
                    // PANEL F1-1-1-2-1-1-3-3-1
                    // DIV F1-1-1-2-1-1-3-3-1-1
                    // DIV F1-1-1-2-1-1-3-3-1-2
                    // DIV F1-1-1-2-1-1-3-3-1-3
                    // DIV F1-1-1-2-1-1-3-3-1-4
                    // DIV F1-1-1-2-1-1-3-3-1-5
                    // DIV F1-1-1-2-1-1-3-4
                    // PANEL F1-1-1-2-1-1-3-4-1
                    // DIV F1-1-1-2-1-1-3-4-1-1
                    // DIV F1-1-1-2-1-1-3-4-1-2
                    // DIV F1-1-1-2-1-1-3-4-1-3
                    // DIV F1-1-1-2-1-1-3-4-1-4
                    // DIV F1-1-1-2-1-1-3-4-1-5
                    // DIV F1-1-2
                    // DIV F1-1-2-1
                    // GROUP F1-1-2-1-1
                    // FORM F1-1-2-1-1-1-0
                    if( $scope.f0131ApiF013211Scope &&  $scope.f0131ApiF013211Scope.CdOrder2Ctn && $scope.f0131ApiF013211Scope.CdOrder2Ctn.$error){
                        for(var prop in $scope.f0131ApiF013211Scope.CdOrder2Ctn.$error){
                            if(angular.isArray($scope.f0131ApiF013211Scope.CdOrder2Ctn.$error[prop])){
                                errF013211s = errF013211s.concat($scope.f0131ApiF013211Scope.CdOrder2Ctn.$error[prop]);
                            }
                        }
                    }
                    // DIV F1-1-2-1-1-3
                    // DIV F1-1-2-1-1-3-1
                    // DIV F1-1-2-1-1-3-2
                    // DIV F1-1-2-1-1-3-3
                    // DIV F1-1-2-1-1-5
                    // DIV F1-1-2-1-1-4
                    // DIV F1-1-2-1-1-6
                    // PANEL F1-1-2-1-1-6-1
                    // DIV F1-1-2-1-1-6-1-1
                    // DIV F1-1-2-1-1-6-1-2
                    // DIV F1-1-2-1-1-6-1-3
                    // DIV F1-1-2-1-1-6-1-4
                    // DIV F1-1-2-1-1-6-1-5
                    // DIV F1-1-2-1-1-6-1-6
                    // DIV F1-1-2-1-1-6-1-7
                    // DIV F1-1-2-1-1-6-1-8
                    // DIV F1-1-2-1-1-6-1-9
                    for(var j=0;j<errF013211s.length;j++){
                        if($("input[name='"+errF013211s[j].$name+"']").parents("div[api]")[0]){
                            var apiName = $("input[name='"+errF013211s[j].$name+"']").parents("div[api]")[0].attributes.api.value;
                            var title = $("input[name='"+errF013211s[j].$name+"']").parents("div[title]")[0].attributes.title.value;
                            $scope[apiName].selectTab(title+"_"+undefined);
                        }
                    }

                }
                //TAB  F0-1-3-2-10 F0131Api 0
                var tabs10_F0131Api_Valid = true ;
                // DIV;;F0-1-3-2-10-1
                // DIV;GRID;F0-1-3-2-10-1-1

                if($scope.f0131ApiF013210Scope.ciOrder && $scope.f0131ApiF013210Scope.ciOrder.ciOrderId && $scope.f0131ApiF013210Scope.CiOrderForm){
                    if($scope.f0131ApiF013210Scope.CiOrderForm.$validator && $scope.f0131ApiF013210Scope.CiOrderForm.verify){
                        $scope.f0131ApiF013210Scope.CiOrderForm.$validator.enable();
                        $scope.f0131ApiF013210Scope.CiOrderForm.verify();
                    }
                    if(!$scope.f0131ApiF013210Scope.CiOrderForm.$valid){
                        tabs10_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F0-1-3-2-10-2
                // DIV;GRID_TOOLBAR;F0-1-3-2-10-2-1
                // DIV;FORM_CELL;F0-1-3-2-10-2-2
                // DIV;;F0-1-3-2-10-3
                // DIV;;F0-1-3-2-10-3-1
                // GROUP;;F0-1-3-2-10-3-1-1
                // DIV;GRID_TOOLBAR;F0-1-3-2-10-3-1-1-1
                // DIV;GRID;F0-1-3-2-10-3-1-1-2

                if($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid && $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController){
                    if(!$scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController.$valid){
                        tabs10_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F0-1-3-2-10-3-2
                // GROUP;;F0-1-3-2-10-3-2-1
                // DIV;GRID_TOOLBAR;F0-1-3-2-10-3-2-1-1
                // DIV;GRID;F0-1-3-2-10-3-2-1-2

                if($scope.f0131ApiF013210Scope.ciOrderDocumentGrid && $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController){
                    if(!$scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController.$valid){
                        tabs10_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F0-1-3-2-10-3-3
                // GROUP;;F0-1-3-2-10-3-3-1
                // DIV;GRID_TOOLBAR;F0-1-3-2-10-3-3-1-1
                // DIV;GRID;F0-1-3-2-10-3-3-1-2

                if($scope.f0131ApiF013210Scope.ciOrderCargoGrid && $scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController){
                    if(!$scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController.$valid){
                        tabs10_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F0-1-3-2-10-4
                if(!tabs10_F0131Api_Valid){
                    $scope.F0131Api.selectTab(9);

                }
                //TAB  F0-1-3-2-9 F0131Api 0
                var tabs9_F0131Api_Valid = true ;
                if(!tabs9_F0131Api_Valid){
                    $scope.F0131Api.selectTab(8);

                }
                //TAB  F0-1-3-2-8 F0131Api 0
                var tabs8_F0131Api_Valid = true ;
                // DIV;REFERENCE;F0-1-3-2-8-2
                // DIV;;F1
                // DIV;GRID;F1-1-1

                if($scope.f0131ApiF01328Scope.tmOrderToMfOrder && $scope.f0131ApiF01328Scope.tmOrderToMfOrder.tmOrderId && $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm){
                    if($scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$validator && $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.verify){
                        $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$validator.enable();
                        $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.verify();
                    }
                    if(!$scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$valid){
                        tabs8_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // PANEL;;F1-1-2
                // DIV;;F1-1-2-1
                // DIV;;F1-1-2-2
                // DIV;;F1-1-2-3
                // DIV;GRID_TOOLBAR;F1-2
                // DIV;REFERENCE;F0-1-3-2-8-3
                // DIV;;F0
                // FORM;;F0-3-0
                if($scope.f0131ApiF01328Scope &&  $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm && !$scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$valid){
                    tabs8_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                // GROUP;;F0-5
                // DIV;;F0-5-3
                // DIV;;F0-5-4-4
                // DIV;;F0-5-3-2
                // DIV;;F0-5-3-3
                // DIV;;F0-5-3-4
                // DIV;;F0-5-2
                // DIV;;F0-5-2-1
                // DIV;;F0-5-2-2
                // DIV;;F0-5-2-3
                // DIV;;F0-5-2-4
                // DIV;;F0-5-1
                // DIV;;F0-5-1-1
                // DIV;;F0-5-1-2
                // DIV;;F0-5-1-3
                // DIV;;F0-5-1-4
                // DIV;;F0-5-4
                // DIV;;F0-5-4-1
                // DIV;;F0-5-3-1
                // DIV;;F0-5-4-2
                // DIV;;F0-5-4-2-1
                // DIV;;F0-5-4-2-2
                // DIV;;F0-5-4-3
                if(!tabs8_F0131Api_Valid){
                    $scope.F0131Api.selectTab(7);
                    var errF01328s = [];
                    // DIV F0-1-3-2-8-2
                    // DIV F1
                    // DIV F1-1-1
                    // PANEL F1-1-2
                    // DIV F1-1-2-1
                    // DIV F1-1-2-2
                    // DIV F1-1-2-3
                    // DIV F1-2
                    // DIV F0-1-3-2-8-3
                    // DIV F0
                    // FORM F0-3-0
                    if( $scope.f0131ApiF01328Scope &&  $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm && $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$error){
                        for(var prop in $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$error){
                            if(angular.isArray($scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$error[prop])){
                                errF01328s = errF01328s.concat($scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$error[prop]);
                            }
                        }
                    }
                    // GROUP F0-5
                    // DIV F0-5-3
                    // DIV F0-5-4-4
                    // DIV F0-5-3-2
                    // DIV F0-5-3-3
                    // DIV F0-5-3-4
                    // DIV F0-5-2
                    // DIV F0-5-2-1
                    // DIV F0-5-2-2
                    // DIV F0-5-2-3
                    // DIV F0-5-2-4
                    // DIV F0-5-1
                    // DIV F0-5-1-1
                    // DIV F0-5-1-2
                    // DIV F0-5-1-3
                    // DIV F0-5-1-4
                    // DIV F0-5-4
                    // DIV F0-5-4-1
                    // DIV F0-5-3-1
                    // DIV F0-5-4-2
                    // DIV F0-5-4-2-1
                    // DIV F0-5-4-2-2
                    // DIV F0-5-4-3
                    for(var j=0;j<errF01328s.length;j++){
                        if($("input[name='"+errF01328s[j].$name+"']").parents("div[api]")[0]){
                            var apiName = $("input[name='"+errF01328s[j].$name+"']").parents("div[api]")[0].attributes.api.value;
                            var title = $("input[name='"+errF01328s[j].$name+"']").parents("div[title]")[0].attributes.title.value;
                            $scope[apiName].selectTab(title+"_"+undefined);
                        }
                    }

                }
                //TAB  F0-1-3-2-7 F0131Api 0
                var tabs7_F0131Api_Valid = true ;
                // DIV;GRID_TOOLBAR;F0-1-3-2-7-0
                // DIV;;F0-1-3-2-7-1
                // DIV;;F0-1-3-2-7-1-1
                // GROUP;;F0-1-3-2-7-1-1-1
                // DIV;;F0-1-3-2-7-1-1-1-1
                // DIV;;F0-1-3-2-7-1-2
                // GROUP;;F0-1-3-2-7-1-2-1
                // DIV;;F0-1-3-2-7-1-2-1-1
                if(!tabs7_F0131Api_Valid){
                    $scope.F0131Api.selectTab(6);

                }
                //TAB  F0-1-3-2-6 F0131Api 0
                var tabs6_F0131Api_Valid = true ;
                if(!tabs6_F0131Api_Valid){
                    $scope.F0131Api.selectTab(5);

                }
                //TAB  F0-1-3-2-5 F0131Api 0
                var tabs5_F0131Api_Valid = true ;
                // DIV;;F0-1-3-2-5-1
                // DIV;REFERENCE;F0-1-3-2-5-2
                // DIV;;F0-10-1
                // DIV;TOOLBAR;F0-10-1-1
                // DIV;TOOLBAR;F0-10-1-2
                // DIV;GRID_TOOLBAR;F0-10-1-3
                // DIV;GRID;F0-10-1-4

                if($scope.f0131ApiF01325Scope.arBcFreightGrid && $scope.f0131ApiF01325Scope.arBcFreightGrid.formController){
                    if(!$scope.f0131ApiF01325Scope.arBcFreightGrid.formController.$valid){
                        tabs5_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;REFERENCE;F0-1-3-2-5-3
                // DIV;;F0-9-1
                // DIV;GRID_TOOLBAR;F0-9-1-1
                // DIV;GRID;F0-9-1-2

                if($scope.f0131ApiF01325Scope.apBcFreightGrid && $scope.f0131ApiF01325Scope.apBcFreightGrid.formController){
                    if(!$scope.f0131ApiF01325Scope.apBcFreightGrid.formController.$valid){
                        tabs5_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;REFERENCE;F0-1-3-2-5-4
                // DIV;;F0-8-1
                // DIV;GRID;F0-8-1-1

                if($scope.f0131ApiF01325Scope.vbcFreightStatistics && $scope.f0131ApiF01325Scope.vbcFreightStatistics.mfOrderId && $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm){
                    if($scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.$validator && $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.verify){
                        $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.$validator.enable();
                        $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.verify();
                    }
                    if(!$scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.$valid){
                        tabs5_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                if(!tabs5_F0131Api_Valid){
                    $scope.F0131Api.selectTab(4);

                }
                //TAB  F0-1-3-2-4 F0131Api 0
                var tabs4_F0131Api_Valid = true ;
                // DIV;REFERENCE;F0-1-3-2-4-1
                // DIV;;F0
                // DIV;;F0-1
                // DIV;GRID_TOOLBAR;F0-1-1
                // DIV;GRID;F0-1-2

                if($scope.f0131ApiF01324Scope.bkContainerGrid && $scope.f0131ApiF01324Scope.bkContainerGrid.formController){
                    if(!$scope.f0131ApiF01324Scope.bkContainerGrid.formController.$valid){
                        tabs4_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F0-1-5
                // PANEL;;F0-1-5-1-1
                // DIV;;F0-1-5-1
                // DIV;;F0-1-5-2
                // DIV;;F0-1-5-3
                // DIV;;F0-1-5-4
                // DIV;;F0-1-5-5
                // DIV;;F0-1-10
                // PANEL;;F0-1-10-1
                // DIV;;F0-1-10-1-1
                // DIV;;F0-1-10-1-2
                // DIV;;F0-1-10-1-3
                // DIV;;F0-1-10-1-4
                // DIV;;F0-1-11
                // PANEL;;F0-1-11-1
                // DIV;;F0-1-11-1-1
                // DIV;;F0-1-11-1-2
                // DIV;;F0-1-11-1-3
                // DIV;;F0-1-11-1-4
                // DIV;GRID_TOOLBAR;F0-1-3
                // DIV;GRID;F0-1-4

                if($scope.f0131ApiF01324Scope.mfContainer2CargoGrid && $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController){
                    if(!$scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController.$valid){
                        tabs4_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;GRID_TOOLBAR;F0-1-6
                // DIV;GRID;F0-1-7

                if($scope.f0131ApiF01324Scope.arBcFreightGrid && $scope.f0131ApiF01324Scope.arBcFreightGrid.formController){
                    if(!$scope.f0131ApiF01324Scope.arBcFreightGrid.formController.$valid){
                        tabs4_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;GRID_TOOLBAR;F0-1-8
                // DIV;GRID;F0-1-9

                if($scope.f0131ApiF01324Scope.apBcFreightGrid && $scope.f0131ApiF01324Scope.apBcFreightGrid.formController){
                    if(!$scope.f0131ApiF01324Scope.apBcFreightGrid.formController.$valid){
                        tabs4_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                if(!tabs4_F0131Api_Valid){
                    $scope.F0131Api.selectTab(3);

                }
                //TAB  F0-1-3-2-3 F0131Api 0
                var tabs3_F0131Api_Valid = true ;
                // DIV;;F0-1-3-2-3-1
                // DIV;GRID_TOOLBAR;F0-1-3-2-3-1-1
                // DIV;GRID;F0-1-3-2-3-1-2

                if($scope.f0131ApiF01323Scope.mfBookingCargo && $scope.f0131ApiF01323Scope.mfBookingCargo.mfBookingCargoId && $scope.f0131ApiF01323Scope.MfBookingCargoForm){
                    if($scope.f0131ApiF01323Scope.MfBookingCargoForm.$validator && $scope.f0131ApiF01323Scope.MfBookingCargoForm.verify){
                        $scope.f0131ApiF01323Scope.MfBookingCargoForm.$validator.enable();
                        $scope.f0131ApiF01323Scope.MfBookingCargoForm.verify();
                    }
                    if(!$scope.f0131ApiF01323Scope.MfBookingCargoForm.$valid){
                        tabs3_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;REFERENCE;F0-1-3-2-3-1-3
                // DIV;;F0
                // FORM;;F0-1
                if($scope.f0131ApiF01323Scope &&  $scope.f0131ApiF01323Scope.MfBookingCargoForm && !$scope.f0131ApiF01323Scope.MfBookingCargoForm.$valid){
                    tabs3_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                if(!tabs3_F0131Api_Valid){
                    $scope.F0131Api.selectTab(2);
                    var errF01323s = [];
                    // DIV F0-1-3-2-3-1
                    // DIV F0-1-3-2-3-1-1
                    // DIV F0-1-3-2-3-1-2
                    // DIV F0-1-3-2-3-1-3
                    // DIV F0
                    // FORM F0-1
                    if( $scope.f0131ApiF01323Scope &&  $scope.f0131ApiF01323Scope.MfBookingCargoForm && $scope.f0131ApiF01323Scope.MfBookingCargoForm.$error){
                        for(var prop in $scope.f0131ApiF01323Scope.MfBookingCargoForm.$error){
                            if(angular.isArray($scope.f0131ApiF01323Scope.MfBookingCargoForm.$error[prop])){
                                errF01323s = errF01323s.concat($scope.f0131ApiF01323Scope.MfBookingCargoForm.$error[prop]);
                            }
                        }
                    }
                    for(var j=0;j<errF01323s.length;j++){
                        if($("input[name='"+errF01323s[j].$name+"']").parents("div[api]")[0]){
                            var apiName = $("input[name='"+errF01323s[j].$name+"']").parents("div[api]")[0].attributes.api.value;
                            var title = $("input[name='"+errF01323s[j].$name+"']").parents("div[title]")[0].attributes.title.value;
                            $scope[apiName].selectTab(title+"_"+undefined);
                        }
                    }

                }
                //TAB  F0-1-3-2-2 F0131Api 0
                var tabs2_F0131Api_Valid = true ;
                // DIV;REFERENCE;F0-1-3-2-2-1
                // DIV;;F0
                // TABS;;F0-1
                // TAB;;F0-1-1
                // PANEL;;F0-1-1-1
                // DIV;;F0-1-1-1-1
                // DIV;;F0-1-1-1-1-1-1-1-1
                // GROUP;;F0-1-1-1-1-1
                // DIV;;F0-1-1-1-1-1-1
                // DIV;;F0-1-1-1-1-1-2
                // DIV;;F0-1-1-1-1-1-3
                // DIV;;F0-1-1-1-1-1-4
                // DIV;;F0-1-1-1-1-1-4-1
                // DIV;;F0-1-1-1-1-1-4-2
                // DIV;;F0-1-1-1-1-1-5
                // DIV;;F0-1-1-1-1-1-5-1
                // DIV;;F0-1-1-1-1-1-5-2
                // DIV;;F0-1-1-1-1-1-6
                // DIV;;F0-1-1-1-1-1-6-1
                // DIV;;F0-1-1-1-1-1-6-2
                // DIV;;F0-1-1-1-1-1-7-1
                // DIV;;F0-1-1-1-1-1-7-2
                // DIV;;F0-1-1-1-1-1-8
                // DIV;;F0-1-1-1-1-1-1-1-2
                // GROUP;;F0-1-1-1-1-2
                // DIV;;F0-1-1-1-1-2-1
                // DIV;;F0-1-1-1-1-2-2
                // DIV;;F0-1-1-1-1-2-3
                // DIV;;F0-1-1-1-1-2-4
                // DIV;;F0-1-1-1-1-2-4-1
                // DIV;;F0-1-1-1-1-2-4-2
                // DIV;;F0-1-1-1-1-2-5
                // DIV;;F0-1-1-1-1-2-5-1
                // DIV;;F0-1-1-1-1-2-5-2
                // DIV;;F0-1-1-1-1-2-6
                // DIV;;F0-1-1-1-1-2-6-1
                // DIV;;F0-1-1-1-1-2-6-2
                // DIV;;F0-1-1-1-1-2-7-1
                // DIV;;F0-1-1-1-1-2-7-2
                // DIV;;F0-1-1-1-1-2-8
                // DIV;;F0-1-1-1-1-1-1-1-3
                // GROUP;;F0-1-1-1-1-3
                // DIV;;F0-1-1-1-1-3-1
                // DIV;;F0-1-1-1-1-3-2
                // DIV;;F0-1-1-1-1-3-3
                // DIV;;F0-1-1-1-1-3-4
                // DIV;;F0-1-1-1-1-3-4-1
                // DIV;;F0-1-1-1-1-3-4-2
                // DIV;;F0-1-1-1-1-3-5
                // DIV;;F0-1-1-1-1-3-5-1
                // DIV;;F0-1-1-1-1-3-5-2
                // DIV;;F0-1-1-1-1-3-6
                // DIV;;F0-1-1-1-1-3-6-1
                // DIV;;F0-1-1-1-1-3-6-2
                // DIV;;F0-1-1-1-1-3-7-1
                // DIV;;F0-1-1-1-1-3-7-2
                // DIV;;F0-1-1-1-1-3-8
                // DIV;;F0-1-1-1-2
                // DIV;;F0-1-1-1-1-1-1-1-4
                // GROUP;;F0-1-1-1-2-1
                // DIV;;F0-1-1-1-2-1-1
                // DIV;;F0-1-1-1-2-1-2
                // DIV;;F0-1-1-1-2-1-3
                // DIV;;F0-1-1-1-2-1-4
                // DIV;;F0-1-1-1-2-1-4-1
                // DIV;;F0-1-1-1-2-1-4-2
                // DIV;;F0-1-1-1-2-1-5
                // DIV;;F0-1-1-1-2-1-5-1
                // DIV;;F0-1-1-1-2-1-5-2
                // DIV;;F0-1-1-1-2-1-6
                // DIV;;F0-1-1-1-2-1-6-1
                // DIV;;F0-1-1-1-2-1-6-2
                // DIV;;F0-1-1-1-2-1-7-1
                // DIV;;F0-1-1-1-2-1-7-2
                // DIV;;F0-1-1-1-2-1-8
                // DIV;;F0-1-1-1-1-1-1-1-5
                // GROUP;;F0-1-1-1-2-2
                // DIV;;F0-1-1-1-2-2-1
                // DIV;;F0-1-1-1-2-2-2
                // DIV;;F0-1-1-1-2-2-3
                // DIV;;F0-1-1-1-2-2-4
                // DIV;;F0-1-1-1-2-2-4-1
                // DIV;;F0-1-1-1-2-2-4-2
                // DIV;;F0-1-1-1-2-2-5
                // DIV;;F0-1-1-1-2-2-5-1
                // DIV;;F0-1-1-1-2-2-5-2
                // DIV;;F0-1-1-1-2-2-6
                // DIV;;F0-1-1-1-2-2-6-1
                // DIV;;F0-1-1-1-2-2-6-2
                // DIV;;F0-1-1-1-2-2-7-1
                // DIV;;F0-1-1-1-2-2-7-2
                // DIV;;F0-1-1-1-2-2-8
                // TAB;;F0-1-2
                // PANEL;;F0-1-1-2
                // DIV;;F0-1-1-2-1
                // DIV;;F0-1-1-2-1-1-1-1-1
                // GROUP;;F0-1-1-2-1-1
                // DIV;;F0-1-1-2-1-1-1
                // DIV;;F0-1-1-2-1-1-2
                // DIV;;F0-1-1-2-1-1-3
                // DIV;;F0-1-1-2-1-1-4
                // DIV;;F0-1-1-2-1-1-4-1
                // DIV;;F0-1-1-2-1-1-4-2
                // DIV;;F0-1-1-2-1-1-5
                // DIV;;F0-1-1-2-1-1-5-1
                // DIV;;F0-1-1-2-1-1-5-2
                // DIV;;F0-1-1-2-1-1-6
                // DIV;;F0-1-1-2-1-1-6-1
                // DIV;;F0-1-1-2-1-1-6-2
                // DIV;;F0-1-1-2-1-1-7-1
                // DIV;;F0-1-1-2-1-1-7-2
                // DIV;;F0-1-1-2-1-1-8
                // DIV;;F0-1-1-2-1-1-1-1-2
                // GROUP;;F0-1-1-2-1-2
                // DIV;;F0-1-1-2-1-2-1
                // DIV;;F0-1-1-2-1-2-2
                // DIV;;F0-1-1-2-1-2-3
                // DIV;;F0-1-1-2-1-2-4
                // DIV;;F0-1-1-2-1-2-4-1
                // DIV;;F0-1-1-2-1-2-4-2
                // DIV;;F0-1-1-2-1-2-5
                // DIV;;F0-1-1-2-1-2-5-1
                // DIV;;F0-1-1-2-1-2-5-2
                // DIV;;F0-1-1-2-1-2-6
                // DIV;;F0-1-1-2-1-2-6-1
                // DIV;;F0-1-1-2-1-2-6-2
                // DIV;;F0-1-1-2-1-2-7-1
                // DIV;;F0-1-1-2-1-2-7-2
                // DIV;;F0-1-1-2-1-2-8
                // DIV;;F0-1-1-2-1-1-1-1-3
                // GROUP;;F0-1-1-2-1-3
                // DIV;;F0-1-1-2-1-3-1
                // DIV;;F0-1-1-2-1-3-2
                // DIV;;F0-1-1-2-1-3-3
                // DIV;;F0-1-1-2-1-3-4
                // DIV;;F0-1-1-2-1-3-4-1
                // DIV;;F0-1-1-2-1-3-4-2
                // DIV;;F0-1-1-2-1-3-5
                // DIV;;F0-1-1-2-1-3-5-1
                // DIV;;F0-1-1-2-1-3-5-2
                // DIV;;F0-1-1-2-1-3-6
                // DIV;;F0-1-1-2-1-3-6-1
                // DIV;;F0-1-1-2-1-3-6-2
                // DIV;;F0-1-1-2-1-3-7-1
                // DIV;;F0-1-1-2-1-3-7-2
                // DIV;;F0-1-1-2-1-3-8
                // DIV;;F0-1-1-2-2
                // DIV;;F0-1-1-2-1-1-1-1-4
                // GROUP;;F0-1-1-2-2-1
                // DIV;;F0-1-1-2-2-1-1
                // DIV;;F0-1-1-2-2-1-2
                // DIV;;F0-1-1-2-2-1-3
                // DIV;;F0-1-1-2-2-1-4
                // DIV;;F0-1-1-2-2-1-4-1
                // DIV;;F0-1-1-2-2-1-4-2
                // DIV;;F0-1-1-2-2-1-5
                // DIV;;F0-1-1-2-2-1-5-1
                // DIV;;F0-1-1-2-2-1-5-2
                // DIV;;F0-1-1-2-2-1-6
                // DIV;;F0-1-1-2-2-1-6-1
                // DIV;;F0-1-1-2-2-1-6-2
                // DIV;;F0-1-1-2-2-1-7-1
                // DIV;;F0-1-1-2-2-1-7-2
                // DIV;;F0-1-1-2-2-1-8
                if(!tabs2_F0131Api_Valid){
                    $scope.F0131Api.selectTab(1);

                }
                //TAB  F0-1-3-2-1 F0131Api 0
                var tabs1_F0131Api_Valid = true ;
                // FORM;;F0-1-3-2-1-1
                if( $scope.MfOrderForm && !$scope.MfOrderForm.$valid){
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                // FORM;;F0-1-3-2-1-4-0
                if( $scope.isBulkyCargo && !$scope.isBulkyCargo.$valid){
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                // DIV;;F0-1-3-2-1-3
                // FORM;;F0-1-3-2-1-3-1-0
                if( $scope.isHazardForm && !$scope.isHazardForm.$valid){
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                // DIV;;F0-1-3-2-1-2
                // FORM;;F0-1-3-2-1-2-1-0
                if( $scope.isReeferForm && !$scope.isReeferForm.$valid){
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                if(!tabs1_F0131Api_Valid){
                    $scope.F0131Api.selectTab(0);
                    var errF01321s = [];
                    // FORM F0-1-3-2-1-1
                    if( $scope.MfOrderForm && $scope.MfOrderForm.$error){
                        for(var prop in $scope.MfOrderForm.$error){
                            if(angular.isArray($scope.MfOrderForm.$error[prop])){
                                errF01321s = errF01321s.concat($scope.MfOrderForm.$error[prop]);
                            }
                        }
                    }
                    // FORM F0-1-3-2-1-4-0
                    if( $scope.isBulkyCargo && $scope.isBulkyCargo.$error){
                        for(var prop in $scope.isBulkyCargo.$error){
                            if(angular.isArray($scope.isBulkyCargo.$error[prop])){
                                errF01321s = errF01321s.concat($scope.isBulkyCargo.$error[prop]);
                            }
                        }
                    }
                    // DIV F0-1-3-2-1-3
                    // FORM F0-1-3-2-1-3-1-0
                    if( $scope.isHazardForm && $scope.isHazardForm.$error){
                        for(var prop in $scope.isHazardForm.$error){
                            if(angular.isArray($scope.isHazardForm.$error[prop])){
                                errF01321s = errF01321s.concat($scope.isHazardForm.$error[prop]);
                            }
                        }
                    }
                    // DIV F0-1-3-2-1-2
                    // FORM F0-1-3-2-1-2-1-0
                    if( $scope.isReeferForm && $scope.isReeferForm.$error){
                        for(var prop in $scope.isReeferForm.$error){
                            if(angular.isArray($scope.isReeferForm.$error[prop])){
                                errF01321s = errF01321s.concat($scope.isReeferForm.$error[prop]);
                            }
                        }
                    }
                    for(var j=0;j<errF01321s.length;j++){
                        if($("input[name='"+errF01321s[j].$name+"']").parents("div[api]")[0]){
                            var apiName = $("input[name='"+errF01321s[j].$name+"']").parents("div[api]")[0].attributes.api.value;
                            var title = $("input[name='"+errF01321s[j].$name+"']").parents("div[title]")[0].attributes.title.value;
                            $scope[apiName].selectTab(title+"_"+undefined);
                        }
                    }

                }
                if(!$scope.MfOrderFormTop.$valid) //FORM
                    allValidationFlag = false;
                if (!$scope.MfOperationRequireForm.$valid) //FORM
                    allValidationFlag = false;
                var callback = function() { //callback
                    if(allValidationFlag)
                    {
                        var param = $scope.mfOrder;
                        //2 0 persistentSaveType:2null
                        if($scope.f0131ApiF01328Scope.tmOrderToMfOrders)
                            param.tmOrderToMfOrders=$scope.f0131ApiF01328Scope.tmOrderToMfOrders.concat($scope.f0131ApiF01328Scope.tmOrderToMfOrderDeleteds);
                        //2 0 persistentSaveType:2null
                        if($scope.f0131ApiF01325Scope.vbcFreightStatisticss)
                            param.vbcFreightStatistics=$scope.f0131ApiF01325Scope.vbcFreightStatisticss.concat($scope.f0131ApiF01325Scope.vbcFreightStatisticsDeleteds);
                        //2 0 persistentSaveType:2null
                        if($scope.f0131ApiF013210Scope.ciOrders)
                            param.ciOrders=$scope.f0131ApiF013210Scope.ciOrders.concat($scope.f0131ApiF013210Scope.ciOrderDeleteds);
                        //2 0 persistentSaveType:2null
                        if($scope.mfCtnRequests)
                            param.mfCtnRequests=$scope.mfCtnRequests.concat($scope.mfCtnRequestDeleteds);
                        //1 0 persistentSaveType:2null
                        param.mfOrderExtends=$scope.mfOrderExtend;
                        //2 0 persistentSaveType:2null
                        if($scope.mfMultiVessels)
                            param.mfMultiVessels=$scope.mfMultiVessels.concat($scope.mfMultiVesselDeleteds);
                        //2 0 persistentSaveType:2null
                        if($scope.f0131ApiF01325Scope.arBcFreights)
                            param.arBcFreights=$scope.f0131ApiF01325Scope.arBcFreights.concat($scope.f0131ApiF01325Scope.arBcFreightDeleteds);
                        //2 0 persistentSaveType:2null
                        if($scope.f0131ApiF01325Scope.apBcFreights)
                            param.apBcFreights=$scope.f0131ApiF01325Scope.apBcFreights.concat($scope.f0131ApiF01325Scope.apBcFreightDeleteds);
                        //2 0 persistentSaveType:2null
                        if($scope.f0131ApiF013212Scope.imOrders)
                            param.imOrders=$scope.f0131ApiF013212Scope.imOrders.concat($scope.f0131ApiF013212Scope.imOrderDeleteds);
                        //1 0 persistentSaveType:2null
                        param.mfOperationRequires=$scope.mfOperationRequire;
                        //2 3 persistentSaveType:2null
                        if($scope.f0131ApiF01324Scope.bkContainers)
                            param.bkContainers=$scope.f0131ApiF01324Scope.bkContainers.concat($scope.f0131ApiF01324Scope.bkContainerDeleteds);
                        //2 0 persistentSaveType:2null
                        if($scope.f0131ApiF013211Scope.cdOrders)
                            param.cdOrders=$scope.f0131ApiF013211Scope.cdOrders.concat($scope.f0131ApiF013211Scope.cdOrderDeleteds);
                        //2 0 persistentSaveType:2null
                        if($scope.f0131ApiF01323Scope.mfBookingCargos)
                            param.mfBookingCargos=$scope.f0131ApiF01323Scope.mfBookingCargos.concat($scope.f0131ApiF01323Scope.mfBookingCargoDeleteds);
                        var tip = layer.load(0, $config.shadeConfig);
                        $http.post($config.ctx + '/mfOrder/update',param).success(function(data){
                            layer.close(tip);
                            if (data.success != undefined && data.success == true){
                                $scope.mfOrder = data.mfOrder;
                                $scope.confirmAfterUpdate();
                                if($scope.f0131ApiF01322Scope)
                                    $scope.f0131ApiF01322Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF01323Scope)
                                    $scope.f0131ApiF01323Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF01324Scope)
                                    $scope.f0131ApiF01324Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF01325Scope)
                                    $scope.f0131ApiF01325Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF01326Scope)
                                    $scope.f0131ApiF01326Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF01328Scope)
                                    $scope.f0131ApiF01328Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF013210Scope)
                                    $scope.f0131ApiF013210Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF013211Scope)
                                    $scope.f0131ApiF013211Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF013212Scope)
                                    $scope.f0131ApiF013212Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF013213Scope)
                                    $scope.f0131ApiF013213Scope.mfOrder = $scope.mfOrder;

                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //1 0 persistentSaveType:2null
                                $scope.mfOrderExtend = data.mfOrder.mfOrderExtends;
                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //1 0 persistentSaveType:2null
                                $scope.mfOperationRequire = data.mfOrder.mfOperationRequires;
                                //2 3 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象TmOrderToMfOrder
                                if($scope.f0131ApiF01328Scope && $scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid) {
                                    if( $scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid){
                                        if($scope.f0131ApiF01328Scope.TmOrderToMfOrderForm && $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$validator){
                                            $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$validator.reset();
                                            $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid._reset();
                                    $scope.f0131ApiF01328Scope.tmOrderToMfOrders.splice(0,$scope.f0131ApiF01328Scope.tmOrderToMfOrders.length);
                                    $scope.f0131ApiF01328Scope.tmOrderToMfOrder = {};
                                    $scope.f0131ApiF01328Scope.tmOrderToMfOrderDeleteds = [];
                                    $scope.f0131ApiF01328Scope.getTmOrderToMfOrderPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象TmOrderCtnRequestCopy
                                if($scope.f0131ApiF01328Scope && $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid) {
                                    if( $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid){
                                        if($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.formController){
                                            var $validator = $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid,$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopys);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid,$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopys);
                                        }

                                    }
                                    $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid._reset();
                                    $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopys.splice(0,$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopys.length);
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象VbcFreightStatistics
                                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid) {
                                    if( $scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid){
                                        if($scope.f0131ApiF01325Scope.VbcFreightStatisticsForm && $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.$validator){
                                            $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.$validator.reset();
                                            $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid._reset();
                                    $scope.f0131ApiF01325Scope.vbcFreightStatisticss.splice(0,$scope.f0131ApiF01325Scope.vbcFreightStatisticss.length);
                                    $scope.f0131ApiF01325Scope.vbcFreightStatistics = {};
                                    $scope.f0131ApiF01325Scope.vbcFreightStatisticsDeleteds = [];
                                    $scope.f0131ApiF01325Scope.getVbcFreightStatisticsPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CiOrder
                                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderGrid) {
                                    if( $scope.f0131ApiF013210Scope.ciOrderGrid){
                                        if($scope.f0131ApiF013210Scope.CiOrderForm && $scope.f0131ApiF013210Scope.CiOrderForm.$validator){
                                            $scope.f0131ApiF013210Scope.CiOrderForm.$validator.reset();
                                            $scope.f0131ApiF013210Scope.CiOrderForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF013210Scope.ciOrderGrid._reset();
                                    $scope.f0131ApiF013210Scope.ciOrders.splice(0,$scope.f0131ApiF013210Scope.ciOrders.length);
                                    $scope.f0131ApiF013210Scope.ciOrder = {};
                                    $scope.f0131ApiF013210Scope.ciOrderDeleteds = [];
                                    $scope.f0131ApiF013210Scope.getCiOrderPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CiOrderDocAttach
                                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid) {
                                    if( $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid){
                                        if($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController){
                                            var $validator = $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid,$scope.f0131ApiF013210Scope.ciOrderDocAttachs);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid,$scope.f0131ApiF013210Scope.ciOrderDocAttachs);
                                        }

                                    }
                                    $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid._reset();
                                    $scope.f0131ApiF013210Scope.ciOrderDocAttachs.splice(0,$scope.f0131ApiF013210Scope.ciOrderDocAttachs.length);
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CiOrderCargo
                                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderCargoGrid) {
                                    if( $scope.f0131ApiF013210Scope.ciOrderCargoGrid){
                                        if($scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController){
                                            var $validator = $scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF013210Scope.ciOrderCargoGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderCargoGrid,$scope.f0131ApiF013210Scope.ciOrderCargos);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderCargoGrid,$scope.f0131ApiF013210Scope.ciOrderCargos);
                                        }

                                    }
                                    $scope.f0131ApiF013210Scope.ciOrderCargoGrid._reset();
                                    $scope.f0131ApiF013210Scope.ciOrderCargos.splice(0,$scope.f0131ApiF013210Scope.ciOrderCargos.length);
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CiOrderDocument
                                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderDocumentGrid) {
                                    if( $scope.f0131ApiF013210Scope.ciOrderDocumentGrid){
                                        if($scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController){
                                            var $validator = $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF013210Scope.ciOrderDocumentGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocumentGrid,$scope.f0131ApiF013210Scope.ciOrderDocuments);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocumentGrid,$scope.f0131ApiF013210Scope.ciOrderDocuments);
                                        }

                                    }
                                    $scope.f0131ApiF013210Scope.ciOrderDocumentGrid._reset();
                                    $scope.f0131ApiF013210Scope.ciOrderDocuments.splice(0,$scope.f0131ApiF013210Scope.ciOrderDocuments.length);
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象MfCtnRequest
                                if($scope && $scope.mfCtnRequestGrid) {
                                    if( $scope.mfCtnRequestGrid){
                                        if($scope.mfCtnRequestGrid.formController){
                                            var $validator = $scope.mfCtnRequestGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.mfCtnRequestGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.mfCtnRequestGrid,$scope.mfCtnRequests);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.mfCtnRequestGrid,$scope.mfCtnRequests);
                                        }

                                    }
                                    $scope.mfCtnRequestGrid._reset();
                                    $scope.mfCtnRequests.splice(0,$scope.mfCtnRequests.length);
                                    $scope.mfCtnRequest = {};
                                    $scope.mfCtnRequestDeleteds = [];
                                    $scope.getMfCtnRequestPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //界面布局不存在MfOrderExtend表格。。
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象MfMultiVessel
                                if($scope && $scope.mfMultiVesselGrid) {
                                    if( $scope.mfMultiVesselGrid){
                                        if($scope.mfMultiVesselGrid.formController){
                                            var $validator = $scope.mfMultiVesselGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.mfMultiVesselGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.mfMultiVesselGrid,$scope.mfMultiVessels);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.mfMultiVesselGrid,$scope.mfMultiVessels);
                                        }

                                    }
                                    $scope.mfMultiVesselGrid._reset();
                                    $scope.mfMultiVessels.splice(0,$scope.mfMultiVessels.length);
                                    $scope.mfMultiVessel = {};
                                    $scope.mfMultiVesselDeleteds = [];
                                    $scope.getMfMultiVesselPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象ArBcFreight
                                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.arBcFreightGrid) {
                                    if( $scope.f0131ApiF01325Scope.arBcFreightGrid){
                                        if($scope.f0131ApiF01325Scope.arBcFreightGrid.formController){
                                            var $validator = $scope.f0131ApiF01325Scope.arBcFreightGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF01325Scope.arBcFreightGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.arBcFreightGrid,$scope.f0131ApiF01325Scope.arBcFreights);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.arBcFreightGrid,$scope.f0131ApiF01325Scope.arBcFreights);
                                        }

                                    }
                                    $scope.f0131ApiF01325Scope.arBcFreightGrid._reset();
                                    $scope.f0131ApiF01325Scope.arBcFreights.splice(0,$scope.f0131ApiF01325Scope.arBcFreights.length);
                                    $scope.f0131ApiF01325Scope.arBcFreight = {};
                                    $scope.f0131ApiF01325Scope.arBcFreightDeleteds = [];
                                    $scope.f0131ApiF01325Scope.getArBcFreightPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象ApBcFreight
                                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.apBcFreightGrid) {
                                    if( $scope.f0131ApiF01325Scope.apBcFreightGrid){
                                        if($scope.f0131ApiF01325Scope.apBcFreightGrid.formController){
                                            var $validator = $scope.f0131ApiF01325Scope.apBcFreightGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF01325Scope.apBcFreightGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.apBcFreightGrid,$scope.f0131ApiF01325Scope.apBcFreights);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.apBcFreightGrid,$scope.f0131ApiF01325Scope.apBcFreights);
                                        }

                                    }
                                    $scope.f0131ApiF01325Scope.apBcFreightGrid._reset();
                                    $scope.f0131ApiF01325Scope.apBcFreights.splice(0,$scope.f0131ApiF01325Scope.apBcFreights.length);
                                    $scope.f0131ApiF01325Scope.apBcFreight = {};
                                    $scope.f0131ApiF01325Scope.apBcFreightDeleteds = [];
                                    $scope.f0131ApiF01325Scope.getApBcFreightPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象ImOrder
                                if($scope.f0131ApiF013212Scope && $scope.f0131ApiF013212Scope.imOrderGrid) {
                                    if( $scope.f0131ApiF013212Scope.imOrderGrid){
                                        if($scope.f0131ApiF013212Scope.ImOrderForm && $scope.f0131ApiF013212Scope.ImOrderForm.$validator){
                                            $scope.f0131ApiF013212Scope.ImOrderForm.$validator.reset();
                                            $scope.f0131ApiF013212Scope.ImOrderForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF013212Scope.imOrderGrid._reset();
                                    $scope.f0131ApiF013212Scope.imOrders.splice(0,$scope.f0131ApiF013212Scope.imOrders.length);
                                    $scope.f0131ApiF013212Scope.imOrder = {};
                                    $scope.f0131ApiF013212Scope.imOrderDeleteds = [];
                                    $scope.f0131ApiF013212Scope.getImOrderPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //界面布局不存在MfOperationRequire表格。。
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象BkContainer
                                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.bkContainerGrid) {
                                    if( $scope.f0131ApiF01324Scope.bkContainerGrid){
                                        if($scope.f0131ApiF01324Scope.bkContainerGrid.formController){
                                            var $validator = $scope.f0131ApiF01324Scope.bkContainerGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF01324Scope.bkContainerGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.bkContainerGrid,$scope.f0131ApiF01324Scope.bkContainers);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.bkContainerGrid,$scope.f0131ApiF01324Scope.bkContainers);
                                        }

                                    }
                                    $scope.f0131ApiF01324Scope.bkContainerGrid._reset();
                                    $scope.f0131ApiF01324Scope.bkContainers.splice(0,$scope.f0131ApiF01324Scope.bkContainers.length);
                                    $scope.f0131ApiF01324Scope.bkContainer = {};
                                    $scope.f0131ApiF01324Scope.bkContainerDeleteds = [];
                                    $scope.f0131ApiF01324Scope.getBkContainerPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象MfContainer2Cargo
                                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.mfContainer2CargoGrid) {
                                    if( $scope.f0131ApiF01324Scope.mfContainer2CargoGrid){
                                        if($scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController){
                                            var $validator = $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF01324Scope.mfContainer2CargoGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.mfContainer2CargoGrid,$scope.f0131ApiF01324Scope.mfContainer2Cargos);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.mfContainer2CargoGrid,$scope.f0131ApiF01324Scope.mfContainer2Cargos);
                                        }

                                    }
                                    $scope.f0131ApiF01324Scope.mfContainer2CargoGrid._reset();
                                    $scope.f0131ApiF01324Scope.mfContainer2Cargos.splice(0,$scope.f0131ApiF01324Scope.mfContainer2Cargos.length);
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CdOrder
                                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrderGrid) {
                                    if( $scope.f0131ApiF013211Scope.cdOrderGrid){
                                        if($scope.f0131ApiF013211Scope.CdOrderForm && $scope.f0131ApiF013211Scope.CdOrderForm.$validator){
                                            $scope.f0131ApiF013211Scope.CdOrderForm.$validator.reset();
                                            $scope.f0131ApiF013211Scope.CdOrderForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF013211Scope.cdOrderGrid._reset();
                                    $scope.f0131ApiF013211Scope.cdOrders.splice(0,$scope.f0131ApiF013211Scope.cdOrders.length);
                                    $scope.f0131ApiF013211Scope.cdOrder = {};
                                    $scope.f0131ApiF013211Scope.cdOrderDeleteds = [];
                                    $scope.f0131ApiF013211Scope.getCdOrderPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CdOrder2Ctn
                                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrder2CtnGrid) {
                                    if( $scope.f0131ApiF013211Scope.cdOrder2CtnGrid){
                                        if($scope.f0131ApiF013211Scope.CdOrder2CtnForm && $scope.f0131ApiF013211Scope.CdOrder2CtnForm.$validator){
                                            $scope.f0131ApiF013211Scope.CdOrder2CtnForm.$validator.reset();
                                            $scope.f0131ApiF013211Scope.CdOrder2CtnForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF013211Scope.cdOrder2CtnGrid._reset();
                                    $scope.f0131ApiF013211Scope.cdOrder2Ctns.splice(0,$scope.f0131ApiF013211Scope.cdOrder2Ctns.length);
//					$scope.f0131ApiF013211Scope.cdOrder2Ctn = {};
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CdOrderDocument
                                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrderDocumentGrid) {
                                    if( $scope.f0131ApiF013211Scope.cdOrderDocumentGrid){
                                        if($scope.f0131ApiF013211Scope.CdOrderDocumentForm && $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator){
                                            $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator.reset();
                                            $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF013211Scope.cdOrderDocumentGrid._reset();
                                    $scope.f0131ApiF013211Scope.cdOrderDocuments.splice(0,$scope.f0131ApiF013211Scope.cdOrderDocuments.length);
//					$scope.f0131ApiF013211Scope.cdOrderDocument = {};
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CdOrderCargo
                                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrderCargoGrid) {
                                    if( $scope.f0131ApiF013211Scope.cdOrderCargoGrid){
                                        if($scope.f0131ApiF013211Scope.CdOrderCargoForm && $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator){
                                            $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator.reset();
                                            $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF013211Scope.cdOrderCargoGrid._reset();
                                    $scope.f0131ApiF013211Scope.cdOrderCargos.splice(0,$scope.f0131ApiF013211Scope.cdOrderCargos.length);
//					$scope.f0131ApiF013211Scope.cdOrderCargo = {};
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象MfBookingCargo
                                if($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargoGrid) {
                                    if( $scope.f0131ApiF01323Scope.mfBookingCargoGrid){
                                        if($scope.f0131ApiF01323Scope.MfBookingCargoForm && $scope.f0131ApiF01323Scope.MfBookingCargoForm.$validator){
                                            $scope.f0131ApiF01323Scope.MfBookingCargoForm.$validator.reset();
                                            $scope.f0131ApiF01323Scope.MfBookingCargoForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF01323Scope.mfBookingCargoGrid._reset();
                                    $scope.f0131ApiF01323Scope.mfBookingCargos.splice(0,$scope.f0131ApiF01323Scope.mfBookingCargos.length);
                                    $scope.f0131ApiF01323Scope.mfBookingCargo = {};
                                    $scope.f0131ApiF01323Scope.mfBookingCargoDeleteds = [];
                                    $scope.f0131ApiF01323Scope.getMfBookingCargoPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                if($scope._pageState) $scope._pageState.resetDataState();
                                //TODO linjx  generatorMethodExtendCallBacks
                                //S   2   execContent:generateGoOrder4MFE
                                //S   2   execContent:getOrderProcedureMFE
                                GillionMsg.alert("提示",data.msg,null);
                                var indexScope = top.angular.element("body").scope();
                                indexScope.refresh($scope.openType,"MfOrder");
                            }
                        });
                    }
                }//callback
                var gridRequiresPromises = [];
                if($scope.mfCtnRequestGrid && $scope.mfCtnRequestGrid.tbody.rows[0]){
                    var mfCtnRequestRequiresPromise = $scope.mfCtnRequestGrid.verifySourceRequires();
                    gridRequiresPromises.push(mfCtnRequestRequiresPromise);
                }
                if($scope.mfMultiVesselGrid && $scope.mfMultiVesselGrid.tbody.rows[0]){
                    var mfMultiVesselRequiresPromise = $scope.mfMultiVesselGrid.verifySourceRequires();
                    gridRequiresPromises.push(mfMultiVesselRequiresPromise);
                }
                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.bkContainerGrid && $scope.f0131ApiF01324Scope.bkContainerGrid.tbody.rows[0]){
                    var bkContainerRequiresPromise = $scope.f0131ApiF01324Scope.bkContainerGrid.verifySourceRequires();
                    gridRequiresPromises.push(bkContainerRequiresPromise);
                }
                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.mfContainer2CargoGrid && $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.tbody.rows[0]){
                    var mfContainer2CargoRequiresPromise = $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.verifySourceRequires();
                    gridRequiresPromises.push(mfContainer2CargoRequiresPromise);
                }
                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.arBcFreightGrid && $scope.f0131ApiF01324Scope.arBcFreightGrid.tbody.rows[0]){
                    var arBcFreightRequiresPromise = $scope.f0131ApiF01324Scope.arBcFreightGrid.verifySourceRequires();
                    gridRequiresPromises.push(arBcFreightRequiresPromise);
                }
                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.apBcFreightGrid && $scope.f0131ApiF01324Scope.apBcFreightGrid.tbody.rows[0]){
                    var apBcFreightRequiresPromise = $scope.f0131ApiF01324Scope.apBcFreightGrid.verifySourceRequires();
                    gridRequiresPromises.push(apBcFreightRequiresPromise);
                }
                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.arBcFreightGrid && $scope.f0131ApiF01325Scope.arBcFreightGrid.tbody.rows[0]){
                    var arBcFreightRequiresPromise = $scope.f0131ApiF01325Scope.arBcFreightGrid.verifySourceRequires();
                    gridRequiresPromises.push(arBcFreightRequiresPromise);
                }
                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.apBcFreightGrid && $scope.f0131ApiF01325Scope.apBcFreightGrid.tbody.rows[0]){
                    var apBcFreightRequiresPromise = $scope.f0131ApiF01325Scope.apBcFreightGrid.verifySourceRequires();
                    gridRequiresPromises.push(apBcFreightRequiresPromise);
                }
                if($scope.f0131ApiF01328Scope && $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid && $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.tbody.rows[0]){
                    var tmOrderCtnRequestCopyRequiresPromise = $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.verifySourceRequires();
                    gridRequiresPromises.push(tmOrderCtnRequestCopyRequiresPromise);
                }
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid && $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.tbody.rows[0]){
                    var ciOrderDocAttachRequiresPromise = $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.verifySourceRequires();
                    gridRequiresPromises.push(ciOrderDocAttachRequiresPromise);
                }
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderDocumentGrid && $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.tbody.rows[0]){
                    var ciOrderDocumentRequiresPromise = $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.verifySourceRequires();
                    gridRequiresPromises.push(ciOrderDocumentRequiresPromise);
                }
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderCargoGrid && $scope.f0131ApiF013210Scope.ciOrderCargoGrid.tbody.rows[0]){
                    var ciOrderCargoRequiresPromise = $scope.f0131ApiF013210Scope.ciOrderCargoGrid.verifySourceRequires();
                    gridRequiresPromises.push(ciOrderCargoRequiresPromise);
                }
                if(gridRequiresPromises && gridRequiresPromises.length>0) {
                    $q.all(gridRequiresPromises).then(function() {
                        callback();
                    }).catch(function(result) {
                        console.log("数据校验未通过！");
                        //TABS F0-1-3-1
                        //TAB y F0-1-3-2-10 F0131Api 0
                        var tabs10_F0131Api_Require_Valid = true ;
                        if($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid && $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController){
                            if(!$scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController.$valid || $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.$$requireGridValid;
                                tabs10_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.f0131ApiF013210Scope.ciOrderDocumentGrid && $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController){
                            if(!$scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController.$valid || $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.$$requireGridValid;
                                tabs10_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.f0131ApiF013210Scope.ciOrderCargoGrid && $scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController){
                            if(!$scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController.$valid || $scope.f0131ApiF013210Scope.ciOrderCargoGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF013210Scope.ciOrderCargoGrid.$$requireGridValid;
                                tabs10_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if(!tabs10_F0131Api_Require_Valid){
                            $scope.F0131Api.selectTab(9);
                        }
                        //TAB y F0-1-3-2-8 F0131Api 0
                        var tabs8_F0131Api_Require_Valid = true ;
                        if($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid && $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.formController){
                            if(!$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.formController.$valid || $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.$$requireGridValid;
                                tabs8_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if(!tabs8_F0131Api_Require_Valid){
                            $scope.F0131Api.selectTab(7);
                        }
                        //TAB y F0-1-3-2-5 F0131Api 0
                        var tabs5_F0131Api_Require_Valid = true ;
                        if($scope.f0131ApiF01325Scope.arBcFreightGrid && $scope.f0131ApiF01325Scope.arBcFreightGrid.formController){
                            if(!$scope.f0131ApiF01325Scope.arBcFreightGrid.formController.$valid || $scope.f0131ApiF01325Scope.arBcFreightGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01325Scope.arBcFreightGrid.$$requireGridValid;
                                tabs5_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.f0131ApiF01325Scope.apBcFreightGrid && $scope.f0131ApiF01325Scope.apBcFreightGrid.formController){
                            if(!$scope.f0131ApiF01325Scope.apBcFreightGrid.formController.$valid || $scope.f0131ApiF01325Scope.apBcFreightGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01325Scope.apBcFreightGrid.$$requireGridValid;
                                tabs5_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if(!tabs5_F0131Api_Require_Valid){
                            $scope.F0131Api.selectTab(4);
                        }
                        //TAB y F0-1-3-2-4 F0131Api 0
                        var tabs4_F0131Api_Require_Valid = true ;
                        if($scope.f0131ApiF01324Scope.bkContainerGrid && $scope.f0131ApiF01324Scope.bkContainerGrid.formController){
                            if(!$scope.f0131ApiF01324Scope.bkContainerGrid.formController.$valid || $scope.f0131ApiF01324Scope.bkContainerGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01324Scope.bkContainerGrid.$$requireGridValid;
                                tabs4_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.f0131ApiF01324Scope.mfContainer2CargoGrid && $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController){
                            if(!$scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController.$valid || $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.$$requireGridValid;
                                tabs4_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.f0131ApiF01324Scope.arBcFreightGrid && $scope.f0131ApiF01324Scope.arBcFreightGrid.formController){
                            if(!$scope.f0131ApiF01324Scope.arBcFreightGrid.formController.$valid || $scope.f0131ApiF01324Scope.arBcFreightGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01324Scope.arBcFreightGrid.$$requireGridValid;
                                tabs4_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.f0131ApiF01324Scope.apBcFreightGrid && $scope.f0131ApiF01324Scope.apBcFreightGrid.formController){
                            if(!$scope.f0131ApiF01324Scope.apBcFreightGrid.formController.$valid || $scope.f0131ApiF01324Scope.apBcFreightGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01324Scope.apBcFreightGrid.$$requireGridValid;
                                tabs4_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if(!tabs4_F0131Api_Require_Valid){
                            $scope.F0131Api.selectTab(3);
                        }
                        //TAB y F0-1-3-2-1 F0131Api 0
                        var tabs1_F0131Api_Require_Valid = true ;
                        if($scope.mfCtnRequestGrid && $scope.mfCtnRequestGrid.formController){
                            if(!$scope.mfCtnRequestGrid.formController.$valid || $scope.mfCtnRequestGrid.$$requireGridValid==false){
                                delete $scope.mfCtnRequestGrid.$$requireGridValid;
                                tabs1_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.mfMultiVesselGrid && $scope.mfMultiVesselGrid.formController){
                            if(!$scope.mfMultiVesselGrid.formController.$valid || $scope.mfMultiVesselGrid.$$requireGridValid==false){
                                delete $scope.mfMultiVesselGrid.$$requireGridValid;
                                tabs1_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if(!tabs1_F0131Api_Require_Valid){
                            $scope.F0131Api.selectTab(0);
                        }
                    }).finally(function(result) {
                        console.log("执行表格非空校验.");
                    });
                } else {
                    callback();
                }


                if($scope.f0131ApiF01322Scope&&$scope.f0131ApiF01322Scope.resetPageStatus)
                    $scope.f0131ApiF01322Scope.resetPageStatus();
                if($scope.f0131ApiF01324Scope&&$scope.f0131ApiF01324Scope.resetPageStatus)
                    $scope.f0131ApiF01324Scope.resetPageStatus();
                if($scope.f0131ApiF01325Scope&&$scope.f0131ApiF01325Scope.resetPageStatus)
                    $scope.f0131ApiF01325Scope.resetPageStatus();
                if($scope.f0131ApiF01328Scope&&$scope.f0131ApiF01328Scope.resetPageStatus)
                    $scope.f0131ApiF01328Scope.resetPageStatus();
            };

            /**
             * 保存 海运出口制作
             */
            $scope.save = function(){
                //校验联想控件是否初始化完
                if(!$scope._associateInitValid($scope)){
                    return ;
                }
                //haveTabLoadSupport : X
                $scope.bindTabProp('f0131ApiF01322Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01322Url) || {});
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                $scope.bindTabProp('f0131ApiF01324Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01324Url) || {});
                $scope.bindTabProp('f0131ApiF01325Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01325Url) || {});
                $scope.bindTabProp('f0131ApiF01326Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01326Url) || {});
                $scope.bindTabProp('f0131ApiF01328Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01328Url) || {});
                $scope.bindTabProp('f0131ApiF013210Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF013210Url) || {});
                $scope.bindTabProp('f0131ApiF013211Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF013211Url) || {});
                $scope.bindTabProp('f0131ApiF013212Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF013212Url) || {});
                $scope.bindTabProp('f0131ApiF013213Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF013213Url) || {});
                //generatorSubBoGridClear isNewConfig:Y
                //子对象TmOrderToMfOrder
                if($scope.f0131ApiF01328Scope && $scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid) {
                    if($scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid && $scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid.formController && $scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid.formController){
                        if($scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid,$scope.f0131ApiF01328Scope.tmOrderToMfOrders);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid,$scope.f0131ApiF01328Scope.tmOrderToMfOrders);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象TmOrderCtnRequestCopy
                if($scope.f0131ApiF01328Scope && $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid) {
                    if( $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid){
                        if($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.formController){
                            var $validator = $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.formController.$validator;
                            if($validator){
                                $validator.disable();
                                $validator.reset();
                            }

                            //$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.finishEdit();
                            $scope._finishEditGridWrap($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid,$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopys);

                            if($validator){
                                $validator.enable();
                            }
                        }else{
                            $scope._finishEditGridWrap($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid,$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopys);
                        }

                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象VbcFreightStatistics
                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid) {
                    if($scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid && $scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid.formController && $scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid.formController){
                        if($scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid,$scope.f0131ApiF01325Scope.vbcFreightStatisticss);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid,$scope.f0131ApiF01325Scope.vbcFreightStatisticss);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CiOrder
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderGrid) {
                    if($scope.f0131ApiF013210Scope.ciOrderGrid && $scope.f0131ApiF013210Scope.ciOrderGrid.formController && $scope.f0131ApiF013210Scope.ciOrderGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF013210Scope.ciOrderGrid.formController){
                        if($scope.f0131ApiF013210Scope.ciOrderGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderGrid,$scope.f0131ApiF013210Scope.ciOrders);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderGrid,$scope.f0131ApiF013210Scope.ciOrders);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CiOrderDocAttach
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid) {
                    if( $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid){
                        if($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController){
                            var $validator = $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController.$validator;
                            if($validator){
                                $validator.disable();
                                $validator.reset();
                            }

                            //$scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.finishEdit();
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid,$scope.f0131ApiF013210Scope.ciOrderDocAttachs);

                            if($validator){
                                $validator.enable();
                            }
                        }else{
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid,$scope.f0131ApiF013210Scope.ciOrderDocAttachs);
                        }

                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CiOrderCargo
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderCargoGrid) {
                    if( $scope.f0131ApiF013210Scope.ciOrderCargoGrid){
                        if($scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController){
                            var $validator = $scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController.$validator;
                            if($validator){
                                $validator.disable();
                                $validator.reset();
                            }

                            //$scope.f0131ApiF013210Scope.ciOrderCargoGrid.finishEdit();
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderCargoGrid,$scope.f0131ApiF013210Scope.ciOrderCargos);

                            if($validator){
                                $validator.enable();
                            }
                        }else{
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderCargoGrid,$scope.f0131ApiF013210Scope.ciOrderCargos);
                        }

                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CiOrderDocument
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderDocumentGrid) {
                    if( $scope.f0131ApiF013210Scope.ciOrderDocumentGrid){
                        if($scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController){
                            var $validator = $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController.$validator;
                            if($validator){
                                $validator.disable();
                                $validator.reset();
                            }

                            //$scope.f0131ApiF013210Scope.ciOrderDocumentGrid.finishEdit();
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocumentGrid,$scope.f0131ApiF013210Scope.ciOrderDocuments);

                            if($validator){
                                $validator.enable();
                            }
                        }else{
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocumentGrid,$scope.f0131ApiF013210Scope.ciOrderDocuments);
                        }

                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象MfCtnRequest
                if($scope && $scope.mfCtnRequestGrid) {
                    if($scope.mfCtnRequestGrid && $scope.mfCtnRequestGrid.formController && $scope.mfCtnRequestGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.mfCtnRequestGrid.formController){
                        if($scope.mfCtnRequestGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.mfCtnRequestGrid,$scope.mfCtnRequests);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.mfCtnRequestGrid,$scope.mfCtnRequests);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //界面布局不存在MfOrderExtend表格。。
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象MfMultiVessel
                if($scope && $scope.mfMultiVesselGrid) {
                    if($scope.mfMultiVesselGrid && $scope.mfMultiVesselGrid.formController && $scope.mfMultiVesselGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.mfMultiVesselGrid.formController){
                        if($scope.mfMultiVesselGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.mfMultiVesselGrid,$scope.mfMultiVessels);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.mfMultiVesselGrid,$scope.mfMultiVessels);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象ArBcFreight
                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.arBcFreightGrid) {
                    if($scope.f0131ApiF01325Scope.arBcFreightGrid && $scope.f0131ApiF01325Scope.arBcFreightGrid.formController && $scope.f0131ApiF01325Scope.arBcFreightGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF01325Scope.arBcFreightGrid.formController){
                        if($scope.f0131ApiF01325Scope.arBcFreightGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.arBcFreightGrid,$scope.f0131ApiF01325Scope.arBcFreights);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.arBcFreightGrid,$scope.f0131ApiF01325Scope.arBcFreights);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象ApBcFreight
                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.apBcFreightGrid) {
                    if($scope.f0131ApiF01325Scope.apBcFreightGrid && $scope.f0131ApiF01325Scope.apBcFreightGrid.formController && $scope.f0131ApiF01325Scope.apBcFreightGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF01325Scope.apBcFreightGrid.formController){
                        if($scope.f0131ApiF01325Scope.apBcFreightGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.apBcFreightGrid,$scope.f0131ApiF01325Scope.apBcFreights);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.apBcFreightGrid,$scope.f0131ApiF01325Scope.apBcFreights);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象ImOrder
                if($scope.f0131ApiF013212Scope && $scope.f0131ApiF013212Scope.imOrderGrid) {
                    if($scope.f0131ApiF013212Scope.imOrderGrid && $scope.f0131ApiF013212Scope.imOrderGrid.formController && $scope.f0131ApiF013212Scope.imOrderGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF013212Scope.imOrderGrid.formController){
                        if($scope.f0131ApiF013212Scope.imOrderGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF013212Scope.imOrderGrid,$scope.f0131ApiF013212Scope.imOrders);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF013212Scope.imOrderGrid,$scope.f0131ApiF013212Scope.imOrders);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //界面布局不存在MfOperationRequire表格。。
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象BkContainer
                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.bkContainerGrid) {
                    if($scope.f0131ApiF01324Scope.bkContainerGrid && $scope.f0131ApiF01324Scope.bkContainerGrid.formController && $scope.f0131ApiF01324Scope.bkContainerGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF01324Scope.bkContainerGrid.formController){
                        if($scope.f0131ApiF01324Scope.bkContainerGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.bkContainerGrid,$scope.f0131ApiF01324Scope.bkContainers);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.bkContainerGrid,$scope.f0131ApiF01324Scope.bkContainers);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象MfContainer2Cargo
                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.mfContainer2CargoGrid) {
                    if( $scope.f0131ApiF01324Scope.mfContainer2CargoGrid){
                        if($scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController){
                            var $validator = $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController.$validator;
                            if($validator){
                                $validator.disable();
                                $validator.reset();
                            }

                            //$scope.f0131ApiF01324Scope.mfContainer2CargoGrid.finishEdit();
                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.mfContainer2CargoGrid,$scope.f0131ApiF01324Scope.mfContainer2Cargos);

                            if($validator){
                                $validator.enable();
                            }
                        }else{
                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.mfContainer2CargoGrid,$scope.f0131ApiF01324Scope.mfContainer2Cargos);
                        }

                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CdOrder
                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrderGrid) {
                    if($scope.f0131ApiF013211Scope.cdOrderGrid && $scope.f0131ApiF013211Scope.cdOrderGrid.formController && $scope.f0131ApiF013211Scope.cdOrderGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF013211Scope.cdOrderGrid.formController){
                        if($scope.f0131ApiF013211Scope.cdOrderGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF013211Scope.cdOrderGrid,$scope.f0131ApiF013211Scope.cdOrders);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF013211Scope.cdOrderGrid,$scope.f0131ApiF013211Scope.cdOrders);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CdOrder2Ctn
                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrder2CtnGrid) {
                    if( $scope.f0131ApiF013211Scope.cdOrder2CtnGrid){
                        if($scope.f0131ApiF013211Scope.CdOrder2CtnForm && $scope.f0131ApiF013211Scope.CdOrder2CtnForm.$validator){
                            $scope.f0131ApiF013211Scope.CdOrder2CtnForm.$validator.reset();
                            $scope.f0131ApiF013211Scope.CdOrder2CtnForm.$validator.disable();
                        }
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CdOrderDocument
                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrderDocumentGrid) {
                    if( $scope.f0131ApiF013211Scope.cdOrderDocumentGrid){
                        if($scope.f0131ApiF013211Scope.CdOrderDocumentForm && $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator){
                            $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator.reset();
                            $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator.disable();
                        }
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CdOrderCargo
                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrderCargoGrid) {
                    if( $scope.f0131ApiF013211Scope.cdOrderCargoGrid){
                        if($scope.f0131ApiF013211Scope.CdOrderCargoForm && $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator){
                            $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator.reset();
                            $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator.disable();
                        }
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象MfBookingCargo
                if($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargoGrid) {
                    if($scope.f0131ApiF01323Scope.mfBookingCargoGrid && $scope.f0131ApiF01323Scope.mfBookingCargoGrid.formController && $scope.f0131ApiF01323Scope.mfBookingCargoGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF01323Scope.mfBookingCargoGrid.formController){
                        if($scope.f0131ApiF01323Scope.mfBookingCargoGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF01323Scope.mfBookingCargoGrid,$scope.f0131ApiF01323Scope.mfBookingCargos);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF01323Scope.mfBookingCargoGrid,$scope.f0131ApiF01323Scope.mfBookingCargos);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                if($scope.MfOrderFormTop && $scope.MfOrderFormTop.$validator && $scope.MfOrderFormTop.verify && $scope.mfOrder && $scope.mfOrder.hasOwnProperty('mfOrderId')){
                    $scope.MfOrderFormTop.$validator.enable();
                    $scope.MfOrderFormTop.verify();
                }
                if ($scope.MfOperationRequireForm && $scope.MfOperationRequireForm.$validator && $scope.MfOperationRequireForm.verify && $scope.mfOrder && $scope.mfOrder.hasOwnProperty('mfOrderId')) {
                    $scope.MfOperationRequireForm.$validator.enable();
                    $scope.MfOperationRequireForm.verify();
                }
                if($scope.MfOrderForm && $scope.MfOrderForm.$validator && $scope.MfOrderForm.verify && $scope.mfOrder && $scope.mfOrder.hasOwnProperty('mfOrderId')){
                    $scope.MfOrderForm.$validator.enable();
                    $scope.MfOrderForm.verify();
                }
                if($scope.isBulkyCargo && $scope.isBulkyCargo.$validator && $scope.isBulkyCargo.verify && $scope.mfOrder && $scope.mfOrder.hasOwnProperty('mfOrderId')){
                    $scope.isBulkyCargo.$validator.enable();
                    $scope.isBulkyCargo.verify();
                }
                if($scope.isHazardForm && $scope.isHazardForm.$validator && $scope.isHazardForm.verify && $scope.mfOrder && $scope.mfOrder.hasOwnProperty('mfOrderId')){
                    $scope.isHazardForm.$validator.enable();
                    $scope.isHazardForm.verify();
                }
                if($scope.isReeferForm && $scope.isReeferForm.$validator && $scope.isReeferForm.verify && $scope.mfOrder && $scope.mfOrder.hasOwnProperty('mfOrderId')){
                    $scope.isReeferForm.$validator.enable();
                    $scope.isReeferForm.verify();
                }
                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.CdOrder2Ctn && $scope.f0131ApiF013211Scope.CdOrder2Ctn.$validator && $scope.f0131ApiF013211Scope.CdOrder2Ctn.verify && $scope.f0131ApiF013211Scope.mfOrder && $scope.f0131ApiF013211Scope.mfOrder.hasOwnProperty('mfOrderId')){
                    $scope.f0131ApiF013211Scope.CdOrder2Ctn.$validator.enable();
                    $scope.f0131ApiF013211Scope.CdOrder2Ctn.verify();
                }
                var allValidationFlag = true ;
                //TABS F0-1-3-1
                //TAB  F0-1-3-2-13 F0131Api 0
                var tabs13_F0131Api_Valid = true ;
                if(!tabs13_F0131Api_Valid){
                    $scope.F0131Api.selectTab(12);

                }
                //TAB  F0-1-3-2-12 F0131Api 0
                var tabs12_F0131Api_Valid = true ;
                // DIV;;F0-1-3-2-12-1
                // DIV;GRID;F0-1-3-2-12-1-1
                if ($scope.f0131ApiF01322Scope.mfOrderExtend  && $scope.f0131ApiF01322Scope.MfOrderExtendForm) {
                    if ($scope.f0131ApiF01322Scope.MfOrderExtendForm.$validator && $scope.f0131ApiF01322Scope.MfOrderExtendForm.verify) {
                        $scope.f0131ApiF01322Scope.MfOrderExtendForm.$validator.enable();
                        $scope.f0131ApiF01322Scope.MfOrderExtendForm.verify();
                    }
                    if (!$scope.f0131ApiF01322Scope.MfOrderExtendForm.$valid) {
                        tabs11_F0131Api_Valid = false;
                        allValidationFlag = false;
                    }
                }
                if($scope.f0131ApiF013212Scope.imOrder && $scope.f0131ApiF013212Scope.imOrder.imOrderId && $scope.f0131ApiF013212Scope.ImOrderForm){
                    if($scope.f0131ApiF013212Scope.ImOrderForm.$validator && $scope.f0131ApiF013212Scope.ImOrderForm.verify){
                        $scope.f0131ApiF013212Scope.ImOrderForm.$validator.enable();
                        $scope.f0131ApiF013212Scope.ImOrderForm.verify();
                    }
                    if(!$scope.f0131ApiF013212Scope.ImOrderForm.$valid){
                        tabs12_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;GRID_TOOLBAR;F0-1-3-2-12-1-2
                // DIV;FORM_CELL;F0-1-3-2-12-1-3
                if(!tabs12_F0131Api_Valid){
                    $scope.F0131Api.selectTab(11);

                }
                //TAB  F0-1-3-2-11 F0131Api 0
                var tabs11_F0131Api_Valid = true ;
                // DIV;REFERENCE;F0-1-3-2-11-1
                // DIV;;F0
                // DIV;GRID_TOOLBAR;F0-2
                // DIV;GRID;F0-1

                if($scope.f0131ApiF013211Scope.cdOrder && $scope.f0131ApiF013211Scope.cdOrder.cdOrderId && $scope.f0131ApiF013211Scope.CdOrderForm){
                    if($scope.f0131ApiF013211Scope.CdOrderForm.$validator && $scope.f0131ApiF013211Scope.CdOrderForm.verify){
                        $scope.f0131ApiF013211Scope.CdOrderForm.$validator.enable();
                        $scope.f0131ApiF013211Scope.CdOrderForm.verify();
                    }
                    if(!$scope.f0131ApiF013211Scope.CdOrderForm.$valid){
                        tabs11_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;REFERENCE;F0-1-3-2-11-2
                // DIV;;F1
                // DIV;;F1-1
                // DIV;;F1-1-1
                // DIV;;F1-1-1-1
                // GROUP;;F1-1-1-1-1-1
                // DIV;;F1-1-1-1-1-1-1-0
                // DIV;;F1-1-1-1-1-1-1
                // DIV;;F1-1-1-1-1-1-1-1
                // DIV;;F1-1-1-1-1-1-1-2
                // DIV;;F1-1-1-1-1-1-1-3
                // DIV;;F1-1-1-1-1-1-1-4
                // DIV;;F1-1-1-1-1-1-1-5
                // DIV;;F1-1-1-1-1-1-1-6
                // DIV;;F1-1-1-1-1-1-1-7
                // DIV;;F1-1-1-1-1-1-1-8
                // DIV;;F1-1-1-1-1-1-1-9
                // DIV;;F1-1-1-1-1-1-1-10
                // DIV;;F1-1-1-1-1-1-1-11
                // DIV;;F1-1-1-1-1-1-2
                // DIV;;F1-1-1-1-1-1-2-1
                // DIV;;F1-1-1-1-1-1-2-2
                // DIV;;F1-1-1-1-1-1-2-3
                // DIV;;F1-1-1-1-1-1-2-4
                // DIV;;F1-1-1-1-1-1-2-5
                // DIV;;F1-1-1-1-1-1-2-6
                // DIV;;F1-1-1-1-1-1-2-7
                // DIV;;F1-1-1-1-1-1-2-8
                // DIV;;F1-1-1-1-1-1-2-8-1
                // DIV;;F1-1-1-1-1-1-2-8-2
                // DIV;;F1-1-1-1-1-1-2-9
                // DIV;;F1-1-1-1-1-1-2-10
                // DIV;;F1-1-1-1-1-1-2-11
                // DIV;;F1-1-1-1-1-1-3
                // DIV;;F1-1-1-1-1-1-3-1
                // DIV;;F1-1-1-1-1-1-3-2
                // DIV;;F1-1-1-1-1-1-3-3
                // DIV;;F1-1-1-1-1-1-3-4
                // DIV;;F1-1-1-1-1-1-3-5
                // DIV;;F1-1-1-1-1-1-3-6
                // DIV;;F1-1-1-1-1-1-3-7
                // DIV;;F1-1-1-1-1-1-3-8
                // DIV;;F1-1-1-1-1-1-3-9
                // DIV;;F1-1-1-1-1-1-3-10
                // DIV;;F1-1-1-1-1-1-3-11
                // DIV;;F1-1-1-1-1-1-4
                // DIV;;F1-1-1-1-1-1-4-1
                // DIV;;F1-1-1-1-1-1-4-2
                // DIV;;F1-1-1-1-1-1-4-3
                // DIV;;F1-1-1-1-1-1-4-4
                // DIV;;F1-1-1-1-1-1-4-5
                // DIV;;F1-1-1-1-1-1-4-6
                // DIV;;F1-1-1-1-1-1-4-7
                // DIV;;F1-1-1-1-1-1-4-8
                // DIV;;F1-1-1-1-1-1-4-9
                // DIV;;F1-1-1-1-1-1-4-10
                // DIV;;F1-1-1-1-1-1-4-10-1
                // DIV;;F1-1-1-1-1-1-4-10-2
                // DIV;;F1-1-1-1-1-1-4-11
                // DIV;;F1-1-1-2
                // DIV;;F1-1-1-2-1
                // GROUP;;F1-1-1-2-1-1
                // DIV;GRID_TOOLBAR;F1-1-1-2-1-1-2
                // DIV;GRID;F1-1-1-2-1-1-1

                if($scope.f0131ApiF013211Scope.cdOrderCargo && $scope.f0131ApiF013211Scope.cdOrderCargo.cdOrderCargoId && $scope.f0131ApiF013211Scope.CdOrderCargoForm){
                    if($scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator && $scope.f0131ApiF013211Scope.CdOrderCargoForm.verify){
                        $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator.enable();
                        $scope.f0131ApiF013211Scope.CdOrderCargoForm.verify();
                    }
                    if(!$scope.f0131ApiF013211Scope.CdOrderCargoForm.$valid){
                        tabs11_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F1-1-1-2-1-1-3
                // DIV;;F1-1-1-2-1-1-3-1
                // PANEL;;F1-1-1-2-1-1-3-1-1
                // DIV;;F1-1-1-2-1-1-3-1-1-1
                // DIV;;F1-1-1-2-1-1-3-1-1-2
                // DIV;;F1-1-1-2-1-1-3-1-1-3
                // DIV;;F1-1-1-2-1-1-3-1-1-4
                // DIV;;F1-1-1-2-1-1-3-1-1-5
                // DIV;;F1-1-1-2-1-1-3-2
                // PANEL;;F1-1-1-2-1-1-3-2-1
                // DIV;;F1-1-1-2-1-1-3-2-1-1
                // DIV;;F1-1-1-2-1-1-3-2-1-2
                // DIV;;F1-1-1-2-1-1-3-2-1-3
                // DIV;;F1-1-1-2-1-1-3-2-1-4
                // DIV;;F1-1-1-2-1-1-3-2-1-5
                // DIV;;F1-1-1-2-1-1-3-3
                // PANEL;;F1-1-1-2-1-1-3-3-1
                // DIV;;F1-1-1-2-1-1-3-3-1-1
                // DIV;;F1-1-1-2-1-1-3-3-1-2
                // DIV;;F1-1-1-2-1-1-3-3-1-3
                // DIV;;F1-1-1-2-1-1-3-3-1-4
                // DIV;;F1-1-1-2-1-1-3-3-1-5
                // DIV;;F1-1-1-2-1-1-3-4
                // PANEL;;F1-1-1-2-1-1-3-4-1
                // DIV;;F1-1-1-2-1-1-3-4-1-1
                // DIV;;F1-1-1-2-1-1-3-4-1-2
                // DIV;;F1-1-1-2-1-1-3-4-1-3
                // DIV;;F1-1-1-2-1-1-3-4-1-4
                // DIV;;F1-1-1-2-1-1-3-4-1-5
                // DIV;;F1-1-2
                // DIV;;F1-1-2-1
                // GROUP;;F1-1-2-1-1
                // FORM;;F1-1-2-1-1-1-0
                if($scope.f0131ApiF013211Scope &&  $scope.f0131ApiF013211Scope.CdOrder2Ctn && !$scope.f0131ApiF013211Scope.CdOrder2Ctn.$valid){
                    tabs11_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                // DIV;;F1-1-2-1-1-3
                // DIV;;F1-1-2-1-1-3-1
                // DIV;;F1-1-2-1-1-3-2
                // DIV;;F1-1-2-1-1-3-3
                // DIV;GRID_TOOLBAR;F1-1-2-1-1-5
                // DIV;GRID;F1-1-2-1-1-4

                if($scope.f0131ApiF013211Scope.cdOrderDocument && $scope.f0131ApiF013211Scope.cdOrderDocument.cdOrderDocumentId && $scope.f0131ApiF013211Scope.CdOrderDocumentForm){
                    if($scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator && $scope.f0131ApiF013211Scope.CdOrderDocumentForm.verify){
                        $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator.enable();
                        $scope.f0131ApiF013211Scope.CdOrderDocumentForm.verify();
                    }
                    if(!$scope.f0131ApiF013211Scope.CdOrderDocumentForm.$valid){
                        tabs11_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F1-1-2-1-1-6
                // PANEL;;F1-1-2-1-1-6-1
                // DIV;;F1-1-2-1-1-6-1-1
                // DIV;;F1-1-2-1-1-6-1-2
                // DIV;;F1-1-2-1-1-6-1-3
                // DIV;;F1-1-2-1-1-6-1-4
                // DIV;;F1-1-2-1-1-6-1-5
                // DIV;;F1-1-2-1-1-6-1-6
                // DIV;;F1-1-2-1-1-6-1-7
                // DIV;;F1-1-2-1-1-6-1-8
                // DIV;;F1-1-2-1-1-6-1-9
                if(!tabs11_F0131Api_Valid){
                    $scope.F0131Api.selectTab(10);
                    var errF013211s = [];
                    // DIV F0-1-3-2-11-1
                    // DIV F0
                    // DIV F0-2
                    // DIV F0-1
                    // DIV F0-1-3-2-11-2
                    // DIV F1
                    // DIV F1-1
                    // DIV F1-1-1
                    // DIV F1-1-1-1
                    // GROUP F1-1-1-1-1-1
                    // DIV F1-1-1-1-1-1-1-0
                    // DIV F1-1-1-1-1-1-1
                    // DIV F1-1-1-1-1-1-1-1
                    // DIV F1-1-1-1-1-1-1-2
                    // DIV F1-1-1-1-1-1-1-3
                    // DIV F1-1-1-1-1-1-1-4
                    // DIV F1-1-1-1-1-1-1-5
                    // DIV F1-1-1-1-1-1-1-6
                    // DIV F1-1-1-1-1-1-1-7
                    // DIV F1-1-1-1-1-1-1-8
                    // DIV F1-1-1-1-1-1-1-9
                    // DIV F1-1-1-1-1-1-1-10
                    // DIV F1-1-1-1-1-1-1-11
                    // DIV F1-1-1-1-1-1-2
                    // DIV F1-1-1-1-1-1-2-1
                    // DIV F1-1-1-1-1-1-2-2
                    // DIV F1-1-1-1-1-1-2-3
                    // DIV F1-1-1-1-1-1-2-4
                    // DIV F1-1-1-1-1-1-2-5
                    // DIV F1-1-1-1-1-1-2-6
                    // DIV F1-1-1-1-1-1-2-7
                    // DIV F1-1-1-1-1-1-2-8
                    // DIV F1-1-1-1-1-1-2-8-1
                    // DIV F1-1-1-1-1-1-2-8-2
                    // DIV F1-1-1-1-1-1-2-9
                    // DIV F1-1-1-1-1-1-2-10
                    // DIV F1-1-1-1-1-1-2-11
                    // DIV F1-1-1-1-1-1-3
                    // DIV F1-1-1-1-1-1-3-1
                    // DIV F1-1-1-1-1-1-3-2
                    // DIV F1-1-1-1-1-1-3-3
                    // DIV F1-1-1-1-1-1-3-4
                    // DIV F1-1-1-1-1-1-3-5
                    // DIV F1-1-1-1-1-1-3-6
                    // DIV F1-1-1-1-1-1-3-7
                    // DIV F1-1-1-1-1-1-3-8
                    // DIV F1-1-1-1-1-1-3-9
                    // DIV F1-1-1-1-1-1-3-10
                    // DIV F1-1-1-1-1-1-3-11
                    // DIV F1-1-1-1-1-1-4
                    // DIV F1-1-1-1-1-1-4-1
                    // DIV F1-1-1-1-1-1-4-2
                    // DIV F1-1-1-1-1-1-4-3
                    // DIV F1-1-1-1-1-1-4-4
                    // DIV F1-1-1-1-1-1-4-5
                    // DIV F1-1-1-1-1-1-4-6
                    // DIV F1-1-1-1-1-1-4-7
                    // DIV F1-1-1-1-1-1-4-8
                    // DIV F1-1-1-1-1-1-4-9
                    // DIV F1-1-1-1-1-1-4-10
                    // DIV F1-1-1-1-1-1-4-10-1
                    // DIV F1-1-1-1-1-1-4-10-2
                    // DIV F1-1-1-1-1-1-4-11
                    // DIV F1-1-1-2
                    // DIV F1-1-1-2-1
                    // GROUP F1-1-1-2-1-1
                    // DIV F1-1-1-2-1-1-2
                    // DIV F1-1-1-2-1-1-1
                    // DIV F1-1-1-2-1-1-3
                    // DIV F1-1-1-2-1-1-3-1
                    // PANEL F1-1-1-2-1-1-3-1-1
                    // DIV F1-1-1-2-1-1-3-1-1-1
                    // DIV F1-1-1-2-1-1-3-1-1-2
                    // DIV F1-1-1-2-1-1-3-1-1-3
                    // DIV F1-1-1-2-1-1-3-1-1-4
                    // DIV F1-1-1-2-1-1-3-1-1-5
                    // DIV F1-1-1-2-1-1-3-2
                    // PANEL F1-1-1-2-1-1-3-2-1
                    // DIV F1-1-1-2-1-1-3-2-1-1
                    // DIV F1-1-1-2-1-1-3-2-1-2
                    // DIV F1-1-1-2-1-1-3-2-1-3
                    // DIV F1-1-1-2-1-1-3-2-1-4
                    // DIV F1-1-1-2-1-1-3-2-1-5
                    // DIV F1-1-1-2-1-1-3-3
                    // PANEL F1-1-1-2-1-1-3-3-1
                    // DIV F1-1-1-2-1-1-3-3-1-1
                    // DIV F1-1-1-2-1-1-3-3-1-2
                    // DIV F1-1-1-2-1-1-3-3-1-3
                    // DIV F1-1-1-2-1-1-3-3-1-4
                    // DIV F1-1-1-2-1-1-3-3-1-5
                    // DIV F1-1-1-2-1-1-3-4
                    // PANEL F1-1-1-2-1-1-3-4-1
                    // DIV F1-1-1-2-1-1-3-4-1-1
                    // DIV F1-1-1-2-1-1-3-4-1-2
                    // DIV F1-1-1-2-1-1-3-4-1-3
                    // DIV F1-1-1-2-1-1-3-4-1-4
                    // DIV F1-1-1-2-1-1-3-4-1-5
                    // DIV F1-1-2
                    // DIV F1-1-2-1
                    // GROUP F1-1-2-1-1
                    // FORM F1-1-2-1-1-1-0
                    if( $scope.f0131ApiF013211Scope &&  $scope.f0131ApiF013211Scope.CdOrder2Ctn && $scope.f0131ApiF013211Scope.CdOrder2Ctn.$error){
                        for(var prop in $scope.f0131ApiF013211Scope.CdOrder2Ctn.$error){
                            if(angular.isArray($scope.f0131ApiF013211Scope.CdOrder2Ctn.$error[prop])){
                                errF013211s = errF013211s.concat($scope.f0131ApiF013211Scope.CdOrder2Ctn.$error[prop]);
                            }
                        }
                    }
                    // DIV F1-1-2-1-1-3
                    // DIV F1-1-2-1-1-3-1
                    // DIV F1-1-2-1-1-3-2
                    // DIV F1-1-2-1-1-3-3
                    // DIV F1-1-2-1-1-5
                    // DIV F1-1-2-1-1-4
                    // DIV F1-1-2-1-1-6
                    // PANEL F1-1-2-1-1-6-1
                    // DIV F1-1-2-1-1-6-1-1
                    // DIV F1-1-2-1-1-6-1-2
                    // DIV F1-1-2-1-1-6-1-3
                    // DIV F1-1-2-1-1-6-1-4
                    // DIV F1-1-2-1-1-6-1-5
                    // DIV F1-1-2-1-1-6-1-6
                    // DIV F1-1-2-1-1-6-1-7
                    // DIV F1-1-2-1-1-6-1-8
                    // DIV F1-1-2-1-1-6-1-9
                    for(var j=0;j<errF013211s.length;j++){
                        if($("input[name='"+errF013211s[j].$name+"']").parents("div[api]")[0]){
                            var apiName = $("input[name='"+errF013211s[j].$name+"']").parents("div[api]")[0].attributes.api.value;
                            var title = $("input[name='"+errF013211s[j].$name+"']").parents("div[title]")[0].attributes.title.value;
                            $scope[apiName].selectTab(title+"_"+undefined);
                        }
                    }

                }
                //TAB  F0-1-3-2-10 F0131Api 0
                var tabs10_F0131Api_Valid = true ;
                // DIV;;F0-1-3-2-10-1
                // DIV;GRID;F0-1-3-2-10-1-1

                if($scope.f0131ApiF013210Scope.ciOrder && $scope.f0131ApiF013210Scope.ciOrder.ciOrderId && $scope.f0131ApiF013210Scope.CiOrderForm){
                    if($scope.f0131ApiF013210Scope.CiOrderForm.$validator && $scope.f0131ApiF013210Scope.CiOrderForm.verify){
                        $scope.f0131ApiF013210Scope.CiOrderForm.$validator.enable();
                        $scope.f0131ApiF013210Scope.CiOrderForm.verify();
                    }
                    if(!$scope.f0131ApiF013210Scope.CiOrderForm.$valid){
                        tabs10_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F0-1-3-2-10-2
                // DIV;GRID_TOOLBAR;F0-1-3-2-10-2-1
                // DIV;FORM_CELL;F0-1-3-2-10-2-2
                // DIV;;F0-1-3-2-10-3
                // DIV;;F0-1-3-2-10-3-1
                // GROUP;;F0-1-3-2-10-3-1-1
                // DIV;GRID_TOOLBAR;F0-1-3-2-10-3-1-1-1
                // DIV;GRID;F0-1-3-2-10-3-1-1-2

                if($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid && $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController){
                    if(!$scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController.$valid){
                        tabs10_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F0-1-3-2-10-3-2
                // GROUP;;F0-1-3-2-10-3-2-1
                // DIV;GRID_TOOLBAR;F0-1-3-2-10-3-2-1-1
                // DIV;GRID;F0-1-3-2-10-3-2-1-2

                if($scope.f0131ApiF013210Scope.ciOrderDocumentGrid && $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController){
                    if(!$scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController.$valid){
                        tabs10_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F0-1-3-2-10-3-3
                // GROUP;;F0-1-3-2-10-3-3-1
                // DIV;GRID_TOOLBAR;F0-1-3-2-10-3-3-1-1
                // DIV;GRID;F0-1-3-2-10-3-3-1-2

                if($scope.f0131ApiF013210Scope.ciOrderCargoGrid && $scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController){
                    if(!$scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController.$valid){
                        tabs10_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F0-1-3-2-10-4
                if(!tabs10_F0131Api_Valid){
                    $scope.F0131Api.selectTab(9);

                }
                //TAB  F0-1-3-2-9 F0131Api 0
                var tabs9_F0131Api_Valid = true ;
                if(!tabs9_F0131Api_Valid){
                    $scope.F0131Api.selectTab(8);

                }
                //TAB  F0-1-3-2-8 F0131Api 0
                var tabs8_F0131Api_Valid = true ;
                // DIV;REFERENCE;F0-1-3-2-8-2
                // DIV;;F1
                // DIV;GRID;F1-1-1

                if($scope.f0131ApiF01328Scope.tmOrderToMfOrder && $scope.f0131ApiF01328Scope.tmOrderToMfOrder.tmOrderId && $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm){
                    if($scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$validator && $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.verify){
                        $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$validator.enable();
                        $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.verify();
                    }
                    if(!$scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$valid){
                        tabs8_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // PANEL;;F1-1-2
                // DIV;;F1-1-2-1
                // DIV;;F1-1-2-2
                // DIV;;F1-1-2-3
                // DIV;GRID_TOOLBAR;F1-2
                // DIV;REFERENCE;F0-1-3-2-8-3
                // DIV;;F0
                // FORM;;F0-3-0
                if($scope.f0131ApiF01328Scope &&  $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm && !$scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$valid){
                    tabs8_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                // GROUP;;F0-5
                // DIV;;F0-5-3
                // DIV;;F0-5-4-4
                // DIV;;F0-5-3-2
                // DIV;;F0-5-3-3
                // DIV;;F0-5-3-4
                // DIV;;F0-5-2
                // DIV;;F0-5-2-1
                // DIV;;F0-5-2-2
                // DIV;;F0-5-2-3
                // DIV;;F0-5-2-4
                // DIV;;F0-5-1
                // DIV;;F0-5-1-1
                // DIV;;F0-5-1-2
                // DIV;;F0-5-1-3
                // DIV;;F0-5-1-4
                // DIV;;F0-5-4
                // DIV;;F0-5-4-1
                // DIV;;F0-5-3-1
                // DIV;;F0-5-4-2
                // DIV;;F0-5-4-2-1
                // DIV;;F0-5-4-2-2
                // DIV;;F0-5-4-3
                if(!tabs8_F0131Api_Valid){
                    $scope.F0131Api.selectTab(7);
                    var errF01328s = [];
                    // DIV F0-1-3-2-8-2
                    // DIV F1
                    // DIV F1-1-1
                    // PANEL F1-1-2
                    // DIV F1-1-2-1
                    // DIV F1-1-2-2
                    // DIV F1-1-2-3
                    // DIV F1-2
                    // DIV F0-1-3-2-8-3
                    // DIV F0
                    // FORM F0-3-0
                    if( $scope.f0131ApiF01328Scope &&  $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm && $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$error){
                        for(var prop in $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$error){
                            if(angular.isArray($scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$error[prop])){
                                errF01328s = errF01328s.concat($scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$error[prop]);
                            }
                        }
                    }
                    // GROUP F0-5
                    // DIV F0-5-3
                    // DIV F0-5-4-4
                    // DIV F0-5-3-2
                    // DIV F0-5-3-3
                    // DIV F0-5-3-4
                    // DIV F0-5-2
                    // DIV F0-5-2-1
                    // DIV F0-5-2-2
                    // DIV F0-5-2-3
                    // DIV F0-5-2-4
                    // DIV F0-5-1
                    // DIV F0-5-1-1
                    // DIV F0-5-1-2
                    // DIV F0-5-1-3
                    // DIV F0-5-1-4
                    // DIV F0-5-4
                    // DIV F0-5-4-1
                    // DIV F0-5-3-1
                    // DIV F0-5-4-2
                    // DIV F0-5-4-2-1
                    // DIV F0-5-4-2-2
                    // DIV F0-5-4-3
                    for(var j=0;j<errF01328s.length;j++){
                        if($("input[name='"+errF01328s[j].$name+"']").parents("div[api]")[0]){
                            var apiName = $("input[name='"+errF01328s[j].$name+"']").parents("div[api]")[0].attributes.api.value;
                            var title = $("input[name='"+errF01328s[j].$name+"']").parents("div[title]")[0].attributes.title.value;
                            $scope[apiName].selectTab(title+"_"+undefined);
                        }
                    }

                }
                //TAB  F0-1-3-2-7 F0131Api 0
                var tabs7_F0131Api_Valid = true ;
                // DIV;GRID_TOOLBAR;F0-1-3-2-7-0
                // DIV;;F0-1-3-2-7-1
                // DIV;;F0-1-3-2-7-1-1
                // GROUP;;F0-1-3-2-7-1-1-1
                // DIV;;F0-1-3-2-7-1-1-1-1
                // DIV;;F0-1-3-2-7-1-2
                // GROUP;;F0-1-3-2-7-1-2-1
                // DIV;;F0-1-3-2-7-1-2-1-1
                if(!tabs7_F0131Api_Valid){
                    $scope.F0131Api.selectTab(6);

                }
                //TAB  F0-1-3-2-6 F0131Api 0
                var tabs6_F0131Api_Valid = true ;
                if(!tabs6_F0131Api_Valid){
                    $scope.F0131Api.selectTab(5);

                }
                //TAB  F0-1-3-2-5 F0131Api 0
                var tabs5_F0131Api_Valid = true ;
                // DIV;;F0-1-3-2-5-1
                // DIV;REFERENCE;F0-1-3-2-5-2
                // DIV;;F0-10-1
                // DIV;TOOLBAR;F0-10-1-1
                // DIV;TOOLBAR;F0-10-1-2
                // DIV;GRID_TOOLBAR;F0-10-1-3
                // DIV;GRID;F0-10-1-4

                if($scope.f0131ApiF01325Scope.arBcFreightGrid && $scope.f0131ApiF01325Scope.arBcFreightGrid.formController){
                    if(!$scope.f0131ApiF01325Scope.arBcFreightGrid.formController.$valid){
                        tabs5_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;REFERENCE;F0-1-3-2-5-3
                // DIV;;F0-9-1
                // DIV;GRID_TOOLBAR;F0-9-1-1
                // DIV;GRID;F0-9-1-2

                if($scope.f0131ApiF01325Scope.apBcFreightGrid && $scope.f0131ApiF01325Scope.apBcFreightGrid.formController){
                    if(!$scope.f0131ApiF01325Scope.apBcFreightGrid.formController.$valid){
                        tabs5_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;REFERENCE;F0-1-3-2-5-4
                // DIV;;F0-8-1
                // DIV;GRID;F0-8-1-1

                if($scope.f0131ApiF01325Scope.vbcFreightStatistics && $scope.f0131ApiF01325Scope.vbcFreightStatistics.mfOrderId && $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm){
                    if($scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.$validator && $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.verify){
                        $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.$validator.enable();
                        $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.verify();
                    }
                    if(!$scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.$valid){
                        tabs5_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                if(!tabs5_F0131Api_Valid){
                    $scope.F0131Api.selectTab(4);

                }
                //TAB  F0-1-3-2-4 F0131Api 0
                var tabs4_F0131Api_Valid = true ;
                // DIV;REFERENCE;F0-1-3-2-4-1
                // DIV;;F0
                // DIV;;F0-1
                // DIV;GRID_TOOLBAR;F0-1-1
                // DIV;GRID;F0-1-2

                if($scope.f0131ApiF01324Scope.bkContainerGrid && $scope.f0131ApiF01324Scope.bkContainerGrid.formController){
                    if(!$scope.f0131ApiF01324Scope.bkContainerGrid.formController.$valid){
                        tabs4_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F0-1-5
                // PANEL;;F0-1-5-1-1
                // DIV;;F0-1-5-1
                // DIV;;F0-1-5-2
                // DIV;;F0-1-5-3
                // DIV;;F0-1-5-4
                // DIV;;F0-1-5-5
                // DIV;;F0-1-10
                // PANEL;;F0-1-10-1
                // DIV;;F0-1-10-1-1
                // DIV;;F0-1-10-1-2
                // DIV;;F0-1-10-1-3
                // DIV;;F0-1-10-1-4
                // DIV;;F0-1-11
                // PANEL;;F0-1-11-1
                // DIV;;F0-1-11-1-1
                // DIV;;F0-1-11-1-2
                // DIV;;F0-1-11-1-3
                // DIV;;F0-1-11-1-4
                // DIV;GRID_TOOLBAR;F0-1-3
                // DIV;GRID;F0-1-4

                if($scope.f0131ApiF01324Scope.mfContainer2CargoGrid && $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController){
                    if(!$scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController.$valid){
                        tabs4_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;GRID_TOOLBAR;F0-1-6
                // DIV;GRID;F0-1-7

                if($scope.f0131ApiF01324Scope.arBcFreightGrid && $scope.f0131ApiF01324Scope.arBcFreightGrid.formController){
                    if(!$scope.f0131ApiF01324Scope.arBcFreightGrid.formController.$valid){
                        tabs4_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;GRID_TOOLBAR;F0-1-8
                // DIV;GRID;F0-1-9

                if($scope.f0131ApiF01324Scope.apBcFreightGrid && $scope.f0131ApiF01324Scope.apBcFreightGrid.formController){
                    if(!$scope.f0131ApiF01324Scope.apBcFreightGrid.formController.$valid){
                        tabs4_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                if(!tabs4_F0131Api_Valid){
                    $scope.F0131Api.selectTab(3);

                }
                //TAB  F0-1-3-2-3 F0131Api 0
                var tabs3_F0131Api_Valid = true ;
                // DIV;;F0-1-3-2-3-1
                // DIV;GRID_TOOLBAR;F0-1-3-2-3-1-1
                // DIV;GRID;F0-1-3-2-3-1-2

                if($scope.f0131ApiF01323Scope.mfBookingCargo && $scope.f0131ApiF01323Scope.mfBookingCargo.mfBookingCargoId && $scope.f0131ApiF01323Scope.MfBookingCargoForm){
                    if($scope.f0131ApiF01323Scope.MfBookingCargoForm.$validator && $scope.f0131ApiF01323Scope.MfBookingCargoForm.verify){
                        $scope.f0131ApiF01323Scope.MfBookingCargoForm.$validator.enable();
                        $scope.f0131ApiF01323Scope.MfBookingCargoForm.verify();
                    }
                    if(!$scope.f0131ApiF01323Scope.MfBookingCargoForm.$valid){
                        tabs3_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;REFERENCE;F0-1-3-2-3-1-3
                // DIV;;F0
                // FORM;;F0-1
                if($scope.f0131ApiF01323Scope &&  $scope.f0131ApiF01323Scope.MfBookingCargoForm && !$scope.f0131ApiF01323Scope.MfBookingCargoForm.$valid){
                    tabs3_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                if(!tabs3_F0131Api_Valid){
                    $scope.F0131Api.selectTab(2);
                    var errF01323s = [];
                    // DIV F0-1-3-2-3-1
                    // DIV F0-1-3-2-3-1-1
                    // DIV F0-1-3-2-3-1-2
                    // DIV F0-1-3-2-3-1-3
                    // DIV F0
                    // FORM F0-1
                    if( $scope.f0131ApiF01323Scope &&  $scope.f0131ApiF01323Scope.MfBookingCargoForm && $scope.f0131ApiF01323Scope.MfBookingCargoForm.$error){
                        for(var prop in $scope.f0131ApiF01323Scope.MfBookingCargoForm.$error){
                            if(angular.isArray($scope.f0131ApiF01323Scope.MfBookingCargoForm.$error[prop])){
                                errF01323s = errF01323s.concat($scope.f0131ApiF01323Scope.MfBookingCargoForm.$error[prop]);
                            }
                        }
                    }
                    for(var j=0;j<errF01323s.length;j++){
                        if($("input[name='"+errF01323s[j].$name+"']").parents("div[api]")[0]){
                            var apiName = $("input[name='"+errF01323s[j].$name+"']").parents("div[api]")[0].attributes.api.value;
                            var title = $("input[name='"+errF01323s[j].$name+"']").parents("div[title]")[0].attributes.title.value;
                            $scope[apiName].selectTab(title+"_"+undefined);
                        }
                    }

                }
                //TAB  F0-1-3-2-2 F0131Api 0
                var tabs2_F0131Api_Valid = true ;
                // DIV;REFERENCE;F0-1-3-2-2-1
                // DIV;;F0
                // TABS;;F0-1
                // TAB;;F0-1-1
                // PANEL;;F0-1-1-1
                // DIV;;F0-1-1-1-1
                // DIV;;F0-1-1-1-1-1-1-1-1
                // GROUP;;F0-1-1-1-1-1
                // DIV;;F0-1-1-1-1-1-1
                // DIV;;F0-1-1-1-1-1-2
                // DIV;;F0-1-1-1-1-1-3
                // DIV;;F0-1-1-1-1-1-4
                // DIV;;F0-1-1-1-1-1-4-1
                // DIV;;F0-1-1-1-1-1-4-2
                // DIV;;F0-1-1-1-1-1-5
                // DIV;;F0-1-1-1-1-1-5-1
                // DIV;;F0-1-1-1-1-1-5-2
                // DIV;;F0-1-1-1-1-1-6
                // DIV;;F0-1-1-1-1-1-6-1
                // DIV;;F0-1-1-1-1-1-6-2
                // DIV;;F0-1-1-1-1-1-7-1
                // DIV;;F0-1-1-1-1-1-7-2
                // DIV;;F0-1-1-1-1-1-8
                // DIV;;F0-1-1-1-1-1-1-1-2
                // GROUP;;F0-1-1-1-1-2
                // DIV;;F0-1-1-1-1-2-1
                // DIV;;F0-1-1-1-1-2-2
                // DIV;;F0-1-1-1-1-2-3
                // DIV;;F0-1-1-1-1-2-4
                // DIV;;F0-1-1-1-1-2-4-1
                // DIV;;F0-1-1-1-1-2-4-2
                // DIV;;F0-1-1-1-1-2-5
                // DIV;;F0-1-1-1-1-2-5-1
                // DIV;;F0-1-1-1-1-2-5-2
                // DIV;;F0-1-1-1-1-2-6
                // DIV;;F0-1-1-1-1-2-6-1
                // DIV;;F0-1-1-1-1-2-6-2
                // DIV;;F0-1-1-1-1-2-7-1
                // DIV;;F0-1-1-1-1-2-7-2
                // DIV;;F0-1-1-1-1-2-8
                // DIV;;F0-1-1-1-1-1-1-1-3
                // GROUP;;F0-1-1-1-1-3
                // DIV;;F0-1-1-1-1-3-1
                // DIV;;F0-1-1-1-1-3-2
                // DIV;;F0-1-1-1-1-3-3
                // DIV;;F0-1-1-1-1-3-4
                // DIV;;F0-1-1-1-1-3-4-1
                // DIV;;F0-1-1-1-1-3-4-2
                // DIV;;F0-1-1-1-1-3-5
                // DIV;;F0-1-1-1-1-3-5-1
                // DIV;;F0-1-1-1-1-3-5-2
                // DIV;;F0-1-1-1-1-3-6
                // DIV;;F0-1-1-1-1-3-6-1
                // DIV;;F0-1-1-1-1-3-6-2
                // DIV;;F0-1-1-1-1-3-7-1
                // DIV;;F0-1-1-1-1-3-7-2
                // DIV;;F0-1-1-1-1-3-8
                // DIV;;F0-1-1-1-2
                // DIV;;F0-1-1-1-1-1-1-1-4
                // GROUP;;F0-1-1-1-2-1
                // DIV;;F0-1-1-1-2-1-1
                // DIV;;F0-1-1-1-2-1-2
                // DIV;;F0-1-1-1-2-1-3
                // DIV;;F0-1-1-1-2-1-4
                // DIV;;F0-1-1-1-2-1-4-1
                // DIV;;F0-1-1-1-2-1-4-2
                // DIV;;F0-1-1-1-2-1-5
                // DIV;;F0-1-1-1-2-1-5-1
                // DIV;;F0-1-1-1-2-1-5-2
                // DIV;;F0-1-1-1-2-1-6
                // DIV;;F0-1-1-1-2-1-6-1
                // DIV;;F0-1-1-1-2-1-6-2
                // DIV;;F0-1-1-1-2-1-7-1
                // DIV;;F0-1-1-1-2-1-7-2
                // DIV;;F0-1-1-1-2-1-8
                // DIV;;F0-1-1-1-1-1-1-1-5
                // GROUP;;F0-1-1-1-2-2
                // DIV;;F0-1-1-1-2-2-1
                // DIV;;F0-1-1-1-2-2-2
                // DIV;;F0-1-1-1-2-2-3
                // DIV;;F0-1-1-1-2-2-4
                // DIV;;F0-1-1-1-2-2-4-1
                // DIV;;F0-1-1-1-2-2-4-2
                // DIV;;F0-1-1-1-2-2-5
                // DIV;;F0-1-1-1-2-2-5-1
                // DIV;;F0-1-1-1-2-2-5-2
                // DIV;;F0-1-1-1-2-2-6
                // DIV;;F0-1-1-1-2-2-6-1
                // DIV;;F0-1-1-1-2-2-6-2
                // DIV;;F0-1-1-1-2-2-7-1
                // DIV;;F0-1-1-1-2-2-7-2
                // DIV;;F0-1-1-1-2-2-8
                // TAB;;F0-1-2
                // PANEL;;F0-1-1-2
                // DIV;;F0-1-1-2-1
                // DIV;;F0-1-1-2-1-1-1-1-1
                // GROUP;;F0-1-1-2-1-1
                // DIV;;F0-1-1-2-1-1-1
                // DIV;;F0-1-1-2-1-1-2
                // DIV;;F0-1-1-2-1-1-3
                // DIV;;F0-1-1-2-1-1-4
                // DIV;;F0-1-1-2-1-1-4-1
                // DIV;;F0-1-1-2-1-1-4-2
                // DIV;;F0-1-1-2-1-1-5
                // DIV;;F0-1-1-2-1-1-5-1
                // DIV;;F0-1-1-2-1-1-5-2
                // DIV;;F0-1-1-2-1-1-6
                // DIV;;F0-1-1-2-1-1-6-1
                // DIV;;F0-1-1-2-1-1-6-2
                // DIV;;F0-1-1-2-1-1-7-1
                // DIV;;F0-1-1-2-1-1-7-2
                // DIV;;F0-1-1-2-1-1-8
                // DIV;;F0-1-1-2-1-1-1-1-2
                // GROUP;;F0-1-1-2-1-2
                // DIV;;F0-1-1-2-1-2-1
                // DIV;;F0-1-1-2-1-2-2
                // DIV;;F0-1-1-2-1-2-3
                // DIV;;F0-1-1-2-1-2-4
                // DIV;;F0-1-1-2-1-2-4-1
                // DIV;;F0-1-1-2-1-2-4-2
                // DIV;;F0-1-1-2-1-2-5
                // DIV;;F0-1-1-2-1-2-5-1
                // DIV;;F0-1-1-2-1-2-5-2
                // DIV;;F0-1-1-2-1-2-6
                // DIV;;F0-1-1-2-1-2-6-1
                // DIV;;F0-1-1-2-1-2-6-2
                // DIV;;F0-1-1-2-1-2-7-1
                // DIV;;F0-1-1-2-1-2-7-2
                // DIV;;F0-1-1-2-1-2-8
                // DIV;;F0-1-1-2-1-1-1-1-3
                // GROUP;;F0-1-1-2-1-3
                // DIV;;F0-1-1-2-1-3-1
                // DIV;;F0-1-1-2-1-3-2
                // DIV;;F0-1-1-2-1-3-3
                // DIV;;F0-1-1-2-1-3-4
                // DIV;;F0-1-1-2-1-3-4-1
                // DIV;;F0-1-1-2-1-3-4-2
                // DIV;;F0-1-1-2-1-3-5
                // DIV;;F0-1-1-2-1-3-5-1
                // DIV;;F0-1-1-2-1-3-5-2
                // DIV;;F0-1-1-2-1-3-6
                // DIV;;F0-1-1-2-1-3-6-1
                // DIV;;F0-1-1-2-1-3-6-2
                // DIV;;F0-1-1-2-1-3-7-1
                // DIV;;F0-1-1-2-1-3-7-2
                // DIV;;F0-1-1-2-1-3-8
                // DIV;;F0-1-1-2-2
                // DIV;;F0-1-1-2-1-1-1-1-4
                // GROUP;;F0-1-1-2-2-1
                // DIV;;F0-1-1-2-2-1-1
                // DIV;;F0-1-1-2-2-1-2
                // DIV;;F0-1-1-2-2-1-3
                // DIV;;F0-1-1-2-2-1-4
                // DIV;;F0-1-1-2-2-1-4-1
                // DIV;;F0-1-1-2-2-1-4-2
                // DIV;;F0-1-1-2-2-1-5
                // DIV;;F0-1-1-2-2-1-5-1
                // DIV;;F0-1-1-2-2-1-5-2
                // DIV;;F0-1-1-2-2-1-6
                // DIV;;F0-1-1-2-2-1-6-1
                // DIV;;F0-1-1-2-2-1-6-2
                // DIV;;F0-1-1-2-2-1-7-1
                // DIV;;F0-1-1-2-2-1-7-2
                // DIV;;F0-1-1-2-2-1-8
                if(!tabs2_F0131Api_Valid){
                    $scope.F0131Api.selectTab(1);

                }
                //TAB  F0-1-3-2-1 F0131Api 0
                var tabs1_F0131Api_Valid = true ;
                // FORM;;F0-1-3-2-1-1
                if( $scope.MfOrderForm && !$scope.MfOrderForm.$valid){
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                // FORM;;F0-1-3-2-1-4-0
                if( $scope.isBulkyCargo && !$scope.isBulkyCargo.$valid){
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                // DIV;;F0-1-3-2-1-3
                // FORM;;F0-1-3-2-1-3-1-0
                if( $scope.isHazardForm && !$scope.isHazardForm.$valid){
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                // DIV;;F0-1-3-2-1-2
                // FORM;;F0-1-3-2-1-2-1-0
                if( $scope.isReeferForm && !$scope.isReeferForm.$valid){
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                if(!tabs1_F0131Api_Valid){
                    $scope.F0131Api.selectTab(0);
                    var errF01321s = [];
                    // FORM F0-1-3-2-1-1
                    if( $scope.MfOrderForm && $scope.MfOrderForm.$error){
                        for(var prop in $scope.MfOrderForm.$error){
                            if(angular.isArray($scope.MfOrderForm.$error[prop])){
                                errF01321s = errF01321s.concat($scope.MfOrderForm.$error[prop]);
                            }
                        }
                    }
                    // FORM F0-1-3-2-1-4-0
                    if( $scope.isBulkyCargo && $scope.isBulkyCargo.$error){
                        for(var prop in $scope.isBulkyCargo.$error){
                            if(angular.isArray($scope.isBulkyCargo.$error[prop])){
                                errF01321s = errF01321s.concat($scope.isBulkyCargo.$error[prop]);
                            }
                        }
                    }
                    // DIV F0-1-3-2-1-3
                    // FORM F0-1-3-2-1-3-1-0
                    if( $scope.isHazardForm && $scope.isHazardForm.$error){
                        for(var prop in $scope.isHazardForm.$error){
                            if(angular.isArray($scope.isHazardForm.$error[prop])){
                                errF01321s = errF01321s.concat($scope.isHazardForm.$error[prop]);
                            }
                        }
                    }
                    // DIV F0-1-3-2-1-2
                    // FORM F0-1-3-2-1-2-1-0
                    if( $scope.isReeferForm && $scope.isReeferForm.$error){
                        for(var prop in $scope.isReeferForm.$error){
                            if(angular.isArray($scope.isReeferForm.$error[prop])){
                                errF01321s = errF01321s.concat($scope.isReeferForm.$error[prop]);
                            }
                        }
                    }
                    for(var j=0;j<errF01321s.length;j++){
                        if($("input[name='"+errF01321s[j].$name+"']").parents("div[api]")[0]){
                            var apiName = $("input[name='"+errF01321s[j].$name+"']").parents("div[api]")[0].attributes.api.value;
                            var title = $("input[name='"+errF01321s[j].$name+"']").parents("div[title]")[0].attributes.title.value;
                            $scope[apiName].selectTab(title+"_"+undefined);
                        }
                    }

                }
                if(!$scope.MfOrderFormTop.$valid) //FORM
                    allValidationFlag = false;
                if (!$scope.MfOperationRequireForm.$valid) //FORM
                    allValidationFlag = false;
                var callback = function() { //callback
                    if(allValidationFlag)
                    {
                        $scope.mfOrder.mfOrderId = null;
                        var param = $scope.mfOrder;
                        //2 0 persistentSaveType:2null
                        param.tmOrderToMfOrders=$scope.f0131ApiF01328Scope.tmOrderToMfOrders;
                        //2 0 persistentSaveType:2null
                        param.vbcFreightStatistics=$scope.f0131ApiF01325Scope.vbcFreightStatisticss;
                        //2 0 persistentSaveType:2null
                        param.ciOrders=$scope.f0131ApiF013210Scope.ciOrders;
                        //2 0 persistentSaveType:2null
                        param.mfCtnRequests=$scope.mfCtnRequests;
                        //1 0 persistentSaveType:2null
                        param.mfOrderExtends=$scope.mfOrderExtend;
                        //2 0 persistentSaveType:2null
                        param.mfMultiVessels=$scope.mfMultiVessels;
                        //2 0 persistentSaveType:2null
                        param.arBcFreights=$scope.f0131ApiF01325Scope.arBcFreights;
                        //2 0 persistentSaveType:2null
                        param.apBcFreights=$scope.f0131ApiF01325Scope.apBcFreights;
                        //2 0 persistentSaveType:2null
                        param.imOrders=$scope.f0131ApiF013212Scope.imOrders;
                        //1 0 persistentSaveType:2null
                        param.mfOperationRequires=$scope.mfOperationRequire;
                        //2 3 persistentSaveType:2null
                        param.bkContainers=$scope.f0131ApiF01324Scope.bkContainers;
                        //2 0 persistentSaveType:2null
                        param.cdOrders=$scope.f0131ApiF013211Scope.cdOrders;
                        //2 0 persistentSaveType:2null
                        param.mfBookingCargos=$scope.f0131ApiF01323Scope.mfBookingCargos;
                        var tip = layer.load(0, $config.shadeConfig);
                        $http.post($config.ctx + '/mfOrder/save',param).success(function(data){
                            layer.close(tip);
                            if (data.success != undefined && data.success == true){
                                $scope.mfOrder = data.mfOrder;
                                if($scope.f0131ApiF01322Scope)
                                    $scope.f0131ApiF01322Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF01323Scope)
                                    $scope.f0131ApiF01323Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF01324Scope)
                                    $scope.f0131ApiF01324Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF01325Scope)
                                    $scope.f0131ApiF01325Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF01326Scope)
                                    $scope.f0131ApiF01326Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF01328Scope)
                                    $scope.f0131ApiF01328Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF013210Scope)
                                    $scope.f0131ApiF013210Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF013211Scope)
                                    $scope.f0131ApiF013211Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF013212Scope)
                                    $scope.f0131ApiF013212Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF013213Scope)
                                    $scope.f0131ApiF013213Scope.mfOrder = $scope.mfOrder;

                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //1 0 persistentSaveType:2null
                                $scope.mfOrderExtend = data.mfOrder.mfOrderExtends;
                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //1 0 persistentSaveType:2null
                                $scope.mfOperationRequire = data.mfOrder.mfOperationRequires;
                                //2 3 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象TmOrderToMfOrder

                                $scope.refresh();
                                if($scope.f0131ApiF01328Scope && $scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid) {
                                    if( $scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid){
                                        if($scope.f0131ApiF01328Scope.TmOrderToMfOrderForm && $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$validator){
                                            $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$validator.reset();
                                            $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid._reset();
                                    $scope.f0131ApiF01328Scope.tmOrderToMfOrders.splice(0,$scope.f0131ApiF01328Scope.tmOrderToMfOrders.length);
                                    $scope.f0131ApiF01328Scope.tmOrderToMfOrder = {};
                                    $scope.f0131ApiF01328Scope.tmOrderToMfOrderDeleteds = [];
                                    $scope.f0131ApiF01328Scope.getTmOrderToMfOrderPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象TmOrderCtnRequestCopy
                                if($scope.f0131ApiF01328Scope && $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid) {
                                    if( $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid){
                                        if($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.formController){
                                            var $validator = $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid,$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopys);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid,$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopys);
                                        }

                                    }
                                    $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid._reset();
                                    $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopys.splice(0,$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopys.length);
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象VbcFreightStatistics
                                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid) {
                                    if( $scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid){
                                        if($scope.f0131ApiF01325Scope.VbcFreightStatisticsForm && $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.$validator){
                                            $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.$validator.reset();
                                            $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid._reset();
                                    $scope.f0131ApiF01325Scope.vbcFreightStatisticss.splice(0,$scope.f0131ApiF01325Scope.vbcFreightStatisticss.length);
                                    $scope.f0131ApiF01325Scope.vbcFreightStatistics = {};
                                    $scope.f0131ApiF01325Scope.vbcFreightStatisticsDeleteds = [];
                                    $scope.f0131ApiF01325Scope.getVbcFreightStatisticsPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CiOrder
                                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderGrid) {
                                    if( $scope.f0131ApiF013210Scope.ciOrderGrid){
                                        if($scope.f0131ApiF013210Scope.CiOrderForm && $scope.f0131ApiF013210Scope.CiOrderForm.$validator){
                                            $scope.f0131ApiF013210Scope.CiOrderForm.$validator.reset();
                                            $scope.f0131ApiF013210Scope.CiOrderForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF013210Scope.ciOrderGrid._reset();
                                    $scope.f0131ApiF013210Scope.ciOrders.splice(0,$scope.f0131ApiF013210Scope.ciOrders.length);
                                    $scope.f0131ApiF013210Scope.ciOrder = {};
                                    $scope.f0131ApiF013210Scope.ciOrderDeleteds = [];
                                    $scope.f0131ApiF013210Scope.getCiOrderPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CiOrderDocAttach
                                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid) {
                                    if( $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid){
                                        if($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController){
                                            var $validator = $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid,$scope.f0131ApiF013210Scope.ciOrderDocAttachs);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid,$scope.f0131ApiF013210Scope.ciOrderDocAttachs);
                                        }

                                    }
                                    $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid._reset();
                                    $scope.f0131ApiF013210Scope.ciOrderDocAttachs.splice(0,$scope.f0131ApiF013210Scope.ciOrderDocAttachs.length);
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CiOrderCargo
                                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderCargoGrid) {
                                    if( $scope.f0131ApiF013210Scope.ciOrderCargoGrid){
                                        if($scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController){
                                            var $validator = $scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF013210Scope.ciOrderCargoGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderCargoGrid,$scope.f0131ApiF013210Scope.ciOrderCargos);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderCargoGrid,$scope.f0131ApiF013210Scope.ciOrderCargos);
                                        }

                                    }
                                    $scope.f0131ApiF013210Scope.ciOrderCargoGrid._reset();
                                    $scope.f0131ApiF013210Scope.ciOrderCargos.splice(0,$scope.f0131ApiF013210Scope.ciOrderCargos.length);
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CiOrderDocument
                                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderDocumentGrid) {
                                    if( $scope.f0131ApiF013210Scope.ciOrderDocumentGrid){
                                        if($scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController){
                                            var $validator = $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF013210Scope.ciOrderDocumentGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocumentGrid,$scope.f0131ApiF013210Scope.ciOrderDocuments);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocumentGrid,$scope.f0131ApiF013210Scope.ciOrderDocuments);
                                        }

                                    }
                                    $scope.f0131ApiF013210Scope.ciOrderDocumentGrid._reset();
                                    $scope.f0131ApiF013210Scope.ciOrderDocuments.splice(0,$scope.f0131ApiF013210Scope.ciOrderDocuments.length);
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象MfCtnRequest
                                if($scope && $scope.mfCtnRequestGrid) {
                                    if( $scope.mfCtnRequestGrid){
                                        if($scope.mfCtnRequestGrid.formController){
                                            var $validator = $scope.mfCtnRequestGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.mfCtnRequestGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.mfCtnRequestGrid,$scope.mfCtnRequests);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.mfCtnRequestGrid,$scope.mfCtnRequests);
                                        }

                                    }
                                    $scope.mfCtnRequestGrid._reset();
                                    $scope.mfCtnRequests.splice(0,$scope.mfCtnRequests.length);
                                    $scope.mfCtnRequest = {};
                                    $scope.mfCtnRequestDeleteds = [];
                                    $scope.getMfCtnRequestPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //界面布局不存在MfOrderExtend表格。。
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象MfMultiVessel
                                if($scope && $scope.mfMultiVesselGrid) {
                                    if( $scope.mfMultiVesselGrid){
                                        if($scope.mfMultiVesselGrid.formController){
                                            var $validator = $scope.mfMultiVesselGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.mfMultiVesselGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.mfMultiVesselGrid,$scope.mfMultiVessels);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.mfMultiVesselGrid,$scope.mfMultiVessels);
                                        }

                                    }
                                    $scope.mfMultiVesselGrid._reset();
                                    $scope.mfMultiVessels.splice(0,$scope.mfMultiVessels.length);
                                    $scope.mfMultiVessel = {};
                                    $scope.mfMultiVesselDeleteds = [];
                                    $scope.getMfMultiVesselPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象ArBcFreight
                                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.arBcFreightGrid) {
                                    if( $scope.f0131ApiF01325Scope.arBcFreightGrid){
                                        if($scope.f0131ApiF01325Scope.arBcFreightGrid.formController){
                                            var $validator = $scope.f0131ApiF01325Scope.arBcFreightGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF01325Scope.arBcFreightGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.arBcFreightGrid,$scope.f0131ApiF01325Scope.arBcFreights);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.arBcFreightGrid,$scope.f0131ApiF01325Scope.arBcFreights);
                                        }

                                    }
                                    $scope.f0131ApiF01325Scope.arBcFreightGrid._reset();
                                    $scope.f0131ApiF01325Scope.arBcFreights.splice(0,$scope.f0131ApiF01325Scope.arBcFreights.length);
                                    $scope.f0131ApiF01325Scope.arBcFreight = {};
                                    $scope.f0131ApiF01325Scope.arBcFreightDeleteds = [];
                                    $scope.f0131ApiF01325Scope.getArBcFreightPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象ApBcFreight
                                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.apBcFreightGrid) {
                                    if( $scope.f0131ApiF01325Scope.apBcFreightGrid){
                                        if($scope.f0131ApiF01325Scope.apBcFreightGrid.formController){
                                            var $validator = $scope.f0131ApiF01325Scope.apBcFreightGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF01325Scope.apBcFreightGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.apBcFreightGrid,$scope.f0131ApiF01325Scope.apBcFreights);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.apBcFreightGrid,$scope.f0131ApiF01325Scope.apBcFreights);
                                        }

                                    }
                                    $scope.f0131ApiF01325Scope.apBcFreightGrid._reset();
                                    $scope.f0131ApiF01325Scope.apBcFreights.splice(0,$scope.f0131ApiF01325Scope.apBcFreights.length);
                                    $scope.f0131ApiF01325Scope.apBcFreight = {};
                                    $scope.f0131ApiF01325Scope.apBcFreightDeleteds = [];
                                    $scope.f0131ApiF01325Scope.getApBcFreightPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象ImOrder
                                if($scope.f0131ApiF013212Scope && $scope.f0131ApiF013212Scope.imOrderGrid) {
                                    if( $scope.f0131ApiF013212Scope.imOrderGrid){
                                        if($scope.f0131ApiF013212Scope.ImOrderForm && $scope.f0131ApiF013212Scope.ImOrderForm.$validator){
                                            $scope.f0131ApiF013212Scope.ImOrderForm.$validator.reset();
                                            $scope.f0131ApiF013212Scope.ImOrderForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF013212Scope.imOrderGrid._reset();
                                    $scope.f0131ApiF013212Scope.imOrders.splice(0,$scope.f0131ApiF013212Scope.imOrders.length);
                                    $scope.f0131ApiF013212Scope.imOrder = {};
                                    $scope.f0131ApiF013212Scope.imOrderDeleteds = [];
                                    $scope.f0131ApiF013212Scope.getImOrderPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //界面布局不存在MfOperationRequire表格。。
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象BkContainer
                                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.bkContainerGrid) {
                                    if( $scope.f0131ApiF01324Scope.bkContainerGrid){
                                        if($scope.f0131ApiF01324Scope.bkContainerGrid.formController){
                                            var $validator = $scope.f0131ApiF01324Scope.bkContainerGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF01324Scope.bkContainerGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.bkContainerGrid,$scope.f0131ApiF01324Scope.bkContainers);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.bkContainerGrid,$scope.f0131ApiF01324Scope.bkContainers);
                                        }

                                    }
                                    $scope.f0131ApiF01324Scope.bkContainerGrid._reset();
                                    $scope.f0131ApiF01324Scope.bkContainers.splice(0,$scope.f0131ApiF01324Scope.bkContainers.length);
                                    $scope.f0131ApiF01324Scope.bkContainer = {};
                                    $scope.f0131ApiF01324Scope.bkContainerDeleteds = [];
                                    $scope.f0131ApiF01324Scope.getBkContainerPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象MfContainer2Cargo
                                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.mfContainer2CargoGrid) {
                                    if( $scope.f0131ApiF01324Scope.mfContainer2CargoGrid){
                                        if($scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController){
                                            var $validator = $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF01324Scope.mfContainer2CargoGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.mfContainer2CargoGrid,$scope.f0131ApiF01324Scope.mfContainer2Cargos);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.mfContainer2CargoGrid,$scope.f0131ApiF01324Scope.mfContainer2Cargos);
                                        }

                                    }
                                    $scope.f0131ApiF01324Scope.mfContainer2CargoGrid._reset();
                                    $scope.f0131ApiF01324Scope.mfContainer2Cargos.splice(0,$scope.f0131ApiF01324Scope.mfContainer2Cargos.length);
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CdOrder
                                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrderGrid) {
                                    if( $scope.f0131ApiF013211Scope.cdOrderGrid){
                                        if($scope.f0131ApiF013211Scope.CdOrderForm && $scope.f0131ApiF013211Scope.CdOrderForm.$validator){
                                            $scope.f0131ApiF013211Scope.CdOrderForm.$validator.reset();
                                            $scope.f0131ApiF013211Scope.CdOrderForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF013211Scope.cdOrderGrid._reset();
                                    $scope.f0131ApiF013211Scope.cdOrders.splice(0,$scope.f0131ApiF013211Scope.cdOrders.length);
                                    $scope.f0131ApiF013211Scope.cdOrder = {};
                                    $scope.f0131ApiF013211Scope.cdOrderDeleteds = [];
                                    $scope.f0131ApiF013211Scope.getCdOrderPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CdOrder2Ctn
                                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrder2CtnGrid) {
                                    if( $scope.f0131ApiF013211Scope.cdOrder2CtnGrid){
                                        if($scope.f0131ApiF013211Scope.CdOrder2CtnForm && $scope.f0131ApiF013211Scope.CdOrder2CtnForm.$validator){
                                            $scope.f0131ApiF013211Scope.CdOrder2CtnForm.$validator.reset();
                                            $scope.f0131ApiF013211Scope.CdOrder2CtnForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF013211Scope.cdOrder2CtnGrid._reset();
                                    $scope.f0131ApiF013211Scope.cdOrder2Ctns.splice(0,$scope.f0131ApiF013211Scope.cdOrder2Ctns.length);
//					$scope.f0131ApiF013211Scope.cdOrder2Ctn = {};
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CdOrderDocument
                                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrderDocumentGrid) {
                                    if( $scope.f0131ApiF013211Scope.cdOrderDocumentGrid){
                                        if($scope.f0131ApiF013211Scope.CdOrderDocumentForm && $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator){
                                            $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator.reset();
                                            $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF013211Scope.cdOrderDocumentGrid._reset();
                                    $scope.f0131ApiF013211Scope.cdOrderDocuments.splice(0,$scope.f0131ApiF013211Scope.cdOrderDocuments.length);
//					$scope.f0131ApiF013211Scope.cdOrderDocument = {};
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CdOrderCargo
                                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrderCargoGrid) {
                                    if( $scope.f0131ApiF013211Scope.cdOrderCargoGrid){
                                        if($scope.f0131ApiF013211Scope.CdOrderCargoForm && $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator){
                                            $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator.reset();
                                            $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF013211Scope.cdOrderCargoGrid._reset();
                                    $scope.f0131ApiF013211Scope.cdOrderCargos.splice(0,$scope.f0131ApiF013211Scope.cdOrderCargos.length);
//					$scope.f0131ApiF013211Scope.cdOrderCargo = {};
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象MfBookingCargo
                                if($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargoGrid) {
                                    if( $scope.f0131ApiF01323Scope.mfBookingCargoGrid){
                                        if($scope.f0131ApiF01323Scope.MfBookingCargoForm && $scope.f0131ApiF01323Scope.MfBookingCargoForm.$validator){
                                            $scope.f0131ApiF01323Scope.MfBookingCargoForm.$validator.reset();
                                            $scope.f0131ApiF01323Scope.MfBookingCargoForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF01323Scope.mfBookingCargoGrid._reset();
                                    $scope.f0131ApiF01323Scope.mfBookingCargos.splice(0,$scope.f0131ApiF01323Scope.mfBookingCargos.length);
                                    $scope.f0131ApiF01323Scope.mfBookingCargo = {};
                                    $scope.f0131ApiF01323Scope.mfBookingCargoDeleteds = [];
                                    $scope.f0131ApiF01323Scope.getMfBookingCargoPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                if($scope._pageState) $scope._pageState.resetDataState();
                                //TODO linjx  generatorMethodExtendCallBacks
                                //S   2   execContent:generateGoOrder4MFE
                                $scope.confirmAfterUpdate();
                                //S   2   execContent:getOrderProcedureMFE
                                GillionMsg.alert("提示",data.msg,null);
                                var indexScope = top.angular.element("body").scope();
                                indexScope.refresh($scope.openType,"MfOrder");
                            }
                        });
                    }
                }//callback
                var gridRequiresPromises = [];
                if($scope.mfCtnRequestGrid && $scope.mfCtnRequestGrid.tbody.rows[0]){
                    var mfCtnRequestRequiresPromise = $scope.mfCtnRequestGrid.verifySourceRequires();
                    gridRequiresPromises.push(mfCtnRequestRequiresPromise);
                }
                if($scope.mfMultiVesselGrid && $scope.mfMultiVesselGrid.tbody.rows[0]){
                    var mfMultiVesselRequiresPromise = $scope.mfMultiVesselGrid.verifySourceRequires();
                    gridRequiresPromises.push(mfMultiVesselRequiresPromise);
                }
                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.bkContainerGrid && $scope.f0131ApiF01324Scope.bkContainerGrid.tbody.rows[0]){
                    var bkContainerRequiresPromise = $scope.f0131ApiF01324Scope.bkContainerGrid.verifySourceRequires();
                    gridRequiresPromises.push(bkContainerRequiresPromise);
                }
                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.mfContainer2CargoGrid && $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.tbody.rows[0]){
                    var mfContainer2CargoRequiresPromise = $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.verifySourceRequires();
                    gridRequiresPromises.push(mfContainer2CargoRequiresPromise);
                }
                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.arBcFreightGrid && $scope.f0131ApiF01324Scope.arBcFreightGrid.tbody.rows[0]){
                    var arBcFreightRequiresPromise = $scope.f0131ApiF01324Scope.arBcFreightGrid.verifySourceRequires();
                    gridRequiresPromises.push(arBcFreightRequiresPromise);
                }
                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.apBcFreightGrid && $scope.f0131ApiF01324Scope.apBcFreightGrid.tbody.rows[0]){
                    var apBcFreightRequiresPromise = $scope.f0131ApiF01324Scope.apBcFreightGrid.verifySourceRequires();
                    gridRequiresPromises.push(apBcFreightRequiresPromise);
                }
                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.arBcFreightGrid && $scope.f0131ApiF01325Scope.arBcFreightGrid.tbody.rows[0]){
                    var arBcFreightRequiresPromise = $scope.f0131ApiF01325Scope.arBcFreightGrid.verifySourceRequires();
                    gridRequiresPromises.push(arBcFreightRequiresPromise);
                }
                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.apBcFreightGrid && $scope.f0131ApiF01325Scope.apBcFreightGrid.tbody.rows[0]){
                    var apBcFreightRequiresPromise = $scope.f0131ApiF01325Scope.apBcFreightGrid.verifySourceRequires();
                    gridRequiresPromises.push(apBcFreightRequiresPromise);
                }
                if($scope.f0131ApiF01328Scope && $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid && $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.tbody.rows[0]){
                    var tmOrderCtnRequestCopyRequiresPromise = $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.verifySourceRequires();
                    gridRequiresPromises.push(tmOrderCtnRequestCopyRequiresPromise);
                }
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid && $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.tbody.rows[0]){
                    var ciOrderDocAttachRequiresPromise = $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.verifySourceRequires();
                    gridRequiresPromises.push(ciOrderDocAttachRequiresPromise);
                }
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderDocumentGrid && $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.tbody.rows[0]){
                    var ciOrderDocumentRequiresPromise = $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.verifySourceRequires();
                    gridRequiresPromises.push(ciOrderDocumentRequiresPromise);
                }
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderCargoGrid && $scope.f0131ApiF013210Scope.ciOrderCargoGrid.tbody.rows[0]){
                    var ciOrderCargoRequiresPromise = $scope.f0131ApiF013210Scope.ciOrderCargoGrid.verifySourceRequires();
                    gridRequiresPromises.push(ciOrderCargoRequiresPromise);
                }
                if(gridRequiresPromises && gridRequiresPromises.length>0) {
                    $q.all(gridRequiresPromises).then(function() {
                        callback();
                    }).catch(function(result) {
                        console.log("数据校验未通过！");
                        //TABS F0-1-3-1
                        //TAB y F0-1-3-2-10 F0131Api 0
                        var tabs10_F0131Api_Require_Valid = true ;
                        if($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid && $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController){
                            if(!$scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController.$valid || $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.$$requireGridValid;
                                tabs10_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.f0131ApiF013210Scope.ciOrderDocumentGrid && $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController){
                            if(!$scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController.$valid || $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.$$requireGridValid;
                                tabs10_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.f0131ApiF013210Scope.ciOrderCargoGrid && $scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController){
                            if(!$scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController.$valid || $scope.f0131ApiF013210Scope.ciOrderCargoGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF013210Scope.ciOrderCargoGrid.$$requireGridValid;
                                tabs10_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if(!tabs10_F0131Api_Require_Valid){
                            $scope.F0131Api.selectTab(9);
                        }
                        //TAB y F0-1-3-2-8 F0131Api 0
                        var tabs8_F0131Api_Require_Valid = true ;
                        if($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid && $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.formController){
                            if(!$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.formController.$valid || $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.$$requireGridValid;
                                tabs8_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if(!tabs8_F0131Api_Require_Valid){
                            $scope.F0131Api.selectTab(7);
                        }
                        //TAB y F0-1-3-2-5 F0131Api 0
                        var tabs5_F0131Api_Require_Valid = true ;
                        if($scope.f0131ApiF01325Scope.arBcFreightGrid && $scope.f0131ApiF01325Scope.arBcFreightGrid.formController){
                            if(!$scope.f0131ApiF01325Scope.arBcFreightGrid.formController.$valid || $scope.f0131ApiF01325Scope.arBcFreightGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01325Scope.arBcFreightGrid.$$requireGridValid;
                                tabs5_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.f0131ApiF01325Scope.apBcFreightGrid && $scope.f0131ApiF01325Scope.apBcFreightGrid.formController){
                            if(!$scope.f0131ApiF01325Scope.apBcFreightGrid.formController.$valid || $scope.f0131ApiF01325Scope.apBcFreightGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01325Scope.apBcFreightGrid.$$requireGridValid;
                                tabs5_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if(!tabs5_F0131Api_Require_Valid){
                            $scope.F0131Api.selectTab(4);
                        }
                        //TAB y F0-1-3-2-4 F0131Api 0
                        var tabs4_F0131Api_Require_Valid = true ;
                        if($scope.f0131ApiF01324Scope.bkContainerGrid && $scope.f0131ApiF01324Scope.bkContainerGrid.formController){
                            if(!$scope.f0131ApiF01324Scope.bkContainerGrid.formController.$valid || $scope.f0131ApiF01324Scope.bkContainerGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01324Scope.bkContainerGrid.$$requireGridValid;
                                tabs4_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.f0131ApiF01324Scope.mfContainer2CargoGrid && $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController){
                            if(!$scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController.$valid || $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.$$requireGridValid;
                                tabs4_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.f0131ApiF01324Scope.arBcFreightGrid && $scope.f0131ApiF01324Scope.arBcFreightGrid.formController){
                            if(!$scope.f0131ApiF01324Scope.arBcFreightGrid.formController.$valid || $scope.f0131ApiF01324Scope.arBcFreightGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01324Scope.arBcFreightGrid.$$requireGridValid;
                                tabs4_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.f0131ApiF01324Scope.apBcFreightGrid && $scope.f0131ApiF01324Scope.apBcFreightGrid.formController){
                            if(!$scope.f0131ApiF01324Scope.apBcFreightGrid.formController.$valid || $scope.f0131ApiF01324Scope.apBcFreightGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01324Scope.apBcFreightGrid.$$requireGridValid;
                                tabs4_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if(!tabs4_F0131Api_Require_Valid){
                            $scope.F0131Api.selectTab(3);
                        }
                        //TAB y F0-1-3-2-1 F0131Api 0
                        var tabs1_F0131Api_Require_Valid = true ;
                        if($scope.mfCtnRequestGrid && $scope.mfCtnRequestGrid.formController){
                            if(!$scope.mfCtnRequestGrid.formController.$valid || $scope.mfCtnRequestGrid.$$requireGridValid==false){
                                delete $scope.mfCtnRequestGrid.$$requireGridValid;
                                tabs1_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.mfMultiVesselGrid && $scope.mfMultiVesselGrid.formController){
                            if(!$scope.mfMultiVesselGrid.formController.$valid || $scope.mfMultiVesselGrid.$$requireGridValid==false){
                                delete $scope.mfMultiVesselGrid.$$requireGridValid;
                                tabs1_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if(!tabs1_F0131Api_Require_Valid){
                            $scope.F0131Api.selectTab(0);
                        }
                    }).finally(function(result) {
                        console.log("执行表格非空校验.");
                    });
                } else {
                    callback();
                }

                if($scope.f0131ApiF01322Scope&&$scope.f0131ApiF01322Scope.resetPageStatus)
                    $scope.f0131ApiF01322Scope.resetPageStatus();
                if($scope.f0131ApiF01324Scope&&$scope.f0131ApiF01324Scope.resetPageStatus)
                    $scope.f0131ApiF01324Scope.resetPageStatus();
                if($scope.f0131ApiF01325Scope&&$scope.f0131ApiF01325Scope.resetPageStatus)
                    $scope.f0131ApiF01325Scope.resetPageStatus();
                if($scope.f0131ApiF01328Scope&&$scope.f0131ApiF01328Scope.resetPageStatus)
                    $scope.f0131ApiF01328Scope.resetPageStatus();
            };

            /**
             * 保存 海运出口制作
             */
            $scope.saveOrUpdate = function(){
                //校验联想控件是否初始化完
                if(!$scope._associateInitValid($scope)){
                    return ;
                }
                //haveTabLoadSupport : X
                $scope.bindTabProp('f0131ApiF01322Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01322Url) || {});
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                $scope.bindTabProp('f0131ApiF01324Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01324Url) || {});
                $scope.bindTabProp('f0131ApiF01325Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01325Url) || {});
                $scope.bindTabProp('f0131ApiF01326Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01326Url) || {});
                $scope.bindTabProp('f0131ApiF01328Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01328Url) || {});
                $scope.bindTabProp('f0131ApiF013210Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF013210Url) || {});
                $scope.bindTabProp('f0131ApiF013211Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF013211Url) || {});
                $scope.bindTabProp('f0131ApiF013212Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF013212Url) || {});
                $scope.bindTabProp('f0131ApiF013213Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF013213Url) || {});
                //generatorSubBoGridClear isNewConfig:Y
                //子对象TmOrderToMfOrder
                if($scope.f0131ApiF01328Scope && $scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid) {
                    if($scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid && $scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid.formController && $scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid.formController){
                        if($scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid,$scope.f0131ApiF01328Scope.tmOrderToMfOrders);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid,$scope.f0131ApiF01328Scope.tmOrderToMfOrders);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象TmOrderCtnRequestCopy
                if($scope.f0131ApiF01328Scope && $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid) {
                    if( $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid){
                        if($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.formController){
                            var $validator = $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.formController.$validator;
                            if($validator){
                                $validator.disable();
                                $validator.reset();
                            }

                            //$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.finishEdit();
                            $scope._finishEditGridWrap($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid,$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopys);

                            if($validator){
                                $validator.enable();
                            }
                        }else{
                            $scope._finishEditGridWrap($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid,$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopys);
                        }

                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象VbcFreightStatistics
                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid) {
                    if($scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid && $scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid.formController && $scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid.formController){
                        if($scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid,$scope.f0131ApiF01325Scope.vbcFreightStatisticss);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid,$scope.f0131ApiF01325Scope.vbcFreightStatisticss);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CiOrder
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderGrid) {
                    if($scope.f0131ApiF013210Scope.ciOrderGrid && $scope.f0131ApiF013210Scope.ciOrderGrid.formController && $scope.f0131ApiF013210Scope.ciOrderGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF013210Scope.ciOrderGrid.formController){
                        if($scope.f0131ApiF013210Scope.ciOrderGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderGrid,$scope.f0131ApiF013210Scope.ciOrders);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderGrid,$scope.f0131ApiF013210Scope.ciOrders);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CiOrderDocAttach
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid) {
                    if( $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid){
                        if($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController){
                            var $validator = $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController.$validator;
                            if($validator){
                                $validator.disable();
                                $validator.reset();
                            }

                            //$scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.finishEdit();
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid,$scope.f0131ApiF013210Scope.ciOrderDocAttachs);

                            if($validator){
                                $validator.enable();
                            }
                        }else{
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid,$scope.f0131ApiF013210Scope.ciOrderDocAttachs);
                        }

                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CiOrderCargo
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderCargoGrid) {
                    if( $scope.f0131ApiF013210Scope.ciOrderCargoGrid){
                        if($scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController){
                            var $validator = $scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController.$validator;
                            if($validator){
                                $validator.disable();
                                $validator.reset();
                            }

                            //$scope.f0131ApiF013210Scope.ciOrderCargoGrid.finishEdit();
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderCargoGrid,$scope.f0131ApiF013210Scope.ciOrderCargos);

                            if($validator){
                                $validator.enable();
                            }
                        }else{
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderCargoGrid,$scope.f0131ApiF013210Scope.ciOrderCargos);
                        }

                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CiOrderDocument
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderDocumentGrid) {
                    if( $scope.f0131ApiF013210Scope.ciOrderDocumentGrid){
                        if($scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController){
                            var $validator = $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController.$validator;
                            if($validator){
                                $validator.disable();
                                $validator.reset();
                            }

                            //$scope.f0131ApiF013210Scope.ciOrderDocumentGrid.finishEdit();
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocumentGrid,$scope.f0131ApiF013210Scope.ciOrderDocuments);

                            if($validator){
                                $validator.enable();
                            }
                        }else{
                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocumentGrid,$scope.f0131ApiF013210Scope.ciOrderDocuments);
                        }

                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象MfCtnRequest
                if($scope && $scope.mfCtnRequestGrid) {
                    if($scope.mfCtnRequestGrid && $scope.mfCtnRequestGrid.formController && $scope.mfCtnRequestGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.mfCtnRequestGrid.formController){
                        if($scope.mfCtnRequestGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.mfCtnRequestGrid,$scope.mfCtnRequests);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.mfCtnRequestGrid,$scope.mfCtnRequests);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //界面布局不存在MfOrderExtend表格。。
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象MfMultiVessel
                if($scope && $scope.mfMultiVesselGrid) {
                    if($scope.mfMultiVesselGrid && $scope.mfMultiVesselGrid.formController && $scope.mfMultiVesselGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.mfMultiVesselGrid.formController){
                        if($scope.mfMultiVesselGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.mfMultiVesselGrid,$scope.mfMultiVessels);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.mfMultiVesselGrid,$scope.mfMultiVessels);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象ArBcFreight
                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.arBcFreightGrid) {
                    if($scope.f0131ApiF01325Scope.arBcFreightGrid && $scope.f0131ApiF01325Scope.arBcFreightGrid.formController && $scope.f0131ApiF01325Scope.arBcFreightGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF01325Scope.arBcFreightGrid.formController){
                        if($scope.f0131ApiF01325Scope.arBcFreightGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.arBcFreightGrid,$scope.f0131ApiF01325Scope.arBcFreights);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.arBcFreightGrid,$scope.f0131ApiF01325Scope.arBcFreights);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象ApBcFreight
                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.apBcFreightGrid) {
                    if($scope.f0131ApiF01325Scope.apBcFreightGrid && $scope.f0131ApiF01325Scope.apBcFreightGrid.formController && $scope.f0131ApiF01325Scope.apBcFreightGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF01325Scope.apBcFreightGrid.formController){
                        if($scope.f0131ApiF01325Scope.apBcFreightGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.apBcFreightGrid,$scope.f0131ApiF01325Scope.apBcFreights);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.apBcFreightGrid,$scope.f0131ApiF01325Scope.apBcFreights);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象ImOrder
                if($scope.f0131ApiF013212Scope && $scope.f0131ApiF013212Scope.imOrderGrid) {
                    if($scope.f0131ApiF013212Scope.imOrderGrid && $scope.f0131ApiF013212Scope.imOrderGrid.formController && $scope.f0131ApiF013212Scope.imOrderGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF013212Scope.imOrderGrid.formController){
                        if($scope.f0131ApiF013212Scope.imOrderGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF013212Scope.imOrderGrid,$scope.f0131ApiF013212Scope.imOrders);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF013212Scope.imOrderGrid,$scope.f0131ApiF013212Scope.imOrders);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //界面布局不存在MfOperationRequire表格。。
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象BkContainer
                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.bkContainerGrid) {
                    if($scope.f0131ApiF01324Scope.bkContainerGrid && $scope.f0131ApiF01324Scope.bkContainerGrid.formController && $scope.f0131ApiF01324Scope.bkContainerGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF01324Scope.bkContainerGrid.formController){
                        if($scope.f0131ApiF01324Scope.bkContainerGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.bkContainerGrid,$scope.f0131ApiF01324Scope.bkContainers);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.bkContainerGrid,$scope.f0131ApiF01324Scope.bkContainers);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象MfContainer2Cargo
                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.mfContainer2CargoGrid) {
                    if( $scope.f0131ApiF01324Scope.mfContainer2CargoGrid){
                        if($scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController){
                            var $validator = $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController.$validator;
                            if($validator){
                                $validator.disable();
                                $validator.reset();
                            }

                            //$scope.f0131ApiF01324Scope.mfContainer2CargoGrid.finishEdit();
                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.mfContainer2CargoGrid,$scope.f0131ApiF01324Scope.mfContainer2Cargos);

                            if($validator){
                                $validator.enable();
                            }
                        }else{
                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.mfContainer2CargoGrid,$scope.f0131ApiF01324Scope.mfContainer2Cargos);
                        }

                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CdOrder
                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrderGrid) {
                    if($scope.f0131ApiF013211Scope.cdOrderGrid && $scope.f0131ApiF013211Scope.cdOrderGrid.formController && $scope.f0131ApiF013211Scope.cdOrderGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF013211Scope.cdOrderGrid.formController){
                        if($scope.f0131ApiF013211Scope.cdOrderGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF013211Scope.cdOrderGrid,$scope.f0131ApiF013211Scope.cdOrders);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF013211Scope.cdOrderGrid,$scope.f0131ApiF013211Scope.cdOrders);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CdOrder2Ctn
                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrder2CtnGrid) {
                    if( $scope.f0131ApiF013211Scope.cdOrder2CtnGrid){
                        if($scope.f0131ApiF013211Scope.CdOrder2CtnForm && $scope.f0131ApiF013211Scope.CdOrder2CtnForm.$validator){
                            $scope.f0131ApiF013211Scope.CdOrder2CtnForm.$validator.reset();
                            $scope.f0131ApiF013211Scope.CdOrder2CtnForm.$validator.disable();
                        }
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CdOrderDocument
                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrderDocumentGrid) {
                    if( $scope.f0131ApiF013211Scope.cdOrderDocumentGrid){
                        if($scope.f0131ApiF013211Scope.CdOrderDocumentForm && $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator){
                            $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator.reset();
                            $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator.disable();
                        }
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象CdOrderCargo
                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrderCargoGrid) {
                    if( $scope.f0131ApiF013211Scope.cdOrderCargoGrid){
                        if($scope.f0131ApiF013211Scope.CdOrderCargoForm && $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator){
                            $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator.reset();
                            $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator.disable();
                        }
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                //子对象MfBookingCargo
                if($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargoGrid) {
                    if($scope.f0131ApiF01323Scope.mfBookingCargoGrid && $scope.f0131ApiF01323Scope.mfBookingCargoGrid.formController && $scope.f0131ApiF01323Scope.mfBookingCargoGrid.formController.$valid==false){
                        //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                        //return ;
                    }

                    if($scope.f0131ApiF01323Scope.mfBookingCargoGrid.formController){
                        if($scope.f0131ApiF01323Scope.mfBookingCargoGrid.formController.$valid){
                            $scope._finishEditGridWrap($scope.f0131ApiF01323Scope.mfBookingCargoGrid,$scope.f0131ApiF01323Scope.mfBookingCargos);
                        }
                    }
                    else{
                        $scope._finishEditGridWrap($scope.f0131ApiF01323Scope.mfBookingCargoGrid,$scope.f0131ApiF01323Scope.mfBookingCargos);
                    }
                }
                //subBo
                //generatorSubBoGridClear isNewConfig:Y
                if($scope.MfOrderFormTop && $scope.MfOrderFormTop.$validator && $scope.MfOrderFormTop.verify && $scope.mfOrder && $scope.mfOrder.hasOwnProperty('mfOrderId')){
                    $scope.MfOrderFormTop.$validator.enable();
                    $scope.MfOrderFormTop.verify();
                }
                if ($scope.MfOperationRequireForm && $scope.MfOperationRequireForm.$validator && $scope.MfOperationRequireForm.verify && $scope.mfOrder && $scope.mfOrder.hasOwnProperty('mfOrderId')) {
                    $scope.MfOperationRequireForm.$validator.enable();
                    $scope.MfOperationRequireForm.verify();
                }
                if($scope.MfOrderForm && $scope.MfOrderForm.$validator && $scope.MfOrderForm.verify && $scope.mfOrder && $scope.mfOrder.hasOwnProperty('mfOrderId')){
                    $scope.MfOrderForm.$validator.enable();
                    $scope.MfOrderForm.verify();
                }
                if($scope.isBulkyCargo && $scope.isBulkyCargo.$validator && $scope.isBulkyCargo.verify && $scope.mfOrder && $scope.mfOrder.hasOwnProperty('mfOrderId')){
                    $scope.isBulkyCargo.$validator.enable();
                    $scope.isBulkyCargo.verify();
                }
                if($scope.isHazardForm && $scope.isHazardForm.$validator && $scope.isHazardForm.verify && $scope.mfOrder && $scope.mfOrder.hasOwnProperty('mfOrderId')){
                    $scope.isHazardForm.$validator.enable();
                    $scope.isHazardForm.verify();
                }
                if($scope.isReeferForm && $scope.isReeferForm.$validator && $scope.isReeferForm.verify && $scope.mfOrder && $scope.mfOrder.hasOwnProperty('mfOrderId')){
                    $scope.isReeferForm.$validator.enable();
                    $scope.isReeferForm.verify();
                }
                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.CdOrder2Ctn && $scope.f0131ApiF013211Scope.CdOrder2Ctn.$validator && $scope.f0131ApiF013211Scope.CdOrder2Ctn.verify && $scope.f0131ApiF013211Scope.mfOrder && $scope.f0131ApiF013211Scope.mfOrder.hasOwnProperty('mfOrderId')){
                    $scope.f0131ApiF013211Scope.CdOrder2Ctn.$validator.enable();
                    $scope.f0131ApiF013211Scope.CdOrder2Ctn.verify();
                }
                var allValidationFlag = true ;
                //TABS F0-1-3-1
                //TAB  F0-1-3-2-13 F0131Api 0
                var tabs13_F0131Api_Valid = true ;
                if(!tabs13_F0131Api_Valid){
                    $scope.F0131Api.selectTab(12);

                }
                //TAB  F0-1-3-2-12 F0131Api 0
                var tabs12_F0131Api_Valid = true ;
                // DIV;;F0-1-3-2-12-1
                // DIV;GRID;F0-1-3-2-12-1-1

                if($scope.f0131ApiF013212Scope.imOrder && $scope.f0131ApiF013212Scope.imOrder.imOrderId && $scope.f0131ApiF013212Scope.ImOrderForm){
                    if($scope.f0131ApiF013212Scope.ImOrderForm.$validator && $scope.f0131ApiF013212Scope.ImOrderForm.verify){
                        $scope.f0131ApiF013212Scope.ImOrderForm.$validator.enable();
                        $scope.f0131ApiF013212Scope.ImOrderForm.verify();
                    }
                    if(!$scope.f0131ApiF013212Scope.ImOrderForm.$valid){
                        tabs12_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;GRID_TOOLBAR;F0-1-3-2-12-1-2
                // DIV;FORM_CELL;F0-1-3-2-12-1-3
                if(!tabs12_F0131Api_Valid){
                    $scope.F0131Api.selectTab(11);

                }
                //TAB  F0-1-3-2-11 F0131Api 0
                var tabs11_F0131Api_Valid = true ;
                // DIV;REFERENCE;F0-1-3-2-11-1
                // DIV;;F0
                // DIV;GRID_TOOLBAR;F0-2
                // DIV;GRID;F0-1

                if($scope.f0131ApiF013211Scope.cdOrder && $scope.f0131ApiF013211Scope.cdOrder.cdOrderId && $scope.f0131ApiF013211Scope.CdOrderForm){
                    if($scope.f0131ApiF013211Scope.CdOrderForm.$validator && $scope.f0131ApiF013211Scope.CdOrderForm.verify){
                        $scope.f0131ApiF013211Scope.CdOrderForm.$validator.enable();
                        $scope.f0131ApiF013211Scope.CdOrderForm.verify();
                    }
                    if(!$scope.f0131ApiF013211Scope.CdOrderForm.$valid){
                        tabs11_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;REFERENCE;F0-1-3-2-11-2
                // DIV;;F1
                // DIV;;F1-1
                // DIV;;F1-1-1
                // DIV;;F1-1-1-1
                // GROUP;;F1-1-1-1-1-1
                // DIV;;F1-1-1-1-1-1-1-0
                // DIV;;F1-1-1-1-1-1-1
                // DIV;;F1-1-1-1-1-1-1-1
                // DIV;;F1-1-1-1-1-1-1-2
                // DIV;;F1-1-1-1-1-1-1-3
                // DIV;;F1-1-1-1-1-1-1-4
                // DIV;;F1-1-1-1-1-1-1-5
                // DIV;;F1-1-1-1-1-1-1-6
                // DIV;;F1-1-1-1-1-1-1-7
                // DIV;;F1-1-1-1-1-1-1-8
                // DIV;;F1-1-1-1-1-1-1-9
                // DIV;;F1-1-1-1-1-1-1-10
                // DIV;;F1-1-1-1-1-1-1-11
                // DIV;;F1-1-1-1-1-1-2
                // DIV;;F1-1-1-1-1-1-2-1
                // DIV;;F1-1-1-1-1-1-2-2
                // DIV;;F1-1-1-1-1-1-2-3
                // DIV;;F1-1-1-1-1-1-2-4
                // DIV;;F1-1-1-1-1-1-2-5
                // DIV;;F1-1-1-1-1-1-2-6
                // DIV;;F1-1-1-1-1-1-2-7
                // DIV;;F1-1-1-1-1-1-2-8
                // DIV;;F1-1-1-1-1-1-2-8-1
                // DIV;;F1-1-1-1-1-1-2-8-2
                // DIV;;F1-1-1-1-1-1-2-9
                // DIV;;F1-1-1-1-1-1-2-10
                // DIV;;F1-1-1-1-1-1-2-11
                // DIV;;F1-1-1-1-1-1-3
                // DIV;;F1-1-1-1-1-1-3-1
                // DIV;;F1-1-1-1-1-1-3-2
                // DIV;;F1-1-1-1-1-1-3-3
                // DIV;;F1-1-1-1-1-1-3-4
                // DIV;;F1-1-1-1-1-1-3-5
                // DIV;;F1-1-1-1-1-1-3-6
                // DIV;;F1-1-1-1-1-1-3-7
                // DIV;;F1-1-1-1-1-1-3-8
                // DIV;;F1-1-1-1-1-1-3-9
                // DIV;;F1-1-1-1-1-1-3-10
                // DIV;;F1-1-1-1-1-1-3-11
                // DIV;;F1-1-1-1-1-1-4
                // DIV;;F1-1-1-1-1-1-4-1
                // DIV;;F1-1-1-1-1-1-4-2
                // DIV;;F1-1-1-1-1-1-4-3
                // DIV;;F1-1-1-1-1-1-4-4
                // DIV;;F1-1-1-1-1-1-4-5
                // DIV;;F1-1-1-1-1-1-4-6
                // DIV;;F1-1-1-1-1-1-4-7
                // DIV;;F1-1-1-1-1-1-4-8
                // DIV;;F1-1-1-1-1-1-4-9
                // DIV;;F1-1-1-1-1-1-4-10
                // DIV;;F1-1-1-1-1-1-4-10-1
                // DIV;;F1-1-1-1-1-1-4-10-2
                // DIV;;F1-1-1-1-1-1-4-11
                // DIV;;F1-1-1-2
                // DIV;;F1-1-1-2-1
                // GROUP;;F1-1-1-2-1-1
                // DIV;GRID_TOOLBAR;F1-1-1-2-1-1-2
                // DIV;GRID;F1-1-1-2-1-1-1

                if($scope.f0131ApiF013211Scope.cdOrderCargo && $scope.f0131ApiF013211Scope.cdOrderCargo.cdOrderCargoId && $scope.f0131ApiF013211Scope.CdOrderCargoForm){
                    if($scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator && $scope.f0131ApiF013211Scope.CdOrderCargoForm.verify){
                        $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator.enable();
                        $scope.f0131ApiF013211Scope.CdOrderCargoForm.verify();
                    }
                    if(!$scope.f0131ApiF013211Scope.CdOrderCargoForm.$valid){
                        tabs11_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F1-1-1-2-1-1-3
                // DIV;;F1-1-1-2-1-1-3-1
                // PANEL;;F1-1-1-2-1-1-3-1-1
                // DIV;;F1-1-1-2-1-1-3-1-1-1
                // DIV;;F1-1-1-2-1-1-3-1-1-2
                // DIV;;F1-1-1-2-1-1-3-1-1-3
                // DIV;;F1-1-1-2-1-1-3-1-1-4
                // DIV;;F1-1-1-2-1-1-3-1-1-5
                // DIV;;F1-1-1-2-1-1-3-2
                // PANEL;;F1-1-1-2-1-1-3-2-1
                // DIV;;F1-1-1-2-1-1-3-2-1-1
                // DIV;;F1-1-1-2-1-1-3-2-1-2
                // DIV;;F1-1-1-2-1-1-3-2-1-3
                // DIV;;F1-1-1-2-1-1-3-2-1-4
                // DIV;;F1-1-1-2-1-1-3-2-1-5
                // DIV;;F1-1-1-2-1-1-3-3
                // PANEL;;F1-1-1-2-1-1-3-3-1
                // DIV;;F1-1-1-2-1-1-3-3-1-1
                // DIV;;F1-1-1-2-1-1-3-3-1-2
                // DIV;;F1-1-1-2-1-1-3-3-1-3
                // DIV;;F1-1-1-2-1-1-3-3-1-4
                // DIV;;F1-1-1-2-1-1-3-3-1-5
                // DIV;;F1-1-1-2-1-1-3-4
                // PANEL;;F1-1-1-2-1-1-3-4-1
                // DIV;;F1-1-1-2-1-1-3-4-1-1
                // DIV;;F1-1-1-2-1-1-3-4-1-2
                // DIV;;F1-1-1-2-1-1-3-4-1-3
                // DIV;;F1-1-1-2-1-1-3-4-1-4
                // DIV;;F1-1-1-2-1-1-3-4-1-5
                // DIV;;F1-1-2
                // DIV;;F1-1-2-1
                // GROUP;;F1-1-2-1-1
                // FORM;;F1-1-2-1-1-1-0
                if($scope.f0131ApiF013211Scope &&  $scope.f0131ApiF013211Scope.CdOrder2Ctn && !$scope.f0131ApiF013211Scope.CdOrder2Ctn.$valid){
                    tabs11_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                // DIV;;F1-1-2-1-1-3
                // DIV;;F1-1-2-1-1-3-1
                // DIV;;F1-1-2-1-1-3-2
                // DIV;;F1-1-2-1-1-3-3
                // DIV;GRID_TOOLBAR;F1-1-2-1-1-5
                // DIV;GRID;F1-1-2-1-1-4

                if($scope.f0131ApiF013211Scope.cdOrderDocument && $scope.f0131ApiF013211Scope.cdOrderDocument.cdOrderDocumentId && $scope.f0131ApiF013211Scope.CdOrderDocumentForm){
                    if($scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator && $scope.f0131ApiF013211Scope.CdOrderDocumentForm.verify){
                        $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator.enable();
                        $scope.f0131ApiF013211Scope.CdOrderDocumentForm.verify();
                    }
                    if(!$scope.f0131ApiF013211Scope.CdOrderDocumentForm.$valid){
                        tabs11_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F1-1-2-1-1-6
                // PANEL;;F1-1-2-1-1-6-1
                // DIV;;F1-1-2-1-1-6-1-1
                // DIV;;F1-1-2-1-1-6-1-2
                // DIV;;F1-1-2-1-1-6-1-3
                // DIV;;F1-1-2-1-1-6-1-4
                // DIV;;F1-1-2-1-1-6-1-5
                // DIV;;F1-1-2-1-1-6-1-6
                // DIV;;F1-1-2-1-1-6-1-7
                // DIV;;F1-1-2-1-1-6-1-8
                // DIV;;F1-1-2-1-1-6-1-9
                if(!tabs11_F0131Api_Valid){
                    $scope.F0131Api.selectTab(10);
                    var errF013211s = [];
                    // DIV F0-1-3-2-11-1
                    // DIV F0
                    // DIV F0-2
                    // DIV F0-1
                    // DIV F0-1-3-2-11-2
                    // DIV F1
                    // DIV F1-1
                    // DIV F1-1-1
                    // DIV F1-1-1-1
                    // GROUP F1-1-1-1-1-1
                    // DIV F1-1-1-1-1-1-1-0
                    // DIV F1-1-1-1-1-1-1
                    // DIV F1-1-1-1-1-1-1-1
                    // DIV F1-1-1-1-1-1-1-2
                    // DIV F1-1-1-1-1-1-1-3
                    // DIV F1-1-1-1-1-1-1-4
                    // DIV F1-1-1-1-1-1-1-5
                    // DIV F1-1-1-1-1-1-1-6
                    // DIV F1-1-1-1-1-1-1-7
                    // DIV F1-1-1-1-1-1-1-8
                    // DIV F1-1-1-1-1-1-1-9
                    // DIV F1-1-1-1-1-1-1-10
                    // DIV F1-1-1-1-1-1-1-11
                    // DIV F1-1-1-1-1-1-2
                    // DIV F1-1-1-1-1-1-2-1
                    // DIV F1-1-1-1-1-1-2-2
                    // DIV F1-1-1-1-1-1-2-3
                    // DIV F1-1-1-1-1-1-2-4
                    // DIV F1-1-1-1-1-1-2-5
                    // DIV F1-1-1-1-1-1-2-6
                    // DIV F1-1-1-1-1-1-2-7
                    // DIV F1-1-1-1-1-1-2-8
                    // DIV F1-1-1-1-1-1-2-8-1
                    // DIV F1-1-1-1-1-1-2-8-2
                    // DIV F1-1-1-1-1-1-2-9
                    // DIV F1-1-1-1-1-1-2-10
                    // DIV F1-1-1-1-1-1-2-11
                    // DIV F1-1-1-1-1-1-3
                    // DIV F1-1-1-1-1-1-3-1
                    // DIV F1-1-1-1-1-1-3-2
                    // DIV F1-1-1-1-1-1-3-3
                    // DIV F1-1-1-1-1-1-3-4
                    // DIV F1-1-1-1-1-1-3-5
                    // DIV F1-1-1-1-1-1-3-6
                    // DIV F1-1-1-1-1-1-3-7
                    // DIV F1-1-1-1-1-1-3-8
                    // DIV F1-1-1-1-1-1-3-9
                    // DIV F1-1-1-1-1-1-3-10
                    // DIV F1-1-1-1-1-1-3-11
                    // DIV F1-1-1-1-1-1-4
                    // DIV F1-1-1-1-1-1-4-1
                    // DIV F1-1-1-1-1-1-4-2
                    // DIV F1-1-1-1-1-1-4-3
                    // DIV F1-1-1-1-1-1-4-4
                    // DIV F1-1-1-1-1-1-4-5
                    // DIV F1-1-1-1-1-1-4-6
                    // DIV F1-1-1-1-1-1-4-7
                    // DIV F1-1-1-1-1-1-4-8
                    // DIV F1-1-1-1-1-1-4-9
                    // DIV F1-1-1-1-1-1-4-10
                    // DIV F1-1-1-1-1-1-4-10-1
                    // DIV F1-1-1-1-1-1-4-10-2
                    // DIV F1-1-1-1-1-1-4-11
                    // DIV F1-1-1-2
                    // DIV F1-1-1-2-1
                    // GROUP F1-1-1-2-1-1
                    // DIV F1-1-1-2-1-1-2
                    // DIV F1-1-1-2-1-1-1
                    // DIV F1-1-1-2-1-1-3
                    // DIV F1-1-1-2-1-1-3-1
                    // PANEL F1-1-1-2-1-1-3-1-1
                    // DIV F1-1-1-2-1-1-3-1-1-1
                    // DIV F1-1-1-2-1-1-3-1-1-2
                    // DIV F1-1-1-2-1-1-3-1-1-3
                    // DIV F1-1-1-2-1-1-3-1-1-4
                    // DIV F1-1-1-2-1-1-3-1-1-5
                    // DIV F1-1-1-2-1-1-3-2
                    // PANEL F1-1-1-2-1-1-3-2-1
                    // DIV F1-1-1-2-1-1-3-2-1-1
                    // DIV F1-1-1-2-1-1-3-2-1-2
                    // DIV F1-1-1-2-1-1-3-2-1-3
                    // DIV F1-1-1-2-1-1-3-2-1-4
                    // DIV F1-1-1-2-1-1-3-2-1-5
                    // DIV F1-1-1-2-1-1-3-3
                    // PANEL F1-1-1-2-1-1-3-3-1
                    // DIV F1-1-1-2-1-1-3-3-1-1
                    // DIV F1-1-1-2-1-1-3-3-1-2
                    // DIV F1-1-1-2-1-1-3-3-1-3
                    // DIV F1-1-1-2-1-1-3-3-1-4
                    // DIV F1-1-1-2-1-1-3-3-1-5
                    // DIV F1-1-1-2-1-1-3-4
                    // PANEL F1-1-1-2-1-1-3-4-1
                    // DIV F1-1-1-2-1-1-3-4-1-1
                    // DIV F1-1-1-2-1-1-3-4-1-2
                    // DIV F1-1-1-2-1-1-3-4-1-3
                    // DIV F1-1-1-2-1-1-3-4-1-4
                    // DIV F1-1-1-2-1-1-3-4-1-5
                    // DIV F1-1-2
                    // DIV F1-1-2-1
                    // GROUP F1-1-2-1-1
                    // FORM F1-1-2-1-1-1-0
                    if( $scope.f0131ApiF013211Scope &&  $scope.f0131ApiF013211Scope.CdOrder2Ctn && $scope.f0131ApiF013211Scope.CdOrder2Ctn.$error){
                        for(var prop in $scope.f0131ApiF013211Scope.CdOrder2Ctn.$error){
                            if(angular.isArray($scope.f0131ApiF013211Scope.CdOrder2Ctn.$error[prop])){
                                errF013211s = errF013211s.concat($scope.f0131ApiF013211Scope.CdOrder2Ctn.$error[prop]);
                            }
                        }
                    }
                    // DIV F1-1-2-1-1-3
                    // DIV F1-1-2-1-1-3-1
                    // DIV F1-1-2-1-1-3-2
                    // DIV F1-1-2-1-1-3-3
                    // DIV F1-1-2-1-1-5
                    // DIV F1-1-2-1-1-4
                    // DIV F1-1-2-1-1-6
                    // PANEL F1-1-2-1-1-6-1
                    // DIV F1-1-2-1-1-6-1-1
                    // DIV F1-1-2-1-1-6-1-2
                    // DIV F1-1-2-1-1-6-1-3
                    // DIV F1-1-2-1-1-6-1-4
                    // DIV F1-1-2-1-1-6-1-5
                    // DIV F1-1-2-1-1-6-1-6
                    // DIV F1-1-2-1-1-6-1-7
                    // DIV F1-1-2-1-1-6-1-8
                    // DIV F1-1-2-1-1-6-1-9
                    for(var j=0;j<errF013211s.length;j++){
                        if($("input[name='"+errF013211s[j].$name+"']").parents("div[api]")[0]){
                            var apiName = $("input[name='"+errF013211s[j].$name+"']").parents("div[api]")[0].attributes.api.value;
                            var title = $("input[name='"+errF013211s[j].$name+"']").parents("div[title]")[0].attributes.title.value;
                            $scope[apiName].selectTab(title+"_"+undefined);
                        }
                    }

                }
                //TAB  F0-1-3-2-10 F0131Api 0
                var tabs10_F0131Api_Valid = true ;
                // DIV;;F0-1-3-2-10-1
                // DIV;GRID;F0-1-3-2-10-1-1

                if($scope.f0131ApiF013210Scope.ciOrder && $scope.f0131ApiF013210Scope.ciOrder.ciOrderId && $scope.f0131ApiF013210Scope.CiOrderForm){
                    if($scope.f0131ApiF013210Scope.CiOrderForm.$validator && $scope.f0131ApiF013210Scope.CiOrderForm.verify){
                        $scope.f0131ApiF013210Scope.CiOrderForm.$validator.enable();
                        $scope.f0131ApiF013210Scope.CiOrderForm.verify();
                    }
                    if(!$scope.f0131ApiF013210Scope.CiOrderForm.$valid){
                        tabs10_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F0-1-3-2-10-2
                // DIV;GRID_TOOLBAR;F0-1-3-2-10-2-1
                // DIV;FORM_CELL;F0-1-3-2-10-2-2
                // DIV;;F0-1-3-2-10-3
                // DIV;;F0-1-3-2-10-3-1
                // GROUP;;F0-1-3-2-10-3-1-1
                // DIV;GRID_TOOLBAR;F0-1-3-2-10-3-1-1-1
                // DIV;GRID;F0-1-3-2-10-3-1-1-2

                if($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid && $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController){
                    if(!$scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController.$valid){
                        tabs10_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F0-1-3-2-10-3-2
                // GROUP;;F0-1-3-2-10-3-2-1
                // DIV;GRID_TOOLBAR;F0-1-3-2-10-3-2-1-1
                // DIV;GRID;F0-1-3-2-10-3-2-1-2

                if($scope.f0131ApiF013210Scope.ciOrderDocumentGrid && $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController){
                    if(!$scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController.$valid){
                        tabs10_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F0-1-3-2-10-3-3
                // GROUP;;F0-1-3-2-10-3-3-1
                // DIV;GRID_TOOLBAR;F0-1-3-2-10-3-3-1-1
                // DIV;GRID;F0-1-3-2-10-3-3-1-2

                if($scope.f0131ApiF013210Scope.ciOrderCargoGrid && $scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController){
                    if(!$scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController.$valid){
                        tabs10_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F0-1-3-2-10-4
                if(!tabs10_F0131Api_Valid){
                    $scope.F0131Api.selectTab(9);

                }
                //TAB  F0-1-3-2-9 F0131Api 0
                var tabs9_F0131Api_Valid = true ;
                if(!tabs9_F0131Api_Valid){
                    $scope.F0131Api.selectTab(8);

                }
                //TAB  F0-1-3-2-8 F0131Api 0
                var tabs8_F0131Api_Valid = true ;
                // DIV;REFERENCE;F0-1-3-2-8-2
                // DIV;;F1
                // DIV;GRID;F1-1-1

                if($scope.f0131ApiF01328Scope.tmOrderToMfOrder && $scope.f0131ApiF01328Scope.tmOrderToMfOrder.tmOrderId && $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm){
                    if($scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$validator && $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.verify){
                        $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$validator.enable();
                        $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.verify();
                    }
                    if(!$scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$valid){
                        tabs8_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // PANEL;;F1-1-2
                // DIV;;F1-1-2-1
                // DIV;;F1-1-2-2
                // DIV;;F1-1-2-3
                // DIV;GRID_TOOLBAR;F1-2
                // DIV;REFERENCE;F0-1-3-2-8-3
                // DIV;;F0
                // FORM;;F0-3-0
                if($scope.f0131ApiF01328Scope &&  $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm && !$scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$valid){
                    tabs8_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                // GROUP;;F0-5
                // DIV;;F0-5-3
                // DIV;;F0-5-4-4
                // DIV;;F0-5-3-2
                // DIV;;F0-5-3-3
                // DIV;;F0-5-3-4
                // DIV;;F0-5-2
                // DIV;;F0-5-2-1
                // DIV;;F0-5-2-2
                // DIV;;F0-5-2-3
                // DIV;;F0-5-2-4
                // DIV;;F0-5-1
                // DIV;;F0-5-1-1
                // DIV;;F0-5-1-2
                // DIV;;F0-5-1-3
                // DIV;;F0-5-1-4
                // DIV;;F0-5-4
                // DIV;;F0-5-4-1
                // DIV;;F0-5-3-1
                // DIV;;F0-5-4-2
                // DIV;;F0-5-4-2-1
                // DIV;;F0-5-4-2-2
                // DIV;;F0-5-4-3
                if(!tabs8_F0131Api_Valid){
                    $scope.F0131Api.selectTab(7);
                    var errF01328s = [];
                    // DIV F0-1-3-2-8-2
                    // DIV F1
                    // DIV F1-1-1
                    // PANEL F1-1-2
                    // DIV F1-1-2-1
                    // DIV F1-1-2-2
                    // DIV F1-1-2-3
                    // DIV F1-2
                    // DIV F0-1-3-2-8-3
                    // DIV F0
                    // FORM F0-3-0
                    if( $scope.f0131ApiF01328Scope &&  $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm && $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$error){
                        for(var prop in $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$error){
                            if(angular.isArray($scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$error[prop])){
                                errF01328s = errF01328s.concat($scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$error[prop]);
                            }
                        }
                    }
                    // GROUP F0-5
                    // DIV F0-5-3
                    // DIV F0-5-4-4
                    // DIV F0-5-3-2
                    // DIV F0-5-3-3
                    // DIV F0-5-3-4
                    // DIV F0-5-2
                    // DIV F0-5-2-1
                    // DIV F0-5-2-2
                    // DIV F0-5-2-3
                    // DIV F0-5-2-4
                    // DIV F0-5-1
                    // DIV F0-5-1-1
                    // DIV F0-5-1-2
                    // DIV F0-5-1-3
                    // DIV F0-5-1-4
                    // DIV F0-5-4
                    // DIV F0-5-4-1
                    // DIV F0-5-3-1
                    // DIV F0-5-4-2
                    // DIV F0-5-4-2-1
                    // DIV F0-5-4-2-2
                    // DIV F0-5-4-3
                    for(var j=0;j<errF01328s.length;j++){
                        if($("input[name='"+errF01328s[j].$name+"']").parents("div[api]")[0]){
                            var apiName = $("input[name='"+errF01328s[j].$name+"']").parents("div[api]")[0].attributes.api.value;
                            var title = $("input[name='"+errF01328s[j].$name+"']").parents("div[title]")[0].attributes.title.value;
                            $scope[apiName].selectTab(title+"_"+undefined);
                        }
                    }

                }
                //TAB  F0-1-3-2-7 F0131Api 0
                var tabs7_F0131Api_Valid = true ;
                // DIV;GRID_TOOLBAR;F0-1-3-2-7-0
                // DIV;;F0-1-3-2-7-1
                // DIV;;F0-1-3-2-7-1-1
                // GROUP;;F0-1-3-2-7-1-1-1
                // DIV;;F0-1-3-2-7-1-1-1-1
                // DIV;;F0-1-3-2-7-1-2
                // GROUP;;F0-1-3-2-7-1-2-1
                // DIV;;F0-1-3-2-7-1-2-1-1
                if(!tabs7_F0131Api_Valid){
                    $scope.F0131Api.selectTab(6);

                }
                //TAB  F0-1-3-2-6 F0131Api 0
                var tabs6_F0131Api_Valid = true ;
                if(!tabs6_F0131Api_Valid){
                    $scope.F0131Api.selectTab(5);

                }
                //TAB  F0-1-3-2-5 F0131Api 0
                var tabs5_F0131Api_Valid = true ;
                // DIV;;F0-1-3-2-5-1
                // DIV;REFERENCE;F0-1-3-2-5-2
                // DIV;;F0-10-1
                // DIV;TOOLBAR;F0-10-1-1
                // DIV;TOOLBAR;F0-10-1-2
                // DIV;GRID_TOOLBAR;F0-10-1-3
                // DIV;GRID;F0-10-1-4

                if($scope.f0131ApiF01325Scope.arBcFreightGrid && $scope.f0131ApiF01325Scope.arBcFreightGrid.formController){
                    if(!$scope.f0131ApiF01325Scope.arBcFreightGrid.formController.$valid){
                        tabs5_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;REFERENCE;F0-1-3-2-5-3
                // DIV;;F0-9-1
                // DIV;GRID_TOOLBAR;F0-9-1-1
                // DIV;GRID;F0-9-1-2

                if($scope.f0131ApiF01325Scope.apBcFreightGrid && $scope.f0131ApiF01325Scope.apBcFreightGrid.formController){
                    if(!$scope.f0131ApiF01325Scope.apBcFreightGrid.formController.$valid){
                        tabs5_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;REFERENCE;F0-1-3-2-5-4
                // DIV;;F0-8-1
                // DIV;GRID;F0-8-1-1

                if($scope.f0131ApiF01325Scope.vbcFreightStatistics && $scope.f0131ApiF01325Scope.vbcFreightStatistics.mfOrderId && $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm){
                    if($scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.$validator && $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.verify){
                        $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.$validator.enable();
                        $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.verify();
                    }
                    if(!$scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.$valid){
                        tabs5_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                if(!tabs5_F0131Api_Valid){
                    $scope.F0131Api.selectTab(4);

                }
                //TAB  F0-1-3-2-4 F0131Api 0
                var tabs4_F0131Api_Valid = true ;
                // DIV;REFERENCE;F0-1-3-2-4-1
                // DIV;;F0
                // DIV;;F0-1
                // DIV;GRID_TOOLBAR;F0-1-1
                // DIV;GRID;F0-1-2

                if($scope.f0131ApiF01324Scope.bkContainerGrid && $scope.f0131ApiF01324Scope.bkContainerGrid.formController){
                    if(!$scope.f0131ApiF01324Scope.bkContainerGrid.formController.$valid){
                        tabs4_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;;F0-1-5
                // PANEL;;F0-1-5-1-1
                // DIV;;F0-1-5-1
                // DIV;;F0-1-5-2
                // DIV;;F0-1-5-3
                // DIV;;F0-1-5-4
                // DIV;;F0-1-5-5
                // DIV;;F0-1-10
                // PANEL;;F0-1-10-1
                // DIV;;F0-1-10-1-1
                // DIV;;F0-1-10-1-2
                // DIV;;F0-1-10-1-3
                // DIV;;F0-1-10-1-4
                // DIV;;F0-1-11
                // PANEL;;F0-1-11-1
                // DIV;;F0-1-11-1-1
                // DIV;;F0-1-11-1-2
                // DIV;;F0-1-11-1-3
                // DIV;;F0-1-11-1-4
                // DIV;GRID_TOOLBAR;F0-1-3
                // DIV;GRID;F0-1-4

                if($scope.f0131ApiF01324Scope.mfContainer2CargoGrid && $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController){
                    if(!$scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController.$valid){
                        tabs4_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;GRID_TOOLBAR;F0-1-6
                // DIV;GRID;F0-1-7

                if($scope.f0131ApiF01324Scope.arBcFreightGrid && $scope.f0131ApiF01324Scope.arBcFreightGrid.formController){
                    if(!$scope.f0131ApiF01324Scope.arBcFreightGrid.formController.$valid){
                        tabs4_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;GRID_TOOLBAR;F0-1-8
                // DIV;GRID;F0-1-9

                if($scope.f0131ApiF01324Scope.apBcFreightGrid && $scope.f0131ApiF01324Scope.apBcFreightGrid.formController){
                    if(!$scope.f0131ApiF01324Scope.apBcFreightGrid.formController.$valid){
                        tabs4_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                if(!tabs4_F0131Api_Valid){
                    $scope.F0131Api.selectTab(3);

                }
                //TAB  F0-1-3-2-3 F0131Api 0
                var tabs3_F0131Api_Valid = true ;
                // DIV;;F0-1-3-2-3-1
                // DIV;GRID_TOOLBAR;F0-1-3-2-3-1-1
                // DIV;GRID;F0-1-3-2-3-1-2

                if($scope.f0131ApiF01323Scope.mfBookingCargo && $scope.f0131ApiF01323Scope.mfBookingCargo.mfBookingCargoId && $scope.f0131ApiF01323Scope.MfBookingCargoForm){
                    if($scope.f0131ApiF01323Scope.MfBookingCargoForm.$validator && $scope.f0131ApiF01323Scope.MfBookingCargoForm.verify){
                        $scope.f0131ApiF01323Scope.MfBookingCargoForm.$validator.enable();
                        $scope.f0131ApiF01323Scope.MfBookingCargoForm.verify();
                    }
                    if(!$scope.f0131ApiF01323Scope.MfBookingCargoForm.$valid){
                        tabs3_F0131Api_Valid = false;
                        allValidationFlag = false ;
                    }
                }
                // DIV;REFERENCE;F0-1-3-2-3-1-3
                // DIV;;F0
                // FORM;;F0-1
                if($scope.f0131ApiF01323Scope &&  $scope.f0131ApiF01323Scope.MfBookingCargoForm && !$scope.f0131ApiF01323Scope.MfBookingCargoForm.$valid){
                    tabs3_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                if(!tabs3_F0131Api_Valid){
                    $scope.F0131Api.selectTab(2);
                    var errF01323s = [];
                    // DIV F0-1-3-2-3-1
                    // DIV F0-1-3-2-3-1-1
                    // DIV F0-1-3-2-3-1-2
                    // DIV F0-1-3-2-3-1-3
                    // DIV F0
                    // FORM F0-1
                    if( $scope.f0131ApiF01323Scope &&  $scope.f0131ApiF01323Scope.MfBookingCargoForm && $scope.f0131ApiF01323Scope.MfBookingCargoForm.$error){
                        for(var prop in $scope.f0131ApiF01323Scope.MfBookingCargoForm.$error){
                            if(angular.isArray($scope.f0131ApiF01323Scope.MfBookingCargoForm.$error[prop])){
                                errF01323s = errF01323s.concat($scope.f0131ApiF01323Scope.MfBookingCargoForm.$error[prop]);
                            }
                        }
                    }
                    for(var j=0;j<errF01323s.length;j++){
                        if($("input[name='"+errF01323s[j].$name+"']").parents("div[api]")[0]){
                            var apiName = $("input[name='"+errF01323s[j].$name+"']").parents("div[api]")[0].attributes.api.value;
                            var title = $("input[name='"+errF01323s[j].$name+"']").parents("div[title]")[0].attributes.title.value;
                            $scope[apiName].selectTab(title+"_"+undefined);
                        }
                    }

                }
                //TAB  F0-1-3-2-2 F0131Api 0
                var tabs2_F0131Api_Valid = true ;
                // DIV;REFERENCE;F0-1-3-2-2-1
                // DIV;;F0
                // TABS;;F0-1
                // TAB;;F0-1-1
                // PANEL;;F0-1-1-1
                // DIV;;F0-1-1-1-1
                // DIV;;F0-1-1-1-1-1-1-1-1
                // GROUP;;F0-1-1-1-1-1
                // DIV;;F0-1-1-1-1-1-1
                // DIV;;F0-1-1-1-1-1-2
                // DIV;;F0-1-1-1-1-1-3
                // DIV;;F0-1-1-1-1-1-4
                // DIV;;F0-1-1-1-1-1-4-1
                // DIV;;F0-1-1-1-1-1-4-2
                // DIV;;F0-1-1-1-1-1-5
                // DIV;;F0-1-1-1-1-1-5-1
                // DIV;;F0-1-1-1-1-1-5-2
                // DIV;;F0-1-1-1-1-1-6
                // DIV;;F0-1-1-1-1-1-6-1
                // DIV;;F0-1-1-1-1-1-6-2
                // DIV;;F0-1-1-1-1-1-7-1
                // DIV;;F0-1-1-1-1-1-7-2
                // DIV;;F0-1-1-1-1-1-8
                // DIV;;F0-1-1-1-1-1-1-1-2
                // GROUP;;F0-1-1-1-1-2
                // DIV;;F0-1-1-1-1-2-1
                // DIV;;F0-1-1-1-1-2-2
                // DIV;;F0-1-1-1-1-2-3
                // DIV;;F0-1-1-1-1-2-4
                // DIV;;F0-1-1-1-1-2-4-1
                // DIV;;F0-1-1-1-1-2-4-2
                // DIV;;F0-1-1-1-1-2-5
                // DIV;;F0-1-1-1-1-2-5-1
                // DIV;;F0-1-1-1-1-2-5-2
                // DIV;;F0-1-1-1-1-2-6
                // DIV;;F0-1-1-1-1-2-6-1
                // DIV;;F0-1-1-1-1-2-6-2
                // DIV;;F0-1-1-1-1-2-7-1
                // DIV;;F0-1-1-1-1-2-7-2
                // DIV;;F0-1-1-1-1-2-8
                // DIV;;F0-1-1-1-1-1-1-1-3
                // GROUP;;F0-1-1-1-1-3
                // DIV;;F0-1-1-1-1-3-1
                // DIV;;F0-1-1-1-1-3-2
                // DIV;;F0-1-1-1-1-3-3
                // DIV;;F0-1-1-1-1-3-4
                // DIV;;F0-1-1-1-1-3-4-1
                // DIV;;F0-1-1-1-1-3-4-2
                // DIV;;F0-1-1-1-1-3-5
                // DIV;;F0-1-1-1-1-3-5-1
                // DIV;;F0-1-1-1-1-3-5-2
                // DIV;;F0-1-1-1-1-3-6
                // DIV;;F0-1-1-1-1-3-6-1
                // DIV;;F0-1-1-1-1-3-6-2
                // DIV;;F0-1-1-1-1-3-7-1
                // DIV;;F0-1-1-1-1-3-7-2
                // DIV;;F0-1-1-1-1-3-8
                // DIV;;F0-1-1-1-2
                // DIV;;F0-1-1-1-1-1-1-1-4
                // GROUP;;F0-1-1-1-2-1
                // DIV;;F0-1-1-1-2-1-1
                // DIV;;F0-1-1-1-2-1-2
                // DIV;;F0-1-1-1-2-1-3
                // DIV;;F0-1-1-1-2-1-4
                // DIV;;F0-1-1-1-2-1-4-1
                // DIV;;F0-1-1-1-2-1-4-2
                // DIV;;F0-1-1-1-2-1-5
                // DIV;;F0-1-1-1-2-1-5-1
                // DIV;;F0-1-1-1-2-1-5-2
                // DIV;;F0-1-1-1-2-1-6
                // DIV;;F0-1-1-1-2-1-6-1
                // DIV;;F0-1-1-1-2-1-6-2
                // DIV;;F0-1-1-1-2-1-7-1
                // DIV;;F0-1-1-1-2-1-7-2
                // DIV;;F0-1-1-1-2-1-8
                // DIV;;F0-1-1-1-1-1-1-1-5
                // GROUP;;F0-1-1-1-2-2
                // DIV;;F0-1-1-1-2-2-1
                // DIV;;F0-1-1-1-2-2-2
                // DIV;;F0-1-1-1-2-2-3
                // DIV;;F0-1-1-1-2-2-4
                // DIV;;F0-1-1-1-2-2-4-1
                // DIV;;F0-1-1-1-2-2-4-2
                // DIV;;F0-1-1-1-2-2-5
                // DIV;;F0-1-1-1-2-2-5-1
                // DIV;;F0-1-1-1-2-2-5-2
                // DIV;;F0-1-1-1-2-2-6
                // DIV;;F0-1-1-1-2-2-6-1
                // DIV;;F0-1-1-1-2-2-6-2
                // DIV;;F0-1-1-1-2-2-7-1
                // DIV;;F0-1-1-1-2-2-7-2
                // DIV;;F0-1-1-1-2-2-8
                // TAB;;F0-1-2
                // PANEL;;F0-1-1-2
                // DIV;;F0-1-1-2-1
                // DIV;;F0-1-1-2-1-1-1-1-1
                // GROUP;;F0-1-1-2-1-1
                // DIV;;F0-1-1-2-1-1-1
                // DIV;;F0-1-1-2-1-1-2
                // DIV;;F0-1-1-2-1-1-3
                // DIV;;F0-1-1-2-1-1-4
                // DIV;;F0-1-1-2-1-1-4-1
                // DIV;;F0-1-1-2-1-1-4-2
                // DIV;;F0-1-1-2-1-1-5
                // DIV;;F0-1-1-2-1-1-5-1
                // DIV;;F0-1-1-2-1-1-5-2
                // DIV;;F0-1-1-2-1-1-6
                // DIV;;F0-1-1-2-1-1-6-1
                // DIV;;F0-1-1-2-1-1-6-2
                // DIV;;F0-1-1-2-1-1-7-1
                // DIV;;F0-1-1-2-1-1-7-2
                // DIV;;F0-1-1-2-1-1-8
                // DIV;;F0-1-1-2-1-1-1-1-2
                // GROUP;;F0-1-1-2-1-2
                // DIV;;F0-1-1-2-1-2-1
                // DIV;;F0-1-1-2-1-2-2
                // DIV;;F0-1-1-2-1-2-3
                // DIV;;F0-1-1-2-1-2-4
                // DIV;;F0-1-1-2-1-2-4-1
                // DIV;;F0-1-1-2-1-2-4-2
                // DIV;;F0-1-1-2-1-2-5
                // DIV;;F0-1-1-2-1-2-5-1
                // DIV;;F0-1-1-2-1-2-5-2
                // DIV;;F0-1-1-2-1-2-6
                // DIV;;F0-1-1-2-1-2-6-1
                // DIV;;F0-1-1-2-1-2-6-2
                // DIV;;F0-1-1-2-1-2-7-1
                // DIV;;F0-1-1-2-1-2-7-2
                // DIV;;F0-1-1-2-1-2-8
                // DIV;;F0-1-1-2-1-1-1-1-3
                // GROUP;;F0-1-1-2-1-3
                // DIV;;F0-1-1-2-1-3-1
                // DIV;;F0-1-1-2-1-3-2
                // DIV;;F0-1-1-2-1-3-3
                // DIV;;F0-1-1-2-1-3-4
                // DIV;;F0-1-1-2-1-3-4-1
                // DIV;;F0-1-1-2-1-3-4-2
                // DIV;;F0-1-1-2-1-3-5
                // DIV;;F0-1-1-2-1-3-5-1
                // DIV;;F0-1-1-2-1-3-5-2
                // DIV;;F0-1-1-2-1-3-6
                // DIV;;F0-1-1-2-1-3-6-1
                // DIV;;F0-1-1-2-1-3-6-2
                // DIV;;F0-1-1-2-1-3-7-1
                // DIV;;F0-1-1-2-1-3-7-2
                // DIV;;F0-1-1-2-1-3-8
                // DIV;;F0-1-1-2-2
                // DIV;;F0-1-1-2-1-1-1-1-4
                // GROUP;;F0-1-1-2-2-1
                // DIV;;F0-1-1-2-2-1-1
                // DIV;;F0-1-1-2-2-1-2
                // DIV;;F0-1-1-2-2-1-3
                // DIV;;F0-1-1-2-2-1-4
                // DIV;;F0-1-1-2-2-1-4-1
                // DIV;;F0-1-1-2-2-1-4-2
                // DIV;;F0-1-1-2-2-1-5
                // DIV;;F0-1-1-2-2-1-5-1
                // DIV;;F0-1-1-2-2-1-5-2
                // DIV;;F0-1-1-2-2-1-6
                // DIV;;F0-1-1-2-2-1-6-1
                // DIV;;F0-1-1-2-2-1-6-2
                // DIV;;F0-1-1-2-2-1-7-1
                // DIV;;F0-1-1-2-2-1-7-2
                // DIV;;F0-1-1-2-2-1-8
                if(!tabs2_F0131Api_Valid){
                    $scope.F0131Api.selectTab(1);

                }
                //TAB  F0-1-3-2-1 F0131Api 0
                var tabs1_F0131Api_Valid = true ;
                // FORM;;F0-1-3-2-1-1
                if( $scope.MfOrderForm && !$scope.MfOrderForm.$valid){
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                // FORM;;F0-1-3-2-1-4-0
                if( $scope.isBulkyCargo && !$scope.isBulkyCargo.$valid){
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                // DIV;;F0-1-3-2-1-3
                // FORM;;F0-1-3-2-1-3-1-0
                if( $scope.isHazardForm && !$scope.isHazardForm.$valid){
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                // DIV;;F0-1-3-2-1-2
                // FORM;;F0-1-3-2-1-2-1-0
                if( $scope.isReeferForm && !$scope.isReeferForm.$valid){
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false ;
                }
                if(!tabs1_F0131Api_Valid){
                    $scope.F0131Api.selectTab(0);
                    var errF01321s = [];
                    // FORM F0-1-3-2-1-1
                    if( $scope.MfOrderForm && $scope.MfOrderForm.$error){
                        for(var prop in $scope.MfOrderForm.$error){
                            if(angular.isArray($scope.MfOrderForm.$error[prop])){
                                errF01321s = errF01321s.concat($scope.MfOrderForm.$error[prop]);
                            }
                        }
                    }
                    // FORM F0-1-3-2-1-4-0
                    if( $scope.isBulkyCargo && $scope.isBulkyCargo.$error){
                        for(var prop in $scope.isBulkyCargo.$error){
                            if(angular.isArray($scope.isBulkyCargo.$error[prop])){
                                errF01321s = errF01321s.concat($scope.isBulkyCargo.$error[prop]);
                            }
                        }
                    }
                    // DIV F0-1-3-2-1-3
                    // FORM F0-1-3-2-1-3-1-0
                    if( $scope.isHazardForm && $scope.isHazardForm.$error){
                        for(var prop in $scope.isHazardForm.$error){
                            if(angular.isArray($scope.isHazardForm.$error[prop])){
                                errF01321s = errF01321s.concat($scope.isHazardForm.$error[prop]);
                            }
                        }
                    }
                    // DIV F0-1-3-2-1-2
                    // FORM F0-1-3-2-1-2-1-0
                    if( $scope.isReeferForm && $scope.isReeferForm.$error){
                        for(var prop in $scope.isReeferForm.$error){
                            if(angular.isArray($scope.isReeferForm.$error[prop])){
                                errF01321s = errF01321s.concat($scope.isReeferForm.$error[prop]);
                            }
                        }
                    }
                    for(var j=0;j<errF01321s.length;j++){
                        if($("input[name='"+errF01321s[j].$name+"']").parents("div[api]")[0]){
                            var apiName = $("input[name='"+errF01321s[j].$name+"']").parents("div[api]")[0].attributes.api.value;
                            var title = $("input[name='"+errF01321s[j].$name+"']").parents("div[title]")[0].attributes.title.value;
                            $scope[apiName].selectTab(title+"_"+undefined);
                        }
                    }

                }
                if(!$scope.MfOrderFormTop.$valid) //FORM
                    allValidationFlag = false;
                if (!$scope.MfOperationRequireForm.$valid) //FORM
                    allValidationFlag = false;
                var callback = function() { //callback
                    if(allValidationFlag)
                    {
                        var param = $scope.mfOrder;
                        //2 0 persistentSaveType:2null
                        if($scope.f0131ApiF01328Scope.tmOrderToMfOrders)
                            param.tmOrderToMfOrders=$scope.f0131ApiF01328Scope.tmOrderToMfOrders.concat($scope.f0131ApiF01328Scope.tmOrderToMfOrderDeleteds);
                        //2 0 persistentSaveType:2null
                        if($scope.f0131ApiF01325Scope.vbcFreightStatisticss)
                            param.vbcFreightStatistics=$scope.f0131ApiF01325Scope.vbcFreightStatisticss.concat($scope.f0131ApiF01325Scope.vbcFreightStatisticsDeleteds);
                        //2 0 persistentSaveType:2null
                        if($scope.f0131ApiF013210Scope.ciOrders)
                            param.ciOrders=$scope.f0131ApiF013210Scope.ciOrders.concat($scope.f0131ApiF013210Scope.ciOrderDeleteds);
                        //2 0 persistentSaveType:2null
                        if($scope.mfCtnRequests)
                            param.mfCtnRequests=$scope.mfCtnRequests.concat($scope.mfCtnRequestDeleteds);
                        //1 0 persistentSaveType:2null
                        param.mfOrderExtends=$scope.mfOrderExtend;
                        //2 0 persistentSaveType:2null
                        if($scope.mfMultiVessels)
                            param.mfMultiVessels=$scope.mfMultiVessels.concat($scope.mfMultiVesselDeleteds);
                        //2 0 persistentSaveType:2null
                        if($scope.f0131ApiF01325Scope.arBcFreights)
                            param.arBcFreights=$scope.f0131ApiF01325Scope.arBcFreights.concat($scope.f0131ApiF01325Scope.arBcFreightDeleteds);
                        //2 0 persistentSaveType:2null
                        if($scope.f0131ApiF01325Scope.apBcFreights)
                            param.apBcFreights=$scope.f0131ApiF01325Scope.apBcFreights.concat($scope.f0131ApiF01325Scope.apBcFreightDeleteds);
                        //2 0 persistentSaveType:2null
                        if($scope.f0131ApiF013212Scope.imOrders)
                            param.imOrders=$scope.f0131ApiF013212Scope.imOrders.concat($scope.f0131ApiF013212Scope.imOrderDeleteds);
                        //1 0 persistentSaveType:2null
                        param.mfOperationRequires=$scope.mfOperationRequire;
                        //2 3 persistentSaveType:2null
                        if($scope.f0131ApiF01324Scope.bkContainers)
                            param.bkContainers=$scope.f0131ApiF01324Scope.bkContainers.concat($scope.f0131ApiF01324Scope.bkContainerDeleteds);
                        //2 0 persistentSaveType:2null
                        if($scope.f0131ApiF013211Scope.cdOrders)
                            param.cdOrders=$scope.f0131ApiF013211Scope.cdOrders.concat($scope.f0131ApiF013211Scope.cdOrderDeleteds);
                        //2 0 persistentSaveType:2null
                        if($scope.f0131ApiF01323Scope.mfBookingCargos)
                            param.mfBookingCargos=$scope.f0131ApiF01323Scope.mfBookingCargos.concat($scope.f0131ApiF01323Scope.mfBookingCargoDeleteds);
                        var tip = layer.load(0, $config.shadeConfig);
                        $http.post($config.ctx + '/mfOrder/saveOrUpdate',param).success(function(data){
                            layer.close(tip);
                            if (data.success != undefined && data.success == true){
                                $scope.mfOrder = data.mfOrder;
                                if($scope.f0131ApiF01322Scope)
                                    $scope.f0131ApiF01322Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF01323Scope)
                                    $scope.f0131ApiF01323Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF01324Scope)
                                    $scope.f0131ApiF01324Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF01325Scope)
                                    $scope.f0131ApiF01325Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF01326Scope)
                                    $scope.f0131ApiF01326Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF01328Scope)
                                    $scope.f0131ApiF01328Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF013210Scope)
                                    $scope.f0131ApiF013210Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF013211Scope)
                                    $scope.f0131ApiF013211Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF013212Scope)
                                    $scope.f0131ApiF013212Scope.mfOrder = $scope.mfOrder;
                                if($scope.f0131ApiF013213Scope)
                                    $scope.f0131ApiF013213Scope.mfOrder = $scope.mfOrder;

                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //1 0 persistentSaveType:2null
                                $scope.mfOrderExtend = data.mfOrder.mfOrderExtends;
                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //1 0 persistentSaveType:2null
                                $scope.mfOperationRequire = data.mfOrder.mfOperationRequires;
                                //2 3 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //2 0 persistentSaveType:2null
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象TmOrderToMfOrder
                                if($scope.f0131ApiF01328Scope && $scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid) {
                                    if( $scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid){
                                        if($scope.f0131ApiF01328Scope.TmOrderToMfOrderForm && $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$validator){
                                            $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$validator.reset();
                                            $scope.f0131ApiF01328Scope.TmOrderToMfOrderForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF01328Scope.tmOrderToMfOrderGrid._reset();
                                    $scope.f0131ApiF01328Scope.tmOrderToMfOrders.splice(0,$scope.f0131ApiF01328Scope.tmOrderToMfOrders.length);
                                    $scope.f0131ApiF01328Scope.tmOrderToMfOrder = {};
                                    $scope.f0131ApiF01328Scope.tmOrderToMfOrderDeleteds = [];
                                    $scope.f0131ApiF01328Scope.getTmOrderToMfOrderPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象TmOrderCtnRequestCopy
                                if($scope.f0131ApiF01328Scope && $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid) {
                                    if( $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid){
                                        if($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.formController){
                                            var $validator = $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid,$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopys);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid,$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopys);
                                        }

                                    }
                                    $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid._reset();
                                    $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopys.splice(0,$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopys.length);
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象VbcFreightStatistics
                                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid) {
                                    if( $scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid){
                                        if($scope.f0131ApiF01325Scope.VbcFreightStatisticsForm && $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.$validator){
                                            $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.$validator.reset();
                                            $scope.f0131ApiF01325Scope.VbcFreightStatisticsForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF01325Scope.vbcFreightStatisticsGrid._reset();
                                    $scope.f0131ApiF01325Scope.vbcFreightStatisticss.splice(0,$scope.f0131ApiF01325Scope.vbcFreightStatisticss.length);
                                    $scope.f0131ApiF01325Scope.vbcFreightStatistics = {};
                                    $scope.f0131ApiF01325Scope.vbcFreightStatisticsDeleteds = [];
                                    $scope.f0131ApiF01325Scope.getVbcFreightStatisticsPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CiOrder
                                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderGrid) {
                                    if( $scope.f0131ApiF013210Scope.ciOrderGrid){
                                        if($scope.f0131ApiF013210Scope.CiOrderForm && $scope.f0131ApiF013210Scope.CiOrderForm.$validator){
                                            $scope.f0131ApiF013210Scope.CiOrderForm.$validator.reset();
                                            $scope.f0131ApiF013210Scope.CiOrderForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF013210Scope.ciOrderGrid._reset();
                                    $scope.f0131ApiF013210Scope.ciOrders.splice(0,$scope.f0131ApiF013210Scope.ciOrders.length);
                                    $scope.f0131ApiF013210Scope.ciOrder = {};
                                    $scope.f0131ApiF013210Scope.ciOrderDeleteds = [];
                                    $scope.f0131ApiF013210Scope.getCiOrderPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CiOrderDocAttach
                                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid) {
                                    if( $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid){
                                        if($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController){
                                            var $validator = $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid,$scope.f0131ApiF013210Scope.ciOrderDocAttachs);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid,$scope.f0131ApiF013210Scope.ciOrderDocAttachs);
                                        }

                                    }
                                    $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid._reset();
                                    $scope.f0131ApiF013210Scope.ciOrderDocAttachs.splice(0,$scope.f0131ApiF013210Scope.ciOrderDocAttachs.length);
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CiOrderCargo
                                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderCargoGrid) {
                                    if( $scope.f0131ApiF013210Scope.ciOrderCargoGrid){
                                        if($scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController){
                                            var $validator = $scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF013210Scope.ciOrderCargoGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderCargoGrid,$scope.f0131ApiF013210Scope.ciOrderCargos);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderCargoGrid,$scope.f0131ApiF013210Scope.ciOrderCargos);
                                        }

                                    }
                                    $scope.f0131ApiF013210Scope.ciOrderCargoGrid._reset();
                                    $scope.f0131ApiF013210Scope.ciOrderCargos.splice(0,$scope.f0131ApiF013210Scope.ciOrderCargos.length);
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CiOrderDocument
                                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderDocumentGrid) {
                                    if( $scope.f0131ApiF013210Scope.ciOrderDocumentGrid){
                                        if($scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController){
                                            var $validator = $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF013210Scope.ciOrderDocumentGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocumentGrid,$scope.f0131ApiF013210Scope.ciOrderDocuments);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF013210Scope.ciOrderDocumentGrid,$scope.f0131ApiF013210Scope.ciOrderDocuments);
                                        }

                                    }
                                    $scope.f0131ApiF013210Scope.ciOrderDocumentGrid._reset();
                                    $scope.f0131ApiF013210Scope.ciOrderDocuments.splice(0,$scope.f0131ApiF013210Scope.ciOrderDocuments.length);
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象MfCtnRequest
                                if($scope && $scope.mfCtnRequestGrid) {
                                    if( $scope.mfCtnRequestGrid){
                                        if($scope.mfCtnRequestGrid.formController){
                                            var $validator = $scope.mfCtnRequestGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.mfCtnRequestGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.mfCtnRequestGrid,$scope.mfCtnRequests);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.mfCtnRequestGrid,$scope.mfCtnRequests);
                                        }

                                    }
                                    $scope.mfCtnRequestGrid._reset();
                                    $scope.mfCtnRequests.splice(0,$scope.mfCtnRequests.length);
                                    $scope.mfCtnRequest = {};
                                    $scope.mfCtnRequestDeleteds = [];
                                    $scope.getMfCtnRequestPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //界面布局不存在MfOrderExtend表格。。
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象MfMultiVessel
                                if($scope && $scope.mfMultiVesselGrid) {
                                    if( $scope.mfMultiVesselGrid){
                                        if($scope.mfMultiVesselGrid.formController){
                                            var $validator = $scope.mfMultiVesselGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.mfMultiVesselGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.mfMultiVesselGrid,$scope.mfMultiVessels);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.mfMultiVesselGrid,$scope.mfMultiVessels);
                                        }

                                    }
                                    $scope.mfMultiVesselGrid._reset();
                                    $scope.mfMultiVessels.splice(0,$scope.mfMultiVessels.length);
                                    $scope.mfMultiVessel = {};
                                    $scope.mfMultiVesselDeleteds = [];
                                    $scope.getMfMultiVesselPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象ArBcFreight
                                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.arBcFreightGrid) {
                                    if( $scope.f0131ApiF01325Scope.arBcFreightGrid){
                                        if($scope.f0131ApiF01325Scope.arBcFreightGrid.formController){
                                            var $validator = $scope.f0131ApiF01325Scope.arBcFreightGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF01325Scope.arBcFreightGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.arBcFreightGrid,$scope.f0131ApiF01325Scope.arBcFreights);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.arBcFreightGrid,$scope.f0131ApiF01325Scope.arBcFreights);
                                        }

                                    }
                                    $scope.f0131ApiF01325Scope.arBcFreightGrid._reset();
                                    $scope.f0131ApiF01325Scope.arBcFreights.splice(0,$scope.f0131ApiF01325Scope.arBcFreights.length);
                                    $scope.f0131ApiF01325Scope.arBcFreight = {};
                                    $scope.f0131ApiF01325Scope.arBcFreightDeleteds = [];
                                    $scope.f0131ApiF01325Scope.getArBcFreightPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象ApBcFreight
                                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.apBcFreightGrid) {
                                    if( $scope.f0131ApiF01325Scope.apBcFreightGrid){
                                        if($scope.f0131ApiF01325Scope.apBcFreightGrid.formController){
                                            var $validator = $scope.f0131ApiF01325Scope.apBcFreightGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF01325Scope.apBcFreightGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.apBcFreightGrid,$scope.f0131ApiF01325Scope.apBcFreights);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.apBcFreightGrid,$scope.f0131ApiF01325Scope.apBcFreights);
                                        }

                                    }
                                    $scope.f0131ApiF01325Scope.apBcFreightGrid._reset();
                                    $scope.f0131ApiF01325Scope.apBcFreights.splice(0,$scope.f0131ApiF01325Scope.apBcFreights.length);
                                    $scope.f0131ApiF01325Scope.apBcFreight = {};
                                    $scope.f0131ApiF01325Scope.apBcFreightDeleteds = [];
                                    $scope.f0131ApiF01325Scope.getApBcFreightPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象ImOrder
                                if($scope.f0131ApiF013212Scope && $scope.f0131ApiF013212Scope.imOrderGrid) {
                                    if( $scope.f0131ApiF013212Scope.imOrderGrid){
                                        if($scope.f0131ApiF013212Scope.ImOrderForm && $scope.f0131ApiF013212Scope.ImOrderForm.$validator){
                                            $scope.f0131ApiF013212Scope.ImOrderForm.$validator.reset();
                                            $scope.f0131ApiF013212Scope.ImOrderForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF013212Scope.imOrderGrid._reset();
                                    $scope.f0131ApiF013212Scope.imOrders.splice(0,$scope.f0131ApiF013212Scope.imOrders.length);
                                    $scope.f0131ApiF013212Scope.imOrder = {};
                                    $scope.f0131ApiF013212Scope.imOrderDeleteds = [];
                                    $scope.f0131ApiF013212Scope.getImOrderPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //界面布局不存在MfOperationRequire表格。。
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象BkContainer
                                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.bkContainerGrid) {
                                    if( $scope.f0131ApiF01324Scope.bkContainerGrid){
                                        if($scope.f0131ApiF01324Scope.bkContainerGrid.formController){
                                            var $validator = $scope.f0131ApiF01324Scope.bkContainerGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF01324Scope.bkContainerGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.bkContainerGrid,$scope.f0131ApiF01324Scope.bkContainers);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.bkContainerGrid,$scope.f0131ApiF01324Scope.bkContainers);
                                        }

                                    }
                                    $scope.f0131ApiF01324Scope.bkContainerGrid._reset();
                                    $scope.f0131ApiF01324Scope.bkContainers.splice(0,$scope.f0131ApiF01324Scope.bkContainers.length);
                                    $scope.f0131ApiF01324Scope.bkContainer = {};
                                    $scope.f0131ApiF01324Scope.bkContainerDeleteds = [];
                                    $scope.f0131ApiF01324Scope.getBkContainerPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象MfContainer2Cargo
                                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.mfContainer2CargoGrid) {
                                    if( $scope.f0131ApiF01324Scope.mfContainer2CargoGrid){
                                        if($scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController){
                                            var $validator = $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController.$validator;
                                            if($validator){
                                                $validator.disable();
                                                $validator.reset();
                                            }

                                            //$scope.f0131ApiF01324Scope.mfContainer2CargoGrid.finishEdit();
                                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.mfContainer2CargoGrid,$scope.f0131ApiF01324Scope.mfContainer2Cargos);

                                            if($validator){
                                                $validator.enable();
                                            }
                                        }else{
                                            $scope._finishEditGridWrap($scope.f0131ApiF01324Scope.mfContainer2CargoGrid,$scope.f0131ApiF01324Scope.mfContainer2Cargos);
                                        }

                                    }
                                    $scope.f0131ApiF01324Scope.mfContainer2CargoGrid._reset();
                                    $scope.f0131ApiF01324Scope.mfContainer2Cargos.splice(0,$scope.f0131ApiF01324Scope.mfContainer2Cargos.length);
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CdOrder
                                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrderGrid) {
                                    if( $scope.f0131ApiF013211Scope.cdOrderGrid){
                                        if($scope.f0131ApiF013211Scope.CdOrderForm && $scope.f0131ApiF013211Scope.CdOrderForm.$validator){
                                            $scope.f0131ApiF013211Scope.CdOrderForm.$validator.reset();
                                            $scope.f0131ApiF013211Scope.CdOrderForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF013211Scope.cdOrderGrid._reset();
                                    $scope.f0131ApiF013211Scope.cdOrders.splice(0,$scope.f0131ApiF013211Scope.cdOrders.length);
                                    $scope.f0131ApiF013211Scope.cdOrder = {};
                                    $scope.f0131ApiF013211Scope.cdOrderDeleteds = [];
                                    $scope.f0131ApiF013211Scope.getCdOrderPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CdOrder2Ctn
                                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrder2CtnGrid) {
                                    if( $scope.f0131ApiF013211Scope.cdOrder2CtnGrid){
                                        if($scope.f0131ApiF013211Scope.CdOrder2CtnForm && $scope.f0131ApiF013211Scope.CdOrder2CtnForm.$validator){
                                            $scope.f0131ApiF013211Scope.CdOrder2CtnForm.$validator.reset();
                                            $scope.f0131ApiF013211Scope.CdOrder2CtnForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF013211Scope.cdOrder2CtnGrid._reset();
                                    $scope.f0131ApiF013211Scope.cdOrder2Ctns.splice(0,$scope.f0131ApiF013211Scope.cdOrder2Ctns.length);
//					$scope.f0131ApiF013211Scope.cdOrder2Ctn = {};
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CdOrderDocument
                                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrderDocumentGrid) {
                                    if( $scope.f0131ApiF013211Scope.cdOrderDocumentGrid){
                                        if($scope.f0131ApiF013211Scope.CdOrderDocumentForm && $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator){
                                            $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator.reset();
                                            $scope.f0131ApiF013211Scope.CdOrderDocumentForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF013211Scope.cdOrderDocumentGrid._reset();
                                    $scope.f0131ApiF013211Scope.cdOrderDocuments.splice(0,$scope.f0131ApiF013211Scope.cdOrderDocuments.length);
//					$scope.f0131ApiF013211Scope.cdOrderDocument = {};
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象CdOrderCargo
                                if($scope.f0131ApiF013211Scope && $scope.f0131ApiF013211Scope.cdOrderCargoGrid) {
                                    if( $scope.f0131ApiF013211Scope.cdOrderCargoGrid){
                                        if($scope.f0131ApiF013211Scope.CdOrderCargoForm && $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator){
                                            $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator.reset();
                                            $scope.f0131ApiF013211Scope.CdOrderCargoForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF013211Scope.cdOrderCargoGrid._reset();
                                    $scope.f0131ApiF013211Scope.cdOrderCargos.splice(0,$scope.f0131ApiF013211Scope.cdOrderCargos.length);
//					$scope.f0131ApiF013211Scope.cdOrderCargo = {};
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                //子对象MfBookingCargo
                                if($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargoGrid) {
                                    if( $scope.f0131ApiF01323Scope.mfBookingCargoGrid){
                                        if($scope.f0131ApiF01323Scope.MfBookingCargoForm && $scope.f0131ApiF01323Scope.MfBookingCargoForm.$validator){
                                            $scope.f0131ApiF01323Scope.MfBookingCargoForm.$validator.reset();
                                            $scope.f0131ApiF01323Scope.MfBookingCargoForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF01323Scope.mfBookingCargoGrid._reset();
                                    $scope.f0131ApiF01323Scope.mfBookingCargos.splice(0,$scope.f0131ApiF01323Scope.mfBookingCargos.length);
                                    $scope.f0131ApiF01323Scope.mfBookingCargo = {};
                                    $scope.f0131ApiF01323Scope.mfBookingCargoDeleteds = [];
                                    $scope.f0131ApiF01323Scope.getMfBookingCargoPages();
                                }
                                //subBo
                                //generatorSubBoGridClear isNewConfig:Y
                                if($scope._pageState) $scope._pageState.resetDataState();
                                //TODO linjx  generatorMethodExtendCallBacks
                                //R   2   execContent:
                                GillionMsg.alert("提示",data.msg,null);
                                var indexScope = top.angular.element("body").scope();
                                indexScope.refresh($scope.openType,"MfOrder");

                            }
                        });
                    }
                }//callback
                var gridRequiresPromises = [];
                if($scope.mfCtnRequestGrid && $scope.mfCtnRequestGrid.tbody.rows[0]){
                    var mfCtnRequestRequiresPromise = $scope.mfCtnRequestGrid.verifySourceRequires();
                    gridRequiresPromises.push(mfCtnRequestRequiresPromise);
                }
                if($scope.mfMultiVesselGrid && $scope.mfMultiVesselGrid.tbody.rows[0]){
                    var mfMultiVesselRequiresPromise = $scope.mfMultiVesselGrid.verifySourceRequires();
                    gridRequiresPromises.push(mfMultiVesselRequiresPromise);
                }
                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.bkContainerGrid && $scope.f0131ApiF01324Scope.bkContainerGrid.tbody.rows[0]){
                    var bkContainerRequiresPromise = $scope.f0131ApiF01324Scope.bkContainerGrid.verifySourceRequires();
                    gridRequiresPromises.push(bkContainerRequiresPromise);
                }
                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.mfContainer2CargoGrid && $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.tbody.rows[0]){
                    var mfContainer2CargoRequiresPromise = $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.verifySourceRequires();
                    gridRequiresPromises.push(mfContainer2CargoRequiresPromise);
                }
                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.arBcFreightGrid && $scope.f0131ApiF01324Scope.arBcFreightGrid.tbody.rows[0]){
                    var arBcFreightRequiresPromise = $scope.f0131ApiF01324Scope.arBcFreightGrid.verifySourceRequires();
                    gridRequiresPromises.push(arBcFreightRequiresPromise);
                }
                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.apBcFreightGrid && $scope.f0131ApiF01324Scope.apBcFreightGrid.tbody.rows[0]){
                    var apBcFreightRequiresPromise = $scope.f0131ApiF01324Scope.apBcFreightGrid.verifySourceRequires();
                    gridRequiresPromises.push(apBcFreightRequiresPromise);
                }
                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.arBcFreightGrid && $scope.f0131ApiF01325Scope.arBcFreightGrid.tbody.rows[0]){
                    var arBcFreightRequiresPromise = $scope.f0131ApiF01325Scope.arBcFreightGrid.verifySourceRequires();
                    gridRequiresPromises.push(arBcFreightRequiresPromise);
                }
                if($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.apBcFreightGrid && $scope.f0131ApiF01325Scope.apBcFreightGrid.tbody.rows[0]){
                    var apBcFreightRequiresPromise = $scope.f0131ApiF01325Scope.apBcFreightGrid.verifySourceRequires();
                    gridRequiresPromises.push(apBcFreightRequiresPromise);
                }
                if($scope.f0131ApiF01328Scope && $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid && $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.tbody.rows[0]){
                    var tmOrderCtnRequestCopyRequiresPromise = $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.verifySourceRequires();
                    gridRequiresPromises.push(tmOrderCtnRequestCopyRequiresPromise);
                }
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid && $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.tbody.rows[0]){
                    var ciOrderDocAttachRequiresPromise = $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.verifySourceRequires();
                    gridRequiresPromises.push(ciOrderDocAttachRequiresPromise);
                }
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderDocumentGrid && $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.tbody.rows[0]){
                    var ciOrderDocumentRequiresPromise = $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.verifySourceRequires();
                    gridRequiresPromises.push(ciOrderDocumentRequiresPromise);
                }
                if($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.ciOrderCargoGrid && $scope.f0131ApiF013210Scope.ciOrderCargoGrid.tbody.rows[0]){
                    var ciOrderCargoRequiresPromise = $scope.f0131ApiF013210Scope.ciOrderCargoGrid.verifySourceRequires();
                    gridRequiresPromises.push(ciOrderCargoRequiresPromise);
                }
                if(gridRequiresPromises && gridRequiresPromises.length>0) {
                    $q.all(gridRequiresPromises).then(function() {
                        callback();
                    }).catch(function(result) {
                        console.log("数据校验未通过！");
                        //TABS F0-1-3-1
                        //TAB y F0-1-3-2-10 F0131Api 0
                        var tabs10_F0131Api_Require_Valid = true ;
                        if($scope.f0131ApiF013210Scope.ciOrderDocAttachGrid && $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController){
                            if(!$scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.formController.$valid || $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF013210Scope.ciOrderDocAttachGrid.$$requireGridValid;
                                tabs10_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.f0131ApiF013210Scope.ciOrderDocumentGrid && $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController){
                            if(!$scope.f0131ApiF013210Scope.ciOrderDocumentGrid.formController.$valid || $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF013210Scope.ciOrderDocumentGrid.$$requireGridValid;
                                tabs10_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.f0131ApiF013210Scope.ciOrderCargoGrid && $scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController){
                            if(!$scope.f0131ApiF013210Scope.ciOrderCargoGrid.formController.$valid || $scope.f0131ApiF013210Scope.ciOrderCargoGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF013210Scope.ciOrderCargoGrid.$$requireGridValid;
                                tabs10_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if(!tabs10_F0131Api_Require_Valid){
                            $scope.F0131Api.selectTab(9);
                        }
                        //TAB y F0-1-3-2-8 F0131Api 0
                        var tabs8_F0131Api_Require_Valid = true ;
                        if($scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid && $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.formController){
                            if(!$scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.formController.$valid || $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopyGrid.$$requireGridValid;
                                tabs8_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if(!tabs8_F0131Api_Require_Valid){
                            $scope.F0131Api.selectTab(7);
                        }
                        //TAB y F0-1-3-2-5 F0131Api 0
                        var tabs5_F0131Api_Require_Valid = true ;
                        if($scope.f0131ApiF01325Scope.arBcFreightGrid && $scope.f0131ApiF01325Scope.arBcFreightGrid.formController){
                            if(!$scope.f0131ApiF01325Scope.arBcFreightGrid.formController.$valid || $scope.f0131ApiF01325Scope.arBcFreightGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01325Scope.arBcFreightGrid.$$requireGridValid;
                                tabs5_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.f0131ApiF01325Scope.apBcFreightGrid && $scope.f0131ApiF01325Scope.apBcFreightGrid.formController){
                            if(!$scope.f0131ApiF01325Scope.apBcFreightGrid.formController.$valid || $scope.f0131ApiF01325Scope.apBcFreightGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01325Scope.apBcFreightGrid.$$requireGridValid;
                                tabs5_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if(!tabs5_F0131Api_Require_Valid){
                            $scope.F0131Api.selectTab(4);
                        }
                        //TAB y F0-1-3-2-4 F0131Api 0
                        var tabs4_F0131Api_Require_Valid = true ;
                        if($scope.f0131ApiF01324Scope.bkContainerGrid && $scope.f0131ApiF01324Scope.bkContainerGrid.formController){
                            if(!$scope.f0131ApiF01324Scope.bkContainerGrid.formController.$valid || $scope.f0131ApiF01324Scope.bkContainerGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01324Scope.bkContainerGrid.$$requireGridValid;
                                tabs4_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.f0131ApiF01324Scope.mfContainer2CargoGrid && $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController){
                            if(!$scope.f0131ApiF01324Scope.mfContainer2CargoGrid.formController.$valid || $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01324Scope.mfContainer2CargoGrid.$$requireGridValid;
                                tabs4_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.f0131ApiF01324Scope.arBcFreightGrid && $scope.f0131ApiF01324Scope.arBcFreightGrid.formController){
                            if(!$scope.f0131ApiF01324Scope.arBcFreightGrid.formController.$valid || $scope.f0131ApiF01324Scope.arBcFreightGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01324Scope.arBcFreightGrid.$$requireGridValid;
                                tabs4_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.f0131ApiF01324Scope.apBcFreightGrid && $scope.f0131ApiF01324Scope.apBcFreightGrid.formController){
                            if(!$scope.f0131ApiF01324Scope.apBcFreightGrid.formController.$valid || $scope.f0131ApiF01324Scope.apBcFreightGrid.$$requireGridValid==false){
                                delete $scope.f0131ApiF01324Scope.apBcFreightGrid.$$requireGridValid;
                                tabs4_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if(!tabs4_F0131Api_Require_Valid){
                            $scope.F0131Api.selectTab(3);
                        }
                        //TAB y F0-1-3-2-1 F0131Api 0
                        var tabs1_F0131Api_Require_Valid = true ;
                        if($scope.mfCtnRequestGrid && $scope.mfCtnRequestGrid.formController){
                            if(!$scope.mfCtnRequestGrid.formController.$valid || $scope.mfCtnRequestGrid.$$requireGridValid==false){
                                delete $scope.mfCtnRequestGrid.$$requireGridValid;
                                tabs1_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if($scope.mfMultiVesselGrid && $scope.mfMultiVesselGrid.formController){
                            if(!$scope.mfMultiVesselGrid.formController.$valid || $scope.mfMultiVesselGrid.$$requireGridValid==false){
                                delete $scope.mfMultiVesselGrid.$$requireGridValid;
                                tabs1_F0131Api_Require_Valid = false;
                                allValidationFlag = false ;
                            }
                        }
                        if(!tabs1_F0131Api_Require_Valid){
                            $scope.F0131Api.selectTab(0);
                        }
                    }).finally(function(result) {
                        console.log("执行表格非空校验.");
                    });
                } else {
                    callback();
                }
            };

            $scope.booking = function () {
                var url = "/html/fms/mf/bookingStatus.html";

                var openType = "2";
                if (url.indexOf("?") >= 0) {
                    url = url + "&openType=" + openType;
                } else {
                    url = url + "?openType=" + openType;
                }
                var sourceOrderId = $scope.mfOrder.mfOrderId;
                url = url + "&sourceOrderId=" + sourceOrderId;
                var options = {
                    title: '状态订阅',
                    closable: true,
                    modal: true,
                    url: url,
                    width: 950,
                    height: 550
                };
                var indexScope = top.angular.element("body").scope();
                indexScope.showUrl(options);
            };

            /**
             * 任务分解海运出口制作 form
             */
            $scope.breakdown = function(){
                var url = "/html/fms/mf/taskBreakDownManage.html";

                var openType = "2";
                if (url.indexOf("?")>=0){
                    url = url + "&openType=" + openType;
                } else {
                    url = url + "?openType=" + openType;
                }
                var sourceOrderId = $scope.mfOrder.mfOrderId;
                url = url + "&sourceOrderId="+sourceOrderId;
                var options = {
                    title : '任务分解' ,
                    closable : true ,
                    modal : true ,
                    url : url ,
                    width:850,
                    height:480
                };
                var indexScope = top.angular.element("body").scope();
                indexScope.showUrl(options);
            };


            /**
             * 放箱确认海运出口制作 form
             */
            $scope.releaseContainer = function(){
                var param = {};
                var secondCarrierCode = $scope.mfOrder.secondCarrierCode;
                param.secondCarrierCode= secondCarrierCode;
                var etd = $scope.mfOrder.etd;
                param.etd= etd;
                var voyage = $scope.mfOrder.voyage;
                param.voyage= voyage;
                var mfOrderId = $scope.mfOrder.mfOrderId;
                param.mfOrderId= mfOrderId;
                var vesselName = $scope.mfOrder.vesselName;
                param.vesselName= vesselName;
                var mblNo = $scope.mfOrder.mblNo;
                param.mblNo= mblNo;
                var secondCarrierName = $scope.mfOrder.secondCarrierName;
                param.secondCarrierName= secondCarrierName;
                var vesselCode = $scope.mfOrder.vesselCode;
                param.vesselCode= vesselCode;
                param.ruleNo="releaseContainerStrategy";
                RuleService.executeRule($scope,param,null,"POST");
                //TODO linjx  generatorMethodExtendCallBacks
                //R   2   execContent:
            };


            /**
             * 开始海运出口制作 form
             */
            $scope.accept = function(){
                var param = {};
                var taskName = Params.taskName || "";
                param.taskName= taskName;
                var mfOrderId = Params.mfOrderId || "";
                param.mfOrderId= mfOrderId;
                param.ruleNo="acceptMfOrder";
                RuleService.executeRule($scope,param,null,"POST");
                //TODO linjx  generatorMethodExtendCallBacks
                //R   2   execContent:
            };


            /**
             * 退回海运出口制作 form
             */
            $scope.refuse = function(){
                var param = {};
                var taskName = Params.taskName || "";
                param.taskName= taskName;
                var mfOrderId = Params.mfOrderId || "";
                param.mfOrderId= mfOrderId;
                param.ruleNo="refuseMfOrder";
                RuleService.executeRule($scope,param,null,"POST");
                //TODO linjx  generatorMethodExtendCallBacks
                //R   2   execContent:
            };


            /**
             * 公司间委托海运出口制作 form
             */
            $scope.companyCommission = function(){
                var url = "/html/fms/mf/companyCommissionManage.html";

                var openType = "2";
                if (url.indexOf("?")>=0){
                    url = url + "&openType=" + openType;
                } else {
                    url = url + "?openType=" + openType;
                }
                var sourceOrderId = $scope.mfOrder.mfOrderId;
                url = url + "&sourceOrderId="+sourceOrderId;
                var options = {
                    title : '公司间委托' ,
                    closable : true ,
                    modal : true ,
                    url : url ,
                    width:1000,
                    height:480
                };
                var indexScope = top.angular.element("body").scope();
                indexScope.showUrl(options);
            };
            $scope.mfOrderCS_CUST_CMFieldMap = {};
            $scope.mfOrderCS_CUST_CMFieldMap.settleMode="setttmentMode";

            $scope.queryConsignorNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_consignorName){
                    searchColumns.push({
                        propertyName:'memonicNo',
                        columnName:'MEMONIC_NO',
                        dataType:'S',
                        junction:'or',
                        type:'V',
                        value:$scope.search_consignorName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_consignorName){
                    searchColumns.push({
                        propertyName:'custAlias',
                        columnName:'CUST_ALIAS',
                        dataType:'S',
                        junction:'or',
                        type:'V',
                        value:$scope.search_consignorName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_consignorName){
                    searchColumns.push({
                        propertyName:'custNameCn',
                        columnName:'CUST_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        type:'V',
                        value:$scope.search_consignorName || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'custType',
                    columnName:'CUST_TYPE',
                    dataType:'S',
                    type:'V',
                    value:"CM",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    type:'V',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    type:'V',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_consignorName){
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        junction:'or',
                        type:'V',
                        value:$scope.search_consignorName || "",
                        operation:'IN'
                    });
                }
                if($scope.$sessionAttrs&&$scope.$sessionAttrs.loginUser&&$scope.$sessionAttrs.loginUser.settleOffice) {
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        value:$scope.$sessionAttrs.loginUser.settleOffice || "",
                        operation:'EQ'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'memonicNo',
                    columnName:'MEMONIC_NO',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };
            $scope.querySpeSettleIdeNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_speSettleIdeName){
                    searchColumns.push({
                        propertyName:'memonicNo',
                        columnName:'MEMONIC_NO',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_speSettleIdeName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_speSettleIdeName){
                    searchColumns.push({
                        propertyName:'custAlias',
                        columnName:'CUST_ALIAS',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_speSettleIdeName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_speSettleIdeName){
                    searchColumns.push({
                        propertyName:'custNameCn',
                        columnName:'CUST_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_speSettleIdeName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_speSettleIdeName){
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_speSettleIdeName || "",
                        operation:'IN'
                    });
                }

                var sortColumns = [];
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.querySettleCustNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_settleCustName){
                    searchColumns.push({
                        propertyName:'memonicNo',
                        columnName:'MEMONIC_NO',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_settleCustName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_settleCustName){
                    searchColumns.push({
                        propertyName:'custAlias',
                        columnName:'CUST_ALIAS',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_settleCustName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_settleCustName){
                    searchColumns.push({
                        propertyName:'custNameCn',
                        columnName:'CUST_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_settleCustName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_settleCustName){
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_settleCustName || "",
                        operation:'IN'
                    });
                }

                var sortColumns = [];
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryBusinessUnitsNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_businessUnitsName){
                    searchColumns.push({
                        propertyName:'memonicNo',
                        columnName:'MEMONIC_NO',
                        dataType:'S',
                        junction:'or',
                        type:'V',
                        value:$scope.search_businessUnitsName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_businessUnitsName){
                    searchColumns.push({
                        propertyName:'custAlias',
                        columnName:'CUST_ALIAS',
                        dataType:'S',
                        junction:'or',
                        type:'V',
                        value:$scope.search_businessUnitsName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_businessUnitsName){
                    searchColumns.push({
                        propertyName:'custNameCn',
                        columnName:'CUST_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        type:'V',
                        value:$scope.search_businessUnitsName || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'custType',
                    columnName:'CUST_TYPE',
                    dataType:'S',
                    type:'V',
                    value:"CM",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    type:'V',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    type:'V',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_businessUnitsName){
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        junction:'or',
                        type:'V',
                        value:$scope.search_businessUnitsName || "",
                        operation:'IN'
                    });
                }
                if($scope.$sessionAttrs&&$scope.$sessionAttrs.loginUser&&$scope.$sessionAttrs.loginUser.settleOffice) {
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        value:$scope.$sessionAttrs.loginUser.settleOffice || "",
                        operation:'EQ'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'memonicNo',
                    columnName:'MEMONIC_NO',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryPlaceOfReceiptMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_placeOfReceipt){
                    searchColumns.push({
                        propertyName:'portName',
                        columnName:'PORT_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_placeOfReceipt || "",
                        operation:'LIKEE'
                    });
                }

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_placeOfReceipt){
                    searchColumns.push({
                        propertyName:'port5code',
                        columnName:'PORT_5CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_placeOfReceipt || "",
                        operation:'LIKEE'
                    });
                }

                searchColumns.push({
                    propertyName:'portType',
                    columnName:'PORT_TYPE',
                    dataType:'S',
                    value:"OP",
                    operation:'LIKEIC'
                });
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'portName',
                    columnName:'PORT_NAME',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };
            $scope.mfOrderMD_PORT_OCEANFieldMap = {};
            $scope.mfOrderMD_PORT_OCEANFieldMap.polPort5code="port5code";

            $scope.queryPortOfLoadingMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_portOfLoading){
                    searchColumns.push({
                        propertyName:'portName',
                        columnName:'PORT_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_portOfLoading || "",
                        operation:'LIKEE'
                    });
                }

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_portOfLoading){
                    searchColumns.push({
                        propertyName:'port5code',
                        columnName:'PORT_5CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_portOfLoading || "",
                        operation:'LIKEE'
                    });
                }

                searchColumns.push({
                    propertyName:'portType',
                    columnName:'PORT_TYPE',
                    dataType:'S',
                    value:"OP",
                    operation:'LIKEIC'
                });
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'portName',
                    columnName:'PORT_NAME',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };
            $scope.mfOrderMD_PORT_OCEANFieldMap = {};
            $scope.mfOrderMD_PORT_OCEANFieldMap.potPort5code="port5code";

            $scope.queryPortOfTransshipmentMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_portOfTransshipment){
                    searchColumns.push({
                        propertyName:'portName',
                        columnName:'PORT_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_portOfTransshipment || "",
                        operation:'LIKEE'
                    });
                }

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_portOfTransshipment){
                    searchColumns.push({
                        propertyName:'port5code',
                        columnName:'PORT_5CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_portOfTransshipment || "",
                        operation:'LIKEE'
                    });
                }

                searchColumns.push({
                    propertyName:'portType',
                    columnName:'PORT_TYPE',
                    dataType:'S',
                    value:"OP",
                    operation:'LIKEIC'
                });
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'portName',
                    columnName:'PORT_NAME',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };
            $scope.mfOrderMD_PORT_OCEANFieldMap = {};
            $scope.mfOrderMD_PORT_OCEANFieldMap.line="lineName";
            $scope.mfOrderMD_PORT_OCEANFieldMap.lineCode="lineCode";
            $scope.mfOrderMD_PORT_OCEANFieldMap.podPort5code="port5code";
            $scope.queryDirectOwnerNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_directOwnerName){
                    searchColumns.push({
                        propertyName:'memonicNo',
                        columnName:'MEMONIC_NO',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_directOwnerName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_directOwnerName){
                    searchColumns.push({
                        propertyName:'custAlias',
                        columnName:'CUST_ALIAS',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_directOwnerName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_directOwnerName){
                    searchColumns.push({
                        propertyName:'custNameCn',
                        columnName:'CUST_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_directOwnerName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_directOwnerName){
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_directOwnerName || "",
                        operation:'IN'
                    });
                }

                var sortColumns = [];
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };
            $scope.queryPortOfDischargeMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_portOfDischarge){
                    searchColumns.push({
                        propertyName:'portName',
                        columnName:'PORT_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_portOfDischarge || "",
                        operation:'LIKEE'
                    });
                }

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_portOfDischarge){
                    searchColumns.push({
                        propertyName:'port5code',
                        columnName:'PORT_5CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_portOfDischarge || "",
                        operation:'LIKEE'
                    });
                }

                searchColumns.push({
                    propertyName:'portType',
                    columnName:'PORT_TYPE',
                    dataType:'S',
                    value:"OP",
                    operation:'LIKEIC'
                });
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'portName',
                    columnName:'PORT_NAME',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };
            $scope.mfOrderMD_PORT_OCEANFieldMap = {};
            $scope.mfOrderMD_PORT_OCEANFieldMap.podDestPort5code="port5code";

            $scope.queryPortOfDestinationMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_portOfDestination){
                    searchColumns.push({
                        propertyName:'portName',
                        columnName:'PORT_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_portOfDestination || "",
                        operation:'LIKEE'
                    });
                }

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_portOfDestination){
                    searchColumns.push({
                        propertyName:'port5code',
                        columnName:'PORT_5CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_portOfDestination || "",
                        operation:'LIKEE'
                    });
                }

                searchColumns.push({
                    propertyName:'portType',
                    columnName:'PORT_TYPE',
                    dataType:'S',
                    value:"OP",
                    operation:'LIKEIC'
                });
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'portName',
                    columnName:'PORT_NAME',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryPortOfDeliveryMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_portOfDelivery){
                    searchColumns.push({
                        propertyName:'portName',
                        columnName:'PORT_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_portOfDelivery || "",
                        operation:'LIKEE'
                    });
                }

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_portOfDelivery){
                    searchColumns.push({
                        propertyName:'port5code',
                        columnName:'PORT_5CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_portOfDelivery || "",
                        operation:'LIKEE'
                    });
                }

                searchColumns.push({
                    propertyName:'portType',
                    columnName:'PORT_TYPE',
                    dataType:'S',
                    value:"OP",
                    operation:'LIKEIC'
                });
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'portName',
                    columnName:'PORT_NAME',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryLineMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_line){
                    searchColumns.push({
                        propertyName:'lineCode',
                        columnName:'LINE_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_line || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_line){
                    searchColumns.push({
                        propertyName:'lineName',
                        columnName:'LINE_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_line || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_line){
                    searchColumns.push({
                        propertyName:'lineTypeName',
                        columnName:'LINE_TYPE_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_line || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                var sortColumns = [];
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };
            //<!--GRID_TOOLBAR-->
            //TODO LayoutElementType.GRID_TOOLBAR

            /**
             * 查询
             */
            $scope.queryMfCtnRequest = function()
            {
                if($scope.MfCtnRequestQueryForm && $scope.MfCtnRequestQueryForm.$validator){
                    $scope.MfCtnRequestQueryForm.verify();
                }
                if($scope.MfCtnRequestQueryForm && !$scope.MfCtnRequestQueryForm.$valid){
                    return;
                }
                $scope._finishEditGridWrap($scope.mfCtnRequestGrid,$scope.mfCtnRequests);

                for(var i=0;i<$scope.mfCtnRequests.length;i++) {
                    var rowStatus=$scope.mfCtnRequests[i].rowStatus;
                    var flag=false;
                    if (rowStatus != 2) {
                        if(rowStatus==4||rowStatus==8){
                            flag=true;
                        } else {
                            if($scope.perMfCtnRequests[i].rowStatus){
                                $scope.perMfCtnRequests[i].rowStatus=16;
                            }
                            $scope.mfCtnRequestCopy= angular.copy($scope.mfCtnRequests[i]);

                            delete $scope.mfCtnRequestCopy.containerSizeTypeMfCtnRequestGSelectedRow;
                            delete $scope.mfCtnRequestCopy.containerSizeTypeMfCtnRequestSSelectedRow;
                            delete $scope.mfCtnRequestCopy.containerSizeTypeMfCtnRequestFSelectedRow;
                            delete $scope.mfCtnRequestCopy.containerSizeTypeMfCtnRequestQSelectedRow;
                            if(($scope.mfCtnRequestCopy.containerSizeType==undefined
                                    ||$scope.mfCtnRequestCopy.containerSizeType=='')
                                && ($scope.perMfCtnRequests[i].containerSizeType==null
                                    || $scope.perMfCtnRequests[i].containerSizeType=='')){
                                delete $scope.perMfCtnRequests[i].containerSizeType;
                                delete $scope.mfCtnRequestCopy.containerSizeType;
                            }
                            delete $scope.mfCtnRequestCopy.memonicNoMfCtnRequestGSelectedRow;
                            delete $scope.mfCtnRequestCopy.memonicNoMfCtnRequestSSelectedRow;
                            delete $scope.mfCtnRequestCopy.memonicNoMfCtnRequestFSelectedRow;
                            delete $scope.mfCtnRequestCopy.memonicNoMfCtnRequestQSelectedRow;
                            if(($scope.mfCtnRequestCopy.memonicNo==undefined
                                    ||$scope.mfCtnRequestCopy.memonicNo=='')
                                && ($scope.perMfCtnRequests[i].memonicNo==null
                                    || $scope.perMfCtnRequests[i].memonicNo=='')){
                                delete $scope.perMfCtnRequests[i].memonicNo;
                                delete $scope.mfCtnRequestCopy.memonicNo;
                            }
                            if(!$scope.perMfCtnRequests[i].ctnCompanyName){
                                $scope.perMfCtnRequests[i].ctnCompanyName="";
                            }
                            if(!$scope.mfCtnRequestCopy.ctnCompanyName){
                                $scope.mfCtnRequestCopy.ctnCompanyName="";
                            }
                            if(!angular.equals($scope.perMfCtnRequests[i],$scope.mfCtnRequestCopy)){
                                flag=true;
                            }
                        }

                        if(flag){
                            GillionMsg.confirm(null, "是否保存编辑的数据？", function (btn) {
                                if (btn) {
                                } else {
                                    $scope.mfCtnRequestGrid.$$currentSelKey = undefined;
                                    $scope.mfCtnRequests = [];
                                    $scope.queryMfCtnRequest();
                                }
                            });

                            return;
                        }
                    }
                }


                if($scope.mfCtnRequestGrid.formController){
                    var $validator = $scope.mfCtnRequestGrid.formController.$validator;
                    $validator.disable();
                    $validator.reset();
                }
                $scope._finishEditGridWrap($scope.mfCtnRequestGrid,$scope.mfCtnRequests);
                if($scope.mfCtnRequestGrid.formController){
                    $validator.enable();
                }
                $scope.mfCtnRequestGrid._reset();
                //generatorSubBoGridClear isNewConfig:Y
                $scope.getMfCtnRequestPages();

                $scope.mfCtnRequestGrid.$$currentSelKey = undefined;


            };
            /**
             * 批量删除箱需求-海运出口
             */
            $scope.deleteMfCtnRequests = function(){
                var ids = Arrays.extract($scope.mfCtnRequestCheckedRows, 'mfCtnRequestId').join(',');
                if(ids.length == 0){
                    GillionMsg.alert("提示","请选择要删除的记录!");
                    return;
                }
                GillionMsg.confirm(null,'确认删除?',function(btn) {
                    if (btn) {
                        if($scope.mfCtnRequestGrid.formController){
                            var $validator = $scope.mfCtnRequestGrid.formController.$validator;
                            $validator.disable();
                            $validator.reset();
                        }
                        $scope._finishEditGridWrap($scope.mfCtnRequestGrid,$scope.mfCtnRequests);
                        if($scope.mfCtnRequestGrid.formController){
                            $validator.enable();
                        }
                        for(var i=0; i<$scope.mfCtnRequests.length; i++){
                            //TODO 选中行  $scope.mfCtnRequestGrid.scope.$checkedRows.length 笔数
                            for(var j=0; j<$scope.mfCtnRequestGrid.scope.$checkedRows.length; j++){
                                if($scope.mfCtnRequests[i].mfCtnRequestId == $scope.mfCtnRequestGrid.scope.$checkedRows[j].mfCtnRequestId){
                                    $scope.mfCtnRequests[i].rowStatus = 8;
                                    $scope.mfCtnRequestDeleteds.push($scope.mfCtnRequests[i]);
                                    $scope.mfCtnRequests.splice(i,1);
                                    $scope.mfCtnRequestGrid.scope.$checkedRows.splice(j,1);
                                    i--;
                                    j--;
                                    break;
                                }
                            }
                        }
                        //generatorSubBoGridClear isNewConfig:Y


                        if(!$scope.$root.$$phase){
                            $scope.$apply();
                        }

                        $http.post($config.ctx + '/mfCtnRequest/deletes',{ids : ids}).success(function(data){
                            if (data.success != undefined && data.success == true) {
                                $scope.mfCtnRequestDeleteds = [];
                                GillionMsg.alert("提示", data.msg);
                            }
                        });
                    }
                });
            };
            //<!--GRID-->
            //TODO LayoutElementType.GRID
            $scope.containerSizeTypeMfCtnRequestGchangeRow = function(list,item){
            };
            $scope.memonicNoMfCtnRequestGchangeRow = function(list,item){
                angular.element(list.element).scope().row["ctnCompanyName"] = item["custNameCn"];
                angular.element(list.element).scope().row["ctnCompanyCode"] = item["custCode"];
            };

            $scope.mfCtnRequest = {};
            $scope.mfCtnRequests = [];
            $scope.perMfCtnRequests = [];
            $scope.mfCtnRequestDeleteds = [];
            $scope.$on('MfCtnRequestSource',function(context,dataSource){
                if(dataSource.records != undefined){
                    $scope.mfCtnRequests = dataSource.records ;
                    $scope.perMfCtnRequests = angular.copy(dataSource.records) ;
                }
                //$scope.tableMfCtnRequestEditStatus=false;
            });
            //MfCtnRequestSource
            $dataSourceManager.getDataSource('MfCtnRequestSource').then(function(dataSource){
                $scope.mfCtnRequestDataSource = dataSource;
                $scope.getMfCtnRequestPages = function () {
                    var grid = $scope.mfCtnRequestGrid;
                    if(grid) grid._reset();
                    dataSource.doRequestData($scope.queryMfCtnRequestParams);
                };
            });
            $scope.onClosePage = function () {
                $scope.tabNode = {};
                _.forEach($scope._bindedProps, function (key) {
                    if (_.isArray($scope[key])) {
                        $scope[key] = [];
                    } else if (_.isObject($scope[key])) {
                        $scope[key] = {};
                    } else {
                        $scope[key] = null;
                    }
                });
                $scope._bindedProps = [];
                for (var key in $scope.F0131Api.tabs) {
                    if (key.indexOf("基本信息") < 0 && key.indexOf("操作要求") < 0) {
                        $scope.F0131Api.closeTab(key, false);
                    } else if (key.indexOf("基本信息") < 0) {
                        $scope.tabNode = $scope.F0131Api.tabs[key];
                        $scope.F0131Api.closeTab(key, false);
                    }
                }
                $scope.F01321121Api.selectTab(0);
            };
            $scope.$on('closePage', function() {
                $scope.onClosePage();
            });
            $scope.$watchCollection('mfCtnRequests', function(){
                if($scope.mfCtnRequestDataSource){
                    $scope.mfCtnRequestDataSource.records = $scope.mfCtnRequests;

                    var checkRowTempIndex =[];
                    if($scope.mfCtnRequestGrid.scope.checkedRows && $scope.mfCtnRequestGrid.scope.checkedRows.length >0){
                        angular.forEach($scope.mfCtnRequestGrid.scope.checkedRows,function(row,index){
                            var rowIndexTemp = _.findIndex($scope.mfCtnRequestDataSource.records,row);
                            checkRowTempIndex.push(rowIndexTemp);
                        });
                    }

                    $dataSourceManager.$rootScope.$broadcast("MfCtnRequestSource", $scope.mfCtnRequestDataSource);

                    if(checkRowTempIndex && checkRowTempIndex.length > 0){
                        angular.forEach(checkRowTempIndex,function(dataIndex,index){
                            var row = $scope.mfCtnRequestDataSource.records[dataIndex];
                            var checked = Arrays.exists($scope.mfCtnRequestGrid.scope.checkedRows, row);
                            if (!checked) {
                                $scope.mfCtnRequestGrid.scope.checkedRows.push(row);
                            }
                        });
                        checkRowIndex=[];
                    }
                }
            });

            $scope.beforeSelectedMfCtnRequest = function($event, record ,grid){
                grid.$$currentSelKey = record.mfCtnRequestId;
                var $target = angular.element($event.target);
                var $row = $target.closest('tr');
                var innerRowIndex = $row[0].rowIndex;
                $scope.mfCtnRequestCurRow = $row.scope();

                if($scope.mfCtnRequestGrid && $scope.mfCtnRequestGrid.formController && $scope.mfCtnRequestGrid.formController.$valid==false)
                    return ;
                if(record.rowStatus && record.rowStatus == 2 ){
                    //record.rowStatus = 16;
                }
                $scope.mfCtnRequest = record;

                //generatorSubBoGridClear isNewConfig:Y


                var rowIndex = innerRowIndex || Arrays.indexOf($scope.mfCtnRequests, $scope.mfCtnRequest);
                $scope.mfCtnRequest.$$rowIndex = rowIndex ;

                var editIndex = grid.__editingRowIndex;
                if(editIndex == innerRowIndex)
                    return true;
                $scope._finishEditGridWrap($scope.mfCtnRequestGrid,$scope.mfCtnRequests);

                if($target[0].parentNode.childNodes.length === 1 || editIndex !== innerRowIndex){
                    $scope.mfCtnRequestPrimaryKey($target, record, grid);
                }
                grid.startEdit(innerRowIndex);

                //table edit cell focus()
                var $editor = $target.closest('td').find('[data-role="editor"]');
                $input = $editor.find(':input');
                var disabled = false;
                if ($input.prop('disabled') || $input.prop('readonly')) {
                    disabled = true;
                }
                if(!!($editor.length) && !disabled){
                    if($input.length){
                        $input[0].focus();
                        setTimeout(function() {
                            $input[0].select();
                        }, 10);
                    }
                }else{
                    $input = $row.find('[data-role="editor"]').first().find(':input');
                    if($input.length){
                        $input[0].focus();
                        setTimeout(function() {
                            $input[0].select();
                        }, 10);
                    }
                }
            };

            $scope.mfCtnRequestPrimaryKey =  function($target, row, grid){
                var  cellTmplScope = angular.extend($scope.$new(), {
                    row: row
                });
            }



            $scope.queryMfCtnRequestParams = function()
            {
                //外键mfOrderId 4
                if(!$scope.mfOrderId) $scope.mfOrderId = "";
                if($scope.mfOrderId=="" && $scope.search && $scope.search.mfOrderId)$scope.mfOrderId=$scope.search.mfOrderId;
                //父业务对象名称：MfOrderIT 子业务对象名称:MfCtnRequest
                if($scope.mfOrderIT && $scope.mfOrderIT.mfOrderId) $scope.mfOrderId = $scope.mfOrderIT.mfOrderId;
                //父业务对象名称：MfOrderBCE 子业务对象名称:MfCtnRequest
                if($scope.mfOrderBCE && $scope.mfOrderBCE.mfOrderId) $scope.mfOrderId = $scope.mfOrderBCE.mfOrderId;
                //父业务对象名称：MfOrderOI 子业务对象名称:MfCtnRequest
                if($scope.mfOrderOI && $scope.mfOrderOI.mfOrderId) $scope.mfOrderId = $scope.mfOrderOI.mfOrderId;
                //父业务对象名称：MfOrder 子业务对象名称:MfCtnRequest
                if($scope.mfOrder && $scope.mfOrder.mfOrderId) $scope.mfOrderId = $scope.mfOrder.mfOrderId;

                var searchColumns = [];
                //C
                // key:mfOrderId
                // subBoPropertyName:mfOrderId subBoPropertyName{r}:null subColumnName{r}:MF_ORDER_ID
                // propertyName:mfOrderId
                // propertyName{r}:mfOrderId   columnName{r}:MF_ORDER_ID
                // linkPropertyName{r}: linkColumnName{r}:

                searchColumns.push({
                    propertyName:'mfOrderId',
                    columnName:'MF_ORDER_ID',
                    dataType:'N',
                    value:$scope.mfOrderId || "",
                    operation:'EQ'
                });




                return {"searchColumns":searchColumns,"queryResultType":"list","sum":false};
            }
            var rowIndex_MfCtnRequest = -1;
            //initMfCtnRequestGrid
            $scope.initMfCtnRequestGrid = function(grid){
                $scope.mfCtnRequestGrid = grid;
                $scope.mfCtnRequestGrid.$$added=false;
                if($scope._pageState) $scope._pageState.resetDataState();
            };

            $scope.loadSuccessMfCtnRequestGrid = function(grid,source){
                if($scope.mfCtnRequestGrid.$$added==true){
                    if(source &&  source.length>0){
                        $scope._finishEditGridWrap($scope.mfCtnRequestGrid,$scope.mfCtnRequests);
                        //var $$index = (source && source.length>0) ? source.length-1 : 0;
                        //grid.startEdit($$index);
                        $timeout(function () {
                            $scope.mfCtnRequestSelectedRow = source[0];
                            grid.startEdit(0);
                        });

                        var $element = grid.element;
                        var $tr = $element.find('.grid-body').find('tr').eq(0);
                        var firstInput = $tr.find('[data-role=editor]').find(':input')[0];
                        firstInput && firstInput.focus();

                        $scope.mfCtnRequestPrimaryKey(angular.element(grid.tbody.rows[0].cells[0]), source[0], grid);
                        //grid.formController.verify();
                        if(grid.formController && grid.formController.verify)
                            $timeout(grid.formController.verify,100);
                        $scope.mfCtnRequestGrid.$$added=false;
                        //if($scope._pageState) $scope._pageState.resetDataState();

                    }
                } else {
                    var innerRowIndex = 0;
                    if(grid.tbody.rows[0]){
                        var record = source[0];
                        var $target = angular.element(grid.tbody.rows[0].cells[0]);
                        var $row = $target.closest('tr');
                        if(record.rowStatus && record.rowStatus == 2){
                            //record.rowStatus = 16;
                        }
                        $scope.mfCtnRequest = record;

                        //当查询成功或手动点下一页时需要把校验初使化
                        if(grid.formController){
                            var $validator = grid.formController.$validator;
                            $validator.disable();
                            $validator.reset();
                        }

                        //generatorSubBoGridClear isNewConfig:Y


                        var rowIndex = innerRowIndex || Arrays.indexOf($scope.mfCtnRequests,$scope.mfCtnRequest);
                        $scope.mfCtnRequest.$$rowIndex = rowIndex ;

                        var editIndex = grid.__editingRowIndex;
                        if(editIndex == innerRowIndex)
                            return true;
                        $scope._finishEditGridWrap($scope.mfCtnRequestGrid,$scope.mfCtnRequests);

                        if(grid.formController){
                            grid.formController.$validator.enable();
                        }
                        if($target[0].parentNode.childNodes.length === 1 || editIndex !== innerRowIndex){
                            $scope.mfCtnRequestPrimaryKey($target, record, grid);
                        }
                        $scope.$$isAddEvent = $scope.mfCtnRequestGrid.$$added;
                        $timeout(function () {
                            //$scope.mfCtnRequestSelectedRow = record;
                            //grid.startEdit(innerRowIndex);
                            var $$currentSelKey = grid.$$currentSelKey;
                            var $$hasSelectPrimaryKey = false;
                            if(grid.$$currentSelKey && !$scope.$$isAddEvent){
                                angular.forEach(source,function(data,index){
                                    if($$currentSelKey == data.mfCtnRequestId){
                                        $scope.mfCtnRequestSelectedRow = data;
                                        $$hasSelectPrimaryKey = true;
                                    }
                                });
                            }
                        });

                        angular.element(grid.tbody.rows[0]).attr("active",true);
                    }
                }
            };


            $scope.queryContainerSizeTypeMfCtnRequestGParams = function()
            {
                var searchColumns = [];
                if($scope.search_MfCtnRequest_containerSizeType){
                    searchColumns.push({
                        propertyName:'containerType',
                        columnName:'CONTAINER_TYPE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_MfCtnRequest_containerSizeType || "",
                        operation:'EQ'
                    });
                }

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                var sortColumns = [];
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryMemonicNoMfCtnRequestGParams = function()
            {
                var searchColumns = [];
                if($scope.search_MfCtnRequest_memonicNo){
                    searchColumns.push({
                        propertyName:'memonicNo',
                        columnName:'MEMONIC_NO',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_MfCtnRequest_memonicNo || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_MfCtnRequest_memonicNo){
                    searchColumns.push({
                        propertyName:'custCode',
                        columnName:'CUST_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_MfCtnRequest_memonicNo || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_MfCtnRequest_memonicNo){
                    searchColumns.push({
                        propertyName:'custAlias',
                        columnName:'CUST_ALIAS',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_MfCtnRequest_memonicNo || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_MfCtnRequest_memonicNo){
                    searchColumns.push({
                        propertyName:'custNameCn',
                        columnName:'CUST_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_MfCtnRequest_memonicNo || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'custType',
                    columnName:'CUST_TYPE',
                    dataType:'S',
                    value:"CO",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_MfCtnRequest_memonicNo){
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_MfCtnRequest_memonicNo || "",
                        operation:'IN'
                    });
                }
                if($scope.$sessionAttrs&&$scope.$sessionAttrs.loginUser&&$scope.$sessionAttrs.loginUser.settleOffice) {
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        value:$scope.$sessionAttrs.loginUser.settleOffice || "",
                        operation:'EQ'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'memonicNo',
                    columnName:'MEMONIC_NO',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryCtnCompanyNameMfCtnRequestGParams = function()
            {
                var searchColumns = [];
                if($scope.search_MfCtnRequest_ctnCompanyName){
                    searchColumns.push({
                        propertyName:'memonicNo',
                        columnName:'MEMONIC_NO',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_MfCtnRequest_ctnCompanyName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_MfCtnRequest_ctnCompanyName){
                    searchColumns.push({
                        propertyName:'custCode',
                        columnName:'CUST_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_MfCtnRequest_ctnCompanyName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_MfCtnRequest_ctnCompanyName){
                    searchColumns.push({
                        propertyName:'custAlias',
                        columnName:'CUST_ALIAS',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_MfCtnRequest_ctnCompanyName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_MfCtnRequest_ctnCompanyName){
                    searchColumns.push({
                        propertyName:'custNameCn',
                        columnName:'CUST_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_MfCtnRequest_ctnCompanyName || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'custType',
                    columnName:'CUST_TYPE',
                    dataType:'S',
                    value:"CO",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_MfCtnRequest_ctnCompanyName){
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_MfCtnRequest_ctnCompanyName || "",
                        operation:'IN'
                    });
                }
                if($scope.$sessionAttrs&&$scope.$sessionAttrs.loginUser&&$scope.$sessionAttrs.loginUser.settleOffice) {
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        value:$scope.$sessionAttrs.loginUser.settleOffice || "",
                        operation:'EQ'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'memonicNo',
                    columnName:'MEMONIC_NO',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };
            $scope.mfOrderCS_CUST_SOFieldMap = {};
            $scope.mfOrderCS_CUST_SOFieldMap.memonicNo="memonicNo";

            $scope.querySecondCarrierNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_secondCarrierName){
                    searchColumns.push({
                        propertyName:'memonicNo',
                        columnName:'MEMONIC_NO',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_secondCarrierName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_secondCarrierName){
                    searchColumns.push({
                        propertyName:'custCode',
                        columnName:'CUST_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_secondCarrierName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_secondCarrierName){
                    searchColumns.push({
                        propertyName:'custAlias',
                        columnName:'CUST_ALIAS',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_secondCarrierName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_secondCarrierName){
                    searchColumns.push({
                        propertyName:'custNameCn',
                        columnName:'CUST_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_secondCarrierName || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'custType',
                    columnName:'CUST_TYPE',
                    dataType:'S',
                    value:"SO",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_secondCarrierName){
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_secondCarrierName || "",
                        operation:'IN'
                    });
                }
                if($scope.$sessionAttrs&&$scope.$sessionAttrs.loginUser&&$scope.$sessionAttrs.loginUser.settleOffice) {
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        value:$scope.$sessionAttrs.loginUser.settleOffice || "",
                        operation:'EQ'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'memonicNo',
                    columnName:'MEMONIC_NO',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryBookingAgencyNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_bookingAgencyName){
                    searchColumns.push({
                        propertyName:'memonicNo',
                        columnName:'MEMONIC_NO',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_bookingAgencyName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_bookingAgencyName){
                    searchColumns.push({
                        propertyName:'custCode',
                        columnName:'CUST_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_bookingAgencyName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_bookingAgencyName){
                    searchColumns.push({
                        propertyName:'custAlias',
                        columnName:'CUST_ALIAS',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_bookingAgencyName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_bookingAgencyName){
                    searchColumns.push({
                        propertyName:'custNameCn',
                        columnName:'CUST_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_bookingAgencyName || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'custType',
                    columnName:'CUST_TYPE',
                    dataType:'S',
                    value:"BA",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_bookingAgencyName){
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_bookingAgencyName || "",
                        operation:'IN'
                    });
                }
                if($scope.$sessionAttrs&&$scope.$sessionAttrs.loginUser&&$scope.$sessionAttrs.loginUser.settleOffice) {
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        value:$scope.$sessionAttrs.loginUser.settleOffice || "",
                        operation:'EQ'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'memonicNo',
                    columnName:'MEMONIC_NO',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryCarrierNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_carrierName){
                    searchColumns.push({
                        propertyName:'memonicNo',
                        columnName:'MEMONIC_NO',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_carrierName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_carrierName){
                    searchColumns.push({
                        propertyName:'custCode',
                        columnName:'CUST_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_carrierName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_carrierName){
                    searchColumns.push({
                        propertyName:'custAlias',
                        columnName:'CUST_ALIAS',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_carrierName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_carrierName){
                    searchColumns.push({
                        propertyName:'custNameCn',
                        columnName:'CUST_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_carrierName || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'custType',
                    columnName:'CUST_TYPE',
                    dataType:'S',
                    value:"SO",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_carrierName){
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_carrierName || "",
                        operation:'IN'
                    });
                }
                if($scope.$sessionAttrs&&$scope.$sessionAttrs.loginUser&&$scope.$sessionAttrs.loginUser.settleOffice) {
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        value:$scope.$sessionAttrs.loginUser.settleOffice || "",
                        operation:'EQ'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'memonicNo',
                    columnName:'MEMONIC_NO',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryCombinedForwardMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_combinedForward){
                    searchColumns.push({
                        propertyName:'memonicNo',
                        columnName:'MEMONIC_NO',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_combinedForward || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_combinedForward){
                    searchColumns.push({
                        propertyName:'custCode',
                        columnName:'CUST_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_combinedForward || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_combinedForward){
                    searchColumns.push({
                        propertyName:'custAlias',
                        columnName:'CUST_ALIAS',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_combinedForward || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_combinedForward){
                    searchColumns.push({
                        propertyName:'custNameCn',
                        columnName:'CUST_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_combinedForward || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'custType',
                    columnName:'CUST_TYPE',
                    dataType:'S',
                    value:"FW",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_combinedForward){
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_combinedForward || "",
                        operation:'IN'
                    });
                }
                if($scope.$sessionAttrs&&$scope.$sessionAttrs.loginUser&&$scope.$sessionAttrs.loginUser.settleOffice) {
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        value:$scope.$sessionAttrs.loginUser.settleOffice || "",
                        operation:'EQ'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'memonicNo',
                    columnName:'MEMONIC_NO',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };
            $scope.mfOrderMD_VESSELFieldMap = {};
            $scope.mfOrderMD_VESSELFieldMap.vesselAttribute="vesselAttribute";

            $scope.queryVesselNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_vesselName){
                    searchColumns.push({
                        propertyName:'vesselAliasCode',
                        columnName:'VESSEL_ALIAS_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_vesselName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_vesselName){
                    searchColumns.push({
                        propertyName:'vesselNameEn',
                        columnName:'VESSEL_NAME_EN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_vesselName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_vesselName){
                    searchColumns.push({
                        propertyName:'vesselNameCn',
                        columnName:'VESSEL_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_vesselName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_vesselName){
                    searchColumns.push({
                        propertyName:'vesselCode',
                        columnName:'VESSEL_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_vesselName || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'vesselNameEn',
                    columnName:'VESSEL_NAME_EN',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                sortColumns.push({
                    propertyName:'vesselAliasCode',
                    columnName:'VESSEL_ALIAS_CODE',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };
            $scope.mfOrderMD_VOYAGE_PLANFieldMap = {};
            $scope.mfOrderMD_VOYAGE_PLANFieldMap.carrierName="carrierName";
            $scope.mfOrderMD_VOYAGE_PLANFieldMap.firstPortAreaName="terminalName";
            $scope.mfOrderMD_VOYAGE_PLANFieldMap.shippingAgencyCode="shippingAgencyCode";
            $scope.mfOrderMD_VOYAGE_PLANFieldMap.shippingAgencyName="shippingAgencyName";
            $scope.mfOrderMD_VOYAGE_PLANFieldMap.firstPortAreaCode="terminalCode";
            $scope.mfOrderMD_VOYAGE_PLANFieldMap.carrierCode="carrierCode";

            $scope.queryVoyageMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_voyage){
                    searchColumns.push({
                        propertyName:'voyage',
                        columnName:'VOYAGE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_voyage || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_voyage){
                    searchColumns.push({
                        propertyName:'vesselNameEn',
                        columnName:'VESSEL_NAME_EN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_voyage || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_voyage){
                    searchColumns.push({
                        propertyName:'vesselNameCn',
                        columnName:'VESSEL_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_voyage || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_voyage){
                    searchColumns.push({
                        propertyName:'vesselCode',
                        columnName:'VESSEL_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_voyage || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_voyage){
                    searchColumns.push({
                        propertyName:'portCode',
                        columnName:'PORT_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_voyage || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_voyage){
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_voyage || "",
                        operation:'IN'
                    });
                }
                if($scope.$sessionAttrs&&$scope.$sessionAttrs.loginUser&&$scope.$sessionAttrs.loginUser.settleOffice) {
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        value:$scope.$sessionAttrs.loginUser.settleOffice || "",
                        operation:'EQ'
                    });
                }
                if($scope.mfOrder.portOfLoadingCode){
                    searchColumns.push({
                        propertyName:'portCode',
                        columnName:'PORT_CODE',
                        dataType:'S',
                        value:$scope.mfOrder.portOfLoadingCode || "",
                        operation:'EQ'
                    });
                }
                if($scope.mfOrder.vesselCode){
                    searchColumns.push({
                        propertyName:'vesselCode',
                        columnName:'VESSEL_CODE',
                        dataType:'S',
                        value:$scope.mfOrder.vesselCode || "",
                        operation:'EQ'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'voyage',
                    columnName:'VOYAGE',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryFirstPortAreaNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_firstPortAreaName){
                    searchColumns.push({
                        propertyName:'facilityCode',
                        columnName:'FACILITY_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_firstPortAreaName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_firstPortAreaName){
                    searchColumns.push({
                        propertyName:'facilityNameCn',
                        columnName:'FACILITY_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_firstPortAreaName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_firstPortAreaName){
                    searchColumns.push({
                        propertyName:'facilityName',
                        columnName:'FACILITY_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_firstPortAreaName || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'facilityType',
                    columnName:'FACILITY_TYPE',
                    dataType:'S',
                    value:"MT",
                    operation:'LIKE'
                });
                if($scope.search_firstPortAreaName){
                    searchColumns.push({
                        propertyName:'memonicNo',
                        columnName:'MEMONIC_NO',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_firstPortAreaName || "",
                        operation:'LIKEE'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'facilityCode',
                    columnName:'FACILITY_CODE',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryShippingAgencyNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_shippingAgencyName){
                    searchColumns.push({
                        propertyName:'memonicNo',
                        columnName:'MEMONIC_NO',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_shippingAgencyName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_shippingAgencyName){
                    searchColumns.push({
                        propertyName:'custCode',
                        columnName:'CUST_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_shippingAgencyName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_shippingAgencyName){
                    searchColumns.push({
                        propertyName:'custAlias',
                        columnName:'CUST_ALIAS',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_shippingAgencyName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_shippingAgencyName){
                    searchColumns.push({
                        propertyName:'custNameCn',
                        columnName:'CUST_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_shippingAgencyName || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'custType',
                    columnName:'CUST_TYPE',
                    dataType:'S',
                    value:"SA",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_shippingAgencyName){
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_shippingAgencyName || "",
                        operation:'IN'
                    });
                }
                if($scope.$sessionAttrs&&$scope.$sessionAttrs.loginUser&&$scope.$sessionAttrs.loginUser.settleOffice) {
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        value:$scope.$sessionAttrs.loginUser.settleOffice || "",
                        operation:'EQ'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'memonicNo',
                    columnName:'MEMONIC_NO',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryRealVesselNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_realVesselName){
                    searchColumns.push({
                        propertyName:'vesselAliasCode',
                        columnName:'VESSEL_ALIAS_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_realVesselName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_realVesselName){
                    searchColumns.push({
                        propertyName:'vesselNameEn',
                        columnName:'VESSEL_NAME_EN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_realVesselName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_realVesselName){
                    searchColumns.push({
                        propertyName:'vesselNameCn',
                        columnName:'VESSEL_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_realVesselName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_realVesselName){
                    searchColumns.push({
                        propertyName:'vesselCode',
                        columnName:'VESSEL_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_realVesselName || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'vesselNameEn',
                    columnName:'VESSEL_NAME_EN',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                sortColumns.push({
                    propertyName:'vesselAliasCode',
                    columnName:'VESSEL_ALIAS_CODE',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };
            $scope.mfOrderMD_VOYAGE_PLANFieldMap = {};
            $scope.mfOrderMD_VOYAGE_PLANFieldMap.realEtd="etd";
            $scope.mfOrderMD_VOYAGE_PLANFieldMap.realVesselCode="vesselCode";
            $scope.mfOrderMD_VOYAGE_PLANFieldMap.realVesselName="vesselNameEn";

            $scope.queryRealVoyageMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_realVoyage){
                    searchColumns.push({
                        propertyName:'voyage',
                        columnName:'VOYAGE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_realVoyage || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_realVoyage){
                    searchColumns.push({
                        propertyName:'vesselNameEn',
                        columnName:'VESSEL_NAME_EN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_realVoyage || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_realVoyage){
                    searchColumns.push({
                        propertyName:'vesselNameCn',
                        columnName:'VESSEL_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_realVoyage || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_realVoyage){
                    searchColumns.push({
                        propertyName:'vesselCode',
                        columnName:'VESSEL_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_realVoyage || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_realVoyage){
                    searchColumns.push({
                        propertyName:'portCode',
                        columnName:'PORT_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_realVoyage || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_realVoyage){
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_realVoyage || "",
                        operation:'IN'
                    });
                }
                if($scope.$sessionAttrs&&$scope.$sessionAttrs.loginUser&&$scope.$sessionAttrs.loginUser.settleOffice) {
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        value:$scope.$sessionAttrs.loginUser.settleOffice || "",
                        operation:'EQ'
                    });
                }
                if($scope.mfOrder.portOfLoadingCode){
                    searchColumns.push({
                        propertyName:'portCode',
                        columnName:'PORT_CODE',
                        dataType:'S',
                        value:$scope.mfOrder.portOfLoadingCode || "",
                        operation:'EQ'
                    });
                }
                if($scope.mfOrder.realVesselCode){
                    searchColumns.push({
                        propertyName:'vesselCode',
                        columnName:'VESSEL_CODE',
                        dataType:'S',
                        value:$scope.mfOrder.realVesselCode || "",
                        operation:'EQ'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'voyage',
                    columnName:'VOYAGE',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryPortAreaNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_portAreaName){
                    searchColumns.push({
                        propertyName:'facilityCode',
                        columnName:'FACILITY_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_portAreaName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_portAreaName){
                    searchColumns.push({
                        propertyName:'facilityNameCn',
                        columnName:'FACILITY_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_portAreaName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_portAreaName){
                    searchColumns.push({
                        propertyName:'facilityName',
                        columnName:'FACILITY_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_portAreaName || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'facilityType',
                    columnName:'FACILITY_TYPE',
                    dataType:'S',
                    value:"MT",
                    operation:'LIKE'
                });
                if($scope.search_portAreaName){
                    searchColumns.push({
                        propertyName:'memonicNo',
                        columnName:'MEMONIC_NO',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_portAreaName || "",
                        operation:'LIKEE'
                    });
                }
                var sortColumns = [];
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryLargeShippingAgencyNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_largeShippingAgencyName){
                    searchColumns.push({
                        propertyName:'memonicNo',
                        columnName:'MEMONIC_NO',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_largeShippingAgencyName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_largeShippingAgencyName){
                    searchColumns.push({
                        propertyName:'custCode',
                        columnName:'CUST_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_largeShippingAgencyName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_largeShippingAgencyName){
                    searchColumns.push({
                        propertyName:'custAlias',
                        columnName:'CUST_ALIAS',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_largeShippingAgencyName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_largeShippingAgencyName){
                    searchColumns.push({
                        propertyName:'custNameCn',
                        columnName:'CUST_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_largeShippingAgencyName || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'custType',
                    columnName:'CUST_TYPE',
                    dataType:'S',
                    value:"SA",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_largeShippingAgencyName){
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_largeShippingAgencyName || "",
                        operation:'IN'
                    });
                }
                if($scope.$sessionAttrs&&$scope.$sessionAttrs.loginUser&&$scope.$sessionAttrs.loginUser.settleOffice) {
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        value:$scope.$sessionAttrs.loginUser.settleOffice || "",
                        operation:'EQ'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'memonicNo',
                    columnName:'MEMONIC_NO',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };
            //<!--GRID_TOOLBAR-->
            //TODO LayoutElementType.GRID_TOOLBAR

            /**
             * 查询
             */
            $scope.queryMfMultiVessel = function()
            {
                if($scope.MfMultiVesselQueryForm && $scope.MfMultiVesselQueryForm.$validator){
                    $scope.MfMultiVesselQueryForm.verify();
                }
                if($scope.MfMultiVesselQueryForm && !$scope.MfMultiVesselQueryForm.$valid){
                    return;
                }
                $scope._finishEditGridWrap($scope.mfMultiVesselGrid,$scope.mfMultiVessels);

                for(var i=0;i<$scope.mfMultiVessels.length;i++) {
                    var rowStatus=$scope.mfMultiVessels[i].rowStatus;
                    var flag=false;
                    if (rowStatus != 2) {
                        if(rowStatus==4||rowStatus==8){
                            flag=true;
                        } else {
                            if($scope.perMfMultiVessels[i].rowStatus){
                                $scope.perMfMultiVessels[i].rowStatus=16;
                            }
                            $scope.mfMultiVesselCopy= angular.copy($scope.mfMultiVessels[i]);

                            delete $scope.mfMultiVesselCopy.vesselNameMfMultiVesselGSelectedRow;
                            delete $scope.mfMultiVesselCopy.vesselNameMfMultiVesselSSelectedRow;
                            delete $scope.mfMultiVesselCopy.vesselNameMfMultiVesselFSelectedRow;
                            delete $scope.mfMultiVesselCopy.vesselNameMfMultiVesselQSelectedRow;
                            if(($scope.mfMultiVesselCopy.vesselName==undefined
                                    ||$scope.mfMultiVesselCopy.vesselName=='')
                                && ($scope.perMfMultiVessels[i].vesselName==null
                                    || $scope.perMfMultiVessels[i].vesselName=='')){
                                delete $scope.perMfMultiVessels[i].vesselName;
                                delete $scope.mfMultiVesselCopy.vesselName;
                            }
                            if(!$scope.perMfMultiVessels[i].vesselCode){
                                $scope.perMfMultiVessels[i].vesselCode="";
                            }
                            if(!$scope.mfMultiVesselCopy.vesselCode){
                                $scope.mfMultiVesselCopy.vesselCode="";
                            }
                            if($scope.perMfMultiVessels[i].etd){
                                var tempDate= $rootScope.calendar.dateParser($scope.perMfMultiVessels[i].etd);
                                var tempDateStr=new Date(tempDate).toString();
                                $scope.perMfMultiVessels[i].etd=tempDateStr;
                                //$scope.perMfMultiVessels[i].etd="";
                            }
                            if($scope.mfMultiVesselCopy.etd){
                                var tempDate= $scope.mfMultiVesselCopy.etd;
                                var tempDateStr=tempDate.toString();
                                $scope.mfMultiVesselCopy.etd=tempDateStr;
                                //$scope.mfMultiVesselCopy.etd="";
                            }
                            if(!angular.equals($scope.perMfMultiVessels[i],$scope.mfMultiVesselCopy)){
                                flag=true;
                            }
                        }

                        if(flag){
                            GillionMsg.confirm(null, "是否保存编辑的数据？", function (btn) {
                                if (btn) {
                                } else {
                                    $scope.mfMultiVesselGrid.$$currentSelKey = undefined;
                                    $scope.mfMultiVessels = [];
                                    $scope.queryMfMultiVessel();
                                }
                            });

                            return;
                        }
                    }
                }


                if($scope.mfMultiVesselGrid.formController){
                    var $validator = $scope.mfMultiVesselGrid.formController.$validator;
                    $validator.disable();
                    $validator.reset();
                }
                $scope._finishEditGridWrap($scope.mfMultiVesselGrid,$scope.mfMultiVessels);
                if($scope.mfMultiVesselGrid.formController){
                    $validator.enable();
                }
                $scope.mfMultiVesselGrid._reset();
                //generatorSubBoGridClear isNewConfig:Y
                $scope.getMfMultiVesselPages();

                $scope.mfMultiVesselGrid.$$currentSelKey = undefined;


            };
            $scope.newMfMultiVesselGridId = -9223372036;
            /**
             * 新增多程信息
             */
            $scope.addMfMultiVessel = function() {
                if($scope.mfMultiVesselGrid && $scope.mfMultiVesselGrid.formController && $scope.mfMultiVesselGrid.formController.$valid==false)
                    return ;

                $scope._finishEditGridWrap($scope.mfMultiVesselGrid,$scope.mfMultiVessels);

                //1  MfMultiVessel
                //外键mfOrderId 3
                if(!$scope.mfOrderId) $scope.mfOrderId = "";
                if($scope.mfOrderId=="" && $scope.search && $scope.search.mfOrderId)$scope.mfOrderId=$scope.search.mfOrderId;
                //父业务对象名称：MfOrderIT 子业务对象名称:MfMultiVessel
                if($scope.mfOrderIT && $scope.mfOrderIT.mfOrderId) $scope.mfOrderId = $scope.mfOrderIT.mfOrderId;
                //父业务对象名称：MfOrderBCE 子业务对象名称:MfMultiVessel
                if($scope.mfOrderBCE && $scope.mfOrderBCE.mfOrderId) $scope.mfOrderId = $scope.mfOrderBCE.mfOrderId;
                //父业务对象名称：MfOrder 子业务对象名称:MfMultiVessel
                if($scope.mfOrder && $scope.mfOrder.mfOrderId) $scope.mfOrderId = $scope.mfOrder.mfOrderId;
                var newRow = {
                    mfOrderId:$scope.mfOrderId, //boName:MfMultiVessel~currBo[tabPageBo|bo]:MfMultiVessel
                    mfMultiVesselId : $scope.newMfMultiVesselGridId++,
                    rowStatus : 4
                };

                if($scope.initGridNoDefaultValue)
                    $scope.initGridNoDefaultValue("add","MfMultiVessel",function(){
                    });

                if($scope.mfMultiVesselGrid.changeDataSourced)
                    $scope.mfMultiVesselGrid.changeDataSourced = false;
                $scope.mfMultiVessel = newRow;
                //$scope.mfMultiVessels.push(newRow);
                $scope.mfMultiVessels.unshift(newRow);
                $scope.mfMultiVesselGrid.$$added=true;
                flag = false;
                //generatorSubBoGridClear isNewConfig:Y
                if ($scope._pageState && $scope._pageState.setDataStateModify)
                    $scope._pageState.setDataStateModify();
            };
            /**
             * 批量删除多程信息
             */
            $scope.deleteMfMultiVessels = function(){
                var ids = Arrays.extract($scope.mfMultiVesselCheckedRows, 'mfMultiVesselId').join(',');
                if(ids.length == 0){
                    GillionMsg.alert("提示","请选择要删除的记录!");
                    return;
                }
                GillionMsg.confirm(null,'确认删除?',function(btn) {
                    if (btn) {
                        if($scope.mfMultiVesselGrid.formController){
                            var $validator = $scope.mfMultiVesselGrid.formController.$validator;
                            $validator.disable();
                            $validator.reset();
                        }
                        $scope._finishEditGridWrap($scope.mfMultiVesselGrid,$scope.mfMultiVessels);
                        if($scope.mfMultiVesselGrid.formController){
                            $validator.enable();
                        }
                        for(var i=0; i<$scope.mfMultiVessels.length; i++){
                            //TODO 选中行  $scope.mfMultiVesselGrid.scope.$checkedRows.length 笔数
                            for(var j=0; j<$scope.mfMultiVesselGrid.scope.$checkedRows.length; j++){
                                if($scope.mfMultiVessels[i].mfMultiVesselId == $scope.mfMultiVesselGrid.scope.$checkedRows[j].mfMultiVesselId){
                                    $scope.mfMultiVessels[i].rowStatus = 8;
                                    $scope.mfMultiVesselDeleteds.push($scope.mfMultiVessels[i]);
                                    $scope.mfMultiVessels.splice(i,1);
                                    $scope.mfMultiVesselGrid.scope.$checkedRows.splice(j,1);
                                    i--;
                                    j--;
                                    break;
                                }
                            }
                        }
                        //generatorSubBoGridClear isNewConfig:Y


                        if(!$scope.$root.$$phase){
                            $scope.$apply();
                        }

                        $http.post($config.ctx + '/mfMultiVessel/deletes',{ids : ids}).success(function(data){
                            if (data.success != undefined && data.success == true) {
                                $scope.mfMultiVesselDeleteds = [];
                                GillionMsg.alert("提示", data.msg);
                            }
                        });
                    }
                });
            };
            //<!--GRID-->
            //TODO LayoutElementType.GRID
            $scope.vesselNameMfMultiVesselGchangeRow = function(list,item){
                angular.element(list.element).scope().row["vesselCode"] = item["vesselCode"];
            };
            $scope.$watch('mfMultiVessel.vesselName', function(newVal){
                if(!newVal) {
                    $scope.mfMultiVessel.vesselCode = null;
                }
            });




            $scope.mfMultiVessel = {};
            $scope.mfMultiVessels = [];
            $scope.perMfMultiVessels = [];
            $scope.mfMultiVesselDeleteds = [];
            $scope.$on('MfMultiVesselSource',function(context,dataSource){
                if(dataSource.records != undefined){
                    $scope.mfMultiVessels = dataSource.records ;
                    $scope.perMfMultiVessels = angular.copy(dataSource.records) ;
                }
                //$scope.tableMfMultiVesselEditStatus=false;
            });
            //MfMultiVesselSource
            $dataSourceManager.getDataSource('MfMultiVesselSource').then(function(dataSource){
                $scope.mfMultiVesselDataSource = dataSource;
                $scope.getMfMultiVesselPages = function () {
                    var grid = $scope.mfMultiVesselGrid;
                    if(grid) grid._reset();
                    dataSource.doRequestData($scope.queryMfMultiVesselParams);
                };
            });

            $scope.$watchCollection('mfMultiVessels', function(){
                if($scope.mfMultiVesselDataSource){
                    $scope.mfMultiVesselDataSource.records = $scope.mfMultiVessels;

                    var checkRowTempIndex =[];
                    if($scope.mfMultiVesselGrid.scope.checkedRows && $scope.mfMultiVesselGrid.scope.checkedRows.length >0){
                        angular.forEach($scope.mfMultiVesselGrid.scope.checkedRows,function(row,index){
                            var rowIndexTemp = _.findIndex($scope.mfMultiVesselDataSource.records,row);
                            checkRowTempIndex.push(rowIndexTemp);
                        });
                    }

                    $dataSourceManager.$rootScope.$broadcast("MfMultiVesselSource", $scope.mfMultiVesselDataSource);

                    if(checkRowTempIndex && checkRowTempIndex.length > 0){
                        angular.forEach(checkRowTempIndex,function(dataIndex,index){
                            var row = $scope.mfMultiVesselDataSource.records[dataIndex];
                            var checked = Arrays.exists($scope.mfMultiVesselGrid.scope.checkedRows, row);
                            if (!checked) {
                                $scope.mfMultiVesselGrid.scope.checkedRows.push(row);
                            }
                        });
                        checkRowIndex=[];
                    }
                }
            });

            $scope.customsClearanceChange=function(){
                var customsClearance = $scope.mfOrder.isCustomsClearance;
                if(customsClearance=='N'){
                    $scope.mfOrder.customsClearanceMode='CS';
                }else  if(customsClearance=='Y'){
                    $scope.mfOrder.customsClearanceMode='NC';
                }
            }
            $scope.customsClearanceModeChange=function(){
                if($scope.mfOrder.customsClearanceMode=='CS'){
                    $scope.mfOrder.isCustomsClearance ='N';
                }else if($scope.mfOrder.customsClearanceMode!='CS'){
                    $scope.mfOrder.isCustomsClearance ='Y';
                }
            }
            $scope.beforeSelectedMfMultiVessel = function($event, record ,grid){
                grid.$$currentSelKey = record.mfMultiVesselId;
                var $target = angular.element($event.target);
                var $row = $target.closest('tr');
                var innerRowIndex = $row[0].rowIndex;
                $scope.mfMultiVesselCurRow = $row.scope();

                if($scope.mfMultiVesselGrid && $scope.mfMultiVesselGrid.formController && $scope.mfMultiVesselGrid.formController.$valid==false)
                    return ;
                if(record.rowStatus && record.rowStatus == 2 ){
                    //record.rowStatus = 16;
                }
                $scope.mfMultiVessel = record;

                //generatorSubBoGridClear isNewConfig:Y


                var rowIndex = innerRowIndex || Arrays.indexOf($scope.mfMultiVessels, $scope.mfMultiVessel);
                $scope.mfMultiVessel.$$rowIndex = rowIndex ;

                var editIndex = grid.__editingRowIndex;
                if(editIndex == innerRowIndex)
                    return true;
                $scope._finishEditGridWrap($scope.mfMultiVesselGrid,$scope.mfMultiVessels);

                if($target[0].parentNode.childNodes.length === 1 || editIndex !== innerRowIndex){
                    $scope.mfMultiVesselPrimaryKey($target, record, grid);
                }
                grid.startEdit(innerRowIndex);

                //table edit cell focus()
                var $editor = $target.closest('td').find('[data-role="editor"]');
                $input = $editor.find(':input');
                var disabled = false;
                if ($input.prop('disabled') || $input.prop('readonly')) {
                    disabled = true;
                }
                if(!!($editor.length) && !disabled){
                    if($input.length){
                        $input[0].focus();
                        setTimeout(function() {
                            $input[0].select();
                        }, 10);
                    }
                }else{
                    $input = $row.find('[data-role="editor"]').first().find(':input');
                    if($input.length){
                        $input[0].focus();
                        setTimeout(function() {
                            $input[0].select();
                        }, 10);
                    }
                }
            };

            $scope.mfMultiVesselPrimaryKey =  function($target, row, grid){
                var  cellTmplScope = angular.extend($scope.$new(), {
                    row: row
                });
            }



            $scope.queryMfMultiVesselParams = function()
            {
                //外键mfOrderId 3
                if(!$scope.mfOrderId) $scope.mfOrderId = "";
                if($scope.mfOrderId=="" && $scope.search && $scope.search.mfOrderId)$scope.mfOrderId=$scope.search.mfOrderId;
                //父业务对象名称：MfOrderIT 子业务对象名称:MfMultiVessel
                if($scope.mfOrderIT && $scope.mfOrderIT.mfOrderId) $scope.mfOrderId = $scope.mfOrderIT.mfOrderId;
                //父业务对象名称：MfOrderBCE 子业务对象名称:MfMultiVessel
                if($scope.mfOrderBCE && $scope.mfOrderBCE.mfOrderId) $scope.mfOrderId = $scope.mfOrderBCE.mfOrderId;
                //父业务对象名称：MfOrder 子业务对象名称:MfMultiVessel
                if($scope.mfOrder && $scope.mfOrder.mfOrderId) $scope.mfOrderId = $scope.mfOrder.mfOrderId;

                var searchColumns = [];
                //C
                // key:mfOrderId
                // subBoPropertyName:mfOrderId subBoPropertyName{r}:null subColumnName{r}:MF_ORDER_ID
                // propertyName:mfOrderId
                // propertyName{r}:mfOrderId   columnName{r}:MF_ORDER_ID
                // linkPropertyName{r}: linkColumnName{r}:

                searchColumns.push({
                    propertyName:'mfOrderId',
                    columnName:'MF_ORDER_ID',
                    dataType:'N',
                    value:$scope.mfOrderId || "",
                    operation:'EQ'
                });




                return {"searchColumns":searchColumns,"queryResultType":"list","sum":false};
            }
            //initMfMultiVesselGrid
            $scope.initMfMultiVesselGrid = function(grid){
                $scope.mfMultiVesselGrid = grid;
                $scope.mfMultiVesselGrid.$$added=false;
                if($scope._pageState) $scope._pageState.resetDataState();
            };

            $scope.loadSuccessMfMultiVesselGrid = function(grid,source){
                if($scope.mfMultiVesselGrid.$$added==true){
                    if(source &&  source.length>0){
                        $scope._finishEditGridWrap($scope.mfMultiVesselGrid,$scope.mfMultiVessels);
                        //var $$index = (source && source.length>0) ? source.length-1 : 0;
                        //grid.startEdit($$index);
                        $timeout(function () {
                            $scope.mfMultiVesselSelectedRow = source[0];
                            grid.startEdit(0);
                        });

                        var $element = grid.element;
                        var $tr = $element.find('.grid-body').find('tr').eq(0);
                        var firstInput = $tr.find('[data-role=editor]').find(':input')[0];
                        firstInput && firstInput.focus();

                        $scope.mfMultiVesselPrimaryKey(angular.element(grid.tbody.rows[0].cells[0]), source[0], grid);
                        //grid.formController.verify();
                        if(grid.formController && grid.formController.verify)
                            $timeout(grid.formController.verify,100);
                        $scope.mfMultiVesselGrid.$$added=false;
                        //if($scope._pageState) $scope._pageState.resetDataState();

                    }
                } else {
                    var innerRowIndex = 0;
                    if(grid.tbody.rows[0]){
                        var record = source[0];
                        var $target = angular.element(grid.tbody.rows[0].cells[0]);
                        var $row = $target.closest('tr');
                        if(record.rowStatus && record.rowStatus == 2){
                            //record.rowStatus = 16;
                        }
                        $scope.mfMultiVessel = record;

                        //当查询成功或手动点下一页时需要把校验初使化
                        if(grid.formController){
                            var $validator = grid.formController.$validator;
                            $validator.disable();
                            $validator.reset();
                        }

                        //generatorSubBoGridClear isNewConfig:Y


                        var rowIndex = innerRowIndex || Arrays.indexOf($scope.mfMultiVessels,$scope.mfMultiVessel);
                        $scope.mfMultiVessel.$$rowIndex = rowIndex ;

                        var editIndex = grid.__editingRowIndex;
                        if(editIndex == innerRowIndex)
                            return true;
                        $scope._finishEditGridWrap($scope.mfMultiVesselGrid,$scope.mfMultiVessels);

                        if(grid.formController){
                            grid.formController.$validator.enable();
                        }
                        if($target[0].parentNode.childNodes.length === 1 || editIndex !== innerRowIndex){
                            $scope.mfMultiVesselPrimaryKey($target, record, grid);
                        }
                        $scope.$$isAddEvent = $scope.mfMultiVesselGrid.$$added;
                        $timeout(function () {
                            //$scope.mfMultiVesselSelectedRow = record;
                            //grid.startEdit(innerRowIndex);
                            var $$currentSelKey = grid.$$currentSelKey;
                            var $$hasSelectPrimaryKey = false;
                            if(grid.$$currentSelKey && !$scope.$$isAddEvent){
                                angular.forEach(source,function(data,index){
                                    if($$currentSelKey == data.mfMultiVesselId){
                                        $scope.mfMultiVesselSelectedRow = data;
                                        $$hasSelectPrimaryKey = true;
                                    }
                                });
                                if(!$$hasSelectPrimaryKey){
                                    $scope.mfMultiVesselSelectedRow = record;
                                }
                            }
                            else{
                                $scope.mfMultiVesselSelectedRow = record;
                            }
                        });

                        angular.element(grid.tbody.rows[0]).attr("active",true);
                    }
                }
            };


            $scope.queryVesselNameMfMultiVesselGParams = function()
            {
                var searchColumns = [];
                if($scope.search_MfMultiVessel_vesselName){
                    searchColumns.push({
                        propertyName:'vesselAliasCode',
                        columnName:'VESSEL_ALIAS_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_MfMultiVessel_vesselName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_MfMultiVessel_vesselName){
                    searchColumns.push({
                        propertyName:'vesselNameEn',
                        columnName:'VESSEL_NAME_EN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_MfMultiVessel_vesselName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_MfMultiVessel_vesselName){
                    searchColumns.push({
                        propertyName:'vesselNameCn',
                        columnName:'VESSEL_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_MfMultiVessel_vesselName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_MfMultiVessel_vesselName){
                    searchColumns.push({
                        propertyName:'vesselCode',
                        columnName:'VESSEL_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_MfMultiVessel_vesselName || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'vesselNameEn',
                    columnName:'VESSEL_NAME_EN',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                sortColumns.push({
                    propertyName:'vesselAliasCode',
                    columnName:'VESSEL_ALIAS_CODE',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };
            $scope.mfOrderMD_CHARGEUNIT_PACKAGEFieldMap = {};
            $scope.mfOrderMD_CHARGEUNIT_PACKAGEFieldMap.packageDescrtption="enName";

            $scope.queryPackageTypeNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_packageTypeName){
                    searchColumns.push({
                        propertyName:'enName',
                        columnName:'EN_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_packageTypeName || "",
                        operation:'LIKEE'
                    });
                }

                searchColumns.push({
                    propertyName:'isPackageType',
                    columnName:'IS_PACKAGE_TYPE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'enName',
                    columnName:'EN_NAME',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryCountryNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_countryName){
                    searchColumns.push({
                        propertyName:'countryCode',
                        columnName:'COUNTRY_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_countryName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_countryName){
                    searchColumns.push({
                        propertyName:'countryName',
                        columnName:'COUNTRY_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_countryName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_countryName){
                    searchColumns.push({
                        propertyName:'countryNameCn',
                        columnName:'COUNTRY_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_countryName || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'countryCode',
                    columnName:'COUNTRY_CODE',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.querySubBusinessTypeMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_subBusinessType){
                    searchColumns.push({
                        propertyName:'subBusinessCode',
                        columnName:'SUB_BUSINESS_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_subBusinessType || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_subBusinessType){
                    searchColumns.push({
                        propertyName:'subBusinessName',
                        columnName:'SUB_BUSINESS_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_subBusinessType || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_subBusinessType){
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_subBusinessType || "",
                        operation:'IN'
                    });
                }
                if($scope.$sessionAttrs&&$scope.$sessionAttrs.loginUser&&$scope.$sessionAttrs.loginUser.settleOffice) {
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        value:$scope.$sessionAttrs.loginUser.settleOffice || "",
                        operation:'EQ'
                    });
                }
                var sortColumns = [];
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryPaymentPlaceMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_paymentPlace){
                    searchColumns.push({
                        propertyName:'portName',
                        columnName:'PORT_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_paymentPlace || "",
                        operation:'LIKEE'
                    });
                }

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_paymentPlace){
                    searchColumns.push({
                        propertyName:'port5code',
                        columnName:'PORT_5CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_paymentPlace || "",
                        operation:'LIKEE'
                    });
                }

                searchColumns.push({
                    propertyName:'portType',
                    columnName:'PORT_TYPE',
                    dataType:'S',
                    value:"OP",
                    operation:'LIKEIC'
                });
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'portName',
                    columnName:'PORT_NAME',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryPlaceOfIssueMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_placeOfIssue){
                    searchColumns.push({
                        propertyName:'portName',
                        columnName:'PORT_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_placeOfIssue || "",
                        operation:'LIKEE'
                    });
                }

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_placeOfIssue){
                    searchColumns.push({
                        propertyName:'port5code',
                        columnName:'PORT_5CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_placeOfIssue || "",
                        operation:'LIKEE'
                    });
                }

                searchColumns.push({
                    propertyName:'portType',
                    columnName:'PORT_TYPE',
                    dataType:'S',
                    value:"OP",
                    operation:'LIKEIC'
                });
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'portName',
                    columnName:'PORT_NAME',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryWarehouseNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_warehouseName){
                    searchColumns.push({
                        propertyName:'memonicNo',
                        columnName:'MEMONIC_NO',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_warehouseName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_warehouseName){
                    searchColumns.push({
                        propertyName:'custCode',
                        columnName:'CUST_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_warehouseName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_warehouseName){
                    searchColumns.push({
                        propertyName:'custAlias',
                        columnName:'CUST_ALIAS',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_warehouseName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_warehouseName){
                    searchColumns.push({
                        propertyName:'custNameCn',
                        columnName:'CUST_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_warehouseName || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'custType',
                    columnName:'CUST_TYPE',
                    dataType:'S',
                    value:"WH",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_warehouseName){
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_warehouseName || "",
                        operation:'IN'
                    });
                }
                if($scope.$sessionAttrs&&$scope.$sessionAttrs.loginUser&&$scope.$sessionAttrs.loginUser.settleOffice) {
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        value:$scope.$sessionAttrs.loginUser.settleOffice || "",
                        operation:'EQ'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'memonicNo',
                    columnName:'MEMONIC_NO',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryCustomsPortMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_customsPort){
                    searchColumns.push({
                        propertyName:'displayValueCn',
                        columnName:'DISPLAY_VALUE_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_customsPort || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_customsPort){
                    searchColumns.push({
                        propertyName:'codeValue',
                        columnName:'CODE_VALUE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_customsPort || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'codeType',
                    columnName:'CODE_TYPE',
                    dataType:'S',
                    value:"MD_CODE_CUSTOMS_PORT",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });
                var sortColumns = [];
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryCustomsClearanceZoneMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_customsClearanceZone){
                    searchColumns.push({
                        propertyName:'customsCode',
                        columnName:'CUSTOMS_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_customsClearanceZone || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_customsClearanceZone){
                    searchColumns.push({
                        propertyName:'customsName',
                        columnName:'CUSTOMS_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_customsClearanceZone || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_customsClearanceZone){
                    searchColumns.push({
                        propertyName:'subordinateCustoms',
                        columnName:'SUBORDINATE_CUSTOMS',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_customsClearanceZone || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'customsName',
                    columnName:'CUSTOMS_NAME',
                    sortDirection:'asc',
                    sortOrder:'1'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryProjectNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_projectName){
                    searchColumns.push({
                        propertyName:'projectCode',
                        columnName:'PROJECT_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_projectName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_projectName){
                    searchColumns.push({
                        propertyName:'projectName',
                        columnName:'PROJECT_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_projectName || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'active',
                    columnName:'ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });
                if($scope.search_projectName){
                    searchColumns.push({
                        propertyName:'projectManage',
                        columnName:'PROJECT_MANAGER',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_projectName || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'isDeleted',
                    columnName:'IS_DELETED',
                    dataType:'S',
                    value:"N",
                    operation:'EQ'
                });
                if($scope.search_projectName){
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_projectName || "",
                        operation:'IN'
                    });
                }
                if($scope.$sessionAttrs&&$scope.$sessionAttrs.loginUser&&$scope.$sessionAttrs.loginUser.settleOffice) {
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        value:$scope.$sessionAttrs.loginUser.settleOffice || "",
                        operation:'EQ'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'projectCode',
                    columnName:'PROJECT_CODE',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryCsDepartmentNameMfOrderParams = function()
            {
                var searchColumns = [];
                if ($scope.mfOrder.consignorCode) {
                    searchColumns.push({
                        propertyName:'custCode',
                        columnName:'CUST_CODE',
                        dataType:'S',
                        type:'V',
                        value:$scope.mfOrder.consignorCode,
                        operation:'EQ'
                    });
                }
                if($scope.search_csDepartmentName){
                    searchColumns.push({
                        propertyName:'departmentMemonicCode',
                        columnName:'DEPARTMENT_MEMONIC_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_csDepartmentName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_csDepartmentName){
                    searchColumns.push({
                        propertyName:'departmentName',
                        columnName:'DEPARTMENT_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_csDepartmentName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_csDepartmentName){
                    searchColumns.push({
                        propertyName:'departmentCode',
                        columnName:'DEPARTMENT_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_csDepartmentName || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_csDepartmentName){
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_csDepartmentName || "",
                        operation:'IN'
                    });
                }
                if($scope.$sessionAttrs&&$scope.$sessionAttrs.loginUser&&$scope.$sessionAttrs.loginUser.settleAllOffice) {
                    searchColumns.push({
                        propertyName:'settleOffice',
                        columnName:'SETTLE_OFFICE',
                        dataType:'S',
                        listValue:$scope.$sessionAttrs.loginUser.settleAllOffice,
                        operation:'IN'
                    });
                }
                var sortColumns = [];
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };
            $scope.mfOrderSYS_USERFieldMap = {};
            $scope.mfOrderSYS_USERFieldMap.canvassionDepartmentCode="officeCode";
            $scope.mfOrderSYS_USERFieldMap.canvassionDepartment="officeName";

            $scope.querySalesNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_salesName){
                    searchColumns.push({
                        propertyName:'userName',
                        columnName:'USER_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_salesName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_salesName){
                    searchColumns.push({
                        propertyName:'userNameCn',
                        columnName:'USER_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_salesName || "",
                        operation:'LIKEE'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'userNameCn',
                    columnName:'USER_NAME_CN',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                sortColumns.push({
                    propertyName:'userName',
                    columnName:'USER_NAME',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryCanvassionDepartmentMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_canvassionDepartment){
                    searchColumns.push({
                        propertyName:'officeCode',
                        columnName:'OFFICE_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_canvassionDepartment || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_canvassionDepartment){
                    searchColumns.push({
                        propertyName:'officeName',
                        columnName:'OFFICE_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_canvassionDepartment || "",
                        operation:'LIKEIC'
                    });
                }
                if($scope.search_canvassionDepartment){
                    searchColumns.push({
                        propertyName:'settleOfficeName',
                        columnName:'SETTLE_OFFICE_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_canvassionDepartment || "",
                        operation:'LIKEIC'
                    });
                }

                searchColumns.push({
                    propertyName:'isActive',
                    columnName:'IS_ACTIVE',
                    dataType:'S',
                    value:"Y",
                    operation:'EQ'
                });
                var sortColumns = [];
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryCsNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_csName){
                    searchColumns.push({
                        propertyName:'userName',
                        columnName:'USER_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_csName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_csName){
                    searchColumns.push({
                        propertyName:'userNameCn',
                        columnName:'USER_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_csName || "",
                        operation:'LIKEE'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'userNameCn',
                    columnName:'USER_NAME_CN',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                sortColumns.push({
                    propertyName:'userName',
                    columnName:'USER_NAME',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryOpNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_opName){
                    searchColumns.push({
                        propertyName:'userName',
                        columnName:'USER_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_opName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_opName){
                    searchColumns.push({
                        propertyName:'userNameCn',
                        columnName:'USER_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_opName || "",
                        operation:'LIKEE'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'userNameCn',
                    columnName:'USER_NAME_CN',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                sortColumns.push({
                    propertyName:'userName',
                    columnName:'USER_NAME',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryDocNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_docName){
                    searchColumns.push({
                        propertyName:'userName',
                        columnName:'USER_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_docName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_docName){
                    searchColumns.push({
                        propertyName:'userNameCn',
                        columnName:'USER_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_docName || "",
                        operation:'LIKEE'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'userNameCn',
                    columnName:'USER_NAME_CN',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                sortColumns.push({
                    propertyName:'userName',
                    columnName:'USER_NAME',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryDispatcherNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_dispatcherName){
                    searchColumns.push({
                        propertyName:'userName',
                        columnName:'USER_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_dispatcherName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_dispatcherName){
                    searchColumns.push({
                        propertyName:'userNameCn',
                        columnName:'USER_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_dispatcherName || "",
                        operation:'LIKEE'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'userNameCn',
                    columnName:'USER_NAME_CN',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                sortColumns.push({
                    propertyName:'userName',
                    columnName:'USER_NAME',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryInspectionerNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_inspectionerName){
                    searchColumns.push({
                        propertyName:'userName',
                        columnName:'USER_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_inspectionerName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_inspectionerName){
                    searchColumns.push({
                        propertyName:'userNameCn',
                        columnName:'USER_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_inspectionerName || "",
                        operation:'LIKEE'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'userNameCn',
                    columnName:'USER_NAME_CN',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                sortColumns.push({
                    propertyName:'userName',
                    columnName:'USER_NAME',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryCustomsDeclarationNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_customsDeclarationName){
                    searchColumns.push({
                        propertyName:'userName',
                        columnName:'USER_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_customsDeclarationName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_customsDeclarationName){
                    searchColumns.push({
                        propertyName:'userNameCn',
                        columnName:'USER_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_customsDeclarationName || "",
                        operation:'LIKEE'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'userNameCn',
                    columnName:'USER_NAME_CN',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                sortColumns.push({
                    propertyName:'userName',
                    columnName:'USER_NAME',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryInspectionSceneNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_inspectionSceneName){
                    searchColumns.push({
                        propertyName:'userName',
                        columnName:'USER_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_inspectionSceneName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_inspectionSceneName){
                    searchColumns.push({
                        propertyName:'userNameCn',
                        columnName:'USER_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_inspectionSceneName || "",
                        operation:'LIKEE'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'userNameCn',
                    columnName:'USER_NAME_CN',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                sortColumns.push({
                    propertyName:'userName',
                    columnName:'USER_NAME',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };

            $scope.queryCustomsClearanceSceneNameMfOrderParams = function()
            {
                var searchColumns = [];
                if($scope.search_customsClearanceSceneName){
                    searchColumns.push({
                        propertyName:'userName',
                        columnName:'USER_NAME',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_customsClearanceSceneName || "",
                        operation:'LIKEE'
                    });
                }
                if($scope.search_customsClearanceSceneName){
                    searchColumns.push({
                        propertyName:'userNameCn',
                        columnName:'USER_NAME_CN',
                        dataType:'S',
                        junction:'or',
                        value:$scope.search_customsClearanceSceneName || "",
                        operation:'LIKEE'
                    });
                }
                var sortColumns = [];
                sortColumns.push({
                    propertyName:'userNameCn',
                    columnName:'USER_NAME_CN',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                sortColumns.push({
                    propertyName:'userName',
                    columnName:'USER_NAME',
                    sortDirection:'asc',
                    sortOrder:'0'
                });
                return {"searchColumns":searchColumns,"sortColumns":sortColumns,"queryResultType":"page","sum":false};
            };
            //<!--GRID_TOOLBAR-->
            //TODO LayoutElementType.GRID_TOOLBAR


            /**
             * 客户操作要求维护海运出口操作要求 grid
             */
            $scope.customerRequireServiceMfOperationRequire = function(){
                var url = "/html/fms/cs/operationRequireManage.html";
                if (!$scope.mfOrder.consignorCode || $scope.mfOrder.consignorCode == "" || $scope.mfOrder.consignorCode == null) {
                    GillionMsg.alert("提示", "请先维护委托人！");
                    return;
                }
                var mfOrderId = $scope.mfOrder.mfOrderId;
                url = url + "?mfOrderId=" + mfOrderId;
                if (!mfOrderId) {
                    GillionMsg.alert("提示", "请先保存海运出口制作！");
                    return;
                }
                var openType = "2";
                if (url.indexOf("?")>=0){
                    url = url + "&openType=" + openType;
                } else {
                    url = url + "?openType=" + openType;
                }
                var type = "consignorCode";
                url = url + "&type="+type;
                var options = {
                    title : '客户操作要求维护' ,
                    closable : true ,
                    modal : true ,
                    url : url ,
                    width:900,
                    height:500
                };
                var indexScope = top.angular.element("body").scope();
                indexScope.showUrl(options);
            };


            /**
             * 船公司操作要求维护海运出口操作要求 grid
             */
            $scope.shipownerRequireServiceMfOperationRequire = function(){
                var url = "/html/fms/cs/operationRequireManage.html";
                if (!$scope.mfOrder.secondCarrierCode || $scope.mfOrder.secondCarrierCode == "" || $scope.mfOrder.secondCarrierCode == null) {
                    GillionMsg.alert("提示", "请先维护船公司！");
                    return;
                }
                var mfOrderId = $scope.mfOrder.mfOrderId;
                url = url + "?mfOrderId=" + mfOrderId;
                if (!mfOrderId) {
                    GillionMsg.alert("提示", "请先保存海运出口制作！");
                    return;
                }
                var openType = "2";
                if (url.indexOf("?")>=0){
                    url = url + "&openType=" + openType;
                } else {
                    url = url + "?openType=" + openType;
                }
                var type = "secondCarrierCode";
                url = url + "&type="+type;
                var options = {
                    title : '船公司操作要求维护' ,
                    closable : true ,
                    modal : true ,
                    url : url ,
                    width:900,
                    height:500
                };
                var indexScope = top.angular.element("body").scope();
                indexScope.showUrl(options);
            };
            //2
            //自定义JS方法  boName:MfOrder layoutBoName:MfOperationRequire
            //自定义JS方法  boName:MfOrder layoutBoName:MfMultiVessel
            //自定义JS方法  boName:MfOrder layoutBoName:MfCtnRequest

            //TODO 自定义js函数
            /**
             * 新增
             */
            $scope.addMfCtnRequest = function() {
                if($scope.mfCtnRequestGrid && $scope.mfCtnRequestGrid.formController && $scope.mfCtnRequestGrid.formController.$valid==false){
                    console.log($scope.mfOrder.memonicNo);
                    return ;}

                //1  MfCtnRequest
                //外键mfOrderId 3
                if(!$scope.mfOrderId) $scope.mfOrderId = "";
                $scope.secondCarrierName="";
                $scope.goOrderId="";
                $scope.secondCarrierCode="";
                $scope.memonicNo="";

                //父业务对象名称：MfOrderIT 子业务对象名称:MfCtnRequest
                if($scope.mfOrderIT ){ $scope.mfOrderId = $scope.mfOrderIT.mfOrderId;
                    $scope.secondCarrierName=$scope.mfOrderIT.secondCarrierName;
                    $scope.goOrderId=$scope.mfOrderIT.goOrderId;
                    $scope.secondCarrierCode=$scope.mfOrderIT.secondCarrierCode;
                    $scope.memonicNo=$scope.mfOrderIT.memonicNo;}
                //父业务对象名称：MfOrderOI 子业务对象名称:MfCtnRequest
                if($scope.mfOrderOI) {$scope.mfOrderId = $scope.mfOrderOI.mfOrderId;
                    $scope.secondCarrierName=$scope.mfOrderOI.secondCarrierName;
                    $scope.goOrderId=$scope.mfOrderOI.goOrderId;
                    $scope.secondCarrierCode=$scope.mfOrderOI.secondCarrierCode;
                    $scope.memonicNo=$scope.mfOrderOI.memonicNo;}
                //父业务对象名称：MfOrder 子业务对象名称:MfCtnRequest
                if($scope.mfOrder){ $scope.mfOrderId = $scope.mfOrder.mfOrderId;
                    $scope.secondCarrierName=$scope.mfOrder.secondCarrierName;
                    $scope.goOrderId=$scope.mfOrder.goOrderId;
                    $scope.secondCarrierCode=$scope.mfOrder.secondCarrierCode;
                    $scope.memonicNo=$scope.mfOrder.memonicNo;}


                var newRow = {
                    mfOrderId:$scope.mfOrderId, //boName:MfCtnRequest~currBo[tabPageBo|bo]:MfCtnRequest
                    goOrderId: $scope.goOrderId,
                    memonicNo: $scope.memonicNo ,

                    ctnCompanyName: $scope.secondCarrierName,

                    ctnCompanyCode: $scope.secondCarrierCode,

                    fclLclEmpty:'F',
                    isSoc:'N',
                    mfCtnRequestId : $scope.newMfCtnRequestGridId++,
                    rowStatus : 4
                };
                if($scope.mfOrder && $scope.mfOrder.loadKind!='FCL'){
                    newRow.quantityOfCtn=0;
                }
                if($scope.mfOrderOI && $scope.mfOrderOI.loadKind!='FCL'){
                    newRow.quantityOfCtn=0;
                }
                if($scope.mfCtnRequestGrid.changeDataSourced)
                    $scope.mfCtnRequestGrid.changeDataSourced = false;
                $scope.mfCtnRequest = newRow;
                //$scope.mfCtnRequests.push(newRow);
                $scope.mfCtnRequests.unshift(newRow);
                $scope.mfCtnRequestGrid.$$added=true;
                flag = false;
                //generatorSubBoGridClear isNewConfig:Y
                if ($scope._pageState && $scope._pageState.setDataStateModify)
                    $scope._pageState.setDataStateModify();
            };

            //TODO 自定义js函数
            /**
             * SOC
             */
            $scope.changeIsSoc = function(row){
                if(row.isSoc=='Y'){
                    row.ctnCompanyName = '货主自备箱';
                    row.ctnCompanyCode = 'CS07386';
                    row.memonicNo='SOC';
                    if(row.rowStatus != '4'){
                        row.rowStatus = '16';
                    }
                }
            }
            //自定义JS方法  boName:MfOrder layoutBoName:MfOrder


            //TODO 自定义js函数
            /**
             * 单证制作
             */
            $scope.documentOperation = function(){
                $http.post($config.ctx + '/mfDocumentCopy/documentOperation', $scope.mfOrder.mfOrderId).success(function (data) {
                    if (data.success != undefined && data.success == true){
                        if(data.mfDocumentId==""){
                            GillionMsg.confirm(null,'还没点击可出提单，是否继续!',function(btn) {
                                if (btn) {
                                    var tip = layer.load(0, $config.shadeConfig);
                                    $http.post($config.ctx + '/mfDocumentCopy/saveDocumentOperation', $scope.mfOrder.mfOrderId).success(function (datas) {
                                        layer.close(tip);
                                        if (data.success != undefined && data.success == true){
                                            var url = "/html/fms/mf/mfDocOrderEdit.html";
                                            url = url + "?mfOrderId=" + $scope.mfOrder.mfOrderId+"&mfDocumentId="+datas.mfDocumentId+"&billMode="+datas.billMode;
                                            var openType = "1";
                                            if (url.indexOf("?")>=0){
                                                url = url + "&openType=" + openType;
                                            } else {
                                                url = url + "?openType=" + openType;
                                            }
                                            var resource = {
                                                sysResourceId : 'mfDocumentOrder_edit',
                                                urlTitle:'出口单证制作',
                                                url:url
                                            };
                                            var indexScope = top.angular.element("body").scope();
                                            indexScope.addTab(resource);
                                            indexScope.$apply();
                                        }
                                    });
                                }
                            });
                        }else{
                            var url = "/html/fms/mf/mfDocOrderEdit.html";
                            url = url + "?mfOrderId=" + $scope.mfOrder.mfOrderId+"&mfDocumentId="+data.mfDocumentId+"&billMode="+data.billMode;
                            var openType = "1";
                            if (url.indexOf("?")>=0){
                                url = url + "&openType=" + openType;
                            } else {
                                url = url + "?openType=" + openType;
                            }
                            var resource = {
                                sysResourceId : 'mfDocumentOrder_edit',
                                urlTitle:'出口单证制作',
                                url:url
                            };
                            var indexScope = top.angular.element("body").scope();
                            indexScope.addTab(resource);
                            indexScope.$apply();
                        }
                    }
                });
            };

            //TODO 自定义js函数
            /**
             * 货物监听
             */
            $scope.$watch('mfOrder.countryCode', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].countryCode != $scope.mfOrder.countryCode) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].countryCode = $scope.mfOrder.countryCode;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.isSupervision', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].isSupervision != $scope.mfOrder.isSupervision) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].isSupervision = $scope.mfOrder.isSupervision;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.isOceanPollution', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].isOceanPollution != $scope.mfOrder.isOceanPollution) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].isOceanPollution = $scope.mfOrder.isOceanPollution;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.isDeclare', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].isDeclare != $scope.mfOrder.isDeclare) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].isDeclare = $scope.mfOrder.isDeclare;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.cargoDescriptionCn', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].cargoDescriptionCn != $scope.mfOrder.cargoDescriptionCn) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].cargoDescriptionCn = $scope.mfOrder.cargoDescriptionCn;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.packageDescrtption', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].packageDescrtption != $scope.mfOrder.packageDescrtption) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].packageDescrtption = $scope.mfOrder.packageDescrtption;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.isHazard', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].isHazard != $scope.mfOrder.isHazard) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].isHazard = $scope.mfOrder.isHazard;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.hazardSubClass', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].hazardSubClass != $scope.mfOrder.hazardSubClass) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].hazardSubClass = $scope.mfOrder.hazardSubClass;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.urgentContractTel', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].urgentContractTel != $scope.mfOrder.urgentContractTel) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].urgentContractTel = $scope.mfOrder.urgentContractTel;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.urgentContractEmail', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].urgentContractEmail != $scope.mfOrder.urgentContractEmail) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].urgentContractEmail = $scope.mfOrder.urgentContractEmail;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.hazardPackage', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].hazardPackage != $scope.mfOrder.hazardPackage) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].hazardPackage = $scope.mfOrder.hazardPackage;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });

            $scope.$watch('mfOrder.cargoDescriptionEn', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].cargoDescriptionEn != $scope.mfOrder.cargoDescriptionEn) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].cargoDescriptionEn = $scope.mfOrder.cargoDescriptionEn;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.marks', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].marks != $scope.mfOrder.marks) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].marks = $scope.mfOrder.marks;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.noOfPackage', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].noOfPackage != $scope.mfOrder.noOfPackage) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].noOfPackage = $scope.mfOrder.noOfPackage;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.packageTypeCode', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].packageTypeCode != $scope.mfOrder.packageTypeCode) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].packageTypeCode = $scope.mfOrder.packageTypeCode;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.packageTypeName', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].packageTypeName != $scope.mfOrder.packageTypeName) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].packageTypeName = $scope.mfOrder.packageTypeName;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.grossWeight', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].grossWeight != $scope.mfOrder.grossWeight) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].grossWeight = $scope.mfOrder.grossWeight;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.grossWeightUnit', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].grossWeightUnit != $scope.mfOrder.grossWeightUnit) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].grossWeightUnit = $scope.mfOrder.grossWeightUnit;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.netWeight', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].netWeight != $scope.mfOrder.netWeight) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].netWeight = $scope.mfOrder.netWeight;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.netWeightUnit', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].netWeightUnit != $scope.mfOrder.netWeightUnit) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].netWeightUnit = $scope.mfOrder.netWeightUnit;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.cube', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].cube != $scope.mfOrder.cube) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].cube = $scope.mfOrder.cube;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.cubeUnit', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].cubeUnit != $scope.mfOrder.cubeUnit) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].cubeUnit = $scope.mfOrder.cubeUnit;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.isBulkyCargo', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].isBulkyCargo != $scope.mfOrder.isBulkyCargo) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].isBulkyCargo = $scope.mfOrder.isBulkyCargo;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.isReefer', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].isReefer != $scope.mfOrder.isReefer) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].isReefer = $scope.mfOrder.isReefer;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.isFumigation', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].isFumigation != $scope.mfOrder.isFumigation) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].isFumigation = $scope.mfOrder.isFumigation;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.length', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].length != $scope.mfOrder.length) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].length = $scope.mfOrder.length;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.width', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].width != $scope.mfOrder.width) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].width = $scope.mfOrder.width;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.height', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].height != $scope.mfOrder.height) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].height = $scope.mfOrder.height;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.temperatureUnit', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].temperatureUnit != $scope.mfOrder.temperatureUnit) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].temperatureUnit = $scope.mfOrder.temperatureUnit;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.airVents', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].airVents != $scope.mfOrder.airVents) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].airVents = $scope.mfOrder.airVents;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.setTemperature', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].setTemperature != $scope.mfOrder.setTemperature) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].setTemperature = $scope.mfOrder.setTemperature;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.temperatureFrom', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].temperatureFrom != $scope.mfOrder.temperatureFrom) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].temperatureFrom = $scope.mfOrder.temperatureFrom;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.temperatureTo', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].temperatureTo != $scope.mfOrder.temperatureTo) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].temperatureTo = $scope.mfOrder.temperatureTo;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.hazardClass', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].hazardClass != $scope.mfOrder.hazardClass) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].hazardClass = $scope.mfOrder.hazardClass;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.unNo', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].unNo != $scope.mfOrder.unNo) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].unNo = $scope.mfOrder.unNo;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });

            $scope.$watch('mfOrder.dangerLabel', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].dangerLabel != $scope.mfOrder.dangerLabel) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].dangerLabel = $scope.mfOrder.dangerLabel;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.dangerPage', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].dangerPage != $scope.mfOrder.dangerPage) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].dangerPage = $scope.mfOrder.dangerPage;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.transportName', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].transportName != $scope.mfOrder.transportName) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].transportName = $scope.mfOrder.transportName;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.flashPoint', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].flashPoint != $scope.mfOrder.flashPoint) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].flashPoint = $scope.mfOrder.flashPoint;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.emergencyMedicalAid', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].emergencyMedicalAid != $scope.mfOrder.emergencyMedicalAid) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].emergencyMedicalAid = $scope.mfOrder.emergencyMedicalAid;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.emsNo', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].emsNo != $scope.mfOrder.emsNo) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].emsNo = $scope.mfOrder.emsNo;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.urgentContract', function(nvl, ovl) {
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.mfBookingCargos && $scope.f0131ApiF01323Scope.mfBookingCargos.length == 1
                    && $scope.f0131ApiF01323Scope.mfBookingCargos[0].urgentContract != $scope.mfOrder.urgentContract) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos[0].urgentContract = $scope.mfOrder.urgentContract;
                    if ($scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource)
                        $scope.f0131ApiF01323Scope.refreshMfBookingCargoDataSource();
                }
            });
            $scope.$watch('mfOrder.etd', function(nvl, ovl) {
                if (nvl == ovl){
                    return;
                } else {
                    if ($scope.mfOrder && $scope.mfOrder.etd) {
                        $scope.mfOrder.businessCompletionDate = $scope.mfOrder.etd;
                    }else{
                        $scope.mfOrder.businessCompletionDate = undefined;
                    }
                }
            });



            $scope.refreshUperLayerDef = function(){
                var indexScope = top.angular.element("body").scope();
                if (indexScope.refreshUperLayer) indexScope.refreshUperLayer($scope.openType);
                $timeout(function() {
                    $scope._pageState._dataState = $config.dataState.NORMAL;
                    if($scope.mfOrder.rowStatus == 2) $scope.mfOrder.rowStatus = 16;
                }, $config.pageStateResetTimeout);
            };

            $scope.mfBookingCargos = [];
            $scope.initMfBookingCargo = function() {
                if (Params.mfOrderId) {
                    $http.post($config.ctx + '/mfBookingCargo/getMfBookingCargoLength', Params.mfOrderId).success(function(data) {
                        if (data.success != undefined && data.success == true) {
                            $scope.mfBookingCargos = data.mfBookingCargos;
                        }
                    });
                }
            };
            $scope.initMfBookingCargo();

            //TODO 自定义js函数
            /**
             * 天数计算
             */
            $scope.$watch('mfOrder.realEtd', function(nvl, ovl) {
                if (!nvl || nvl == ovl) return;
                $scope.bindTabProp('f0131ApiF01324Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01324Url) || {});
                if ($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.bkContainers) {
                    for (var i = 0; i < $scope.f0131ApiF01324Scope.bkContainers.length; i++) {
                        if ($scope.f0131ApiF01324Scope.bkContainers[i].cyDate) {
                            var tempDate = new Date($scope.f0131ApiF01324Scope.bkContainers[i].cyDate);
                            var tempDateStr = tempDate.setHours(0, 0, 0);
                            var tempDate2 = new Date(nvl);
                            var tempDateStr2 = tempDate2.getTime();
                            var day =  tempDateStr2 - tempDateStr ;
                            $scope.f0131ApiF01324Scope.bkContainers[i].demurrageDays = Math.round((Math.abs(day) +(3600 * 24 * 1000))/ (3600 * 24 * 1000));
                        }
                        if($scope.f0131ApiF01324Scope.bkContainers[i].emptyCtnOutCyTime){
                            var tempDate1 = new Date($scope.f0131ApiF01324Scope.bkContainers[i].emptyCtnOutCyTime);
                            var tempDateStr1 = tempDate1.setHours(0, 0, 0);
                            var tempDate2 = new Date(nvl);
                            var tempDateStr2 = tempDate2.getTime();
                            var day1 = tempDateStr2 - tempDateStr1;
                            $scope.f0131ApiF01324Scope.bkContainers[i].useCtnDays = Math.round((Math.abs(day1)+(3600 * 24 * 1000)) / (3600 * 24 * 1000));
                        }
                        $scope.f0131ApiF01324Scope.bkContainers[i].onBoardDate = $scope.mfOrder.realEtd;
                        if($scope.f0131ApiF01324Scope.bkContainers[i].rowStatus==2){
                            $scope.f0131ApiF01324Scope.bkContainers[i].rowStatus =16;
                        }
                    }
                    if ($scope.f0131ApiF01324Scope.refreshBkContainerDataSource)
                        $scope.f0131ApiF01324Scope.refreshBkContainerDataSource();
                }
            });

            //TODO 自定义js函数
            /**
             * 保存
             */
            $scope.doneRequestEvents = ["doneRecalculate", "doneCascadingSettleAmount", "doneCascadingExchangeRate", "doneChangeEstimatedTaxRate"];
            $scope.doneRequestEvents = ["doneRecalculate", "doneCascadingSettleAmount", "doneCascadingExchangeRate", "doneChangeEstimatedTaxRate"];
            $scope.customUpdate = function(){
                var mfOrder = $scope.mfOrder;
                if(mfOrder && mfOrder.rowStatus != 4){
                    $scope.bindTabProp('f0131ApiF01325Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01325Url) || {});
                    if ($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.bcPublicOrder) {
                        var callback = function(){
                            var freightScope = $scope.f0131ApiF01325Scope, watchPromise = $scope.$watch(function() {
                                var done = true;
                                for (var i = 0; i < $scope.doneRequestEvents.length; i++) {
                                    var doneRequestEvent = $scope.doneRequestEvents[i];
                                    freightScope[doneRequestEvent] != undefined && (done = done && freightScope[doneRequestEvent]);
                                }
                                return done;
                            }, function(done) {
                                if (done) {
                                    var bcPublicOrder = freightScope.bcPublicOrder;
                                    bcPublicOrder.arBcFreights = arBcFreights;
                                    bcPublicOrder.apBcFreights = apBcFreights;
                                    var tip = layer.load(0, $config.shadeConfig);
                                    $http.post($config.ctx + "/bcFreight/customSaveOrUpdates", bcPublicOrder).success(function(result) {
                                        layer.close(tip);
                                        if (result.success) {
                                            if (result.message) {
                                                GillionMsg.alert(null, result.message);
                                            } else {
                                                for (var i = 0; i < (arBcFreights || {}).length; i++) {
                                                    arBcFreights[i].rowStatus = 2;
                                                }
                                                for (var i = 0; i < (apBcFreights || {}).length; i++) {
                                                    apBcFreights[i].rowStatus = 2;
                                                }
                                                $scope.saveOrUpdateDef && $scope.saveOrUpdateDef();
                                                freightScope.isEnEditById(bcPublicOrder.bcPublicOrderId);
                                            }
                                        }
                                    });
                                    watchPromise();
                                }
                            });
                        };
                        var arGrid = $scope.f0131ApiF01325Scope.arBcFreightGrid;
                        var arBcFreights = $scope.f0131ApiF01325Scope.arBcFreights;
                        var apGrid = $scope.f0131ApiF01325Scope.apBcFreightGrid;
                        var apBcFreights = $scope.f0131ApiF01325Scope.apBcFreights;


                        if ($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.arBcFreightGrid) {
                            if ($scope.f0131ApiF01325Scope.arBcFreightGrid && $scope.f0131ApiF01325Scope.arBcFreightGrid.formController && $scope.f0131ApiF01325Scope.arBcFreightGrid.formController.$valid == false) {
                                //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                                //return ;
                            }

                            if ($scope.f0131ApiF01325Scope.arBcFreightGrid.formController) {
                                if ($scope.f0131ApiF01325Scope.arBcFreightGrid.formController.$valid) {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.arBcFreightGrid, $scope.f0131ApiF01325Scope.arBcFreights);
                                }
                            }
                            else {
                                $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.arBcFreightGrid, $scope.f0131ApiF01325Scope.arBcFreights);
                            }
                        }
                        if ($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.apBcFreightGrid) {
                            if ($scope.f0131ApiF01325Scope.apBcFreightGrid && $scope.f0131ApiF01325Scope.apBcFreightGrid.formController && $scope.f0131ApiF01325Scope.apBcFreightGrid.formController.$valid == false) {
                                //GillionMsg.alert("提示","表格数据校验未通过，请检查数据！");
                                //return ;
                            }

                            if ($scope.f0131ApiF01325Scope.apBcFreightGrid.formController) {
                                if ($scope.f0131ApiF01325Scope.apBcFreightGrid.formController.$valid) {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.apBcFreightGrid, $scope.f0131ApiF01325Scope.apBcFreights);
                                }
                            }
                            else {
                                $scope._finishEditGridWrap($scope.f0131ApiF01325Scope.apBcFreightGrid, $scope.f0131ApiF01325Scope.apBcFreights);
                            }
                        }
                        var tabs5_F0131Api_Valid = true;
                        if ($scope.f0131ApiF01325Scope.arBcFreightGrid && $scope.f0131ApiF01325Scope.arBcFreightGrid.formController) {
                            if (!$scope.f0131ApiF01325Scope.arBcFreightGrid.formController.$valid) {
                                tabs5_F0131Api_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if ($scope.f0131ApiF01325Scope.apBcFreightGrid && $scope.f0131ApiF01325Scope.apBcFreightGrid.formController) {
                            if (!$scope.f0131ApiF01325Scope.apBcFreightGrid.formController.$valid) {
                                tabs5_F0131Api_Valid = false;
                                allValidationFlag = false;
                            }
                        }


                        var gridRequiresPromises = [];
                        if ($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.arBcFreightGrid && $scope.f0131ApiF01325Scope.arBcFreightGrid.tbody.rows[0]) {
                            var arBcFreightRequiresPromise = $scope.f0131ApiF01325Scope.arBcFreightGrid.verifySourceRequires();
                            gridRequiresPromises.push(arBcFreightRequiresPromise);
                        }
                        if ($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.apBcFreightGrid && $scope.f0131ApiF01325Scope.apBcFreightGrid.tbody.rows[0]) {
                            var apBcFreightRequiresPromise = $scope.f0131ApiF01325Scope.apBcFreightGrid.verifySourceRequires();
                            gridRequiresPromises.push(apBcFreightRequiresPromise);
                        }
                        if (gridRequiresPromises && gridRequiresPromises.length > 0) {
                            $q.all(gridRequiresPromises).then(function () {
                                callback();
                            }).catch(function (result) {
                                console.log("数据校验未通过！");
                                var tabs5_F0131Api_Require_Valid = true;
                                if ($scope.f0131ApiF01325Scope.arBcFreightGrid && $scope.f0131ApiF01325Scope.arBcFreightGrid.formController) {
                                    if (!$scope.f0131ApiF01325Scope.arBcFreightGrid.formController.$valid || $scope.f0131ApiF01325Scope.arBcFreightGrid.$$requireGridValid == false) {
                                        delete $scope.f0131ApiF01325Scope.arBcFreightGrid.$$requireGridValid;
                                        tabs5_F0131Api_Require_Valid = false;
                                        allValidationFlag = false;
                                    }
                                }
                                if ($scope.f0131ApiF01325Scope.apBcFreightGrid && $scope.f0131ApiF01325Scope.apBcFreightGrid.formController) {
                                    if (!$scope.f0131ApiF01325Scope.apBcFreightGrid.formController.$valid || $scope.f0131ApiF01325Scope.apBcFreightGrid.$$requireGridValid == false) {
                                        delete $scope.f0131ApiF01325Scope.apBcFreightGrid.$$requireGridValid;
                                        tabs5_F0131Api_Require_Valid = false;
                                        allValidationFlag = false;
                                    }
                                }
                                if (!tabs5_F0131Api_Require_Valid) {
                                    $scope.F0131Api.selectTab(4);
                                }
                            }).finally(function (result) {
                                console.log("执行表格非空校验.");
                            });
                        } else {
                            callback();
                        }
                    } else {
                        $scope.saveOrUpdateDef && $scope.saveOrUpdateDef();
                    }
                }else{
                    $scope.saveOrUpdateDef && $scope.saveOrUpdateDef();
                }
            };

            $scope.callbackUpdate = function(msg){
                var bcScope = $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01325Url) || {};
                if (msg && msg != "null") {
                    bcScope.getArBcFreightPages();
                    bcScope.getApBcFreightPages();
                    GillionMsg.alert("提示", msg);
                    return ;
                }
                bcScope.getNewArBcFreights();
                bcScope.getNewApBcFreights();
                $scope.saveOrUpdateDef && $scope.saveOrUpdateDef();
            }

            //TODO 自定义js函数
            /**
             * 分配提单号
             */
            $scope.blNoManage = function(){
                var param = {};
                var mblNo = $scope.mfOrder.mblNo;
                param.mblNo= mblNo;
                var jobNo = $scope.mfOrder.jobNo;
                param.jobNo= jobNo;
                var consignorName = $scope.mfOrder.consignorName;
                param.consignorName= consignorName;
                var secondCarrierName = $scope.mfOrder.secondCarrierName;
                param.secondCarrierName= secondCarrierName;
                var line = $scope.mfOrder.line;
                param.line= line;
                var consignorCode = $scope.mfOrder.consignorCode;
                param.consignorCode= consignorCode;
                var secondCarrierCode = $scope.mfOrder.secondCarrierCode;
                param.secondCarrierCode= secondCarrierCode;
                var lineCode = $scope.mfOrder.lineCode;
                param.lineCode= lineCode;
                var portOfDestination = $scope.mfOrder.portOfDestination;
                param.portOfDestination= portOfDestination;
                var portOfDestinationCode = $scope.mfOrder.portOfDestinationCode;
                param.portOfDestinationCode= portOfDestinationCode;
                var portOfDischarge = $scope.mfOrder.portOfDischarge;
                param.portOfDischarge= portOfDischarge;
                var portOfDischargeCode = $scope.mfOrder.portOfDischargeCode;
                param.portOfDischargeCode= portOfDischargeCode;
                var model = $scope.mfOrder;
                param.ruleNo="blNoManageStrategy";
                RuleService.executeRule($scope,param,model,"POST",false);
            };

            //TODO 自定义js函数
            /**
             * 取消退关退载
             */
            $scope.cancleShutOffLoad = function(){
                var params = {};
                params.mfOrderId = $scope.mfOrder.mfOrderId;
                params.rowStatus = $scope.mfOrder.rowStatus;
                params.mblNo = $scope.mfOrder.mblNo;
                $http.post($config.ctx + '/mfOrder/cheackMfOrderBCEMblNo', params).success(function(data) {
                    if (data.success != undefined && data.success == true) {
                        if (data.existMblNoFlag) {
                            GillionMsg.confirm("提示",'MBL NO.已存在，是否继续?',function(btn) {
                                if (btn) {
                                    $scope.cancleShutOffLoadImpl();
                                }
                            });
                        } else {
                            $scope.cancleShutOffLoadImpl();
                        }
                    }
                });
            }
            $scope.cancleShutOffLoadImpl = function(){
                GillionMsg.confirm(null,'确认取消退关退载?',function(btn) {
                    if (btn) {
                        var param = {};
                        var mfOrderId = $scope.mfOrder.mfOrderId;
                        param.mfOrderId= mfOrderId;
                        param.mblNo = $scope.mfOrder.mblNo;
                        param.ruleNo="mfOrderCancleShutOffLoadStrategy";
                        RuleService.executeRule($scope,param,null,"POST");
                    }
                });
            };

            //TODO 自定义js函数
            /**
             * 港口描述
             */
            $scope.changeMfOrderPortOfTransshipment = function(list,item) {
                $scope.mfOrder.potDescription = item.portName;
            };
            $scope.changeMfOrderPolDescriptiont = function(list,item) {
                $scope.mfOrder.polDescription = item.portName;
            };
            $scope.changeMfOrderPodDescription = function(list,item) {
                $scope.mfOrder.podDescription = item.portName;
            };
            $scope.changeMfOrderPodDestDescription = function(list,item) {
                $scope.mfOrder.podDestDescription = item.portName;
            };
            $scope.changeMfOrderPorDescription = function(list,item) {
                $scope.mfOrder.porDescription = item.portName;
            };
            $scope.changeMfOrderPodDeliveryDescription = function(list,item) {
                $scope.mfOrder.podDeliveryDescription = item.portName;
            };
            $scope.changeEtdByVoyage = function(list,item) {
                if (item.etd && item.etd.indexOf('-') < 0) {
                    var year = item.etd.substr(0,4);
                    var mouth = item.etd.substr(4,2);
                    var date = item.etd.substr(6,2);
                    $scope.mfOrder.etd = year + "-" + mouth + "-" + date;
                } else {
                    $scope.mfOrder.etd = item.etd;
                }
            };
            $scope.changeConsignorName = function(list,item) {
                var param = {};
                param.ruleNo="autoSetRequire";
                for (var domId in $scope.mfOrder)
                    param[domId] = $scope.mfOrder[domId];
                angular.extend(param, $scope.mfOrder);
                param.consignorName = item.custNameCn;
                RuleService.executeRule($scope,param,$scope.mfOrder,"POST",false,false);
                var param = {};
                param.ruleNo="autowiredCreditRatingStrategy";
                for (var domId in $scope.mfOrder)
                    param[domId] = $scope.mfOrder[domId];
                angular.extend(param, $scope.mfOrder);
                param.consignorName = item.custNameCn;
                RuleService.executeRule($scope,param,$scope.mfOrder,"POST",false,false);
            };

            $scope.changeBusinessUnitsName = function(list, item) {
                var param = {};
                param.ruleNo="autowiredCreditRatingStrategy";
                param.consignorCode = $scope.mfOrder.consignorCode||'';
                param.businessUnitsCode = $scope.mfOrder.businessUnitsCode;
                param.subBusinessCode = $scope.mfOrder.subBusinessCode;
                RuleService.executeRule($scope,param,$scope.mfOrder,"POST",false,false);
            };

            $scope.bookingHistory = function () {
                var url = "/html/fms/mf/vipfCcmLogResultManage.html";

                var openType = "2";
                if (url.indexOf("?") >= 0) {
                    url = url + "&openType=" + openType;
                } else {
                    url = url + "?openType=" + openType;
                }
                var sourceOrderId = $scope.mfOrder.mfOrderId;
                url = url + "&sourceOrderId=" + sourceOrderId;
                var options = {
                    title: '台帐历史',
                    closable: true,
                    modal: true,
                    url: url,
                    width: 1200,
                    height: 600
                };
                var indexScope = top.angular.element("body").scope();
                indexScope.showUrl(options);
            };
            //TODO 自定义js函数
            /**
             * 删除
             */
            $scope.remove = function(){
                GillionMsg.confirm(null,'确认删除?',function(btn) {
                    if (btn) {
                        var param = {};
                        var mfOrderId = $scope.mfOrder.mfOrderId;
                        param.mfOrderId= mfOrderId;
                        var orderStatus = $scope.mfOrder.orderStatus;
                        param.orderStatus= orderStatus;
                        param.ruleNo="deleteMfOrder";
                        RuleService.executeRule($scope,param,null,"POST");
                    }
                });
            };

            $scope.confirm = function() {
                var orderIds = $scope.mfOrder.mfOrderId;
                $http.post($config.ctx + '/mfOrder/comfirmOrder',orderIds).success(function(data) {
                    if (data.success != undefined && data.success == true) {
                        $scope.confirmFlag = true;
                        $scope.saveOrUpdateCustom();
                    }
                });
            };

            $scope.confirmAfterUpdate = function(){
                $scope.refreshBookingStatus();
                $scope.getPro($scope.mfOrder.mfOrderId);
            };

            $scope.saveOrUpdate4Confirm = function() {
                $scope.mfOrder.attribute1 = 'POACP';
                $scope.saveOrUpdateCustom();
            };


            $scope.saveOrUpdate4UnConfirm = function() {
                AssociatePromiseService.callback(function(){
                    $scope.mfOrder.attribute1 = '';
                    $scope.saveOrUpdateCustom();
                });
            }


            //TODO 自定义js函数
            /**
             * 装箱改变箱量
             */
            $scope.changeloadKind = function(){
                $scope.bindTabProp('f0131ApiF01324Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01324Url) || {});
                if ($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.mfOrder) {
                    $scope.f0131ApiF01324Scope.mfOrder.loadKind = $scope.mfOrder.loadKind;
                }
            }
            $scope.$watch('mfOrder.loadKind',function() {
                $scope.changeloadKind();
                if($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.TotalWrite){
                    $scope.f0131ApiF01324Scope.TotalWrite();
                }
            });

            //TODO 自定义js函数
            /**
             * 完全复制
             */
            $scope.copyAllInitialize = function() {
                var param = {mfOrderId : Params.copyOrderId,cascade : true};var tip = layer.load(0, {shade: false});
                $http.get($config.ctx + '/mfOrder/getMfOrder',{params:param}).success(function(data){
                    layer.close(tip);
                    if (data.success != undefined && data.success == true) {
                        $scope.mfOrder = data.mfOrder;$scope.mfOrder.rowStatus = '4';$scope.mfOrder.orderStatus = 'NW';
                        $scope.mfOrder.isShutOffLoad = 'N';
                        $scope.mfOrder.documentLockStatus = 'UL';$scope.mfOrder.isCfmBill = 'N';
                        $scope.mfOrder.isEir = 'N';$scope.mfOrder.isCleanClearance = 'N';$scope.mfOrder.isClearance = 'N';
                        if(data.mfOrder.mfOrderExtends)$scope.mfOrderExtend = data.mfOrder.mfOrderExtends;
                        if(data.mfOrder.mfOperationRequires)$scope.mfOperationRequire = data.mfOrder.mfOperationRequires;
                        $scope.mfOrder.goOrderId = null;$scope.mfOrder.mfOrderId = null;$scope.mfOrder.jobNo = null;
                        var columns = ['isReleaseCtn','isOperableBill','isShutOffLoad','isDetainCargo','isPacking','bookingNo','mblNo','masterMblNo','realVoyage',
                            'hblNo','customerBusinessNo','realVesselName','realVesselCode','preSecondVesselName', 'preSecondVesselCode', 'preSecondVoyage','terminalPotCode',
                            'preSecondVesselEtd', 'portAreaName', 'portAreaCode', 'realEtd', 'requireSecondEtd','opCode','opName','docCode', 'docName','preSecondVesselEta',
                            'dispatcherName', 'dispatcherCode' ,'inspectionerCode', 'inspectionerName', 'inspectionSceneCode','inspectionSceneName', 'customsClearanceSceneCode',
                            'largeShippingAgencyCode','largeShippingAgencyName', 'customsDeclarationCode', 'customsDeclarationName', 'customsClearanceSceneName'];
                        for (var i=0; i<columns.length; i++){$scope.mfOrder[columns[i]] = '';}
                        $scope.mfOrder.loadKind = 'FCL';$scope.mfOrder.bookingType = 'BK';$scope.mfOrder.isOrderCfm = 'N';
                        $scope.mfOrderExtend.mfOrderExtendId = ''; $scope.mfOrderExtend.mfOrderId = '';$scope.mfOrderExtend.isSendRealCsn = 'N';$scope.mfOrderExtend.rowStatus = '4';
                        $scope.mfOperationRequire.mfOperationRequireId = ''; $scope.mfOperationRequire.mfOrderId = '';$scope.mfOperationRequire.rowStatus = '4';
                        $scope.mfCtnRequests.splice(0,$scope.mfCtnRequests.length);
                        if(data.mfOrder.mfCtnRequests) {
                            for (var i=0; i< data.mfOrder.mfCtnRequests.length; i++) {
                                data.mfOrder.mfCtnRequests[i].mfCtnRequestId = $scope.newMfCtnRequestGridId++;
                                data.mfOrder.mfCtnRequests[i].rowStatus = '4';
                                data.mfOrder.mfCtnRequests[i].mfOrderId = '';
                            } Arrays.pushAll(data.mfOrder.mfCtnRequests, $scope.mfCtnRequests);
                        }
                        $http.post($config.ctx + '/defaultValue/getIsDutyFree',data.mfOrder.subBusinessCode).success(function(data) {
                            if (data.success != undefined && data.success == true) {
                                $scope.mfOrder.isDutyFree = data.mdSubBusiness.isDutyFree;
                                $scope.mfOrder.subBusinessType = data.mdSubBusiness.subBusinessName;
                                $scope.mfOrder.bindingInterface = data.mdSubBusiness.bindingInterface;
                                $scope.mfOrder.businessType = data.mdSubBusiness.businessType;
                            }
                        });
                    }});
            };
            $scope.makeCdOrder = function(){
                var url = "/html/fms/cd/cdOrderEdit.html";
                var urlTitle = "报关单";
                var sysResourceId = "cdOrder_edit";

                url = url + "?mfOrderId="+$scope.mfOrder.mfOrderId+"&ieFlag=E";
                var openType = "1";
                if (url.indexOf("?")>=0) {
                    url = url + "&openType=" + openType;
                } else {
                    url = url + "?openType=" + openType;
                }
                var resource = {
                    sysResourceId : sysResourceId,
                    urlTitle: urlTitle,
                    url:url
                };
                var indexScope = top.angular.element("body").scope();
                if ($scope.validClickGeneralOrderQueryRow(resource, indexScope)) {
                    GillionMsg.show({
                        title:'提示',
                        msg:'存在未保存的报关页面数据,是否继续?',
                        buttons: [,{
                            text:'否',
                            type:'sure',
                            handler: function(){
                            }
                        },{
                            text:'是',
                            type:'sure',
                            handler: function(){
                                $scope.$apply(function(){
                                    indexScope.addTab(resource);
                                    indexScope.$apply();
                                });
                            }
                        }]
                    });
                } else {
                    indexScope.addTab(resource);
                    indexScope.$apply();
                }
            }
            $scope.validClickGeneralOrderQueryRow = function (resource, indexScope) {
                for (var i = 0; i < indexScope.tabArray.length; i++) {
                    if (indexScope.tabArray[i].sysResourceId == resource.sysResourceId && indexScope.tabArray[i].closed) {
                        return false;
                    }
                }
                if (!window.parent.document.getElementById(resource.sysResourceId + "_frame")) return false;
                var tabWindow = window.parent.document.getElementById(resource.sysResourceId + "_frame").contentWindow;
                var tabScope = tabWindow.angular.element("body").scope();
                // 未进行修改监测或者数据未未改的页面,直接关闭
                if(!tabScope._pageState || !tabScope._pageState.isDataModified || !tabScope._pageState.isDataModified()){
                    return false;
                }
                var indexScope = top.angular.element("body").scope();
                return true;
            };
            //TODO 自定义js函数
            /**
             * 加拼
             */
            $scope.freight = function() {
                if ($scope.mfOrder.rowStatus && $scope.mfOrder.rowStatus != '4') {
                    var url = "/html/fms/mf/mfOrderAdd.html";
                    if ($scope.allowSecondFlag == 'Y')
                        url = url + "?openType=1&isFreightType=Y&allowSecondFlag=Y&freightOrderId=" + Params.freightOrderId;
                    else
                        url = url + "?openType=1&isFreightType=Y&allowSecondFlag=Y&freightOrderId=" + $scope.mfOrder.mfOrderId;
                    var resource = {
                        sysResourceId : 'c46b6b4192324e11a4cfccc310ccb860',
                        urlTitle:'海运出口制作',
                        url:url
                    };
                    var indexScope = top.angular.element("body").scope();
                    indexScope.addTab(resource);indexScope.$apply();
                }
            };
            $scope.freightInitialize = function() {
                $scope.allowSecondFlag = Params.allowSecondFlag;
                var param = {mfOrderId : Params.freightOrderId, cascade : true};
                var tip = layer.load(0, {shade: false});
                $http.get($config.ctx + '/mfOrder/getMfOrder',{params:param}).success(function(data){
                    layer.close(tip);
                    if (data.success != undefined && data.success == true) {
                        $scope.mfOrder = data.mfOrder;
                        $scope.mfOrder.fakeMfOrder = Params.freightOrderId;
                        if(data.mfOrder.mfOrderExtends)
                            $scope.mfOrderExtend = data.mfOrder.mfOrderExtends;
                        if(data.mfOrder.mfOperationRequires)
                            $scope.mfOperationRequire = data.mfOrder.mfOperationRequires;
                        $scope.mfOrder.mfOrderId = null;$scope.mfOrder.rowStatus = '4';$scope.mfOrder.orderStatus = 'NW';
                        $scope.mfOrder.masterMblNo = $scope.mfOrder.bookingNo;$scope.mfOrder.mblNo= '';
                        $scope.mfOrder.bookingType = 'AF';$scope.mfOrderExtend.mfOrderExtendId = '';
                        $scope.mfOrderExtend.mfOrderId = '';$scope.mfOrderExtend.rowStatus = '4';
                        $scope.mfOperationRequire.mfOperationRequireId = '';$scope.mfOrder.bookingNo='';
                        $scope.mfOperationRequire.mfOrderId = '';$scope.mfOperationRequire.rowStatus = '4';
                        $scope.mfOrder.loadKind = 'LCL';$scope.mfOrder.ctnNum='';$scope.mfOrder.isOrderCfm = 'N';
                        $scope.mfOrder.isCfmBill = 'N';$scope.mfOrder.isExistHbl = 'N';$scope.mfOrder.documentLockStatus = 'UL';
                        $scope.mfOrder.isEir = 'N';$scope.mfOrder.isCleanClearance = 'N';$scope.mfOrder.isClearance = 'N';
                        $scope.mfOrder.isOperableBill = 'N';$scope.mfOrder.isReleaseCtn = 'N';
                        $scope.mfOrder.isShutOffLoad = 'N';$scope.mfOrder.isDetainCargo = 'N';
                        /*$scope.mfBookingCargos.splice(0,$scope.mfBookingCargos.length);
          			if(data.mfOrder.mfBookingCargos) {
          				for (var i=0; i< data.mfOrder.mfBookingCargos.length; i++) {
          					data.mfOrder.mfBookingCargos[i].mfBookingCargoId = $scope.newMfBookingCargoGridId++;
          					data.mfOrder.mfBookingCargos[i].mfOrderId = '';
          					data.mfOrder.mfBookingCargos[i].rowStatus = '4';
          				}
          				Arrays.pushAll(data.mfOrder.mfBookingCargos, $scope.mfBookingCargos);
          			}*/
                    }
                });
            };
            $scope.getBookingStatus=function(){
                $http.post($config.ctx + '/mfOrder/getBookingStatus',$scope.mfOrder.mfOrderId).success(function(data){
                    if(data.success != undefined && data.success == true){
                        if ($("div[name='MsgOrderStatusDiv']"))
                            $("div[name='MsgOrderStatusDiv']").remove();
                        var form = angular.element("form[name= 'MfOrderForm']");
                        form.prepend(data.html);
                    }
                })
            };
            $scope.refreshBookingStatus = function() {
                if ($("div[name='MsgOrderStatusDiv']"))
                    $("div[name='MsgOrderStatusDiv']").remove();
                $scope.getBookingStatus();
            };
            //TODO 自定义js函数
            /**
             * customMfOrderInit
             */
            $scope.newMfCtnRequestGridId = -9223372036;
            $scope.firstFixedLine = true;
            $scope.copyCtnFlag = true;
            $scope.freightFlag = true;
            $scope.mergeFlag = true;
            $scope.initSuccessFlag = true;
            $scope.copyAllCtnFlag = true;
            $scope.commissionFlag = true;
            $scope.$on('MfCtnRequestSource',function(context,dataSource){
                if (Params.isCommissionType && Params.isCommissionType == 'Y' && Params.copyOrderId) {
                    $scope.isCommissionType = 'Y';
                    $scope.commissionOrderId = Params.copyOrderId;
                } else {
                    $scope.isCommissionType = undefined;
                    $scope.commissionOrderId = undefined;
                }
                if ($scope.copyAllCtnFlag && Params.isCopyAllType &&
                    Params.isCopyAllType == 'Y' && Params.copyOrderId) {
                    $scope.copyAllCtnFlag = false;
                    $scope.copyAllInitialize();
                } else if ($scope.commissionFlag && Params.isCommissionType
                    && Params.isCommissionType == 'Y' && Params.copyOrderId) {
                    $scope.commissionFlag = false;
                    $scope.commissionInitialize();
                    for (var key in $scope.F0131Api.tabs) {
                        if (key.indexOf("集装箱") >= 0 || key.indexOf("拖车") >= 0) {
                            $scope.F0131Api.loadTab(key);
                        }
                    }
                } else if ($scope.initSuccessFlag && Params.isMergeType
                    && Params.isMergeType == 'Y' && Params.mergeOrderIds) {
                    $scope.initSuccessFlag = false;
                    $scope.mergeOrder();
                } else if(dataSource.records != undefined) {
                    $scope.mfCtnRequests = dataSource.records ;
                }
            });
            $scope.customMfOrderInit = function(){
                if ($scope.copyCtnFlag && Params.isCopyType
                    && Params.isCopyType == 'Y' && Params.copyOrderId) {
                    $scope.copyCtnFlag = false;
                    $scope.copyInitialize();
                } else if($scope.freightFlag && Params.isFreightType
                    && Params.isFreightType == 'Y' && Params.freightOrderId) {
                    $scope.freightFlag = false;
                    $scope.freightInitialize();
                }
                if ($scope.mergeFlag && Params.isMergeType
                    && Params.isMergeType == 'Y' && Params.mergeOrderIds) {
                    $scope.mergeFlag = false;
                    $scope.mergeOrder();
                }
                if($scope.mfOrder.rowStatus!='4'){
                    $scope.refreshBookingStatus();
                }
                if ($scope.fixedLine && $scope.firstFixedLine){
                    $scope.firstFixedLine = false;
                    $scope.fixedLine();
                }
            };
            $('[ng-click="close()"]').hide();

            //TODO 自定义js函数
            /**
             * 计费重
             */
            $scope.watchChargingWeight = function(){
                if($scope.mfOrder.loadKind!='FCL'){
                    if($scope.mfOrder.grossWeight&&!$scope.mfOrder.cube){
                        $scope.mfOrder.chargingWeight = parseFloat($scope.mfOrder.grossWeight)/1000;
                    }else if(!$scope.mfOrder.grossWeight&&$scope.mfOrder.cube){
                        $scope.mfOrder.chargingWeight = parseFloat($scope.mfOrder.cube);
                    }else if(!$scope.mfOrder.grossWeight&&!$scope.mfOrder.cube){
                        return;
                    }else{
                        if((parseFloat($scope.mfOrder.grossWeight)/1000)>parseFloat($scope.mfOrder.cube)){
                            $scope.mfOrder.chargingWeight = parseFloat($scope.mfOrder.grossWeight)/1000;
                        }else if((parseFloat($scope.mfOrder.grossWeight)/1000)<parseFloat($scope.mfOrder.cube)){
                            $scope.mfOrder.chargingWeight = parseFloat($scope.mfOrder.cube);
                        }else{
                            $scope.mfOrder.chargingWeight = parseFloat($scope.mfOrder.cube);
                        }
                    }
                }else{
                    $scope.mfOrder.chargingWeight ="";
                }
            }
            $scope.$watch('mfOrder.loadKind',function() {
                $scope.watchChargingWeight();

            });
            $scope.$watch('mfOrder.grossWeight',function() {
                $scope.watchChargingWeight();

            });
            $scope.$watch('mfOrder.cube',function() {
                $scope.watchChargingWeight();

            });

            //TODO 自定义js函数
            /**
             * 冻结表头
             */
            $scope.fixedLine = function(){
                var $fixedTabs = $('.tab');
                fixTabBody();
                function fixTabBody() {
                    var $tabBody = $fixedTabs.children('.tab-body');
                    var tabBodyOffsetTop = $tabBody.offset().top;
                    var windowHeight = window.innerHeight;
                    var $tabBodyIframe = $tabBody.children('.tab-body-iframe:visible');
                    $tabBody.css('height', (windowHeight - tabBodyOffsetTop - 15) + 'px');
                    $tabBody.css('overflow-y', 'auto');
                    if (!$tabBodyIframe.length) {
                        return;
                    }
                    $tabBodyIframe.css('height', 'auto');
                    var $iframe = $tabBodyIframe.find('iframe');
                    if (!$iframe.length) {
                        return;
                    }
                    var iframe = $iframe[0];
                    var body = iframe.contentWindow.document.body;
                    if (body) {
                        var h=iframe.contentWindow.document.body.scrollHeight;
                        iframe.style.height=h+'px';
                    }
                }
                setInterval(fixTabBody, 1000);
            }

            //TODO 自定义js函数
            /**
             * 加载合并订单
             */
            $scope.mergeOrder = function(){

                $http.post($config.ctx + '/mfOrder/mergeOrder',Params.mergeOrderIds).success(function(data) {
                    if (data.success != undefined && data.success == true) {
                        $scope.mfOrder = data.mfOrder;
                        if(data.mfOrder.mfCtnRequests){
                            var newRows=angular.copy(data.mfOrder.mfCtnRequests);
                            $scope.mfCtnRequests=newRows;
                        }
                    }
                });
            }

            //TODO 自定义js函数
            /**
             * 保存
             */
            $scope.validCtnFlag = false;
            $scope.saveOrUpdateDef = function() {
                if ($scope.mfBookingCargos && $scope.mfBookingCargos.length == 1 && $scope.mfBookingCargos[0].rowStatus != '4') $scope.mfBookingCargos[0].rowStatus = '16';
                $scope.bindTabProp('f0131ApiF01324Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01324Url) || {});
                if (!$scope.validCubeWeightPackage()) {
                    GillionMsg.confirm(null, "订舱件毛体与集装箱件毛体不一致,是否继续？",function(sureVaild){
                        if (sureVaild) {
                            if ($scope.f0131ApiF01324Scope.beforeSaveOrUpdateCtn)
                                $scope.f0131ApiF01324Scope.beforeSaveOrUpdateCtn();
                            else $scope.validCtnFlag = true;
                        }
                    });
                } else {
                    if ($scope.f0131ApiF01324Scope.beforeSaveOrUpdateCtn)
                        $scope.f0131ApiF01324Scope.beforeSaveOrUpdateCtn();
                    else $scope.validCtnFlag = true;
                }
            };
            $scope.$watch('validCtnFlag', function(nvl, ovl){
                if (nvl && nvl == true)  {
                    $scope.validCtnFlag = false;
                    if(($scope.mfOrder.mfOrderId==null || $scope.mfOrder.rowStatus=='4') && $scope.save)
                        $scope.save();
                    else if ($scope.update)
                        $scope.update();
                    $scope.anotherFlag = true;
                }
            });
            $scope.$watch('f0131ApiF01324Scope.anotherFlag', function(nvl, ovl) {
                if (nvl && nvl == true)  {
                    $scope.f0131ApiF01324Scope.anotherFlag = false;
                    if($scope.mfOrder.mfOrderId==null || $scope.mfOrder.rowStatus=='4')
                        $scope.save();
                    else
                        $scope.update();
                }
            });
            $scope.$watch('f0131ApiF01324Scope.validCtnFlag', function(nvl, ovl){
                if (nvl && nvl == true)  {
                    $scope.f0131ApiF01324Scope.validCtnFlag = false;
                    if($scope.mfOrder.mfOrderId==null || $scope.mfOrder.rowStatus=='4')
                        $scope.save();
                    else
                        $scope.update();
                }
            });
            // 校验集装箱的件毛体
            $scope.validCubeWeightPackage = function() {
                if (1==1) return true;
                var noOfPackageTotal = 0;var grossWeightTotal = 0;var cubeTotal = 0;
                if ($scope.f0131ApiF01324Scope.bkContainers) {
                    for (var i=0; i<$scope.f0131ApiF01324Scope.bkContainers.length; i++) {
                        if ($scope.f0131ApiF01324Scope.bkContainers[i].ctnNoOfPackage)
                            noOfPackageTotal = noOfPackageTotal + parseFloat($scope.f0131ApiF01324Scope.bkContainers[i].ctnNoOfPackage);
                        if ($scope.f0131ApiF01324Scope.bkContainers[i].ctnGrossWeight)
                            grossWeightTotal = grossWeightTotal + parseFloat($scope.f0131ApiF01324Scope.bkContainers[i].ctnGrossWeight);
                        if ($scope.f0131ApiF01324Scope.bkContainers[i].ctnCube)
                            cubeTotal = cubeTotal + parseFloat($scope.f0131ApiF01324Scope.bkContainers[i].ctnCube);
                    }
                    if ((parseFloat($scope.mfOrder.noOfPackage) != noOfPackageTotal ||
                            parseFloat($scope.mfOrder.grossWeight) != grossWeightTotal ||
                            parseFloat($scope.mfOrder.cube) != cubeTotal) && $scope.f0131ApiF01324Scope.bkContainers.length > 0){
                        return false;
                    }
                }
                return true;
            };

            //TODO 自定义js函数
            /**
             * 生成提单
             */
            $scope.operableBill = function(){
                var tip = layer.load(0, {shade: false});
                $http.post($config.ctx + '/mfOrder/createOperableBill', $scope.mfOrder.mfOrderId).success(function (data) {
                    layer.close(tip);
                    if (data.success != undefined && data.success == true){
                        GillionMsg.alert("提示", data.msg);
                        $scope.mfOrder.isOperableBill='Y';
                        $scope.mfOrder.isCfmBill='Y';
                        $scope.bindTabProp('f0131ApiF01322Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01322Url) || {});
                        $scope.bindTabProp('f0131ApiF01324Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01324Url) || {});
                        if ($scope.f0131ApiF01322Scope && $scope.f0131ApiF01322Scope.mfOrder) {
                            $scope.f0131ApiF01322Scope.mfOrder.isOperableBill = 'Y';
                            $scope.f0131ApiF01322Scope.mfOrder.isCfmBill = 'Y';
                            $scope.f0131ApiF01322Scope.mfOrder.documentLockStatus = 'HL';
                            if($scope.f0131ApiF01322Scope.refreshMfOrderExtendDataSource) $scope.f0131ApiF01322Scope.refreshMfOrderExtendDataSource();
                        }
                        if ($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.mfOrder) {
                            $scope.f0131ApiF01324Scope.mfOrder.isOperableBill = 'Y';
                            $scope.f0131ApiF01324Scope.mfOrder.isCfmBill = 'Y';
                            $scope.f0131ApiF01324Scope.mfOrder.documentLockStatus = 'HL';
                            if ($scope.f0131ApiF01324Scope.refreshBkContainerDataSource) $scope.f0131ApiF01324Scope.refreshBkContainerDataSource();
                        }
                    }
                });
            };

            $scope.$watch('mfOrder.isCfmBill', function(nvl, ovl) {
                if (nvl) {
                    $scope.bindTabProp('f0131ApiF01322Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01322Url) || {});
                    if ($scope.f0131ApiF01322Scope && $scope.f0131ApiF01322Scope.mfOrder) {
                        $scope.f0131ApiF01322Scope.mfOrder.isCfmBill = $scope.mfOrder.isCfmBill;
                        if ($scope.f0131ApiF01322Scope.refreshMfOrderExtendDataSource) $scope.f0131ApiF01322Scope.refreshMfOrderExtendDataSource();
                    }
                }
            });

            //TODO 自定义js函数
            /**
             * 获取目的港代理
             */
            $scope.getMfDestinationAgent = function(){
                $scope.bindTabProp('f0131ApiF01322Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01322Url) || {});
                if ($scope.f0131ApiF01322Scope && $scope.f0131ApiF01322Scope.getMfDestinationAgent) $scope.f0131ApiF01322Scope.getMfDestinationAgent();
            };

            //TODO 自定义js函数
            /**
             * 打印
             */
            $scope.print = function(){
                var url = "/html/fms/common/report_dialog.html";
                var openType = "2";
                if (url.indexOf("?")>=0){
                    url = url + "&openType=" + openType;
                } else {
                    url = url + "?openType=" + openType;
                }
                var systemType = "MF";
                url = url + "&systemType="+systemType;
                var templateTypeCode = "MF_ORDER";
                url = url + "&templateTypeCode="+templateTypeCode;
                var mfOrderId = $scope.mfOrder.mfOrderId;
                url = url + "&V_MF_ORDER_ID="+mfOrderId;
                var options = {
                    title : '打印' ,
                    closable : true ,
                    modal : true ,
                    url : url ,
                    width:500,
                    height:380
                };
                var indexScope = top.angular.element("body").scope();
                indexScope.showUrl(options);
            };

            //TODO 自定义js函数
            /**
             * 退关退载
             */
            $scope.shutOffLoad = function(){
                GillionMsg.confirm(null,'确认退关退载?',function(btn) {
                    if (btn) {
                        var param = {};
                        var mfOrderId = $scope.mfOrder.mfOrderId;
                        param.mfOrderId= mfOrderId;
                        param.ruleNo="mfOrderShutOffLoadStrategy";
                        RuleService.executeRule($scope,param,null,"POST");
                    }
                });
            };

            //TODO 自定义js函数
            /**
             * 取消放箱
             */
            $scope.cancleContainer = function(){
                GillionMsg.confirm(null,'确认取消放箱?',function(btn) {
                    if (btn) {
                        var param = {};
                        var mfOrderId = $scope.mfOrder.mfOrderId;
                        param.mfOrderId= mfOrderId;
                        param.ruleNo="cancleContainerStrategy";
                        RuleService.executeRule($scope,param,null,"POST");
                    }
                });
            };

            //TODO 自定义js函数
            /**
             * 付款方式联动带值
             */
            $scope.paymentChange = function(){
                if($scope.mfOrder.paymentMode){
                    Params.paymentMode=$scope.mfOrder.paymentMode;
                    $http.post($config.ctx + '/mdCodeDict/queryPayment',Params.paymentMode).success(function(data) {
                        if (data.success != undefined && data.success == true) {
                            $scope.mfOrder.freightTerms = data.mdCodeDicts[0].displayValue;
                        }
                    });
                }else if($scope.mfOrder.paymentMode==''){
                    $scope.mfOrder.freightTerms='';
                }
            };



            //TODO 自定义js函数
            /**
             * 保存
             */
            $scope.saveOrUpdateCustomMfOrder=function() {
                $scope.bindTabProp('f0131ApiF01324Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01324Url) || {});
                var rowStatus=$scope.mfOrder.rowStatus;
                var arrsMsg = [];
                if($scope.mfCtnRequests){
                    for (var i=0; i< $scope.mfCtnRequests.length; i++) {
                        if ($scope.mfCtnRequests[i].containerSizeType) {
                            var flag = true;
                            for (var j=0; j < arrsMsg.length; j++) {
                                if (arrsMsg[j].containerSizeType == $scope.mfCtnRequests[i].containerSizeType){
                                    arrsMsg[j].num=$scope.mfCtnRequests[i].quantityOfCtn+arrsMsg[j].num;
                                    flag = false;
                                }
                            }
                            if (flag) {
                                arrsMsg.unshift({containerSizeType:$scope.mfCtnRequests[i].containerSizeType,num:$scope.mfCtnRequests[i].quantityOfCtn});
                            }
                        }
                    }
                    var temp4 = "";
                    for(var x=0; x< arrsMsg.length; x++){
                        if (temp4 != "")
                            temp4 = temp4 + "+";
                        temp4 = temp4 + arrsMsg[x].num + "X" + arrsMsg[x].containerSizeType;
                    }
                }
                var param = {};
                if($scope.mfOrderOI && $scope.mfOrderOI.mfOrderId && $scope.mfOrderOI.mfOrderId != "")
                    var mfOrderId = $scope.mfOrderOI.mfOrderId  || "";
                else if($scope.mfOrderIT && $scope.mfOrderIT.mfOrderId && $scope.mfOrderIT.mfOrderId != "")
                    var mfOrderId = $scope.mfOrderIT.mfOrderId  || "";
                else if($scope.mfOrder && $scope.mfOrder.mfOrderId && $scope.mfOrder.mfOrderId != "")
                    var mfOrderId = $scope.mfOrder.mfOrderId || "";
                else
                    var mfOrderId = Params.mfOrderId || "";
                param.mfOrderId= mfOrderId;

                if(mfOrderId && mfOrderId != null && mfOrderId != '') {
                    if ($scope.mfOrder.loadKind == 'FCL') {
                        if ($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.bkContainer) {
                            if($scope.f0131ApiF01324Scope.bkContainer.ctnNumTotal!=""){
                                if (temp4 != $scope.f0131ApiF01324Scope.bkContainer.ctnNumTotal) {
                                    GillionMsg.confirm("提示", "预配箱量与实际箱量不一致，确认是否保存？", function (btn) {
                                        if (btn) {
                                            $scope.customUpdate();
                                        }
                                    })
                                } else {
                                    $scope.customUpdate();
                                }
                            }else{
                                $scope.customUpdate();
                            }} else {
                            $http.post($config.ctx + '/bkContainer/addDefBkContainer', mfOrderId).success(function (data) {
                                if (data.success != undefined && data.success == true) {
                                    if(data.map.temp!=""){
                                        if (temp4 != data.map.temp) {
                                            GillionMsg.confirm("提示", "预配箱量与实际箱量不一致，确认是否保存？", function (btn) {
                                                if (btn) {
                                                    $scope.customUpdate();
                                                }
                                            })
                                        } else {
                                            $scope.customUpdate();
                                        }}else{
                                        $scope.customUpdate();
                                    }
                                }
                            })
                        }
                    } else {
                        $scope.customUpdate();
                    }
                }else{
                    $scope.customUpdate();
                }
            };
            $scope.getInformation=function(){
                $http.post($config.ctx + '/mfOrder/getInformation', $scope.mfOrder.unNo).success(function (data) {
                    if (data.success != undefined && data.success == true) {
                        $scope.mfOrder.hazardClass=data.mdHazardInformations[0].hazardClass;
                        $scope.mfOrder.hazardSubClass=data.mdHazardInformations[0].hazardSubClass;
                        $scope.mfOrder.dangerLabel=data.mdHazardInformations[0].dangerLabel;
                        $scope.mfOrder.flashPoint=data.mdHazardInformations[0].flashPoint;
                        $scope.mfOrder.emsNo=data.mdHazardInformations[0].emsNo;
                        $scope.mfOrder.hazardPackage=data.mdHazardInformations[0].hazardPackage;
                        $scope.mfOrder.isOceanPollution=data.mdHazardInformations[0].isOceanPollution;
                        $scope.mfOrder.dangerPage=data.mdHazardInformations[0].dangerPage;
                        $scope.mfOrder.transportName=data.mdHazardInformations[0].transportName;
                    }
                })
            }
            //TODO 自定义js函数
            /**
             * 监听复选框
             */
            $scope.$watch('mfOrder.isBulkyCargo', function(nvl, ovl) {
                if (nvl && nvl == 'N') {
                    $scope.mfOrder.length = '';
                    $scope.mfOrder.width = '';
                    $scope.mfOrder.height = '';
                }
            });
            $scope.$watch('mfOrder.isReefer', function(nvl, ovl) {
                if (nvl && nvl == 'N') {
                    $scope.mfOrder.temperatureUnit = '';
                    $scope.mfOrder.airVents = '';
                    $scope.mfOrder.setTemperature = '';
                    $scope.mfOrder.temperatureFrom = '';
                    $scope.mfOrder.temperatureTo = '';
                }
            });
            $scope.$watch('mfOrder.isHazard', function(nvl, ovl) {
                if (nvl && nvl == 'N') {
                    $scope.mfOrder.unNo = '';
                    $scope.mfOrder.transportName = '';
                    $scope.mfOrder.dangerPage = '';
                    $scope.mfOrder.transportName = '';
                    $scope.mfOrder.urgentContract = '';
                    $scope.mfOrder.hazardClass = '';
                    $scope.mfOrder.flashPoint = '';
                    $scope.mfOrder.urgentContractTel = '';
                    $scope.mfOrder.hazardSubClass = '';
                    $scope.mfOrder.emergencyMedicalAid = '';
                    $scope.mfOrder.urgentContractEmail = '';
                    $scope.mfOrder.hazardPackage = '';
                    $scope.mfOrder.dangerLabel = '';
                    $scope.mfOrder.emsNo = '';
                    $scope.mfOrder.isSupervision='N';
                    $scope.mfOrder.isDeclare='N';
                    $scope.mfOrder.isOceanPollution='N';

                }
            });

            //TODO 自定义js函数
            /**
             * 装货港带出
             */
            $scope.getPortOfLoading = function() {
                var param = {};
                var searchColumns = [];
                if($scope.mfOrder.portOfLoadingCode){
                    searchColumns.push({
                        propertyName:'portCode',
                        columnName:'PORT_CODE',
                        dataType:'S',
                        junction:'or',
                        value:$scope.mfOrder.portOfLoadingCode || "",
                        operation:'EQ'
                    });
                }
                param.searchColumns = searchColumns;
                var tip = layer.load(0, {shade: false});
                $http.get($config.ctx + '/mdPort/query',{params:param}).success(function(data){
                    layer.close(tip);
                    if (data.success != undefined && data.success == true  && data.mdPorts.length > 0) {
                        $scope.mfOrder.polPort5code=data.mdPorts[0].port5code;
                        $scope.mfOrder.polDescription=data.mdPorts[0].portName;
                        $scope.mfOrder.porDescription = data.mdPorts[0].portName;
                    }
                });
            };

            $scope.getPortOfLoadingFlag = true;
            $scope.$watch('mfOrder.portOfLoadingCode',function(portOfLoadingCode) {
                if (portOfLoadingCode) {
                    if ($scope.mfOrder.rowStatus == '4' && $scope.getPortOfLoadingFlag && Params.isCopyType != 'Y' &&  Params.isCopyAllType != 'Y'
                        && Params.isFreightType != 'Y' && Params.isCommissionType != 'Y') {
                        $scope.getPortOfLoading();
                        $scope.getPortOfLoadingFlag = false;
                    }
                }
            });

            //TODO 自定义js函数
            /**
             * 保存
             */
            $scope.saveOrUpdateCustom = function () {
                //$scope.willSaveInstance : 需要校验并保存的实例
                //第二个参数                     ： menuUrl
                $scope.bindTabProp('f0131ApiF01328Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01328Url) || {});
                $scope.mfOrder.tmOrderToMfOrders = $scope.f0131ApiF01328Scope.tmOrderToMfOrders;

                $scope.bindTabProp('f0131ApiF01324Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01324Url) || {});
                $scope.mfOrder.bkContainers = $scope.f0131ApiF01324Scope.bkContainers;

                $scope.mfOrder.mfCtnRequests = $scope.mfCtnRequests;
                DynamicRequires($scope.mfOrder, '/html/fms/mf/mfOrderAdd.html', function () {
                    $scope.cheackMfOrderBCEMblNo();
                }, function(){
                    $scope.F0131Api.selectTab(0);
                });
            };

            $scope.cheackMfOrderBCEMblNo = function () {
                var params = {};
                params.mfOrderId = $scope.mfOrder.mfOrderId;
                params.rowStatus = $scope.mfOrder.rowStatus;
                params.mblNo = $scope.mfOrder.mblNo;
                var tip = layer.load(0, $config.shadeConfig);
                $http.post($config.ctx + '/mfOrder/cheackMfOrderBCEMblNo', params).success(function(data) {
                    layer.close(tip);
                    if (data.success != undefined && data.success == true) {
                        if (data.existMblNoFlag) {
                            GillionMsg.confirm("提示",'MBL NO.已存在，是否继续?',function(btn) {
                                if (btn) {
                                    $scope.validCtn2Some();
                                }
                            });
                        } else {
                            $scope.validCtn2Some();
                        }
                    }
                });
            };


            $scope.validCtn2Some = function () {
                $scope.bindTabProp('f0131ApiF01328Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01328Url) || {});
                if ($scope.mfCtnRequests) {
                    var setCtn = [];
                    for (var i = 0; i < $scope.mfCtnRequests.length; i++) {
                        if ($scope.mfCtnRequests[i].containerSizeType) {
                            var flag = true;
                            for (var j = 0; j < setCtn.length; j++) {
                                if (setCtn[j].containerSizeType == $scope.mfCtnRequests[i].containerSizeType) {
                                    setCtn[j].num++;
                                    flag = false;
                                }
                                if (setCtn[j].num > 1) {
                                    GillionMsg.alert("提示", "预配箱存在相同箱型，不允许保存！");
                                    return;
                                }
                            }
                            if (flag) {
                                setCtn.unshift({containerSizeType: $scope.mfCtnRequests[i].containerSizeType, num: 1, ctn: $scope.mfCtnRequests[i].quantityOfCtn});
                            }
                        }
                    }
                    if ($scope.f0131ApiF01328Scope && $scope.f0131ApiF01328Scope.tmOrderToMfOrders && $scope.f0131ApiF01328Scope.tmOrderToMfOrders.length > 0) {
                        var msg = "";
                        var msg2 = "";
                        for (var k = 0; k < $scope.f0131ApiF01328Scope.tmOrderToMfOrders.length; k++) {
                            if ($scope.f0131ApiF01328Scope.tmOrderToMfOrders[k].tmOrderCtnRequestCopys &&
                                $scope.f0131ApiF01328Scope.tmOrderToMfOrders[k].tmOrderCtnRequestCopys.length) {
                                var setCtn1 = [];
                                for (var i = 0; i < $scope.f0131ApiF01328Scope.tmOrderToMfOrders[k].tmOrderCtnRequestCopys.length; i++) {
                                    if ($scope.f0131ApiF01328Scope.tmOrderToMfOrders[k].tmOrderCtnRequestCopys[i].containerSizeType &&
                                        $scope.f0131ApiF01328Scope.tmOrderToMfOrders[k].tmOrderCtnRequestCopys[i].rowStatus != 8) {
                                        var existFlag = false;
                                        var flag = true;
                                        for (var j = 0; j < setCtn1.length; j++) {
                                            if (setCtn1[j].containerSizeType == $scope.f0131ApiF01328Scope.tmOrderToMfOrders[k].tmOrderCtnRequestCopys[i].containerSizeType) {
                                                setCtn1[j].num++;
                                                flag = false;
                                            }
                                            if (setCtn1[j].num > 1) {
                                                GillionMsg.alert("提示","第"+ (k + 1) + "条拖车的预配箱存在相同箱型，不允许保存！");
                                                return ;
                                            }
                                        }
                                        if (flag) {
                                            setCtn1.unshift({containerSizeType: $scope.f0131ApiF01328Scope.tmOrderToMfOrders[k].tmOrderCtnRequestCopys[i].containerSizeType, num: 1,ctn
                                                :$scope.f0131ApiF01328Scope.tmOrderToMfOrders[k].tmOrderCtnRequestCopys[i].quantityOfCtn});
                                        }
                                        for (var j = 0; j < setCtn.length; j++) {
                                            if (setCtn[j].containerSizeType == $scope.f0131ApiF01328Scope.tmOrderToMfOrders[k].tmOrderCtnRequestCopys[i].containerSizeType) {
                                                existFlag = true;
                                                if (setCtn[j].ctn < $scope.f0131ApiF01328Scope.tmOrderToMfOrders[k].tmOrderCtnRequestCopys[i].quantityOfCtn) {
                                                    msg = msg + "第" + (k + 1) + "条拖车的箱量"
                                                        + $scope.f0131ApiF01328Scope.tmOrderToMfOrders[k].tmOrderCtnRequestCopys[i].containerSizeType + "箱型超过预配箱。";
                                                }
                                            }
                                        }
                                        if (!existFlag) {
                                            msg2 = msg2 + "第" + (k + 1) + "条拖车的预配箱不存在"
                                                + $scope.f0131ApiF01328Scope.tmOrderToMfOrders[k].tmOrderCtnRequestCopys[i].containerSizeType + "箱型，请调整拖车及计划箱量！"
                                        }
                                    }
                                }
                            }
                        }
                        if (msg != "") {
                            GillionMsg.alert("提示", msg);
                            return;
                        }
                        if (msg2 != "") {
                            GillionMsg.alert("提示", msg2);
                            return;
                        }
                    }
                }
                $scope.customUpdate();
            };

            //TODO 自定义js函数
            /**
             * 获取懒加载tab作用域
             */
            $scope.getTabsScope = function (tabName, tabUrl) {
                //$scope.f0131ApiF01322Scope = GillionTabService.invoke('收发通', $scope.f0131ApiF01322Url, "$scope", null) || {};
                //return GillionTabService.invoke(tabName, tabUrl, "$scope", null) || {};
                $scope.bindTabProp('customScope', $scope.F0131Api.getTabIframeScope(tabUrl) || {});
                if($scope.customScope){
                    return $scope.customScope;
                }
            }

            //TODO 自定义js函数
            /**
             * 发送EDI
             */
            $scope.sendEdi = function(){
                var url = "/html/fms/edi/mfOrderEDITypeManage.html";

                var openType = "2";
                if (url.indexOf("?")>=0){
                    url = url + "&openType=" + openType;
                } else {
                    url = url + "?openType=" + openType;
                }
                var mfOrderId = $scope.mfOrder.mfOrderId || "";
                url = url + "&mfOrderId="+mfOrderId;
                var ediGroup = Params.ediGroup || "";
                url = url + "&ediGroup="+ediGroup;
                var options = {
                    title : '发送EDI' ,
                    closable : true ,
                    modal : true ,
                    url : url ,
                    width:900,
                    height:500
                };
                var indexScope = top.angular.element("body").scope();
                indexScope.showUrl(options);
            };

            //TODO 自定义js函数
            /**
             * 收货人复制到通知人
             */
            $scope.consignee2Notify = function() {
                $scope.bindTabProp('f0131ApiF01322Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01322Url) || {});
                if ($scope.f0131ApiF01322Scope && $scope.f0131ApiF01322Scope.consignee2Notify) $scope.f0131ApiF01322Scope.consignee2Notify();
            };

            //TODO 自定义js函数
            /**
             * 刷新
             */
            $scope.mfOrderCopy = angular.copy($scope.mfOrder);
            $scope.refresh = function (hideFlag) {
                if ($scope.mfOrder.mfOrderId == undefined || $scope.mfOrder.mfOrderId == null
                    || $scope.mfOrder.mfOrderId == '') {
                    $scope.mfOrder = {};
                    $scope.getPortOfLoadingFlag = true;
                    $scope.mfOrder.portOfLoadingCode = $scope.mfOrderCopy.portOfLoadingCode;
                    $scope.mfOrder = angular.copy($scope.mfOrderCopy);
                    $scope.mfOperationRequire.customerRequire = '';
                    $scope.mfOperationRequire.shipownerRequire = '';
                    $scope.mfOperationRequire = {};
                }
                $scope.initialize(hideFlag);
                $scope.mfCtnRequests = [];
                $scope.queryMfCtnRequest();
                $scope.mfMultiVessels = [];
                $scope.queryMfMultiVessel();
                $scope.bindTabProp('f0131ApiF01322Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01322Url) || {});
                if ($scope.f0131ApiF01322Scope && $scope.f0131ApiF01322Scope.refreshMfOrderExtend) {
                    $scope.f0131ApiF01322Scope.refreshMfOrderExtend();
                    $scope.f0131ApiF01322Scope.mfOrder = $scope.mfOrder;
                }
                $scope.bindTabProp('f0131ApiF01323Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01323Url) || {});
                $scope.bindTabProp('f0131ApiF01324Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01324Url) || {});
                $scope.bindTabProp('f0131ApiF01328Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01328Url) || {});
                $scope.bindTabProp('f0131ApiF013210Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF013210Url) || {});
                $scope.bindTabProp('f0131ApiF013211Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF013211Url) || {});
                $scope.bindTabProp('f0131ApiF01325Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01325Url) || {});
                $scope.bindTabProp('f0131ApiF01326Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF01326Url) || {});

                $scope.bindTabProp('f0131ApiF013213Scope', $scope.F0131Api.getTabIframeScope($scope.f0131ApiF013213Url) || {});
                if ($scope.f0131ApiF013213Scope && $scope.f0131ApiF013213Scope.getMsgOrderStatus) {
                    $scope.f0131ApiF013213Scope.ctnList = [];
                    $scope.f0131ApiF013213Scope.getMsgOrderStatus();
                }
                if ($scope.f0131ApiF01326Scope && $scope.f0131ApiF01326Scope.getMdAttachAccessoriesPages) {
                    $scope.f0131ApiF01326Scope.getMdAttachAccessoriesPages();
                }

                if ($scope.f0131ApiF01323Scope && $scope.f0131ApiF01323Scope.queryMfBookingCargo) {
                    $scope.f0131ApiF01323Scope.mfBookingCargos = [];
                    $scope.f0131ApiF01323Scope.queryMfBookingCargo();
                    $scope.f0131ApiF01323Scope.mfOrder = $scope.mfOrder;
                }
                if ($scope.f0131ApiF01324Scope && $scope.f0131ApiF01324Scope.queryBkContainer) {
                    $scope.f0131ApiF01324Scope.bkContainers = [];
                    $scope.f0131ApiF01324Scope.queryBkContainer();
                    $scope.f0131ApiF01324Scope.mfOrder = $scope.mfOrder;
                }
                if ($scope.f0131ApiF01328Scope && $scope.f0131ApiF01328Scope.getTmOrderToMfOrderPages) {
                    $scope.f0131ApiF01328Scope.tmOrderToMfOrder ={};
                    $scope.f0131ApiF01328Scope.getTmOrderToMfOrderPages();
                    $scope.f0131ApiF01328Scope.mfOrder = $scope.mfOrder;
                }
                if ($scope.f0131ApiF01328Scope  && $scope.f0131ApiF01328Scope.queryTmOrderCtnRequestCopy) {
                    $scope.f0131ApiF01328Scope.tmOrderCtnRequestCopys =[];
                    $scope.f0131ApiF01328Scope.queryTmOrderCtnRequestCopy();
                }
                if ($scope.f0131ApiF013210Scope && $scope.f0131ApiF013210Scope.getCiOrderPages)
                    $scope.f0131ApiF013210Scope.getCiOrderPages();
                if ($scope.f0131ApiF013212Scope && $scope.f0131ApiF013212Scope.getImOrderPages)
                    $scope.f0131ApiF013212Scope.getImOrderPages();
                if ($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.getArBcFreightPages)
                    $scope.f0131ApiF01325Scope.getArBcFreightPages();
                if ($scope.getArBcFreightPages)
                    $scope.getArBcFreightPages();
                if ($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.getApBcFreightPages)
                    $scope.f0131ApiF01325Scope.getApBcFreightPages();
                if ($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.isEnEditById){
                    $scope.f0131ApiF01325Scope.isEnEditById($scope.mfOrder.mfOrderId);
                }
                if ($scope.getApBcFreightPages)
                    $scope.getApBcFreightPages();
                if ($scope.f0131ApiF01325Scope && $scope.f0131ApiF01325Scope.getVbcFreightStatisticsPages)
                    $scope.f0131ApiF01325Scope.getVbcFreightStatisticsPages();
                if ($scope.getVbcFreightStatisticsPages)
                    $scope.getVbcFreightStatisticsPages();
            };

            //TODO 自定义js函数
            /**
             * 订舱回执
             */
            $scope.ediManifestIn = function(){
                var url = "/html/fms/edi/ediManifestInManage.html";

                var openType = "2";
                if (url.indexOf("?")>=0){
                    url = url + "&openType=" + openType;
                } else {
                    url = url + "?openType=" + openType;
                }
                var bookingNo = $scope.mfOrder.bookingNo || "";
                url = url + "&bookingNo="+bookingNo +"&isMF";

                var options = {
                    title : '订舱回执' ,
                    closable : true ,
                    modal : true ,
                    url : url ,
                    width :900,
                    height:500
                };
                var indexScope = top.angular.element("body").scope();
                indexScope.showUrl(options);
            };

            //TODO 自定义js函数
            /**
             * 自动赋值要求
             */
            //自动赋值要求
            $scope.$watch('mfOrder.customerRequire',function(nval, oval){
                if (nval != undefined && nval != '' && oval != nval) {
                    $scope.mfOperationRequire.customerRequire = nval;
                };
            });
            $scope.$watch('mfOrder.shipownerRequire',function(nval, oval){
                if (nval != undefined && nval != '' && oval != nval) {
                    $scope.mfOperationRequire.shipownerRequire = nval;
                };
            });

            $scope.getPro = function(nval){
                var mfOrderId = nval;
                $http.post($config.ctx + '/mfOrder/getPro',mfOrderId).success(function (data) {
                    if (data.success != undefined && data.success == true) {
                        $scope.mfOrder.isDetainCargo = data.outVal;
                    }
                });
            }
            //TODO 自定义js函数
            /**
             * 扣货
             */
            $scope.detainCargo = function(){
                GillionMsg.confirm(null,'确认扣货?',function(btn) {
                    if (btn) {
                        var param = {};
                        var mfOrderId = $scope.mfOrder.mfOrderId;
                        param.mfOrderId= mfOrderId;
                        param.ruleNo="mfOrderDetainCargoStrategy";
                        RuleService.executeRule($scope,param,null,"POST");
                    }
                });
            };

            //TODO 自定义js函数
            /**
             * 修改箱公司
             */
            $scope.changeCtnCompanyName = function (){
                if($scope.mfCtnRequests){
                    var ctnCompanyName = $scope.mfOrder.secondCarrierName;
                    var ctnCompanyCode = $scope.mfOrder.secondCarrierCode;
                    var memonicNo = $scope.mfOrder.memonicNo;
                    for(var i=0;i<$scope.mfCtnRequests.length; i++){
                        if($scope.mfCtnRequests[i].isSoc=='N') {
                            $scope.mfCtnRequests[i].ctnCompanyName = ctnCompanyName;
                            $scope.mfCtnRequests[i].ctnCompanyCode = ctnCompanyCode;
                            $scope.mfCtnRequests[i].memonicNo = memonicNo;
                            if ($scope.mfCtnRequests[i].rowStatus != '4') {
                                $scope.mfCtnRequests[i].rowStatus = '16';
                            }
                        }
                    }
                    $scope.mfCtnRequestGrid._render();
                    if ($scope.mfCtnRequestDataSource)
                        $dataSourceManager.$rootScope.$broadcast("MfCtnRequestSource", $scope.mfCtnRequestDataSource);


                }
            }
            $scope.$watch('mfOrder.memonicNo',function() {
                $scope.changeCtnCompanyName();
            });
            $scope.taskName= Params.taskName;
            $scope.handleStatus = Params.handleStatus;

            //TODO 自定义js函数
            /**
             * 取消扣货
             */
            $scope.cancleDetainCargo = function(){
                GillionMsg.confirm(null,'确认取消扣货?',function(btn) {
                    if (btn) {
                        var param = {};
                        var mfOrderId = $scope.mfOrder.mfOrderId;
                        param.mfOrderId= mfOrderId;
                        param.ruleNo="mfOrderCancleDetainCargoStrategy";
                        RuleService.executeRule($scope,param,null,"POST");
                    }
                });
            };

            //TODO 自定义js函数
            /**
             * 复制
             */
            $scope.copyMFE = function() {
                if ($scope.mfOrder.rowStatus && $scope.mfOrder.rowStatus != '4') {
                    var url = "/html/fms/mf/mfOrderAdd.html?openType=1&isCopyType=Y&copyOrderId=" + $scope.mfOrder.mfOrderId;
                    var resource = {
                        sysResourceId : 'c46b6b4192324e11a4cfccc310ccb860',
                        urlTitle:'海运出口制作',url:url};
                    var indexScope = top.angular.element("body").scope();
                    indexScope.addTab(resource);indexScope.$apply();
                }};
            $scope.copyInitialize = function() {
                var param = {mfOrderId : Params.copyOrderId,cascade : true};var tip = layer.load(0, {shade: false});
                $http.get($config.ctx + '/mfOrder/getMfOrder',{params:param}).success(function(data){
                    layer.close(tip);
                    if (data.success != undefined && data.success == true) {
                        data.mfOrder.csCode = $scope.mfOrder.csCode;data.mfOrder.csName = $scope.mfOrder.csName;
                        $scope.mfOrder.isShutOffLoad = 'N';
                        $scope.mfOrder = data.mfOrder;$scope.mfOrder.rowStatus = '4';$scope.mfOrder.orderStatus = 'NW';
                        $scope.mfOrder.documentLockStatus = 'UL';$scope.mfOrder.isCfmBill = 'N';$scope.mfOrder.isExistHbl = 'N';
                        $scope.mfOrder.isEir = 'N';$scope.mfOrder.isCleanClearance = 'N';$scope.mfOrder.isClearance = 'N';
                        if(data.mfOrder.mfOrderExtends)$scope.mfOrderExtend = data.mfOrder.mfOrderExtends;
                        if(data.mfOrder.mfOperationRequires)$scope.mfOperationRequire = data.mfOrder.mfOperationRequires;
                        $scope.mfOrder.goOrderId = null;$scope.mfOrder.mfOrderId = null;$scope.mfOrder.jobNo = null;
                        var columns = ['bookingProtocolNo','mblNo','hblNo','customerBusinessNo','vesselName','vesselCode','isReleaseCtn',
                            'voyage','etd','firstPortAreaName','firstPortAreaCode','shippingAgencyName','shippingAgencyCode','isOperableBill',
                            'realVesselName','realVesselCode', 'realEtd', 'preSecondVesselName', 'preSecondVesselCode', 'preSecondVoyage',
                            'preSecondVesselEtd', 'portAreaName', 'portAreaCode', 'largeShippingAgencyCode','isShutOffLoad',
                            'largeShippingAgencyName', 'preSecondVesselEta', 'requireSecondEtd', 'noOfPackage', 'grossWeight', 'netWeight','bookingNo',
                            'chargingWeight', 'cube', 'contractNo', 'warehouseCode', 'warehouseName', 'cartridgeNo', 'freeOfDetention','isDetainCargo',
                            'freeStorage', 'customsClearanceSceneCode','feeRemarks',
                            'docCode', 'docName', 'dispatcherName', 'dispatcherCode' ,'inspectionerCode', 'inspectionerName', 'inspectionSceneCode','terminalPotCode',
                            'inspectionSceneName', 'customsDeclarationCode', 'customsDeclarationName', 'customsClearanceSceneName','opCode','opName','creator','paymentMode','paymentPlace','paymentPlaceCode','masterMblNo','isPacking'];
                        for (var i=0; i<columns.length; i++){$scope.mfOrder[columns[i]] = '';}
                        $scope.mfOrder.loadKind = 'FCL';$scope.mfOrder.bookingType = 'BK';$scope.mfOrder.isOrderCfm = 'N';
                        $scope.mfOrderExtend.mfOrderExtendId = ''; $scope.mfOrderExtend.mfOrderId = '';$scope.mfOrderExtend.isSendRealCsn = 'N';$scope.mfOrderExtend.rowStatus = '4';
                        $scope.mfOperationRequire.mfOperationRequireId = ''; $scope.mfOperationRequire.mfOrderId = '';$scope.mfOperationRequire.rowStatus = '4';
                        /*$scope.mfBookingCargos.splice(0,$scope.mfBookingCargos.length);
                        if(data.mfOrder.mfBookingCargos) {
                            for (var i=0; i< data.mfOrder.mfBookingCargos.length; i++) {
                                data.mfOrder.mfBookingCargos[i].mfBookingCargoId = $scope.newMfBookingCargoGridId++;data.mfOrder.mfBookingCargos[i].rowStatus = '4';
                                data.mfOrder.mfBookingCargos[i].mfOrderId = '';data.mfOrder.mfBookingCargos[i].noOfPackage = '';
                                data.mfOrder.mfBookingCargos[i].grossWeight = '';data.mfOrder.mfBookingCargos[i].netWeight = '';data.mfOrder.mfBookingCargos[i].cube = '';
                            } Arrays.pushAll(data.mfOrder.mfBookingCargos, $scope.mfBookingCargos);
                        }*/
                        $http.post($config.ctx + '/defaultValue/getIsDutyFree',data.mfOrder.subBusinessCode).success(function(data) {
                            if (data.success != undefined && data.success == true) {
                                $scope.mfOrder.isDutyFree = data.mdSubBusiness.isDutyFree;
                                $scope.mfOrder.subBusinessType = data.mdSubBusiness.subBusinessName;
                                $scope.mfOrder.bindingInterface = data.mdSubBusiness.bindingInterface;
                                $scope.mfOrder.businessType = data.mdSubBusiness.businessType;
                            }
                        });
                    }});
            };
//generatorBoExportAndImportJs haveOrGenTabPage: page:add boName:MfOrder




            $scope.commissionInitialize = function() {
                var param = {mfOrderId : Params.copyOrderId,cascade : true};var tip = layer.load(0, {shade: false});
                $http.get($config.ctx + '/mfOrder/getMfOrder',{params:param}).success(function(data){
                    if (data.success != undefined && data.success == true) {
                        layer.close(tip);
                        data.mfOrder.csCode = $scope.mfOrder.csCode;data.mfOrder.csName = $scope.mfOrder.csName;
                        $scope.mfOrder.isShutOffLoad = 'N';
                        $scope.mfOrder = data.mfOrder;$scope.mfOrder.rowStatus = '4';$scope.mfOrder.orderStatus = 'NW';
                        $scope.mfOrder.documentLockStatus = 'UL';$scope.mfOrder.isCfmBill = 'N';$scope.mfOrder.isExistHbl = 'N';
                        $scope.mfOrder.isEir = 'N';$scope.mfOrder.isCleanClearance = 'N';$scope.mfOrder.isClearance = 'N';
                        if(data.mfOrder.mfOrderExtends)$scope.mfOrderExtend = data.mfOrder.mfOrderExtends;
                        if(data.mfOrder.mfOperationRequires)$scope.mfOperationRequire = data.mfOrder.mfOperationRequires;
                        $scope.mfOrder.goOrderId = null;$scope.mfOrder.mfOrderId = null;
                        var columns = ['isReleaseCtn','isOperableBill','masterMblNo','isPacking','realVesselName','realVesselCode', 'realEtd',
                            'isShutOffLoad', 'netWeight', 'chargingWeight', 'warehouseCode', 'warehouseName', 'freeOfDetention','isDetainCargo',
                            'freeStorage', 'customsClearanceSceneCode','salesCode','salesName','canvassionDepartmentCode','canvassionDepartment',
                            'docCode', 'docName', 'dispatcherName', 'dispatcherCode' ,'inspectionerCode', 'inspectionerName', 'inspectionSceneCode',
                            'inspectionSceneName', 'customsDeclarationCode', 'customsDeclarationName', 'customsClearanceSceneName','opCode','opName','creator'];
                        $scope.mfOrder.isBooking = 'N';$scope.mfOrder.isTruck = 'N';$scope.mfOrder.isCustomsClearance = 'N';$scope.mfOrder.isInbuilt = 'N';$scope.mfOrder.isInspection = 'N';
                        $scope.mfOrder.isHbl = 'N';$scope.mfOrder.isFumigation = 'N';$scope.mfOrder.isWarehouse = 'N';$scope.mfOrder.isInsurance = 'N';
                        for (var i=0; i<columns.length; i++){$scope.mfOrder[columns[i]] = '';}
                        $scope.mfOrder.loadKind = 'FCL';$scope.mfOrder.bookingType = 'BK';$scope.mfOrder.isOrderCfm = 'N';
                        $scope.mfOrderExtend.mfOrderExtendId = ''; $scope.mfOrderExtend.mfOrderId = '';$scope.mfOrderExtend.rowStatus = '4';
                        $scope.mfOperationRequire.mfOperationRequireId = ''; $scope.mfOperationRequire.mfOrderId = '';$scope.mfOperationRequire.rowStatus = '4';
                        $scope.mfCtnRequests.splice(0,$scope.mfCtnRequests.length);
                        $scope.mfOrder.attribute2 = Params.msgTodoTaskId;
                        var param2 = {msgTodoDecompositionId : Params.msgTodoDecompositionId,consignorCode : $scope.mfOrder.consignorCode};
                        $http.get($config.ctx + '/mfOrder/getCompanyCommission',{params:param2}).success(function(data) {
                            if (data.success != undefined && data.success == true) {
                                console.log(data);
                                $scope.mfOrder.isBooking = data.results["companyCommission"].isBooking;
                                $scope.mfOrder.isTruck = data.results["companyCommission"].isTruck;
                                $scope.mfOrder.isCustomsClearance = data.results["companyCommission"].isCustomsClearance;
                                $scope.mfOrder.isInspection = data.results["companyCommission"].isInspection;
                                $scope.mfOrder.isHbl = data.results["companyCommission"].isHbl;
                                $scope.mfOrder.isWarehouse = data.results["companyCommission"].isWarehouse;
                                $scope.mfOrder.isInsurance = data.results["companyCommission"].isInsurance;
                                $scope.mfOrder.consignorName = data.results["csCust"].custNameCn;
                                $scope.mfOrder.consignorCode = data.results["csCust"].custCode;
                            }
                        });
                        if(data.mfOrder.mfCtnRequests) {
                            for (var i=0; i< data.mfOrder.mfCtnRequests.length; i++) {
                                data.mfOrder.mfCtnRequests[i].mfCtnRequestId = $scope.newMfCtnRequestGridId++;
                                data.mfOrder.mfCtnRequests[i].rowStatus = '4';
                                data.mfOrder.mfCtnRequests[i].mfOrderId = '';
                            } Arrays.pushAll(data.mfOrder.mfCtnRequests, $scope.mfCtnRequests);
                        }
                    }});
            };




            /**
             * 提单就绪
             */
            $scope.readyGeneralOrderQuery = function() {
                var tip = layer.load(0, {shade: false});
                $http.post($config.ctx + '/mfDocument/ready4Order',$scope.mfOrder.mfOrderId).success(function(data){
                    layer.close(tip);
                    if (data.success != undefined && data.success == true) {
                        GillionMsg.alert("提示", data.msg);
                    }
                });
            };

            /**
             * 客户提单确认
             */
            $scope.confirmBlGeneralOrderQuery = function() {
                var tip = layer.load(0, {shade: false});
                $http.post($config.ctx + '/generalOrderQuery/confirmBl',$scope.mfOrder.mfOrderId).success(function(data){
                    layer.close(tip);
                    if (data.success != undefined && data.success == true) {
                        GillionMsg.alert("提示", data.msg);
                    }
                });
            };

            /**
             * 插入状态
             */
            $scope.insertOrderStatusGeneralOrderQuery = function() {
                var url = "/html/fms/mf/msgStatusAllowInsertManage.html";
                var openType = "2";
                if (url.indexOf("?") >= 0) {
                    url = url + "&openType=" + openType;
                } else {
                    url = url + "?openType=" + openType;
                }
                url = url + "&mfOrderId=" + $scope.mfOrder.mfOrderId;
                var options = {
                    title : '插入状态',
                    closable : true,
                    modal : true,
                    url : url,
                    width : 900,
                    height : 550
                };
                var indexScope = top.angular.element("body").scope();
                indexScope.showUrl(options);
            };



            /**generatorFormColumnDefaultValueJS **/
            //initDefaultValue
            $scope.initDefaultValue = function(){
                var param =[
                    {ut:'11',ivt:'14',dv:'',field:'MfOrder_placeOfReceipt',boName:'MfOrder'}
                    ,{ut:'1',ivt:'15',dv:'',field:'MfOrder_placeOfReceiptCode',boName:'MfOrder'}
                    ,{ut:'11',ivt:'14',dv:'',field:'MfOrder_portOfLoading',boName:'MfOrder'}
                    ,{ut:'1',ivt:'15',dv:'',field:'MfOrder_portOfLoadingCode',boName:'MfOrder'}
                    ,{ut:'11',ivt:'0',dv:'',field:'MfOrder_csName',boName:'MfOrder'}
                    ,{ut:'1',ivt:'6',dv:'',field:'MfOrder_csCode',boName:'MfOrder'}
                ];
                $scope.$$defaultValue = {};
                if(param.length > 0){
                    $http.post($config.ctx + '/defaultValue/getDefaultValue',param).success(function(data){
                        if (data.success != undefined && data.success == true) {
                            if(data.defaultValueInfos != undefined && data.defaultValueInfos != null){
                                var MfOrder_placeOfReceiptArr = data.defaultValueInfos["MfOrder_placeOfReceipt"].split(":");
                                $scope.$$defaultValue.mfOrder_placeOfReceiptCode=data.defaultValueInfos["MfOrder_placeOfReceiptCode"];
                                $scope.$$defaultValue.mfOrder_placeOfReceipt = MfOrder_placeOfReceiptArr[0];
                                var MfOrder_portOfLoadingArr = data.defaultValueInfos["MfOrder_portOfLoading"].split(":");
                                $scope.$$defaultValue.mfOrder_portOfLoadingCode=data.defaultValueInfos["MfOrder_portOfLoadingCode"];
                                $scope.$$defaultValue.mfOrder_portOfLoading = MfOrder_portOfLoadingArr[0];
                                var MfOrder_csNameArr = data.defaultValueInfos["MfOrder_csName"].split(":");
                                $scope.$$defaultValue.mfOrder_csCode=data.defaultValueInfos["MfOrder_csCode"];
                                $scope.$$defaultValue.mfOrder_csName = MfOrder_csNameArr[0];
                                if($scope.defaultValueCallBack) $scope.defaultValueCallBack();
                                if($scope._pageState) $scope._pageState.resetDataState();
                            }
                        }
                    });
                }
            };
            $scope.defaultValueCallBack = function(){
                $scope.mfOrder.placeOfReceiptCode=$scope.$$defaultValue.mfOrder_placeOfReceiptCode;
                $scope.mfOrder.placeOfReceipt = $scope.$$defaultValue.mfOrder_placeOfReceipt;
                $scope.mfOrder.portOfLoadingCode=$scope.$$defaultValue.mfOrder_portOfLoadingCode;
                $scope.mfOrder.portOfLoading = $scope.$$defaultValue.mfOrder_portOfLoading;
                $scope.mfOrder.csCode=$scope.$$defaultValue.mfOrder_csCode;
                $scope.mfOrder.csName = $scope.$$defaultValue.mfOrder_csName;
            };
            $scope.initGridNoDefaultValue = function(flag,filterPro,func){
                var param =[
                ];
                //过滤参数
                if(flag && flag=="add"){
                    var girdParam = [];
                    angular.forEach(param,function(data,index){
                        if(filterPro  && (data.ivt=="-1" || data.ivt=="-2") && data.boName == filterPro){
                            girdParam.push(data);
                        }
                    });
                    param = girdParam;
                }

                if(param.length > 0){
                    $http.post($config.ctx + '/defaultValue/getDefaultValue',param).success(function(data){
                        if (data.success != undefined && data.success == true) {
                            if(data.defaultValueInfos != undefined && data.defaultValueInfos != null){
                                if($scope._pageState) $scope._pageState.resetDataState();
                            }
                        }

                        if(func)
                            func();
                    });
                }
                else{
                    func();
                }
            }

            $scope.$$gridDefaultValue = {};

            //TODO boName:MfOrder
            $scope.initGridDefaultValue = function(){
                var param =[
                    {ut:'11',ivt:'12',dv:'',field:'MfOrder_settleOffice',boName:'MfOrder'},
                    {ut:'11',ivt:'12',dv:'',field:'MfBookingCargo_settleOffice',boName:'MfBookingCargo'}
                    ,{ut:'11',ivt:'11',dv:'',field:'MfBookingCargo_settleOfficeName',boName:'MfBookingCargo'}
                    ,{ut:'1',ivt:'12',dv:'',field:'MfBookingCargo_settleOffice',boName:'MfBookingCargo'}
                    ,{ut:'11',ivt:'11',dv:'',field:'BkContainer_settleOfficeName',boName:'BkContainer'}
                    ,{ut:'1',ivt:'12',dv:'',field:'BkContainer_settleOffice',boName:'BkContainer'}
                    ,{ut:'11',ivt:'12',dv:'',field:'BkContainer_settleOffice',boName:'BkContainer'}
                    ,{ut:'05',ivt:'1',dv:'',field:'BkContainer_vgmVerifyDate',boName:'BkContainer'}
                    ,{ut:'11',ivt:'12',dv:'',field:'MfContainer2Cargo_settleOffice',boName:'MfContainer2Cargo'}
                    ,{ut:'11',ivt:'11',dv:'',field:'MfContainer2Cargo_settleOfficeName',boName:'MfContainer2Cargo'}
                    ,{ut:'1',ivt:'12',dv:'',field:'MfContainer2Cargo_settleOffice',boName:'MfContainer2Cargo'}
                    ,{ut:'11',ivt:'11',dv:'',field:'ArBcFreight_settleOfficeName',boName:'ArBcFreight'}
                    ,{ut:'1',ivt:'12',dv:'',field:'ArBcFreight_settleOffice',boName:'ArBcFreight'}
                    ,{ut:'01',ivt:'6',dv:'',field:'ArBcFreight_creator',boName:'ArBcFreight'}
                    ,{ut:'01',ivt:'12',dv:'',field:'ArBcFreight_settleOffice',boName:'ArBcFreight'}
                    ,{ut:'05',ivt:'1',dv:'',field:'ArBcFreight_createTime',boName:'ArBcFreight'}
                    ,{ut:'01',ivt:'0',dv:'',field:'ArBcFreight_uploadingPersonName',boName:'ArBcFreight'}
                    ,{ut:'01',ivt:'8',dv:'',field:'ArBcFreight_createOffice',boName:'ArBcFreight'}
                    ,{ut:'05',ivt:'1',dv:'',field:'ApBcFreight_createTime',boName:'ApBcFreight'}
                    ,{ut:'01',ivt:'6',dv:'',field:'ApBcFreight_creator',boName:'ApBcFreight'}
                    ,{ut:'01',ivt:'13',dv:'',field:'ApBcFreight_baseCurrencyCode',boName:'ApBcFreight'}
                    ,{ut:'01',ivt:'8',dv:'',field:'ApBcFreight_createOffice',boName:'ApBcFreight'}
                    ,{ut:'01',ivt:'11',dv:'',field:'ApBcFreight_settleOfficeName',boName:'ApBcFreight'}
                    ,{ut:'01',ivt:'12',dv:'',field:'ApBcFreight_settleOffice',boName:'ApBcFreight'}
                    ,{ut:'11',ivt:'11',dv:'',field:'ArBcFreight_settleOfficeName',boName:'ArBcFreight'}
                    ,{ut:'1',ivt:'12',dv:'',field:'ArBcFreight_settleOffice',boName:'ArBcFreight'}
                    ,{ut:'01',ivt:'6',dv:'',field:'ArBcFreight_creator',boName:'ArBcFreight'}
                    ,{ut:'01',ivt:'12',dv:'',field:'ArBcFreight_settleOffice',boName:'ArBcFreight'}
                    ,{ut:'05',ivt:'1',dv:'',field:'ArBcFreight_createTime',boName:'ArBcFreight'}
                    ,{ut:'01',ivt:'0',dv:'',field:'ArBcFreight_uploadingPersonName',boName:'ArBcFreight'}
                    ,{ut:'01',ivt:'8',dv:'',field:'ArBcFreight_createOffice',boName:'ArBcFreight'}
                    ,{ut:'05',ivt:'1',dv:'',field:'ApBcFreight_createTime',boName:'ApBcFreight'}
                    ,{ut:'01',ivt:'6',dv:'',field:'ApBcFreight_creator',boName:'ApBcFreight'}
                    ,{ut:'01',ivt:'13',dv:'',field:'ApBcFreight_baseCurrencyCode',boName:'ApBcFreight'}
                    ,{ut:'01',ivt:'8',dv:'',field:'ApBcFreight_createOffice',boName:'ApBcFreight'}
                    ,{ut:'01',ivt:'11',dv:'',field:'ApBcFreight_settleOfficeName',boName:'ApBcFreight'}
                    ,{ut:'01',ivt:'12',dv:'',field:'ApBcFreight_settleOffice',boName:'ApBcFreight'}
                    ,{ut:'11',ivt:'12',dv:'',field:'TmOrderToMfOrder_settleOffice',boName:'TmOrderToMfOrder'}
                    ,{ut:'11',ivt:'11',dv:'',field:'TmOrderToMfOrder_settleOfficeName',boName:'TmOrderToMfOrder'}
                    ,{ut:'1',ivt:'12',dv:'',field:'TmOrderToMfOrder_settleOffice',boName:'TmOrderToMfOrder'}
                ];

                if(param.length > 0){
                    $http.post($config.ctx + '/defaultValue/getDefaultValue',param).success(function(data){
                        if (data.success != undefined && data.success == true) {
                            if(data.defaultValueInfos != undefined && data.defaultValueInfos != null){
                                var MfOrder_settleOfficeArr = data.defaultValueInfos["MfOrder_settleOffice"].split(":");
                                $scope.$$gridDefaultValue.mfOrder_settleOffice = MfOrder_settleOfficeArr[0];
                                if ($scope.mfOrder) $scope.mfOrder.settleOffice = $scope.$$gridDefaultValue.mfOrder_settleOffice;
                                var MfBookingCargo_settleOfficeArr = data.defaultValueInfos["MfBookingCargo_settleOffice"].split(":");
                                $scope.$$gridDefaultValue.mfBookingCargo_settleOffice = MfBookingCargo_settleOfficeArr[0];
                                var MfBookingCargo_settleOfficeNameArr = data.defaultValueInfos["MfBookingCargo_settleOfficeName"].split(":");
                                $scope.$$gridDefaultValue.mfBookingCargo_settleOffice=data.defaultValueInfos["MfBookingCargo_settleOffice"];
                                $scope.$$gridDefaultValue.mfBookingCargo_settleOfficeName = MfBookingCargo_settleOfficeNameArr[0];
                                var BkContainer_settleOfficeNameArr = data.defaultValueInfos["BkContainer_settleOfficeName"].split(":");
                                $scope.$$gridDefaultValue.bkContainer_settleOffice=data.defaultValueInfos["BkContainer_settleOffice"];
                                $scope.$$gridDefaultValue.bkContainer_settleOfficeName = BkContainer_settleOfficeNameArr[0];
                                var BkContainer_settleOfficeArr = data.defaultValueInfos["BkContainer_settleOffice"].split(":");
                                $scope.$$gridDefaultValue.bkContainer_settleOffice = BkContainer_settleOfficeArr[0];
                                $scope.$$gridDefaultValue.bkContainer_vgmVerifyDate = data.defaultValueInfos["BkContainer_vgmVerifyDate"];
                                var MfContainer2Cargo_settleOfficeArr = data.defaultValueInfos["MfContainer2Cargo_settleOffice"].split(":");
                                $scope.$$gridDefaultValue.mfContainer2Cargo_settleOffice = MfContainer2Cargo_settleOfficeArr[0];
                                var MfContainer2Cargo_settleOfficeNameArr = data.defaultValueInfos["MfContainer2Cargo_settleOfficeName"].split(":");
                                $scope.$$gridDefaultValue.mfContainer2Cargo_settleOffice=data.defaultValueInfos["MfContainer2Cargo_settleOffice"];
                                $scope.$$gridDefaultValue.mfContainer2Cargo_settleOfficeName = MfContainer2Cargo_settleOfficeNameArr[0];
                                var ArBcFreight_settleOfficeNameArr = data.defaultValueInfos["ArBcFreight_settleOfficeName"].split(":");
                                $scope.$$gridDefaultValue.arBcFreight_settleOffice=data.defaultValueInfos["ArBcFreight_settleOffice"];
                                $scope.$$gridDefaultValue.arBcFreight_settleOfficeName = ArBcFreight_settleOfficeNameArr[0];
                                $scope.$$gridDefaultValue.arBcFreight_creator = data.defaultValueInfos["ArBcFreight_creator"];
                                $scope.$$gridDefaultValue.arBcFreight_settleOffice = data.defaultValueInfos["ArBcFreight_settleOffice"];
                                $scope.$$gridDefaultValue.arBcFreight_createTime = data.defaultValueInfos["ArBcFreight_createTime"];
                                $scope.$$gridDefaultValue.arBcFreight_uploadingPersonName = data.defaultValueInfos["ArBcFreight_uploadingPersonName"];
                                $scope.$$gridDefaultValue.arBcFreight_createOffice = data.defaultValueInfos["ArBcFreight_createOffice"];
                                $scope.$$gridDefaultValue.apBcFreight_createTime = data.defaultValueInfos["ApBcFreight_createTime"];
                                $scope.$$gridDefaultValue.apBcFreight_creator = data.defaultValueInfos["ApBcFreight_creator"];
                                $scope.$$gridDefaultValue.apBcFreight_baseCurrencyCode = data.defaultValueInfos["ApBcFreight_baseCurrencyCode"];
                                $scope.$$gridDefaultValue.apBcFreight_createOffice = data.defaultValueInfos["ApBcFreight_createOffice"];
                                $scope.$$gridDefaultValue.apBcFreight_settleOfficeName = data.defaultValueInfos["ApBcFreight_settleOfficeName"];
                                $scope.$$gridDefaultValue.apBcFreight_settleOffice = data.defaultValueInfos["ApBcFreight_settleOffice"];
                                var ArBcFreight_settleOfficeNameArr = data.defaultValueInfos["ArBcFreight_settleOfficeName"].split(":");
                                $scope.$$gridDefaultValue.arBcFreight_settleOffice=data.defaultValueInfos["ArBcFreight_settleOffice"];
                                $scope.$$gridDefaultValue.arBcFreight_settleOfficeName = ArBcFreight_settleOfficeNameArr[0];
                                $scope.$$gridDefaultValue.arBcFreight_creator = data.defaultValueInfos["ArBcFreight_creator"];
                                $scope.$$gridDefaultValue.arBcFreight_settleOffice = data.defaultValueInfos["ArBcFreight_settleOffice"];
                                $scope.$$gridDefaultValue.arBcFreight_createTime = data.defaultValueInfos["ArBcFreight_createTime"];
                                $scope.$$gridDefaultValue.arBcFreight_uploadingPersonName = data.defaultValueInfos["ArBcFreight_uploadingPersonName"];
                                $scope.$$gridDefaultValue.arBcFreight_createOffice = data.defaultValueInfos["ArBcFreight_createOffice"];
                                $scope.$$gridDefaultValue.apBcFreight_createTime = data.defaultValueInfos["ApBcFreight_createTime"];
                                $scope.$$gridDefaultValue.apBcFreight_creator = data.defaultValueInfos["ApBcFreight_creator"];
                                $scope.$$gridDefaultValue.apBcFreight_baseCurrencyCode = data.defaultValueInfos["ApBcFreight_baseCurrencyCode"];
                                $scope.$$gridDefaultValue.apBcFreight_createOffice = data.defaultValueInfos["ApBcFreight_createOffice"];
                                $scope.$$gridDefaultValue.apBcFreight_settleOfficeName = data.defaultValueInfos["ApBcFreight_settleOfficeName"];
                                $scope.$$gridDefaultValue.apBcFreight_settleOffice = data.defaultValueInfos["ApBcFreight_settleOffice"];
                                var TmOrderToMfOrder_settleOfficeArr = data.defaultValueInfos["TmOrderToMfOrder_settleOffice"].split(":");
                                $scope.$$gridDefaultValue.tmOrderToMfOrder_settleOffice = TmOrderToMfOrder_settleOfficeArr[0];
                                var TmOrderToMfOrder_settleOfficeNameArr = data.defaultValueInfos["TmOrderToMfOrder_settleOfficeName"].split(":");
                                $scope.$$gridDefaultValue.tmOrderToMfOrder_settleOffice=data.defaultValueInfos["TmOrderToMfOrder_settleOffice"];
                                $scope.$$gridDefaultValue.tmOrderToMfOrder_settleOfficeName = TmOrderToMfOrder_settleOfficeNameArr[0];
                                if($scope._pageState) $scope._pageState.resetDataState();
                            }
                        }

                    });
                }			};
            //DefaultValue LayoutElementType TOOLBAR
            $scope.writeOff = "X";
            /**
             * 关闭
             */
            $scope.close = function()
            {
                var indexScope = top.angular.element("body").scope();
                if($scope.openType && $scope.openType =='2')
                    indexScope.closeModal();
                else
                {
                    indexScope.removeTab();
                    indexScope.$apply();
                }
            };
            //规则中调用或其它按钮调用刷新父窗口中的表格eg:objectName = LinjxBas,eg:LinjxBas2
            $scope.refreshParent = function(objectName){
                var indexScope = top.angular.element("body").scope();
                var objectNames = objectName.split(",");
                angular.forEach(objectNames,function(data){
                    //2 = 弹出框刷新底层窗口
                    indexScope.refresh($scope.openType,data);
                });

            };

            //规则中调用或其它按钮调用刷新父窗口中的所有表格和form表单内容
            $scope.refreshUperLayer = function(){
                var indexScope = top.angular.element("body").scope();
                indexScope.refreshUperLayer($scope.openType);
            }


            $scope.initAcceptParams = function(){
                $scope.mfOrder_add_subBusinessType = Params.subBusinessType || "";
                if($scope.mfOrder_add_subBusinessType)
                    $scope.mfOrder.subBusinessType = $scope.mfOrder_add_subBusinessType;
                $scope.mfOrder_add_isDutyFree = Params.isDutyFree || "";
                if($scope.mfOrder_add_isDutyFree)
                    $scope.mfOrder.isDutyFree = $scope.mfOrder_add_isDutyFree;
                $scope.mfOrder_add_subBusinessCode = Params.subBusinessCode || "";
                if($scope.mfOrder_add_subBusinessCode)
                    $scope.mfOrder.subBusinessCode = $scope.mfOrder_add_subBusinessCode;
                $scope.mfOrder_add_businessType = Params.businessType || "";
                if($scope.mfOrder_add_businessType)
                    $scope.mfOrder.businessType = $scope.mfOrder_add_businessType;
                $scope.mfOrder_add_bindingInterface = Params.bindingInterface || "";
                if($scope.mfOrder_add_bindingInterface)
                    $scope.mfOrder.bindingInterface = $scope.mfOrder_add_bindingInterface;
            }

            $scope.getSysHide4Order = function(hideFlag) {
                if (hideFlag) return;
                /*start 配置隐藏*/
                if ($scope.hideElementArr && $scope.hideElementArr.length > 0) {
                    for (var i=0; i<$scope.hideElementArr.length; i++) {
                        $scope.hideElementArr[i].style = 'display:block';
                    }
                }
                var url = window.location.href;
                if (Params.freightOrderId)
                    var params = {url : url, mfOrderId : Params.freightOrderId, subBusinessCode : ''};
                else if (Params.copyOrderId)
                    var params = {url : url, mfOrderId : Params.copyOrderId, subBusinessCode : ''};
                else
                    var params = {url : url, mfOrderId : '', subBusinessCode : Params.subBusinessCode};
                $http.get($config.ctx + '/sysHide/getSysHide4Order', {params: params}).success(function (data) {
                    if (data.success != undefined && data.success == true) {
                        $scope.hideElementArr = [];
                        var elements = angular.element("form[name='MfOrderForm'] div.form-group.form-group-padding,div.fms-double-join-voyage,div.checkbox-inline,div.fms-double-join");
                        for (var i=0;i<elements.length;i++) {
                            for (var j=0;j<angular.element(elements[i]).find("input").length;j++) {
                                var property = angular.element(angular.element(elements[i]).find("input")[j]);
                                for (var k=0;k < data.sysHidePropertyList.length;k++) {
                                    var str = "mfOrder." + data.sysHidePropertyList[k].propertyName;
                                    if (property.attr("name") == str || property.attr("id") == str) {
                                        elements[i].style = 'display:none';
                                        $scope.hideElementArr.push(elements[i]);
                                        break;
                                    }
                                }
                            }
                            for (var j=0;j<angular.element(elements[i]).find("textarea").length;j++) {
                                var property = angular.element(angular.element(elements[i]).find("textarea")[j]);
                                for (var k=0;k < data.sysHidePropertyList.length;k++) {
                                    var str = "mfOrder." + data.sysHidePropertyList[k].propertyName;
                                    if (property.attr("name") == str || property.attr("id") == str) {
                                        elements[i].style = 'display:none';
                                        $scope.hideElementArr.push(elements[i]);
                                        break;
                                    }
                                }
                            }
                            for (var j=0;j<angular.element(elements[i]).find("div").length;j++) {
                                var property = angular.element(angular.element(elements[i]).find("div")[j]);
                                for (var k=0;k < data.sysHidePropertyList.length;k++) {
                                    var str = "mfOrder." + data.sysHidePropertyList[k].propertyName;
                                    if (property.attr("name") == str || property.attr("id") == str) {
                                        elements[i].style = 'display:none';
                                        $scope.hideElementArr.push(elements[i]);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                });
                /*end 配置隐藏*/
            };

            $scope.initialize = function(hideFlag){
                $scope.getSysHide4Order(hideFlag);
                if(Params.isCopyAllType != 'Y' && Params.isCopyType != 'Y'){
                    if($scope.initDefaultValue) $scope.initDefaultValue();
                    if($scope.initGridDefaultValue) $scope.initGridDefaultValue();
                }

                $scope.openType = Params.openType;

                $scope.initAcceptParams && $scope.initAcceptParams();

                if( $scope.mfOrder.mfOrderId)
                    $scope.getMfOrder($scope.mfOrder.mfOrderId);
                else{
                    $scope.mfOrderExtend = {};
                    $scope.mfOperationRequire = {};
                    if($scope._pageState) $scope._pageState.resetDataState();
                }


                if ($scope.customMfOrderInit) {
                    $scope.customMfOrderInit();
                }
                if($scope._pageState) $scope._pageState.resetDataState();

            };
            $scope.initialize();

            $scope.validMfOperationRequireForm = function() {
                if ($scope.MfOperationRequireForm && $scope.MfOperationRequireForm.$validator && $scope.MfOperationRequireForm.verify && $scope.mfOrder && $scope.mfOrder.hasOwnProperty('mfOrderId')) {
                    $scope.MfOperationRequireForm.$validator.enable();
                    $scope.MfOperationRequireForm.verify();
                }
            };

            /** 绑定 $scope 属性方法，在页面关闭后，使用此方法绑定的的属性会被清空 */
            $scope.bindTabProp = function (key, val) {
                $scope._bindedProps = $scope._bindedProps || [];
                $scope[key] = val;
                if ($scope._bindedProps.indexOf(key) < 0) {
                    $scope._bindedProps.push(key);
                }
            };

            $scope.resetPage = function (url) {
                var hideFlag = true;
                if (getQueryString('subBusinessCode', url) != $scope.mfOrder.subBusinessCode) hideFlag = false;
                delete $scope.mfOrderId;
                if ($("div[name='MsgOrderStatusDiv']")) $("div[name='MsgOrderStatusDiv']").remove();
                Params.openType = getQueryString('openType', url);
                $scope.mfOrder.mfOrderId = getQueryString('mfOrderId', url);
                Params.mfOrderId = getQueryString('mfOrderId', url);
                Params.businessType = getQueryString('businessType', url);
                Params.taskName = getQueryString('taskName', url);
                Params.handleStatus = getQueryString('handleStatus', url);
                Params.bindingInterface = getQueryString('bindingInterface', url);
                Params.subBusinessCode = getQueryString('subBusinessCode', url);
                Params.subBusinessType = getQueryString('subBusinessType', url);
                Params.isDutyFree = getQueryString('isDutyFree', url);
                Params.isCopyType = getQueryString('isCopyType', url);
                Params.isCopyAllType = getQueryString('isCopyAllType', url);
                if (Params.isCopyType == 'Y') $scope.copyCtnFlag = true;
                if (Params.isCopyAllType == 'Y') $scope.copyAllCtnFlag = true;
                Params.isFreightType = getQueryString('isFreightType', url);
                if (Params.isFreightType == 'Y') $scope.freightFlag = true;
                Params.mergeOrderIds = getQueryString('mergeOrderIds', url);
                Params.copyOrderId = getQueryString('copyOrderId', url);
                Params.sysResourceId = getQueryString('sysResourceId', url);
                Params.isMergeType = getQueryString('isMergeType', url);
                if (Params.isMergeType == 'Y') {$scope.mergeFlag = true;$scope.initSuccessFlag = true;}
                Params.freightOrderId = getQueryString('freightOrderId', url);
                Params.editGroup = getQueryString('editGroup', url);
                Params.allowSecondFlag = getQueryString('allowSecondFlag', url);
                Params.isCommissionType = getQueryString('isCommissionType', url);
                Params.msgTodoTaskId =  getQueryString('msgTodoTaskId', url);
                Params.msgTodoDecompositionId = getQueryString('msgTodoDecompositionId', url);
                $scope.validCtnFlag = false;$scope.getPortOfLoadingFlag = true;$scope.commissionFlag = true;
                $scope.f0131ApiF01322Url = "/html/fms/mf/mfOrderExtendTabsRefF01322Add.html?mfOrderId="+(Params.mfOrderId || "");
                $scope.f0131ApiF01323Url = "/html/fms/mf/mfBookingCargoTabsRefF01323Add.html?mfOrderId="+(Params.mfOrderId || "");
                $scope.f0131ApiF01324Url = "/html/fms/mf/bkContainerTabsRefF01324Add.html?mfOrderId="+(Params.mfOrderId || "");
                $scope.f0131ApiF01325Url = "/html/fms/bc/arBcFreightTabsRefF01325Add.html?mfOrderId="+(Params.mfOrderId || "");
                $scope.f0131ApiF01326Url = "/html/fms/md/mdAttachAccessoriesManage.html?modelType=MF&orderId="+(Params.mfOrderId || "");
                $scope.f0131ApiF01328Url = "/html/fms/tm/tmOrderToMfOrderTabsRefF01328Add.html?mfOrderId="+(Params.mfOrderId || "");
                /*$scope.f0131ApiF013210Url = "/html/fms/ci/ciOrderTabsRefF013210Edit.html?mfOrderId="+(Params.mfOrderId || "");
            $scope.f0131ApiF013211Url = "/html/fms/cd/cdOrderTabsRefF013211Edit.html?mfOrderId="+(Params.mfOrderId || "");*/
                $scope.f0131ApiF013212Url = "/html/fms/im/imOrderTabsRefF013212Add.html?mfOrderId="+(Params.mfOrderId || "");
                $scope.f0131ApiF013213Url = "/html/fms/mf/msgOrderStatusEdit.html?mfOrderId="+(Params.mfOrderId || "")  + "&businessType=" + (Params.businessType || "");


                $scope.F0131Api.addTab({title:'收发通',url:$scope.f0131ApiF01322Url},false);
                $scope.F0131Api.addTab({title:'货物',url:$scope.f0131ApiF01323Url},false);
                $scope.F0131Api.addTab({title:'集装箱',url:$scope.f0131ApiF01324Url},false);
                $scope.F0131Api.addTab({title:'费用信息',url:$scope.f0131ApiF01325Url},false);
                $scope.F0131Api.addTab({title:'附件单据',url:$scope.f0131ApiF01326Url},false);
                $scope.F0131Api.addTab({title:'操作要求',tab: $scope.tabNode},false);
                delete $scope.tabNode;
                $scope.F0131Api.addTab({title:'拖车',url:$scope.f0131ApiF01328Url},false);
                /*$scope.F0131Api.addTab({title:'报检',url:$scope.f0131ApiF013210Url});
            $scope.F0131Api.addTab({title:'报关',url:$scope.f0131ApiF013211Url});*/
                $scope.F0131Api.addTab({title:'保险',url:$scope.f0131ApiF013212Url},false);
                $scope.F0131Api.addTab({title:'动态跟踪',url:$scope.f0131ApiF013213Url},false);
                $scope.mfOperationRequire = {};
                $scope.F0131Api.selectTab(0);
                $scope.initMfBookingCargo();
                $scope.refresh();

                var customerRequireServiceMfOperationRequire = document.getElementById("customerRequireServiceMfOperationRequire");
                customerRequireServiceMfOperationRequire.onclick = function() {
                    $scope.customerRequireServiceMfOperationRequire();
                }
                var shipownerRequireServiceMfOperationRequire = document.getElementById("shipownerRequireServiceMfOperationRequire");
                shipownerRequireServiceMfOperationRequire.onclick = function() {
                    $scope.shipownerRequireServiceMfOperationRequire();
                }
            };

            $scope.$on('resetPage', function(event, data) {
                $scope.resetPage(data.url);
            });

            function getQueryString(name, url) {
                var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
                if (!url) {
                    url = window.location.href;
                };
                var search = url.split('?')[1] || '';
                search = search.split('#')[0] || '';
                var r = search.match(reg);
                if (r !== null) {
                    return decodeURI(r[2]);
                }
                return null;
            };


        }).filter("YesOrNo", function(){
            return function YesOrNoFunc(data){
                if(data && (data=="X" || data=="1" || data=="Y"))
                    return "是";
                else if(data==" ")
                    return "";
                else
                    return "否";
            };
        }).filter('wrapNoneLeaf', function (){
            return function (value, record, prefix, suffix){
                var grid = this;
                if (value === undefined) return '';
                try {
                    var node = grid.dataSource.$node(record);
                    if (!node.isLeaf()) {
                        if (prefix) {
                            value = prefix + value;
                        }
                        if (suffix) {
                            value += suffix;
                        }
                    }
                } catch (e) {
                }
                return value;
            };
        }).directive('onFinishRender',function($timeout,$rootScope){
            return {
                restrict:'A',
                link:function(scope,element,attr){
                    scope.initFocus = function(){
                        var formElement = $("body :text[ng-model!=currentPage]:enabled[readonly !='readonly']:not([ng-model^=calendar]),body textarea[readonly !='readonly']")
                        if(formElement!= undefined && formElement.length > 0){
                            $(formElement[0]).focus();
                        }else{
                            formElement = $("body button[type=button]:enabled[disabled !='disabled']")
                            if(formElement!= undefined && formElement.length > 0){
                                $(formElement[0]).focus();
                            }
                        }

                    }
                    $(window).resize();
                    $timeout(scope.initFocus);
                    $timeout(function() {
                        $rootScope.$broadcast('pageRenderFinish');
                    },1);
                }
            }

        });
});

