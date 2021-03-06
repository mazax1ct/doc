//настройки fancybox
$.fancybox.defaults.autoFocus = false;
//$.fancybox.defaults.touch = false;
$.fancybox.defaults.hash = false;
$.fancybox.defaults.toolbar = false;
//$.fancybox.defaults.smallBtn = false;
$.fancybox.defaults.i18n.en.CLOSE = "Закрыть";
$.fancybox.defaults.i18n.en.NEXT = "Вперёд";
$.fancybox.defaults.i18n.en.PREV = "Назад";
//$.fancybox.defaults.closeExisting = true;


$(document).ready(function() {
  //кастомный селект
	$('.js-select').each(function() {
   var $p = $(this).closest('.select-wrapper__container');
   $(this).select2({
		 minimumResultsForSearch: Infinity,
     dropdownPosition: 'below',
     dropdownParent: $p,
     placeholder: $(this).attr('placeholder')
   });
	}).on("select2:open", function (e) {
		var $p = $(this).closest('.select-wrapper__container');
		$p.addClass('open');
	}).on("select2:close", function (e) {
		var $p = $(this).closest('.select-wrapper__container');
		$p.removeClass('open');
	});
});

//форма подписки
$(document).on('input', '.footer__subscribe-input', function () {
	if($(this).val().length > 0) {
		$('.footer__subscribe-submit').prop('disabled', '');
	}else{
		$('.footer__subscribe-submit').prop('disabled', 'disabled');
	}
});

//закрытие сообщения
$(document).on('click', '.js-warning-closer', function() {
  $('.warning').remove();
  $('body').removeClass('warning-page');
  return false;
});
