(function () {
  angular.module("douse").controller("homeController", ["$scope", "$document", "$timeout", "$location", "services", homeControllerFn]);

  function homeControllerFn($scope, $document, $timeout, $location, services) {
    $scope.isMenuOpen = false;
    $scope.showBackToTopButton = false;
    $scope.showingModal = false;
    $scope.showingHours = false;
    $scope.showingContactMe = false;
    $scope.fullscreenImageSrc = '';
    $scope.business = {};
    $scope.homeLogoService = {};
    $scope.loading = false;
    $scope.selectedCategory = null;
    $scope.selectedService = null;
    $scope.vm = {
      address: [],
      phone: '',
      instagram: '',
      instagramTitle: '',
      facebook: '',
      facebookTitle: ''
    };

    function init() {
      $scope.loading = true;
      services.getServices().then(function (response) {
        $scope.$evalAsync(function () {
          $scope.business = response;
          $scope.loading = false;
          getAddress(response);
        })
      });
    }

    function getAddress(response) {
      if (response.Address) {
        $scope.vm.address.push(response.Address);
      }

      if (response.City && response.State && response.Zip) {
        $scope.vm.address.push(response.City + ", " + response.State + " " + response.Zip);
      }

      $scope.vm.phone = response.Phone;
      $scope.vm.instagram = response.instagram;
      $scope.vm.instagramTitle = response.instagramTitle;
      $scope.vm.facebook = response.facebook;
      $scope.vm.facebookTitle = response.facebookTitle;
      $scope.vm.EmployeeImg = response.EmployeeImg;
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
          break;
        case 'contact':
          $scope.showingContactMe = !$scope.showingContactMe;
          $scope.showingModal = $scope.showingContactMe;
          break;
        default:
          $scope.showingModal = false;
          $scope.showingHours = false;
          $scope.showingContactMe = false;
      }
    }

    $scope.noEventModalClick = function (event) {
      event.stopPropagation();
    }

    $scope.selectCategory = function (category) {
      $scope.selectedCategory = category;
    }

    $scope.closeCategory = function () {
      $scope.selectedCategory = null;
    }

    $scope.toggleService = function (service) {
      if ($scope.selectedService && $scope.selectedService.Id === service.Id) {
        $scope.selectedService = null;
      } else {
        $scope.selectedService = service;
      }
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
        case "about":
          $location.path("about");
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
