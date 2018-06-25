'use strict';

(function () {

  window.getRandomColor = function () {
    var a = Math.random() * (1 - 0.1) + 0.1;
    return 'rgba(0, 0, 255, ' + a + ')';
  };

  window.getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  window.getRandomItem = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };
})();
