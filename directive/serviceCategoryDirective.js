(function() {
  angular.module("douse").directive("serviceSection", serviceSectionFn);

  function serviceSectionFn() {
    return {
      restrict: "E",
      replace: true,
      templateUrl: "view/serviceCategory.html?n=5",
      scope: {
        serviceCategory: "="
      },
      link: function(scope, element, attr) {
        scope.selectService = function(serviceIndex, serviceCategory) {
          scope.$emit("selected-service", {
            serviceIndex: serviceIndex,
            serviceCategory: serviceCategory
          });
        };
      }
    };
  }
})();
