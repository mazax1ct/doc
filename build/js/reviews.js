$(document).ready(function() {
  if($('.js-review-slider').length) {
    $('.js-review-slider').each(function(index) {
      $(this).slick({
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_left"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_right"/></svg></button>',
        mobileFirst: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    });
  }
});

$(document).on('click', '.js-scroll-to-reviews', function () {
  var top = $('.reviews-form').offset().top - $('.header').height();
  $('body, html').animate({scrollTop: top}, 1500);
});

$(document).on('click', '.js-review-more', function () {
  var _this = $(this);
  if(!_this.hasClass('is-active')){
    _this.addClass('is-active');
    _this.find('span').text('Скрыть');
    _this.prev('.review__detail-text').slideDown();
  }else{
    _this.removeClass('is-active');
    _this.find('span').text('Читать полностью');
    _this.prev('.review__detail-text').slideUp();
  }
  return false;
});
