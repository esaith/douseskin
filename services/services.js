(function () {
    angular.module('douse').factory('services', ['$http', '$sce', function ($http, $sce) {
        // var api = 'http://douseapi.azurewebsites.net/'
        var api = 'https://192.168.1.4:83'

        var business = null;

        function getServices() {
            if (business) return Promise.resolve(business);

            return $http.get(api + '/api/business/3/full').then(
                (response) => {
                    var data = response.data;

                    business = {
                        hours: data.Hours,
                        homeLogo: [{
                            ImageUrl: data.HomeLogo,
                            title: "",
                            types: [],
                        }],
                        iosMap: data.IosMap,
                        googleMap: data.GoogleMap,
                        bookNow: data.BookNow,
                        logoSvg: '', // todo,
                        categories: formatCategories(data.ServiceCategory),
                        modalSections: [],
                        blog: data.Blog,
                        instagram: data.Instagram,
                        instagramTitle: data.InstagramTitle,
                        facebook: data.Facebook,
                        facebookTitle: data.FacebookTitle,
                        Notification: data.Notification,
                        EmployeeImg: data.EmployeeImg,
                        Address: data.Address,
                        City: data.City,
                        State: data.State,
                        Zip: data.Zip,
                        Phone: data.Phone,
                        blog: data.Blog
                    };

                    business.modalSections = createModalSections(business);

                    return business;
                },
                (error) => {
                    console.log('Error getting business data from the api');
                }
            )
        }

        return {
            getServices: getServices
        }
    }]);

    function formatCategories(serviceCategories) {
        let result = [];

        for (const serviceCategory of serviceCategories) {
            const category = {
                CategoryName: serviceCategory.Name,
                ShortName: serviceCategory.ShortName,
                id: serviceCategory.Name.replace(/\s+/g, '').toLowerCase().trim(),
                Services: []
            }

            for (const service of serviceCategory.Services) {
                const newService = {
                    ImageUrl: service.ImageUrl,
                    Title: service.Title,
                    Description: service.Description,
                    types: []
                };

                for (const option of service.ServiceOptions) {
                    const newOption = {
                        title: option.Title,
                        description: option.Description,
                        footer: option.Footer
                    };

                    newService.types.push(newOption);
                }

                category.Services.push(newService);
            }

            result.push(category);
        }

        return result;
    }

    function createModalSections(business) {
        const result = [];

        business.categories.forEach((category, index) => {
            result.push({
                title: category.ShortName,
                id: category.id,
                sortOrder: index
            });
        });

        if (business.Address) {
            result.push({
                title: 'Contact me',
                page: 'about',
                sortOrder: result.length
            });
        }

        if (business.blog.length > 0) {
            result.push({
                title: 'Blog',
                page: 'blog',
                sortOrder: result.length
            });
        }

        result.push({
            title: 'Booking',
            descriptions: [
                'Anyone under the age of 18 must have a parent or guardian present to sign consent form.',
                ' Anyone 13 years or younger must have a parent or guardian present to sign consent form and be in the room during the service.'
            ],
            buttonLink: 'https://square.site/book/Q4W3RC4A64DCN/douse-skin-essentials-tampa-fl',
            buttonLabel: 'Book an Appointment',
            sortOrder: 7
        });

        result.push({
            title: 'eGift Cards',
            descriptions: [
                'The gift that keeps on giving!',
                'Physical gift cards available in studio',
                // '&#x2764;'
            ],
            buttonLink: 'https://squareup.com/gift/8EHFVZAQP5A6S/order',
            buttonLabel: 'eGift Card',
            footer: [
                'Gift Cards are not meant to hold services (monthly specials) from previous months. May only be used for current promotions or any other regular services.*'
            ],
            sortOrder: 8
        });

        result.push({
            title: 'Contact me',
            page: 'about',
            sortOrder: 9
        });

        result.push({
            title: 'Blog',
            page: 'blog',
            sortOrder: 10
        });


        return result;
    }

    function getBlog() {
        var blog = [];

        blog.push({
            date: 'March 7, 2020',
            title: 'How I ended up blogging as an esthetician',
            subtitle: 'The beginning of a long journey',
            content: [
                'Hello, my name is Veronica, I go by Veronica Arielle! I have been a licensed esthetician since 2017 and have since dabbled in makeup, skincare, facials, lashes… etc. I have had my own personal gains and loses in the industry and in 2019 I decided to branch out on my own, Douse Skin Essentials, LLC !! I have currently had my business for a little over six months. I have obtained wholesaler membership status with several companies, I offer retail, I offer an ever-growing amount of services, I continually take classes to better myself and still, one of the biggest struggles is gaining exposure. I now feel as though I have reached a sweet spot and feel satisfied with not only the way my studio appears but with the substantial amount of services, products (retail) and customer-oriented education I provide. With these aspects of my business starting to flourish, my exposureis crying for help. Therefore, I decided to start my own blog!',
                'My purpose in this blog is to share my experiences as an esthetician and making it in this industry. I currently have involved myself in skincare, lashes, waxing, makeup and will continue to grow within each avenue as well as take on other paths! Being a multidimensional individual keeps you up on your toes trying to keep up with new trends, skills and education! Hopefully if you\'re in a similar situation my personal experiences and thoughts can enlighten your journey!'
            ],
            closingRemark: 'xoxo',
            signature: 'Veronica Arielle'
        });

        return blog;
    }

})();