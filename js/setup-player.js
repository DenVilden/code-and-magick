'use strict';

var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setup = document.querySelector('.setup');
var setupWizard = setup.querySelector('.setup-wizard');
var coat = setupWizard.querySelector('.wizard-coat');
var eyes = setupWizard.querySelector('.wizard-eyes');
var fireball = setup.querySelector('.setup-fireball-wrap');

// Цвет мантии
window.colorize(coat, window.WIZARD_COAT_COLOR);

// Цвет глаз
window.colorize(eyes, window.WIZARD_EYES_COLOR);

// Цвет фаербола
window.colorize(fireball, WIZARD_FIREBALL_COLOR);

// Подставляет цвета элеметов волшебника в форму
setup.querySelector('.setup-submit').addEventListener('click', function () {
  setup.querySelector('input[name=coat-color]').value = coat.style.fill;
  setup.querySelector('input[name=eyes-color]').value = eyes.style.fill;
  setup.querySelector('input[name=fireball-color]').value = fireball.style.backgroundColor;
});
