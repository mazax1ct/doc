$(document).on('click', '.js-footer-toggler', function () {
  $(this).toggleClass('is-active');
  $(this).next('.footer__menu').slideToggle();
  return false;
});
