(function($) {
	// Submenu
	$.fn.submenu = function() {
		var obj = $(this),
			submenu = obj.parent().find('ul');

		function toggleSubMenu(e) {
			e.preventDefault();
			var $elm = $(this),
				$elmSubmenu = $elm.parent().find('ul');

			if(!$elm.hasClass('active')) {
				if(obj.hasClass('active')) {
					obj.removeClass('active');
					submenu.removeClass('show');
				}

				$elm.addClass('active');
				$elmSubmenu.addClass('show');
			} else {
				$elm.removeClass('active');
				$elmSubmenu.removeClass('show');
			}
		}

		obj.on('click', toggleSubMenu);
	};

})(jQuery);
