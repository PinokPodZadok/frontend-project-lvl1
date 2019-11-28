import readlineSync from 'readline-sync';

let name = 'inkognito';
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const massegeWelcome = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
};
const massegeCorrect = () => console.log('Correct!');
let writeAnswer = '';
const massegeCongratulation = () => console.log(`Congratulations, ${name}!`);
const massegeError = (a, b, c) => console.log(`'${a}' is wrong answer ;(. Correct answer was '${b}'.\nLet's try again, ${c}!`);

const brainGames = () => {
  massegeWelcome();
};

const brainEven = () => {
  massegeWelcome();

  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

  const evenGame = () => {
    let win = 0;

    while (win < 3) {
      const num = getRandomInt(1, 999);
      console.log(`Question: ${num}`);
      num % 2 === 0 ? writeAnswer = 'yes' : writeAnswer = 'no';
      const ans = readlineSync.question('Your answer: ');

      if (ans === writeAnswer) {
        massegeCorrect();
        win += 1;
        } else {
          massegeError(ans, writeAnswer, name)
          win = 0;}
    }
    massegeCongratulation();
  };
  evenGame();
};

const brainCalc = () => {
  massegeWelcome();

  console.log('What is the result of the expression?\n');

  const brainCalcGame = () => {
    let win = 0;
    while (win < 3) {
      const intSymbol = getRandomInt(1, 3);
      const numFirst = getRandomInt(1, 999);
      const numTwo = getRandomInt(1, 999);

      const result = (intSymbol, numFirst, numTwo) => {
        if (intSymbol === 1) {
          return numFirst + numTwo;
        } if (intSymbol === 2) {
          return numFirst - numTwo;
        }
        return numFirst * numTwo;
      };

      const symbol = (intSymbol) => {
        let sym = '*';
        if (intSymbol === 1) {
          sym = '+';
        }
        if (intSymbol === 2) {
          sym = '-';
        }
        return sym;
      };
      writeAnswer = result(intSymbol, numFirst, numTwo);
      console.log(`Question: ${numFirst} ${symbol(intSymbol)} ${numTwo} `);

      const ans = readlineSync.question('Your answer: ');
      if (ans == writeAnswer) {
        massegeCorrect();
        win += 1;
      } else if (ans != writeAnswer) {
        massegeError(ans, writeAnswer, name);
        win = 4;
      }
    }
    if (win !== 4) {
      massegeCongratulation();
    }
  };
  brainCalcGame();
};

export { brainEven, brainGames, brainCalc };
