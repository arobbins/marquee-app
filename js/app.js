var app = angular.module('app', ['ui.bootstrap', 'xeditable']);

app.controller('MarqueeCtrl', function($scope) {
	$scope.checkModel = {};
	// $scope.marqueeSearch = {};
	$scope.marquees = [
		{
			contentkey	: 'aaa612',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			release		: 'January2014'
		},
		{
			contentkey 	: 'pfw0314',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			release		: 'February2014'
		},
		{
			contentkey 	: 'wyndham0314',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			release		: 'March2014'
		},
		{
			contentkey 	: 'testing2',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			release		: 'March2014'
		},
		{
			contentkey 	: 'testing',
			template 	: 'tpl-left',
			header 		: 'Headline',
			body 			: 'Body',
			button 		: 'Button',
			image 		: '../imgs/marquee.jpeg',
			release		: 'February2014'
		}
	];
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
		var i = $scope.marquees.length - 1; // Totals up all the items in the array and subtracts 1 to compensate for 0 based index
		for(i; i >= 0; i--) {
		   if($scope.marquees[i].release != releaseDate){
		   	$scope.marquees.splice(i, 1);
		   };
		};
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