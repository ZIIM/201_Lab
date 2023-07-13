'use strict';

console.log('Hello from the console!!');
let userScore = 0;
let isReady = prompt('Would you like to play a guessing game?');

if (isReady === 'y' || isReady === 'yes') {
  alert('Great! First: respond to these questions and statements with \'y\' or \'n\'.');
} else {
  alert('Too bad, I love games!');
}

const questions = [
  'Is the sun a star? (y/n)',
  'Do dogs have tails? (y/n)',
  'Can birds fly? (y/n)',
  'Is the Earth flat? (y/n)',
  'Is JavaScript a programming language? (y/n)'
];
const answers = [
  'y',
  'y',
  'y',
  'n',
  'y'
];

let response1 = prompt(questions[0]);
if (response1.toLowerCase()[0] === answers[0]) {
  alert('Correct!');
  userScore++;
} else {
  alert('Sorry thats incorrect.');
}
alert(`Current score: ${userScore}`);

let response2 = prompt(questions[1]);
if (response2.toLowerCase()[0] === answers[1]) {
  alert('Correct!');
  userScore++;
} else {
  alert('Sorry thats incorrect.');
}
alert(`Current score: ${userScore}`);

let response3 = prompt(questions[2]);
if (response3.toLowerCase()[0] === answers[2]) {
  alert('Correct!');
  userScore++;
} else {
  alert('Sorry thats incorrect.');
}
alert(`Current score: ${userScore}`);

let response4 = prompt(questions[3]);
if (response4.toLowerCase()[3] === answers[3]) {
  alert('Correct!');
  userScore++;
} else {
  alert('Sorry thats incorrect.');
}
alert(`Current score: ${userScore}`);

let response5 = prompt(questions[4]);
if (response5.toLowerCase()[0] === answers[4]) {
  alert('Correct!');
  userScore++;
} else {
  alert('Sorry thats incorrect.');
}
alert(`Current score: ${userScore}`);
// NUUMBER GUESSING GAME pt.1
const randomNumber = Math.floor((Math.random()* 10)) + 1;

  const MAX_NUMBER_GUESSES = 4; 
  const MAX_TRIVIA_GUESSES = 6; 
  let numNumberGuesses = 0;
  let numTriviaGuesses = 0;
  let correctNumberAnswer = false;
  let correctTriviaAnswer = false;
  let userAnswer = '';
  let hint = '';

  console.log('Shh, don\'t tell anyone, but this is my secret number: ' + randomNumber);

  // NUMBER GUESSING GAME pt.2
  do {
    userAnswer = prompt(hint + 'Guess a number between 1 and 10. ' + (MAX_NUMBER_GUESSES - numNumberGuesses) + ' guesses remaining.');
    userAnswer = parseInt(userAnswer);
    numNumberGuesses += 1;
    if (userAnswer === randomNumber) {
      correctNumberAnswer = true;
    } else if (userAnswer < randomNumber) {
      hint = 'Too low\n\n';
    } else {
      hint = 'Too high\n\n';
    }
  } while (numNumberGuesses < MAX_NUMBER_GUESSES && !correctNumberAnswer);

  if (correctNumberAnswer) {
    alert('You are correct!')
  } else {
    alert('All wrong. The number was: ' + randomNumber);
  }


// ARRAY QUESTION
const multipleGuessQuestion = 'What is one of my favorite colors?';
const multipleGuessAnswers = ['red', 'green', 'blue', 'black', 'white'];

for (let attempts = 6; attempts > 0; attempts--) {
  let response = prompt(multipleGuessQuestion);
  if(multipleGuessAnswers.includes(response)) {
    userScore++;
    alert('Correct!');
    break;
  } else {
    alert(`Incorrect, you have ${attempts} attempts left`);
  }
}

alert(`Game over! Here's your score: ${userScore}`);