var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'xeditable']);

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
			$scope.filterMarquees($stateParams.release);



			$scope.showMarquees = function(){
				return 2 === 2;
			};

		}
	})
});

// $scope.displayNone = function(){
// 	return false;
// };
// $scope.displayAll = function(){
// 	return true;
// };

app.controller('MarqueeCtrl', function($scope, marqueeData) {

	marqueeData.getMarquees(function(results) {
		return $scope.marquees = results;
	});
	marqueeData.getReleases(function(results) {
		return $scope.releases = results;
	});

	// Remove marquee from release
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

