function popoverOpen(el) {
  $('body').addClass('popover-open');
  $('.shade').fadeIn(300, function() {
    $('.shade').addClass('is-open');
    $('.' + el).fadeIn(300, function() {
      $('.' + el).addClass('is-open');
    });
  });
}

function popoverClose() {
  $('.popover.is-open').fadeOut(300, function() {
    $('.popover.is-open').removeClass('is-open');
    $('.shade').fadeOut(300, function() {
      $('.shade').removeClass('is-open');
      $('body').removeClass('popover-open');
    });
  });
}

//открытие поповера
$(document).on('click', '.js-popover-opener', function () {
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
    return false;
  }
});
