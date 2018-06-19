'use strict';

var WIZARD_FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];
var wizardObject = {};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var fragment = document.createDocumentFragment();
var similarListElement = userDialog.querySelector('.setup-similar-list');
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
