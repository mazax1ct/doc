//функция навешивания класса на фильтр
var filter_resize_scroll = function(e) {
  var hHeight = $('.header').height();
  var fOffsetTop = $(".filter").offset().top - hHeight;
  if($(window).scrollTop() > fOffsetTop) {
    $(".filter__inner").addClass("scrolled");
  } else {
    $(".filter__inner").removeClass("scrolled");
  }
};

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", filter_resize_scroll).on("resize", filter_resize_scroll);

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
      $('.catalog-list').addClass('open-filter');
    } else {
      this_.removeClass('is-active');
      this_.next('.filter__section-dropdown').removeClass('is-active');
      $('.catalog-list').removeClass('open-filter');
    }
  }
  return false;
});

$(document).on('click', '.catalog-list.open-filter', function () {
  $('.filter__section-toggler').removeClass('is-active');
  $('.filter__section-dropdown').removeClass('is-active');
  $('.catalog-list').removeClass('open-filter');
});

$(document).ready(function() {
  var filterHeight = $('.filter').height();
  $('.filter').css('minHeight', filterHeight);

  //функция навешивания класса на фильтр
  filter_resize_scroll();

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

  $('.js-sorting').each(function() {
   var $p = $(this).closest('.filter__sort');
   $(this).select2({
     minimumResultsForSearch: Infinity,
     dropdownPosition: 'below',
     dropdownParent: $p,
     placeholder: $(this).attr('placeholder')
   });
  }).on("select2:open", function (e) {
    var $p = $(this).closest('.filter__sort');
    $p.addClass('open');
    $('.filter__section-toggler').removeClass('is-active');
    $('.filter__section-dropdown').removeClass('is-active');
    $('.catalog-list').removeClass('open-filter');
  }).on("select2:close", function (e) {
    var $p = $(this).closest('.filter__sort');
    $p.removeClass('open');
  });
});
