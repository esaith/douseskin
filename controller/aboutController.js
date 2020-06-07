(function () {
    angular.module("douse").controller("aboutController", ["$scope", '$location', 'services', aboutControllerFn]);

    function aboutControllerFn($scope, $location, services) {
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
