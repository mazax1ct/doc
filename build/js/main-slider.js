$(document).ready(function() {
  if($('.js-main-slider').length) {
    $('.js-main-slider').slick({
      //autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      arrows: false,
      mobileFirst: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: $('.js-main-slider-nav')
    });
  }

  if($('.js-main-slider-nav').length) {
    $('.js-main-slider-nav').slick({
      //autoplay: true,
      autoplaySpeed: 5000,
      vertical: true,
      arrows: true,
      prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"></button>',
      nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"></button>',
      mobileFirst: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
      focusOnSelect: false,
      draggable: false,
      swipe: false,
      asNavFor: $('.js-main-slider')
    });
  }

  if($('.page-banner__video').length) {
    $('.page-banner__video')[0].play();
  }
});
