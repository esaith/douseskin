angular.module("douse", ['ngTouch']);

angular.module("douse").controller("homeController", ['$scope', function ($scope) {
    $scope.description = {};

    $scope.specialServices = [
        {
            src: "facial2",
            service: "1 Hour Custom Facial: $20",
            description: "A custom facial treating your concerns through double cleanse | exfoliation | extractions | massage | masque | hydration | spf steam | hot towels | oscillating brush"
        }
    ];

    $scope.skinCareServices = [
        {
            src: "facial2",
            service: "1 Hour Custom Facial: $52",
            description: "A custom facial treating your concerns through double cleanse | exfoliation | extractions | massage | masque | hydration | spf steam | hot towels | oscillating brush"
        },{
            src: "facial",
            service: "1 Hour Ultrasonic Facial: $59",
            description: "Through high frequency sonic waves dead skin cells become loosened and removed while penetrating deep below the skin’s surface to improve cell turnover and skincare effectiveness. Double cleanse | exfoliation | extractions | massage | masque | hydration steam | hot towels | ultrasonic cleanser"
        },{
            src: "backfacial",
            service: "1 Hour Back Facial: $66",
            description: "A custom facial treating your entire back. Double cleanse | exfoliation | extractions | massage | masque | hydration | spf steam | hot towels | oscillating brush"
        },
        {
            src: "minime",
            service: "30 min Mini Me Facial: $30",
            description: "A hydrating facial tailored to the little ones 12 years and younger. cleanse | exfoliation | massage | masque | hydration | spf steam | hot towels | cucumber slices"
        }
    ];

    $scope.makeupServices = [
        {
            src: "makeup",
            service: "1 Hour Natural Full Face Makeover: $48",
            description: "Enhance your natural beauty with this makeover! correct & conceal | foundation | brows | soft natural eye | blush & bronze | lip"
        },
        {
            src: "eventful",
            service: "1.5 Hour Full Face Eventful Makeover: $58",
            description: "Soft glam makeover perfect for an eventful gathering! correct & conceal | foundation | brows | smokey eye | contour | blush & bronze | falsies | lip"
        },
        {
            src: "bride",
            service: "1.5 Hour Bridal Makeover (Trial & Final): $89",
            description: "Perfect makeover for every bride on her special day, includes both trial & final looks each 1.5 hours long for a total of $89. For makeover at different location additional costs may apply. correct & conceal | foundation | brows | soft natural eye | blush & bronze | lip (x2)"
        }
    ];

    $scope.toggleDescription = function (service) {
        service.swiped = !service.swiped;
    };


}]);