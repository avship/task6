"use strict";
const isNumber = function (num) {
  num = String(num);
  return num.match(/^\d+(\.\d+)?$/) !== null;
};
const decorator = function (n) {
  return function playNumberGame() {
    let testDigit = null;
    do {
      testDigit = prompt("Отгадайте число от 1 до 100");
      if (testDigit === null) {
        alert("Игра окончена!");
        return;
      }
      console.log(testDigit);
      if (!isNumber(testDigit)) {
        alert("Введи число!!!");
      }
    } while (!isNumber(testDigit));
    if (n == testDigit) {
      alert(`Поздравляю, Вы угадали!!!`);
    } else if (n > testDigit) {
      alert("Загаданное число больше");
      playNumberGame();
    } else {
      alert("Загаданное число меньше");
      playNumberGame();
    }
  };
};
//console.log(isNumber(null));
const gameFunc = decorator(Math.round(Math.random() * 100));
gameFunc();
