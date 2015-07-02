'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		}).
		state('about', {
			url: '/about',
			templateUrl: 'modules/core/views/about.client.view.html'
		}).
		state('products-service', {
			url: '/products-service',
			templateUrl: 'modules/core/views/products-service.client.view.html'
		}).
		state('contact', {
			url: '/contact',
			templateUrl: 'modules/core/views/contact.client.view.html'
		}).
		state('kitchens', {
			url: '/kitchens',
			templateUrl: 'modules/core/views/kitchens.client.view.html'
		}).
		state('bench', {
			url: '/bench',
			templateUrl: 'modules/core/views/bench.client.view.html'
		});
	}
]);