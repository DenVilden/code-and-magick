'use strict';

window.random = (function () {
  return {
    getRandomColor: function () {
      var a = Math.random() * (1 - 0.1) + 0.1;
      return 'rgba(0, 0, 255, ' + a + ')';
    },

    getMaxElement: function (arr) {
      var maxElement = arr[0];

      for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
      return maxElement;
    },

    getRandomItem: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  };
})();
