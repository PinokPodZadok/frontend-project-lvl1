import readlineSync from 'readline-sync';
// Переменная для хранения имени пользователя.
let nameUser = 'unknow';

// Функция приветствия.
export const massegeWelcome = (textRule) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(textRule);
  nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!\n`);
};
// Функция получения случайного числа в заданном пределе.
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
// Блок функций для сообщений.
export const massegeCorrect = () => console.log('Correct!');
export const massegeCongratulation = () => console.log(`Congratulations, ${nameUser}!`);
export const massegeError = (a, b) => console.log(`'${a}' is wrong answer ;(. Correct answer was '${b}'.\nLet's try again, ${nameUser}!`);
