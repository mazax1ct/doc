var filtered = false;

$(document).ready(function() {
  if($('.js-catalog-slider').length) {
    $('.js-catalog-slider').each(function(index) {
      $(this).slick({
        autoplay: true,
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_left"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_right"/></svg></button>',
        mobileFirst: true,
        //dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        //asNavFor: $('.js-catalog-slider-nav[data-id="'+$(this).attr('data-id')+'"]'),
        responsive: [
          {
            breakpoint: 767,
            settings: {
              autoplay: false,
              dots: true,
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 1023,
            settings: {
              autoplay: false,
              dots: true,
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 1199,
            settings: {
              autoplay: false,
              dots: true,
              slidesToShow: 4,
              slidesToScroll: 4
            }
          },
        ]
      });
    });
  }

  /*if($('.js-catalog-slider-nav').length) {
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
        focusOnSelect: false,
        draggable: false,
        swipe: false,
        asNavFor: $('.js-catalog-slider[data-id="'+$(this).attr('data-id')+'"]')
      });
    });
  }*/
});

$(document).on('click', '.js-filter', function () {
  var filter = $(this).data('filter');
  var sliderId= $(this).parent().data('id');

  if (filtered === false) {
    if(!$(this).hasClass('is-active')) {
      $('.js-catalog-slider[data-id="'+sliderId+'"]').slick('slickFilter','[data-filter="'+filter+'"]');
      $('.js-catalog-slider-nav[data-id="'+sliderId+'"]').slick('slickFilter','[data-filter="'+filter+'"]');
      var slick_Count = $('.js-catalog-slider-nav[data-id="'+sliderId+'"]').slick('getSlick');
      /*if(slick_Count.slideCount < 6) {
        $('.js-catalog-slider-nav[data-id="'+sliderId+'"]').addClass('hidden');
      }*/
      $('.js-filter').removeClass('is-active');
      $(this).addClass('is-active');
      filtered = true;
    } else {
      $('.js-catalog-slider[data-id="'+sliderId+'"]').slick('slickUnfilter');
      //$('.js-catalog-slider-nav[data-id="'+sliderId+'"]').slick('slickUnfilter').removeClass('hidden');
      $(this).removeClass('is-active');
      filtered = false;
    }
  } else {
    if(!$(this).hasClass('is-active')) {
      $('.js-catalog-slider[data-id="'+sliderId+'"]').slick('slickUnfilter').slick('slickFilter','[data-filter="'+filter+'"]');
      //$('.js-catalog-slider-nav[data-id="'+sliderId+'"]').slick('slickUnfilter');
      //setTimeout(function() {
        /*$('.js-catalog-slider-nav[data-id="'+sliderId+'"]').slick('slickFilter','[data-filter="'+filter+'"]');
        var slick_Count = $('.js-catalog-slider-nav[data-id="'+sliderId+'"]').slick('getSlick');
        if(slick_Count.slideCount < 6) {
          $('.js-catalog-slider-nav[data-id="'+sliderId+'"]').addClass('hidden');
        } else {
          $('.js-catalog-slider-nav[data-id="'+sliderId+'"]').removeClass('hidden');
        }*/
        //console.log(slick_Count.slideCount);
      //},1000);
      $('.js-filter').removeClass('is-active');
      $(this).addClass('is-active');
      filtered = true;
    } else {
      $('.js-catalog-slider[data-id="'+sliderId+'"]').slick('slickUnfilter');
      //$('.js-catalog-slider-nav[data-id="'+sliderId+'"]').slick('slickUnfilter').removeClass('hidden');
      $(this).removeClass('is-active');
      filtered = false;
    }
  }

  return false;
});
