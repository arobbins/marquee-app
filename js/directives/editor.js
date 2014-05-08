app.directive("clickToEdit", function() {
	return {
		restrict: "A",
		replace: false,
		templateUrl: "../../views/editor.html",

		controller: function($scope) {
			$scope.data = {
				editorEnabled: false,
				secondLine: false,
				firstLineCopy: "",
				secondLineCopy: ""
			};

			$scope.enableEditor = function() {
				$scope.data.editorEnabled = true;
			};

			$scope.disableEditor = function() {
				$scope.data.editorEnabled = false;
			};

			$scope.save = function() {
				if($scope.data.secondLineCopy){
					$scope.marquee.header = "<span>" + $scope.data.firstLineCopy + "</span>" + "<b>" + $scope.data.secondLineCopy + "</b>";
				} else {
					$scope.marquee.header = "<span>" + $scope.data.firstLineCopy + "</span>";
				}

				$scope.disableEditor();
			};

			$scope.toggle = function() {

				var spanPattern = /^<span/;
				var boldPattern = /^<b/;

				if($scope.data.secondLineCopy){
					if($scope.marquee.header.match(spanPattern)){
						$scope.marquee.header = "<b>" + $scope.data.firstLineCopy + "</b>" + "<span>" + $scope.data.secondLineCopy + "</span>";
					} else if($scope.marquee.header.match(boldPattern)){
						$scope.marquee.header = "<span>" + $scope.data.firstLineCopy + "</span>" + "<b>" + $scope.data.secondLineCopy + "</b>";
					}
				} else {
					console.log("No matches! Check logic in toggle function.");
				}
			};

			$scope.newLine = function() {
				$scope.data.secondLine = true;
			};

			$scope.removeSecondLine = function() {
				$scope.marquee.header = $scope.data.firstLineCopy;
				$scope.data.secondLineCopy = "";
				$scope.data.secondLine = false;				
			};
		}
	};
});