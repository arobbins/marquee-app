/* Main Controller */
var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'xeditable']);

app.config(function($stateProvider, $urlRouterProvider) {
	// $urlRouterProvider.otherwise('/');
	$stateProvider
	.state('home', {
		url: "/",
		template: 'home'
	})
	.state('marquees', {
		url: "/marquees",
		templateUrl: "../views/marquees/marquees.html"
	})
	.state('jan2014', {
		url: "/jan2014",
		templateUrl: "../views/marquees/marquees.html"
	})
});


app.controller('MarqueeCtrl', function($scope, $stateParams) {

	$scope.releaseDates = ['March 2014', 'February 2014', 'January 2014', 'December 2013'];

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
			contentkey 	: 'vinesse1013',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			toggled		: false,
			release		: $scope.releaseDates[2]
		},
		{
			contentkey	: 'ssolinkaccounts1211',
			template		: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			toggled		: false,
			release 		: $scope.releaseDates[2]
		},
		{
			contentkey 	: 'select0213',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			toggled		: false,
			release		: $scope.releaseDates[2]
		},
		{
			contentkey	: 'acelareactfall2012',
			template		: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			toggled		: false,
			release		: $scope.releaseDates[3]
		},
		{
			contentkey 	: 'amtrakbookingfall2012',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			toggled		: false,
			release		: $scope.releaseDates[0]
		},
		{
			contentkey 	: 'amtrakbrand0713',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			toggled		: false,
			release		: $scope.releaseDates[3]
		},
		{
			contentkey 	: 'facebook1112',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			toggled		: false,
			release		: $scope.releaseDates[1]
		},
		{
			contentkey	: 'hyatt0913',
			template		: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			toggled		: false,
			release 		: $scope.releaseDates[2]
		},
		{
			contentkey 	: 'metlife0913',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			toggled		: false,
			release		: $scope.releaseDates[3]
		},
		{
			contentkey 	: 'partneroi1113',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			toggled		: false,
			release		: $scope.releaseDates[0]
		},
		{
			contentkey 	: 'energyplus1213',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			toggled		: false,
			release		: $scope.releaseDates[2]
		},
		{
			contentkey 	: 'budgetJan2014',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			toggled		: false,
			release		: $scope.releaseDates[0]
		},
		{
			contentkey 	: 'pfw1013',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			toggled		: false,
			release		: $scope.releaseDates[3]
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

