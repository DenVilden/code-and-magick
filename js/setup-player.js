'use strict';

(function () {

  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var form = setup.querySelector('.setup-wizard-form');
  var coat = setup.querySelector('.wizard-coat');
  var eyes = setup.querySelector('.wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');

  // Цвет мантии
  window.colorize(coat, 'coat', WIZARD_COAT_COLOR);

  // Цвет глаз
  window.colorize(eyes, 'eyes', WIZARD_EYES_COLOR);

  // Цвет фаербола
  window.colorize(fireball, 'fireball', WIZARD_FIREBALL_COLOR);

  // Форма отправки волшебника
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    function successHandler() {
      setup.classList.add('hidden');
    }

    function errorHandler(errorMessage) {
      var node = document.createElement('div');

      node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
      node.style.position = 'absolute';
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '30px';

      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);
    }

    window.save(form, successHandler, errorHandler);
  });

})();
