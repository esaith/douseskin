angular.module('douse')
    .controller('networkingEventController', ['$scope', '$window',
        function networkEventController($scope, $window) {
            $scope.goTo = function(route) {
                $window.location.href = "#!/" + route;
            }
        }]);