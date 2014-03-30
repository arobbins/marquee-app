
app.controller('MarqueesCtrl', function($scope, $stateParams, MarqueeData) {

	$scope.search = {
	    m: ''
	}

	$scope.keydown = function(){
		MarqueeData.getMarqueeData(function(results) {
			return $scope.m.marquees = results.marquees;
		});
	}

	MarqueeData.getMarqueeData(function(results) {
		return $scope.m = results;
	});


	// Remove marquee from release Todo: fix
	$scope.removeMarquee = function(){
		$scope.marquees.splice(0,1);
	};

	// Collapse and expand
	$scope.toggleMarquees = function(){
		$scope.m.marquees.forEach(function(marquee) {
			return marquee.toggled = !marquee.toggled;
		});
	};

	// Filter marquees based on release
	$scope.filterMarquees = function(releaseDate){
		MarqueeData.getMarqueeData(function(results) {
			$scope.m.marquees = results.marquees.filter(function(marquee){
				return marquee.release === releaseDate;
			});
		});
	};
});

// $scope.filterMarquees = function(releaseDate){
// 	marqueeData.getMarquees(function(results) {
// 		$scope.marquees = results.filter(function(marquee) {
// 			return marquee.release === releaseDate;
// 		});
// 	});
// };