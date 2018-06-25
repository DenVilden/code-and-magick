'use strict';

var WIZARD_FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

setup.querySelector('.setup-similar').classList.remove('hidden');

var wizards = [];

var fragment = document.createDocumentFragment();
var setup = document.querySelector('.setup');
var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// Создает объект волшебника
function createWizard() {
  var wizardProperty = {
    name: window.getRandomItem(WIZARD_FIRST_NAME) + ' ' + window.getRandomItem(WIZARD_LAST_NAME),
    coatColor: window.getRandomItem(WIZARD_COAT_COLOR),
    eyesColor: window.getRandomItem(WIZARD_EYES_COLOR)
  };
  return wizardProperty;
}

// Рисует волшебника
function renderWizard(arr) {
  similarWizardTemplate.querySelector('.setup-similar-label').textContent = arr.name;
  similarWizardTemplate.querySelector('.wizard-coat').style.fill = arr.coatColor;
  similarWizardTemplate.querySelector('.wizard-eyes').style.fill = arr.eyesColor;

  return similarWizardTemplate.cloneNode(true);
}

// Собирает волшебников в массив и отрисовывает в DOM
function cloneWizard() {
  for (var i = 0; i < 4; i++) {
    wizards.push(createWizard());
    var clone = renderWizard(wizards[i]);
    fragment.appendChild(clone);
  }
  similarListElement.appendChild(fragment);
}
cloneWizard();
