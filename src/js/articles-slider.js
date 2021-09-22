$(document).ready(function() {
  if($('.js-articles-slider').length) {
    $('.js-articles-slider').each(function(index) {
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
        centerMode: true,
        centerPadding: '0px',
        //asNavFor: $('.js-articles-slider-nav[data-id="'+$(this).attr('data-id')+'"]'),
        responsive: [
          {
            breakpoint: 767,
            settings: {
              dots: true
            }
          },
          {
            breakpoint: 1023,
            settings: {
              dots: true,
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
      });
    });
  }

  /*if($('.js-articles-slider-nav').length) {
    $('.js-articles-slider-nav').each(function(index) {
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
        asNavFor: $('.js-articles-slider[data-id="'+$(this).attr('data-id')+'"]')
      });
    });
  }*/
});
