// Generated by CoffeeScript 1.9.3
(function() {
  define("framework/simplelist/SimpleListItemConstructor", ["angular"], function(angular) {

    /*列表项模板 */
    var SimpleListItem, SimpleListItemConstructor, template;

    //template = '<a class="select-down-a"  ng-class="{\'ellipsis\':!isRadio,\'radio-effect\':isRadio,\'selected\':isSelected}" list-type=\"listType\">' +
    //'<i ng-show="listType" class="iconfont" ng-class="{\'check-box-icon\':isCheckbox,\'icon-check\':isCheckbox&&!isSelected,\'icon-radio\':isRadio&&!isSelected,\'radio-box-icon\':isRadio,\'icon-radioed\':isRadio&&isSelected,\'icon-checked\':isCheckbox&&isSelected}" >' +
    //'</i><span ng-transclude></span></a>';
    template = '<li ><a href="javascript:void(0)"><i class="fi" ng-class="{\'fi-checkbox\':isCheckbox,\'fi-radiobox\':isRadio}"></i><span ng-transclude></span></a></li>',
    /*列表项对象 */
    SimpleListItem = (function() {
      function SimpleListItem($scope1, $element1, $attrs1, itemValue) {
        this.$scope = $scope1;
        this.$element = $element1;
        this.$attrs = $attrs1;
        this.itemValue = itemValue != null ? itemValue : this.$scope.item;
      }

      /*选择当前项 */

      SimpleListItem.prototype.select = function() {
        this.$element.attr("selected","selected");
        this.$scope.isSelected = true;
      };


      /*取消选择当前项 */

      SimpleListItem.prototype.unSelect = function() {
        this.$element.removeAttr("selected");
        this.$scope.isSelected = false;
      };

      /*判断当前项是否选中 */

      SimpleListItem.prototype.isSelected = function() {
        return this.$scope.isSelected;
      };

      return SimpleListItem;

    })();

    /*列表项指令构造器 */
    return SimpleListItemConstructor = function() {
      return {
        restrict: "E",
        scope: false,
        template: template,
        replace: true,
        transclude:true,
        scope: {

        },
        require: "^?gSimpleList",
        link: function($scope, $element, $attrs, $controller) {
          var listItem;
          $scope.listType = $controller.$scope.listType;
          $scope.listType=='single'?$scope.isRadio = true:$scope.isRadio = false;
          $scope.listType=='multi'?$scope.isCheckbox = true:$scope.isCheckbox = false;
          if($attrs.text){
            $element.find("a").append($attrs.text);
          }
          listItem = new SimpleListItem($scope, $element, $attrs);
          $controller.itemList.push(listItem);

          /*绑定点击事件 */
          $element.bind("click", function($event) {
            $controller.selectItem(listItem);
            $scope.$digest();
          });
        }
      };
    };
  });

}).call(this);
