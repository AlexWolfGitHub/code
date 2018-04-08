define([
    'angular',
    'framework/uploader/UploadGroupModule',
    'framework/snapshot/GillionSnapshotModule'
], function (angular) {
    angular.module('UploaderTesterModule', ['UploadGroupModule', 'GillionSnapshotModule'])
        .controller('UploaderController', function ($scope) {


            /* $http.get('/gillion-web/cloud/filesystem/getFileInfos', {
             params: {
             fileKeys: ['4e6becb99b6a493ba6e7d53008978a32', '6bd02388464c4098b66a39c10a819084', '730277b028b84704a6bcd7725ec3438b']
             }
             }).success(function (fileInfos) {
             $scope.fileInfos = fileInfos;
             });*/

            $scope.beforeUpload = function (fileInfo, uploaderStrategy) {
                console.log('beforeUpload')
                console.log('fileInfo', fileInfo)
                console.log('uploaderStrategy', uploaderStrategy)
            };
            $scope.upload = function (fileInfo, uploaderStrategy) {
                console.log('upload')
                console.log('fileInfo', fileInfo)
                console.log('uploaderStrategy', uploaderStrategy)
            };
            $scope.beforeDelete = function (fileInfo, uploaderStrategy) {
                console.log('beforeDelete')
                console.log('fileInfo', fileInfo)
                console.log('uploaderStrategy', uploaderStrategy)
            };
            $scope.destroy = function (fileInfo, uploaderStrategy) {
                console.log('delete')
                console.log('fileInfo', fileInfo)
                console.log('uploaderStrategy', uploaderStrategy)
            };

            $scope.submitOuter = function (form) {
                alert(124);
                console.log(form)
            };

            $scope.beforeSelect = function (uploader, strategy) {
                console.log('before select');
            };

            $scope.onSelect = function (uploader, strategy) {
                console.log('on select');
            };


        });
});