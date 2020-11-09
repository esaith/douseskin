angular.module("douse").directive("svgHelper", function () {
  return {
    restrict: "E",
    templateUrl: "view/svghelper.html?n=1",
    scope: {
      svgName: "="
    },
    link: function (scope, element, attr) { }
  };
});
