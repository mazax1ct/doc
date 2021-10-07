var scrolled;
var limit;
var header = $('.header'),
		scrollPrev = 0;

$(document).ready(function() {
	scrolled = $(window).scrollTop();
	limit = $('.header').height();

	if($('.page-banner').length) {
		limit = $('.page-banner').height() - $('.header').height();
	}

  if ( scrolled > 0 ) {
		header.addClass('scrolled');
	} else {
		header.removeClass('scrolled');
	}

	if ( scrolled > limit && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});


$(window).scroll(function() {
	scrolled = $(window).scrollTop();
	limit = $('.header').height();

	if($('.page-banner').length) {
		limit = $('.page-banner').height() - $('.header').height();
	}

  if ( scrolled > 0 ) {
		header.addClass('scrolled');
	} else {
		header.removeClass('scrolled');
	}

	if ( scrolled > limit && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});
