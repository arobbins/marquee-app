var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'xeditable']);

app.config(function($stateProvider) {
	$stateProvider.state('test', {
		url: "/test",
		templateUrl: '../marquees/test.html'
	})
});

app.controller('MarqueeCtrl', function($scope) {

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