// Global variabe for entire app
var app = app || {};

// my-plugins
(function($) {
	//my-tab
	$.fn.codeTab = function($tabCon) {
		var tabBtns = $(this),
			tabNav = tabBtns.parent().parent(),
			curTabbtn,
			curTabCon;

		function tabShowHide(e) {
			e.preventDefault();

			curTabBtn = $(this);

			if(!curTabBtn.hasClass('active')) {
				curTabCon = curTabBtn.attr('href');
				curTabCon = curTabCon.replace('#', '.');
				
				tabBtns.removeClass('active');
				$tabCon.hide();

				curTabBtn.addClass('active');
				$(curTabCon).fadeIn();
			}
			
		}

		tabBtns.on('click', tabShowHide);
	}

})(jQuery);


// IIFE for local scope
(function(){
	// Function definitions
	function init() {
		// Initial Function calls
		SyntaxHighlighter.all();
		$('.demo-tab-nav-link').codeTab($('.demo-tab-con'));

		$('.main-nav-link').submenu();
	}

	// jQuery Document ready event
	(function($) {
		init();
	})(jQuery);
})();





