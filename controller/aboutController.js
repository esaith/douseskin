(function () {
    angular.module("douse").controller("aboutController", ["$scope", '$location', 'services', aboutControllerFn]);

    function aboutControllerFn($scope, $location, services) {
        $scope.vm = {
            address: [],
            phone: '',
            instagram: '',
            instagramTitle: '',
            facebook: '',
            facebookTitle: ''
        };

        $scope.close = function () {
            $location.path("/");
        };

        services.getServices().then(function (response) {
            $scope.$evalAsync(function () {
                $scope.business = response;
                $scope.vm.address.push(response.Address);
                $scope.vm.address.push(response.City + ", " + response.State + " " + response.Zip);
                $scope.vm.phone = response.Phone;
                $scope.vm.instagram = response.Instagram;
                $scope.vm.instagramTitle = response.instagramTitle;
                $scope.vm.facebook = response.facebook;
                $scope.vm.facebookTitle = response.facebookTitle;
            });
        });
    }
})();
