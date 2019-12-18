import readlineSync from 'readline-sync';
import * as engine from '../engine';

const brainPrime = () => {
  // Вывод приветствия, правила игры переданы как аргумент.
  engine.massegeWelcome('Answer "yes" if given number is prime. Otherwise answer "no".\n');
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
    if (num === 1) {
      writeAnswer = false;
    } else {
      let index = 2;
      while (index < num - 1) {
        if (num % index === 0) {
          writeAnswer = false;
        }
        index += 1;
      }
      if (writeAnswer === false) {
        writeAnswer = 'no';
      } else {
        writeAnswer = 'yes';
      }
    }
    // Получение ответа пользователя.
    const ans = readlineSync.question('Your answer: ');
    /* Условие - если ответ пользователя совпадает с правильным,
        тогда вывести сообщение: "Correct" и добавить к переменной
        правильных ответов 1, иначе вывести сообщение об ошибке и
        сбросить переменную правильных ошибок на ноль. */
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
export default brainPrime;
