// Generated by CoffeeScript 1.9.3
(function() {
    define('framework/slider/GillionSliderModule', [
        'angular',
        'framework/slider/GillionSliderDirectiveConstructor',
    ],function (angular,GillionSliderDirectiveConstructor) {
        var GillionSliderModule = angular.module('GillionSliderModule', []);
        GillionSliderModule.directive('gSlider',GillionSliderDirectiveConstructor);
        return GillionSliderModule;
    })
}).call(this);