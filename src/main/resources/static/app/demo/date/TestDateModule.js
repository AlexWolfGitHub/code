// Generated by CoffeeScript 1.9.3
(function() {
  define(["angular", "framework/date/DateModule", "framework/filters/GillionGlobalFiltersModule"], function(angular) {
    var TestDateModule;
    TestDateModule = angular.module("TestDateModule", ["DateModule", "GillionGlobalFiltersModule"]);
    return TestDateModule.controller("DateController", function($scope, $rootScope) {
      $scope.status = "1";
      $scope.test = {
        date: "2015-01-02 05:04"
      };

      $scope.testParser = '2016-05-24';
      $scope.dateParser = function () {
        var date = $rootScope.calendar.dateParser($scope.testParser);
        alert(date);
      }

      $scope.reset = function(){
        $scope.test = {}
      }
      $scope.eventTest = function() {
        return $scope.$emit("name-change", "hello world");
      };
      $scope.hello = function(a) {
        return true;
      };
      $scope.$on("name-change", function() {
        return console.info(arguments);
      });
      return $scope.changeRootScope = function() {
        return $scope.test.date = "2015-06-23";
      };
    });
  });

}).call(this);