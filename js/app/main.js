// Global variabe for entire app
var app = app || {};

// my-plugins
(function($) {
	//my-tab
	$.fn.codeTab = function($tabCon) {
		var tabBtns = $(this),
			tabNav = tabBtns.parent().parent(),
			curTabbtn,
			curTabCon,
			curTabSet,
			curTabNavSet;



		function tabShowHide(e) {
			e.preventDefault();

			curTabBtn = $(this);
			curTabSet = curTabBtn.closest('.demo-ct');
			curTabNavSet = curTabBtn.closest('.demo-tab-nav');


			if(!curTabBtn.hasClass('active')) {
				curTabCon = curTabBtn.attr('href');
				curTabCon = curTabCon.replace('#', '.');
				
				curTabNavSet.find(tabBtns).removeClass('active');
				curTabSet.find($tabCon).hide();

				curTabBtn.addClass('active');
				curTabSet.find($(curTabCon)).fadeIn();
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
		$('.eq-box-in').eqBox();
		$('.eq-box-in-res').eqBox({
			res: true
		});
	}

	// jQuery Document ready event
	(function($) {
		init();
	})(jQuery);
})();





