'use strict';


angular.module('core').controller('PageController', ['$scope', 'Authentication', 'Files',
	function($scope, Authentication, Files) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

        $scope.slides = Files.getSlides();

        $scope.products = [
            {
                'title': 'KITCHENS',
                'link': 'kitchens',
                'images': [
                    '/modules/core/img/kitchens/1.jpg',
                    '/modules/core/img/kitchens/2.jpg',
                    '/modules/core/img/kitchens/3.jpg',
                    '/modules/core/img/kitchens/4.jpg',
                    '/modules/core/img/kitchens/5.jpg',
                    '/modules/core/img/kitchens/6.jpg',
                    '/modules/core/img/kitchens/7.jpg',
                    '/modules/core/img/kitchens/8.jpg',
                    '/modules/core/img/kitchens/9.jpg',
                ],
                'summary': 'Kitchen is one of the most important places in your house. Therefore it is our priority to make your kitchen the best you will ever see.',
                'description': [
                    'Kitchen is one of the most important places in your house. Therefore it is our priority to make your kitchen the best you will ever see. Our renovating team ensures you that after our designing, you will finally be able to work in a stress free environment and actually enjoy making that roast beef you have been putting off for weeks!',
                    'We suit all tastes and cultures, as our staff provides you with friendly customer service that you will ever experience. We provide with a large range of materials you could choose from, if you don’t have specific designs. After designing your fantasy kitchen, we will renovate your cooking space in a short amount of time. If any changes are wanted, we will try our best to fulfill your needs.',
                    'Designing the interior of the space is the most important step before constructing begins. Direct Kitchen will guide you from square one to the completion of your specified design. Our staff members will happily listen to your ideas and expectations, however if you are not sure of the design you are after.Direct Kitchen will gladly provide you with a range of different designs you will definitely love. We are capable of designing interiors with the highest possible values of functionality, durability, safety and of course, style.'
                ]
            },
            {
                'title': 'BENCH TOPS',
                'link': 'bench',
                'images': ['/modules/core/img/bench/1.jpg'],
                'summary': 'Granite Color &Quartz surface.',
                'description': [
                    'We are also specialising in importing and manufacturing natural stone products and engineered stone.we are fabricator of leading brands like Caesar Stone,Sile Stone,Trend Stone and Uni quartz.',
                    'Popular Granite &Quartz surface Color(See Photos)'
                ]
            },
            {
                'title': 'BATHROOM HARDWARE',
                'images': ['/modules/core/img/sinks/1.png'],
                'summary': 'Sinks Taps &Vanity basin.',
            }
        ];

        $scope.send = function() {
            alert('Successful');
        };

	}
]);

(function($){
    $(window).load(function(){
        $(".fancybox").fancybox();
    });
})(angular.element);

