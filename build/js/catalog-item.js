$(document).on('mouseenter', '.catalog-item__image-toggler', function () {
  $(this).parent('.catalog-item__image-togglers').find('.catalog-item__image-toggler').removeClass('is-active');
  $(this).addClass('is-active');
  $(this).closest('.catalog-item__image-block').find('img').attr('src', $(this).attr('data-src'));
  $(this).closest('.catalog-item__image-block').find('img').attr('srcset', $(this).attr('data-srcset'));
  return false;
});