'use strict';

(function () {
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_COAT_COLOR = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var WIZARD_FIREBALL_COLOR = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  // Цвет мантии
  var wizardCoat = document.querySelector('.wizard-coat');
  wizardCoat.addEventListener('click', function () {
    var newColor = window.random.getRandomElement(WIZARD_COAT_COLOR);
    wizardCoat.style.fill = newColor;
    window.wizard.onCoatChange(newColor);
  });

  // Цвет глаз
  var wizardEyes = document.querySelector('.wizard-eyes');
  wizardEyes.addEventListener('click', function () {
    var newColor = window.random.getRandomElement(WIZARD_EYES_COLOR);
    wizardEyes.style.fill = newColor;
    window.wizard.onEyesChange(newColor);
  });

  // Цвет фаербола
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  wizardFireball.addEventListener('click', function () {
    var newColor = window.random.getRandomElement(WIZARD_FIREBALL_COLOR);
    wizardFireball.style.backgroundColor = newColor;
    window.wizard.onFireballChange(newColor);
  });
})();
