'use strict';

var WIZARD_FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


var wizards = [];

var fragment = document.createDocumentFragment();
var setup = document.querySelector('.setup');
var setupWizard = setup.querySelector('.setup-wizard');
var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// Генерирует случаный элемент массива
var getRandomItem = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Создает объект волшебника
var createWizard = function () {
  var wizardProperty = {
    name: getRandomItem(WIZARD_FIRST_NAME) + ' ' + getRandomItem(WIZARD_LAST_NAME),
    coatColor: getRandomItem(WIZARD_COAT_COLOR),
    eyesColor: getRandomItem(WIZARD_EYES_COLOR)
  };
  return wizardProperty;
};

// Рисует волшебника
var renderWizard = function (obj) {
  similarWizardTemplate.querySelector('.setup-similar-label').textContent = obj.name;
  similarWizardTemplate.querySelector('.wizard-coat').style.fill = obj.coatColor;
  similarWizardTemplate.querySelector('.wizard-eyes').style.fill = obj.eyesColor;

  return similarWizardTemplate.cloneNode(true);
};

// Собирает волшебников в массив и отрисовывает в DOM
var cloneWizard = function () {
  for (var i = 0; i < 4; i++) {
    createWizard();
    wizards.push(createWizard());
    var clone = wizards[i];
    fragment.appendChild(renderWizard(clone));
  }
  similarListElement.appendChild(fragment);
  setup.querySelector('.setup-similar').classList.remove('hidden');
};
cloneWizard();


// Генерирует цвет мантии
var wizardCoat = function () {
  var coat = getRandomItem(WIZARD_COAT_COLOR);
  setupWizard.querySelector('.wizard-coat').style.fill = coat;
  setup.querySelector('input[name=coat-color]').value = coat;
};
setupWizard.querySelector('.wizard-coat').addEventListener('click', wizardCoat);

// Генерирует цвет глаз
var wizardEyes = function () {
  var eyes = getRandomItem(WIZARD_EYES_COLOR);
  setupWizard.querySelector('.wizard-eyes').style.fill = eyes;
  setup.querySelector('input[name=eyes-color]').value = eyes;
};
setupWizard.querySelector('.wizard-eyes').addEventListener('click', wizardEyes);

// Генерирует цвет фаербола
var wizardFireball = function () {
  var fireball = getRandomItem(WIZARD_FIREBALL_COLOR);
  setup.querySelector('.setup-fireball-wrap').style.background = fireball;
  setup.querySelector('input[name=fireball-color]').value = fireball;
};
setup.querySelector('.setup-fireball-wrap').addEventListener('click', wizardFireball);
