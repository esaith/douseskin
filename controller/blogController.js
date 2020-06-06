(function () {
    angular.module("douse").controller("blogController", ["$scope", '$location', 'services', blogControllerFn]);

    function blogControllerFn($scope, $location, services) {
        $scope.close = function () {
            $location.path("/");
        };

        services.getServices().then(function (response) {
            $scope.$evalAsync(function () {
                $scope.business = response;
            });
        });
    }
})();
