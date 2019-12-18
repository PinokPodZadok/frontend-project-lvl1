import readlineSync from 'readline-sync';
import * as engine from '../engine';

const brainEven = () => {
  // Вывод приветствия, правила игры переданы как аргумент.
  engine.massegeWelcome('Answer "yes" if the number is even, otherwise answer "no".\n');
  // Переменная для хранения правильного ответа.
  let writeAnswer = 'unknow';
  // Переменная с количеством правильных ответов.
  let win = 0;
  // Цикл для подсчета правильных ответов.
  while (win < 3) {
    // Константа с случайным числом.
    const num = engine.getRandomInt(1, 999);
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
      engine.massegeCorrect();
      win += 1;
    } else {
      engine.massegeError(ans, writeAnswer);
      win = 0;
    }
  }
  // Вывести сообщение с поздравлением.
  engine.massegeCongratulation();
};
export default brainEven;
