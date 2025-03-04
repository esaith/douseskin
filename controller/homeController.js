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
            type: "video",
          },
        ],
      },
    ];

    $scope.specialServices = [
      {
        src: "special.jpg",
        type: "",
        title: "",
        types: [],
      },
    ];

    $scope.skinCareServices = [
      {
        src: "facial2.jpg",
        title: "Facials",
        mainDescription: [
          "Pamper yourself in a spa like setting while using organic skincare to nurture the skin. Select from one of these curated facials!",
        ],
        types: [
          {
            title: "Brightening",
            description: [
              "Brightening Facial",
              $sce.trustAsHtml(
                "<div class='description-padding'>1 Hour 15 Minute</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>Freshen up dull, lack-luster skin & reveal a brighter, clearer complexion. Enjoy organic skincare, double steamers, hot towels and cozy ambiance.</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>Great for all skin types.</div>"
              ),
              $sce.trustAsHtml("<div class='description-padding'>$54</div>"),
              $sce.trustAsHtml("<div class='padding'>Includes</div>"),
              "oil based cleanser | brightening cleanser | exfoliation | extractions | light facial massage | hydrating masque | 20 mins LED light therapy | hydrating toner | vitamin c serum | hydrating moisturizer | sunscreen | lip treatment",
            ],
            footer: [],
          },
          {
            title: "Resurfacing",
            description: [
              "Resurfacing Facial",
              $sce.trustAsHtml(
                "<div class='description-padding'>1 Hour 15 Minute</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>Smooth out any roughness or wrinkles on the surface of the skin with a facial packed full of deep exfoliation. Enjoy organic skincare, double steamers, hot towels and cozy ambiance. </div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>Great for normal, oily, dry & mature skin types.</div>"
              ),
              $sce.trustAsHtml("<div class='description-padding'>$54</div>"),
              $sce.trustAsHtml("<div class='padding'>Includes</div>"),
              "oil based cleanser | resurfacing cleanser | exfoliation | extractions | light facial massage | nourishing masque |20 mins LED light therapy | revitalizing toner | vitamin c serum | hydrating moisturizer | sunscreen | lip treatment",
            ],
            footer: [],
          },
          {
            title: "Purifying",
            description: [
              "Purifying Facial",
              $sce.trustAsHtml(
                "<div class='description-padding'>1 Hour 15 Minute</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>Detoxify clogged pores from built-up sebum and dead skin cells. Enjoy organic skincare, double steamers, hot towels and cozy ambiance. </div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>Great for normal, oily & acneic skin types.</div>"
              ),
              $sce.trustAsHtml("<div class='description-padding'>$54</div>"),
              $sce.trustAsHtml("<div class='padding'>Includes</div>"),
              "oil based cleanser | detoxifying cleanser | exfoliation | extractions | light facial massage | purifying masque | 20 mins LED light therapy | revitalizing toner | vitamin c serum | clarifying moisturizer | sunscreen | lip treatment",
            ],
            footer: [],
          },
        ],
      },
      {
        src: "facial.jpg",
        title: "Facial Add Ons",
        mainDescription: ["Select from below to add to any facial service!"],
        types: [
          {
            title: "Add Ons",
            description: [
              "Microdermabrasion",
              $sce.trustAsHtml(
                "<div class='description-padding'>15 Minute</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>A noninvasive treatment used as a physical exfoliation to remove dead skin. A light to moderate suction is used along with a diamond crusted tip to physically exfoliating & removing dead skin. The feeling of having a microdermabrasion performed does not hurt, rather the feeling is as if a cat were licking you. The benefits of this treatment is not only to reveal more radiant skin but to help reduce the appearance of damage caused by the sun. Hyperpigmentation (dark spots) and wrinkles greatly diminish over continuous treatment. The more treatments received, a more coarse diamond tip may be used - while keeping the client's comfort in mind. Clients with open sores or pustules (pimples) are not recommended this service as it can cause discomfort."
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>Great for all skin types except highly textured skin/ severe acne.</div>"
              ),
              $sce.trustAsHtml("<div class='description-padding'>$15</div>"),
            ],
            footer: [],
          },
          {
            title: "Ultrasonic Scrubber",
            description: [
              "15 Min",
              $sce.trustAsHtml(
                "<div class='padding'>High frequency sonic waves loosen dead skin cells which allows for deep penetration of organic skincare products. It can be used to remove dead skin & sebum while exfoliating. It may also be used to get the most out of your skincare products by pushing essential skincare ingredients beneath the surface of the skin.",
                "This treatment is noninvasive but when used has a high pitch noise, which is normal. Anyone with congested pores, excessive amount of oil, blackheads, whiteheads, flaky skin, dull skin tone or uneven skin tone would benefit from an ultrasonic facial treatment. It can even be used to firm and lift!",
                "Treatment covers the entire neck and face."
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>Great for all skin types except highly textured skin/ severe acne. Those who would not be good candidates are pregnant women, those with severe heart disease, metal implants, a pacemaker and medically prescribed exfoliants."
              ),
              $sce.trustAsHtml("<div class='description-padding'>$12</div>"),
            ],
            footer: [],
          },
          {
            title: "Hand Care",
            description: [
              "25 Min",
              $sce.trustAsHtml(
                "<div class='padding'>Hands can tell a lot about someone's age - add a hand care session to any facial! Includes a cleanse, exfoliatio, massage, handwarmers & moisturizer with sunscreen. All to achieve softer more radiant hands! Service is conducted while enjoying LED light therapy."
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>Great for everyone!</div>"
              ),
              $sce.trustAsHtml("<div class='description-padding'>$15</div>"),
            ],
            footer: [],
          },
        ],
      },
      {
        src: "minime.jpg",
        title: "Mini Me Facial",
        mainDescription: [
          "Designed to give your little one - 12 years old and younger - a spa day! Steam and warm towels are included. (LED Light therapy not included).",
        ],
        types: [
          {
            title: "30 Minutes",
            description: [
              "30 Minutes",
              $sce.trustAsHtml(
                "<div class='description-padding'>Pamper your little one with a brightening facial!</div>"
              ),
              $sce.trustAsHtml("<div class='description-padding'>$30</div>"),
              $sce.trustAsHtml("<div class='padding'>Includes</div>"),
              "brightening cleanser | exfoliation | hydrating masque | cucumber slices | hydrating toner | hydration | sunscreen | double steam | warm towels",
            ],
            footer: [
              "* Must be accompanied by adult for the duration of service. Does not include LED light therapy.",
            ],
          },
        ],
      },
      {
        src: "backfacial.jpg",
        title: "Back Facial",
        mainDescription: [
          "Smooth out any roughness on the surface of the back with a back facial packed full of deep exfoliation. With the back being such a large area, each zone will have its own proper masque to ensure best maintenance. Enjoy organic skincare, double steamers, hot towels and cozy ambiance.",
        ],
        types: [
          {
            title: "1 Hour 15 Minutes",
            description: [
              "1 Hour 15 Minutes",
              $sce.trustAsHtml(
                "<div class='description-padding'>Great for normal, oily, dry & mature skin types.</div>"
              ),
              $sce.trustAsHtml("<div class='description-padding'>$66</div>"),
              $sce.trustAsHtml("<div class='padding'>Includes</div>"),
              "oil based cleanser | resurfacing cleanser | exfoliation | extractions | light back facial massage | target masking | revitalizing toner | hydrating moisturizer",

              "*Does not include LED Light Therapy",
            ],
          },
        ],
      },
      {
        src: "backmicroderm.jpg",
        title: "Back Facial Add Ons",
        fullserviceCssClass: "backgroundYHigh",
        mainDescription: [
          "Get the most out of your back facial by adding some of these treatments.",
        ],
        types: [
          {
            title: "Microdermabrasion",
            description: [
              "20 Minutes",
              $sce.trustAsHtml(
                "<div class='description-padding'>Physical form of exfoliation that uses a diamond crust tip and light suction that grazes against the skin.</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>Great for all skin types except highly textured skin/ severe acne.</div>"
              ),
              $sce.trustAsHtml("<div class='description-padding'>$20</div>"),
            ],
          },
          {
            title: "Ultrasonic Scrubber",
            description: [
              "20 Minutes",
              $sce.trustAsHtml(
                "<div class='description-padding'>High frequency sonic waves loosen dead skin cells which allows for deep penetration of organic skincare products. It can be used to remove dead skin & sebum while exfoliating. It may also be used to get the most out of your skincare products by pushing essential skincare ingredients beneath the surface of the skin.",
                "This treatment is noninvasive but when used has a high pitch noise, which is normal. Anyone with congested pores, excessive amount of oil, blackheads, whiteheads, flaky skin, dull skin tone or uneven skin tone would benefit from an ultrasonic facial treatment. It can even be used to firm and lift!</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>Great for all skin types except highly textured skin/ severe acne. Those who would not be good candidates are pregnant women, those with severe heart disease, metal implants, a pacemaker and medically prescribed exfoliants."
              ),
              $sce.trustAsHtml("<div class='description-padding'>$18</div>"),
            ],
          },
        ],
      },
    ];

    $scope.skinCareTreatmentServices = [
      {
        src: "dermaplaning.jpg",
        title: "Dermaplaning",
        mainDescription: [
          "Dermaplaning uses a medical grade scalpel to scrape the surface of the skin. It is a form of exfoliation and will greatly help lighten hyperpigmentation as well as diminish fine lines. By grazing the surface of the skin with a scalpel, vellus hair is removed, also known as peach fuzz! With skin that is free from dead skin and vellus hair, skincare application can penetrate deeper into the skin. The majority of products used will actually be able to be used, instead of getting trapped at the surface. This means your money of quality products is being put to good use!",

          "Eventhough this is a low risk treatment some side effects can include some redness and even some whiteheads. It is important not to touch your face after the procedure.",

          "This is a perfect treatment for anyone looking for exfoliation, good use of product absorption, baby smooth skin and even for those attenting an event and having perfect makeup application! On the other hand, anyone with open lesions, inflamed acne, uncontrolled diabetes, on Accutane (or past 6 months) or retinol for the past week cannot have this procedure.",
        ],
        types: [
          {
            title: "1 Hour 15 Mins",
            description: [
              "1 Hour 15 Minutes",
              $sce.trustAsHtml(
                "<div class='description-padding'>Get that baby smooth face!</div>"
              ),
              $sce.trustAsHtml("<div class='description-padding'>$69</div>"),
              $sce.trustAsHtml("<div class='padding'>Includes</div>"),
              "double cleanse | povidone-iodine | hydrating masque | calming toner | Vitamin C serum | hydrating moisturizer | spf | LED Light Therapy",
            ],
          },
        ],
      },
    ];

    $scope.lashServices = [
      {
        src: "lashbathaftercarekit.jpg",
        title: "Lash Info",
        fullserviceCssClass: "backgroundYHigh",
        types: [
          {
            description: [
              $sce.trustAsHtml("<div class='excess-padding'>Includes:</div>"),
              $sce.trustAsHtml(
                "<div class='description-padding'>Book a free lash patch test at least 24 hours in advance.</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>Add a lash bath to your service for $6.</div>"
              ),
              $sce.trustAsHtml(
                "<div class=''>Lash fills are based on how many days it has been since last apppointment.</div>"
              ),
              $sce.trustAsHtml(
                "<div class=''>Three days are given to notify us of any issues from your lashes in order to get a free correction.</div>"
              ),
              $sce.trustAsHtml(
                "<div class='extra-padding'>Day 1 - 3 : Free Correction</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>Day 4 - 10 : 1 Week Fill</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>Day 11 - 21 : 2 - 3 Week Fill</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>Day 22 - 35 : 4 - 5 Week Fill</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>Day >35 : After 5 weeks a full set will need to be booked.</div>"
              ),
              $sce.trustAsHtml(
                "<div class=''>Optional lash removal can be added for $20.</div>"
              ),
              $sce.trustAsHtml(
                "<div class='extra-padding'>Anyone wanting a lash fill and who has come from another studio will be charged the 4 - 5 week fill price plus $6. (This is due to the unknown quality of service that was provided by other location, unknown amount of time that has gone by & still be able to accomodate your service).</div>"
              ),
              $sce.trustAsHtml(
                "<div class='extra-padding'>First time clients will receive a free mini aftercare kit. Includes 1 mini lash bath, 1 lash wand & 1 mini cleansing brush.</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>We understand lashes are an investment & we would like to assist in your journey on keeping healthy lashes!</div>"
              ),
            ],
          },
        ],
      },
      {
        src: "img01.jpg",
        title: "Lash Patch",
        fullserviceCssClass: "backgroundYHigh",
        types: [
          {
            title: "Lash Patch Test",
            description: [
              "20 Mins",
              $sce.trustAsHtml(
                "<div class='description-padding'>A free patch test scheduled at least 24 hours in advance before service. This is great for those receiving lashes for the first time or for those who have sensitive eyes.</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>* If for any reason a client receives a patch test, eyes were unaffected, went ahead and received a full set but still had a reaction - free lash removal.</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>* If a client opts out of a patch test, gets a full set and still gets a reaction - 50% off lash removal.</div>"
              ),
              $sce.trustAsHtml("<div class='description-padding'>FREE</div>"),
            ],
          },
        ],
      },
      {
        src: "lashes.jpg",
        title: "Classic",
        fullserviceCssClass: "backgroundYHigh",
        mainDescription: [
          "Instantly get those defined lashes that brighten up your eyes! With versatile lashes it is easy to go from natural to strikingly dramatic. Perfect for everyday & for special occasions!  Choose from a smitten cat-eye creating an elongated eye, great for those who already have beautiful large eyes or enjoy a winged look. Don't have such large eyes? Want to create an effortlessly larger gaze? A charming doe-eyed look creates eyes that are more awake with longer lashes in the center.",

          "Perfect for anyone who has never tried lash extensions before or enjoys looking effortlessly natural! Each healthy natural lash has an extension adhered to it. Each look is customized to everyone's eye shape and desire.",
        ],
        types: [
          {
            title: "",
            description: [
              $sce.trustAsHtml(
                "<div class='description-padding'>2HR Full Set - $81</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>1 Week Fill (45 Min) - $25</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>2-3 Week Fill (1HR) - $40</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>4-5 Week Fill (1HR 15 Min) - $45</div>"
              ),
            ],
            footer: ["* Schedule a free lash patch test - (20 min)."],
          },
        ],
      },
      {
        src: "3Dhybrid.jpg",
        title: "Volume",
        fullserviceCssClass: "backgroundYHigh",
        mainDescription: [
          "Want a look that's a little fuller than just classics (1:!), add some volume lashes. These volume lashes are 3 extensions adhered to 1 natural lash. Adding these to classic lashes creates a hybrid look keeps that natural look with just a hint of flare creating body to the extensions. ",
        ],
        types: [
          {
            title: "Volume / Hybrid Lashes",
            description: [
              $sce.trustAsHtml(
                "<div class='description-padding'>2HR 30 Min Full Set - $96</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>1 Week Fill (45 Min) - $30</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>2-3 Week Fill (1HR) - $55</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>4-5 Week Fill (1HR 15 Min) - $60</div>"
              ),
            ],
            footer: ["* Schedule a free lash patch test - (20 min)."],
          },
        ],
      },
      {
        src: "img05.jpg",
        title: "Full Volume",
        fullserviceCssClass: "backgroundYHigh",
        mainDescription: [
          "Want to add more volume to your look, then full volume lashes will achieve just that! We are adhering 6 extensions to 1 healthy natural lash. You can either add full volume lashes to your classic look (hybrid lashes) or start a fresh new look of only full volumes! Full volumes give a more flirty eye that is intensified. ",
        ],
        types: [
          {
            title: "Full Volume / Hybrid Lashes",
            description: [
              $sce.trustAsHtml(
                "<div class='description-padding'>2HR 30 Min Full Set - $116</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>1 Week Fill (45 Min) - $35</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>2-3 Week Fill (1HR 15 Min) - $65</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>4-5 Week Fill (1HR 30 Min) - $70</div>"
              ),
            ],
            footer: ["* Schedule a free lash patch test - (20 min)."],
          },
        ],
      },
      {
        src: "9Dlashes.jpg",
        title: "Mega Volume",
        fullserviceCssClass: "backgroundYHigh",
        mainDescription: [
          "Instantly get those defined lashes that brighten up your eyes! With versatile lashes it is easy to go from natural to strikingly dramatic. Perfect for everyday & for special occasions!  Choose from a smitten cat-eye creating an elongated eye, great for those who already have beautiful large eyes or enjoy a winged look. Don't have such large eyes? Want to create an effortlessly larger gaze? A charming doe-eyed look creates eyes that are more awake with longer lashes in the center.",

          "Perfect for anyone who has never tried lash extensions before or enjoys looking effortlessly natural! Each healthy natural lash has an extension adhered to it. Each look is customized to everyone's eye shape and desire.",
        ],
        types: [
          {
            title: "Mega Volume Lashes",
            description: [
              $sce.trustAsHtml(
                "<div class='description-padding'>2HR 30 Min Full Set - $141</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>1 Week Fill (45 Min) - $50</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>2-3 Week Fill (1HR 15 Min) - $80</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>4-5 Week Fill (1HR 30 Min) - $90</div>"
              ),
            ],
            footer: ["* Schedule a free lash patch test - (20 min)."],
          },
        ],
      },

      {
        src: "lashremoval.jpg",
        title: "Lash Removal",
        mainDescription: [
          "Wanting to take a break from lashes or want to simply start fresh? Don't hesitate to get a cream based lash removal - great for those with sensitive eyes!",
        ],
        types: [
          {
            title: "Lash Removal",
            description: [
              $sce.trustAsHtml(
                "<div class='margin-bottom-small'>Removal 20 - 40 Minutes</div>"
              ),
              $sce.trustAsHtml(
                "<div class='margin-bottom-small'>Removal time depends on how many extensions are left & how recent the extensions were adhered.</div>"
              ),
              $sce.trustAsHtml("<div class='description-padding'>$20</div>"),
            ],
          },
        ],
      },
    ];

    $scope.lashLiftServices = [
      {
        src: "lash-lift.jpg",
        title: "Lash Lifts",
        css: "lash-lifts",
        fullserviceCssClass: "backgroundYHigh",
        mainDescription: [
          "Love your natural lashes but wish they could look curled & lifted? Introducing the Lash Lift! This noninvasive service allows your natural lashes to appear curled, lifted & longer!",

          "All services start with a gentle cleanse on your lashes & eyelids. Once the lift has been completed you can schedule your next lift appointment within 4-6 weeks - typical retention time.",
        ],
        types: [
          {
            title: "Lift",
            description: [
              "Lash Lift",
              "1 Hour",
              "$72",
              $sce.trustAsHtml(
                "<div class='description-padding'>Natural lashes are curled to create longer & fuller looking lashes</div>"
              ),
            ],
            footer: [
              "Micellar water & lash bath included.",
              "Lasts up to 4 - 6 weeks",
            ],
          },
          {
            title: "Lift & Tint",
            description: [
              "Lash Lift & Tint",
              "1 Hour 15 Minutes",
              "$82",
              $sce.trustAsHtml(
                "<div class='description-padding'>Add definition & depth to your naturally curled lashes with Blue Black lash tint</div>"
              ),
            ],
            footer: [
              "Micellar water & lash bath included.",
              "Lasts up to 4 - 6 weeks",
            ],
          },
          {
            title: "Touch-Up",
            description: [
              "Lash Tint Touch-Up",
              $sce.trustAsHtml(
                "<div class='description-padding'>30 Minutes $13</div>"
              ),
              $sce.trustAsHtml(
                "<div class='description-padding'>Perfect to thicken natural lashes especially those with lighter colored lashes. Allows eyes to appear striking with just a pop of colored tint.</div>"
              ),
            ],
            footer: [
              "Micellar water & lash bath included.",
              "Lasts up to 4 - 6 weeks",
            ],
          },
        ],
      },
    ];

    $scope.waxServices = [
      {
        src: "wax.jpg",
        title: "Waxing",
        css: "waxing-services",
        mainDescription: [
          "Facial waxing includes the brows, upper lip, chin and side burns. Honey & chamomile soft wax is used (with non woven cloth strip). Its natural formulation has a low melting point to help reduce redness and overall discomfort. It is also cruelty free, PETA approved, free from parabens, SLS, SLES & more.",

          "Anyone with irritated or inflamed skin should not be waxed as well as any areas being treated with AHAs or Retin-A.",
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
              ),
            ],
            footer: ["Henna dye lasts up to 6 weeks!"],
          },
          {
            title: "Upper Lip",
            description: [
              "Upper lip wax",
              $sce.trustAsHtml(
                "<div class='margin-bottom-small'>$10 - 20 minutes</div>"
              ),
            ],
          },
          {
            title: "Chin",
            description: [
              "Chin wax",
              $sce.trustAsHtml(
                "<div class='margin-bottom-small'>$10 - 20 minutes</div>"
              ),
            ],
          },
          {
            title: "Side Burns",
            description: [
              "Side burns",
              $sce.trustAsHtml(
                "<div class='margin-bottom'>$12 - 20 minutes</div>"
              ),
            ],
          },
          {
            title: "Full Face",
            description: [
              "Full face",
              "Brows, upper lip, chin, side burns",
              $sce.trustAsHtml(
                "<div class='margin-bottom'>$39 - 45 Mins</div>"
              ),
              "Full face + brow henna dye $49 - 1 hour",
            ],
            footer: ["Henna dye lasts up to 6 weeks!"],
          },
        ],
      },
    ];

    $scope.makeupServices = [
      {
        src: "makeup.jpg",
        title: "Natural Full Face Makeover",
        fullserviceCssClass: "backgroundYMid",
        mainDescription: [
          "This is a great makeover for anyone looking to get slightly dressed up, normally never wears makeup and even for a first date. A natural makeover is meant to enhance your beauty in a delicate way. We will start off by prepping the skin with a moisturizer then a primer to targeted areas - depending on your skin type. We advance to correcting slight imperfections and concealing them to get that even skin tone. Afterwards, we  add foundation to make sure you're flawless all day! Adding definition to the eyes and brows create a more captivating appeal. By adding a little color to the cheeks with some blush and bronzer we give life to the flawless canvas.",
        ],
        types: [
          {
            title: "1 Hr",
            description: [
              "1 Hour ",
              $sce.trustAsHtml(
                "<div class='description-padding'>Enhance your natural beauty with this makeover!</div>"
              ),
              $sce.trustAsHtml("<div class='description-padding'>$48</div>"),
              $sce.trustAsHtml("<div class='padding'>Includes</div>"),
              "correct & conceal | foundation | brows | soft natural eye | blush & bronze | lip",
            ],
            footer: [
              "*For makeover at different location additional costs may apply.",
            ],
          },
        ],
      },
      {
        src: "eventful.jpg",
        title: "Glam Full Face Makeover",
        mainDescription: [
          "Are you headed to an event such as prom, graduation, some type of shower, wedding or just want to be pampered? Then this makeover is for you! This makeover is meant for you to stand out in the crowd. I always prep the skin with a moisturizer and primer suited to your skin's needs. Any slight imperfections will be corrected and concealed to mute out discoloration. I mix your foundation to your shade and set the face with powder. We create a defined brow and a smokey or halo eye with a soft lip to balance the intensity. Let's not forget about sculpting those cheek bones with some contour and a pinch of color. And to finish the look, falsies!",
        ],
        types: [
          {
            title: "1.5 Hour",
            description: [
              "1.5 Hour",
              $sce.trustAsHtml(
                "<div class='description-padding'>Soft glam makeover perfect for any event!</div>"
              ),
              $sce.trustAsHtml("<div class='description-padding'>$58</div>"),
              $sce.trustAsHtml("<div class='padding'>Includes</div>"),
              "correct & conceal | foundation | brows | smokey eye | contour & sculpting | blush & bronze | falsies | lip",
            ],
            footer: [
              "*For makeover at different location additional costs may apply.",
            ],
          },
        ],
      },
      {
        src: "bride.jpg",
        title: "Bridal Makeover (Trial & Final)",
        mainDescription: [
          "Firstly, congratulations on getting engaged! My bridal makeover consists of two separate sessions, the trial run and the wedding day. We know you fall in love with your look.  We will create a picture perfect look that will look timeless. It is essential to prep the skin in order to radiate in every lighting. To get a flawless camera ready look, we correct and conceal especially under the eyes - from long nights of planning. By creating a smoother canvas, foundation applies effortlessly. Natural eyes are a timeless look, we can always glam up the eyes with some falsies. The addition of brows creates structure for the eyes captured in every photo. Contour, bronzer, blush, highlight & lips complete the look.",
        ],
        types: [
          {
            title: "1.5 Hr",
            description: [
              "1.5 Hour",
              $sce.trustAsHtml(
                "<div class='description-padding'>A perfect makeover for every bride on her special day, includes both trial & final looks each 1.5 hours long for a total of $89.</div>"
              ),
              $sce.trustAsHtml("<div class='description-padding'>$89</div>"),
              $sce.trustAsHtml("<div class='padding'>Includes</div>"),
              "correct & conceal | foundation | brows | soft glam eye | contour & sculpting | blush & bronze | falsies | lip",
              "(x2)",
            ],
            footer: [
              "*For makeover at different location additional costs may apply.",
            ],
          },
        ],
      },
    ];
  },
]);
