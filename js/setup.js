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
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Создает объект волшебника
function createWizard() {
  var wizardProperty = {
    name: getRandomItem(WIZARD_FIRST_NAME) + ' ' + getRandomItem(WIZARD_LAST_NAME),
    coatColor: getRandomItem(WIZARD_COAT_COLOR),
    eyesColor: getRandomItem(WIZARD_EYES_COLOR)
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
  setup.querySelector('.setup-similar').classList.remove('hidden');
}
cloneWizard();


// Генерирует цвет мантии
function drawCoat() {
  var coat = getRandomItem(WIZARD_COAT_COLOR);
  setupWizard.querySelector('.wizard-coat').style.fill = coat;
  setup.querySelector('input[name=coat-color]').value = coat;
}
setupWizard.querySelector('.wizard-coat').addEventListener('click', drawCoat);

// Генерирует цвет глаз
function drawEyes() {
  var eyes = getRandomItem(WIZARD_EYES_COLOR);
  setupWizard.querySelector('.wizard-eyes').style.fill = eyes;
  setup.querySelector('input[name=eyes-color]').value = eyes;
}
setupWizard.querySelector('.wizard-eyes').addEventListener('click', drawEyes);

// Генерирует цвет фаербола
function drawFireball() {
  var fireball = getRandomItem(WIZARD_FIREBALL_COLOR);
  setup.querySelector('.setup-fireball-wrap').style.background = fireball;
  setup.querySelector('input[name=fireball-color]').value = fireball;
}
setup.querySelector('.setup-fireball-wrap').addEventListener('click', drawFireball);
