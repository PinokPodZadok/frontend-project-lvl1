import readlineSync from 'readline-sync';
// Глобальная переменная для хранения имени пользователя.
let nameUser = 'unknow';
// Функция получения случайного числа в заданном пределе.
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
// Функция приветствия.
const messageWelcome = (textRule) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(textRule);
  nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!\n`);
};
export const engine = (textRule, ans, writeAnswer) => {
  messageWelcome(textRule);
  let win = 0;
  while (win < 3) {
    if (ans === writeAnswer) {
      console.log('Correct!');
      win += 1;
    } else {
      console.log(`'${ans}' is wrong answer ;(. Correct answer was '${writeAnswer}'.\nLet's try again, ${nameUser}!`);
      win = 0;
      break;
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
};
