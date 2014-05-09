app.controller('MarqueesCtrl', function($scope, $stateParams, ngDialog, MarqueeData) {

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

	$scope.showMobile = function(marquee) {
		if(marquee.showMobile){
			marquee.showMobile = false;
		} else {
			marquee.showMobile = true;
		}
	};
});