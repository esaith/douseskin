angular.module("douse").directive("serviceSection", function () {
    return {
        restrict: 'E',
        templateUrl: "view/serviceSection.html?n=6",
        scope: {
            service: "="
        },
        link: function (scope) {
            if (scope.service) {
                for(var i = 0; i < scope.service.length; ++i)
                    scope.service[i].page = 0;
            }
                

            scope.nextPage = function (service) {
                if (!service.page && service.page !== 0) {
                    service.page = 0;
                } else if (service.page < service.descriptions.length) {
                    ++service.page;
                }
            };

            scope.previousPage = function (service) {
                if (!service.page && service.page !== 0) {
                    service.page = 0;
                } else if (service.page - 1 >= 0) {
                    --service.page;
                }
            };
        }
    };
});