define(['jquery', 'framework/directive/ControlValidator'], function ($, ControlValidator) {
    ControlValidator.prototype.notBlankOnOtherPropertyLessThan = function () {
        var me = this,
            rule = me.rule,
            form = me.form,
            property = me.property,
            otherProperty = rule.otherProperty,
            lessThan = rule.lessThan,
            otherPropertyVal = Number(form[otherProperty].$viewValue);
        if (!isNaN(otherPropertyVal) && otherPropertyVal < lessThan) {
            return !!$.trim(form[property].$viewValue);
        }
        return true;
    }
});