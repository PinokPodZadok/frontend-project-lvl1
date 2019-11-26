import readlineSync from 'readline-sync';
import { actual } from '../index';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
const questionGame = () => {
  let win = 0;
  while (win < 3) {
    const num = getRandomInt(1, 999);
    console.log(`Question: ${num}`);
    const ans = readlineSync.question('Your answer: ');
    if (num % 2 === 0 && ans === 'yes') {
      console.log('Correct!');
      win += 1;
    } else if (num % 2 === 0 && ans === 'no') {
      console.log(`'${ans}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${actual}!`);
      win = 0;
    } else if (num % 2 !== 0 && ans === 'yes') {
      console.log(`'${ans}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${actual}!`);
      win = 0;
    } else if (num % 2 !== 0 && ans === 'no') {
      console.log('Correct!');
      win += 1;
    } else {
      console.log(`'${ans}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${actual}!`);
      win = 0;
    }
  }
  console.log(`Congratulations, ${actual}!`);
};
questionGame();
