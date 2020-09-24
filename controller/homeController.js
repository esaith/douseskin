(function () {
  angular.module("douse").controller("homeController", ["$scope", "$document", "$timeout", "$location", "services", homeControllerFn]);

  function homeControllerFn($scope, $document, $timeout, $location, services) {
    $scope.isMenuOpen = false;
    $scope.showBackToTopButton = false;
    $scope.showingModal = false;
    $scope.showingHours = false;
    $scope.showingFullscreenImage = false;
    $scope.fullscreenImageSrc = '';
    $scope.business = {};
    $scope.homeLogoService = {};
    $scope.loading = false;

    function init() {
      $scope.loading = true;
      services.getServices().then(function (response) {
        $scope.$evalAsync(function () {
          $scope.business = response;
          $scope.loading = false;
        })
      });
    }

    $scope.goToSection = function (section) {
      $scope.isMenuOpen = false;

      $timeout(() => {
        window.scrollTo(0, document.body.scrollTop - 90);
      }, 500);
    };

    $scope.toggleModal = function (type) {
      switch (type) {
        case 'hours':
          $scope.showingHours = !$scope.showingHours;
          $scope.showingModal = $scope.showingHours;
          $scope.showingFullscreenImage = false;
          break;
        case 'fullscreenImage':
          $scope.showingFullscreenImage = !$scope.showingFullscreenImage;
          $scope.showingModal = $scope.showingFullscreenImage;
          $scope.showingHours = false;
          break;
        default:
          $scope.showingFullscreenImage = false;
          $scope.showingModal = false;
          $scope.showingHours = false;
      }
    }

    $scope.openFullscreenImage = function (section) {
      $scope.fullscreenImageSrc = section.imgSrc;
      $scope.toggleModal('fullscreenImage');
    }

    $scope.imageFn = function (event) {
      event.stopPropagation();
    }

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
      if ($scope.business && $scope.business.bookNow) {
        window.location.href = $scope.business.bookNow;
      }
    }

    function openAddress() {
      if (
        /* if we're on iOS, open in Apple Maps */
        (navigator.platform.indexOf("iPhone") != -1 ||
          navigator.platform.indexOf("iPad") != -1 ||
          navigator.platform.indexOf("iPod") != -1)
        && $scope.business.iosMap
      ) {
        window.open($scope.business.iosMap);
      } else if ($scope.business.googleMap) {
        /* else use Google */
        window.open($scope.business.googleMap);
      }
    }

    init();
  }
})();
