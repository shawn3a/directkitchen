'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus',
	function($scope, Authentication, Menus) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
//		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});

        $scope.menu = getMenu();

        function getMenu () {
            var menuName = 'main-menu',
                menuData = [
                    {
                        'title': 'HOME',
                        'url': ''
                    },
                    {
                        'title': 'ABOUT',
                        'url': 'about'
                    },
                    {
                        'title': 'PRODUCTS & SERVICE',
                        'url': 'products-service'
                    },
                    {
                        'title': 'CONTACT',
                        'url': 'contact'
                    }
                ],
                menu = Menus.addMenu(menuName, true);
                angular.forEach(menuData, function(item, key) {
                    Menus.addMenuItem(menuName, item.title, item.url);
                });

            return menu;
        };


	}
]);