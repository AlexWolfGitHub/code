define(['angular', 'framework/associate/AssociateModule'], function (angular) {
    return angular.module('AssociateDemoModule', ['AssociateModule'])
        .controller('AssociateDemoController', function ($scope) {
            var treeObj;
            $scope.age = 30;
            $scope.treeOpts = {
                treeObj: treeObj
            };

            $scope.getAllChecked = function () {
              var selectedNodes = treeObj.getSelectedNodes();
            };
            "<g-tree tree-data='' tree-opts='treeOpts' />"
        })
});