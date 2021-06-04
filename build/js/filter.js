$(document).on('click', '.js-filter-opener', function () {
  $('body').addClass('popover-open');
  $('.filter__filter').fadeIn();
  return false;
});

$(document).on('click', '.js-filter-closer', function () {
  $('body').removeClass('popover-open');
  $('.filter__filter').fadeOut();
  return false;
});

$(document).on('click', '.filter__section-toggler', function () {
  $(this).toggleClass('is-active');
  $(this).next('.filter__section-dropdown').slideToggle();
  return false;
});
