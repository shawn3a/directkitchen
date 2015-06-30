'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', 'Files',
	function($scope, Authentication, Files) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

        $scope.slides = Files.getSlides();

        $scope.products = [
            {
                title: 'KITCHENS',
                images: '',
                'description': ''
            },
            {
                title: 'BENCH TOPS',
                images: '',
                'description': ''
            },
            {
                title: 'BATHROOM HARDWARE',
                images: '',
                'description': ''
            }
        ];

	}
]);

//(function($){
//	$(window).load(function() {
//		$('.flexslider').flexslider({
//			animation: 'slide'
//		});
//	});
//})(angular.element);
