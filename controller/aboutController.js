(function() {
    angular.module("douse").controller("aboutController", ["$scope", '$location', aboutControllerFn]);

    function aboutControllerFn($scope, $location) {
        $scope.close = function() {
            $location.path("/");
        };
    }
})();
