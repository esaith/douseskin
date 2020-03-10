(function () {
  angular.module("douse").directive("serviceSection", serviceSectionFn);

  function serviceSectionFn() {
    return {
      restrict: "E",
      replace: true,
      templateUrl: "view/serviceCategory.html?n=4",
      scope: {
        serviceCategory: "="
      },
      link: function (scope, element, attr) {
        scope.selectService = function (service) {
          scope.$emit('selected-service', service);
        };
      }
    };
  };
})();