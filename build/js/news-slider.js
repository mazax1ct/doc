$(document).ready(function() {
  if($('.js-news-slider').length) {
    $('.js-news-slider').each(function(index) {
      $(this).slick({
        arrows: false,
        mobileFirst: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20px',
        //asNavFor: $('.js-news-slider-nav[data-id="'+$(this).attr('data-id')+'"]'),
        responsive: [
          {
            breakpoint: 767,
            settings: {
              initialSlide: 1,
              //dots: false,
              arrows: true,
              prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_left"/></svg></button>',
              nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_right"/></svg></button>',
              slidesToShow: 2,
              slidesToScroll: 1,
              centerPadding: '60px'
            }
          },
          {
            breakpoint: 1899,
            settings: {
              arrows: true,
              prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_left"/></svg></button>',
              nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_right"/></svg></button>',
              slidesToShow: 2,
              slidesToScroll: 1,
              centerPadding: '128px'
            }
          },
        ]
      });
    });
  }

  /*if($('.js-news-slider-nav').length) {
    $('.js-news-slider-nav').each(function(index) {
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
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: false,
        draggable: false,
        swipe: false,
        asNavFor: $('.js-news-slider[data-id="'+$(this).attr('data-id')+'"]'),
        responsive: [
          {
            breakpoint: 767,
            settings: {
              initialSlide: 1,
              arrows: true,
              prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_left"/></svg></button>',
              nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_right"/></svg></button>',
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });
    });
  }*/
});
