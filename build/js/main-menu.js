$(document).on('click', '.main-menu__opener', function () {
  $(this).parent().find('.main-menu__dropdown').fadeIn();
  return false;
});

$(document).on('click', '.main-menu__back', function () {
  $(this).closest('.main-menu__dropdown').fadeOut();
  return false;
});
