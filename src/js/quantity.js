$(document).on('click', '.js-quantity-decrease', function () {
  if(parseInt($(this).parent().find('input').val()) > 1) {
    $(this).parent().find('input').val(parseInt($(this).parent().find('input').val()) - 1);
  }
  return false;
});

$(document).on('click', '.js-quantity-increase', function () {
  $(this).parent().find('input').val(parseInt($(this).parent().find('input').val()) + 1);
  return false;
});
