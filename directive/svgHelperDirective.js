angular.module("douse").directive("svgHelper", function() {
  return {
    restrict: "E",
    templateUrl: "view/svghelper.html?n=5",
    scope: {
      svgName: "="
    },
    link: function(scope, element, attr) {}
  };
});
