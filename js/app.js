var app = angular.module('app', ['ui.bootstrap', 'xeditable']);


app.controller('MarqueeCtrl', function($scope) {
	// $scope.marquee = {
	// 	title : "Marquee #1",
	// 	template : "tpl-left"
	// };
	$scope.checkModel = {};
	$scope.marquees = [
		{
			title 	: 'Marquee #1',
			template : 'tpl-left',
			header 	: 'Headline',
			body 		: 'Body',
			button 	: 'Button'
		}
	];
	$scope.addMarquee = function(){
		var count = 0;
		for(var i = 0; i <= $scope.marquees.length; i++){
			count++;
		}

		$scope.marquees.unshift({
			title 	: 'Marquee #' + count++,
			template : 'tpl-left',
			header 	: '',
			body 		: '',
			button 	: ''
		});

	};
	$scope.removeMarquee = function(){
		$scope.marquees.splice(0,1);
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



function addMarquee() {

}