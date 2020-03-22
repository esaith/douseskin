angular.module("douse", ["ngTouch", "ngSanitize", "ngRoute"]);
angular.module("douse").config(function($routeProvider) {
  $routeProvider
    .when("/about", {
      templateUrl: "view/about.html?n=5",
      controller: "aboutController"
    })
    .when("/blog", {
      templateUrl: "view/blog.html?n=5",
      controller: "blogController"
    })
    .when("/", {
      templateUrl: "view/homeController.html?n=5",
      controller: "homeController"
    })
    .otherwise({
      redirectTo: "/"
    });
});
