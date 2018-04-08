define('framework/filters/GillionGlobalFiltersModule', [
    'angular',
    'framework/filters/SexToCnFilterConstructor',
    'framework/filters/DateFilterConstructor',
    'framework/filters/AuthFilterConstructor'
], function (angular, SexToCnFilterConstructor, DateFilterConstructor,AuthFilterConstructor) {
    return angular.module('GillionGlobalFiltersModule', [], ['$filterProvider', function ($filterProvider) {
        $filterProvider.register('sexToCn', SexToCnFilterConstructor);
        $filterProvider.register('dateFormatter', DateFilterConstructor);
        $filterProvider.register('authFilter', AuthFilterConstructor);
    }]);
});