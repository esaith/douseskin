angular.module("douse").directive("serviceSection", function () {
  return {
    restrict: "E",
    templateUrl: "view/serviceSection.html?n=1",
    scope: {
      service: "="
    },
    link: function (scope, element, attr) {
      let interval;

      if (scope.service) {
        for (var i = 0; i < scope.service.length; ++i)
          scope.service[i].page = 0;
      }

      if (attr["autoScroll"] === "") {
        interval = setInterval(() => {
          scope.$evalAsync(() => {
            scope.nextPage(scope.service[0]);
          });
        }, 3000);
      }

      scope.nextPage = function (service, cancelInterval) {
        if (cancelInterval) clearInterval(interval);

        if (!service.page && service.page !== 0) {
          service.page = 0;
        } else if (service.page < service.descriptions.length) {
          ++service.page;
        } else {
          if (interval) {
            clearInterval(interval);
          } else {
            service.page = 0;
          }
        }
      };

      scope.previousPage = function (service, cancelInterval) {
        if (cancelInterval) clearInterval(interval);

        if (!service.page && service.page !== 0) {
          service.page = 0;
        } else if (service.page - 1 >= 0) {
          --service.page;
        }
      };
    }
  };
});
