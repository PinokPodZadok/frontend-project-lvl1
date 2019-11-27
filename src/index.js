import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log('');
const actual = readlineSync.question('May I have your name? ');
console.log(`Hello, ${actual}!`);
console.log('');
export default actual;
