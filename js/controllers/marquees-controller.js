app.controller('MarqueesCtrl', function($scope, $stateParams, ngDialog, MarqueeData) {

	// $scope.searchText = function(str){

	// 	// Declaring our string and patterns
	// 	var patternSmall = /s:(.*)b:/;
	// 	var patternBig = /b:(.*)/;

	// 	// Matching the small text
	// 	var matchSmall = patternSmall.exec(str);
	// 	var smalltext = matchSmall[1];

	// 	// Works but not sure of order
	// 	"s:This is an example b:that is so cool".replace(/s:(.*)b:(.*)/, function(match, $1, $2, offset, string){
	// 		return '<span>' + $1 + '</span>' + '<b>' + $2 + '</b>';
	// 	});


	// 	/^.*?\bs:(.*)\b.*?\bb:(.*)\b.*?$/m.exec("b:This is an example s:that is so cool");

	// 	var str = 's: This is an example b: This is also an example';
	// 	var reg = /[s:](.*)[b:]|[s:]/;

	// 	reg.exec(str);

	// 	alert(str.match(reg)[0]);

	// 	// Matching the big text
	// 	var matchBig = patternBig.exec(str);
	// 	var bigtext = matchBig[1];

	// 	// Modifying strings with added HTML elements
	// 	var smalltext = "<span>" + smalltext + "</span>";
	// 	var bigtext = "<b>" + bigtext + "</b>";


	// 	// return [smalltext, bigtext];
	// 	return {
	// 		smalltext: smalltext,
	// 		bigtext: bigtext
 //    	};
	// 	// console.log(smalltext);
	// 	// console.log(bigtext);
	// }

	// searchText($scope.m.marquees[0].header);

	$scope.isCollapsed = true;
	$scope.disabled = "disabled";

	// Storing all of our marquees in this m object when we search
	$scope.search = {
	    m: '',
	    release: ''
	};

	// Setting the results of making the AJAX call to our 'm' object.
	MarqueeData.getMarqueeData(function(results) {
		return $scope.m = results;
	});

	$scope.saveContent = function(marquee, input1, input2) {
		input1 = "<span>" + input1 + "</span>";
		input2 = "<b>" + input2 + "</b>";

		return marquee.header = input1 + input2;
	};

	$scope.toggleSizes = function(marquee, input1, input2) {
		var spanPattern = /^<span/;
		var boldPattern = /^<b/;

		if(marquee.header.match(spanPattern)){
			input1 = "<b>" + input1 + "</b>";
			input2 = "<span>" + input2 + "</span>";
		} else if(marquee.header.match(boldPattern)){
			input1 = "<span>" + input1 + "</span>";
			input2 = "<b>" + input2 + "</b>";
		}
		return marquee.header = input1 + input2;
	};

	$scope.checkRelease = function() {
		if($scope.search.m){
			$scope.onrelease = false;
		} else {
			$scope.onrelease = true;
		}
		return $scope.onrelease;
	};

	$scope.clickToOpen = function () {
		ngDialog.open({
			template: '../../views/newrelease.html',
			className: 'ngdialog-theme-plain',
			scope: $scope
		});
	};

	$scope.showAllMarquees = function() {
		MarqueeData.getMarqueeData(function(results) {
			return $scope.m.marquees = results.marquees;
		});
	};

	$scope.removeMarquee = function() {

	};

	$scope.addMarquee = function() {

	};

	// Collapse and expand
	$scope.toggleMarquees = function() {
		$scope.m.marquees.forEach(function(marquee) {
			return marquee.toggled = !marquee.toggled;
		});
	};

	// Filter marquees based on release
	$scope.filterMarquees = function(releaseDate) {
		$scope.search.m = '';
		$scope.disabled = '';
		MarqueeData.getMarqueeData(function(results) {
			$scope.m.marquees = results.marquees.filter(function(marquee){
				return marquee.release === releaseDate;
			});
		});
	};

});