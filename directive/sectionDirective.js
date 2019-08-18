angular.module("douse").directive("serviceSection", function () {
    return {
        restrict: 'E',
        templateUrl: "view/serviceSection.html",
        scope: {
            service: "="
        },
        link: function (scope) {
            scope.toggleDescription = function (service) {
                service.swiped = !service.swiped;
            };
        }
    };
});