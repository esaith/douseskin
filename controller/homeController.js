angular.module("douse", ['ngTouch', 'ngSanitize']);

angular.module("douse").controller("homeController", ['$scope', '$sce', '$document',
    function ($scope, $sce, $document) {
        $scope.isMenuOpen = false;
        $scope.showBackToTopButton = false;

        $scope.closeMenu = function () {
            $scope.isMenuOpen = false;
        }

        $scope.toggleMenu = function () {
            $scope.isMenuOpen = !$scope.isMenuOpen;
            $scope.selectedTab = "about";
        };

        $scope.selectTab = function (tab) {
            $scope.selectedTab = tab;
        };

        $scope.toggleDescription = function (service) {
            service.swiped = !service.swiped;
        };

        $scope.backToTop = function () {
            document.body.scrollTop = 0;
        };

        $document.bind("scroll", function () {
            $scope.$evalAsync(function () {
                $scope.showBackToTopButton = document.body.scrollTop > 200;
            });
        });

        $scope.specialServices = [
            {
                src: "special",
                service: $sce.trustAsHtml("1 Hour Custom Facial: <div class='strike'>$52</div> $20"),
                descriptions:
                    [
                        {
                            description: ["Take advantage of this opening special to pamper yourself!"]
                        }
                    ]
            }
        ];

        $scope.skinCareServices = [
            {
                src: "cucumber",
                service: "35 Min Custom Facial: $44",
                descriptions:
                    [
                        {
                            description: [
                                "Express facial for those on the go.",
                                $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                                "double cleanse | exfoliation | express massage | masque | hydration | spf | steam | hot towels | oscillating brush"
                            ]
                        }
                    ]
            },
            {
                src: "facial2",
                service: "1 Hour Custom Facial: $52",
                descriptions:
                    [
                        {
                            description: [
                                "This facial treats all skin types to reveal a brighter & clearer complexion.",
                                $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                                "double cleanse | exfoliation | extractions | massage | masque | hydration | spf | steam | hot towels | oscillating brush"
                            ]
                        }
                    ]
            },
            {
                src: "expressfacial",
                service: "1.5 Hour Custom Facial: $62",
                descriptions:
                    [
                        {
                            description: [
                                "Extended facial intended for deep relaxation & of course rejuvinated skin!",
                                $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                                "expended deep cleanse | exfoliation | extractions | extended massage | masque | hydration | spf | steam | hot towels | oscillating brush"
                            ]
                        }
                    ]
            },
            {
                src: "facial",
                service: "1 Hour Ultrasonic Facial: $59",
                descriptions:
                    [
                        {
                            description: [
                                "High frequency sonic waves loosen dead skin cells. This allows for deep penetration of serums for cell turnover and best skincare effectiveness.",
                                $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                                "double cleanse | exfoliation | extractions | massage | masque | hydration | spf | steam | hot towels | oscillating brush | ultrasonic cleanser"
                            ]
                        }
                    ]
            },
            {
                src: "minime",
                service: "30 Min Mini Me Facial: $30",
                descriptions:
                    [
                        {
                            description: [
                                "A hydrating facial tailored to the little ones 12 years & younger.*",
                                $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                                "cleanse | exfoliation | express massage | masque | hydration | spf | steam | hot towels | cucumber slices"
                            ],
                            footer: ["* Must be accompanied by an adult."]
                        }
                    ]
            }
        ];

        $scope.makeupServices = [
            {
                src: "makeup",
                service: "1 Hour Natural Full Face Makeover: $48",
                descriptions:
                    [
                        {
                            description: [
                                "Enhance your natural beauty with this makeover!",
                                $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                                "correct & conceal | foundation | brows | soft natural eye | blush & bronze | lip"
                            ],
                            footer: ["*For makeover at different location additional costs may apply."]
                        },
                    ]
            },
            {
                src: "eventful",
                service: "1.5 Hour Glam Full Face Makeover: $58",
                descriptions:
                    [
                        {
                            description: [
                                "Soft glam makeover perfect for any event!",
                                $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                                "correct & conceal | foundation | brows | smokey eye | contour & sculpting | blush & bronze | falsies | lip"
                            ],
                            footer: ["*For makeover at different location additional costs may apply."]
                        },
                    ]
            },
            {
                src: "bride",
                service: "1.5 Hour Bridal Makeover (Trial & Final): $89",
                descriptions:
                    [
                        {
                            description: [
                                "A perfect makeover for every bride on her special day, includes both trial & final looks each 1.5 hours long for a total of $89.",
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
                descriptions:
                    [
                        {
                            description: [
                                "Beautify Me I*",
                                "35 Min Custom Facial + 1 Hour Natural Makeover",
                                $sce.trustAsHtml("<div class='margin-bottom'><div class='strike'>$92</div> $82</div>"),
                                "Beautify Me II*",
                                "35 Min Custom Facial + 1.5 Hour Glam Makeover",
                                $sce.trustAsHtml("<div class='strike'>$102</div> $92")
                            ],
                            footer: [
                                "* All appointments are scheduled same day in consecutive order.",
                                "They cannot be divided into different days."
                            ]
                        },
                        {
                            description: [
                                "New Me I*",
                                "35 Min Custom Facial + 2 Hour Classic Full Set",
                                $sce.trustAsHtml("<div class='margin-bottom'><div class='strike'>$130</div> $116</div>"),
                                "New Me II*",
                                "35 Min Custom Facial + 2 Hour Volume/Hybrid Full Set",
                                $sce.trustAsHtml("<div class='strike'>$140</div> $126")
                            ],
                            footer: ["* All appointments are scheduled same day in consecutive order.", "They cannot be divided into different days."]
                        },
                        {
                            description: [
                                "Freshen Up I*",
                                "35 Min Custom Facial + 1 Hour Classic Fill",
                                $sce.trustAsHtml("<div class='margin-bottom'><div class='strike'>$89</div> $79</div>"),
                                "New Me II*",
                                "35 Min Custom Facial + 1 Hour Volume/Hybrid Fill",
                                $sce.trustAsHtml("<div class='strike'>$99</div> $89")
                            ],
                            footer: ["* All appointments are scheduled same day in consecutive order.", "They cannot be divided into different days."]
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
                            footer: ["* All appointments are scheduled same day in consecutive order.", "They cannot be divided into different days."]
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
                            footer: ["* All appointments are scheduled same day in consecutive order.", "They cannot be divided into different days."]
                        },
                        {
                            description: [
                                "The Works I*",
                                "35 Min Custom Facial + 2 Hour Classic Full + 1 Hour Natural Makeover",
                                $sce.trustAsHtml("<div class='margin-bottom'><div class='strike'>$178</div> $160</div>"),
                                "The Works II*",
                                "35 Min Custom Facial + 2 Hour Volume/Hybrid Full Set + 1.5 Hour Glam Makeover",
                                $sce.trustAsHtml("<div class='strike'>$198</div> $180")
                            ],
                            footer: ["* All appointments are scheduled same day in consecutive order.", "They cannot be divided into different days."]
                        },
                        {
                            description: [
                                "Pamper Me I*",
                                "35 Min Custom Facial + 1 Hour Classic Fill + 1 Hour Natural Makeover",
                                $sce.trustAsHtml("<div class='margin-bottom'><div class='strike'>$137</div> $122</div>"),
                                "Pamper Me II*",
                                "35 Min Custom Facial + 1 Hour Volume/Hybrid Full Set + 1.5 Hour Glam Makeover",
                                $sce.trustAsHtml("<div class='strike'>$157</div> $142")
                            ],
                            footer: ["* All appointments are scheduled same day in consecutive order.", "They cannot be divided into different days."]
                        }
                    ]
            }
        ];

        $scope.bodyServices = [
            {
                src: "backfacial",
                service: "1 Hour Back Facial: $66",
                descriptions:
                    [
                        {
                            description: [
                                "This facial targets those hard to reach areas revealing a smoother & more hydrated back.",
                                $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                                "double cleanse | exfoliation | extractions | massage | masque | hydration | spf | steam | hot towels | oscillating brush"
                            ]
                        }
                    ]
            }
        ];

        $scope.lashServices = [
            {
                src: "lashes",
                service: "Classic Lashes",
                descriptions:
                    [
                        {
                            description: [
                                "Full Set 2 Hours $86",
                                $sce.trustAsHtml("<div class='margin-bottom'>Each healthy individual lash has a lash extension adhered to it creating more defined eyes</div>"),
                                "1 Hour Fill $45",
                                "Includes removal of grown out extensions & adding lashes to maintain a full set (every 2 - 3 weeks)",
                            ]
                        }
                    ]
            },
            {
                src: "lashremoval",
                service: "Lash Removal",
                descriptions:
                    [
                        {
                            description: [
                                "Need a clean slate or wanting to take a break from lashes.",
                                "Removal 20 Min $12"
                            ]
                        }
                    ]
            }
        ];
    }]);