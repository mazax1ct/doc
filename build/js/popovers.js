var lastFocusedElement; //переменная для последнего элемента в фокусе перед открытием поповера
var firstTabStop, lastTabStop; //переменные для первого и последнего элемента в фокусе в открытом попапе

//обработчик для работы с клавиатуры
function keyboardUse(e) {
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === firstTabStop) {
        e.preventDefault();
        lastTabStop.focus();
      }
    } else {
      if (document.activeElement === lastTabStop) {
        e.preventDefault();
        firstTabStop.focus();
      }
    }
  }

  if(e.keyCode === 27) {
    popoverClose();
  }
}

function popoverOpen(el) {
  lastFocusedElement = document.activeElement;
  //если было открыто меню
  if($('body').hasClass('menu-open')) {
    $('.main-menu').fadeOut();
    $('.main-menu__dropdown').fadeOut();
    $('.js-menu-toggler').removeClass('is-active').find('svg use').attr('xlink:href', '#burger');
    $('body').removeClass('menu-open');
  }

  //если уже открыт поповер
  if($('body').hasClass('popover-open')) {
    $('.popover.is-open').fadeOut(300, function() {
      $('.popover.is-open').removeClass('is-open');
    });
  }

  $('body').addClass('popover-open');
  $('.shade').fadeIn(300, function() {
    $('.shade').addClass('is-open');
    $('.' + el).fadeIn(300, function() {
      $('.' + el).addClass('is-open');
      var popover = $('.popover.is-open');

      //ловим все интерактивные элементы в поповере
      var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

      var focusableElements = popover.find(focusableElementsString);

      //собираем массив
      focusableElements = Array.prototype.slice.call(focusableElements);

      //выбираем первый элемент массива
      firstTabStop = focusableElements[0];

      //выбираем последний элемент массива
      lastTabStop = focusableElements[focusableElements.length - 1];

      //фокусируемся на первом
      firstTabStop.focus();

      //вешаем события на кнопки
      document.addEventListener('keydown', keyboardUse);
    });
  });
}

function popoverClose() {
  $('.popover.is-open').fadeOut(300, function() {
    $('.popover.is-open').removeClass('is-open');
    $('.shade').fadeOut(300, function() {
      $('.shade').removeClass('is-open');
      $('body').removeClass('popover-open').removeClass('compensate-for-scrollbar');
      $('#scroll-compensate').remove();
      document.removeEventListener('keydown', keyboardUse);
      lastFocusedElement.focus();
    });
  });
}

//открытие поповера
$(document).on('click', '.js-popover-opener', function () {
  if(!$('body').hasClass('compensate-for-scrollbar')) {
    scrollCompensate();
  }
  $('body').addClass('popover-open');
  popoverOpen($(this).attr('data-popover'));

  return false;
});

//закрытие поповера
$(document).on('click', '.js-popover-closer', function () {
  popoverClose();
  return false;
});

//закрытие поповера по клику на шейд
$(document).on('click', '.shade', function (evt) {
  if($(this).is(evt.target)) {
    popoverClose();
    //return false;
  }
});

//переключение табов
$(document).on('click', '.popover__tabs-nav-button', function () {
  $(this).closest('.popover__tabs-nav').find('.popover__tabs-nav-button').removeClass('is-active');
  $(this).addClass('is-active');

  $(this).closest('.popover__inner').find('.popover__tab').removeClass('is-active');
  $(this).closest('.popover__inner').find('.popover__tab[data-target='+$(this).attr('data-target')+']').addClass('is-active');

  return false;
});
