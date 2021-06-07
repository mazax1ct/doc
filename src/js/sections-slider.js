$(document).ready(function() {
  if($('body').width() < 768) {
    if($('.js-sections-slider').length) {
      $('.js-sections-slider').slick({
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_left"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_right"/></svg></button>',
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }
  }
});
