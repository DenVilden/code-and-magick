'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  // Рисует волшебника
  function renderWizard(arr) {
    similarWizardTemplate.querySelector('.setup-similar-label').textContent = arr.name;
    similarWizardTemplate.querySelector('.wizard-coat').style.fill = arr.colorCoat;
    similarWizardTemplate.querySelector('.wizard-eyes').style.fill = arr.colorEyes;

    return similarWizardTemplate.cloneNode(true);
  }

  // Получает волшебников с сервера
  function successHandler(wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    setup.querySelector('.setup-similar-list').appendChild(fragment);
    setup.querySelector('.setup-similar').classList.remove('hidden');
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

  window.load(successHandler, errorHandler);

})();
