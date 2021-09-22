$(document).ready(function() {
  if($('.js-shop-photos-slider').length) {
    $('.js-shop-photos-slider').each(function(index) {
      $(this).slick({
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_left"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_right"/></svg></button>',
        mobileFirst: true,
        //dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        //asNavFor: $('.js-shop-photos-slider-nav[data-id="'+$(this).attr('data-id')+'"]'),
        centerMode: true,
        centerPadding: '20px',
        responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              centerPadding: '28.22916%',
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          },
        ]
      });
    });
  }

  /*if($('.js-shop-photos-slider-nav').length) {
    $('.js-shop-photos-slider-nav').each(function(index) {
      $(this).slick({
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_left"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_right"/></svg></button>',
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: false,
        draggable: false,
        swipe: false,
        asNavFor: $('.js-shop-photos-slider[data-id="'+$(this).attr('data-id')+'"]')
      });
    });
  }*/
});
