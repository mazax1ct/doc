var header = $('.header'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();

  if ( scrolled > 0 ) {
		header.addClass('scrolled');
	} else {
		header.removeClass('scrolled');
	}

	if ( scrolled > $('.header').height() && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});
