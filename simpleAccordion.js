(function ($) {
	"use strict";
    $.fn.simpleAccordion = function () {
			var c = 'simpleAccordionactive', s = true, t = this;
			$.each(arguments, function(a,b){b.big ? c = b : s = b;});
			function r(a){a.removeClass(c).next().slideUp();}
			r(t);
			return t.each(function (a, b) {
				b = $(b);
				b.on('click', function () {
					a = b.hasClass(c);
					s ? r(t) : r(b);
					a ? null : b.addClass(c).next().slideDown();
				});
			});
	};
})(jQuery);