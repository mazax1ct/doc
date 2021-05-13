//яндекс карты
var contactsMap;

setTimeout(function() {
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=9d7b529c-c833-4e6e-b74e-a623a6a75a71&lang=ru_RU&onload=init';
  document.getElementById('contacts_map').appendChild(elem);
}, 2000);


function init() {
  contactsMap = new ymaps.Map('contacts_map', {
    center: [59.937228, 30.311515],
    zoom: 12
  }, {
    searchControlProvider: 'yandex#search'
  });

  contactsMap.behaviors.disable('scrollZoom');

  var i, placemark;

  placemark = new ymaps.Placemark([59.937228, 30.311515], {
    hintContent: 'Адрес'
  }, {
    iconLayout: 'default#image',
    /*iconImageHref: 'images/icons/pin_map_logo.svg',
    iconImageSize: [141, 141],
    iconImageOffset: [-71, -71]*/
  });

  contactsMap.geoObjects.add(placemark);

  var body = document.querySelector('body');
  if (body.offsetWidth < 768) {
    contactsMap.behaviors.disable('drag');
    contactsMap.behaviors.enable('MultiTouch');
  }
}
