import readlineSync from 'readline-sync';
import * as engine from '../engine';

const brainCalc = () => {
  // Вывод приветствия, правила игры переданы как аргумент.
  const textRule = 'What is the result of the expression?\n';
  // Переменная для хранения правильного ответа.
  let writeAnswer = 'unknow';
  // Блок получения случайных операндов и числа для определения знака операции.
  const intSymbol = engine.getRandomInt(1, 3);
  const numFirst = engine.getRandomInt(1, 999);
  const numTwo = engine.getRandomInt(1, 999);
  // Функция для получения правильного ответа.
  const result = (symb, first, two) => {
    if (symb === 1) {
      return first + two;
    } if (symb === 2) {
      return first - two;
    }
    return first * two;
  };
    // Функция для получения символа операции.
  const symbol = (symb) => {
    let sym = '*';
    if (symb === 1) {
      sym = '+';
    }
    if (symb === 2) {
      sym = '-';
    }
    return sym;
  };
    // Присвоение глобальной переменной правильного значения.
  writeAnswer = result(intSymbol, numFirst, numTwo);
  // Вывод в терминал вопроса.
  console.log(`Question: ${numFirst} ${symbol(intSymbol)} ${numTwo} `);
  // Получение ответа пользователя.
  const ans = readlineSync.question('Your answer: ');
};
engine(textRule, Number(ans), writeAnswer);
export default brainCalc;
