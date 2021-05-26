$(document).on('click', '.js-password-toggler', function () {
  $(this).toggleClass('is-active');

  if($(this).hasClass('is-active')) {
    $(this).find('svg use').attr('xlink:href', '#hide_pass');
    $(this).closest('label').find('input').attr('type', 'text');
  } else {
    $(this).find('svg use').attr('xlink:href', '#show_pass');
    $(this).closest('label').find('input').attr('type', 'password');
  }
  return false;
});
