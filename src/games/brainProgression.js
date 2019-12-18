import readlineSync from 'readline-sync';
import * as engine from '../engine';

const brainProgression = () => {
  // Вывод приветствия, правила переданы игры как аргумент.
  engine.massegeWelcome('What number is missing in the progression?\n');
  // Переменная для хранения правильного ответа.
  let writeAnswer = 'unknow';
  // Переменная с количеством правильных ответов.
  let win = 0;
  // Цикл для получения правильных ответов.
  while (win < 3) {
    // Константы и переменные для фомирования чисел и шага.
    const step = engine.getRandomInt(1, 10);
    let firstStep = engine.getRandomInt(1, 999);
    let stackQuestion = String(firstStep);
    writeAnswer = firstStep + (step * 5);
    // Цикл для для формирования вопроса.
    for (let i = 1; i < 10; i += 1) {
      /* Условие - если i = 5, тогда заменяем символ на " ..",
          добавляем к основному числу шаг, иначе в добавлям к строке символ
          основного числа плюс шаг и добавляем к основному числу шаг.
        */
      if (i === 5) {
        stackQuestion += ' ..';
        firstStep += step;
      }
      stackQuestion = `${stackQuestion} ${firstStep + step}`;
      firstStep += step;
    }
    // Вывод вопроса.
    console.log(`Question: ${stackQuestion} `);
    // Получение ответа пользователя.
    const ans = readlineSync.question('Your answer: ');
    /* Условие - если ответ пользователя совпадает с правильным,
        тогда вывести сообщение: "Correct" и добавить к переменной
        правильных ответов 1, иначе вывести сообщение об ошибке и
        сбросить переменную правильных ошибок на ноль. */
    if (Number(ans) === writeAnswer) {
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
export default brainProgression;
