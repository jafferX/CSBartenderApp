// Declare what our app uses.
angular.module('app', ['ngAnimate', 'app.routes', 'authService', 'mainCtrl', 'appCtrl'])
	.config(function($httpProvider) {
		$httpProvider.interceptors.push('AuthInterceptor');
	});