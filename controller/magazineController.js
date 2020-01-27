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
                    { src: "../resources/images/magazine02.png" },
                    { src: "../resources/images/magazine03.png" },
                    { src: "../resources/images/magazine04.png" },
                    { src: "../resources/images/magazine05.png" },
                    { src: "../resources/images/magazine06.png" },
                    { src: "../resources/images/magazine07.png" },
                    { src: "../resources/images/magazine08.png" },
                    { src: "../resources/images/magazine09.png" },
                    { src: "../resources/images/magazine10.png" },
                    { src: "../resources/images/magazine11.png" },
                    { src: "../resources/images/magazine12.png" }
                ]
            }
        ];
    }
})();
