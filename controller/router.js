angular.module("douse", ["ngTouch", "ngSanitize", "ngRoute"]);
angular.module("douse").config(function ($routeProvider) {
    $routeProvider
        .when("/about", {
            templateUrl: "view/about.html?n=2",
            controller: "aboutController"
        })
        .when("/magazine", {
            templateUrl: "view/magazine.html?n=2",
            controller: "magazineController"
        })
        .when("/blog", {
            templateUrl: "view/blog.html?n=2",
            controller: "blogController"
        })
        .when("/", {
            templateUrl: "view/homeController.html?n=2",
            controller: "homeController"
        })
        .otherwise({
            redirectTo: "/"
        });
});
