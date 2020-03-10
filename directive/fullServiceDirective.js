(function () {
  angular.module("douse").directive("fullService", ['$window', fullServiceFn]);

  function fullServiceFn($window) {
    return {
      restrict: "E",
      replace: true,
      templateUrl: "view/fullService.html?n=3",
      scope: {
        service: "="
      },
      link: function (scope, element, attr) {
        scope.selectedTypeIndex = 0;

        scope.selectType = function (index) {
          scope.selectedTypeIndex = index;
        };

        scope.close = function () {
          scope.$emit('close-service');
        };


        scope.$watch(
          function () { return scope.service; },
          function () {
            scope.selectedTypeIndex = 0;

            var fullService = document.querySelector('#full-service');
            var parallax = document.querySelectorAll("#type-background"),
              speed = 0.4;
            updateScroll(fullService, parallax, speed);

            fullService.onscroll = function () {
              updateScroll(fullService, parallax, speed);
            };
          }
        );

        function updateScroll(fullService, parallax, speed) {
          [].slice.call(parallax).forEach(function (el, i) {

            var windowYOffset = fullService.scrollTop,
              elBackgrounPos = "center " + (windowYOffset * speed) + "px";

            el.style.backgroundPosition = elBackgrounPos;

          });
        }
      }
    };
  };
})();