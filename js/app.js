var app = angular.module('app', []);


function first($scope){
	$scope.property1 = "Prop1",
	$scope.marquees = {
		"Triple A": {
			contentkey: "aaa612",
			template: "Left",
			theme: "Dark"
		},
		"Amtrak Cascades": {
			contentkey: "cascades0214",
			template: "Left",
			theme: "Dark"
		},
		"Double Days": {
			contentkey: "doubledays2014",
			template: "Left",
			theme: "Dark"
		}
	};
}