(function() {
    angular.module("douse").controller("magazineController", ["$scope", "$location", magazineControllerFn]);

    function magazineControllerFn($scope, $location) {
        $scope.close = function() {
            $location.path("/");
        };

        $scope.magazine = [
            {
                src: "magazine01",
                service: "",
                descriptions: [
                    { src: "../resources/images/magazine02.jpg" },
                    { src: "../resources/images/magazine03.jpg" },
                    { src: "../resources/images/magazine04.jpg" },
                    { src: "../resources/images/magazine05.jpg" },
                    { src: "../resources/images/magazine06.jpg" },
                    { src: "../resources/images/magazine07.jpg" },
                    { src: "../resources/images/magazine08.jpg" }
                ]
            }
        ];
    }
})();
