$(document).on('click', '.search__vars-menu button', function () {
  $('.search__form-input').val($(this).html());
  return false;
});
