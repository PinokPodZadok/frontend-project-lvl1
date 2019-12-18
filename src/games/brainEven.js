import readlineSync from 'readline-sync';
import * as eng from '../engine';
// eslint-disable-next-line import/prefer-default-export
export const brainEven = () => {
  eng.massegeWelcome('Answer "yes" if the number is even, otherwise answer "no".\n');

  let writeAnswer = 'unknow';
  // Переменная с количеством правильных ответов.
  let win = 0;
  // Цикл для подсчета правильных ответов.
  while (win < 3) {
    // Константа с случайным числом.
    const num = eng.getRandomInt(1, 999);
    // Вывод в терминал случайного числа.
    console.log(`Question: ${num}`);
    // Определение правильного ответа в зависимости от четности числа.
    if (num % 2 === 0) {
      writeAnswer = 'yes';
    } else {
      writeAnswer = 'no';
    }
    // Получение ответа пользователя.
    const ans = readlineSync.question('Your answer: ');
    /*  Условие - если ответ пользователя совпадает с правильным,
      тогда вывести сообщение: "Correct" и добавить к переменной
      правильных ответов 1, иначе вывести сообщение об ошибке и
      сбросить переменную правильных ошибок на ноль.  */
    if (ans === writeAnswer) {
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
