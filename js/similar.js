'use strict';

(function () {
  var coatColor;
  var eyesColor;
  var wizards = [];

  // Пристваивает баллы частям волшебника
  function getRank(wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  }

  // Показывает похожих волшебников
  var updateWizards = function () {
    window.render(
        wizards.slice().sort(function (left, right) {
          var rankDiff = getRank(right) - getRank(left);
          if (rankDiff === 0) {
            rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
          }
          return rankDiff;
        })
    );
  };

  window.wizard.onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  window.wizard.onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  // Получает волшебников с сервера
  function successHandler(data) {
    wizards = data;
    updateWizards();
  }

  // При ошибке
  function errorHandler(errorMessage) {
    var node = document.createElement('div');

    node.style =
      'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  }

  window.load(successHandler, errorHandler);
})();
