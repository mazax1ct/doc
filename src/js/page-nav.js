$(document).ready(function () {
  if($('body').width() > 767) {
    function getSections () {
      var arr = [];

      $('.main-page__section').each(function() {
        var sectionId = $(this).attr('id'),
            sectionTitle = $(this).attr('data-title'),
            sectionClass = '';


        if($(this).hasClass('main-page__section--dark')) {
          sectionClass = 'dark';
        } else {
          sectionClass = 'light';
        }

        var section = {
          id: sectionId,
          class: sectionClass,
          title: sectionTitle
        }

        arr.push(section);

      });

      return arr;
    }

    var sections = getSections ();

    function makeMenu (arr, id, cls, title) {
      var menu = '';

      menu += '<div class="page-nav"><div class="page-nav__menu"><ul class="page-nav__list page-nav__list--' + cls + '">';

      arr.forEach((item, i) => {
          menu += '<li class="page-nav__item"><a class="page-nav__link '+ (item.id === id ? 'page-nav__link--active' : '') +'" href="#'+ item.id +'">'+ item.title +'</a></li>';
      });

      menu += '</ul></div></div>';

      return menu;
    }

    sections.forEach((item, i) => {
      var menu = makeMenu (sections, item.id, item.class, item.title);
      $('#' + item.id).append(menu);
    });
  }
});

$(document).on('click', '.page-nav__link', function () {
  let scrollTop = $($(this).attr('href')).offset().top - $('.header').height();
  $('html, body').animate({
    scrollTop: scrollTop
  }, 500);
  return false;
});
