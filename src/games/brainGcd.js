import readlineSync from 'readline-sync';
import * as eng from '../engine';

const brainGcd = () => {
// Вывод приветствия, правила переданы игры как аргумент.
  eng.massegeWelcome('Find the greatest common divisor of given numbers.\n');
  // Переменная для хранения правильного ответа.
  let writeAnswer = 'unknow';
  // Переменная с количеством правильных ответов.
  let win = 0;
  // Цикл для подсчета правильных ответов.
  while (win < 3) {
  // Блок получения случайных чисел.
    const numFirst = eng.getRandomInt(1, 999);
    const numTwo = eng.getRandomInt(1, 999);
    // Переменная счетчика
    let i = numFirst;
    // Определение правильного ответа.
    while (i > 0) {
      if (numFirst % i === 0 && numTwo % i === 0) {
        writeAnswer = i;
        break;
      }
      i -= 1;
    }
    // Вывод в терминал вопроса.
    console.log(`Question: ${numFirst} ${numTwo} `);
    // Получение ответа пользователя.
    const ans = readlineSync.question('Your answer: ');
    /* Условие - если ответ пользователя совпадает с правильным,
        тогда вывести сообщение: "Correct" и добавить к переменной
        правильных ответов 1, иначе вывести сообщение об ошибке и
        сбросить переменную правильных ошибок на ноль. */
    if (Number(ans) === writeAnswer) {
      eng.massegeCorrect();
      win += 1;
    } else {
      eng.massegeError(ans, writeAnswer, eng.nameUser);
      win = 0;
    }
  }
  // Вывести сообщение с поздравлением.
  eng.massegeCongratulation();
};
export default brainGcd;
