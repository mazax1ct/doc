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
    setTimeout(function() {
      $('body').removeClass('popover-open').removeClass('menu-open');
      el.find('svg use').attr('xlink:href', '#burger');
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
