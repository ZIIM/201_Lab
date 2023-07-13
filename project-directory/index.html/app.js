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
  'Is JavaScript a programming language? (y/n)',
  'Guess a number between 1 and 10.',
  'What is one of my favorite colors?'
];
const answers = [
  ['y','yes'],
  ['y','yes'],
  ['y', 'yes'],
  ['n', 'no'],
  ['y','yes'],
  [''],
  ['red','green','blue','black', 'white']
];

function askQuestion(question, answer, maxAttempts) {
  let remainingAttempts = maxAttempts;
  let hint = '';
  if (question.indexOf('Guess a number between 1 and 10.') !== -1) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log('Shh, don\'t tell anyone, but this is my secret number: ' + randomNumber);
    while (remainingAttempts > 0) {
      let response = prompt(hint + question + ` (${remainingAttempts} attempts remaining)`);
      response = parseInt(response);
      remainingAttempts--;
      let isCorrect = false;
      if (response === randomNumber) {
        isCorrect = true;
      } else if (response < randomNumber) {
        hint = 'Too low\n\n';
      } else if (response > randomNumber) {
        hint = 'Too high\n\n';
      }
      if (isCorrect) {
        alert('Correct!');
        userScore++;
        break;
      } else if (remainingAttempts > 0) {
        alert('Incorrect! Try again.');
      } else {
        alert(`Sorry, you are out of attempts. The secret number was ${randomNumber}.`);
      }
    }
  } else {
    while (remainingAttempts > 0) {
      let response = prompt(question + ` (${remainingAttempts} attempts remaining)`);
      let isCorrect = false;
      for (let i = 0; i < answer.length; i++) {
        if (response.toLowerCase() === answer[i].toLowerCase()) {
          isCorrect = true;
          break;
        }
      }
      if (isCorrect) {
        alert('Correct!');
        userScore++;
        break;
      } else if (remainingAttempts > 0) {
        alert(`Sorry, that's incorrect. ${remainingAttempts} attempts remaining.`);
      } else {
        alert('Sorry, you are out of attempts.');
      }
      remainingAttempts--;
    }
  }
  alert(`Current score: ${userScore}`);
}

for (let i = 0; i < questions.length; i++) {
  askQuestion(questions[i], answers[i], i === 5 ? 4 : i === 6 ? 6 : 1);
}
