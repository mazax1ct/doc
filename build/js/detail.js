var offset_top = 20;

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
      swipe: false,
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
        offset_top: offset_top
      });
    }, 100);
  }

  //если блок для контента пустой, открепляем плавающее левое меню
  if ($(".js-content-with-sticky").length) {
    if ($('.js-content-with-sticky').html().trim() === '') {
      $(".js-sticky-block").trigger("sticky_kit:detach");
    }
  }

  $('.js-zoom').zoom({
    touch: false
  });
});

$(window).resize(function() {
  if ($("body").width() >= 1024) {
    $(".js-sticky-block").trigger("sticky_kit:detach");
    setTimeout(function() {
      $(".js-sticky-block").stick_in_parent({
        offset_top: offset_top
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
        offset_top: offset_top
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
  if($('.js-detail-slider .slick-active').hasClass('detail-slider__slide--video')) {
    $('.js-detail-slider video')[0].pause();
    $('.js-detail-slider .slick-active video')[0].play();
  }
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

$(document).on('click', '.detail__bottom-left-title button', function () {
  if($('body').width() < 1024) {
    $(this).toggleClass('is-active');
    $(this).parent().next('.detail__bottom-left-text').slideToggle();
    return false;
  }
});

$(document).on('click', '.detail__pair-tabs-button', function () {
  $('.detail__pair-tabs-button').removeClass('is-active');
  $(this).addClass('is-active');
  $('.detail__pair-tab').removeClass('is-active');
  $('.detail__pair-tab[data-target="'+$(this).attr('data-target')+'"]').addClass('is-active');
  return false;
});

$(document).on('click', '.js-scroll-to-title', function () {
  var titleOffsetTop = $('#' + $(this).attr('data-href')).offset().top;

  console.log(titleOffsetTop);

  if(titleOffsetTop > 0) {
    var top = titleOffsetTop - $('.header').height() - 40;
    $('body, html').animate({scrollTop: top}, 1000);
  } else {
    var top = $('.detail__pair-tabs').offset().top - $('.header').height() - 40;
    $('body, html').animate({scrollTop: top}, 1000);

    if($(this).attr('data-href') == 'female_ring') {
      $('.detail__pair-tabs-button[data-target="1"]').click();
    } else {
      $('.detail__pair-tabs-button[data-target="2"]').click();
    }
  }

  return false;
});
