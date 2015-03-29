// Global variabe for entire app
var app = app || {};

// IIFE for local scope
(function(){
	// Function definitions
	function init() {
		// Initial Function calls
		$('.main-nav-link').submenu();
	}

	// jQuery Document ready event
	(function($) {
		init();
	})(jQuery);

})();
