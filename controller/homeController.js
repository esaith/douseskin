angular.module("douse", ['ngTouch', 'ngSanitize']);

angular.module("douse").controller("homeController", ['$scope', '$sce', '$document',
    function ($scope, $sce, $document) {
        $scope.isMenuOpen = false;
        $scope.showBackToTopButton = false;

        $scope.toggleMenu = function () {
            $scope.isMenuOpen = !$scope.isMenuOpen;
            $scope.selectedTab = "about";
        };

        $scope.selectTab = function (tab) {
            $scope.selectedTab = tab;
        };

        $scope.specialServices = [
            {
                src: "special",
                service: $sce.trustAsHtml("1 Hour Custom Facial: <span class='strike'>$52</span> $20"),
                description: ["Take advantage of this opening special to pamper yourself!"]
            }
        ];

        $scope.skinCareServices = [
            {
                src: "facial2",
                service: "1 Hour Custom Facial: $52",
                description: [
                    "This facial treats all skin types to reveal a brighter & clearer complexion.",
                    "Includes",
                    "double cleanse | exfoliation | extractions | massage | masque | hydration | spf | steam | hot towels | oscillating brush"
                ]
            }, {
                src: "facial",
                service: "1 Hour Ultrasonic Facial: $59",
                description: [
                    "High frequency sonic waves loosen dead skin cells. This allows for deep penetration of serums for cell turnover and best skincare effectiveness.",
                    "Includes",
                    "double cleanse | exfoliation | extractions | massage | masque | hydration | spf | steam | hot towels | oscillating brush | ultrasonic cleanser"
                ]
            }, {
                src: "backfacial",
                service: "1 Hour Back Facial: $66",
                description: [
                    "This facial targets those hard to reach areas revealing a smoother & more hydrated back.",
                    "Includes",
                    "double cleanse | exfoliation | extractions | massage | masque | hydration | spf | steam | hot towels | oscillating brush"
                ]
            },
            {
                src: "minime",
                service: "30 Min Mini Me Facial: $30",
                description: [
                    "A hydrating facial tailored to the little ones 12 years & younger.*",
                    "Includes ",
                    "cleanse | exfoliation | massage | masque | hydration | spf | steam | hot towels | cucumber slices"
                ],
                footer: "* Must be accompanied by an adult."
            }
        ];

        $scope.makeupServices = [
            {
                src: "makeup",
                service: "1 Hour Natural Full Face Makeover: $48",
                description: [
                    "Enhance your natural beauty with this makeover!",
                    "Includes ",
                    "correct & conceal | foundation | brows | soft natural eye | blush & bronze | lip"
                ]
            },
            {
                src: "eventful",
                service: "1.5 Hour Glam Full Face Makeover: $58",
                description: [
                    "Soft glam makeover perfect for any event!",
                    "Includes ",
                    "correct & conceal | foundation | brows | smokey eye | contour & sculpting | blush & bronze | falsies | lip"
                ]
            },
            {
                src: "bride",
                service: "1.5 Hour Bridal Makeover (Trial & Final): $89",
                description: [
                    "A perfect makeover for every bride on her special day, includes both trial & final looks each 1.5 hours long for a total of $89.*",
                    "Includes ",
                    "correct & conceal | foundation | brows | soft glam eye | contour &      | blush & bronze | falsies | lip",
                    "(x2)"
                ],
                footer: "*For makeover at different location additional costs may apply."

            }
        ];

        $scope.packageServices = [
            {
                src: "packages",
                service: "Essential Packages",
                description: [
                    "Beautify Me I",
                    $sce.trustAsHtml("35 Min Custom Facial + 1 Hour Natural Makeover = <span class='strike'>$92</span> $82*"),
                    "Beautify Me II",
                    $sce.trustAsHtml("35 Min Custom Facial + 1.5 Hour Glam natural Makeover = <span class='strike'>$102</span> $92*"),
                ],
                footer: "* All appointments are scheduled same day in consecutive order. They cannot be divided into different days"
            }
        ];

        $scope.toggleDescription = function (service) {
            service.swiped = !service.swiped;
        };

        $scope.backToTop = function() {
            document.body.scrollTop = 0;            
        };

        $document.bind("scroll", function () {
            $scope.$evalAsync(function () {
                $scope.showBackToTopButton = document.body.scrollTop > 200;
            });
        });

    }]);