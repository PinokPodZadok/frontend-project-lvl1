import readlineSync from 'readline-sync';
import * as engine from '../engine';

const brainCalc = () => {
  // Вывод приветствия, правила игры переданы как аргумент.
  engine.massegeWelcome('What is the result of the expression?\n');
  // Переменная для хранения правильного ответа.
  let writeAnswer = 'unknow';
  // Переменная с количеством правильных ответов.
  let win = 0;
  // Цикл для подсчета правильных ответов.
  while (win < 3) {
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
    /* Если ответ пользователя совпадает с правильным ответом,
      тогда вывести сообщение: "Correct" и добавить к переменной
      правильных ответов 1, иначе вывести сообщение об ошибке и
      присвоить переменной правильных ответов значение 4,
      для выхода из цикла и завершения игры. */
    if (Number(ans) === writeAnswer) {
      engine.massegeCorrect();
      win += 1;
    } else if (Number(ans) !== writeAnswer) {
      engine.massegeError(ans, writeAnswer);
      win = 4;
    }
  }
  /* Если переменная количества правильных ответов меньше 4,
    вывести сообщение с поздравлением. */
  if (win !== 4) {
    // Вывести сообщение с поздравлением.
    engine.massegeCongratulation();
  }
};
export default brainCalc;
