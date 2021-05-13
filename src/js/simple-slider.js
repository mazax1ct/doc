$(document).ready(function() {
  if($('.js-simple-slider').length) {
    $('.js-simple-slider').slick({
      arrows: false,
      mobileFirst: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
});
