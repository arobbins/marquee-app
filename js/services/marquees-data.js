app.factory('MarqueeData', function($http) {
	return {
		getMarqueeData: function(callback) {
			$http.get('js/services/marquees.json').success(callback);
		}
	};
});