$(document).ready(function() {
  if($('.js-catalog-slider').length) {
    $('.js-catalog-slider').each(function(index) {
      $(this).slick({
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_left"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_right"/></svg></button>',
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: $('.js-catalog-slider-nav[data-id="'+$(this).attr('data-id')+'"]'),
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
        ]
      });
    });
  }

  if($('.js-catalog-slider-nav').length) {
    $('.js-catalog-slider-nav').each(function(index) {
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
        focusOnSelect: true,
        asNavFor: $('.js-catalog-slider[data-id="'+$(this).attr('data-id')+'"]')
      });
    });
  }
});
