$(document).on('click', '.js-scroll-to', function () {
  var top = $('#' + $(this).attr('data-href')).offset().top - $('.header').height() - 40;
  $('body, html').animate({scrollTop: top}, 1500);
  return false;
});
