angular.module('starter.directives', [])
	.directive('onLastRepeat', function() {
		return function(scope, element, attrs) {
			if (scope.$last) {
				setTimeout(function() {
					try {
						TagCanvas.Start('myCanvas', 'tags', {
							textColour: '#000000',
							weightFrom: "data-weight",
							reverse: true,
							depth: 0.8,
							maxSpeed: 0.05,
							wheelZoom: false,
							weight: true
						});
					} catch (e) {
						// something went wrong, hide the canvas container
						document.getElementById('myCanvasContainer').style.display = 'none';
					}
				}, 1);

			}
		};
	})