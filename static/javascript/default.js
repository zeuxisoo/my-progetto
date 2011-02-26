(function($) {

	// Custom plugin
	$.fn.hover_items = function() {
		$(this).each(function() {
			$(this).fadeTo("fast", 0.4).hover(function() {
				$(this).fadeTo("slow", 1);
			}, function() {
				$(this).fadeTo("slow", 0.4);
			});
		});
	}

	// Initial effect
	$(document).ready(function() {
		$('ul.works-list li img').hover_items();
		
		$('.works .back-page').click(function() {
			history.back(-1);
		})
		
		$("a[rel=group]").fancybox({
			'transitionIn'	:	'elastic',
			'transitionOut'	:	'elastic',
			'speedIn'		:	600, 
			'speedOut'		:	200, 
			'overlayShow'	:	false
		});
	});

})(jQuery)