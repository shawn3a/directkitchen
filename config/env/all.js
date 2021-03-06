'use strict';

module.exports = {
	app: {
		title: 'DirectKitchen',
		description: 'Direct, Kitchen, Ltd',
		keywords: 'Kitchen, Sink'
	},
	port: process.env.PORT || 3001,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
			//	'public/lib/bootstrap/dist/css/bootstrap-theme.css',
			//	'public/modules/core/css/customise.css',
				'public/lib/flexslider/flexslider.css',
				'http://fonts.googleapis.com/css?family=News+Cycle',
				'public/lib/fancybox/source/jquery.fancybox.css'
			],
			js: [
				'public/lib/jquery/dist/jquery.min.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-cookies/angular-cookies.js', 
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/flexslider/jquery.flexslider-min.js',
                'public/lib/angular-flexslider/angular-flexslider.js',
				'public/lib/bootstrap-validator/dist/validator.min.js',
				'public/lib/fancybox/source/jquery.fancybox.pack.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};