'use strict';

(function () {
  // Получение запроса
  window.load = function (URL, onSuccess, onError) {
    window.ajax.getResponse(onSuccess, onError, 'GET', URL);
  };

  // Отправка запроса
  window.save = function (onSuccess, onError, data) {
    var URL = 'https://js.dump.academy/code-and-magick';

    window.ajax.getResponse(onSuccess, onError, 'POST', URL, data);
  };
})();
