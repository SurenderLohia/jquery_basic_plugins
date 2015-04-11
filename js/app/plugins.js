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

				if($elmSubmenu.length > 0) {
					$elm.addClass('active');
					$elmSubmenu.addClass('show');
				}
			} else {
				$elm.removeClass('active');
				$elmSubmenu.removeClass('show');
			}
		}

		obj.on('click', toggleSubMenu);

		return this;
	};

	// Equal height column
	$.fn.eqBox = function(options) {
		var settings = $.extend({
			res: false,
			mob: 768 // mobile breakpoint for one column 
		}, options);

		var o = this,
			$o = $(o),
			oLen = o.length,
			maxH = 0,
			curH = 0,
			wWidth = $(window).width(),
			$item,
			i;

		function getSetH() {
			// Get max height
			for(i = 0; i < oLen; i += 1) {
				$item = $(o[i]);
				curH = $item.height();
				if(curH > maxH)  {
					maxH = curH;
				}
			}

			// Set max height
			$o.height(maxH + 'px');
		}

		function removeEqH() {
			$o.removeAttr('style');
		}

		function funTrigger() {
			if(!settings.res) {
				getSetH();	
			} else {
				if(settings.mob < wWidth) {
					getSetH();
				}
			}
		}
		
		$(window).resize(function() {
			wWidth = $(window).width();
			removeEqH();
			funTrigger();
		});

		funTrigger();

		return $o;
	};

})(jQuery);
