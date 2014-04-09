var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'xeditable', 'ngDialog']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: "/",
		templateUrl: "../views/marquees/marquees.html",
		controller: function($scope, $stateParams, MarqueeData){
			$scope.onrelease = false;
		}

	})
	.state('releases', {
		url: "/{release}",
		templateUrl: "../views/marquees/marquees.html",
		controller: function($scope, $stateParams, MarqueeData){
			$scope.search.release = $stateParams;
		}
	})
});;