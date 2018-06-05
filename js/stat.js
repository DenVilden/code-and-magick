'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var COLOR_WHITE = '#fff';
var COLOR_GRAY = 'rgba(0, 0, 0, 0.7)';
var COLOR_RED = 'rgba(255, 0, 0, 1)';
var COLOR_BLACK = '#000';
var GAP = 10;
var TEXT_HEIGHT = 90;
var TEXT_FONT = '16px PT Mono';
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var MAX_BAR_HEIGHT = 150;
var BAR_MARGIN_LEFT = (BAR_WIDTH + BAR_GAP);
var CLOUD_PADDING_TOP = MAX_BAR_HEIGHT + TEXT_HEIGHT;

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
  var a = Math.random() * (1 - 0.1) + 0.1;
  return 'rgba(0, 0, 255, ' + a + ')';
};

// Генерация облако результатов
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Генерация столбика результатов
var renderBar = function (ctx, name, x, y) {
  ctx.fillStyle = (name === 'Вы') ? COLOR_RED : getRandomColor();
  ctx.fillRect(CLOUD_X + x, (CLOUD_PADDING_TOP + GAP) - y, BAR_WIDTH, y);
};

// Генерация времени в секундах
var renderTime = function (ctx, time, x, y) {
  ctx.fillText(Math.round(time), CLOUD_X + x, (CLOUD_PADDING_TOP - GAP) - y);
};

// Генерация имен игроков
var renderName = function (ctx, name, x) {
  ctx.fillStyle = COLOR_BLACK;
  ctx.fillText(name, CLOUD_X + x, CLOUD_Y + CLOUD_HEIGHT - GAP * 2);
};

// Генерация текста список результатов
var renderText = function (ctx, font, color) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 4);
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxElement(times);

  // Отрисовывает тень облака
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, COLOR_GRAY);

  // Отрисовывает облако
  renderCloud(ctx, CLOUD_X, CLOUD_Y, COLOR_WHITE);

  // Отрисовывает текст список результатов
  renderText(ctx, TEXT_FONT, COLOR_BLACK);

  // Гистограмма
  for (var i = 0; i < names.length; i++) {
    var barWidth = BAR_GAP + BAR_MARGIN_LEFT * i;
    var barHeight = MAX_BAR_HEIGHT * times[i] / maxTime;

    // Время в секундах
    renderTime(ctx, times[i], barWidth, barHeight);

    // Отрисовывает столбик
    renderBar(ctx, names[i], barWidth, barHeight);

    // Имена игроков
    renderName(ctx, names[i], barWidth);
  }
};
