/* Main Controller */
var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'xeditable']);

// app.config(function($stateProvider, $urlRouterProvider) {
// 	$urlRouterProvider.otherwise('/');
// 	$stateProvider
// 	.state('releases', {
// 		url: "/{release}",
// 		templateUrl: "../views/marquees/marquees.html",
// 		controller: function($scope, $stateParams, marquees, releases){
// 			$scope.filterMarquees($stateParams.release);
// 		}
// 	})
// });

app.factory('marquees', function($http) {
	return {
		getMarquees: function(callback) {
			$http.get('../js/marquees.json').success(callback);
		}
	};
});

app.factory('releases', function($http) {
	return {
		getReleases: function(callback) {
			$http.get('../js/releases.json').success(callback);
		}
	};
});


app.controller('MarqueeCtrl', function($scope, marquees, releases) {

	// $scope.marquees = marquees;
	// $scope.releases = releases;

	marquees.getMarquees(function(results) {
		$scope.marquees = results;
	});

	releases.getReleases(function(results) {
		$scope.releases = results;
	});

	// console.log();

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
		$scope.marquees.filter(function(marquee) {
			console.log(marquee.release === releaseDate);
		});

	};

});




