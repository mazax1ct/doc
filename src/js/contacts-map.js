//яндекс карты
var contactsMap;
var locations = [
  [59.946734, 30.352430, 'Россия, Санкт-Петербург, ул. Чайковского 22', '<img src="images/content/contacts-map/img_1.jpg" alt="Россия, Санкт-Петербург, ул. Чайковского 22" />', '<p class="balloon__address">ул. Чайковского 22</p>', '<p class="balloon__work-time">Режим работы: с 12:00 до 21:00</p>', '<p class="balloon__credit">Возможность покупки в рассрочку</p>', '<p class="balloon__phone">Тел.: <a href="tel:+79219872251">+7(921)9872251</a></p>','<p class="balloon__way"><a href="#">Проложить маршрут</a></p>'],
  [59.914534, 30.436754, 'Россия, Санкт-Петербург, пр. Дальневосточный, 12', '<img src="images/content/contacts-map/img_1.jpg" alt="Россия, Санкт-Петербург, пр. Дальневосточный, 12" />', '<p class="balloon__address">пр. Дальневосточный, 12</p>', '<p class="balloon__work-time">Режим работы: с 10:00 до 20:00</p>', '', '<p class="balloon__phone">Тел.: <a href="tel:+79219872251">+7(921)9872251</a></p>','<p class="balloon__way"><a href="#">Проложить маршрут</a></p>'],
  [59.863328, 30.404083, 'Россия, Санкт-Петербург, ул. Пражская, 48/50', '<img src="images/content/contacts-map/img_1.jpg" alt="Россия, Санкт-Петербург, ул. Пражская, 48/50" />', '<p class="balloon__address">ул. Пражская, 48/50</p>', '<p class="balloon__work-time">Режим работы: с 11:30 до 20:30</p>', '', '<p class="balloon__phone">Тел.: <a href="tel:+79219872251">+7(921)9872251</a></p>','<p class="balloon__way"><a href="#">Проложить маршрут</a></p>']
];

setTimeout(function() {
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=9d7b529c-c833-4e6e-b74e-a623a6a75a71&lang=ru_RU&onload=init';
  document.getElementById('contacts_map').appendChild(elem);
}, 1000);


function init() {
  contactsMap = new ymaps.Map('contacts_map', {
    center: [59.937228, 30.311515],
    zoom: 12
  }, {
    searchControlProvider: 'yandex#search'
  });

  contactsMap.behaviors.disable('scrollZoom');

  var i, placemark, addressClass, address;

  var iconLayout = 'default#image';
  var iconImageHref = 'images/icons/map_pin.svg';
  var iconImageSize = [40, 45];
  var iconImageOffset = [-20, -45];

  for (i = 0; i < locations.length; i++) {
    placemark = new ymaps.Placemark([locations[i][0], locations[i][1]], {
      hintContent: locations[i][2],
      balloonContentBody: '<div class="balloon"><p class="balloon__title">Санкт-Петербург, ул. Чайковского, дом 22</p><div class="balloon__inner"><div class="balloon__image">'+ locations[i][3] +'</div><div class="balloon__info">'+ locations[i][4] + locations[i][5] + locations[i][6] + locations[i][7] + locations[i][8] +'</div></div></div>'
    }, {
      balloonMaxWidth: 520,
      iconLayout: iconLayout,
      iconImageHref: iconImageHref,
      iconImageSize: iconImageSize,
      iconImageOffset: iconImageOffset
    });

    contactsMap.geoObjects.add(placemark);
  }

  contactsMap.setBounds(contactsMap.geoObjects.getBounds(), {
    checkZoomRange: true,
    zoomMargin: 35
  });

  var body = document.querySelector('body');
  if (body.offsetWidth < 768) {
    contactsMap.behaviors.disable('drag');
    contactsMap.behaviors.enable('MultiTouch');
  }
}

function setCenter(coords) {
  contactsMap.setCenter(coords, 16);
}

$(document).on('click', '.js-to-map-point', function () {
  $('.js-to-map-point').removeClass('is-active');
  $(this).addClass('is-active');
  var lat = parseFloat($(this).attr('data-lat'));
  var lon = parseFloat($(this).attr('data-lon'));
  var centerPoint = [lat, lon];
  setCenter(centerPoint);
  return false;
});
