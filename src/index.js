import readlineSync from 'readline-sync';

// Глобальная переменная для хранения имени пользователя.
let nameUser = 'nameUser';
// Функция приветствия.
const massegeWelcome = (textRule) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(textRule);
  nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!\n`);
};
// Функция получения случайного числа в заданном пределе.
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
// Блок функций для сообщений.
const massegeCorrect = () => console.log('Correct!');
const massegeCongratulation = () => console.log(`Congratulations, ${nameUser}!`);
const massegeError = (a, b, c) => console.log(`'${a}' is wrong answer ;(. Correct answer was '${b}'.\nLet's try again, ${c}!`);

// Функция игры brain-games.
const brainGames = () => {
  massegeWelcome('');
};

// Функция игры brain-even.
const brainEven = () => {
  // Вывод приветствия, правила переданы игры как аргумент.
  massegeWelcome('Answer "yes" if the number is even, otherwise answer "no".\n');
  // Переменная для хранения правильного ответа.
  let writeAnswer = 'unknow';
  // Переменная с количеством правильных ответов.
  let win = 0;
  // Цикл для подсчета правильных ответов.
  while (win < 3) {
    // Константа с случайным числом.
    const num = getRandomInt(1, 999);
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
    /* Условие - если ответ пользователя совпадает с правильным,
      тогда вывести сообщение: "Correct" и добавить к переменной
      правильных ответов 1, иначе вывести сообщение об ошибке и
      сбросить переменную правильных ошибок на ноль. */
    if (ans === writeAnswer) {
      massegeCorrect();
      win += 1;
    } else {
      massegeError(ans, writeAnswer, nameUser);
      win = 0;
    }
  }
  // Вывести сообщение с поздравлением.
  massegeCongratulation();
};

// Функция игры brain-calc.
const brainCalc = () => {
  // Вывод приветствия, правила переданы игры как аргумент.
  massegeWelcome('What is the result of the expression?\n');
  // Переменная для хранения правильного ответа.
  let writeAnswer = 'unknow';
  // Переменная с количеством правильных ответов.
  let win = 0;
  // Цикл для подсчета правильных ответов.
  while (win < 3) {
    // Блок получения случайных операндов и числа для определения знака операции.
    const intSymbol = getRandomInt(1, 3);
    const numFirst = getRandomInt(1, 999);
    const numTwo = getRandomInt(1, 999);
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
      massegeCorrect();
      win += 1;
    } else if (Number(ans) !== writeAnswer) {
      massegeError(ans, writeAnswer, nameUser);
      win = 4;
    }
  }
  /* Если переменная количества правильных ответов меньше 4,
    вывести сообщение с поздравлением. */
  if (win !== 4) {
    // Вывести сообщение с поздравлением.
    massegeCongratulation();
  }
};

// Функция игры brain-gcd
const brainGcd = () => {
  // Вывод приветствия, правила переданы игры как аргумент.
  massegeWelcome('Find the greatest common divisor of given numbers.\n');
  // Переменная для хранения правильного ответа.
  let writeAnswer = 'unknow';
  // Переменная с количеством правильных ответов.
  let win = 0;
  // Цикл для подсчета правильных ответов.
  while (win < 3) {
    // Блок получения случайных чисел.
    const numFirst = getRandomInt(1, 999);
    const numTwo = getRandomInt(1, 999);
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
      massegeCorrect();
      win += 1;
    } else {
      massegeError(ans, writeAnswer, nameUser);
      win = 0;
    }
  }
  // Вывести сообщение с поздравлением.
  massegeCongratulation();
};

// Функция игры brain-progression
const brainProgression = () => {
  // Вывод приветствия, правила переданы игры как аргумент.
  massegeWelcome('What number is missing in the progression?\n');
  // Переменная для хранения правильного ответа.
  let writeAnswer = 'unknow';
  // Переменная с количеством правильных ответов.
  let win = 0;
  // Цикл для получения правильных ответов.
  while (win < 3) {
    // Константы и переменные для фомирования чисел и шага.
    const step = getRandomInt(1, 10);
    let firstStep = getRandomInt(1, 999);
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
      massegeCorrect();
      win += 1;
    } else {
      massegeError(ans, writeAnswer, nameUser);
      win = 0;
    }
  }
  // Вывести сообщение с поздравлением.
  massegeCongratulation();
};

// Функция игры brain-prime.
const brainPrime = () => {
  // Вывод приветствия, правила переданы игры как аргумент.
  massegeWelcome('Answer "yes" if given number is prime. Otherwise answer "no".\n');
  // Переменная для хранения правильного ответа.
  let writeAnswer = 'unknow';
  // Переменная с количеством правильных ответов.
  let win = 0;
  // Цикл для подсчета правильных ответов.
  while (win < 3) {
    // Константа с случайным числом.
    const num = getRandomInt(1, 999);
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
      massegeCorrect();
      win += 1;
    } else {
      massegeError(ans, writeAnswer, nameUser);
      win = 0;
    }
  }
  // Вывести сообщение с поздравлением.
  massegeCongratulation();
};

// Экспорт функций игр.
export {
  brainGames, brainEven, brainCalc, brainGcd, brainProgression, brainPrime,
};
