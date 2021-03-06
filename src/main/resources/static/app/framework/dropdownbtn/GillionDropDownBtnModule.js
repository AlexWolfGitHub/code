// Generated by CoffeeScript 1.9.3
(function() {
    define('framework/dropdownbtn/GillionDropDownBtnModule', [
        'angular',
        'framework/dropdownbtn/GillionDropDownBtnDirectiveConstructor',
        'framework/dropdownbtn/GillionDropDownBtnItemDirectiveConstructor'
    ],function (angular,GillionDropDownBtnDirectiveConstructor,GillionDropDownBtnItemDirectiveConstructor) {
        var GillionDropDownBtnModule = angular.module('GillionDropDownBtnModule', []).config([
            '$compileProvider',
            function ($compileProvider) {
                $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|javascript|mailto|tel|file|sms):/);
            }
        ]);
        GillionDropDownBtnModule.directive('gDropdownBtn',GillionDropDownBtnDirectiveConstructor);
        GillionDropDownBtnModule.directive('gDropdownItem',GillionDropDownBtnItemDirectiveConstructor);
        return GillionDropDownBtnModule;
    });
})(this)
