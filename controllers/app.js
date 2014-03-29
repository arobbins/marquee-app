var app = angular.module('app', [
	'ui.bootstrap',
	'ui.router',
	'xeditable'
]);

app.factory('marqueeData', function($http) {
	return {
		getMarquees: function(callback) {
			$http.get('../js/marquees.json').success(callback);
		},
		getReleases: function(callback) {
			$http.get('../js/releases.json').success(callback);
		}
	};
});

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('home', {
		url: "/",
		templateUrl: "../views/marquees/marquees.html",
		controller: function($scope, $stateParams, marqueeData){
			marqueeData.getMarquees(function(results) {
				return $scope.marquees = results;
			});
			$scope.showMarquees = function(){
				return $scope.mSearch;
			};
			$scope.onrelease = false;
		}
	})
	.state('releases', {
		url: "/{release}",
		templateUrl: "../views/marquees/marquees.html",
		controller: function($scope, $stateParams, marqueeData){

			marqueeData.getMarquees(function(results) {
				return marquees = results;
			});
			marqueeData.getReleases(function(results) {
				return $scope.releases = results;
			});

			$scope.showMarquees = function(){
				return 2 === 2;
			};
			$scope.onrelease = true;
		}
	})
});



app.directive('activerelease', function(){
	return {
		restrict: 'E',
		template: '<h2 class="h4 col-lg-12">{{ marquees[0].release }} Release</h2>',
		replace: true
	}
});


app.controller('MarqueeCtrl', function($scope, marqueeData) {

	marqueeData.getMarquees(function(results) {
		return $scope.marquees = results;
	});
	marqueeData.getReleases(function(results) {
		return $scope.releases = results;
	});

	// Remove marquee from release Todo: fix
	$scope.removeMarquee = function(){
		$scope.marquees.splice(0,1);
	};

	// Collapse and expand
	$scope.toggleMarquees = function(){
		$scope.marquees.forEach(function(marquee) {
			return marquee.toggled = !marquee.toggled;
		});
	};

	// Filter marquees based on release
	$scope.filterMarquees = function(releaseDate){
		marqueeData.getMarquees(function(results) {
			$scope.marquees = results.filter(function(marquee) {
				return marquee.release === releaseDate;
			});
		});
	};

});

