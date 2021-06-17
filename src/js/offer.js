$(document).on('click', '.offer__toggler button', function () {
  if($('body').width() < 1024) {
    $(this).toggleClass('is-active');
    $(this).parent().next('.offer__text').slideToggle();
    return false;
  }
});
