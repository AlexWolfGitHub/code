// Generated by CoffeeScript 1.9.3
(function() {
  define(["angular", "framework/time/TimeModule", "framework/tabindex/TabindexModule"], function(angular) {
    var TestTabindexModule, index;
    TestTabindexModule = angular.module("TestTabindexModule", ["TimeModule", "TabindexModule"]);
    index = 1;
    return TestTabindexModule.controller("TestController", function($scope, $compile) {
      return $scope.test = {
        time: "15:11"
      };
    });

    /*TestTabindexModule.directive "gTest",($compile,$tabindex)->
    		template = '
    				<div>
    					<input type="text" ng-click="test()"/>
    				</div>
    		'
    		return {
    			restrict:"E"
    			scope:{
    				testCompile:"&"
    			}
    			replace:true
    			template:template
    			transclude: true
    			compile:($element,$attrs,$transclude)->
    
    				return {
    					pre:($scope,$element,$attrs)->
    						inputEle = $element.find("input");
    						$tabindex.register($scope,inputEle,$element)
    						$compile(inputEle,undefined,2)($scope)
    					post:($scope,$element,$attrs)->
    						index = 0
    						$scope.test = ->
    							index = ++index
    							console.info "=====#{index}"
    				}
    		}
     */
  });

}).call(this);