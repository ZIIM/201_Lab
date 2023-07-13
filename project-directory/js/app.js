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
