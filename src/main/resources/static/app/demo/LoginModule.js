define(['angular', 'jquery'], function (angular, $) {
    return angular.module('LoginModule', [])
        .controller('loginController', function ($scope, Permissions) {
            $scope.login = function (userId) {
                $.ajax({
                    url: window.basePath + '/j_spring_security_check',
                    type: 'POST',
                    data: {
                        j_username: userId,
                        j_password: '123456'
                    },
                    success: function (data) {
                        console.log(data, data.success);
                        if (data.success) {
                            Permissions.reload();
                        }
                    }
                });
            };

            $scope.logout = function () {
                $.ajax({
                    url: window.basePath + '/j_spring_security_logout',
                    success: function () {
                        Permissions.reload();
                    }
                });
            }
        });
})