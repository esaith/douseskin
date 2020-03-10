angular.module("douse").controller("homeController", [
    "$scope",
    "$sce",
    "$document",
    "$timeout",
    "$location",
    function homeController($scope, $sce, $document, $timeout, $location) {
        $scope.isMenuOpen = false;
        $scope.showBackToTopButton = false;
        $scope.showingHours = false;

        $scope.goToSection = function (section) {
            $scope.isMenuOpen = false;

            if (section !== "affiliates") {
                $timeout(() => {
                    window.scrollTo(0, document.body.scrollTop - 90);
                }, 500);
            }
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
                case 'about':
                    $location.path("about");
                    return;
                case 'blog':
                    $location.path('blog');
                    return;
            }

            $scope.selectedTab[tab] = !$scope.selectedTab[tab];
            $timeout(() => {
                var scroll = document.querySelector("#" + tab + "-tab")
                if (scroll)
                    scroll.scrollIntoView(true);
            }, 100);
        };

        $scope.goToLink = function (link) {
            window.location.href = link;
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

        $scope.goTo = function (location) {
            switch (location) {
                case 'bookNow':
                    bookNow();
                    break;
                case 'address':
                    openAddress();
                    break;
            }
        };

        $scope.$on('selected-service', function (event, service) {
            $scope.selectedService = service;
            $scope.showService = true;
            document.body.classList.add('stop-scroll');
        });

        $scope.$on('close-service', function () {
            $scope.showService = false;
            document.body.classList.remove('stop-scroll');
        });

        function bookNow() {
            window.location.href = "https://square.site/book/Q4W3RC4A64DCN/douse-skin-essentials-tampa-fl";
        }

        function openAddress() {
            if (
                /* if we're on iOS, open in Apple Maps */
                navigator.platform.indexOf("iPhone") != -1 ||
                navigator.platform.indexOf("iPad") != -1 ||
                navigator.platform.indexOf("iPod") != -1
            )
                window.open("maps://maps.google.com/maps?daddr=28.0910691,-82.4046954&amp;ll=");
            /* else use Google */ else window.open("https://maps.google.com/maps?daddr=28.0910691,-82.4046954&amp;ll=");
        }

        $scope.homelogo = [
            {
                src: "logo.jpg",
                title: "",
                types: [
                    { src: "resources/images/img01.jpg" },
                    { src: "resources/images/img02.jpg" },
                    { src: "resources/images/img03.jpg" },
                    { src: "resources/images/img04.jpg" },
                    { src: "resources/images/img05.jpg" },
                    { src: "resources/images/img06.jpg" },
                    { src: "resources/images/img07.jpg" },
                    { src: "resources/images/img08.jpg" },
                    { src: "resources/images/img09.jpg" },
                    {
                        src: "resources/images/viewmore.mp4",
                        type: "video"
                    }
                ]
            }
        ];

        $scope.specialServices = [
            {
                src: "special.jpg",
                type: "",
                title: "",
                types: []
            }
        ];

        $scope.skinCareServices = [
            {
                src: "facial2.jpg",
                title: "Custom Facials",
                mainDescription: [
                    "Designed to keep your skin in mind but also allow your mind & body to relax! Deeply cleanse your pores & ridding of dead skin to reveal a brighter & clearer complexion. Whether you have acneic, oily, dry, sensitive or mature skin, we have you covered! We have curated facials for those who are on the go as well as those who want to stay longer to enjoy their spa day! These custom facials are perfect for everyone. Organic skincare is used so keep in mind if you have any allergies to fruits or nuts.",
                    "All custom facials include hot towels, double steamer to target both sides of your face and LED light therapy."
                ],
                types: [
                    {
                        title: '35 Min',
                        description: [
                            "35 Minute Express Facial",
                            "Express facial for those on the go.",
                            "$44",
                            $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                            "double cleanse | exfoliation | masque | hydration | spf | double steam | hot towels | 5 - 10 min LED light therapy"
                        ]
                    },
                    {
                        title: "1 Hr",
                        description: [
                            "1 Hour Custom Facial",
                            "This facial treats all skin types to reveal a brighter & clearer complexion.",
                            "$52",
                            $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                            "double cleanse | exfoliation | extractions | massage | masque | hydration | spf | double steam | hot towels | 10 - 15 min LED light therapy"
                        ]
                    },
                    {
                        title: '1.5 Hr',
                        description: [
                            "1.5 Hour Extended Facial",
                            "Extended facial intended for deep relaxation & of course rejuvinated skin!",
                            "$62",
                            $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                            "extended double cleanse | exfoliation | extractions | extended massage | masque | hydration | spf | double steam | hot towels | 15 - 20 min LED light therapy"
                        ],
                        footer: ["Disclaimer: Falling into deep sleep may occur!"]
                    }
                ]
            },
            {
                src: "facial.jpg",
                title: "Ultrasonic Facial",
                mainDescription: [
                    "High frequency sonic waves loosen dead skin cells which allows for deep penetration of organic skincare products. It can be used to remove dead skin & sebum while exfoliating. It may also be used to get the most out of your skincare products by pushing essential skincare ingredients beneath the surface of the skin.",
                    "This treatment is noninvasive but when used has a high pitch noise, which is normal. Anyone with congested pores, excessive amount of oil, blackheads, whiteheads, flaky skin, dull skin tone or uneven skin tone would benefit from an ultrasonic facial treatment. It can even be used to firm and lift!",
                    "All organic skincare is used to customize skincare needs for double cleansing, exfoliation, extractions, massage, masque, toner, serum, moisturizer and sunblock. Hot towels, double steamers and LED light therapy are used as well. Treatment covers the entire neck and face. Additional $12 to cover chest area as well (+ 15 mins).",
                    "Those who would not be good candidates are pregnant women, those with severe heart disease, mental implants, a pacemaker and medically prescribed exfoliants."
                ],
                types: [
                    {
                        title: "1 Hr",
                        description: [
                            "1 Hour",
                            "High frequency sonic waves loosen dead skin cells. This allows for deep penetration of serums for faster cell turnover and overall best skincare effectiveness.",
                            "$59",
                            $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                            "double cleanse | exfoliation | extractions | massage | masque | hydration | spf | double steam | hot towels | 10 - 15 min LED light therapy | ultrasonic cleanser"
                        ]
                    }
                ]
            },
            {
                src: "microderm.jpg",
                title: "Microdermabrasion",
                mainDescription: [
                    "A noninvasive treatment used as a physical exfoliation to remove dead skin. A light to moderate suction is used along with a diamond crusted tip to physically exfoliating & removing dead skin. The feeling of having a microdermabrasion performed does not hurt, rather the feeling is as if a cat were licking you. The benefits of this treatment is not only to reveal more radiant skin but to help reduce the appearance of damage caused by the sun. Hyperpigmentation (dark spots) and wrinkles greatly diminish over continuous treatment. The more treatments received, a more coarse diamond tip may be used - while keeping the client's comfort in mind. Clients with open sores or pustules (pimples) are not recommended this service as it can great discomfort.",
                    "Included in your treatment is organic skincare used to double cleanse, polish the skin, perform extractions and enjoy a soothing massage. Organic skincare is also used to hydrate the skin with a masque, calming toner, vitamin c serum, moisturizer as well as sunscreen.",
                    "Steam from two steamers on either side of you not only allow your pores to open but to also provide muscle relaxation. Hot towels are also provided, as it soothes the skin but also removes product.",
                    "LED Light Therapy is included for Microdermabrasion Facial treatments only (excludes the back)"
                ],
                types: [
                    {
                        title: "1.5 Hr",
                        description: [
                            "1.5 Hour",
                            "Physical form of exfoliation that uses a diamond crust tip and light suction that grazes against the skin.",
                            "$69",
                            $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                            "double cleanse | microdermabrasion | exfoliation | extractions | hydrating masque | toner | Vitamin C serum | moisturizer | spf | double steam | hot & cool towels | 15 - 20 min LED light therapy"
                        ]
                    }
                ]
            },
            {
                src: "dermaplaning.jpg",
                title: "Dermaplaning",
                mainDescription: [
                    "Dermaplaning uses a medical grade scalpel to scrape the surface of the skin. It is a form of exfoliation and will greatly help lighten hyperpigmentation as well as diminish fine lines. By grazing the surface of the skin with a scalpel, vellus hair is removed, also known as peach fuzz! With skin that is free from dead skin and vellus hair, skincare application can penetrate deeper into the skin. The majority of products used will actually be able to be used, instead of getting trapped at the surface. This means your money of quality products is being put to good use!",

                    "Eventhough this is a low risk treatment some side effects can include some redness and even some whiteheads. It is important not to touch your face after the procedure.",

                    "This is a perfect treatment for anyone looking for exfoliation, good use of product absorption, baby smooth skin and even for those attenting an event and having perfect makeup application! On the other hand, anyone with open lesions, inflamed acne, uncontrolled diabetes, on Accutane (or past 6 months) or retinol for the past week cannot have this procedure."
                ],
                types: [
                    {
                        title: "1 Hr",
                        description: [
                            "1 Hour",
                            "$69",
                            $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                            "double cleanse | povidone-iodine | hydrating masque | calming toner | Vitamin C serum | hydrating moisturizer | spf"
                        ]
                    }
                ]
            },
            {
                src: "minime.jpg",
                title: "Mini Me Facial",
                mainDescription: [
                    "Designed to give your little one - 12 years old and younger - a spa day! Pamper sesh includes a cleanse, exfoliation, hydrating masque, mist, hydrating moisturizer and sunblock using organic skincare. Steam and warm towels are included. (LED Light therapy not included)."
                ],
                types: [
                    {
                        title: "30 Min",
                        description: [
                            "30 Minutes",
                            "A hydrating facial tailored to the little ones 12 years & younger.*",
                            "$30",
                            $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                            "cleanse | exfoliation | hydrating masque | hydration | spf | double steam | warm towels | cucumber slices"
                        ],
                        footer: [
                            "* Must be accompanied by adult for the duration of service. Does not include LED light therapy."
                        ]
                    }
                ]
            }
        ];

        $scope.makeupServices = [
            {
                src: "makeup.jpg",
                title: "Natural Full Face Makeover",
                mainDescription: [
                    "This is a great makeover for anyone looking to get slightly dressed up, normally never wears makeup and even for a first date. A natural makeover is meant to enhance your beauty in a delicate way. We will start off by prepping the skin with a moisturizer then a primer to targeted areas - depending on your skin type. We advance to correcting slight imperfections and concealing them to get that even skin tone. Afterwards, we  add foundation to make sure you're flawless all day! Adding definition to the eyes and brows create a more captivating appeal. By adding a little color to the cheeks with some blush and bronzer we give life to the flawless canvas."
                ],
                types: [
                    {
                        title: "1 Hr",
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
                src: "eventful.jpg",
                title: "Glam Full Face Makeover",
                mainDescription: [
                    "Are you headed to an event such as prom, graduation, some type of shower, wedding or just want to be pampered? Then this makeover is for you! This makeover is meant for you to stand out in the crowd. I always prep the skin with a moisturizer and primer suited to your skin's needs. Any slight imperfections will be corrected and concealed to mute out discoloration. I mix your foundation to your shade and set the face with powder. We create a defined brow and a smokey or halo eye with a soft lip to balance the intensity. Let's not forget about sculpting those cheek bones with some contour and a pinch of color. And to finish the look, falsies!"
                ],
                types: [
                    {
                        title: "1.5 Hour",
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
                src: "bride.jpg",
                title: "Bridal Makeover (Trial & Final)",
                mainDescription: [
                    "Firstly, congratulations on getting engaged! My bridal makeover consists of two separate sessions, the trial run and the wedding day. We know you fall in love with your look.  We will create a picture perfect look that will look timeless. It is essential to prep the skin in order to radiate in every lighting. To get a flawless camera ready look, we correct and conceal especially under the eyes - from long nights of planning. By creating a smoother canvas, foundation applies effortlessly. Natural eyes are a timeless look, we can always glam up the eyes with some falsies. The addition of brows creates structure for the eyes captured in every photo. Contour, bronzer, blush, highlight & lips complete the look."
                ],
                types: [
                    {
                        title: "1.5 Hr",
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

        $scope.bodyServices = [
            {
                src: "backfacial.jpg",
                title: "Back Facial",
                mainDescription: [
                    "Ever have trouble trying to lather body gel onto your back & getting each of the hard to reach areas? The act in itself seems to be meant for acrobats! Whether you have dry, sensitive, oily or acneic skin, we can tailor this back facial while using organic skincare.",

                    "Included in the service is a double cleanse, exfoliation, extractions, massage, masque, toner, moisturizer and sunblock. We use double steamers and hot towels for relaxation. (LED light therapy not included)."
                ],
                types: [
                    {
                        title: "1 Hr",
                        description: [
                            "1 Hour",
                            "This facial targets those hard to reach areas revealing a smoother & more hydrated back.",
                            "$66",
                            $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                            "double cleanse | exfoliation | extractions | massage | masque | hydration | spf | double steam | hot towels"
                        ]
                    }
                ]
            },
            {
                src: "backmicroderm.jpg",
                title: "Back Microdermabrasion",
                mainDescription: [
                    "The best of two worlds, combining a back facial with a microdermabrasion! This treatment is great to exfoliate your back. Anyone with dry skin, hyperpigmentation or scars would be a perfect candidate. Just like a microdermabrasion on the face, the back will benefit from all the richness of the skincare as well as the treatment performed. Discoloration, wrinkles & dry skin will greatly diminish with continuous treatment.",

                    "Included in your treatment is organic skincare used to double cleanse, polish the skin, massage, masque, toner, moisturizer & sunblock.",

                    "* Does not include LED light therapy",

                    "Hot towels and double steamers are used in conjunction with all the products. Although perfect treatment for most people, those with open sores or pustules (pimples) should avoid treatment until healed. May lead to great discomfort."
                ],
                types: [
                    {
                        title: "1 Hr",
                        description: [
                            "1 Hour",
                            "Physical form of exfoliation that uses a diamond crust tip and light suction that grazes against the skin.",
                            "$86",
                            $sce.trustAsHtml("<div class='padding'>Includes</div>"),
                            "double cleanse | microdermabrasion | extractions | hydrating masque | toner | Vitamin C serum | moisturizer | spf | double steam | hot & cool towels"
                        ]
                    }
                ]
            }
        ];

        $scope.bathSalts = [
            {
                src: "salts.jpg",
                title: "Bath Salts",
                types: [
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
                src: "complementarylashes.jpg",
                title: "Complementary",
                types: [
                    {
                        description: [
                            "Everything listed in flyer may not apply to everyone on every lash session. Additional time is given to dedicate the full duration of your service (Two hours full set. One hour fill)."
                        ]
                    }
                ]
            },
            {
                src: "lashes.jpg",
                title: "Classic Lashes",
                mainDescription: [
                    "Instantly get those defined lashes that brighten up your eyes! With versatile lashes it is easy to go from natural to strikingly dramatic. Perfect for everyday & for special occasions!  Choose from a smitten cat-eye creating an elongated eye, great for those who already have beautiful large eyes or enjoy a winged look. Don't have such large eyes? Want to create an effortlessly larger gaze? A charming doe-eyed look creates eyes that are more awake with longer lashes in the center.",

                    "Do make sure you have removed any makeup to have a smoother service.",

                    "Each service starts out with a consultation, makeup removal (just incase) and gentle cleansing of your lashes! Also, all fills should be scheduled 3-5 weeks after service when you see 50% of extensions left.",

                    "All first time clients receive a manual guide on how to take care of lashes as well as a mini aftercare kit to make sure lashes are being washed - no excuses!",

                    "Perfect for anyone who has never tried lash extensions before or enjoys looking effortlessly natural! Each healthy natural lash has an extension adhered to it. Each look is customized to everyone's eye shape and desire."
                ],
                types: [
                    {
                        title: "1 Hr Fill",
                        description: [
                            "1 Hour Fill $45",
                            "Includes removal of grown out extensions & adding lashes to maintain a full set (every 3 - 5 weeks. When 50% of lash extensions are visible)"
                        ],
                        footer: []
                    },
                    {
                        title: "2 Hr Full",
                        description: [
                            "Full Set 2 Hours $86",
                            $sce.trustAsHtml(
                                "<div class='margin-bottom'>Each healthy individual lash has a lash extension adhered to it creating more defined eyes</div>"
                            )
                        ],
                        footer: [
                            "* Schedule a free lash patch test - ideal for 1st time clients scheduled day before full set to ensure smooth application process (20 min)."
                        ]
                    }
                ]
            },
            {
                src: "volumelashes.jpg",
                title: "3D Volume Lashes",
                mainDescription: [
                    "Wanting to spice things up & have more dramatic lashes? Then volume lashes will get you that look! Instead of one extension, now we are adhering three extensions to one healthy natural lash. You can either add volume lases to your classic look (hybrid lashes) or start a fresh new look of only volumes! Volumes give a more flirty eye that is intensified."
                ],
                types: [
                    {
                        title: "1 Hr Fill",
                        description: [
                            "1 Hour Fill $55",
                            "Includes removal of grown out extensions & adding lashes to maintain a full set (every 3 - 5 weeks. When 50% of lash extensions are visible)"
                        ],
                        footer: []
                    },
                    {
                        title: "2 Hr Full",
                        description: [
                            "Full Set 2 Hours $96",
                            $sce.trustAsHtml(
                                "<div class='margin-bottom'>Each healthy individual lash has three lash extensions adhered to it creating more striking eyes</div>"
                            )
                        ],
                        footer: [
                            "* Schedule a free lash patch test - ideal for 1st time clients scheduled day before full set to ensure smooth application process (20 min)."
                        ]
                    }
                ]
            },
            {
                src: "lashremoval.jpg",
                title: "Lash Removal",
                mainDescription: [
                    "Wanting to take a break from lashes or simply want to start fresh? Don't hesitate to get a cream based lash removal - great for those with sensitive eyes! Removal time depends on how many extensions are left & how recent the extensions were adhered."
                ],
                types: [
                    {
                        title: "20-40 Min",
                        description: [
                            $sce.trustAsHtml("<div class='margin-bottom-small'>Removal 20 - 40 Minutes $12</div>"),
                            "Wanting to take a break from lashes or simply want to start fresh?",
                            "Don't hesitate to get a cream based lash removal - great for those with sensitive eyes!",
                            "Removal time depends on how many extenions are left & how recent the extensions were adhered."
                        ]
                    }
                ]
            }
        ];

        $scope.lashLiftServices = [
            {
                src: "lash-lift.jpg",
                title: "Lash Lifts",
                mainDescription: [
                    "Love your natural lashes but wish they could look curled & lifted? Introducing the Lash Lift! This noninvasive service allows your natural lashes to appear curled, lifted & longer!",

                    "All services start with a gentle cleanse on your lashes & eyelids. Once the lift has been completed you can schedule your next lift appointment within 4-6 weeks - typical retention time."
                ],
                types: [
                    {
                        title: "1 Hr Lift",
                        description: [
                            "Lash Lift 1 Hour $72",
                            $sce.trustAsHtml(
                                "<div class='margin-bottom'>Natural lashes are curled to create longer & fuller looking lashes</div>"
                            )
                        ],
                        footer: ["Comes with a micellar water cleaning for those with makeup on and a lash bath."]
                    },
                    {
                        title: "1.5 Hr Lift & Tint",
                        description: [
                            "Lash Lift & Tint 1.5 Hour $82",
                            "Add definition & depth to your naturally curled lashes with True Black lash tint"
                        ],
                        footer: ["Comes with a micellar water cleaning for those with makeup on and a lash bath."]
                    }
                ]
            },
            {
                src: "lash-lift-touchup.jpg",
                title: "Lash Tint Touch-Up",
                mainDescription: [
                    "Perfect to thicken natural lashes especially those with lighter colored lashes. Allows eyes to appear striking with just a pop of colored tint."
                ],
                types: [
                    {
                        title: "30 min",
                        description: [
                            "Lash Tint Touch-Up",
                            "30 Mins $13",
                            "Perfect to thicken natural lashes especially those with lighter colored lashes. Allows eyes to appear striking with just a pop of colored tint."
                        ],
                        footer: ["Comes with a micellar water cleaning for those with makeup on and a lash bath."]
                    }
                ]
            }
        ];

        $scope.waxServices = [
            {
                src: "wax.jpg",
                title: "Waxing",
                mainDescription: [
                    "Facial waxing includes the brows, upper lip, chin and side burns. Honey & chamomile soft wax is used (with non woven cloth strip). Its natural formulation has a low melting point to help reduce redness and overall discomfort. It is also cruelty free, PETA approved, free from parabens, SLS, SLES & more.",

                    "Anyone with irritated or inflamed skin should not be waxed as well as any areas being treated with AHAs or Retin-A."
                ],
                types: [
                    {
                        title: "Brow",
                        description: [
                            "Brow wax $12 - 25 minutes",
                            "Brow wax plus henna dye $22 - 35 minutes",
                            $sce.trustAsHtml(
                                "<div class='margin-bottom'>Brow henna dye $16 - 20 minutes</div>"
                            ),
                            $sce.trustAsHtml(
                                "<div class='margin-bottom'>Shape and clean up those brows and add henna dye for definition and one less step in your makeup routine!</div>"
                            )
                        ],
                        footer: ["Henna dye lasts up to 6 weeks!"]
                    },
                    {
                        title: "Upper Lip",
                        description: [
                            "Upper lip wax $10 - 20 minutes"
                        ]
                    },
                    {
                        title: "Chin",
                        description: [
                            "Chin wax $10 - 20 minutes",
                        ]
                    },
                    {
                        title: "Side Burns",
                        description: [
                            "Side burns $12 - 20 minutes"
                        ]
                    },
                    {
                        title: "Full Face",
                        description: [
                            "Full face",
                            "Brows, upper lip, chin, side burns",
                            $sce.trustAsHtml(
                                "<div class='margin-bottom'>$39 - 1 hour</div>"
                            ),
                            "Full face + brow henna dye $49 - 1 hour"
                        ],
                        footer: ["Henna dye lasts up to 6 weeks!"]
                    }
                ]
            }
        ];
    }
]);
