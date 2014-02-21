'use strict';

angular.module('myApp', [
	'ngRoute',
	'myApp.filters',
	'myApp.services',
	'myApp.directives',
	'myApp.controllers'
	])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.when('/main', {templateUrl: 'partials/mainview.html', controller: 'MainController'});
	$routeProvider.otherwise({redirectTo: '/main'});
}]);

