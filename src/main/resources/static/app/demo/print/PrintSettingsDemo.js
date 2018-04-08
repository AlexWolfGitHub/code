define([
    'angular',
    'framework/print/PrintSettingsModule'
], function (angular) {
    return angular.module('PrintSettingsDemo', ['PrintSettingsModule'])
        .controller('PrintSettingsController', function ($scope, PrintSettings) {
            var originalColumns = [
                {text: "序号", field: "NOIndex"},
                {text: "托运日期", field: "consignDate"},
                {text: "运单号", field: "WaybillNo"},
                {text: "到站", field: "endName"},
                {text: "货物名称", field: "goodsName"},
                {text: "包装", field: "packageType"},
                {text: "件数", field: "goodsQuantity"},
                {text: "重量", field: "goodsWeight"},
                {text: "体积", field: "goodsVolume"},
                {text: "回单份数", field: "returnbillQuantity"},
                {text: "代收款", field: "goodsPayment"},
                {text: "提付", field: "pickupFee"},
                {text: "送货方式", field: "deliverType"},
                {text: "收货人", field: "consigneeName"},
                {text: "收货人电话", field: "consigneeMobile"},
                {text: "备注", field: "Remark"}
            ];
            var oldTmpl = '$TEXT_S$LODOP.ADD_PRINT_TABLE("10mm","0mm",800,600,"tablehtml");$TEXT_E$ $TABLE_S$ <style type="text/css"> .print_table { border-collapse: collapse; border-spacing: 0; width: 277mm; } .print_table caption { font-size: 1.2em; padding: .5em 0; font-weight: bold; } .print_table thead td { font-size: 1em; border-bottom: 1px solid #000; } .print_table thead tr.sec td { padding-bottom: .8em; border-bottom: 1px solid #333; } .print_table td { padding: .5em; font-size: 12px; } .print_table tbody td { border: 1px solid #333; }      </style> <table class="print_table" cellpadding="0" cellspacing="0"> <caption>CompanyName装车清单</caption> <thead> <tr> <td colspan="16">装车单号:<span style="padding-right:5px;">LoadingNo</span>发车时间:<span style="padding-right:5px;">SendTime</span>车牌号:<span style="padding-right:5px;">VehicleNo</span>司机:<span style="padding-right:5px;">CarOwner</span>联系电话:<span style="padding-right:5px;">DriverPhone</span>线路:<span>TranLine</span></td> </tr> </thead> <tbody><tr><td width="90">序号</td><td width="140">体积</td><td>运单号</td><td>货物名称</td><td width="200">重量</td><td width="250">提付</td><td>收货人</td><td>收货人电话</td><td>备注</td><td>托运日期</td></tr>LoopContent <tr> <td colspan="2">合计:</td> <td colspan="4">共: LoadingCount票 LoadingQuantity件 LoadingTotalWeightT LoadingTotalVolumeF</td> <td>goodsQuantityTotal</td> <td>goodsWeightTotal</td> <td>goodsVolumeTotal</td> <td>returnbillQuantityTotal</td> <td>goodsPaymentTotal</td> <td>pickupFeeTotal</td> <td colspan="4">下货地:pointName</td> </tr> <tr> <td colspan="6">经办人签字：</td> <td colspan="6">承运人签字：</td> <td></td> <td colspan="4">仓管签字：</td> </tr> </tbody> <tfoot> <tr> <td colspan="12">打印人：Printer</td> <td colspan="4">打印时间：PrintTime</td> </tr> </tfoot> </table>$TABLE_E$$TR_S$<tr><td>NOIndex</td><td>goodsVolume</td><td>WaybillNo</td><td>goodsName</td><td>goodsWeight</td><td>pickupFee</td><td>consigneeName</td><td>consigneeMobile</td><td>Remark</td><td>consignDate</td></tr>$TR_E$';

            $scope.startSettings = function () {
                PrintSettings.startEdit({
                    originalColumns: originalColumns,
                    oldTmpl: oldTmpl,
                    callback: function (newTmpl) {
                        console.log(newTmpl);
                    }
                });
            };
        });
});