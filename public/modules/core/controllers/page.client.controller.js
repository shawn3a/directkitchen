'use strict';


angular.module('core').controller('PageController', ['$scope', 'Authentication', 'Files',
	function($scope, Authentication, Files) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

        $scope.slides = Files.getSlides();

        $scope.products = [
            {
                title: 'KITCHENS',
                images: '/modules/core/img/kitchens/1.jpg',
                'description': 'Kitchen is one of the most important places in your house. Therefore it is our priority to make your kitchen the best you will ever see.'
            },
            {
                title: 'BENCH TOPS',
                images: '/modules/core/img/bench/1.jpg',
                'description': 'Granite Color &Quartz surface.'
            },
            {
                title: 'BATHROOM HARDWARE',
                images: '/modules/core/img/sinks/1.png',
                'description': 'Sinks Taps &Vanity basin.'
            }
        ];

        $scope.send = function() {
            alert('Successful');
        };

	}
]);

