$(document).on('click', '.js-reset', function () {
  $('.cart-item__image input').attr('checked', '').prop('checked', false);
  return false;
});

$(document).ready(function () {
  if ($("body").width() >= 1024) {
    $(".js-sticky-block").trigger("sticky_kit:detach");
    setTimeout(function() {
      $(".js-sticky-block").stick_in_parent({
        offset_top: 200
      });
    }, 100);
  }

  //если блок для контента пустой, открепляем плавающее левое меню
  if ($(".js-content-with-sticky").length) {
    if ($('.js-content-with-sticky').html().trim() === '') {
      $(".js-sticky-block").trigger("sticky_kit:detach");
    }
  }
});

$(window).resize(function() {
  if ($("body").width() >= 1024) {
    $(".js-sticky-block").trigger("sticky_kit:detach");
    setTimeout(function() {
      $(".js-sticky-block").stick_in_parent({
        offset_top: 200
      });
    }, 100);
  }

  //если блок для контента пустой, открепляем плавающее левое меню
  if ($(".js-content-with-sticky").length) {
    if ($('.js-content-with-sticky').html().trim() === '') {
      $(".js-sticky-block").trigger("sticky_kit:detach");
    }
  }
});

$(window).on("orientationchange", function(event) {
  if ($("body").width() >= 1024) {
    $(".js-sticky-block").trigger("sticky_kit:detach");
    setTimeout(function() {
      $(".js-sticky-block").stick_in_parent({
        offset_top: 200
      });
    }, 100);
  }

  //если блок для контента пустой, открепляем плавающее левое меню
  if ($(".js-content-with-sticky").length) {
    if ($('.js-content-with-sticky').html().trim() === '') {
      $(".js-sticky-block").trigger("sticky_kit:detach");
    }
  }
});

//ввод промокода
$(document).on('input', '.summary__promocode-input', function () {
	if($(this).val().length > 0) {
		$('.summary__promocode-apply').prop('disabled', '');
	}else{
		$('.summary__promocode-apply').prop('disabled', 'disabled');
	}
});
