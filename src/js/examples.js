$(document).ready(function() {
  if($('.js-examples-slider').length) {
    $('.js-examples-slider').slick({
      arrows: true,
      prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_left"/></svg></button>',
      nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_right"/></svg></button>',
      mobileFirst: true,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
});

$(document).on('click', '.examples-list__item', function () {
  $('.examples-list__item').removeClass('is-active');
  $(this).addClass('is-active');

  $('.js-examples-slider').slick('slickGoTo', $(this).index());

  return false;
});

$('.js-examples-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  $('.examples-list__item').removeClass('is-active');

  $('.examples-list__item').eq(currentSlide).addClass('is-active');
});
