$(document).on('click', '.faq__toggler', function () {
  $(this).toggleClass('is-active');
  $(this).next('.faq__body').slideToggle();
  return false;
});
