(function () {
  angular.module("douse").directive("fullService", ["$window", fullServiceFn]);

  function fullServiceFn($window) {
    return {
      restrict: "E",
      replace: true,
      templateUrl: "view/fullService.html?n=2",
      scope: {
        service: "="
      },
      link: function (scope, element, attr) {
        scope.selectedTypeIndex = 0;

        var startX,
          startY,
          startTime,
          threshold = 50,
          allowedTime = 1000;

        element.bind("touchstart", function (event) {
          startX = event.changedTouches[0].pageX;
          startY = event.changedTouches[0].pageY;
          startTime = new Date().getTime();
        });

        element.bind("touchend", function (event) {
          var elapsedTime = new Date().getTime() - startTime;
          distance = event.changedTouches[0].pageX - startX;
          var swipedRight = elapsedTime <= allowedTime && distance >= threshold;

          var swipedLeft = elapsedTime <= allowedTime && -distance >= threshold;

          if (swipedRight) scope.$emit("slide-fullservice-right");
          if (swipedLeft) scope.$emit("slide-fullservice-left");
        });

        scope.selectType = function (index) {
          scope.selectedTypeIndex = index;
        };

        scope.close = function () {
          scope.$emit("close-service");
        };

        scope.$watch(
          function () {
            return scope.service;
          },
          function () {
            scope.selectedTypeIndex = 0;

            var fullService = document.querySelector(".full-service-content");
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
              elBackgrounPos = "center " + windowYOffset * speed + "px";

            el.style.backgroundPosition = elBackgrounPos;
          });
        }
      }
    };
  }
})();
