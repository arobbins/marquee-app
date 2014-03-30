app.directive('activerelease', function(){
	return {
		restrict: 'E',
		template: '<h2 class="h4 col-lg-12">{{ m.marquees[0].release }} Release</h2>',
		replace: true
	}
});