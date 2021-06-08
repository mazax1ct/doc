$(document).ready(function() {
  if($('.js-detail-slider').length) {
    $('.js-detail-slider').slick({
      arrows: true,
      prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_left"/></svg></button>',
      nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_right"/></svg></button>',
      mobileFirst: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            arrows: false,
            infinite: false
          }
        },
      ]
    });
  }

  if ($("body").width() >= 1024) {
    $(".js-sticky-block").trigger("sticky_kit:detach");
    setTimeout(function() {
      $(".js-sticky-block").stick_in_parent({
        offset_top: 200
      });
    }, 100);
  }

  //если блок для контента пустой, открепляем плавающее левое меню
  if ($(".js-content-with-sticky").length) {
    if ($('.js-content-with-sticky').html().trim() === '') {
      $(".js-sticky-block").trigger("sticky_kit:detach");
    }
  }
});

$(window).resize(function() {
  if ($("body").width() >= 1024) {
    $(".js-sticky-block").trigger("sticky_kit:detach");
    setTimeout(function() {
      $(".js-sticky-block").stick_in_parent({
        offset_top: 200
      });
    }, 100);
  }

  //если блок для контента пустой, открепляем плавающее левое меню
  if ($(".js-content-with-sticky").length) {
    if ($('.js-content-with-sticky').html().trim() === '') {
      $(".js-sticky-block").trigger("sticky_kit:detach");
    }
  }
});

$(window).on("orientationchange", function(event) {
  if ($("body").width() >= 1024) {
    $(".js-sticky-block").trigger("sticky_kit:detach");
    setTimeout(function() {
      $(".js-sticky-block").stick_in_parent({
        offset_top: 200
      });
    }, 100);
  }

  //если блок для контента пустой, открепляем плавающее левое меню
  if ($(".js-content-with-sticky").length) {
    if ($('.js-content-with-sticky').html().trim() === '') {
      $(".js-sticky-block").trigger("sticky_kit:detach");
    }
  }
});

$(document).on('click', '.detail__thumb', function () {
  $('.detail__thumb').removeClass('is-active');
  $(this).addClass('is-active');
  $('.js-detail-slider').slick('slickGoTo', $(this).index());
  return false;
});

$('.js-detail-slider').on('afterChange', function(slick, currentSlide) {
  $('.detail__thumb').removeClass('is-active').eq(currentSlide.currentSlide).addClass('is-active');
});

$(document).on('click', '.detail__tab-toggler', function () {
  $(this).toggleClass('is-active');
  $(this).next('.detail__tab').slideToggle();
  return false;
});

$(document).on('click', '.detail__tabs-nav-button', function () {
  $('.detail__tabs-nav-button').removeClass('is-active');
  $(this).addClass('is-active');
  $('.detail__tab').removeClass('is-active');
  $('.detail__tab[data-target="'+$(this).attr('data-target')+'"]').addClass('is-active');
  return false;
});
