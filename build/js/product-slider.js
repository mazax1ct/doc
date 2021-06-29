$(document).ready(function() {
  if($('.js-product-slider').length) {
    $('.js-product-slider').slick({
      autoplay: true,
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
