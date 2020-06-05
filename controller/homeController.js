(function () {
  angular.module("douse").controller("homeController", ["$scope", "$sce", "$document", "$timeout", "$location", "services", homeControllerFn]);

  function homeControllerFn($scope, $sce, $document, $timeout, $location, services) {
    $scope.isMenuOpen = false;
    $scope.showBackToTopButton = false;
    $scope.showingHours = false;
    $scope.business = null;

    services.getServices().then(function (response) {
      $scope.$evalAsync(function () {
        $scope.business = response;
      })
    });

    $scope.goToSection = function (section) {
      $scope.isMenuOpen = false;

      $timeout(() => {
        window.scrollTo(0, document.body.scrollTop - 90);
      }, 500);
    };

    $scope.showHours = function () {
      $scope.showingHours = !$scope.showingHours;
    };

    $scope.toggleMenu = function () {
      $scope.isMenuOpen = !$scope.isMenuOpen;
      $scope.selectedTab = {};
    };

    $scope.openTab = function (tab) {
      switch (tab) {
        case "about":
          $location.path("about");
          return;
        case "blog":
          $location.path("blog");
          return;
      }

      $scope.selectedTab[tab] = !$scope.selectedTab[tab];
      $timeout(() => {
        var scroll = document.querySelector("#" + tab + "-tab");
        if (scroll) scroll.scrollIntoView(true);
      }, 100);
    };

    $scope.goToLink = function (link) {
      window.location.href = link;
    };

    $scope.backToTop = function () {
      document.body.scrollTop = 0;
    };

    $document.bind("scroll", function () {
      $scope.$evalAsync(function () {
        $scope.showBackToTopButton = document.body.scrollTop > 200;
      });
    });

    $scope.goTo = function (location) {
      switch (location) {
        case "bookNow":
          bookNow();
          break;
        case "address":
          openAddress();
          break;
      }
    };

    $scope.$on("selected-service", function (event, selection) {
      $scope.serviceIndex = selection.serviceIndex;
      $scope.selectedCategory = selection.serviceCategory;
      $scope.showService = true;
      document.body.classList.add("stop-scroll");
    });

    $scope.$on("slide-fullservice-left", function () {
      $scope.$evalAsync(function () {
        if ($scope.selectedCategory.length > $scope.serviceIndex + 1)
          ++$scope.serviceIndex;
      });
    });

    $scope.$on("slide-fullservice-right", function () {
      $scope.$evalAsync(function () {
        if ($scope.serviceIndex > 0) {
          --$scope.serviceIndex;
        } else {
          $scope.close();
        }
      });
    });

    $scope.close = function () {
      $scope.showService = false;
      document.body.classList.remove("stop-scroll");
    };

    $scope.$on("close-service", function () {
      $scope.showService = false;
      document.body.classList.remove("stop-scroll");
    });

    function bookNow() {
      window.location.href =
        "https://square.site/book/Q4W3RC4A64DCN/douse-skin-essentials-tampa-fl";
    }

    function openAddress() {
      if (
        /* if we're on iOS, open in Apple Maps */
        navigator.platform.indexOf("iPhone") != -1 ||
        navigator.platform.indexOf("iPad") != -1 ||
        navigator.platform.indexOf("iPod") != -1
      )
        window.open(
          "maps://maps.google.com/maps?daddr=28.0910691,-82.4046954&amp;ll="
        );
      /* else use Google */ else
        window.open(
          "https://maps.google.com/maps?daddr=28.0910691,-82.4046954&amp;ll="
        );
    }
  }
})();
