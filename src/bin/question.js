import {actual} from '../index';
import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
      };

const questionGame = () => {   
let win = 0;
while (win !== 3) {
    const num = getRandomInt(1, 999);
    console.log(`Question: ${num}`);
    const ans = readlineSync.question('Your answer: ')
    if (num % 2 === 0 && ans === 'yes') {
        console.log('Correct!');
        win =+ 1;
    } else if (num % 2 === 0 && ans === 'no')
    {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
        Let's try again, ${actual}!`);
        win = 1;
    } else if (num % 2 !== 0 && ans === 'yes') {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
        Let's try again, ${actual}!`);
        win = 1;
    } else if (num % 2 !== 0 && ans === 'no') {
        console.log('Correct!');
        win =+ 1;  
    }
}
return console.log(`Congratulations, ${actual}!`)
};
questionGame();
