import readlineSync from 'readline-sync';

// Глобальная переменная для хранения имени пользователя.
let nameUser = 'inkognito';
// Глобальная переменная для хранения правильного ответа.
let writeAnswer = '';
// Функция приветствия.
const massegeWelcome = () => {
  console.log('Welcome to the Brain Games!');
  nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!\n`);
};
// Функция получения случайного числа.
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
// Блок функций для сообщений.
const massegeCorrect = () => console.log('Correct!');
const massegeCongratulation = () => console.log(`Congratulations, ${nameUser}!`);
const massegeError = (a, b, c) => console.log(`'${a}' is wrong answer ;(. Correct answer was '${b}'.\nLet's try again, ${c}!`);

// Функция игры brain-games.
const brainGames = () => {
  massegeWelcome();
};

// Функция игры brain-even.
const brainEven = () => {
  // Вывод приветствия.
  massegeWelcome();
  // Вывод правил игры.
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
  // Функция игры.
  const evenGame = () => {
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
  // Запуск функции с игрой.
  evenGame();
};

// Функция игры brain-calc.
const brainCalc = () => {
  // Вывод приветствия.
  massegeWelcome();
  // Вывод правил игры.
  console.log('What is the result of the expression?\n');
  // Функция игры.
  const brainCalcGame = () => {
    // Переменная с количеством правильных ответов.
    let win = 0;
    // Цикл для подсчета правильных ответов.
    while (win < 3) {
      // Блок получения случайных операндов и числа для определения знака операции.
      const intSymbol = getRandomInt(1, 3);
      const numFirst = getRandomInt(1, 999);
      const numTwo = getRandomInt(1, 999);
      // Константа для получения правильного ответа.
      const result = (symb, first, two) => {
        if (symb === 1) {
          return first + two;
        } if (symb === 2) {
          return first - two;
        }
        return first * two;
      };
      // Константа для получения символа операции.
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
      massegeCongratulation();
    }
  };
  // Запуск функции с игрой.
  brainCalcGame();
};


// Функция игры brain-gcd
const brainGcd = () => {
  // Вывод приветствия.
  massegeWelcome();
  // Вывод правил игры.
  console.log('Find the greatest common divisor of given numbers.\n');
  // Функция игры.
  const gcdGame = () => {
  // Переменная с количеством правильных ответов.
    let win = 0;
    // Цикл для подсчета правильных ответов.
    while (win < 3) {
    // Блок получения случайных чисел.
      let numFirst = getRandomInt(1, 999);
      let numTwo = getRandomInt(1, 999);
      // Вывод в терминал вопроса.
      console.log(`Question: ${numFirst} ${numTwo} `);


      // Определение правильного ответа.
      while (numFirst !== numTwo) {
        if (numFirst > numTwo) {
          writeAnswer = numFirst - numTwo;
          numFirst =- numTwo;
        } else {
          writeAnswer = numTwo - numFirst;
          numTwo =- numFirst;
        }
        return writeAnswer;
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
  };
  gcdGame();
};


// Экспорт функций игр.
export {
  brainEven, brainGames, brainCalc, brainGcd,
};
