'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = '#fff';
var CLOUD_SHADOW = 'rgba(0, 0, 0, 0.7)';
var GAP = 10;
var TEXT_HEIGHT = 90;
var TEXT_COLOR = '#000';
var TEXT_FONT = '16px PT Mono';
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var MAX_BAR_HEIGHT = 150;
var PLAYERS_BAR_COLOR = 'rgba(255, 0, 0, 1)';

var BAR_PADDING_LEFT = (BAR_WIDTH + BAR_GAP);
var CLOUD_PADDING_TOP = MAX_BAR_HEIGHT + TEXT_HEIGHT;


// Генерация облако результатов
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Вычисление макс результата
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

// Получение случайного цвета
var getRandomColor = function () {
  var r = 0;
  var g = 0;
  var b = Math.round(Math.random() * 255);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

// Генерация столбика результатов
// var renderBar = function (ctx, x, y, width, height) {
//   ctx.fillRect(x, y, width, height);
// };

// Генерация текста
var renderText = function (ctx, font, color) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 4);
};

window.renderStatistics = function (ctx, names, times) {
  // Отрисовывает тень облака
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_SHADOW);

  // Отрисовывает облако
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  // Отрисовывает текст список результатов
  renderText(ctx, TEXT_FONT, TEXT_COLOR);


  var maxTime = getMaxElement(times);

  // Гистограмма
  for (var i = 0; i < names.length; i++) {
    // Время в секундах
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + BAR_PADDING_LEFT * i, (CLOUD_PADDING_TOP - GAP) - MAX_BAR_HEIGHT * times[i] / maxTime);

    if (names[i] === 'Вы') {
      ctx.fillStyle = PLAYERS_BAR_COLOR;
    } else {
      ctx.fillStyle = getRandomColor();
    }
    // Отрисовывает столбик
    ctx.fillRect(CLOUD_X + BAR_GAP + BAR_PADDING_LEFT * i, (CLOUD_PADDING_TOP + GAP) - MAX_BAR_HEIGHT * times[i] / maxTime, BAR_WIDTH, MAX_BAR_HEIGHT * times[i] / maxTime);

    // Имена игроков
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + BAR_PADDING_LEFT * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 2);
  }
};
