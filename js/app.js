var app = angular.module('app', ['ui.bootstrap', 'xeditable']);

app.controller('MarqueeCtrl', function($scope) {
	$scope.checkModel = {};
	$scope.marqueesSortedByRelease = [];
	$scope.releaseDates = ['January 2014', 'February 2014', 'March 2014'];

	var onSearch = true;
	var onRelease = false;

	if(onSearch){
		
	} else if (onRelease){

	}

	var marquees = [
		{
			contentkey	: 'aaa612',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			release		: $scope.releaseDates[0]
		},
		{
			contentkey 	: 'pfw0314',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			release		: $scope.releaseDates[1]
		},
		{
			contentkey 	: 'wyndham0314',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			release		: $scope.releaseDates[1]
		},
		{
			contentkey 	: 'testing1',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			release		: $scope.releaseDates[2]
		},
		{
			contentkey 	: 'testing2',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			release		: $scope.releaseDates[2]
		},
		{
			contentkey 	: 'testing3',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			release		: $scope.releaseDates[2]
		},
	];
	$scope.marquees = marquees;


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
			image 		: '../imgs/marquee.jpeg'
		});
	};

	$scope.removeMarquee = function(){
		$scope.marquees.splice(0,1);
	};

	$scope.sortMarqueeByRelease = function(releaseDate){
		$scope.marquees = marquees.filter(function(marquee) {
			return marquee.release === releaseDate;
		});
	};

});




// Marquee Collpase controller
function AccordionDemoCtrl($scope) {
	$scope.oneAtATime = true;

	$scope.groups = [
		{
			title: "Dynamic Group Header - 1",
			content: "Dynamic Group Body - 1"
		},
		{
			title: "Dynamic Group Header - 2",
			content: "Dynamic Group Body - 2"
		}
	];

	$scope.items = ['Item 1', 'Item 2', 'Item 3'];

	$scope.addItem = function() {
		var newItemNo = $scope.items.length + 1;
		$scope.items.push('Item ' + newItemNo);
	};
}


// File upload