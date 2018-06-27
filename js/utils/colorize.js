'use strict';

(function () {
  var setup = document.querySelector('.setup');

  window.colorize = function (element, name, arr) {
    element.addEventListener('click', function () {
      var color = window.random.getRandomItem(arr);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      setup.querySelector('input[name=' + name + '-color]').value = color;
    });
  };

})();
