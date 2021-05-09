(function () {
  angular.module("douse").directive("serviceSection", serviceSectionFn);

  function serviceSectionFn() {
    return {
      restrict: "E",
      replace: true,
      templateUrl: "view/serviceCategory.html?n=3",
      scope: {
        serviceCategory: "=",
        ignoreSelection: "=?"
      },
      link: function (scope, element, attr) {
        scope.selectService = function (serviceIndex, serviceCategory) {
          if (!scope.ignoreSelection) {
            scope.$emit("selected-service", {
              serviceIndex: serviceIndex,
              serviceCategory: serviceCategory
            });
          }
        };
      }
    };
  }
})();
