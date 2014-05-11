app.directive("edit", function() {

	return {
		restrict: "A",
		// templateUrl: "../../views/editor.html",
		scope: {

		},
		link: function(scope, element, attrs) {

			// scope.editor = {
			// 	enabled: false,
			// 	value: attrs.edit
			// };

			element.bind("click", function(){
				console.log(scope.editor.value);
			});

		}

	};
});