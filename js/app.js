var mapp = angular.module('mapp', []);


function first($scope){
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