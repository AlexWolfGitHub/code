//true
/**
 * Author(s):java业务平台代码生成工具
 * Date: 2017年12月26日 09点16分50秒
 * Copyright Notice:版权声明  厦门吉联科技, 版权所有 违者必究
 * @(#)
 * Description:   businessType:,pageType:edit
 * <功能>主对象海运出口订单(TestSysStBooking)编辑页面JS
 * 文件名称: testSysStBookingEdit.js
 */
//<!-- 573BBBD01E6DAA1DE050007F010068D2 haveModuleLeftRight: haveGrid: X haveTabs: X haveFoundTree:-->
define([
    'angular',
    'layer',
    'framework/datasource/DataSourceModule',
    'framework/dict/GillionDictModule',
    'framework/date/DateModule',
    'framework/time/TimeModule',
    'framework/associate/GillionAssociateModule',
    'framework/dropdown/GillionDropdownModule',
    'framework/dropdownbtn/GillionDropDownBtnModule',
    'framework/dataGrid/DataGridModule',
    'framework/hotTable/HotTableModule',
    'framework/pagination/GillionPaginationModule',
    'framework/tab/GillionTabModule',
    'framework/dynamic/dynamicForm',
    'service/RuleService',
    'collapsejs',
    'framework/msg/GillionMsgModule',
    'framework/clickbox/GillionClickBoxModule',
    'framework/grid/fixgrid'
], function (angular, layer) {
    return angular.module('testSysStBookingEdit', ['DataSourceModule', 'GillionDictModule', 'DateModule', 'TimeModule', 'GillionAssociateModule', 'GillionDropdownModule', 'DataGridModule', 'HotTableModule', 'GillionPaginationModule', 'GillionTabModule', 'dynamicForm', 'RuleService', 'GillionMsgModule', 'GillionClickBoxModule', 'GillionDropDownBtnModule'])
        .controller('testSysStBookingController', function ($scope, $rootScope, $compile, $q, $filter, $dataSource, $dataSourceManager, $http, $timeout, Params, Arrays, GillionMsgService, RuleService, GillionMsg, AssociatePromiseService, GillionTabService) {
            $scope.__initDefaultValueFlag = true;
            $scope.__initGridDefaultValueFlag = true;
            //tabBuildType: L haveReference ：  fileNamePreFix: TestSysStBookingTabsF01311 firstLayoutBoName : TestSysStBookingCargo
            //realElementName: F01311
            //fileNamePreFix: TestSysStBookingTabsF01311 webPath: sample\bas--sample/bas
            //pageFileName: testSysStBookingTabsF01311Edit.html pageLayoutId:573BBBD01EDBAA1DE050007F010068D2
            $scope.f0131ApiF01311Url = "/html/sample/bas/testSysStBookingTabsF01311Edit.html?stBookingId=" + (Params.stBookingId || "") + "&baseViewId=" + (Params.baseViewId || "");
            //tabBuildType: S haveReference ：  fileNamePreFix: TestSysStBookingTabsF01331 firstLayoutBoName : TestBkContainer
            //realElementName: F01331
            //fileNamePreFix: TestSysStBookingTabsF01331 webPath: sample\bas--sample/bas
            //pageFileName: testSysStBookingTabsF01331Edit.html pageLayoutId:573BBBD01F12AA1DE050007F010068D2
            $scope.f0131ApiF01331Url = "/html/sample/bas/testSysStBookingTabsF01331Edit.html?stBookingId=" + (Params.stBookingId || "") + "&baseViewId=" + (Params.baseViewId || "");
            // 页面操作变化跟踪
            $scope._pageState = {
                _dataState: $config.dataState.NORMAL,
                _operateType: "",
                pageType: 'edit'
            };

            /**
             * TODO GLPaaS生成
             *
             */
            $scope._pageState.isDataModified = function () {
                if (!$config.pageStateTip) {
                    return false;
                }

                if ($scope._pageState._dataState == $config.dataState.MODIFY) {
                    return true;
                }

                $scope.f0131ApiF01311Scope = GillionTabService.invoke('货物', $scope.f0131ApiF01311Url, "$scope", null) || {};
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope._pageState && $scope.f0131ApiF01311Scope._pageState.isDataModified && $scope.f0131ApiF01311Scope._pageState.isDataModified()) {
                    return true;
                }
                $scope.f0131ApiF01331Scope = GillionTabService.invoke('集装箱', $scope.f0131ApiF01331Url, "$scope", null) || {};
                if ($scope.f0131ApiF01331Scope && $scope.f0131ApiF01331Scope._pageState && $scope.f0131ApiF01331Scope._pageState.isDataModified && $scope.f0131ApiF01331Scope._pageState.isDataModified()) {
                    return true;
                }
                return false;

            };

            /**
             * TODO GLPaaS生成
             *
             */
            $scope._pageState.resetDataState = function () {
                $timeout(function () {
                    $scope._pageState._dataState = $config.dataState.NORMAL;
                    $scope.testSysStBooking.rowStatus = 2;
                }, $config.pageStateResetTimeout);
            };

            /**
             * TODO GLPaaS生成
             *
             */
            $scope._pageState.setDataStateModify = function () {
                $scope._pageState._dataState = $config.dataState.MODIFY;
            };


            /**
             * TODO GLPaaS生成
             *
             */
            $scope.tabResize = function () {
                $(window).resize();
            };
            /**
             * TODO GLPaaS生成
             *
             */
            $scope.__reloadCurentPage = function (modelName) {
                if ($scope.getTestSysStBooking && (!modelName || modelName == "TestSysStBooking"))
                    $scope.getTestSysStBooking($scope.testSysStBooking.stBookingId);
                //子对象TestSysStBookingCtnRequest
                if ($scope && $scope.testSysStBookingCtnRequestGrid) {
                    $scope.testSysStBookingCtnRequestGrid._reset();
                    $scope.testSysStBookingCtnRequests.splice(0, $scope.testSysStBookingCtnRequests.length);
                    $scope.testSysStBookingCtnRequest = {};
                    $scope.testSysStBookingCtnRequestDeleteds = [];
                    //1_isNewConfig:true haveGrid:true 2 false false false
                    $scope.getTestSysStBookingCtnRequestPages();
                }
                //subBo TestSysStBookingCtnRequest
                if ($scope.getTestSysStBookingCtnRequestPages && (!modelName || modelName == "TestSysStBookingCtnRequest"))
                    $scope.getTestSysStBookingCtnRequestPages();
                if (!modelName || modelName == "TestSysStBookingCargo") {
                    $scope.f0131ApiF01311Scope = GillionTabService.invoke('货物', $scope.f0131ApiF01311Url, "$scope", null) || {};
                    if ($scope.f0131ApiF01311Scope.__reloadCurentPage) {
                        $scope.f0131ApiF01311Scope.__reloadCurentPage(modelName);
                    }
                }
                if (!modelName || modelName == "TestBkContainer") {
                    $scope.f0131ApiF01331Scope = GillionTabService.invoke('集装箱', $scope.f0131ApiF01331Url, "$scope", null) || {};
                    if ($scope.f0131ApiF01331Scope.__reloadCurentPage) {
                        $scope.f0131ApiF01331Scope.__reloadCurentPage(modelName);
                    }
                }
            };
            $scope.isLoading = false; //是否载入中

//edit
            //B
            //testSysStBooking 13
            $scope.testSysStBooking = {
                stBookingId: Params.stBookingId,
            };

            $scope.testSysStBookingEx = {
                stBookingId: Params.stBookingId,
            };

            /**
             * TODO GLPaaS生成
             */
            $scope.$watch("testSysStBooking", function (newVal, oldVal) {
                if (newVal && newVal.rowStatus && (newVal.rowStatus == 2 || newVal.rowStatus == 4 || newVal.rowStatus == 16)) {
                    if (newVal.rowStatus == 16 || newVal.rowStatus == 4) {
                        if ($scope._pageState && $scope._pageState.setDataStateModify)
                            $scope._pageState.setDataStateModify();
                    } else {
                        _.mapObject(newVal, function (val, key) {
                            var propertyCol = [];
                            propertyCol.push("contractNo");
                            propertyCol.push("ctnBulkFlag");
                            propertyCol.push("cargoCubeUnit");
                            propertyCol.push("sourceBookingId");
                            propertyCol.push("tsPort");
                            propertyCol.push("cooperateUserName");
                            propertyCol.push("alterPort");
                            propertyCol.push("mbl");
                            propertyCol.push("settlementMode");
                            propertyCol.push("updatedOffice");
                            propertyCol.push("createdOffice");
                            propertyCol.push("truckPodFlag");
                            propertyCol.push("shFax");
                            propertyCol.push("n1Id");
                            propertyCol.push("cooperateUser");
                            propertyCol.push("ctnOrderStatus");
                            propertyCol.push("depotOfLoading");
                            propertyCol.push("oceanPod");
                            propertyCol.push("cnCode");
                            propertyCol.push("n1Contact");
                            propertyCol.push("shTel");
                            propertyCol.push("sourceType");
                            propertyCol.push("oceanDel");
                            propertyCol.push("cnId");
                            propertyCol.push("cnFax");
                            propertyCol.push("shName");
                            propertyCol.push("tmFlag");
                            propertyCol.push("bkParty");
                            propertyCol.push("polEtd");
                            propertyCol.push("cooperateOfficeName");
                            propertyCol.push("flag9");
                            propertyCol.push("packageRemark");
                            propertyCol.push("n1Code");
                            propertyCol.push("remarks");
                            propertyCol.push("declarationFlag");
                            propertyCol.push("releaseNotifyComp");
                            propertyCol.push("flag11");
                            propertyCol.push("flag3");
                            propertyCol.push("shCode");
                            propertyCol.push("cooperateOffice");
                            propertyCol.push("originalBkNo");
                            propertyCol.push("marks");
                            propertyCol.push("flag7");
                            propertyCol.push("placeOfDestination");
                            propertyCol.push("noOfPackage");
                            propertyCol.push("cnAddress");
                            propertyCol.push("depotOfTransshipment");
                            propertyCol.push("shAddress");
                            propertyCol.push("transitClauseLoading");
                            propertyCol.push("transportMode");
                            propertyCol.push("oceanPor");
                            propertyCol.push("flag10");
                            propertyCol.push("transitClauseDischarge");
                            propertyCol.push("shId");
                            propertyCol.push("oceanPodName");
                            propertyCol.push("packageType");
                            propertyCol.push("flag8");
                            propertyCol.push("updatedByUser");
                            propertyCol.push("externalBlFlag");
                            propertyCol.push("ctnReleaseDate");
                            propertyCol.push("cargoCube");
                            propertyCol.push("oceanVesselCode");
                            propertyCol.push("payerId");
                            propertyCol.push("alterDepot");
                            propertyCol.push("portOfLoading");
                            propertyCol.push("custBookingRemarks");
                            propertyCol.push("hbl");
                            propertyCol.push("sourceBkNo");
                            propertyCol.push("bkDate");
                            propertyCol.push("otherRemark");
                            propertyCol.push("oceanBlNo");
                            propertyCol.push("createdDtmLoc");
                            propertyCol.push("oceanVoyEta");
                            propertyCol.push("tsPortName");
                            propertyCol.push("lcNo");
                            propertyCol.push("mblLclType");
                            propertyCol.push("placeOfAcceptance");
                            propertyCol.push("cargoStatus");
                            propertyCol.push("n1Tel");
                            propertyCol.push("cnContact");
                            propertyCol.push("declarationExpFlag");
                            propertyCol.push("settleOffice");
                            propertyCol.push("oceanPodDepot");
                            propertyCol.push("flag4");
                            propertyCol.push("loadInd");
                            propertyCol.push("oceanHatchDate");
                            propertyCol.push("flag5");
                            propertyCol.push("flag12");
                            propertyCol.push("cargoWeightUnit");
                            propertyCol.push("stBookingId");
                            propertyCol.push("paymentMode");
                            propertyCol.push("reminderUser");
                            propertyCol.push("wmFlag");
                            propertyCol.push("mblCtnId");
                            propertyCol.push("oceanPol");
                            propertyCol.push("oceanPolDepot");
                            propertyCol.push("createdByUser");
                            propertyCol.push("oceanClauseDischarge");
                            propertyCol.push("systemType");
                            propertyCol.push("oceanPickupDeadline");
                            propertyCol.push("shContact");
                            propertyCol.push("mblBookingId");
                            propertyCol.push("placeOfDelivery");
                            propertyCol.push("cargoDescription");
                            propertyCol.push("ediExceptionInfo");
                            propertyCol.push("oceanVoyEtd");
                            propertyCol.push("n1Fax");
                            propertyCol.push("flightNo");
                            propertyCol.push("declarationImpFlag");
                            propertyCol.push("oceanVoyage");
                            propertyCol.push("documentListName");
                            propertyCol.push("noOfOriginal");
                            propertyCol.push("vesselCode");
                            propertyCol.push("oceanPickupDelDate");
                            propertyCol.push("emptyCtnRemark");
                            propertyCol.push("oceanPolName");
                            propertyCol.push("cargoGrossWeight");
                            propertyCol.push("cooperateDate");
                            propertyCol.push("bkPartyId");
                            propertyCol.push("bkSource");
                            propertyCol.push("depotOfDischarge");
                            propertyCol.push("commodityGroup");
                            propertyCol.push("warehousingFlag");
                            propertyCol.push("createdRoleId");
                            propertyCol.push("bkNoSys");
                            propertyCol.push("internalBlFlag");
                            propertyCol.push("jobNo");
                            propertyCol.push("documentList");
                            propertyCol.push("ctnOrderNo");
                            propertyCol.push("bkStatus");
                            propertyCol.push("updatedDtmLoc");
                            propertyCol.push("shippingOrderNo");
                            propertyCol.push("portOfDischarge");
                            propertyCol.push("n1Address");
                            propertyCol.push("ctnReleaseUser");
                            propertyCol.push("additionalInfoUser");
                            propertyCol.push("flag13");
                            propertyCol.push("voyage");
                            propertyCol.push("truckPolFlag");
                            propertyCol.push("placeOfPayment");
                            propertyCol.push("bkNo");
                            propertyCol.push("ctnReleaseFlag");
                            propertyCol.push("cnTel");
                            propertyCol.push("hblNo");
                            propertyCol.push("additionalInfoStatus");
                            propertyCol.push("additionalInfoDate");
                            propertyCol.push("bkType");
                            propertyCol.push("salesCode");
                            propertyCol.push("loadingCtnRemarks");
                            propertyCol.push("n1Name");
                            propertyCol.push("createdTimeZone");
                            propertyCol.push("flag1");
                            propertyCol.push("cnName");
                            propertyCol.push("cargoNetWeight");
                            propertyCol.push("flag6");
                            propertyCol.push("oceanClauseLoading");
                            propertyCol.push("portOfTransshipment");
                            propertyCol.push("dischargeCtnRemarks");
                            propertyCol.push("detentionOfCargo");
                            propertyCol.push("bookingOffice");
                            propertyCol.push("updatedTimeZone");
                            propertyCol.push("mblNo");
                            propertyCol.push("alterPortFlag");
                            propertyCol.push("flag2");
                            propertyCol.push("oceanShipOwnerId");
                            propertyCol.push("oceanDeadline");
                            checked = Arrays.exists(propertyCol, key);
                            if (checked) {
                                var newData = val;
                                var oldData = oldVal[key];
                                if (!($scope._compareNewAndOldObjIsEqual(newData, oldData, $scope))) {
                                    if (newVal.rowStatus == 2) {
                                        newVal.rowStatus = 16;
                                    }

                                    if ($scope._pageState && $scope._pageState.setDataStateModify)
                                        $scope._pageState.setDataStateModify();

                                    return false;
                                }
                            }
                        });
                    }
                }
            }, true);
            /**
             * TODO GLPaaS生成
             */
            $scope.$watch("testSysStBookingEx", function (newVal, oldVal) {
                if (newVal && newVal.rowStatus && (newVal.rowStatus == 2 || newVal.rowStatus == 4 || newVal.rowStatus == 16)) {
                    if (oldVal && oldVal.stBookingExId && newVal.stBookingExId && !(_.isNull(newVal.stBookingExId) || _.isUndefined(newVal.stBookingExId) || newVal.stBookingExId === '')
                        && oldVal.stBookingExId == newVal.stBookingExId && (newVal.stBookingId == oldVal.stBookingId)) {
                        if (newVal.rowStatus == 16 || newVal.rowStatus == 4) {
                            if ($scope._pageState && $scope._pageState.setDataStateModify)
                                $scope._pageState.setDataStateModify();
                        } else {
                            _.mapObject(newVal, function (val, key) {
                                var propertyCol = [];
                                propertyCol.push("createdOffice");
                                propertyCol.push("realShipperName");
                                propertyCol.push("realConsigneeName");
                                propertyCol.push("stBookingExId");
                                propertyCol.push("realNotifyAddress");
                                propertyCol.push("updatedOffice");
                                propertyCol.push("cnName");
                                propertyCol.push("createdTimeZone");
                                propertyCol.push("realNotifyName");
                                propertyCol.push("stBookingId");
                                propertyCol.push("realShipperAddress");
                                propertyCol.push("updatedDtmLoc");
                                propertyCol.push("updatedByUser");
                                propertyCol.push("updatedTimeZone");
                                propertyCol.push("createdByUser");
                                propertyCol.push("realConsigneeAddress");
                                propertyCol.push("createdDtmLoc");
                                checked = Arrays.exists(propertyCol, key);
                                if (checked) {
                                    var newData = val;
                                    var oldData = oldVal[key];
                                    if (!($scope._compareNewAndOldObjIsEqual(newData, oldData, $scope))) {
                                        if (newVal.rowStatus == 2) {
                                            newVal.rowStatus = 16;
                                        }

                                        if ($scope._pageState && $scope._pageState.setDataStateModify)
                                            $scope._pageState.setDataStateModify();

                                        return false;
                                    }
                                }
                            });
                        }
                    }
                }
            }, true);


            /**
             * TODO GLPaaS生成
             * 根据主键取值
             */
            $scope.getTestSysStBooking = function (stBookingId) {
                //haveTabLoadSupport : X
                //tabPageLayout.groupTitle 基本信息 - TestSysStBooking

                //tabPageLayout.groupTitle 收发通 - TestSysStBooking

                //tabPageLayout.groupTitle 真实收发通 - TestSysStBookingEx

                //tabPageLayout.groupTitle 船舶信息 - TestSysStBooking

                //tabPageLayout.groupTitle 多程信息 - TestSysStBooking

                //tabPageLayout.groupTitle 货物 - TestSysStBookingCargo

                //tabPageLayout.groupTitle 集装箱 - TestBkContainer

                var param = {};
                param.stBookingId = stBookingId || "";
                param.cascade = false;
                var tip = layer.load(0, {shade: false});
                $http.get($config.ctx + '/testSysStBooking/getTestSysStBooking', {params: param}).success(function (data) {
                    layer.close(tip);
                    if (data.success != undefined && data.success == true) {
                        $scope.testSysStBooking = data.testSysStBooking;


                        //subBoName: TestSysStBookingCtnRequest scopeVariable: $scope isTabPage: false

                        //subBoName: TestSysStBookingCargo scopeVariable: $scope.f0131ApiF01311Scope isTabPage: false

                        //subBoName: TestBkContainer scopeVariable: $scope isTabPage: false

                        //subBoName: TestSysStBookingEx scopeVariable: $scope isTabPage: false
                        if (data.testSysStBooking.sysStBookingEx) {
                            $scope.testSysStBookingEx = data.testSysStBooking.sysStBookingEx;
                        }


                        $scope.initAcceptParams && $scope.initAcceptParams();
                        if ($scope._pageState) $scope._pageState.resetDataState();
                        $timeout(function () {
                            $rootScope.$broadcast('pageRenderFinish');
                        }, 1);
                    }
                }).error(function () {
                    layer.close(tip);
                });
            };

            //<!--FORM_TOOLBAR-->
            //TODO LayoutElementType.FORM_TOOLBAR
//TODO 20171019 linjx FORM START save_form

            /**
             * TODO GLPaaS生成
             * 新增保存 海运出口订单
             */
            $scope.save = function () {
                var contentHint = "";
                //校验联想控件是否初始化完
                if (!$scope._associateInitValid($scope)) {
                    return;
                }
                //haveTabLoadSupport : X
                $scope.f0131ApiF01311Scope = GillionTabService.invoke('货物', $scope.f0131ApiF01311Url, "$scope", null) || {};
                $scope.f0131ApiF01331Scope = GillionTabService.invoke('集装箱', $scope.f0131ApiF01331Url, "$scope", null) || {};
                //子对象TestSysStBookingCtnRequest
                if ($scope && $scope.testSysStBookingCtnRequestGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestSysStBookingCtnRequest
                //子对象TestSysStBookingCargo
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testSysStBookingCargoGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestSysStBookingCargo
                //子对象TestStBookingCargoA
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoAGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestStBookingCargoA
                //子对象TestStBookingCargoC
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoCGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestStBookingCargoC
                //子对象TestStBookingCargoCa
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestStBookingCargoCa
                //子对象TestStBookingCargoB
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoBGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestStBookingCargoB
                //子对象TestBkContainer
                if ($scope.f0131ApiF01331Scope && $scope.f0131ApiF01331Scope.testBkContainerGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestBkContainer
                //子对象TestContainerCargo
                if ($scope.f0131ApiF01331Scope && $scope.f0131ApiF01331Scope.testContainerCargoGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestContainerCargo
                //界面布局不存在TestSysStBookingEx表格。。
                //subBo TestSysStBookingEx
                if ($scope.form1 && $scope.form1.$validator && $scope.form1.verify && $scope.testSysStBooking && $scope.testSysStBooking.hasOwnProperty('stBookingId')) {
                    $scope.form1.$validator.enable();
                    $scope.form1.verify();
                }
                if ($scope.form2 && $scope.form2.$validator && $scope.form2.verify && $scope.testSysStBooking && $scope.testSysStBooking.hasOwnProperty('stBookingId')) {
                    $scope.form2.$validator.enable();
                    $scope.form2.verify();
                }
                if ($scope.form3 && $scope.form3.$validator && $scope.form3.verify && $scope.testSysStBooking && $scope.testSysStBooking.hasOwnProperty('stBookingId')) {
                    $scope.form3.$validator.enable();
                    $scope.form3.verify();
                }
                if ($scope.form4 && $scope.form4.$validator && $scope.form4.verify && $scope.testSysStBooking && $scope.testSysStBooking.hasOwnProperty('stBookingId')) {
                    $scope.form4.$validator.enable();
                    $scope.form4.verify();
                }
                if ($scope.form5 && $scope.form5.$validator && $scope.form5.verify && $scope.testSysStBooking && $scope.testSysStBooking.hasOwnProperty('stBookingId')) {
                    $scope.form5.$validator.enable();
                    $scope.form5.verify();
                }
                var allValidationFlag = true;
                var gridAsynRequiresPromises = [];
                var selectTabIndexs = [];
                //TABS F0-1-3-1
                //TAB  F0-1-3-3-1 F0131Api 0
                var tabs3_F0131Api_Valid = true;
                var tabs3_F0131Api_Valid_index = 2;
                // DIV;GRID_TOOLBAR;F0-1-3-3-1-1
                // DIV;GRID;F0-1-3-3-1-2

                if ($scope.f0131ApiF01331Scope.testBkContainerGrid) {
                    var testBkContainerGridAsynRequiresPromises = $scope.f0131ApiF01331Scope.testBkContainerGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01331Scope.testBkContainerGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01331Scope.testBkContainerGrid, $scope.f0131ApiF01331Scope.testBkContainers, $scope.f0131ApiF01331Scope);
                                }).catch(function () {
                                    tabs3_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("集装箱】") == -1) {
                                        contentHint = contentHint + "\r\n【集装箱】";
                                    }
                                    selectTabIndexs.push(tabs3_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testBkContainerGridAsynRequiresPromises);
                }
                // DIV;GRID_TOOLBAR;F0-1-3-3-1-3
                // DIV;GRID;F0-1-3-3-1-4

                if ($scope.f0131ApiF01331Scope.testContainerCargoGrid) {
                    var testContainerCargoGridAsynRequiresPromises = $scope.f0131ApiF01331Scope.testContainerCargoGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01331Scope.testContainerCargoGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01331Scope.testContainerCargoGrid, $scope.f0131ApiF01331Scope.testContainerCargos, $scope.f0131ApiF01331Scope);
                                }).catch(function () {
                                    tabs3_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("集装箱】") == -1) {
                                        contentHint = contentHint + "\r\n【集装箱】";
                                    }
                                    selectTabIndexs.push(tabs3_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testContainerCargoGridAsynRequiresPromises);
                }
                if (!tabs3_F0131Api_Valid) {
                    contentHint = contentHint + "\r\n【集装箱】";
                    $scope.F0131Api.selectTab(2);
                    selectTabIndexs.push(2);
                    $(".popover").hide();

                }
                //TAB  F0-1-3-1-1 F0131Api 0
                var tabs2_F0131Api_Valid = true;
                var tabs2_F0131Api_Valid_index = 1;
                // DIV;GRID_TOOLBAR;F0-1-3-1-1-1
                // DIV;GRID;F0-1-3-1-1-2

                if ($scope.f0131ApiF01311Scope.testSysStBookingCargo && $scope.f0131ApiF01311Scope.testSysStBookingCargo.stBookingCargoId && $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm) {
                    if ($scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$validator && $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.verify) {
                        $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$validator.enable();
                        $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.verify();
                    }
                    if (!$scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$valid) {
                        tabs2_F0131Api_Valid = false;
                        allValidationFlag = false;
                    }
                }
                // PANEL;;F0-1-3-1-1-3
                // DIV;FORM_HEADER;F0-1-3-1-1-3-1
                // DIV;;F0-1-3-1-1-4
                // DIV;;F0-1-3-1-1-4-1
                // DIV;GRID_TOOLBAR;F0-1-3-1-1-4-1-1
                // DIV;GRID;F0-1-3-1-1-4-1-2

                if ($scope.f0131ApiF01311Scope.testStBookingCargoAGrid) {
                    var testStBookingCargoAGridAsynRequiresPromises = $scope.f0131ApiF01311Scope.testStBookingCargoAGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01311Scope.testStBookingCargoAGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01311Scope.testStBookingCargoAGrid, $scope.f0131ApiF01311Scope.testStBookingCargoAs, $scope.f0131ApiF01311Scope);
                                }).catch(function () {
                                    tabs2_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("货物】") == -1) {
                                        contentHint = contentHint + "\r\n【货物】";
                                    }
                                    selectTabIndexs.push(tabs2_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testStBookingCargoAGridAsynRequiresPromises);
                }
                // DIV;;F0-1-3-1-1-4-2
                // DIV;GRID_TOOLBAR;F0-1-3-1-1-4-2-1
                // DIV;GRID;F0-1-3-1-1-4-2-2

                if ($scope.f0131ApiF01311Scope.testStBookingCargoBGrid) {
                    var testStBookingCargoBGridAsynRequiresPromises = $scope.f0131ApiF01311Scope.testStBookingCargoBGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01311Scope.testStBookingCargoBGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01311Scope.testStBookingCargoBGrid, $scope.f0131ApiF01311Scope.testStBookingCargoBs, $scope.f0131ApiF01311Scope);
                                }).catch(function () {
                                    tabs2_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("货物】") == -1) {
                                        contentHint = contentHint + "\r\n【货物】";
                                    }
                                    selectTabIndexs.push(tabs2_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testStBookingCargoBGridAsynRequiresPromises);
                }
                // DIV;;F0-1-3-1-1-4-3
                // DIV;GRID_TOOLBAR;F0-1-3-1-1-4-3-1
                // DIV;GRID;F0-1-3-1-1-4-3-2

                if ($scope.f0131ApiF01311Scope.testStBookingCargoCGrid) {
                    var testStBookingCargoCGridAsynRequiresPromises = $scope.f0131ApiF01311Scope.testStBookingCargoCGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01311Scope.testStBookingCargoCGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01311Scope.testStBookingCargoCGrid, $scope.f0131ApiF01311Scope.testStBookingCargoCs, $scope.f0131ApiF01311Scope);
                                }).catch(function () {
                                    tabs2_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("货物】") == -1) {
                                        contentHint = contentHint + "\r\n【货物】";
                                    }
                                    selectTabIndexs.push(tabs2_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testStBookingCargoCGridAsynRequiresPromises);
                }
                // DIV;;F0-1-3-1-1-5
                // DIV;GRID_TOOLBAR;F0-1-3-1-1-5-1
                // DIV;GRID;F0-1-3-1-1-5-2

                if ($scope.f0131ApiF01311Scope.testStBookingCargoCaGrid) {
                    var testStBookingCargoCaGridAsynRequiresPromises = $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01311Scope.testStBookingCargoCaGrid, $scope.f0131ApiF01311Scope.testStBookingCargoCas, $scope.f0131ApiF01311Scope);
                                }).catch(function () {
                                    tabs2_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("货物】") == -1) {
                                        contentHint = contentHint + "\r\n【货物】";
                                    }
                                    selectTabIndexs.push(tabs2_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testStBookingCargoCaGridAsynRequiresPromises);
                }
                if (!tabs2_F0131Api_Valid) {
                    contentHint = contentHint + "\r\n【货物】";
                    $scope.F0131Api.selectTab(1);
                    selectTabIndexs.push(1);
                    $(".popover").hide();

                }
                //TAB  F0-1-3-2-1 F0131Api 0
                var tabs1_F0131Api_Valid = true;
                var tabs1_F0131Api_Valid_index = 0;
                // DIV;;F0-1-3-2-1-1-1
                // DIV;;F0-1-3-2-1-1-1-1
                // FORM;;NewCell-1509850020564
                if ($scope.form2 && !$scope.form2.$valid) {
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false;
                }
                // DIV;;F0-1-3-2-1-1-1-2
                // FORM;;NewCell-1509850043647
                if ($scope.form3 && !$scope.form3.$valid) {
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false;
                }
                // DIV;;F0-1-3-2-1-1-1-3
                // DIV;;F0-1-3-2-1-1-1-3-2
                // GROUP;;F0-1-3-2-1-1-1-3-2-1
                // DIV;GRID_TOOLBAR;F0-1-3-2-1-1-1-3-2-1-1
                // DIV;GRID;F0-1-3-2-1-1-1-3-2-1-2

                if ($scope.testSysStBookingCtnRequestGrid) {
                    var testSysStBookingCtnRequestGridAsynRequiresPromises = $scope.testSysStBookingCtnRequestGrid.finishEdit()
                        .then(function () {
                            return $scope.testSysStBookingCtnRequestGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.testSysStBookingCtnRequestGrid, $scope.testSysStBookingCtnRequests, $scope);
                                }).catch(function () {
                                    tabs1_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("基本信息】") == -1) {
                                        contentHint = contentHint + "\r\n【基本信息】";
                                    }
                                    selectTabIndexs.push(tabs1_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testSysStBookingCtnRequestGridAsynRequiresPromises);
                }
                // FORM;;NewCell-1509850069474
                if ($scope.form4 && !$scope.form4.$valid) {
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false;
                }
                // DIV;;F0-1-3-2-1-1-1-4
                // FORM;;NewCell-1509850090791
                if ($scope.form5 && !$scope.form5.$valid) {
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false;
                }
                if (!tabs1_F0131Api_Valid) {
                    contentHint = contentHint + "\r\n【基本信息】";
                    $scope.F0131Api.selectTab(0);
                    selectTabIndexs.push(0);
                    $(".popover").hide();
                    var errF01321s = [];
                    // DIV F0-1-3-2-1-1-1
                    // DIV F0-1-3-2-1-1-1-1
                    // FORM NewCell-1509850020564
                    if ($scope.form2 && $scope.form2.$error) {
                        for (var prop in $scope.form2.$error) {
                            if (angular.isArray($scope.form2.$error[prop])) {
                                errF01321s = errF01321s.concat($scope.form2.$error[prop]);
                            }
                        }
                    }
                    // DIV F0-1-3-2-1-1-1-2
                    // FORM NewCell-1509850043647
                    if ($scope.form3 && $scope.form3.$error) {
                        for (var prop in $scope.form3.$error) {
                            if (angular.isArray($scope.form3.$error[prop])) {
                                errF01321s = errF01321s.concat($scope.form3.$error[prop]);
                            }
                        }
                    }
                    // DIV F0-1-3-2-1-1-1-3
                    // DIV F0-1-3-2-1-1-1-3-2
                    // GROUP F0-1-3-2-1-1-1-3-2-1
                    // DIV F0-1-3-2-1-1-1-3-2-1-1
                    // DIV F0-1-3-2-1-1-1-3-2-1-2
                    // FORM NewCell-1509850069474
                    if ($scope.form4 && $scope.form4.$error) {
                        for (var prop in $scope.form4.$error) {
                            if (angular.isArray($scope.form4.$error[prop])) {
                                errF01321s = errF01321s.concat($scope.form4.$error[prop]);
                            }
                        }
                    }
                    // DIV F0-1-3-2-1-1-1-4
                    // FORM NewCell-1509850090791
                    if ($scope.form5 && $scope.form5.$error) {
                        for (var prop in $scope.form5.$error) {
                            if (angular.isArray($scope.form5.$error[prop])) {
                                errF01321s = errF01321s.concat($scope.form5.$error[prop]);
                            }
                        }
                    }
                    for (var j = 0; j < errF01321s.length; j++) {
                        if ($("input[name='" + errF01321s[j].$name + "']").parents("div[api]")[0]) {
                            var apiName = $("input[name='" + errF01321s[j].$name + "']").parents("div[api]")[0].attributes.api.value;
                            var title = $("input[name='" + errF01321s[j].$name + "']").parents("div[title]")[0].attributes.title.value;
                            $scope[apiName].selectTab(title + "_" + undefined);
                            if ($("input[name='" + errF01321s[j].$name + "']")[0])
                                $("input[name='" + errF01321s[j].$name + "']")[0].focus();
                        }
                    }

                }
                if (!$scope.form1.$valid) //FORM
                    allValidationFlag = false;
                var callback = function () { //callback
                    if (RuleService && RuleService.showTabValidationMsg) {
                        if (!allValidationFlag && contentHint != "") {
                            GillionMsg.alert('提示', contentHint + "页面信息不全,保存失败！", null);
                        }
                    }

                    if (allValidationFlag) {
                        if (RuleService.beforeSaveHintModMsg && (!$scope._pageState || !$scope._pageState.isDataModified || !$scope._pageState.isDataModified())) {
                            // 数据变更未保存提醒
                            GillionMsg.show({
                                title: '提示',
                                msg: '当前页面数据未修改，无需保存！',
                                buttons: [{
                                    text: '确定',
                                    type: 'sure',
                                    handler: function () {
                                        $scope.$apply(function () {
                                            //$scope.save(true);
                                        });
                                    }
                                }]
                            });
                            return;
                        }
                        $scope.testSysStBooking.stBookingId = null;

                        var param = $scope.testSysStBooking;
                        //subBoName:TestSysStBookingCtnRequest subBoRelType:2 objectType:0 persistentSaveType:2 null
                        if ($scope.testSysStBookingCtnRequests) {
                            for (var i = 0; i < $scope.testSysStBookingCtnRequests.length; i++) {
                                $scope.testSysStBookingCtnRequests[i].stBookingId = null;
                                $scope.testSysStBookingCtnRequests[i].stBookingCtnRequestId = null;
                                $scope.testSysStBookingCtnRequests[i].rowStatus = 4;
                            }
                        }
                        param.testSysStBookingCtnRequests = $scope.testSysStBookingCtnRequests;
                        //subBoName:TestSysStBookingCargo subBoRelType:2 objectType:0 persistentSaveType:2 null
                        if ($scope.f0131ApiF01311Scope.testSysStBookingCargos) {
                            for (var i = 0; i < $scope.f0131ApiF01311Scope.testSysStBookingCargos.length; i++) {
                                $scope.f0131ApiF01311Scope.testSysStBookingCargos[i].stBookingId = null;
                                $scope.f0131ApiF01311Scope.testSysStBookingCargos[i].stBookingCargoId = null;
                                $scope.f0131ApiF01311Scope.testSysStBookingCargos[i].rowStatus = 4;
                            }
                        }
                        param.testSysStBookingCargos = $scope.f0131ApiF01311Scope.testSysStBookingCargos;
                        //subBoName:TestBkContainer subBoRelType:2 objectType:3 persistentSaveType:2 null
                        if ($scope.f0131ApiF01331Scope.testBkContainers) {
                            for (var i = 0; i < $scope.f0131ApiF01331Scope.testBkContainers.length; i++) {
                                $scope.f0131ApiF01331Scope.testBkContainers[i].stBookingId = null;
                                $scope.f0131ApiF01331Scope.testBkContainers[i].bkContainerId = null;
                                $scope.f0131ApiF01331Scope.testBkContainers[i].rowStatus = 4;
                            }
                        }
                        param.testBkContainers = $scope.f0131ApiF01331Scope.testBkContainers;
                        //subBoName:TestSysStBookingEx subBoRelType:1 objectType:0 persistentSaveType:2 null
                        param.sysStBookingEx = $scope.testSysStBookingEx;

                        var tip = layer.load(0, $config.shadeConfig);
                        $scope.isLoading = true;

                        $http.post($config.ctx + '/testSysStBooking/save', param).success(function (data) {
                            layer.close(tip);
                            $scope.isLoading = false;
                            if (data.success != undefined && data.success == true) {

                                $scope.testSysStBooking = data.testSysStBooking;
                                if ($scope.f0131ApiF01311Scope)
                                    $scope.f0131ApiF01311Scope.testSysStBooking = $scope.testSysStBooking;
                                if ($scope.f0131ApiF01331Scope)
                                    $scope.f0131ApiF01331Scope.testSysStBooking = $scope.testSysStBooking;

                                //subBoName:TestSysStBookingCtnRequest subBoRelType:2 objectType:0 persistentSaveType:2 null
                                //subBoName:TestSysStBookingCargo subBoRelType:2 objectType:0 persistentSaveType:2 null
                                //subBoName:TestBkContainer subBoRelType:2 objectType:3 persistentSaveType:2 null
                                //subBoName:TestSysStBookingEx subBoRelType:1 objectType:0 persistentSaveType:2 null
                                $scope.testSysStBookingEx = data.testSysStBooking.sysStBookingEx;
                                //子对象TestSysStBookingCtnRequest
                                if ($scope && $scope.testSysStBookingCtnRequestGrid) {
                                    $scope.testSysStBookingCtnRequestGrid._reset();
                                    $scope.testSysStBookingCtnRequests.splice(0, $scope.testSysStBookingCtnRequests.length);
                                    $scope.testSysStBookingCtnRequest = {};
                                    $scope.testSysStBookingCtnRequestDeleteds = [];
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                    $scope.getTestSysStBookingCtnRequestPages();
                                }
                                //subBo TestSysStBookingCtnRequest
                                //子对象TestSysStBookingCargo
                                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testSysStBookingCargoGrid) {
                                    if ($scope.f0131ApiF01311Scope.testSysStBookingCargoGrid) {
                                        if ($scope.f0131ApiF01311Scope.TestSysStBookingCargoForm && $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$validator) {
                                            $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$validator.reset();
                                            $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF01311Scope.testSysStBookingCargoGrid._reset();
                                    $scope.f0131ApiF01311Scope.testSysStBookingCargos.splice(0, $scope.f0131ApiF01311Scope.testSysStBookingCargos.length);
                                    $scope.f0131ApiF01311Scope.testSysStBookingCargo = {};
                                    $scope.f0131ApiF01311Scope.testSysStBookingCargoDeleteds = [];
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                    $scope.f0131ApiF01311Scope.getTestSysStBookingCargoPages();
                                }
                                //subBo TestSysStBookingCargo
                                //子对象TestStBookingCargoA
                                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoAGrid) {
                                    $scope.f0131ApiF01311Scope.testStBookingCargoAGrid._reset();
                                    $scope.f0131ApiF01311Scope.testStBookingCargoAs.splice(0, $scope.f0131ApiF01311Scope.testStBookingCargoAs.length);
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                }
                                //subBo TestStBookingCargoA
                                //子对象TestStBookingCargoC
                                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoCGrid) {
                                    $scope.f0131ApiF01311Scope.testStBookingCargoCGrid._reset();
                                    $scope.f0131ApiF01311Scope.testStBookingCargoCs.splice(0, $scope.f0131ApiF01311Scope.testStBookingCargoCs.length);
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                }
                                //subBo TestStBookingCargoC
                                //子对象TestStBookingCargoCa
                                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid) {
                                    $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid._reset();
                                    $scope.f0131ApiF01311Scope.testStBookingCargoCas.splice(0, $scope.f0131ApiF01311Scope.testStBookingCargoCas.length);
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                }
                                //subBo TestStBookingCargoCa
                                //子对象TestStBookingCargoB
                                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoBGrid) {
                                    $scope.f0131ApiF01311Scope.testStBookingCargoBGrid._reset();
                                    $scope.f0131ApiF01311Scope.testStBookingCargoBs.splice(0, $scope.f0131ApiF01311Scope.testStBookingCargoBs.length);
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                }
                                //subBo TestStBookingCargoB
                                //子对象TestBkContainer
                                if ($scope.f0131ApiF01331Scope && $scope.f0131ApiF01331Scope.testBkContainerGrid) {
                                    $scope.f0131ApiF01331Scope.testBkContainerGrid._reset();
                                    $scope.f0131ApiF01331Scope.testBkContainers.splice(0, $scope.f0131ApiF01331Scope.testBkContainers.length);
                                    $scope.f0131ApiF01331Scope.testBkContainer = {};
                                    $scope.f0131ApiF01331Scope.testBkContainerDeleteds = [];
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                    $scope.f0131ApiF01331Scope.getTestBkContainerPages();
                                }
                                //subBo TestBkContainer
                                //子对象TestContainerCargo
                                if ($scope.f0131ApiF01331Scope && $scope.f0131ApiF01331Scope.testContainerCargoGrid) {
                                    $scope.f0131ApiF01331Scope.testContainerCargoGrid._reset();
                                    $scope.f0131ApiF01331Scope.testContainerCargos.splice(0, $scope.f0131ApiF01331Scope.testContainerCargos.length);
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                }
                                //subBo TestContainerCargo
                                //界面布局不存在TestSysStBookingEx表格。。
                                //subBo TestSysStBookingEx
                                if ($scope._pageState) $scope._pageState.resetDataState();
                                GillionMsg.alert("提示", data.msg, null);


                                var indexScope = top.angular.element("body").scope();
                                indexScope.refresh($scope.openType, "TestSysStBooking");
                            }
                            $timeout(function () {
                                if ($scope.f0131ApiF01311Scope._pageState) $scope.f0131ApiF01311Scope._pageState.resetDataState();
                                if ($scope.f0131ApiF01331Scope._pageState) $scope.f0131ApiF01331Scope._pageState.resetDataState();
                                if ($scope._pageState) $scope._pageState.resetDataState();
                            });
                        }).error(function () {
                            layer.close(tip);
                        });


                    }
                    else {
                        //TABS F0-1-3-1
                        if (selectTabIndexs.length > 0)
                            $scope.F0131Api.selectTab(_.min(selectTabIndexs));
                    }
                }//callback
                var gridRequiresPromises = [];
                if (gridAsynRequiresPromises && gridAsynRequiresPromises.length > 0)
                    gridRequiresPromises = gridRequiresPromises.concat(gridAsynRequiresPromises);

                if (gridRequiresPromises && gridRequiresPromises.length > 0) {
                    $q.all(gridRequiresPromises).then(function () {
                        callback();
                    }).catch(function (result) {
                        console.log("数据校验未通过！");
                        if (RuleService && RuleService.showTabValidationMsg) {
                            if (contentHint != "") {
                                GillionMsg.alert('提示', contentHint + "页面信息不全,保存失败！", null);
                            }
                        }
                        //TABS F0-1-3-1
                        //TAB y F0-1-3-3-1 F0131Api 0
                        var tabs3_F0131Api_Require_Valid = true;
                        if ($scope.f0131ApiF01331Scope.testBkContainerGrid && $scope.f0131ApiF01331Scope.testBkContainerGrid.formController) {
                            if (!$scope.f0131ApiF01331Scope.testBkContainerGrid.formController.$valid || $scope.f0131ApiF01331Scope.testBkContainerGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01331Scope.testBkContainerGrid.$$requireGridValid;
                                tabs3_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if ($scope.f0131ApiF01331Scope.testContainerCargoGrid && $scope.f0131ApiF01331Scope.testContainerCargoGrid.formController) {
                            if (!$scope.f0131ApiF01331Scope.testContainerCargoGrid.formController.$valid || $scope.f0131ApiF01331Scope.testContainerCargoGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01331Scope.testContainerCargoGrid.$$requireGridValid;
                                tabs3_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if (!tabs3_F0131Api_Require_Valid) {
                            $scope.F0131Api.selectTab(2);
                        }
                        //TAB y F0-1-3-1-1 F0131Api 0
                        var tabs2_F0131Api_Require_Valid = true;
                        if ($scope.f0131ApiF01311Scope.testStBookingCargoAGrid && $scope.f0131ApiF01311Scope.testStBookingCargoAGrid.formController) {
                            if (!$scope.f0131ApiF01311Scope.testStBookingCargoAGrid.formController.$valid || $scope.f0131ApiF01311Scope.testStBookingCargoAGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01311Scope.testStBookingCargoAGrid.$$requireGridValid;
                                tabs2_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if ($scope.f0131ApiF01311Scope.testStBookingCargoBGrid && $scope.f0131ApiF01311Scope.testStBookingCargoBGrid.formController) {
                            if (!$scope.f0131ApiF01311Scope.testStBookingCargoBGrid.formController.$valid || $scope.f0131ApiF01311Scope.testStBookingCargoBGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01311Scope.testStBookingCargoBGrid.$$requireGridValid;
                                tabs2_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if ($scope.f0131ApiF01311Scope.testStBookingCargoCGrid && $scope.f0131ApiF01311Scope.testStBookingCargoCGrid.formController) {
                            if (!$scope.f0131ApiF01311Scope.testStBookingCargoCGrid.formController.$valid || $scope.f0131ApiF01311Scope.testStBookingCargoCGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01311Scope.testStBookingCargoCGrid.$$requireGridValid;
                                tabs2_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if ($scope.f0131ApiF01311Scope.testStBookingCargoCaGrid && $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.formController) {
                            if (!$scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.formController.$valid || $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.$$requireGridValid;
                                tabs2_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if (!tabs2_F0131Api_Require_Valid) {
                            $scope.F0131Api.selectTab(1);
                        }
                        //TAB y F0-1-3-2-1 F0131Api 0
                        var tabs1_F0131Api_Require_Valid = true;
                        if ($scope.testSysStBookingCtnRequestGrid && $scope.testSysStBookingCtnRequestGrid.formController) {
                            if (!$scope.testSysStBookingCtnRequestGrid.formController.$valid || $scope.testSysStBookingCtnRequestGrid.$$requireGridValid == false) {
                                delete $scope.testSysStBookingCtnRequestGrid.$$requireGridValid;
                                tabs1_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if (!tabs1_F0131Api_Require_Valid) {
                            $scope.F0131Api.selectTab(0);
                        }
                        //TABS F0-1-3-1
                        if (selectTabIndexs.length > 0)
                            $scope.F0131Api.selectTab(_.min(selectTabIndexs));
                    }).finally(function (result) {
                        console.log("执行表格非空校验.");
                    });
                } else {
                    callback();
                }
            };
//TODO 20171019 linjx FORM START saveAndAddNew_form

            /**
             * TODO GLPaaS生成
             * 保存并新增 海运出口订单
             */
            $scope.saveAndAddNew = function () {
                var contentHint = "";
                //校验联想控件是否初始化完
                if (!$scope._associateInitValid($scope)) {
                    return;
                }
                //haveTabLoadSupport : X
                $scope.f0131ApiF01311Scope = GillionTabService.invoke('货物', $scope.f0131ApiF01311Url, "$scope", null) || {};
                $scope.f0131ApiF01331Scope = GillionTabService.invoke('集装箱', $scope.f0131ApiF01331Url, "$scope", null) || {};
                //子对象TestSysStBookingCtnRequest
                if ($scope && $scope.testSysStBookingCtnRequestGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestSysStBookingCtnRequest
                //子对象TestSysStBookingCargo
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testSysStBookingCargoGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestSysStBookingCargo
                //子对象TestStBookingCargoA
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoAGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestStBookingCargoA
                //子对象TestStBookingCargoC
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoCGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestStBookingCargoC
                //子对象TestStBookingCargoCa
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestStBookingCargoCa
                //子对象TestStBookingCargoB
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoBGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestStBookingCargoB
                //子对象TestBkContainer
                if ($scope.f0131ApiF01331Scope && $scope.f0131ApiF01331Scope.testBkContainerGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestBkContainer
                //子对象TestContainerCargo
                if ($scope.f0131ApiF01331Scope && $scope.f0131ApiF01331Scope.testContainerCargoGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestContainerCargo
                //界面布局不存在TestSysStBookingEx表格。。
                //subBo TestSysStBookingEx
                if ($scope.form1 && $scope.form1.$validator && $scope.form1.verify && $scope.testSysStBooking && $scope.testSysStBooking.hasOwnProperty('stBookingId')) {
                    $scope.form1.$validator.enable();
                    $scope.form1.verify();
                }
                if ($scope.form2 && $scope.form2.$validator && $scope.form2.verify && $scope.testSysStBooking && $scope.testSysStBooking.hasOwnProperty('stBookingId')) {
                    $scope.form2.$validator.enable();
                    $scope.form2.verify();
                }
                if ($scope.form3 && $scope.form3.$validator && $scope.form3.verify && $scope.testSysStBooking && $scope.testSysStBooking.hasOwnProperty('stBookingId')) {
                    $scope.form3.$validator.enable();
                    $scope.form3.verify();
                }
                if ($scope.form4 && $scope.form4.$validator && $scope.form4.verify && $scope.testSysStBooking && $scope.testSysStBooking.hasOwnProperty('stBookingId')) {
                    $scope.form4.$validator.enable();
                    $scope.form4.verify();
                }
                if ($scope.form5 && $scope.form5.$validator && $scope.form5.verify && $scope.testSysStBooking && $scope.testSysStBooking.hasOwnProperty('stBookingId')) {
                    $scope.form5.$validator.enable();
                    $scope.form5.verify();
                }
                var allValidationFlag = true;
                var gridAsynRequiresPromises = [];
                var selectTabIndexs = [];
                //TABS F0-1-3-1
                //TAB  F0-1-3-3-1 F0131Api 0
                var tabs3_F0131Api_Valid = true;
                var tabs3_F0131Api_Valid_index = 2;
                // DIV;GRID_TOOLBAR;F0-1-3-3-1-1
                // DIV;GRID;F0-1-3-3-1-2

                if ($scope.f0131ApiF01331Scope.testBkContainerGrid) {
                    var testBkContainerGridAsynRequiresPromises = $scope.f0131ApiF01331Scope.testBkContainerGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01331Scope.testBkContainerGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01331Scope.testBkContainerGrid, $scope.f0131ApiF01331Scope.testBkContainers, $scope.f0131ApiF01331Scope);
                                }).catch(function () {
                                    tabs3_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("集装箱】") == -1) {
                                        contentHint = contentHint + "\r\n【集装箱】";
                                    }
                                    selectTabIndexs.push(tabs3_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testBkContainerGridAsynRequiresPromises);
                }
                // DIV;GRID_TOOLBAR;F0-1-3-3-1-3
                // DIV;GRID;F0-1-3-3-1-4

                if ($scope.f0131ApiF01331Scope.testContainerCargoGrid) {
                    var testContainerCargoGridAsynRequiresPromises = $scope.f0131ApiF01331Scope.testContainerCargoGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01331Scope.testContainerCargoGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01331Scope.testContainerCargoGrid, $scope.f0131ApiF01331Scope.testContainerCargos, $scope.f0131ApiF01331Scope);
                                }).catch(function () {
                                    tabs3_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("集装箱】") == -1) {
                                        contentHint = contentHint + "\r\n【集装箱】";
                                    }
                                    selectTabIndexs.push(tabs3_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testContainerCargoGridAsynRequiresPromises);
                }
                if (!tabs3_F0131Api_Valid) {
                    contentHint = contentHint + "\r\n【集装箱】";
                    $scope.F0131Api.selectTab(2);
                    selectTabIndexs.push(2);
                    $(".popover").hide();

                }
                //TAB  F0-1-3-1-1 F0131Api 0
                var tabs2_F0131Api_Valid = true;
                var tabs2_F0131Api_Valid_index = 1;
                // DIV;GRID_TOOLBAR;F0-1-3-1-1-1
                // DIV;GRID;F0-1-3-1-1-2

                if ($scope.f0131ApiF01311Scope.testSysStBookingCargo && $scope.f0131ApiF01311Scope.testSysStBookingCargo.stBookingCargoId && $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm) {
                    if ($scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$validator && $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.verify) {
                        $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$validator.enable();
                        $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.verify();
                    }
                    if (!$scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$valid) {
                        tabs2_F0131Api_Valid = false;
                        allValidationFlag = false;
                    }
                }
                // PANEL;;F0-1-3-1-1-3
                // DIV;FORM_HEADER;F0-1-3-1-1-3-1
                // DIV;;F0-1-3-1-1-4
                // DIV;;F0-1-3-1-1-4-1
                // DIV;GRID_TOOLBAR;F0-1-3-1-1-4-1-1
                // DIV;GRID;F0-1-3-1-1-4-1-2

                if ($scope.f0131ApiF01311Scope.testStBookingCargoAGrid) {
                    var testStBookingCargoAGridAsynRequiresPromises = $scope.f0131ApiF01311Scope.testStBookingCargoAGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01311Scope.testStBookingCargoAGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01311Scope.testStBookingCargoAGrid, $scope.f0131ApiF01311Scope.testStBookingCargoAs, $scope.f0131ApiF01311Scope);
                                }).catch(function () {
                                    tabs2_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("货物】") == -1) {
                                        contentHint = contentHint + "\r\n【货物】";
                                    }
                                    selectTabIndexs.push(tabs2_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testStBookingCargoAGridAsynRequiresPromises);
                }
                // DIV;;F0-1-3-1-1-4-2
                // DIV;GRID_TOOLBAR;F0-1-3-1-1-4-2-1
                // DIV;GRID;F0-1-3-1-1-4-2-2

                if ($scope.f0131ApiF01311Scope.testStBookingCargoBGrid) {
                    var testStBookingCargoBGridAsynRequiresPromises = $scope.f0131ApiF01311Scope.testStBookingCargoBGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01311Scope.testStBookingCargoBGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01311Scope.testStBookingCargoBGrid, $scope.f0131ApiF01311Scope.testStBookingCargoBs, $scope.f0131ApiF01311Scope);
                                }).catch(function () {
                                    tabs2_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("货物】") == -1) {
                                        contentHint = contentHint + "\r\n【货物】";
                                    }
                                    selectTabIndexs.push(tabs2_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testStBookingCargoBGridAsynRequiresPromises);
                }
                // DIV;;F0-1-3-1-1-4-3
                // DIV;GRID_TOOLBAR;F0-1-3-1-1-4-3-1
                // DIV;GRID;F0-1-3-1-1-4-3-2

                if ($scope.f0131ApiF01311Scope.testStBookingCargoCGrid) {
                    var testStBookingCargoCGridAsynRequiresPromises = $scope.f0131ApiF01311Scope.testStBookingCargoCGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01311Scope.testStBookingCargoCGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01311Scope.testStBookingCargoCGrid, $scope.f0131ApiF01311Scope.testStBookingCargoCs, $scope.f0131ApiF01311Scope);
                                }).catch(function () {
                                    tabs2_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("货物】") == -1) {
                                        contentHint = contentHint + "\r\n【货物】";
                                    }
                                    selectTabIndexs.push(tabs2_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testStBookingCargoCGridAsynRequiresPromises);
                }
                // DIV;;F0-1-3-1-1-5
                // DIV;GRID_TOOLBAR;F0-1-3-1-1-5-1
                // DIV;GRID;F0-1-3-1-1-5-2

                if ($scope.f0131ApiF01311Scope.testStBookingCargoCaGrid) {
                    var testStBookingCargoCaGridAsynRequiresPromises = $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01311Scope.testStBookingCargoCaGrid, $scope.f0131ApiF01311Scope.testStBookingCargoCas, $scope.f0131ApiF01311Scope);
                                }).catch(function () {
                                    tabs2_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("货物】") == -1) {
                                        contentHint = contentHint + "\r\n【货物】";
                                    }
                                    selectTabIndexs.push(tabs2_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testStBookingCargoCaGridAsynRequiresPromises);
                }
                if (!tabs2_F0131Api_Valid) {
                    contentHint = contentHint + "\r\n【货物】";
                    $scope.F0131Api.selectTab(1);
                    selectTabIndexs.push(1);
                    $(".popover").hide();

                }
                //TAB  F0-1-3-2-1 F0131Api 0
                var tabs1_F0131Api_Valid = true;
                var tabs1_F0131Api_Valid_index = 0;
                // DIV;;F0-1-3-2-1-1-1
                // DIV;;F0-1-3-2-1-1-1-1
                // FORM;;NewCell-1509850020564
                if ($scope.form2 && !$scope.form2.$valid) {
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false;
                }
                // DIV;;F0-1-3-2-1-1-1-2
                // FORM;;NewCell-1509850043647
                if ($scope.form3 && !$scope.form3.$valid) {
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false;
                }
                // DIV;;F0-1-3-2-1-1-1-3
                // DIV;;F0-1-3-2-1-1-1-3-2
                // GROUP;;F0-1-3-2-1-1-1-3-2-1
                // DIV;GRID_TOOLBAR;F0-1-3-2-1-1-1-3-2-1-1
                // DIV;GRID;F0-1-3-2-1-1-1-3-2-1-2

                if ($scope.testSysStBookingCtnRequestGrid) {
                    var testSysStBookingCtnRequestGridAsynRequiresPromises = $scope.testSysStBookingCtnRequestGrid.finishEdit()
                        .then(function () {
                            return $scope.testSysStBookingCtnRequestGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.testSysStBookingCtnRequestGrid, $scope.testSysStBookingCtnRequests, $scope);
                                }).catch(function () {
                                    tabs1_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("基本信息】") == -1) {
                                        contentHint = contentHint + "\r\n【基本信息】";
                                    }
                                    selectTabIndexs.push(tabs1_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testSysStBookingCtnRequestGridAsynRequiresPromises);
                }
                // FORM;;NewCell-1509850069474
                if ($scope.form4 && !$scope.form4.$valid) {
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false;
                }
                // DIV;;F0-1-3-2-1-1-1-4
                // FORM;;NewCell-1509850090791
                if ($scope.form5 && !$scope.form5.$valid) {
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false;
                }
                if (!tabs1_F0131Api_Valid) {
                    contentHint = contentHint + "\r\n【基本信息】";
                    $scope.F0131Api.selectTab(0);
                    selectTabIndexs.push(0);
                    $(".popover").hide();
                    var errF01321s = [];
                    // DIV F0-1-3-2-1-1-1
                    // DIV F0-1-3-2-1-1-1-1
                    // FORM NewCell-1509850020564
                    if ($scope.form2 && $scope.form2.$error) {
                        for (var prop in $scope.form2.$error) {
                            if (angular.isArray($scope.form2.$error[prop])) {
                                errF01321s = errF01321s.concat($scope.form2.$error[prop]);
                            }
                        }
                    }
                    // DIV F0-1-3-2-1-1-1-2
                    // FORM NewCell-1509850043647
                    if ($scope.form3 && $scope.form3.$error) {
                        for (var prop in $scope.form3.$error) {
                            if (angular.isArray($scope.form3.$error[prop])) {
                                errF01321s = errF01321s.concat($scope.form3.$error[prop]);
                            }
                        }
                    }
                    // DIV F0-1-3-2-1-1-1-3
                    // DIV F0-1-3-2-1-1-1-3-2
                    // GROUP F0-1-3-2-1-1-1-3-2-1
                    // DIV F0-1-3-2-1-1-1-3-2-1-1
                    // DIV F0-1-3-2-1-1-1-3-2-1-2
                    // FORM NewCell-1509850069474
                    if ($scope.form4 && $scope.form4.$error) {
                        for (var prop in $scope.form4.$error) {
                            if (angular.isArray($scope.form4.$error[prop])) {
                                errF01321s = errF01321s.concat($scope.form4.$error[prop]);
                            }
                        }
                    }
                    // DIV F0-1-3-2-1-1-1-4
                    // FORM NewCell-1509850090791
                    if ($scope.form5 && $scope.form5.$error) {
                        for (var prop in $scope.form5.$error) {
                            if (angular.isArray($scope.form5.$error[prop])) {
                                errF01321s = errF01321s.concat($scope.form5.$error[prop]);
                            }
                        }
                    }
                    for (var j = 0; j < errF01321s.length; j++) {
                        if ($("input[name='" + errF01321s[j].$name + "']").parents("div[api]")[0]) {
                            var apiName = $("input[name='" + errF01321s[j].$name + "']").parents("div[api]")[0].attributes.api.value;
                            var title = $("input[name='" + errF01321s[j].$name + "']").parents("div[title]")[0].attributes.title.value;
                            $scope[apiName].selectTab(title + "_" + undefined);
                            if ($("input[name='" + errF01321s[j].$name + "']")[0])
                                $("input[name='" + errF01321s[j].$name + "']")[0].focus();
                        }
                    }

                }
                if (!$scope.form1.$valid) //FORM
                    allValidationFlag = false;
                var callback = function () { //callback
                    if (RuleService && RuleService.showTabValidationMsg) {
                        if (!allValidationFlag && contentHint != "") {
                            GillionMsg.alert('提示', contentHint + "页面信息不全,保存失败！", null);
                        }
                    }

                    if (allValidationFlag) {
                        if (RuleService.beforeSaveHintModMsg && (!$scope._pageState || !$scope._pageState.isDataModified || !$scope._pageState.isDataModified())) {
                            // 数据变更未保存提醒
                            GillionMsg.show({
                                title: '提示',
                                msg: '当前页面数据未修改，无需保存！',
                                buttons: [{
                                    text: '确定',
                                    type: 'sure',
                                    handler: function () {
                                        $scope.$apply(function () {
                                            //$scope.saveAndAddNew(true);
                                        });
                                    }
                                }]
                            });
                            return;
                        }

                        var param = $scope.testSysStBooking;
                        //subBoName:TestSysStBookingCtnRequest subBoRelType:2 objectType:0 persistentSaveType:2 null
                        if ($scope.testSysStBookingCtnRequests)
                            param.testSysStBookingCtnRequests = $scope.testSysStBookingCtnRequests.concat($scope.testSysStBookingCtnRequestDeleteds);
                        //subBoName:TestSysStBookingCargo subBoRelType:2 objectType:0 persistentSaveType:2 null
                        if ($scope.f0131ApiF01311Scope.testSysStBookingCargos)
                            param.testSysStBookingCargos = $scope.f0131ApiF01311Scope.testSysStBookingCargos.concat($scope.f0131ApiF01311Scope.testSysStBookingCargoDeleteds);
                        //subBoName:TestBkContainer subBoRelType:2 objectType:3 persistentSaveType:2 null
                        if ($scope.f0131ApiF01331Scope.testBkContainers)
                            param.testBkContainers = $scope.f0131ApiF01331Scope.testBkContainers.concat($scope.f0131ApiF01331Scope.testBkContainerDeleteds);
                        //subBoName:TestSysStBookingEx subBoRelType:1 objectType:0 persistentSaveType:2 null
                        param.sysStBookingEx = $scope.testSysStBookingEx;

                        var tip = layer.load(0, $config.shadeConfig);
                        $scope.isLoading = true;

                        $http.post($config.ctx + '/testSysStBooking/saveAndAddNew', param).success(function (data) {
                            layer.close(tip);
                            $scope.isLoading = false;
                            if (data.success != undefined && data.success == true) {

                                var initFormData = function () {
                                    var url = "/html/sample/bas/testSysStBookingAdd.html";
                                    var openType = "1";
                                    if (url.indexOf("?") >= 0) {
                                        url = url + "&openType=" + openType;
                                    } else {
                                        url = url + "?openType=" + openType;
                                    }

                                    window.location.href = url;
                                };
                                if ($scope.TestSysStBookingForm && $scope.TestSysStBookingForm.$validator)
                                    $scope.TestSysStBookingForm.$validator.reset();
                                GillionMsg.alert("提示", data.msg, null, {
                                    onClose: function () {
                                        initFormData();
                                        if ($scope.initGridDefaultValue)
                                            $scope.initGridDefaultValue();
                                        $timeout(function () {
                                            $scope.initFocus();
                                        }, 300);
                                    }
                                });


                                var indexScope = top.angular.element("body").scope();
                                indexScope.refresh($scope.openType, "TestSysStBooking");
                            }
                            $timeout(function () {
                                if ($scope.f0131ApiF01311Scope._pageState) $scope.f0131ApiF01311Scope._pageState.resetDataState();
                                if ($scope.f0131ApiF01331Scope._pageState) $scope.f0131ApiF01331Scope._pageState.resetDataState();
                                if ($scope._pageState) $scope._pageState.resetDataState();
                            });
                        }).error(function () {
                            layer.close(tip);
                        });


                    }
                    else {
                        //TABS F0-1-3-1
                        if (selectTabIndexs.length > 0)
                            $scope.F0131Api.selectTab(_.min(selectTabIndexs));
                    }
                }//callback
                var gridRequiresPromises = [];
                if (gridAsynRequiresPromises && gridAsynRequiresPromises.length > 0)
                    gridRequiresPromises = gridRequiresPromises.concat(gridAsynRequiresPromises);

                if (gridRequiresPromises && gridRequiresPromises.length > 0) {
                    $q.all(gridRequiresPromises).then(function () {
                        callback();
                    }).catch(function (result) {
                        console.log("数据校验未通过！");
                        if (RuleService && RuleService.showTabValidationMsg) {
                            if (contentHint != "") {
                                GillionMsg.alert('提示', contentHint + "页面信息不全,保存失败！", null);
                            }
                        }
                        //TABS F0-1-3-1
                        //TAB y F0-1-3-3-1 F0131Api 0
                        var tabs3_F0131Api_Require_Valid = true;
                        if ($scope.f0131ApiF01331Scope.testBkContainerGrid && $scope.f0131ApiF01331Scope.testBkContainerGrid.formController) {
                            if (!$scope.f0131ApiF01331Scope.testBkContainerGrid.formController.$valid || $scope.f0131ApiF01331Scope.testBkContainerGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01331Scope.testBkContainerGrid.$$requireGridValid;
                                tabs3_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if ($scope.f0131ApiF01331Scope.testContainerCargoGrid && $scope.f0131ApiF01331Scope.testContainerCargoGrid.formController) {
                            if (!$scope.f0131ApiF01331Scope.testContainerCargoGrid.formController.$valid || $scope.f0131ApiF01331Scope.testContainerCargoGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01331Scope.testContainerCargoGrid.$$requireGridValid;
                                tabs3_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if (!tabs3_F0131Api_Require_Valid) {
                            $scope.F0131Api.selectTab(2);
                        }
                        //TAB y F0-1-3-1-1 F0131Api 0
                        var tabs2_F0131Api_Require_Valid = true;
                        if ($scope.f0131ApiF01311Scope.testStBookingCargoAGrid && $scope.f0131ApiF01311Scope.testStBookingCargoAGrid.formController) {
                            if (!$scope.f0131ApiF01311Scope.testStBookingCargoAGrid.formController.$valid || $scope.f0131ApiF01311Scope.testStBookingCargoAGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01311Scope.testStBookingCargoAGrid.$$requireGridValid;
                                tabs2_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if ($scope.f0131ApiF01311Scope.testStBookingCargoBGrid && $scope.f0131ApiF01311Scope.testStBookingCargoBGrid.formController) {
                            if (!$scope.f0131ApiF01311Scope.testStBookingCargoBGrid.formController.$valid || $scope.f0131ApiF01311Scope.testStBookingCargoBGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01311Scope.testStBookingCargoBGrid.$$requireGridValid;
                                tabs2_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if ($scope.f0131ApiF01311Scope.testStBookingCargoCGrid && $scope.f0131ApiF01311Scope.testStBookingCargoCGrid.formController) {
                            if (!$scope.f0131ApiF01311Scope.testStBookingCargoCGrid.formController.$valid || $scope.f0131ApiF01311Scope.testStBookingCargoCGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01311Scope.testStBookingCargoCGrid.$$requireGridValid;
                                tabs2_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if ($scope.f0131ApiF01311Scope.testStBookingCargoCaGrid && $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.formController) {
                            if (!$scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.formController.$valid || $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.$$requireGridValid;
                                tabs2_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if (!tabs2_F0131Api_Require_Valid) {
                            $scope.F0131Api.selectTab(1);
                        }
                        //TAB y F0-1-3-2-1 F0131Api 0
                        var tabs1_F0131Api_Require_Valid = true;
                        if ($scope.testSysStBookingCtnRequestGrid && $scope.testSysStBookingCtnRequestGrid.formController) {
                            if (!$scope.testSysStBookingCtnRequestGrid.formController.$valid || $scope.testSysStBookingCtnRequestGrid.$$requireGridValid == false) {
                                delete $scope.testSysStBookingCtnRequestGrid.$$requireGridValid;
                                tabs1_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if (!tabs1_F0131Api_Require_Valid) {
                            $scope.F0131Api.selectTab(0);
                        }
                        //TABS F0-1-3-1
                        if (selectTabIndexs.length > 0)
                            $scope.F0131Api.selectTab(_.min(selectTabIndexs));
                    }).finally(function (result) {
                        console.log("执行表格非空校验.");
                    });
                } else {
                    callback();
                }
            };
//TODO 20171019 linjx FORM START update_form

            /**
             * TODO GLPaaS生成
             * 修改保存 海运出口订单
             */
            $scope.update = function () {
                var contentHint = "";
                //校验联想控件是否初始化完
                if (!$scope._associateInitValid($scope)) {
                    return;
                }
                //haveTabLoadSupport : X
                $scope.f0131ApiF01311Scope = GillionTabService.invoke('货物', $scope.f0131ApiF01311Url, "$scope", null) || {};
                $scope.f0131ApiF01331Scope = GillionTabService.invoke('集装箱', $scope.f0131ApiF01331Url, "$scope", null) || {};
                //子对象TestSysStBookingCtnRequest
                if ($scope && $scope.testSysStBookingCtnRequestGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestSysStBookingCtnRequest
                //子对象TestSysStBookingCargo
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testSysStBookingCargoGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestSysStBookingCargo
                //子对象TestStBookingCargoA
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoAGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestStBookingCargoA
                //子对象TestStBookingCargoC
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoCGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestStBookingCargoC
                //子对象TestStBookingCargoCa
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestStBookingCargoCa
                //子对象TestStBookingCargoB
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoBGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestStBookingCargoB
                //子对象TestBkContainer
                if ($scope.f0131ApiF01331Scope && $scope.f0131ApiF01331Scope.testBkContainerGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestBkContainer
                //子对象TestContainerCargo
                if ($scope.f0131ApiF01331Scope && $scope.f0131ApiF01331Scope.testContainerCargoGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestContainerCargo
                //界面布局不存在TestSysStBookingEx表格。。
                //subBo TestSysStBookingEx
                if ($scope.form1 && $scope.form1.$validator && $scope.form1.verify && $scope.testSysStBooking && $scope.testSysStBooking.hasOwnProperty('stBookingId')) {
                    $scope.form1.$validator.enable();
                    $scope.form1.verify();
                }
                if ($scope.form2 && $scope.form2.$validator && $scope.form2.verify && $scope.testSysStBooking && $scope.testSysStBooking.hasOwnProperty('stBookingId')) {
                    $scope.form2.$validator.enable();
                    $scope.form2.verify();
                }
                if ($scope.form3 && $scope.form3.$validator && $scope.form3.verify && $scope.testSysStBooking && $scope.testSysStBooking.hasOwnProperty('stBookingId')) {
                    $scope.form3.$validator.enable();
                    $scope.form3.verify();
                }
                if ($scope.form4 && $scope.form4.$validator && $scope.form4.verify && $scope.testSysStBooking && $scope.testSysStBooking.hasOwnProperty('stBookingId')) {
                    $scope.form4.$validator.enable();
                    $scope.form4.verify();
                }
                if ($scope.form5 && $scope.form5.$validator && $scope.form5.verify && $scope.testSysStBooking && $scope.testSysStBooking.hasOwnProperty('stBookingId')) {
                    $scope.form5.$validator.enable();
                    $scope.form5.verify();
                }
                var allValidationFlag = true;
                var gridAsynRequiresPromises = [];
                var selectTabIndexs = [];
                //TABS F0-1-3-1
                //TAB  F0-1-3-3-1 F0131Api 0
                var tabs3_F0131Api_Valid = true;
                var tabs3_F0131Api_Valid_index = 2;
                // DIV;GRID_TOOLBAR;F0-1-3-3-1-1
                // DIV;GRID;F0-1-3-3-1-2

                if ($scope.f0131ApiF01331Scope.testBkContainerGrid) {
                    var testBkContainerGridAsynRequiresPromises = $scope.f0131ApiF01331Scope.testBkContainerGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01331Scope.testBkContainerGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01331Scope.testBkContainerGrid, $scope.f0131ApiF01331Scope.testBkContainers, $scope.f0131ApiF01331Scope);
                                }).catch(function () {
                                    tabs3_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("集装箱】") == -1) {
                                        contentHint = contentHint + "\r\n【集装箱】";
                                    }
                                    selectTabIndexs.push(tabs3_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testBkContainerGridAsynRequiresPromises);
                }
                // DIV;GRID_TOOLBAR;F0-1-3-3-1-3
                // DIV;GRID;F0-1-3-3-1-4

                if ($scope.f0131ApiF01331Scope.testContainerCargoGrid) {
                    var testContainerCargoGridAsynRequiresPromises = $scope.f0131ApiF01331Scope.testContainerCargoGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01331Scope.testContainerCargoGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01331Scope.testContainerCargoGrid, $scope.f0131ApiF01331Scope.testContainerCargos, $scope.f0131ApiF01331Scope);
                                }).catch(function () {
                                    tabs3_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("集装箱】") == -1) {
                                        contentHint = contentHint + "\r\n【集装箱】";
                                    }
                                    selectTabIndexs.push(tabs3_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testContainerCargoGridAsynRequiresPromises);
                }
                if (!tabs3_F0131Api_Valid) {
                    contentHint = contentHint + "\r\n【集装箱】";
                    $scope.F0131Api.selectTab(2);
                    selectTabIndexs.push(2);
                    $(".popover").hide();

                }
                //TAB  F0-1-3-1-1 F0131Api 0
                var tabs2_F0131Api_Valid = true;
                var tabs2_F0131Api_Valid_index = 1;
                // DIV;GRID_TOOLBAR;F0-1-3-1-1-1
                // DIV;GRID;F0-1-3-1-1-2

                if ($scope.f0131ApiF01311Scope.testSysStBookingCargo && $scope.f0131ApiF01311Scope.testSysStBookingCargo.stBookingCargoId && $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm) {
                    if ($scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$validator && $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.verify) {
                        $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$validator.enable();
                        $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.verify();
                    }
                    if (!$scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$valid) {
                        tabs2_F0131Api_Valid = false;
                        allValidationFlag = false;
                    }
                }
                // PANEL;;F0-1-3-1-1-3
                // DIV;FORM_HEADER;F0-1-3-1-1-3-1
                // DIV;;F0-1-3-1-1-4
                // DIV;;F0-1-3-1-1-4-1
                // DIV;GRID_TOOLBAR;F0-1-3-1-1-4-1-1
                // DIV;GRID;F0-1-3-1-1-4-1-2

                if ($scope.f0131ApiF01311Scope.testStBookingCargoAGrid) {
                    var testStBookingCargoAGridAsynRequiresPromises = $scope.f0131ApiF01311Scope.testStBookingCargoAGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01311Scope.testStBookingCargoAGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01311Scope.testStBookingCargoAGrid, $scope.f0131ApiF01311Scope.testStBookingCargoAs, $scope.f0131ApiF01311Scope);
                                }).catch(function () {
                                    tabs2_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("货物】") == -1) {
                                        contentHint = contentHint + "\r\n【货物】";
                                    }
                                    selectTabIndexs.push(tabs2_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testStBookingCargoAGridAsynRequiresPromises);
                }
                // DIV;;F0-1-3-1-1-4-2
                // DIV;GRID_TOOLBAR;F0-1-3-1-1-4-2-1
                // DIV;GRID;F0-1-3-1-1-4-2-2

                if ($scope.f0131ApiF01311Scope.testStBookingCargoBGrid) {
                    var testStBookingCargoBGridAsynRequiresPromises = $scope.f0131ApiF01311Scope.testStBookingCargoBGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01311Scope.testStBookingCargoBGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01311Scope.testStBookingCargoBGrid, $scope.f0131ApiF01311Scope.testStBookingCargoBs, $scope.f0131ApiF01311Scope);
                                }).catch(function () {
                                    tabs2_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("货物】") == -1) {
                                        contentHint = contentHint + "\r\n【货物】";
                                    }
                                    selectTabIndexs.push(tabs2_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testStBookingCargoBGridAsynRequiresPromises);
                }
                // DIV;;F0-1-3-1-1-4-3
                // DIV;GRID_TOOLBAR;F0-1-3-1-1-4-3-1
                // DIV;GRID;F0-1-3-1-1-4-3-2

                if ($scope.f0131ApiF01311Scope.testStBookingCargoCGrid) {
                    var testStBookingCargoCGridAsynRequiresPromises = $scope.f0131ApiF01311Scope.testStBookingCargoCGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01311Scope.testStBookingCargoCGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01311Scope.testStBookingCargoCGrid, $scope.f0131ApiF01311Scope.testStBookingCargoCs, $scope.f0131ApiF01311Scope);
                                }).catch(function () {
                                    tabs2_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("货物】") == -1) {
                                        contentHint = contentHint + "\r\n【货物】";
                                    }
                                    selectTabIndexs.push(tabs2_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testStBookingCargoCGridAsynRequiresPromises);
                }
                // DIV;;F0-1-3-1-1-5
                // DIV;GRID_TOOLBAR;F0-1-3-1-1-5-1
                // DIV;GRID;F0-1-3-1-1-5-2

                if ($scope.f0131ApiF01311Scope.testStBookingCargoCaGrid) {
                    var testStBookingCargoCaGridAsynRequiresPromises = $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01311Scope.testStBookingCargoCaGrid, $scope.f0131ApiF01311Scope.testStBookingCargoCas, $scope.f0131ApiF01311Scope);
                                }).catch(function () {
                                    tabs2_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("货物】") == -1) {
                                        contentHint = contentHint + "\r\n【货物】";
                                    }
                                    selectTabIndexs.push(tabs2_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testStBookingCargoCaGridAsynRequiresPromises);
                }
                if (!tabs2_F0131Api_Valid) {
                    contentHint = contentHint + "\r\n【货物】";
                    $scope.F0131Api.selectTab(1);
                    selectTabIndexs.push(1);
                    $(".popover").hide();

                }
                //TAB  F0-1-3-2-1 F0131Api 0
                var tabs1_F0131Api_Valid = true;
                var tabs1_F0131Api_Valid_index = 0;
                // DIV;;F0-1-3-2-1-1-1
                // DIV;;F0-1-3-2-1-1-1-1
                // FORM;;NewCell-1509850020564
                if ($scope.form2 && !$scope.form2.$valid) {
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false;
                }
                // DIV;;F0-1-3-2-1-1-1-2
                // FORM;;NewCell-1509850043647
                if ($scope.form3 && !$scope.form3.$valid) {
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false;
                }
                // DIV;;F0-1-3-2-1-1-1-3
                // DIV;;F0-1-3-2-1-1-1-3-2
                // GROUP;;F0-1-3-2-1-1-1-3-2-1
                // DIV;GRID_TOOLBAR;F0-1-3-2-1-1-1-3-2-1-1
                // DIV;GRID;F0-1-3-2-1-1-1-3-2-1-2

                if ($scope.testSysStBookingCtnRequestGrid) {
                    var testSysStBookingCtnRequestGridAsynRequiresPromises = $scope.testSysStBookingCtnRequestGrid.finishEdit()
                        .then(function () {
                            return $scope.testSysStBookingCtnRequestGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.testSysStBookingCtnRequestGrid, $scope.testSysStBookingCtnRequests, $scope);
                                }).catch(function () {
                                    tabs1_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("基本信息】") == -1) {
                                        contentHint = contentHint + "\r\n【基本信息】";
                                    }
                                    selectTabIndexs.push(tabs1_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testSysStBookingCtnRequestGridAsynRequiresPromises);
                }
                // FORM;;NewCell-1509850069474
                if ($scope.form4 && !$scope.form4.$valid) {
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false;
                }
                // DIV;;F0-1-3-2-1-1-1-4
                // FORM;;NewCell-1509850090791
                if ($scope.form5 && !$scope.form5.$valid) {
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false;
                }
                if (!tabs1_F0131Api_Valid) {
                    contentHint = contentHint + "\r\n【基本信息】";
                    $scope.F0131Api.selectTab(0);
                    selectTabIndexs.push(0);
                    $(".popover").hide();
                    var errF01321s = [];
                    // DIV F0-1-3-2-1-1-1
                    // DIV F0-1-3-2-1-1-1-1
                    // FORM NewCell-1509850020564
                    if ($scope.form2 && $scope.form2.$error) {
                        for (var prop in $scope.form2.$error) {
                            if (angular.isArray($scope.form2.$error[prop])) {
                                errF01321s = errF01321s.concat($scope.form2.$error[prop]);
                            }
                        }
                    }
                    // DIV F0-1-3-2-1-1-1-2
                    // FORM NewCell-1509850043647
                    if ($scope.form3 && $scope.form3.$error) {
                        for (var prop in $scope.form3.$error) {
                            if (angular.isArray($scope.form3.$error[prop])) {
                                errF01321s = errF01321s.concat($scope.form3.$error[prop]);
                            }
                        }
                    }
                    // DIV F0-1-3-2-1-1-1-3
                    // DIV F0-1-3-2-1-1-1-3-2
                    // GROUP F0-1-3-2-1-1-1-3-2-1
                    // DIV F0-1-3-2-1-1-1-3-2-1-1
                    // DIV F0-1-3-2-1-1-1-3-2-1-2
                    // FORM NewCell-1509850069474
                    if ($scope.form4 && $scope.form4.$error) {
                        for (var prop in $scope.form4.$error) {
                            if (angular.isArray($scope.form4.$error[prop])) {
                                errF01321s = errF01321s.concat($scope.form4.$error[prop]);
                            }
                        }
                    }
                    // DIV F0-1-3-2-1-1-1-4
                    // FORM NewCell-1509850090791
                    if ($scope.form5 && $scope.form5.$error) {
                        for (var prop in $scope.form5.$error) {
                            if (angular.isArray($scope.form5.$error[prop])) {
                                errF01321s = errF01321s.concat($scope.form5.$error[prop]);
                            }
                        }
                    }
                    for (var j = 0; j < errF01321s.length; j++) {
                        if ($("input[name='" + errF01321s[j].$name + "']").parents("div[api]")[0]) {
                            var apiName = $("input[name='" + errF01321s[j].$name + "']").parents("div[api]")[0].attributes.api.value;
                            var title = $("input[name='" + errF01321s[j].$name + "']").parents("div[title]")[0].attributes.title.value;
                            $scope[apiName].selectTab(title + "_" + undefined);
                            if ($("input[name='" + errF01321s[j].$name + "']")[0])
                                $("input[name='" + errF01321s[j].$name + "']")[0].focus();
                        }
                    }

                }
                if (!$scope.form1.$valid) //FORM
                    allValidationFlag = false;
                var callback = function () { //callback
                    if (RuleService && RuleService.showTabValidationMsg) {
                        if (!allValidationFlag && contentHint != "") {
                            GillionMsg.alert('提示', contentHint + "页面信息不全,保存失败！", null);
                        }
                    }

                    if (allValidationFlag) {
                        if (RuleService.beforeSaveHintModMsg && (!$scope._pageState || !$scope._pageState.isDataModified || !$scope._pageState.isDataModified())) {
                            // 数据变更未保存提醒
                            GillionMsg.show({
                                title: '提示',
                                msg: '当前页面数据未修改，无需保存！',
                                buttons: [{
                                    text: '确定',
                                    type: 'sure',
                                    handler: function () {
                                        $scope.$apply(function () {
                                            //$scope.update(true);
                                        });
                                    }
                                }]
                            });
                            return;
                        }

                        var param = $scope.testSysStBooking;
                        //subBoName:TestSysStBookingCtnRequest subBoRelType:2 objectType:0 persistentSaveType:2 null
                        if ($scope.testSysStBookingCtnRequests)
                            param.testSysStBookingCtnRequests = $scope.testSysStBookingCtnRequests.concat($scope.testSysStBookingCtnRequestDeleteds);
                        //subBoName:TestSysStBookingCargo subBoRelType:2 objectType:0 persistentSaveType:2 null
                        if ($scope.f0131ApiF01311Scope.testSysStBookingCargos)
                            param.testSysStBookingCargos = $scope.f0131ApiF01311Scope.testSysStBookingCargos.concat($scope.f0131ApiF01311Scope.testSysStBookingCargoDeleteds);
                        //subBoName:TestBkContainer subBoRelType:2 objectType:3 persistentSaveType:2 null
                        if ($scope.f0131ApiF01331Scope.testBkContainers)
                            param.testBkContainers = $scope.f0131ApiF01331Scope.testBkContainers.concat($scope.f0131ApiF01331Scope.testBkContainerDeleteds);
                        //subBoName:TestSysStBookingEx subBoRelType:1 objectType:0 persistentSaveType:2 null
                        param.sysStBookingEx = $scope.testSysStBookingEx;

                        var tip = layer.load(0, {shade: 0.3});
                        $scope.isLoading = true;

                        $http.post($config.ctx + '/testSysStBooking/update', param).success(function (data) {
                            layer.close(tip);
                            $scope.isLoading = false;
                            if (data.success != undefined && data.success == true) {

                                $scope.testSysStBooking = data.testSysStBooking;
                                if ($scope.f0131ApiF01311Scope)
                                    $scope.f0131ApiF01311Scope.testSysStBooking = $scope.testSysStBooking;
                                if ($scope.f0131ApiF01331Scope)
                                    $scope.f0131ApiF01331Scope.testSysStBooking = $scope.testSysStBooking;

                                //subBoName:TestSysStBookingCtnRequest subBoRelType:2 objectType:0 persistentSaveType:2 null
                                //subBoName:TestSysStBookingCargo subBoRelType:2 objectType:0 persistentSaveType:2 null
                                //subBoName:TestBkContainer subBoRelType:2 objectType:3 persistentSaveType:2 null
                                //subBoName:TestSysStBookingEx subBoRelType:1 objectType:0 persistentSaveType:2 null
                                $scope.testSysStBookingEx = data.testSysStBooking.sysStBookingEx;
                                //子对象TestSysStBookingCtnRequest
                                if ($scope && $scope.testSysStBookingCtnRequestGrid) {
                                    $scope.testSysStBookingCtnRequestGrid._reset();
                                    $scope.testSysStBookingCtnRequests.splice(0, $scope.testSysStBookingCtnRequests.length);
                                    $scope.testSysStBookingCtnRequest = {};
                                    $scope.testSysStBookingCtnRequestDeleteds = [];
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                    $scope.getTestSysStBookingCtnRequestPages();
                                }
                                //subBo TestSysStBookingCtnRequest
                                //子对象TestSysStBookingCargo
                                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testSysStBookingCargoGrid) {
                                    if ($scope.f0131ApiF01311Scope.testSysStBookingCargoGrid) {
                                        if ($scope.f0131ApiF01311Scope.TestSysStBookingCargoForm && $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$validator) {
                                            $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$validator.reset();
                                            $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF01311Scope.testSysStBookingCargoGrid._reset();
                                    $scope.f0131ApiF01311Scope.testSysStBookingCargos.splice(0, $scope.f0131ApiF01311Scope.testSysStBookingCargos.length);
                                    $scope.f0131ApiF01311Scope.testSysStBookingCargo = {};
                                    $scope.f0131ApiF01311Scope.testSysStBookingCargoDeleteds = [];
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                    $scope.f0131ApiF01311Scope.getTestSysStBookingCargoPages();
                                }
                                //subBo TestSysStBookingCargo
                                //子对象TestStBookingCargoA
                                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoAGrid) {
                                    $scope.f0131ApiF01311Scope.testStBookingCargoAGrid._reset();
                                    $scope.f0131ApiF01311Scope.testStBookingCargoAs.splice(0, $scope.f0131ApiF01311Scope.testStBookingCargoAs.length);
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                }
                                //subBo TestStBookingCargoA
                                //子对象TestStBookingCargoC
                                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoCGrid) {
                                    $scope.f0131ApiF01311Scope.testStBookingCargoCGrid._reset();
                                    $scope.f0131ApiF01311Scope.testStBookingCargoCs.splice(0, $scope.f0131ApiF01311Scope.testStBookingCargoCs.length);
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                }
                                //subBo TestStBookingCargoC
                                //子对象TestStBookingCargoCa
                                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid) {
                                    $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid._reset();
                                    $scope.f0131ApiF01311Scope.testStBookingCargoCas.splice(0, $scope.f0131ApiF01311Scope.testStBookingCargoCas.length);
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                }
                                //subBo TestStBookingCargoCa
                                //子对象TestStBookingCargoB
                                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoBGrid) {
                                    $scope.f0131ApiF01311Scope.testStBookingCargoBGrid._reset();
                                    $scope.f0131ApiF01311Scope.testStBookingCargoBs.splice(0, $scope.f0131ApiF01311Scope.testStBookingCargoBs.length);
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                }
                                //subBo TestStBookingCargoB
                                //子对象TestBkContainer
                                if ($scope.f0131ApiF01331Scope && $scope.f0131ApiF01331Scope.testBkContainerGrid) {
                                    $scope.f0131ApiF01331Scope.testBkContainerGrid._reset();
                                    $scope.f0131ApiF01331Scope.testBkContainers.splice(0, $scope.f0131ApiF01331Scope.testBkContainers.length);
                                    $scope.f0131ApiF01331Scope.testBkContainer = {};
                                    $scope.f0131ApiF01331Scope.testBkContainerDeleteds = [];
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                    $scope.f0131ApiF01331Scope.getTestBkContainerPages();
                                }
                                //subBo TestBkContainer
                                //子对象TestContainerCargo
                                if ($scope.f0131ApiF01331Scope && $scope.f0131ApiF01331Scope.testContainerCargoGrid) {
                                    $scope.f0131ApiF01331Scope.testContainerCargoGrid._reset();
                                    $scope.f0131ApiF01331Scope.testContainerCargos.splice(0, $scope.f0131ApiF01331Scope.testContainerCargos.length);
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                }
                                //subBo TestContainerCargo
                                //界面布局不存在TestSysStBookingEx表格。。
                                //subBo TestSysStBookingEx
                                if ($scope._pageState) $scope._pageState.resetDataState();
                                GillionMsg.alert("提示", data.msg, null);


                                var indexScope = top.angular.element("body").scope();
                                indexScope.refresh($scope.openType, "TestSysStBooking");
                            }
                            $timeout(function () {
                                if ($scope.f0131ApiF01311Scope._pageState) $scope.f0131ApiF01311Scope._pageState.resetDataState();
                                if ($scope.f0131ApiF01331Scope._pageState) $scope.f0131ApiF01331Scope._pageState.resetDataState();
                                if ($scope._pageState) $scope._pageState.resetDataState();
                            });
                        }).error(function () {
                            layer.close(tip);
                        });


                    }
                    else {
                        //TABS F0-1-3-1
                        if (selectTabIndexs.length > 0)
                            $scope.F0131Api.selectTab(_.min(selectTabIndexs));
                    }
                }//callback
                var gridRequiresPromises = [];
                if (gridAsynRequiresPromises && gridAsynRequiresPromises.length > 0)
                    gridRequiresPromises = gridRequiresPromises.concat(gridAsynRequiresPromises);

                if (gridRequiresPromises && gridRequiresPromises.length > 0) {
                    $q.all(gridRequiresPromises).then(function () {
                        callback();
                    }).catch(function (result) {
                        console.log("数据校验未通过！");
                        if (RuleService && RuleService.showTabValidationMsg) {
                            if (contentHint != "") {
                                GillionMsg.alert('提示', contentHint + "页面信息不全,保存失败！", null);
                            }
                        }
                        //TABS F0-1-3-1
                        //TAB y F0-1-3-3-1 F0131Api 0
                        var tabs3_F0131Api_Require_Valid = true;
                        if ($scope.f0131ApiF01331Scope.testBkContainerGrid && $scope.f0131ApiF01331Scope.testBkContainerGrid.formController) {
                            if (!$scope.f0131ApiF01331Scope.testBkContainerGrid.formController.$valid || $scope.f0131ApiF01331Scope.testBkContainerGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01331Scope.testBkContainerGrid.$$requireGridValid;
                                tabs3_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if ($scope.f0131ApiF01331Scope.testContainerCargoGrid && $scope.f0131ApiF01331Scope.testContainerCargoGrid.formController) {
                            if (!$scope.f0131ApiF01331Scope.testContainerCargoGrid.formController.$valid || $scope.f0131ApiF01331Scope.testContainerCargoGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01331Scope.testContainerCargoGrid.$$requireGridValid;
                                tabs3_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if (!tabs3_F0131Api_Require_Valid) {
                            $scope.F0131Api.selectTab(2);
                        }
                        //TAB y F0-1-3-1-1 F0131Api 0
                        var tabs2_F0131Api_Require_Valid = true;
                        if ($scope.f0131ApiF01311Scope.testStBookingCargoAGrid && $scope.f0131ApiF01311Scope.testStBookingCargoAGrid.formController) {
                            if (!$scope.f0131ApiF01311Scope.testStBookingCargoAGrid.formController.$valid || $scope.f0131ApiF01311Scope.testStBookingCargoAGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01311Scope.testStBookingCargoAGrid.$$requireGridValid;
                                tabs2_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if ($scope.f0131ApiF01311Scope.testStBookingCargoBGrid && $scope.f0131ApiF01311Scope.testStBookingCargoBGrid.formController) {
                            if (!$scope.f0131ApiF01311Scope.testStBookingCargoBGrid.formController.$valid || $scope.f0131ApiF01311Scope.testStBookingCargoBGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01311Scope.testStBookingCargoBGrid.$$requireGridValid;
                                tabs2_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if ($scope.f0131ApiF01311Scope.testStBookingCargoCGrid && $scope.f0131ApiF01311Scope.testStBookingCargoCGrid.formController) {
                            if (!$scope.f0131ApiF01311Scope.testStBookingCargoCGrid.formController.$valid || $scope.f0131ApiF01311Scope.testStBookingCargoCGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01311Scope.testStBookingCargoCGrid.$$requireGridValid;
                                tabs2_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if ($scope.f0131ApiF01311Scope.testStBookingCargoCaGrid && $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.formController) {
                            if (!$scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.formController.$valid || $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.$$requireGridValid;
                                tabs2_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if (!tabs2_F0131Api_Require_Valid) {
                            $scope.F0131Api.selectTab(1);
                        }
                        //TAB y F0-1-3-2-1 F0131Api 0
                        var tabs1_F0131Api_Require_Valid = true;
                        if ($scope.testSysStBookingCtnRequestGrid && $scope.testSysStBookingCtnRequestGrid.formController) {
                            if (!$scope.testSysStBookingCtnRequestGrid.formController.$valid || $scope.testSysStBookingCtnRequestGrid.$$requireGridValid == false) {
                                delete $scope.testSysStBookingCtnRequestGrid.$$requireGridValid;
                                tabs1_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if (!tabs1_F0131Api_Require_Valid) {
                            $scope.F0131Api.selectTab(0);
                        }
                        //TABS F0-1-3-1
                        if (selectTabIndexs.length > 0)
                            $scope.F0131Api.selectTab(_.min(selectTabIndexs));
                    }).finally(function (result) {
                        console.log("执行表格非空校验.");
                    });
                } else {
                    callback();
                }
            };
//TODO 20171019 linjx FORM START deletes_form

            /**
             * TODO GLPaaS生成
             * 批量删除海运出口订单
             */
            $scope.deleteTestSysStBookings = function () {
                var ids = Arrays.extract($scope.testSysStBookingCheckedRows, 'stBookingId').join(',');
                if (ids.length == 0) {
                    GillionMsg.alert("提示", "请选择要删除的记录!");
                    return;
                }

                GillionMsg.confirm(null, '确认删除?', function (btn) {
                    if (btn) {
                        $scope._finishEditGridWrap($scope.testSysStBookingGrid, $scope.testSysStBookings, $scope);
                        $http.post($config.ctx + '/testSysStBooking/deletes', {ids: ids}).success(function (data) {
                            if (data.success != undefined && data.success == true) {
                                $scope.getTestSysStBookingPages();
                                if ($scope._pageState) $scope._pageState.resetDataState();
                                //子对象TestSysStBookingCtnRequest
                                if ($scope && $scope.testSysStBookingCtnRequestGrid) {
                                    $scope._finishEditGridWrap($scope.testSysStBookingCtnRequestGrid, $scope.testSysStBookingCtnRequests, $scope);
                                    $scope.testSysStBookingCtnRequestGrid._reset();
                                    $scope.testSysStBookingCtnRequests.splice(0, $scope.testSysStBookingCtnRequests.length);
                                    $scope.testSysStBookingCtnRequest = {};
                                    $scope.testSysStBookingCtnRequestDeleteds = [];
                                    //1_isNewConfig:true haveGrid:true 2 false false false
                                }
                                //subBo TestSysStBookingCtnRequest
                                //子对象TestSysStBookingCargo
                                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testSysStBookingCargoGrid) {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01311Scope.testSysStBookingCargoGrid, $scope.f0131ApiF01311Scope.testSysStBookingCargos, $scope.f0131ApiF01311Scope);
                                    $scope.f0131ApiF01311Scope.testSysStBookingCargoGrid._reset();
                                    $scope.f0131ApiF01311Scope.testSysStBookingCargos.splice(0, $scope.f0131ApiF01311Scope.testSysStBookingCargos.length);
                                    $scope.f0131ApiF01311Scope.testSysStBookingCargo = {};
                                    $scope.f0131ApiF01311Scope.testSysStBookingCargoDeleteds = [];
                                    //1_isNewConfig:true haveGrid:true 2 false false false
                                }
                                //subBo TestSysStBookingCargo
                                //子对象TestStBookingCargoA
                                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoAGrid) {
                                    $scope.f0131ApiF01311Scope.testStBookingCargoAGrid._reset();
                                    $scope.f0131ApiF01311Scope.testStBookingCargoAs.splice(0, $scope.f0131ApiF01311Scope.testStBookingCargoAs.length);
                                    //1_isNewConfig:true haveGrid:true 2 false false false
                                }
                                //subBo TestStBookingCargoA
                                //子对象TestStBookingCargoC
                                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoCGrid) {
                                    $scope.f0131ApiF01311Scope.testStBookingCargoCGrid._reset();
                                    $scope.f0131ApiF01311Scope.testStBookingCargoCs.splice(0, $scope.f0131ApiF01311Scope.testStBookingCargoCs.length);
                                    //1_isNewConfig:true haveGrid:true 2 false false false
                                }
                                //subBo TestStBookingCargoC
                                //子对象TestStBookingCargoCa
                                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid) {
                                    $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid._reset();
                                    $scope.f0131ApiF01311Scope.testStBookingCargoCas.splice(0, $scope.f0131ApiF01311Scope.testStBookingCargoCas.length);
                                    //1_isNewConfig:true haveGrid:true 2 false false false
                                }
                                //subBo TestStBookingCargoCa
                                //子对象TestStBookingCargoB
                                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoBGrid) {
                                    $scope.f0131ApiF01311Scope.testStBookingCargoBGrid._reset();
                                    $scope.f0131ApiF01311Scope.testStBookingCargoBs.splice(0, $scope.f0131ApiF01311Scope.testStBookingCargoBs.length);
                                    //1_isNewConfig:true haveGrid:true 2 false false false
                                }
                                //subBo TestStBookingCargoB
                                //子对象TestBkContainer
                                if ($scope.f0131ApiF01331Scope && $scope.f0131ApiF01331Scope.testBkContainerGrid) {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01331Scope.testBkContainerGrid, $scope.f0131ApiF01331Scope.testBkContainers, $scope.f0131ApiF01331Scope);
                                    $scope.f0131ApiF01331Scope.testBkContainerGrid._reset();
                                    $scope.f0131ApiF01331Scope.testBkContainers.splice(0, $scope.f0131ApiF01331Scope.testBkContainers.length);
                                    $scope.f0131ApiF01331Scope.testBkContainer = {};
                                    $scope.f0131ApiF01331Scope.testBkContainerDeleteds = [];
                                    //1_isNewConfig:true haveGrid:true 2 false false false
                                }
                                //subBo TestBkContainer
                                //子对象TestContainerCargo
                                if ($scope.f0131ApiF01331Scope && $scope.f0131ApiF01331Scope.testContainerCargoGrid) {
                                    $scope.f0131ApiF01331Scope.testContainerCargoGrid._reset();
                                    $scope.f0131ApiF01331Scope.testContainerCargos.splice(0, $scope.f0131ApiF01331Scope.testContainerCargos.length);
                                    //1_isNewConfig:true haveGrid:true 2 false false false
                                }
                                //subBo TestContainerCargo
                                //界面布局不存在TestSysStBookingEx表格。。
                                $scope.testSysStBookingEx = {};
                                //subBo TestSysStBookingEx
                                GillionMsg.alert("提示", data.msg);

                            }

                        });
                    }
                });

            };
//TODO 20171019 linjx FORM START saveOrUpdate_form

            /**
             * TODO GLPaaS生成
             * 保存 海运出口订单
             */
            $scope.saveOrUpdate = function () {
                var contentHint = "";
                //校验联想控件是否初始化完
                if (!$scope._associateInitValid($scope)) {
                    return;
                }
                //haveTabLoadSupport : X
                $scope.f0131ApiF01311Scope = GillionTabService.invoke('货物', $scope.f0131ApiF01311Url, "$scope", null) || {};
                $scope.f0131ApiF01331Scope = GillionTabService.invoke('集装箱', $scope.f0131ApiF01331Url, "$scope", null) || {};
                //子对象TestSysStBookingCtnRequest
                if ($scope && $scope.testSysStBookingCtnRequestGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestSysStBookingCtnRequest
                //子对象TestSysStBookingCargo
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testSysStBookingCargoGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestSysStBookingCargo
                //子对象TestStBookingCargoA
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoAGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestStBookingCargoA
                //子对象TestStBookingCargoC
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoCGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestStBookingCargoC
                //子对象TestStBookingCargoCa
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestStBookingCargoCa
                //子对象TestStBookingCargoB
                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoBGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestStBookingCargoB
                //子对象TestBkContainer
                if ($scope.f0131ApiF01331Scope && $scope.f0131ApiF01331Scope.testBkContainerGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestBkContainer
                //子对象TestContainerCargo
                if ($scope.f0131ApiF01331Scope && $scope.f0131ApiF01331Scope.testContainerCargoGrid) {
                    //1_isNewConfig:true haveGrid:true 2 false false false
                }
                //subBo TestContainerCargo
                //界面布局不存在TestSysStBookingEx表格。。
                //subBo TestSysStBookingEx
                if ($scope.form1 && $scope.form1.$validator && $scope.form1.verify && $scope.testSysStBooking && $scope.testSysStBooking.hasOwnProperty('stBookingId')) {
                    $scope.form1.$validator.enable();
                    $scope.form1.verify();
                }
                if ($scope.form2 && $scope.form2.$validator && $scope.form2.verify && $scope.testSysStBooking && $scope.testSysStBooking.hasOwnProperty('stBookingId')) {
                    $scope.form2.$validator.enable();
                    $scope.form2.verify();
                }
                if ($scope.form3 && $scope.form3.$validator && $scope.form3.verify && $scope.testSysStBooking && $scope.testSysStBooking.hasOwnProperty('stBookingId')) {
                    $scope.form3.$validator.enable();
                    $scope.form3.verify();
                }
                if ($scope.form4 && $scope.form4.$validator && $scope.form4.verify && $scope.testSysStBooking && $scope.testSysStBooking.hasOwnProperty('stBookingId')) {
                    $scope.form4.$validator.enable();
                    $scope.form4.verify();
                }
                if ($scope.form5 && $scope.form5.$validator && $scope.form5.verify && $scope.testSysStBooking && $scope.testSysStBooking.hasOwnProperty('stBookingId')) {
                    $scope.form5.$validator.enable();
                    $scope.form5.verify();
                }
                var allValidationFlag = true;
                var gridAsynRequiresPromises = [];
                var selectTabIndexs = [];
                //TABS F0-1-3-1
                //TAB  F0-1-3-3-1 F0131Api 0
                var tabs3_F0131Api_Valid = true;
                var tabs3_F0131Api_Valid_index = 2;
                // DIV;GRID_TOOLBAR;F0-1-3-3-1-1
                // DIV;GRID;F0-1-3-3-1-2

                if ($scope.f0131ApiF01331Scope.testBkContainerGrid) {
                    var testBkContainerGridAsynRequiresPromises = $scope.f0131ApiF01331Scope.testBkContainerGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01331Scope.testBkContainerGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01331Scope.testBkContainerGrid, $scope.f0131ApiF01331Scope.testBkContainers, $scope.f0131ApiF01331Scope);
                                }).catch(function () {
                                    tabs3_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("集装箱】") == -1) {
                                        contentHint = contentHint + "\r\n【集装箱】";
                                    }
                                    selectTabIndexs.push(tabs3_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testBkContainerGridAsynRequiresPromises);
                }
                // DIV;GRID_TOOLBAR;F0-1-3-3-1-3
                // DIV;GRID;F0-1-3-3-1-4

                if ($scope.f0131ApiF01331Scope.testContainerCargoGrid) {
                    var testContainerCargoGridAsynRequiresPromises = $scope.f0131ApiF01331Scope.testContainerCargoGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01331Scope.testContainerCargoGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01331Scope.testContainerCargoGrid, $scope.f0131ApiF01331Scope.testContainerCargos, $scope.f0131ApiF01331Scope);
                                }).catch(function () {
                                    tabs3_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("集装箱】") == -1) {
                                        contentHint = contentHint + "\r\n【集装箱】";
                                    }
                                    selectTabIndexs.push(tabs3_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testContainerCargoGridAsynRequiresPromises);
                }
                if (!tabs3_F0131Api_Valid) {
                    contentHint = contentHint + "\r\n【集装箱】";
                    $scope.F0131Api.selectTab(2);
                    selectTabIndexs.push(2);
                    $(".popover").hide();

                }
                //TAB  F0-1-3-1-1 F0131Api 0
                var tabs2_F0131Api_Valid = true;
                var tabs2_F0131Api_Valid_index = 1;
                // DIV;GRID_TOOLBAR;F0-1-3-1-1-1
                // DIV;GRID;F0-1-3-1-1-2

                if ($scope.f0131ApiF01311Scope.testSysStBookingCargo && $scope.f0131ApiF01311Scope.testSysStBookingCargo.stBookingCargoId && $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm) {
                    if ($scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$validator && $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.verify) {
                        $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$validator.enable();
                        $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.verify();
                    }
                    if (!$scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$valid) {
                        tabs2_F0131Api_Valid = false;
                        allValidationFlag = false;
                    }
                }
                // PANEL;;F0-1-3-1-1-3
                // DIV;FORM_HEADER;F0-1-3-1-1-3-1
                // DIV;;F0-1-3-1-1-4
                // DIV;;F0-1-3-1-1-4-1
                // DIV;GRID_TOOLBAR;F0-1-3-1-1-4-1-1
                // DIV;GRID;F0-1-3-1-1-4-1-2

                if ($scope.f0131ApiF01311Scope.testStBookingCargoAGrid) {
                    var testStBookingCargoAGridAsynRequiresPromises = $scope.f0131ApiF01311Scope.testStBookingCargoAGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01311Scope.testStBookingCargoAGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01311Scope.testStBookingCargoAGrid, $scope.f0131ApiF01311Scope.testStBookingCargoAs, $scope.f0131ApiF01311Scope);
                                }).catch(function () {
                                    tabs2_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("货物】") == -1) {
                                        contentHint = contentHint + "\r\n【货物】";
                                    }
                                    selectTabIndexs.push(tabs2_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testStBookingCargoAGridAsynRequiresPromises);
                }
                // DIV;;F0-1-3-1-1-4-2
                // DIV;GRID_TOOLBAR;F0-1-3-1-1-4-2-1
                // DIV;GRID;F0-1-3-1-1-4-2-2

                if ($scope.f0131ApiF01311Scope.testStBookingCargoBGrid) {
                    var testStBookingCargoBGridAsynRequiresPromises = $scope.f0131ApiF01311Scope.testStBookingCargoBGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01311Scope.testStBookingCargoBGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01311Scope.testStBookingCargoBGrid, $scope.f0131ApiF01311Scope.testStBookingCargoBs, $scope.f0131ApiF01311Scope);
                                }).catch(function () {
                                    tabs2_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("货物】") == -1) {
                                        contentHint = contentHint + "\r\n【货物】";
                                    }
                                    selectTabIndexs.push(tabs2_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testStBookingCargoBGridAsynRequiresPromises);
                }
                // DIV;;F0-1-3-1-1-4-3
                // DIV;GRID_TOOLBAR;F0-1-3-1-1-4-3-1
                // DIV;GRID;F0-1-3-1-1-4-3-2

                if ($scope.f0131ApiF01311Scope.testStBookingCargoCGrid) {
                    var testStBookingCargoCGridAsynRequiresPromises = $scope.f0131ApiF01311Scope.testStBookingCargoCGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01311Scope.testStBookingCargoCGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01311Scope.testStBookingCargoCGrid, $scope.f0131ApiF01311Scope.testStBookingCargoCs, $scope.f0131ApiF01311Scope);
                                }).catch(function () {
                                    tabs2_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("货物】") == -1) {
                                        contentHint = contentHint + "\r\n【货物】";
                                    }
                                    selectTabIndexs.push(tabs2_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testStBookingCargoCGridAsynRequiresPromises);
                }
                // DIV;;F0-1-3-1-1-5
                // DIV;GRID_TOOLBAR;F0-1-3-1-1-5-1
                // DIV;GRID;F0-1-3-1-1-5-2

                if ($scope.f0131ApiF01311Scope.testStBookingCargoCaGrid) {
                    var testStBookingCargoCaGridAsynRequiresPromises = $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.finishEdit()
                        .then(function () {
                            return $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.f0131ApiF01311Scope.testStBookingCargoCaGrid, $scope.f0131ApiF01311Scope.testStBookingCargoCas, $scope.f0131ApiF01311Scope);
                                }).catch(function () {
                                    tabs2_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("货物】") == -1) {
                                        contentHint = contentHint + "\r\n【货物】";
                                    }
                                    selectTabIndexs.push(tabs2_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testStBookingCargoCaGridAsynRequiresPromises);
                }
                if (!tabs2_F0131Api_Valid) {
                    contentHint = contentHint + "\r\n【货物】";
                    $scope.F0131Api.selectTab(1);
                    selectTabIndexs.push(1);
                    $(".popover").hide();

                }
                //TAB  F0-1-3-2-1 F0131Api 0
                var tabs1_F0131Api_Valid = true;
                var tabs1_F0131Api_Valid_index = 0;
                // DIV;;F0-1-3-2-1-1-1
                // DIV;;F0-1-3-2-1-1-1-1
                // FORM;;NewCell-1509850020564
                if ($scope.form2 && !$scope.form2.$valid) {
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false;
                }
                // DIV;;F0-1-3-2-1-1-1-2
                // FORM;;NewCell-1509850043647
                if ($scope.form3 && !$scope.form3.$valid) {
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false;
                }
                // DIV;;F0-1-3-2-1-1-1-3
                // DIV;;F0-1-3-2-1-1-1-3-2
                // GROUP;;F0-1-3-2-1-1-1-3-2-1
                // DIV;GRID_TOOLBAR;F0-1-3-2-1-1-1-3-2-1-1
                // DIV;GRID;F0-1-3-2-1-1-1-3-2-1-2

                if ($scope.testSysStBookingCtnRequestGrid) {
                    var testSysStBookingCtnRequestGridAsynRequiresPromises = $scope.testSysStBookingCtnRequestGrid.finishEdit()
                        .then(function () {
                            return $scope.testSysStBookingCtnRequestGrid.validateAddedAndModifiedRows()
                                .then(function () {
                                    $scope._finishEditGridWrap($scope.testSysStBookingCtnRequestGrid, $scope.testSysStBookingCtnRequests, $scope);
                                }).catch(function () {
                                    tabs1_F0131Api_Valid = false;
                                    allValidationFlag = false;
                                    if (contentHint.indexOf("基本信息】") == -1) {
                                        contentHint = contentHint + "\r\n【基本信息】";
                                    }
                                    selectTabIndexs.push(tabs1_F0131Api_Valid_index);
                                });
                        });
                    gridAsynRequiresPromises.push(testSysStBookingCtnRequestGridAsynRequiresPromises);
                }
                // FORM;;NewCell-1509850069474
                if ($scope.form4 && !$scope.form4.$valid) {
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false;
                }
                // DIV;;F0-1-3-2-1-1-1-4
                // FORM;;NewCell-1509850090791
                if ($scope.form5 && !$scope.form5.$valid) {
                    tabs1_F0131Api_Valid = false;
                    allValidationFlag = false;
                }
                if (!tabs1_F0131Api_Valid) {
                    contentHint = contentHint + "\r\n【基本信息】";
                    $scope.F0131Api.selectTab(0);
                    selectTabIndexs.push(0);
                    $(".popover").hide();
                    var errF01321s = [];
                    // DIV F0-1-3-2-1-1-1
                    // DIV F0-1-3-2-1-1-1-1
                    // FORM NewCell-1509850020564
                    if ($scope.form2 && $scope.form2.$error) {
                        for (var prop in $scope.form2.$error) {
                            if (angular.isArray($scope.form2.$error[prop])) {
                                errF01321s = errF01321s.concat($scope.form2.$error[prop]);
                            }
                        }
                    }
                    // DIV F0-1-3-2-1-1-1-2
                    // FORM NewCell-1509850043647
                    if ($scope.form3 && $scope.form3.$error) {
                        for (var prop in $scope.form3.$error) {
                            if (angular.isArray($scope.form3.$error[prop])) {
                                errF01321s = errF01321s.concat($scope.form3.$error[prop]);
                            }
                        }
                    }
                    // DIV F0-1-3-2-1-1-1-3
                    // DIV F0-1-3-2-1-1-1-3-2
                    // GROUP F0-1-3-2-1-1-1-3-2-1
                    // DIV F0-1-3-2-1-1-1-3-2-1-1
                    // DIV F0-1-3-2-1-1-1-3-2-1-2
                    // FORM NewCell-1509850069474
                    if ($scope.form4 && $scope.form4.$error) {
                        for (var prop in $scope.form4.$error) {
                            if (angular.isArray($scope.form4.$error[prop])) {
                                errF01321s = errF01321s.concat($scope.form4.$error[prop]);
                            }
                        }
                    }
                    // DIV F0-1-3-2-1-1-1-4
                    // FORM NewCell-1509850090791
                    if ($scope.form5 && $scope.form5.$error) {
                        for (var prop in $scope.form5.$error) {
                            if (angular.isArray($scope.form5.$error[prop])) {
                                errF01321s = errF01321s.concat($scope.form5.$error[prop]);
                            }
                        }
                    }
                    for (var j = 0; j < errF01321s.length; j++) {
                        if ($("input[name='" + errF01321s[j].$name + "']").parents("div[api]")[0]) {
                            var apiName = $("input[name='" + errF01321s[j].$name + "']").parents("div[api]")[0].attributes.api.value;
                            var title = $("input[name='" + errF01321s[j].$name + "']").parents("div[title]")[0].attributes.title.value;
                            $scope[apiName].selectTab(title + "_" + undefined);
                            if ($("input[name='" + errF01321s[j].$name + "']")[0])
                                $("input[name='" + errF01321s[j].$name + "']")[0].focus();
                        }
                    }

                }
                if (!$scope.form1.$valid) //FORM
                    allValidationFlag = false;
                var callback = function () { //callback
                    if (RuleService && RuleService.showTabValidationMsg) {
                        if (!allValidationFlag && contentHint != "") {
                            GillionMsg.alert('提示', contentHint + "页面信息不全,保存失败！", null);
                        }
                    }

                    if (allValidationFlag) {
                        if (RuleService.beforeSaveHintModMsg && (!$scope._pageState || !$scope._pageState.isDataModified || !$scope._pageState.isDataModified())) {
                            // 数据变更未保存提醒
                            GillionMsg.show({
                                title: '提示',
                                msg: '当前页面数据未修改，无需保存！',
                                buttons: [{
                                    text: '确定',
                                    type: 'sure',
                                    handler: function () {
                                        $scope.$apply(function () {
                                            //$scope.saveOrUpdate(true);
                                        });
                                    }
                                }]
                            });
                            return;
                        }

                        var param = $scope.testSysStBooking;
                        //subBoName:TestSysStBookingCtnRequest subBoRelType:2 objectType:0 persistentSaveType:2 null
                        if ($scope.testSysStBookingCtnRequests)
                            param.testSysStBookingCtnRequests = $scope.testSysStBookingCtnRequests.concat($scope.testSysStBookingCtnRequestDeleteds);
                        //subBoName:TestSysStBookingCargo subBoRelType:2 objectType:0 persistentSaveType:2 null
                        if ($scope.f0131ApiF01311Scope.testSysStBookingCargos)
                            param.testSysStBookingCargos = $scope.f0131ApiF01311Scope.testSysStBookingCargos.concat($scope.f0131ApiF01311Scope.testSysStBookingCargoDeleteds);
                        //subBoName:TestBkContainer subBoRelType:2 objectType:3 persistentSaveType:2 null
                        if ($scope.f0131ApiF01331Scope.testBkContainers)
                            param.testBkContainers = $scope.f0131ApiF01331Scope.testBkContainers.concat($scope.f0131ApiF01331Scope.testBkContainerDeleteds);
                        //subBoName:TestSysStBookingEx subBoRelType:1 objectType:0 persistentSaveType:2 null
                        param.sysStBookingEx = $scope.testSysStBookingEx;

                        var tip = layer.load(0, $config.shadeConfig);
                        $scope.isLoading = true;

                        $http.post($config.ctx + '/testSysStBooking/saveOrUpdate', param).success(function (data) {
                            layer.close(tip);
                            $scope.isLoading = false;
                            if (data.success != undefined && data.success == true) {

                                $scope.testSysStBooking = data.testSysStBooking;
                                if ($scope.f0131ApiF01311Scope)
                                    $scope.f0131ApiF01311Scope.testSysStBooking = $scope.testSysStBooking;
                                if ($scope.f0131ApiF01331Scope)
                                    $scope.f0131ApiF01331Scope.testSysStBooking = $scope.testSysStBooking;

                                //subBoName:TestSysStBookingCtnRequest subBoRelType:2 objectType:0 persistentSaveType:2 null
                                //subBoName:TestSysStBookingCargo subBoRelType:2 objectType:0 persistentSaveType:2 null
                                //subBoName:TestBkContainer subBoRelType:2 objectType:3 persistentSaveType:2 null
                                //subBoName:TestSysStBookingEx subBoRelType:1 objectType:0 persistentSaveType:2 null
                                $scope.testSysStBookingEx = data.testSysStBooking.sysStBookingEx;
                                //子对象TestSysStBookingCtnRequest
                                if ($scope && $scope.testSysStBookingCtnRequestGrid) {
                                    $scope.testSysStBookingCtnRequestGrid._reset();
                                    $scope.testSysStBookingCtnRequests.splice(0, $scope.testSysStBookingCtnRequests.length);
                                    $scope.testSysStBookingCtnRequest = {};
                                    $scope.testSysStBookingCtnRequestDeleteds = [];
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                    $scope.getTestSysStBookingCtnRequestPages();
                                }
                                //subBo TestSysStBookingCtnRequest
                                //子对象TestSysStBookingCargo
                                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testSysStBookingCargoGrid) {
                                    if ($scope.f0131ApiF01311Scope.testSysStBookingCargoGrid) {
                                        if ($scope.f0131ApiF01311Scope.TestSysStBookingCargoForm && $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$validator) {
                                            $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$validator.reset();
                                            $scope.f0131ApiF01311Scope.TestSysStBookingCargoForm.$validator.disable();
                                        }
                                    }
                                    $scope.f0131ApiF01311Scope.testSysStBookingCargoGrid._reset();
                                    $scope.f0131ApiF01311Scope.testSysStBookingCargos.splice(0, $scope.f0131ApiF01311Scope.testSysStBookingCargos.length);
                                    $scope.f0131ApiF01311Scope.testSysStBookingCargo = {};
                                    $scope.f0131ApiF01311Scope.testSysStBookingCargoDeleteds = [];
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                    $scope.f0131ApiF01311Scope.getTestSysStBookingCargoPages();
                                }
                                //subBo TestSysStBookingCargo
                                //子对象TestStBookingCargoA
                                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoAGrid) {
                                    $scope.f0131ApiF01311Scope.testStBookingCargoAGrid._reset();
                                    $scope.f0131ApiF01311Scope.testStBookingCargoAs.splice(0, $scope.f0131ApiF01311Scope.testStBookingCargoAs.length);
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                }
                                //subBo TestStBookingCargoA
                                //子对象TestStBookingCargoC
                                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoCGrid) {
                                    $scope.f0131ApiF01311Scope.testStBookingCargoCGrid._reset();
                                    $scope.f0131ApiF01311Scope.testStBookingCargoCs.splice(0, $scope.f0131ApiF01311Scope.testStBookingCargoCs.length);
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                }
                                //subBo TestStBookingCargoC
                                //子对象TestStBookingCargoCa
                                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid) {
                                    $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid._reset();
                                    $scope.f0131ApiF01311Scope.testStBookingCargoCas.splice(0, $scope.f0131ApiF01311Scope.testStBookingCargoCas.length);
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                }
                                //subBo TestStBookingCargoCa
                                //子对象TestStBookingCargoB
                                if ($scope.f0131ApiF01311Scope && $scope.f0131ApiF01311Scope.testStBookingCargoBGrid) {
                                    $scope.f0131ApiF01311Scope.testStBookingCargoBGrid._reset();
                                    $scope.f0131ApiF01311Scope.testStBookingCargoBs.splice(0, $scope.f0131ApiF01311Scope.testStBookingCargoBs.length);
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                }
                                //subBo TestStBookingCargoB
                                //子对象TestBkContainer
                                if ($scope.f0131ApiF01331Scope && $scope.f0131ApiF01331Scope.testBkContainerGrid) {
                                    $scope.f0131ApiF01331Scope.testBkContainerGrid._reset();
                                    $scope.f0131ApiF01331Scope.testBkContainers.splice(0, $scope.f0131ApiF01331Scope.testBkContainers.length);
                                    $scope.f0131ApiF01331Scope.testBkContainer = {};
                                    $scope.f0131ApiF01331Scope.testBkContainerDeleteds = [];
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                    $scope.f0131ApiF01331Scope.getTestBkContainerPages();
                                }
                                //subBo TestBkContainer
                                //子对象TestContainerCargo
                                if ($scope.f0131ApiF01331Scope && $scope.f0131ApiF01331Scope.testContainerCargoGrid) {
                                    $scope.f0131ApiF01331Scope.testContainerCargoGrid._reset();
                                    $scope.f0131ApiF01331Scope.testContainerCargos.splice(0, $scope.f0131ApiF01331Scope.testContainerCargos.length);
                                    //1_isNewConfig:true haveGrid:true 2 false false true
                                }
                                //subBo TestContainerCargo
                                //界面布局不存在TestSysStBookingEx表格。。
                                //subBo TestSysStBookingEx
                                if ($scope._pageState) $scope._pageState.resetDataState();
                                GillionMsg.alert("提示", data.msg, null);


                                var indexScope = top.angular.element("body").scope();
                                indexScope.refresh($scope.openType, "TestSysStBooking");
                            }
                            $timeout(function () {
                                if ($scope.f0131ApiF01311Scope._pageState) $scope.f0131ApiF01311Scope._pageState.resetDataState();
                                if ($scope.f0131ApiF01331Scope._pageState) $scope.f0131ApiF01331Scope._pageState.resetDataState();
                                if ($scope._pageState) $scope._pageState.resetDataState();
                            });
                        }).error(function () {
                            layer.close(tip);
                        });


                    }
                    else {
                        //TABS F0-1-3-1
                        if (selectTabIndexs.length > 0)
                            $scope.F0131Api.selectTab(_.min(selectTabIndexs));
                    }
                }//callback
                var gridRequiresPromises = [];
                if (gridAsynRequiresPromises && gridAsynRequiresPromises.length > 0)
                    gridRequiresPromises = gridRequiresPromises.concat(gridAsynRequiresPromises);

                if (gridRequiresPromises && gridRequiresPromises.length > 0) {
                    $q.all(gridRequiresPromises).then(function () {
                        callback();
                    }).catch(function (result) {
                        console.log("数据校验未通过！");
                        if (RuleService && RuleService.showTabValidationMsg) {
                            if (contentHint != "") {
                                GillionMsg.alert('提示', contentHint + "页面信息不全,保存失败！", null);
                            }
                        }
                        //TABS F0-1-3-1
                        //TAB y F0-1-3-3-1 F0131Api 0
                        var tabs3_F0131Api_Require_Valid = true;
                        if ($scope.f0131ApiF01331Scope.testBkContainerGrid && $scope.f0131ApiF01331Scope.testBkContainerGrid.formController) {
                            if (!$scope.f0131ApiF01331Scope.testBkContainerGrid.formController.$valid || $scope.f0131ApiF01331Scope.testBkContainerGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01331Scope.testBkContainerGrid.$$requireGridValid;
                                tabs3_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if ($scope.f0131ApiF01331Scope.testContainerCargoGrid && $scope.f0131ApiF01331Scope.testContainerCargoGrid.formController) {
                            if (!$scope.f0131ApiF01331Scope.testContainerCargoGrid.formController.$valid || $scope.f0131ApiF01331Scope.testContainerCargoGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01331Scope.testContainerCargoGrid.$$requireGridValid;
                                tabs3_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if (!tabs3_F0131Api_Require_Valid) {
                            $scope.F0131Api.selectTab(2);
                        }
                        //TAB y F0-1-3-1-1 F0131Api 0
                        var tabs2_F0131Api_Require_Valid = true;
                        if ($scope.f0131ApiF01311Scope.testStBookingCargoAGrid && $scope.f0131ApiF01311Scope.testStBookingCargoAGrid.formController) {
                            if (!$scope.f0131ApiF01311Scope.testStBookingCargoAGrid.formController.$valid || $scope.f0131ApiF01311Scope.testStBookingCargoAGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01311Scope.testStBookingCargoAGrid.$$requireGridValid;
                                tabs2_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if ($scope.f0131ApiF01311Scope.testStBookingCargoBGrid && $scope.f0131ApiF01311Scope.testStBookingCargoBGrid.formController) {
                            if (!$scope.f0131ApiF01311Scope.testStBookingCargoBGrid.formController.$valid || $scope.f0131ApiF01311Scope.testStBookingCargoBGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01311Scope.testStBookingCargoBGrid.$$requireGridValid;
                                tabs2_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if ($scope.f0131ApiF01311Scope.testStBookingCargoCGrid && $scope.f0131ApiF01311Scope.testStBookingCargoCGrid.formController) {
                            if (!$scope.f0131ApiF01311Scope.testStBookingCargoCGrid.formController.$valid || $scope.f0131ApiF01311Scope.testStBookingCargoCGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01311Scope.testStBookingCargoCGrid.$$requireGridValid;
                                tabs2_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if ($scope.f0131ApiF01311Scope.testStBookingCargoCaGrid && $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.formController) {
                            if (!$scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.formController.$valid || $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.$$requireGridValid == false) {
                                delete $scope.f0131ApiF01311Scope.testStBookingCargoCaGrid.$$requireGridValid;
                                tabs2_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if (!tabs2_F0131Api_Require_Valid) {
                            $scope.F0131Api.selectTab(1);
                        }
                        //TAB y F0-1-3-2-1 F0131Api 0
                        var tabs1_F0131Api_Require_Valid = true;
                        if ($scope.testSysStBookingCtnRequestGrid && $scope.testSysStBookingCtnRequestGrid.formController) {
                            if (!$scope.testSysStBookingCtnRequestGrid.formController.$valid || $scope.testSysStBookingCtnRequestGrid.$$requireGridValid == false) {
                                delete $scope.testSysStBookingCtnRequestGrid.$$requireGridValid;
                                tabs1_F0131Api_Require_Valid = false;
                                allValidationFlag = false;
                            }
                        }
                        if (!tabs1_F0131Api_Require_Valid) {
                            $scope.F0131Api.selectTab(0);
                        }
                        //TABS F0-1-3-1
                        if (selectTabIndexs.length > 0)
                            $scope.F0131Api.selectTab(_.min(selectTabIndexs));
                    }).finally(function (result) {
                        console.log("执行表格非空校验.");
                    });
                } else {
                    callback();
                }
            };
            //<!--GRID_TOOLBAR-->
            //TODO LayoutElementType.GRID_TOOLBAR
//TODO 20171019 linjx FORM START query_grid
            /**
             * TODO GLPaaS生成
             * 查询
             */
            $scope.queryTestSysStBookingCtnRequest = function () {
                if ($scope.TestSysStBookingCtnRequestQueryForm && $scope.TestSysStBookingCtnRequestQueryForm.$validator) {
                    $scope.TestSysStBookingCtnRequestQueryForm.verify();
                }
                if ($scope.TestSysStBookingCtnRequestQueryForm && !$scope.TestSysStBookingCtnRequestQueryForm.$valid) {
                    return;
                }
                $scope._finishEditGridWrap($scope.testSysStBookingCtnRequestGrid, $scope.testSysStBookingCtnRequests, $scope);

                if ($scope._pageState._dataState == $config.dataState.MODIFY) {

                    GillionMsg.confirm(null, "是否保存编辑的数据？", function (btn) {
                        if (btn) {
                        } else {
                            $scope.testSysStBookingCtnRequestGrid.$$currentSelKey = undefined;
                            $scope.testSysStBookingCtnRequests = [];
                            $scope._pageState._dataState = $config.dataState.NORMAL;
                            $scope.queryTestSysStBookingCtnRequest();
                        }
                    });
                    return;
                }


                $scope.getTestSysStBookingCtnRequestPages();

                $scope.testSysStBookingCtnRequestGrid.$$currentSelKey = undefined;
                if ($scope._pageState) $scope._pageState.resetDataState();

            };
//TODO 20171019 linjx FORM START add_grid

            $scope.newTestSysStBookingCtnRequestGridId = -9223372036;
            /**
             * TODO GLPaaS生成
             * 新增箱需求
             */
            $scope.addTestSysStBookingCtnRequest = function () {
                $scope.__testSysStBookingCtnRequestButtonEvent = true;
                var gridAsynRequiresPromises = [];
                var allValidationFlag = false;
                var tempRow = 0;
                if ($scope.testSysStBookingCtnRequest)
                    tempRow = $scope.testSysStBookingCtnRequestGrid.getPhysicalRow($scope.testSysStBookingCtnRequest);

                var outterCallback = function () {
                    var addCallback = function () {
                        $scope._finishEditGridWrap($scope.testSysStBookingCtnRequestGrid, $scope.testSysStBookingCtnRequests, $scope);
                        //1  TestSysStBookingCtnRequest
                        var newRow = {
                            stBookingId: $scope.testSysStBooking.stBookingId,
                            stBookingCtnRequestId: $scope.newTestSysStBookingCtnRequestGridId++,
                            rowStatus: 4
                        };

                        if ($scope.initGridNoDefaultValue)
                            $scope.initGridNoDefaultValue("add", "TestSysStBookingCtnRequest", function () {
                            });

                        if ($scope.testSysStBookingCtnRequestGrid.changeDataSourced)
                            $scope.testSysStBookingCtnRequestGrid.changeDataSourced = false;
                        $scope.testSysStBookingCtnRequest = newRow;
                        $scope.testSysStBookingCtnRequestGrid.$$added = true;
                        $scope.testSysStBookingCtnRequestGrid.addRow(0, newRow).then(function () {
                            $scope.testSysStBookingCtnRequests = $scope.testSysStBookingCtnRequestGrid.getPhysicalSource();
                            $scope.testSysStBookingCtnRequestGrid.$$added = false;
                            $scope.testSysStBookingCtnRequestPrimaryKey(null, newRow, $scope.testSysStBookingCtnRequestGrid);
                            $scope.gridRowClickTestSysStBookingCtnRequestCallBack(undefined, $scope.testSysStBookingCtnRequestGrid, newRow, $scope.testSysStBookingCtnRequestGrid.__fristAbleColumnIndex, 0, null, 0);
                            $scope.testSysStBookingCtnRequestGrid.startEdit(0, $scope.testSysStBookingCtnRequestGrid.__fristAbleColumnIndex);
                            flag = false;
                            if ($scope._pageState && $scope._pageState.setDataStateModify)
                                $scope._pageState.setDataStateModify();
                        });
                    }
                    if ($scope.testSysStBookingCtnRequestGrid.__validationRequireDisabled && RuleService.globalRequireDisabled) {
                        addCallback();
                    } else {
                        if ($scope.testSysStBookingCtnRequestGrid.editingInfo) {
                            var tempeditingInfoRow = $scope.testSysStBookingCtnRequestGrid.editingInfo.physicalRow;
                            $scope.testSysStBookingCtnRequestGrid.validateRow(tempeditingInfoRow, true).then(function () {
                                $scope.testSysStBookingCtnRequestGrid.finishEdit().then(function () {
                                    addCallback();
                                });
                            });
                        } else {
                            if ($scope.testSysStBookingCtnRequestGrid.isValid()) {
                                addCallback();
                            }
                        }
                    }
                }
                if (gridAsynRequiresPromises && gridAsynRequiresPromises.length > 0) {
                    $q.all(gridAsynRequiresPromises).then(function () {
                        if (!allValidationFlag) {
                            outterCallback();
                        } else {
                            $scope.testSysStBookingCtnRequestGrid.select(tempRow, $scope.testSysStBookingCtnRequestGrid.__fristAbleColumnIndex);
                        }
                    }).catch(function (result) {
                        $scope.testSysStBookingCtnRequestGrid.select(tempRow, $scope.testSysStBookingCtnRequestGrid.__fristAbleColumnIndex);
                        console.log("表格校验未通过.");
                    }).finally(function (result) {
                        console.log("执行表格校验.");
                    });
                } else {
                    outterCallback();
                }
            };
//TODO 20171019 linjx FORM START deletes_grid
            /**
             * TODO GLPaaS生成
             * 批量删除箱需求
             */
            $scope.deleteTestSysStBookingCtnRequests = function () {
                var ids = Arrays.extract($scope.testSysStBookingCtnRequestGrid.getCheckedRows(), 'stBookingCtnRequestId').join(',');
                if (ids.length == 0) {
                    GillionMsg.alert("提示", "请选择要删除的记录!");
                    return;
                }
                GillionMsg.confirm(null, '确认删除?', function (btn) {
                    if (btn) {
                        if (!$scope.$root.$$phase) {
                            $scope.$apply();
                        }
                        $http.post($config.ctx + '/testSysStBookingCtnRequest/deletes', {ids: ids}).success(function (data) {
                            if (data.success != undefined && data.success == true) {
                                var deleteRowsCallBack = function () {
                                    $scope.testSysStBookingCtnRequestDeleteds = [];
                                    GillionMsg.alert("提示", data.msg);
                                }
                                _.each($scope.testSysStBookingCtnRequestGrid.getCheckedIndex(), function (physicalRow) {
                                    if ($scope.testSysStBookingCtnRequestGrid.getPhysicalSource().length > 0) {
                                        if ($scope.testSysStBookingCtnRequestGrid.getPhysicalSource()[physicalRow])
                                            $scope.testSysStBookingCtnRequestGrid.getPhysicalSource()[physicalRow].rowStatus = 8;
                                    }
                                });
                                $scope.testSysStBookingCtnRequestGrid.deleteRows($scope.testSysStBookingCtnRequestGrid.getCheckedIndex())
                                    .then(function () {
                                        var index = -1;
                                        var hasSummary = $scope.testSysStBookingCtnRequestGrid.scope.hasSummary;
                                        var total = $scope.testSysStBookingCtnRequestGrid.getPhysicalSource().length;
                                        if (total > 0) {
                                            var selectedIndex = $scope.testSysStBookingCtnRequestGrid.getSelectedIndex();
                                            if (hasSummary && total == selectedIndex) {//有汇总
                                                index = selectedIndex - 1;
                                            } else {
                                                index = selectedIndex;
                                            }
                                        }

                                        if (index > -1) {
                                            $scope.testSysStBookingCtnRequestGrid.select(index, $scope.testSysStBookingCtnRequestGrid.__selectedColumnIndex);
                                            var record = $scope.testSysStBookingCtnRequestGrid.getSelectedRow();
                                            //GridType G
                                            $scope.gridRowClickTestSysStBookingCtnRequestCallBack("deletesEventStr", $scope.testSysStBookingCtnRequestGrid, record, $scope.testSysStBookingCtnRequestGrid.__selectedColumnIndex, index, null, index);
                                        } else {
                                        }

                                        deleteRowsCallBack();
                                    });
                            }
                        });
                    }
                });
            };
            //<!--GRID-->


            $scope.testSysStBookingCtnRequest = {};
            $scope.testSysStBookingCtnRequests = [];
            $scope.perTestSysStBookingCtnRequests = [];
            $scope.testSysStBookingCtnRequestDeleteds = [];

            /**
             * TODO GLPaaS生成
             * TestSysStBookingCtnRequestSource
             */
            $dataSourceManager.getDataSource('TestSysStBookingCtnRequestSource').then(function (dataSource) {
                $scope.testSysStBookingCtnRequestDataSource = dataSource;
                $scope.getTestSysStBookingCtnRequestPages = function () {
                    var grid = $scope.testSysStBookingCtnRequestGrid;
                    if (grid) grid._reset();
                    dataSource.doRequestData(1, null, function () {
                        grid.__selectedColumnIndex = grid.__fristAbleColumnIndex;
                    }, null);
                };
            });


            /**
             * TODO GLPaaS生成
             *
             */
            $scope.gridRowClickTestSysStBookingCtnRequest = function ($event, grid, record, colIndex, rowIndex, field, physicalRow) {
                grid.__selectedColumnIndex = grid.getSelectedColumnIndex();
                var gridAsynRequiresPromises = [];
                var count = 0, totalCount = 0;
                var allValidationFlag = false;
                var tempRow = grid.getPhysicalRow($scope.testSysStBookingCtnRequest);

                console.log("gridRowClickTestSysStBookingCtnRequest事件");
                var callback = function () {
                    if (grid.__validationRequireDisabled && RuleService.globalRequireDisabled) {
                        grid.finishEdit("cell", true).then(function () {
                            if (tempRow == physicalRow)
                                grid.startEdit(physicalRow, colIndex);
                            else
                                $scope.gridRowClickTestSysStBookingCtnRequestCallBack($event, grid, record, colIndex, rowIndex, field, physicalRow);
                        });
                    } else {
                        if (grid.editingInfo) {
                            if (grid.scope.physicalSourceInfo[physicalRow].invalidCells && grid.scope.physicalSourceInfo[physicalRow].invalidCells.length > 0) {
                                grid.finishEdit("cell", true).finally(function () {
                                    if (tempRow == physicalRow)
                                        grid.startEdit(physicalRow, colIndex);
                                    else
                                        $scope.gridRowClickTestSysStBookingCtnRequestCallBack($event, grid, record, colIndex, rowIndex, field, physicalRow);
                                });
                            } else {
                                grid.finishEdit("cell", true).then(function () {
                                    if (tempRow == physicalRow) {
                                        grid.startEdit(physicalRow, colIndex);
                                    } else {
                                        if (grid.isValid()) {
                                            $scope.gridRowClickTestSysStBookingCtnRequestCallBack($event, grid, record, colIndex, rowIndex, field, physicalRow);
                                        }
                                    }
                                });
                            }
                        } else {
                            if (grid.scope.physicalSourceInfo[physicalRow].invalidCells && grid.scope.physicalSourceInfo[physicalRow].invalidCells.length > 0) {
                                $scope.gridRowClickTestSysStBookingCtnRequestCallBack($event, grid, record, colIndex, rowIndex, field, physicalRow);
                            } else {
                                if (grid.isValid()) {
                                    $scope.gridRowClickTestSysStBookingCtnRequestCallBack($event, grid, record, colIndex, rowIndex, field, physicalRow);
                                }
                            }
                        }
                    }
                }
                if (tempRow == physicalRow) {
                    callback();
                } else {
                    if (gridAsynRequiresPromises && gridAsynRequiresPromises.length > 0) {
                        $q.all(gridAsynRequiresPromises).then(function () {
                            if (!allValidationFlag) {
                                callback();
                            } else {
                                grid.select(tempRow, grid.__selectedColumnIndex);
                            }
                        }).catch(function (result) {
                            grid.select(tempRow, grid.__selectedColumnIndex);
                            console.log("表格校验未通过.");
                        }).finally(function (result) {
                            console.log("执行表格校验.");
                        });
                    } else {
                        callback();
                    }
                }
            }

            $scope.gridRowClickTestSysStBookingCtnRequestCallBack = function ($event, grid, record, colIndex, rowIndex, field, physicalRow) {
                grid.__lastSelectIndex = physicalRow;  //
                //var $target = angular.element($event.target);
                //var $row = $target.closest('tr');
                var innerRowIndex = physicalRow;
                //$scope.testSysStBookingCtnRequestCurRow = $row.scope();

                $scope.testSysStBookingCtnRequest = record;


                $scope.testSysStBookingCtnRequest.$$rowIndex = physicalRow;

                $scope._finishEditGridWrap($scope.testSysStBookingCtnRequestGrid, $scope.testSysStBookingCtnRequests, $scope);
                if ($event)
                    grid.startEdit(physicalRow, colIndex);
                grid.$$currentSelKey = record.stBookingCtnRequestId;
            }
            /**
             * TODO GLPaaS生成
             *
             */
            $scope.testSysStBookingCtnRequestPrimaryKey = function ($target, row, grid) {
            }


            /**
             * TODO GLPaaS生成
             *
             */
            $scope.queryTestSysStBookingCtnRequestParams = function () {

                var searchColumns = [];
                //A
                searchColumns.push({
                    propertyName: 'stBookingId',
                    columnName: 'ST_BOOKING_ID',
                    dataType: 'S',
                    value: $scope.testSysStBooking.stBookingId || "",
                    operation: 'EQ'
                });


                if ($scope.testSysStBookingCtnRequestGrid && $scope.testSysStBookingCtnRequestGrid.getSelectedColumnIndex() != false)
                    $scope.testSysStBookingCtnRequestGrid.__selectedColumnIndex = $scope.testSysStBookingCtnRequestGrid.getSelectedColumnIndex();

                return {"searchColumns": searchColumns, "queryResultType": "page", "sum": false, "girdType": "HTR"};
            }

            /**
             * TODO GLPaaS生成
             * initTestSysStBookingCtnRequestGrid
             */
            $scope.initTestSysStBookingCtnRequestGrid = function (grid, source, validationRequireDisabled) {
                grid.__validationRequireDisabled = validationRequireDisabled;
                grid.__lastSelectIndex = -1;  //表格上一次选择行记录
                if (grid.scope.hasCheckboxColumn) {
                    grid.__fristAbleColumnIndex = 1;//记录表格第一字段列
                    grid.__selectedColumnIndex = 1; //记录表格当前选择在那列
                } else {
                    grid.__fristAbleColumnIndex = 0;
                    grid.__selectedColumnIndex = 0;
                }
                $scope.testSysStBookingCtnRequestGrid = grid;
                $scope.testSysStBookingCtnRequestGrid.$$added = false;
                if ($scope._pageState) $scope._pageState.resetDataState();
            };

            /**
             * TODO GLPaaS生成
             *
             */
            $scope.loadSuccessTestSysStBookingCtnRequestGrid = function (grid, $event, source, physicalSource) {
                grid.__lastSelectIndex = -1;  //表格第一次选择行记录
                $scope.testSysStBookingCtnRequests = physicalSource;
                $scope.perTestSysStBookingCtnRequests = angular.copy(physicalSource);
                var innerRowIndex = 0;
                if (physicalSource.length > 0) {
                    var record = physicalSource[0];

                    var rowIndex = innerRowIndex || Arrays.indexOf($scope.testSysStBookingCtnRequests, $scope.testSysStBookingCtnRequest);
                    $scope.testSysStBookingCtnRequest.$$rowIndex = rowIndex;

                    $timeout(function () {
                        var $$currentSelKey = grid.$$currentSelKey;
                        var $$hasSelectPrimaryKey = false;
                        if (grid.$$currentSelKey) {
                            angular.forEach(source, function (data, index) {
                                if ($$currentSelKey == data.stBookingCtnRequestId) {
                                    $scope.gridRowClickTestSysStBookingCtnRequestCallBack(undefined, grid, data, grid.__selectedColumnIndex, index, null, index);
                                    grid.select(index, grid.__selectedColumnIndex);
                                    grid.startEdit(index, grid.__selectedColumnIndex);
                                    $$hasSelectPrimaryKey = true;
                                }
                            });
                            if (!$$hasSelectPrimaryKey) {
                                $scope.gridRowClickTestSysStBookingCtnRequestCallBack(undefined, grid, record, grid.__selectedColumnIndex, 0, null, 0);
                                grid.select(0, grid.__selectedColumnIndex);
                                grid.startEdit(0, grid.__selectedColumnIndex);
                            }
                        }
                        else {
                            $scope.gridRowClickTestSysStBookingCtnRequestCallBack(undefined, grid, record, grid.__selectedColumnIndex, 0, null, 0);
                            grid.select(0, grid.__selectedColumnIndex);
                            grid.startEdit(0, grid.__selectedColumnIndex);
                        }
                    });
                } else {
                }

            };

            //TODO LayoutElementType.GRID gridEditType:G
            //<!-- gridEditType="G"
            //renderPageLayoutJs2
            //自定义JS方法  boName:TestSysStBooking layoutBoName:TestSysStBooking

            //TODO 自定义js函数
            /**
             * 客户方法1
             */
            $scope.controlOneTestSysStBooking = function (aa, bb, cc) {
                alert('dfd');
            }
            //自定义JS方法  boName:TestSysStBooking layoutBoName:TestContainerCargo
            //自定义JS方法  boName:TestSysStBooking layoutBoName:TestSysStBookingEx

            //TODO 自定义js函数
            /**
             * 客户自定义3
             */
            $scope.customThree = function () {
                alert("请配置方法实现");
            }
            //自定义JS方法  boName:TestSysStBooking layoutBoName:TestBkContainer
            //自定义JS方法  boName:TestSysStBooking layoutBoName:TestSysStBookingCtnRequest

//generatorBoExportAndImportJs haveOrGenTabPage: page:edit boName:TestSysStBooking 


            $scope.initGridNoDefaultValue = function (flag, filterPro, func) {
                var param = [];
                //过滤参数
                if (flag && flag == "add") {
                    var girdParam = [];
                    angular.forEach(param, function (data, index) {
                        if (filterPro && (data.ivt == "-1" || data.ivt == "-2") && data.boName == filterPro) {
                            girdParam.push(data);
                        }
                    });
                    param = girdParam;
                }

                if (param.length > 0) {
                    $http.post($config.ctx + '/defaultValue/getDefaultValue', param).success(function (data) {
                        if (data.success != undefined && data.success == true) {
                            if (data.defaultValueInfos != undefined && data.defaultValueInfos != null) {
                                if ($scope._pageState) $scope._pageState.resetDataState();
                            }
                        }

                        if (func)
                            func();
                    });
                }
                else {
                    func();
                }
            }

            $scope.$$gridDefaultValue = {};

            /**
             * TODO GLPaaS生成
             * boName:TestSysStBooking
             */
            $scope.initGridDefaultValue = function () {
                var param = [
                    {
                        ut: '01',
                        ivt: '9',
                        dv: '',
                        field: 'TestSysStBookingCargo_cargoDescription',
                        boName: 'TestSysStBookingCargo'
                    }
                    , {
                        ut: '01',
                        ivt: '6',
                        dv: '',
                        field: 'TestStBookingCargoA_stContent',
                        boName: 'TestStBookingCargoA'
                    }
                    , {
                        ut: '01',
                        ivt: '7',
                        dv: '',
                        field: 'TestStBookingCargoB_stContent',
                        boName: 'TestStBookingCargoB'
                    }
                    , {
                        ut: '01',
                        ivt: '8',
                        dv: '',
                        field: 'TestStBookingCargoC_stContent',
                        boName: 'TestStBookingCargoC'
                    }
                ];

                if (param.length > 0) {
                    $http.post($config.ctx + '/defaultValue/getDefaultValue', param).success(function (data) {
                        if (data.success != undefined && data.success == true) {
                            if (data.defaultValueInfos != undefined && data.defaultValueInfos != null) {
                                $scope.$$gridDefaultValue.testSysStBookingCargo_cargoDescription = data.defaultValueInfos["TestSysStBookingCargo_cargoDescription"];
                                $scope.$$gridDefaultValue.testStBookingCargoA_stContent = data.defaultValueInfos["TestStBookingCargoA_stContent"];
                                $scope.$$gridDefaultValue.testStBookingCargoB_stContent = data.defaultValueInfos["TestStBookingCargoB_stContent"];
                                $scope.$$gridDefaultValue.testStBookingCargoC_stContent = data.defaultValueInfos["TestStBookingCargoC_stContent"];
                                if ($scope._pageState) $scope._pageState.resetDataState();
                            }
                        }

                    });
                }
            };
            //DefaultValue LayoutElementType TOOLBAR
            /**
             * TODO GLPaaS生成
             * 关闭
             */
            $scope.close = function () {
                var indexScope = top.angular.element("body").scope();
                if ($scope.openType && $scope.openType == '2')
                    indexScope.closeModal();
                else {
                    indexScope.removeTab();
                    indexScope.$apply();
                }
            };
            /**
             * TODO GLPaaS生成
             * 规则中调用或其它按钮调用刷新父窗口中的表格eg:objectName = LinjxBas,eg:LinjxBas2
             */
            $scope.refreshParent = function (objectName) {
                var indexScope = top.angular.element("body").scope();
                var objectNames = objectName.split(",");
                angular.forEach(objectNames, function (data) {
                    //2 = 弹出框刷新底层窗口
                    indexScope.refresh($scope.openType, data);
                });
            };

            /**
             * TODO GLPaaS生成
             * 规则中调用或其它按钮调用刷新父窗口中的所有表格和form表单内容
             */
            $scope.refreshUperLayer = function () {
                var indexScope = top.angular.element("body").scope();
                indexScope.refreshUperLayer($scope.openType);
            }
            /**
             * TODO GLPaaS生成
             *
             */
            $scope.refreshCurrentPage = function (modelName) {
                if ($scope.__reloadCurentPage) {
                    $scope.__reloadCurentPage(modelName);
                }
            };

            /**
             * 刷新当前页面下的页签懒加载页面
             */
            $scope.refreshPages = function (modelName) {
                $scope.refreshCurrentPage(modelName);
            };

            /**
             * TODO GLPaaS生成
             *
             */
            $scope.initAcceptParams = function () {
            }


            /**
             * TODO GLPaaS生成
             *
             */
            $scope.initialize = function () {
                if ($scope.initDefaultValue && $scope.__initDefaultValueFlag) $scope.initDefaultValue();


                if ($scope.initGridDefaultValue && $scope.__initGridDefaultValueFlag)
                    $scope.initGridDefaultValue();
                $scope.openType = Params.openType;

                $scope.initAcceptParams && $scope.initAcceptParams();

                if ($scope.testSysStBooking.stBookingId)
                    $scope.getTestSysStBooking($scope.testSysStBooking.stBookingId);


                if ($scope.customTestSysStBookingInit) {
                    $scope.customTestSysStBookingInit();
                }
                if ($scope._pageState) $scope._pageState.resetDataState();
            };
            $scope.initialize();
        }).filter("YesOrNo", function () {
            return function YesOrNoFunc(data) {
                if (data && (data == "X" || data == "1" || data == "Y"))
                    return "是";
                else if (data == " ")
                    return "";
                else
                    return "否";
            };
        }).filter('wrapNoneLeaf', function () {
            return function (value, record, prefix, suffix) {
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
        }).directive('onFinishRender', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, element, attr) {
                    scope.initFocus = function () {
                        var formElement = $("body :text[ng-model!=currentPage]:enabled[readonly !='readonly']:not([ng-model^=calendar]),body textarea[readonly !='readonly']")
                        if (formElement != undefined && formElement.length > 0) {
                            $(formElement[0]).focus();
                        } else {
                            formElement = $("body button[type=button]:enabled[disabled !='disabled']")
                            if (formElement != undefined && formElement.length > 0) {
                                $(formElement[0]).focus();
                            }
                        }

                    }
                    $(window).resize();
                    $timeout(scope.initFocus);
                }
            }
        });
});	
