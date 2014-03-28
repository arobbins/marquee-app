/* Main Controller */
var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'xeditable']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
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
		}
	})
});

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

var marquees;

app.controller('MarqueeCtrl', function($scope, marqueeData) {

	marqueeData.getMarquees(function(results) {
		return marquees = results;
	});

	marqueeData.getReleases(function(results) {
		return $scope.releases = results;
	});


	// Add marquee to release
	// $scope.addMarquee = function(){
	// 	var count = 0;
	// 	for(var i = 0; i <= $scope.marquees.length; i++){
	// 		count++;
	// 	}
	// 	$scope.marquees.unshift({
	// 		contentkey 	: 'contentkey',
	// 		title 		: 'Marquee #' + count++,
	// 		template 	: 'tpl-left',
	// 		header 		: 'Headline',
	// 		body 			: 'Body',
	// 		button 		: 'Button',
	// 		toggled		: false,
	// 		image 		: '../imgs/marquee.jpeg'
	// 	});
	// };

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

	$scope.filterMarquees = function(releaseDate){
		$scope.marquees = marquees.filter(function(marquee) {
			return marquee.release === releaseDate;
		});
	};

});

