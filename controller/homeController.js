angular.module("douse", ["ngTouch", "ngSanitize", "ngRoute"]);
angular.module("douse").config(function($routeProvider) {
    $routeProvider
        .when("/about", {
            templateUrl: "view/about.html?n=15",
            controller: "aboutController"
        })
        .when("/magazine", {
            templateUrl: "view/magazine.html?n=15",
            controller: "magazineController"
        })
        .when("/", {
            templateUrl: "view/homeController.html?n=15",
            controller: "homeController"
        })
        .otherwise({
            redirectTo: "/"
        });
});

angular.module("douse").controller("homeController", [
    "$scope",
    "$sce",
    "$document",
    "$timeout",
    "$location",
    function homeController($scope, $sce, $document, $timeout, $location) {
        $scope.isMenuOpen = false;
        $scope.showBackToTopButton = false;

        $scope.goToSection = function() {
            $scope.isMenuOpen = false;

            $timeout(() => {
                window.scrollTo(0, document.body.scrollTop - 90);
            }, 500);
        };

        $scope.toggleMenu = function() {
            $scope.isMenuOpen = !$scope.isMenuOpen;
            $scope.selectedTab = {};
        };

        $scope.openTab = function(tab) {
            if (tab === "about") {
                $location.path("about");
                return;
            }

            if (tab === "magazine") {
                $location.path("magazine");
                return;
            }

            $scope.selectedTab[tab] = !$scope.selectedTab[tab];
            $timeout(() => {
                document.querySelector("#" + tab + "-tab").scrollIntoView(true);
            }, 100);
        };

        $scope.goToLink = function(link) {
            window.location.href = link;
        };

        $scope.toggleDescription = function(service) {
            service.swiped = !service.swiped;
        };

        $scope.backToTop = function() {
            document.body.scrollTop = 0;
        };

        $document.bind("scroll", function() {
            $scope.$evalAsync(function() {
                $scope.showBackToTopButton = document.body.scrollTop > 200;
            });
        });

        $scope.openAddress = function() {
            if (
                /* if we're on iOS, open in Apple Maps */
                navigator.platform.indexOf("iPhone") != -1 ||
                navigator.platform.indexOf("iPad") != -1 ||
                navigator.platform.indexOf("iPod") != -1
            )
                window.open("maps://maps.google.com/maps?daddr=28.0910691,-82.4046954&amp;ll=");
            /* else use Google */ else window.open("https://maps.google.com/maps?daddr=28.0910691,-82.4046954&amp;ll=");
        };

        

        $scope.homelogo = [
            {
                src: "logo",
                service: "",
                descriptions: [
                    { src: "../resources/images/img01.jpg" },
                    { src: "../resources/images/img02.jpg" },
                    { src: "../resources/images/img03.jpg" },
                    { src: "../resources/images/img04.jpg" },
                    { src: "../resources/images/img05.jpg" },
                    { src: "../resources/images/img06.jpg" },
                    { src: "../resources/images/img07.jpg" },
                    { src: "../resources/images/img08.jpg" },
                    { src: "../resources/images/img09.jpg" },
                    { src: "../resources/images/viewmore.mp4" }
                ]
            }
        ];

        $scope.specialServices = [
            {
                src: "special",
                service: $sce.trustAsHtml("<div class='flex wrap'><div class='no-wrap'>January Specials</div>"),
                descriptions: []
            }
        ];

        $scope.skinCareServices = [
            {
                src: "facial2",
                service: "Custom Facials",
                descriptions: [
                    {
                        description: [
                            "35 Minutes Express Facial",
                            "Express facial for those on the go.",
                            "$44",
                            $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                            "double cleanse | exfoliation | express massage | masque | hydration | spf | steam | hot towels | LED light therapy"
                        ]
                    },
                    {
                        description: [
                            "1 Hour Custom Facial",
                            "This facial treats all skin types to reveal a brighter & clearer complexion.",
                            "$52",
                            $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                            "double cleanse | exfoliation | extractions | massage | masque | hydration | spf | steam | hot towels | LED light therapy"
                        ]
                    },
                    {
                        description: [
                            "1.5 Hour Extended Facial",
                            "Extended facial intended for deep relaxation & of course rejuvinated skin!",
                            "$62",
                            $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                            "extended double cleanse | exfoliation | extractions | extended massage | masque | hydration | spf | steam | hot towels | LED light therapy"
                        ]
                    }
                ]
            },
            {
                src: "facial",
                service: "Ultrasonic Facial",
                descriptions: [
                    {
                        description: [
                            "1 Hour",
                            "High frequency sonic waves loosen dead skin cells. This allows for deep penetration of serums for cell turnover and best skincare effectiveness.",
                            "$59",
                            $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                            "double cleanse | exfoliation | extractions | massage | masque | hydration | spf | steam | hot towels | LED light therapy | ultrasonic cleanser"
                        ]
                    }
                ]
            },
            {
                src: "microderm",
                service: "Microdermabrasion",
                descriptions: [
                    {
                        description: [
                            "45 Minutes",
                            "Physical form of exfoliation that uses a diamond crust tip and light suction that grazes against the skin.",
                            "$69",
                            $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                            "double cleanse | microdermabrasion | extractions | hydrating masque | toner | Vitamin C serum | moisturizer | spf | steam | hot & cool towels | LED light therapy"
                        ]
                    }
                ]
            },
            {
                src: "minime",
                service: "Mini Me Facial",
                descriptions: [
                    {
                        description: [
                            "30 Minutes",
                            "A hydrating facial tailored to the little ones 12 years & younger.*",
                            "$30",
                            $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                            "cleanse | exfoliation | express massage | masque | hydration | spf | steam | warm towels | cucumber slices"
                        ],
                        footer: ["* Must be accompanied by an adult."]
                    }
                ]
            }
        ];

        $scope.makeupServices = [
            {
                src: "makeup",
                service: "Natural Full Face Makeover",
                descriptions: [
                    {
                        description: [
                            "1 Hour ",
                            "Enhance your natural beauty with this makeover!",
                            "$48",
                            $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                            "correct & conceal | foundation | brows | soft natural eye | blush & bronze | lip"
                        ],
                        footer: ["*For makeover at different location additional costs may apply."]
                    }
                ]
            },
            {
                src: "eventful",
                service: "Glam Full Face Makeover",
                descriptions: [
                    {
                        description: [
                            "1.5 Hour",
                            "Soft glam makeover perfect for any event!",
                            "$58",
                            $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                            "correct & conceal | foundation | brows | smokey eye | contour & sculpting | blush & bronze | falsies | lip"
                        ],
                        footer: ["*For makeover at different location additional costs may apply."]
                    }
                ]
            },
            {
                src: "bride",
                service: "Bridal Makeover (Trial & Final)",
                descriptions: [
                    {
                        description: [
                            "1.5 Hour",
                            "A perfect makeover for every bride on her special day, includes both trial & final looks each 1.5 hours long for a total of $89.",
                            "$89",
                            $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                            "correct & conceal | foundation | brows | soft glam eye | contour & sculpting | blush & bronze | falsies | lip",
                            "(x2)"
                        ],
                        footer: ["*For makeover at different location additional costs may apply."]
                    }
                ]
            }
        ];

        $scope.packageServices = [
            {
                src: "packages",
                service: "Essential Packages",
                descriptions: [
                    {
                        description: [
                            "Beautify Me I*",
                            "35 Minutes Custom Facial + 1 Hour Natural Makeover",
                            $sce.trustAsHtml("<div class='margin-bottom'><div class='strike'>$92</div> $82</div>"),
                            "Beautify Me II*",
                            "35 Minutes Custom Facial + 1.5 Hour Glam Makeover",
                            $sce.trustAsHtml("<div class='strike'>$102</div> $92")
                        ],
                        footer: [
                            "* May be divided into separate days (within a 10 day period).",
                            "Paid in-full during first service."
                        ]
                    },
                    {
                        description: [
                            "New Me I*",
                            "35 Minutes Custom Facial + 2 Hour Classic Full Set",
                            $sce.trustAsHtml("<div class='margin-bottom'><div class='strike'>$130</div> $116</div>"),
                            "New Me II*",
                            "35 Minutes Custom Facial + 2 Hour Volume/Hybrid Full Set",
                            $sce.trustAsHtml("<div class='strike'>$140</div> $126")
                        ],
                        footer: [
                            "* May be divided into separate days (within a 10 day period).",
                            "Paid in-full during first service."
                        ]
                    },
                    {
                        description: [
                            "Freshen Up I*",
                            "35 Minutes Custom Facial + 1 Hour Classic Fill",
                            $sce.trustAsHtml("<div class='margin-bottom'><div class='strike'>$89</div> $79</div>"),
                            "New Me II*",
                            "35 Minutes Custom Facial + 1 Hour Volume/Hybrid Fill",
                            $sce.trustAsHtml("<div class='strike'>$99</div> $89")
                        ],
                        footer: [
                            "* May be divided into separate days (within a 10 day period).",
                            "Paid in-full during first service."
                        ]
                    },
                    {
                        description: [
                            "The Monarch I*",
                            "2 Hour Classic Fill + 1 Hour Natural Makeover",
                            $sce.trustAsHtml("<div class='margin-bottom'><div class='strike'>$134</div> $120</div>"),
                            "The Monarch II*",
                            "2 Hour Classic Fill + 1.5 Hour Glam Makeover",
                            $sce.trustAsHtml("<div class='strike'>$154</div> $140")
                        ],
                        footer: [
                            "* May be divided into separate days (within a 10 day period).",
                            "Paid in-full during first service."
                        ]
                    },
                    {
                        description: [
                            "Iconic I*",
                            "1 Hour Classic Fill + 1 Hour Natural Makeover",
                            $sce.trustAsHtml("<div class='margin-bottom'><div class='strike'>$93</div> $83</div>"),
                            "Iconic II*",
                            "1 Hour Classic Fill + 1.5 Hour Glam Makeover",
                            $sce.trustAsHtml("<div class='strike'>$113</div> $103")
                        ],
                        footer: [
                            "* May be divided into separate days (within a 10 day period).",
                            "Paid in-full during first service."
                        ]
                    },
                    {
                        description: [
                            "The Works I*",
                            "35 Minutes Custom Facial + 2 Hour Classic Full + 1 Hour Natural Makeover",
                            $sce.trustAsHtml("<div class='margin-bottom'><div class='strike'>$178</div> $160</div>"),
                            "The Works II*",
                            "35 Minutes Custom Facial + 2 Hour Volume/Hybrid Full Set + 1.5 Hour Glam Makeover",
                            $sce.trustAsHtml("<div class='strike'>$198</div> $180")
                        ],
                        footer: [
                            "* May be divided into separate days (within a 10 day period).",
                            "Paid in-full during first service."
                        ]
                    },
                    {
                        description: [
                            "Pamper Me I*",
                            "35 Minutes Custom Facial + 1 Hour Classic Fill + 1 Hour Natural Makeover",
                            $sce.trustAsHtml("<div class='margin-bottom'><div class='strike'>$137</div> $122</div>"),
                            "Pamper Me II*",
                            "35 Minutes Custom Facial + 1 Hour Volume/Hybrid Full Set + 1.5 Hour Glam Makeover",
                            $sce.trustAsHtml("<div class='strike'>$157</div> $142")
                        ],
                        footer: [
                            "* May be divided into separate days (within a 10 day period).",
                            "Paid in-full during first service."
                        ]
                    }
                ]
            }
        ];

        $scope.bodyServices = [
            {
                src: "backfacial",
                service: "Back Facial",
                descriptions: [
                    {
                        description: [
                            "1 Hour",
                            "This facial targets those hard to reach areas revealing a smoother & more hydrated back.",
                            "$66",
                            $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                            "double cleanse | exfoliation | extractions | massage | masque | hydration | spf | steam | hot towels"
                        ]
                    }
                ]
            },
            {
                src: "backmicroderm",
                service: "Back Microdermabrasion",
                descriptions: [
                    {
                        description: [
                            "1 Hour",
                            "Physical form of exfoliation that uses a diamond crust tip and light suction that grazes against the skin.",
                            "$86",
                            $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                            "double cleanse | microdermabrasion | extractions | hydrating masque | toner | Vitamin C serum | moisturizer | spf | steam | hot & cool towels"
                        ]
                    }
                ]
            }
        ];

        $scope.bathSalts = [
            {
                src: "salts",
                service: "Bath Salts",
                descriptions: [
                    {
                        description: [
                            "Lemon Rosemary",
                            "Real dehydrated lemon slices with real stalks of rosemary.",
                            "Infused with essential oils, lemon black tea & alstroemeria petals.",
                            "$10 each"
                        ]
                    }
                ]
            }
        ];

        $scope.lashServices = [
            {
                src: "lashes",
                service: "Classic Lashes",
                descriptions: [
                    {
                        description: [
                            "Full Set 2 Hours $86",
                            $sce.trustAsHtml(
                                "<div class='margin-bottom'>Each healthy individual lash has a lash extension adhered to it creating more defined eyes</div>"
                            ),
                            "1 Hour Fill $45",
                            "Includes removal of grown out extensions & adding lashes to maintain a full set (every 2 - 3 weeks)"
                        ],
                        footer: [
                            "* Schedule a free lash patch test - ideal for 1st time clients scheduled day before full set to ensure smooth application process (20 min)."
                        ]
                    }
                ]
            },
            {
                src: "volumelashes",
                service: "Volume Lashes",
                descriptions: [
                    {
                        description: [
                            "Full Set 2 Hours $96",
                            $sce.trustAsHtml(
                                "<div class='margin-bottom'>Each healthy individual lash has three lash extensions adhered to it creating more striking eyes</div>"
                            ),
                            "1 Hour Fill $55",
                            "Includes removal of grown out extensions & adding lashes to maintain a full set (every 2 - 3 weeks)"
                        ],
                        footer: [
                            "* Schedule a free lash patch test - ideal for 1st time clients scheduled day before full set to ensure smooth application process (20 min)."
                        ]
                    }
                ]
            },
            {
                src: "lashremoval",
                service: "Lash Removal",
                descriptions: [
                    {
                        description: [
                            "Need a clean slate or wanting to take a break from lashes.",
                            "Removal 20 Minutes $12"
                        ]
                    }
                ]
            }
        ];
    }
]);
