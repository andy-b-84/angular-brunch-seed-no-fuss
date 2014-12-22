'use strict';

// Declare app level module which depends on filters, and services
var App = angular.module('app', ['ngSanitize', 'ngResource', 'ui.router', 'oc.modal']).config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
	$locationProvider.hashPrefix('!');
	$urlRouterProvider.otherwise("/quizz");

	$stateProvider.state('quizz', {
		url: "/quizz",
		views: {
			"mainView": {
				templateUrl: "partials/quizz.html",
				controller: 'QuizzCtrl'
			}
		}
	}).state('result', {
        url: "/result",
        views: {
            "mainView": {
                templateUrl: "partials/partial.html",
                controller: 'ResultCtrl'
            }
        }
    }).state('about', {
        url: "/about",
        views: {
            "mainView": {
                templateUrl: "partials/about.html",
                controller: 'AboutCtrl'
            }
        }
    });

	// Without server side support html5 must be disabled.
	return $locationProvider.html5Mode(false);
}]);