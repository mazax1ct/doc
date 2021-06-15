$(document).ready(function() {
  if($('.js-simple-slider-2').length) {
    $('.js-simple-slider-2').each(function(index) {
      $(this).slick({
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_left"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_right"/></svg></button>',
        mobileFirst: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: $('.js-simple-slider-nav-2[data-id="'+$(this).attr('data-id')+'"]'),
        centerMode: true,
        centerPadding: '20px',
        responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: '0px',
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          },
        ]
      });
    });
  }

  if($('.js-simple-slider-nav-2').length) {
    $('.js-simple-slider-nav-2').each(function(index) {
      $(this).slick({
        fade: true,
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_left"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_right"/></svg></button>',
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: false,
        draggable: false,
        swipe: false,
        asNavFor: $('.js-simple-slider-2[data-id="'+$(this).attr('data-id')+'"]')
      });
    });
  }
});
