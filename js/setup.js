'use strict';

var WIZARD_FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var wizards = [];
var wizardObject = {};
var fragment = document.createDocumentFragment();

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupWizard = setup.querySelector('.setup-wizard');
var similarListElement = setup.querySelector('.setup-similar-list');
// setup.querySelector('.setup-similar').classList.remove('hidden');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// Генерирует случаный элемент массива
var getRandomItem = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var createWizard = function (wizard) {
  wizard.name = getRandomItem(WIZARD_FIRST_NAME) + ' ' + getRandomItem(WIZARD_LAST_NAME);
  wizard.coatColor = getRandomItem(WIZARD_COAT_COLOR);
  wizard.eyesColor = getRandomItem(WIZARD_EYES_COLOR);
};

// Рисует волшебника
var renderWizard = function (wizard) {
  similarWizardTemplate.querySelector('.setup-similar-label').textContent = wizard.name;
  similarWizardTemplate.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  similarWizardTemplate.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return similarWizardTemplate.cloneNode(true);
};

// Собирает волшебников в массив и отрисовывает в DOM
var cloneWizard = function (obj, arr) {
  for (var i = 0; i < 4; i++) {
    createWizard(obj);
    arr.push(obj);
    fragment.appendChild(renderWizard(arr[i]));
  }
  similarListElement.appendChild(fragment);
};
cloneWizard(wizardObject, wizards);

// Проверка на нажатие ESC
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

// Прячет окно настроек
var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

// Показывает окно настроек
var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Генерирует случайный цвет волшебника
var wizardColor = function () {
  var coat = getRandomItem(WIZARD_COAT_COLOR);
  var eyes = getRandomItem(WIZARD_EYES_COLOR);
  var fireball = getRandomItem(WIZARD_FIREBALL_COLOR);

  setupWizard.querySelector('.wizard-coat').style.fill = coat;
  setupWizard.querySelector('.wizard-eyes').style.fill = eyes;
  setup.querySelector('.setup-fireball-wrap').style.background = fireball;

  setup.querySelector('input[name=coat-color]').value = coat;
  setup.querySelector('input[name=eyes-color]').value = eyes;
  setup.querySelector('input[name=fireball-color]').value = fireball;
};

setupWizard.addEventListener('click', function () {
  wizardColor();
});
