import readlineSync from 'readline-sync';

const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  
  const name = readlineSync.question('May I have your name? ');
  
  console.log(`Hello, ${name}!`);
  console.log('');
};

const brainEven = () => {
  
  console.log('Welcome to the Brain Games!');
  
  const name = readlineSync.question('May I have your name? ');
  
  console.log(`Hello, ${name}!`);
  console.log('');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log('');
  
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  
  const evenGame = () => {
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
  evenGame();
};

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  
  const name = readlineSync.question('May I have your name? ');
  
  console.log(`Hello, ${name}!`);
  console.log('');
  console.log('What is the result of the expression?');
  console.log('');
  
  const brainCalcGame = () => {

    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    
    

    let win = 0;
    while (win < 3) {
      const intSymbol = getRandomInt(1, 3);
      const numFirst = getRandomInt(1, 999);
      const numTwo = getRandomInt(1, 999);
      const correctStr = () => console.log('Correct!');

      const result = (intSymbol, numFirst, numTwo) => {
        if (intSymbol === 1) {
          return numFirst + numTwo;
        } else if (intSymbol === 2) {
          return numFirst - numTwo;
        } 
        return numFirst * numTwo;
      }
    
      const symbol = (intSymbol) => {
        let sym = '*';
        if (intSymbol === 1) {
          sym = '+' ;
        } 
        if ( intSymbol === 2) {
         sym = '-';
        }
        return sym;
      }
      const questionGame = result(intSymbol, numFirst, numTwo);
      console.log(`Question: ${numFirst} ${symbol(intSymbol)} ${numTwo} `);
      
      const ans = readlineSync.question('Your answer: ');
      if (ans == questionGame) {
        correctStr();
        win += 1;
      } else  if (ans != questionGame) {
        console.log(`'${ans}' is wrong answer ;(. Correct answer was '${questionGame}'.`);
        console.log(`Let's try again, ${name}!`);
        win = 4;
      }
    }
    if (win !== 4) {
    console.log(`Congratulations, ${name}!`);
    }
  }
    brainCalcGame();
  };

export { brainEven, brainGames, brainCalc };
