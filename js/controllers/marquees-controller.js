app.controller('MarqueesCtrl', function($scope, $stateParams, ngDialog, MarqueeData) {

	$scope.searchText = function(str){

		// Declaring our string and patterns
		var patternSmall = /s:(.*)b:/;
		var patternBig = /b:(.*)/;
			
		// Matching the small text
		var matchSmall = patternSmall.exec(str);
		var smalltext = matchSmall[1];

		// Matching the big text
		var matchBig = patternBig.exec(str);
		var bigtext = matchBig[1];

		// Modifying strings with added HTML elements
		var smalltext = "<span>" + smalltext + "</span>";
		var bigtext = "<b>" + bigtext + "</b>";

		// return [smalltext, bigtext];
		return {
			smalltext: smalltext, 
			bigtext: bigtext
    	}; 
		// console.log(smalltext);
		// console.log(bigtext);
	}

	searchText($scope.m.marquees[0].header);
	
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

	

	$scope.checkRelease = function(){
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

	$scope.showAllMarquees = function(){
		MarqueeData.getMarqueeData(function(results) {
			return $scope.m.marquees = results.marquees;
		});
	};

	$scope.removeMarquee = function(){

	};

	$scope.addMarquee = function(){

	};

	// Collapse and expand
	$scope.toggleMarquees = function(){
		$scope.m.marquees.forEach(function(marquee) {
			return marquee.toggled = !marquee.toggled;
		});
	};

	// Filter marquees based on release
	$scope.filterMarquees = function(releaseDate){
		$scope.search.m = '';
		$scope.disabled = '';
		MarqueeData.getMarqueeData(function(results) {
			$scope.m.marquees = results.marquees.filter(function(marquee){
				return marquee.release === releaseDate;
			});
		});
	};

});