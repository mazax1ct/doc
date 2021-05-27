$(document).on('click', '.auth-nav__button', function () {
  $('.auth-nav__button').removeClass('is-active');
  $(this).addClass('is-active');
  $('.auth-block__tab').removeClass('is-active');
  $('.auth-block__tab[data-target='+$(this).attr('data-target')+']').addClass('is-active');
  return false;
});
