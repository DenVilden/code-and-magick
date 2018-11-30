'use strict';

(function() {
  var setup = document.querySelector('.setup');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content;
  var similar = setup.querySelector('.setup-similar');
  var similarList = setup.querySelector('.setup-similar-list');

  // Рисует волшебника
  function renderWizard(arr) {
    similarWizardTemplate.querySelector('.setup-similar-label').textContent =
      arr.name;
    similarWizardTemplate.querySelector('.wizard-coat').style.fill =
      arr.colorCoat;
    similarWizardTemplate.querySelector('.wizard-eyes').style.fill =
      arr.colorEyes;

    return similarWizardTemplate.cloneNode(true);
  }

  // Получает волшебников с сервера
  window.render = function(data) {
    var value = data.length > 4 ? 4 : data.length;
    similarList.textContent = '';
    for (var i = 0; i < value; i++) {
      similarList.appendChild(renderWizard(data[i]));
    }
    similar.classList.remove('hidden');
  };
})();
