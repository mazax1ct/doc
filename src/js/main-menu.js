//открытие главного меню
$(document).on('click', '.js-menu-toggler', function () {
  var el = $(this);
  el.toggleClass('is-active');

  if(el.hasClass('is-active')) {
    //если открыт поповер
    if($('body').hasClass('popover-open')) {
      $('.popover.is-open').fadeOut(300, function() {
        $('.popover.is-open').removeClass('is-open');
        $('.shade').fadeOut(300, function() {
          $('.shade').removeClass('is-open');
          $('body').removeClass('popover-open').removeClass('compensate-for-scrollbar');
          $('#scroll-compensate').remove();
        });
      });
    }

    $('body').addClass('popover-open').addClass('menu-open');
    el.find('svg use').attr('xlink:href', '#close');
    setTimeout(function() {
      $('.main-menu').fadeIn();
    },300);
  } else {
    $('.main-menu').fadeOut();
    $('.main-menu__dropdown').fadeOut();
    el.find('svg use').attr('xlink:href', '#burger');
    setTimeout(function() {
      $('body').removeClass('popover-open').removeClass('menu-open');
    },300);
  }

  return false;
});

//открытие второго уровня меню на мобиле
$(document).on('click', '.main-menu__opener', function () {
  $(this).parent().find('.main-menu__dropdown').fadeIn();
  return false;
});

//закрытие второго уровня меню на мобиле
$(document).on('click', '.main-menu__back', function () {
  $(this).closest('.main-menu__dropdown').fadeOut();
  return false;
});

//шейд при ховере на пункт меню с выпадашкой
$('.main-menu__item.root').hover(
  function() {
    $('.page-content').addClass('shaded');
  }, function() {
    $('.page-content').removeClass('shaded');
  }
);
