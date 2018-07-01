'use strict';

(function () {
  var CLOUD = {
    width: 420,
    height: 270,
    x: 100,
    y: 10
  };
  var COLOR = {
    white: '#fff',
    gray: 'rgba(0, 0, 0, 0.7)',
    red: 'rgba(255, 0, 0, 1)',
    black: '#000'
  };
  var TEXT = {
    font: '16px PT Mono',
    height: 90
  };
  var BAR = {
    width: 40,
    gap: 50,
    maxHeight: 150
  };
  var GAP = 10;
  var BAR_MARGIN_LEFT = BAR.width + BAR.gap;
  var CLOUD_PADDING_TOP = BAR.maxHeight + TEXT.height;

  /**
   * Генерация облака результатов
   * @param  {[type]} ctx
   * @param  {[type]} x
   * @param  {[type]} y
   * @param  {[type]} color
   */
  function renderCloud(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD.width, CLOUD.height);
  }

  /**
   * Генерация столбика результатов
   * @param  {[type]} ctx
   * @param  {[type]} name
   * @param  {[type]} x
   * @param  {[type]} y
   */
  function renderBar(ctx, name, x, y) {
    ctx.fillStyle = name === 'Вы' ? COLOR.red : window.random.getRandomColor();
    ctx.fillRect(CLOUD.x + x, CLOUD_PADDING_TOP + GAP - y, BAR.width, y);
  }

  /**
   * Генерация времени в секундах
   * @param  {[type]} ctx
   * @param  {[type]} time
   * @param  {[type]} x
   * @param  {[type]} y
   */
  function renderTime(ctx, time, x, y) {
    ctx.fillText(Math.round(time), CLOUD.x + x, CLOUD_PADDING_TOP - GAP - y);
  }

  /**
   * Генерация имен игроков
   * @param  {[type]} ctx
   * @param  {[type]} name
   * @param  {[type]} x
   */
  function renderName(ctx, name, x) {
    ctx.fillStyle = COLOR.black;
    ctx.fillText(name, CLOUD.x + x, CLOUD.y + CLOUD.height - GAP * 2);
  }

  /**
   * Генерация текста список результатов
   * @param  {[type]} ctx
   * @param  {[type]} font
   * @param  {[type]} color
   */
  function renderText(ctx, font, color) {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', CLOUD.x + GAP * 2, CLOUD.y + GAP * 2);
    ctx.fillText('Список результатов:', CLOUD.x + GAP * 2, CLOUD.y + GAP * 4);
  }

  /**
   * Отрисовывает стастику
   * @param  {[type]} ctx
   * @param  {[type]} names
   * @param  {[type]} times
   */
  window.renderStatistics = function (ctx, names, times) {
    var maxTime = window.random.getMaxElement(times);

    // Отрисовывает тень облака
    renderCloud(ctx, CLOUD.x + GAP, CLOUD.y + GAP, COLOR.gray);

    // Отрисовывает облако
    renderCloud(ctx, CLOUD.x, CLOUD.y, COLOR.white);

    // Отрисовывает текст список результатов
    renderText(ctx, TEXT.font, COLOR.black);

    // Гистограмма
    for (var i = 0; i < names.length; i++) {
      var barWidth = BAR.gap + BAR_MARGIN_LEFT * i;
      var barHeight = (BAR.maxHeight * times[i]) / maxTime;

      // Время в секундах
      renderTime(ctx, times[i], barWidth, barHeight);

      // Отрисовывает столбик
      renderBar(ctx, names[i], barWidth, barHeight);

      // Имена игроков
      renderName(ctx, names[i], barWidth);
    }
  };
})();
