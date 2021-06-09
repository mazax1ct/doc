$(document).on('mouseenter focusin', '.catalog-item__image-toggler', function () {
  $(this).parent('.catalog-item__image-togglers').find('.catalog-item__image-toggler').removeClass('is-active');
  $(this).addClass('is-active');
  $(this).closest('.catalog-item__image-block').find('img').attr('src', $(this).attr('data-src'));
  $(this).closest('.catalog-item__image-block').find('img').attr('srcset', $(this).attr('data-srcset'));
  return false;
});

$(document).on('mouseenter focusin', '.pair__image-toggler', function () {
  $(this).parent('.pair__image-togglers').find('.pair__image-toggler').removeClass('is-active');
  $(this).addClass('is-active');
  $(this).closest('.pair__image-block').find('img').attr('src', $(this).attr('data-src'));
  $(this).closest('.pair__image-block').find('img').attr('srcset', $(this).attr('data-srcset'));
  return false;
});
