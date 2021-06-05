$(document).on('click', '.js-filter-opener', function () {
  $('body').addClass('popover-open');
  $('.filter__filter').fadeIn();
  $('.filter__filter').fadeIn(300, function() {
    $('.filter__filter').addClass('is-open');
  });
  return false;
});

$(document).on('click', '.js-filter-closer', function () {
  $('body').removeClass('popover-open');
  $('.filter__filter').fadeOut();
  return false;
});

$(document).on('click', '.filter__section-toggler', function () {
  var this_ = $(this);

  if($('body').width() < 1024) {
    this_.toggleClass('is-active');
    this_.next('.filter__section-dropdown').slideToggle();
  } else {
    if(!this_.hasClass('is-active')) {
      $('.filter__section-toggler').removeClass('is-active');
      $('.filter__section-dropdown').removeClass('is-active');

      this_.addClass('is-active');
      this_.next('.filter__section-dropdown').addClass('is-active');
    } else {
      this_.removeClass('is-active');
      this_.next('.filter__section-dropdown').removeClass('is-active');
    }
  }
  return false;
});

$(document).ready(function() {
  $('.js-price-slider').ionRangeSlider({
    skin: 'round',
    type: 'double',
    min: 10000,
    max: 585000,
    from: 55000,
    to: 450000,
    grid: false,
    hide_min_max: true
  });

  $('.js-weight-slider').ionRangeSlider({
    skin: 'round',
    type: 'double',
    min: 11,
    max: 23,
    from: 15,
    to: 20,
    grid: false,
    hide_min_max: true
  });
});
