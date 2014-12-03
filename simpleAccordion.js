(function ($) {//Not using "use strict", but the rules are implemented
	var f = 'simpleAccordion';
    $.fn[f] = function () {
		var c = f+'active',
			s = !0,
			t = this;
		$.each(arguments, function(a,b){
			b.big ? c = b : s = b;
		});
		function r(a){
			a.removeClass(c).next().slideUp();
		}
		r(t);
		return t.each(function (a, b) {
			b = $(b);
			b.on('click', function () {
				a = b.hasClass(c);
				s ? r(t) : r(b);
				if (!a) b.addClass(c).next().slideDown();
			});
		});
	};
})(jQuery);