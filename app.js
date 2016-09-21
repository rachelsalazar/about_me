// 'use strict';
//
// // asking the user's name
// var username = prompt('First off, what is your name?');
// console.log('The user\'s name is ' + username);
// alert('Hello ' + username + '. My name is Rachel, and I have a guessing game for you.');
//
// //Q#1 asking the user how long i've been coding
// var codingYears = prompt('I\'ve been coding for 3 years. Yes or No? Y or N?');
// var codingYears = codingYears.toUpperCase();
// console.log('The user\'s answer to if I\'ve been coding for 3 years was ' + codingYears);
//
// if (codingYears === 'N' || codingYears === 'NO') {
//   alert('YOU\'RE CORRECT! I have only been coding for about 2 months.');
// } else {
//   alert('Sorry, I\'ve actually only been coding for about 2 months!');
// };
//
// //Q#2 asking the user where I live
// var myResidence = prompt('I live in Seattle, WA. Yes or no? Y or N?');
// var myResidence = myResidence.toUpperCase();
// console.log('The user\'s answer to if I live in Seattle was ' + myResidence);
//
// if (myResidence === 'Y' || myResidence === 'YES') {
//   alert('Great job. I have lived here in Seattle a little over a year.');
// } else {
//   alert('You\'re wrong!:( But partially right... I would like to move to New York.');
// };
//
// //Q#3 asking the user if i want a dog
// var iWantAPuppy = prompt('I really, really, really want a dog. Yes or No? Y or N?');
// var iWantAPuppy = iWantAPuppy.toUpperCase();
// console.log('The user\'s answer to if I want a puppy was ' + iWantAPuppy);
//
// if (iWantAPuppy === 'Y' || iWantAPuppy === 'YES') {
//   alert('DUHHHHHHHHHHHHHHHHH, OF COURSE I DO!!!');
// } else {
//   alert('What is wrong with you? Everyone should want a doggy!');
// };
//
// //Q#4 asking the user if I walk to school
// var rideTheBus = prompt('I walk to school. Yes or No? Y or N?');
// var rideTheBus = rideTheBus.toUpperCase();
// console.log('The user\'s answer to if I want a puppy was ' + rideTheBus);
//
// if (rideTheBus === 'N' || rideTheBus === 'NO') {
//   alert('Correct, correct, correct. I take the bus or my hubby drops me off.');
// } else {
//   alert('NO! I ain\'t walking from Ballard!');
// };
//
// //Q# 5asking the user if I am tired of thinking of questions to ask
// var enoughQuestionsAlready = prompt('I am tired of thinking of questions to ask you. Yes or No? Y or N?');
// var enoughQuestionsAlready = enoughQuestionsAlready.toUpperCase();
// console.log('The user\'s answer to if I want a puppy was ' + enoughQuestionsAlready);
//
// if (enoughQuestionsAlready === 'Y' || enoughQuestionsAlready === 'YES') {
//   alert('YESSSS!! Thank goodness we are done! Now check out my portfolio.');
// } else {
//   alert('i. have. no. more. questions. Just go check out my portfolio page. Thanks for playing!!!');
// };

//Q#6 guess a number game
// alert('Here is a guessing game. You have 4 tries to get the correct answer. In the next window, please enter your guess of a number between 1 and 10.');
//
// var randomNumber = Math.floor(Math.random() * 10) + 1;
// console.log('The correct answer is ' + randomNumber);
//
// var numberGuesses = 0;
// var whileRunCount = 0;
//
// while (numberGuesses < 4 && guessNumber !== randomNumber) {
//   numberGuesses++;
//   var guessNumber = parseInt(prompt('Enter guess.'));
//   if (guessNumber !== 1 && guessNumber !== 2 && guessNumber !== 3 && guessNumber !== 4 && guessNumber !== 5 && guessNumber !== 6 && guessNumber !== 7 && guessNumber !== 8 && guessNumber !== 9 && guessNumber !== 10) {
//     alert('Sorry, that is not a number between 1 and 10.');
//   };
//   console.log('The user guessed the number ' + guessNumber);
//   if (guessNumber < randomNumber) {
//     alert('Your answer was too low.');
//   } else if (guessNumber > randomNumber) {
//     alert('Your answer was too high.')
//   } else {
//
//   };
//   whileRunCount = whileRunCount + 1;
//   console.log('The user has guessed ' + whileRunCount + ' time/s.');
// };
//
// if (whileRunCount <= 4) {
//   alert('Congrats!!! You guessed the right answer, which was ' + ' ' + randomNumber + '.');
// } else {
//   alert('Better luck next time. The correct answer was ' + ' ' + randomNumber);
// };

//Q#7 asking which instruments I play
alert('Ok, one more guessing game. You have 6 tries to guess at least one instrument I know how to play.');

var guesses= 0;
var guessing = true;
var instrument = ['clarinet', 'piano', 'trombone', 'trumpet', 'bells', 'flute', 'bass clarinet'];

while (guesses < 6 && guessing) {
  guesses++
  console.log('The user has guessed ' + guesses + ' times.');
  var instrumentGuess = prompt('Enter guess.').toLowerCase();
  for (var i = 0; i < instrument.length; i++ ) {
    if (instrumentGuess === instrument[i]) {
      alert('Yo, you got it right.');
      guessing = false;
    }
    console.log('The user guessed the instrument ' + instrumentGuess );
  }
};

if (guesses >= 6) {
  alert('Wow, you\'re really talented to have not guessed any of the instraments right... The list of instruments I know how to play are ' + instrument + '.');
};
