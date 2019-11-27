import readlineSync from 'readline-sync';

const name = "inkognito";
const nameFun = () => {
    return name = readlineSync.question('May I have your name? ');
}

const brainGames = () => {
console.log('Welcome to the Brain Games!');
nameFun();
console.log(`Hello, ${name}!`);
console.log('');
};

const brainEven = () => {
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log('');
console.log(`Hello, ${name}!`);
console.log('');
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const questionGame = () => {
  const correctStr = () => console.log('Correct!');
  let win = 0;
  while (win < 3) {
    const num = getRandomInt(1, 999);
    console.log(`Question: ${num}`);
    const ans = readlineSync.question('Your answer: ');
    if (num % 2 === 0 && ans === 'yes') {
      correctStr();
      win += 1;
    } else if (num % 2 === 0 && ans === 'no') {
      console.log(`'${ans}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
      win = 0;
    } else if (num % 2 !== 0 && ans === 'yes') {
      console.log(`'${ans}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
      win = 0;
    } else if (num % 2 !== 0 && ans === 'no') {
      correctStr();
      win += 1;
    } else {
      console.log(`'${ans}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
      win = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
questionGame();
};

export { brainEven };
export { brainGames };
