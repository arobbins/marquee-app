/* Main Controller */
var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'xeditable']);

app.config(function($stateProvider, $urlRouterProvider) {
	// $urlRouterProvider.otherwise('/');
	$stateProvider
	// .state('home', {
	// 	url: "/",
	// 	template: 'home'
	// })
	.state('release', {
		url: "/{release}",
		templateUrl: "../views/marquees/marquees.html"
	})
});









app.factory('People', function() {
	var People = {};
	People.info = [
		{
			name: "Lucilla Oquendo",
			sex: "female"
		},
		{
			name: "Clayton Bellini",
			sex: "female"
		},
		{
			name: "Vaughn Cammarata",
			sex: "female"
		},
		{
			name: "Valencia Briceno",
			sex: "female"
		},
		{
			name: "Colby Granato",
			sex: "female"
		},
		{
			name: "Shera Yelle",
			sex: "female"
		},
		{
			name: "Sheila Molnar",
			sex: "female"
		},
		{
			name: "Vinnie Watters",
			sex: "male"
		},
		{
			name: "Desmond Rathman",
			sex: "male"
		},
		{
			name: "Alaine Quevedo",
			sex: "female"
		},
		{
			name: "Hortense Beckford",
			sex: "female"
		},
		{
			name: "Gaylene Bennefield",
			sex: "male"
		}
	];
	return People;
})


function PeopleCtrl($scope, People){
	$scope.people = People;
}











app.controller('MarqueeCtrl', function($scope, $stateParams) {

	$scope.releaseDates = ['January 2014', 'February 2014', 'March 2014'];

	// Main marquees array
	var marquees = [
		{
			contentkey	: 'aaa612',
			template		: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			toggled		: false,
			release		: $scope.releaseDates[0]
		},
		{
			contentkey 	: 'pfw0314',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			toggled		: false,
			release		: $scope.releaseDates[1]
		},
		{
			contentkey 	: 'wyndham0314',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			toggled		: false,
			release		: $scope.releaseDates[1]
		},
		{
			contentkey 	: 'testing1',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			toggled		: false,
			release		: $scope.releaseDates[2]
		},
		{
			contentkey	: 'testing2',
			template		: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			toggled		: false,
			release 		: $scope.releaseDates[2]
		},
		{
			contentkey 	: 'testing3',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			toggled		: false,
			release		: $scope.releaseDates[2]
		}
	];

	$scope.marquees = marquees;
	$scope.form = {};

	// Add marquee to release
	$scope.addMarquee = function(){
		var count = 0;
		for(var i = 0; i <= $scope.marquees.length; i++){
			count++;
		}
		$scope.marquees.unshift({
			contentkey 	: 'contentkey',
			title 		: 'Marquee #' + count++,
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			toggled		: false,
			image 		: '../imgs/marquee.jpeg'
		});
	};

	// Remove marquee from release
	$scope.removeMarquee = function(){
		$scope.marquees.splice(0,1);
	};

	// Sortable by release
	$scope.sortMarqueeByRelease = function(releaseDate){
		$scope.marquees = marquees.filter(function(marquee) {
			return marquee.release === releaseDate;
		});
	};

	// Collapse and expand
	$scope.toggleMarquees = function(){
		$scope.marquees.forEach(function(marquee) {
			return marquee.toggled = !marquee.toggled;
		});
	};

});

