(function () {
    angular.module("douse").controller("blogController", ["$scope", '$location', blogControllerFn]);

    function blogControllerFn($scope, $location) {
        $scope.close = function () {
            $location.path("/");
        };
    }
})();
