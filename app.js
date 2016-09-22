'use strict';

//scoring the game
var score = 0;

// asking the user's name
var username = prompt('First off, what is your name?');
console.log('The user\'s name is ' + username);
alert('Hello ' + username + '. My name is Rachel, and I have a guessing game for you.');

//Q#1 asking the user how long i've been coding
var codingYears = prompt('I\'ve been coding for 3 years. Yes or No? Y or N?');
codingYears = codingYears.toUpperCase();
console.log('The user\'s answer to if I\'ve been coding for 3 years was ' + codingYears);

if (codingYears === 'N' || codingYears === 'NO') {
  alert('YOU\'RE CORRECT! I have only been coding for about 2 months.');
  score = score + 1;
  console.log('The user\'s score is ' + score + '/7.');
} else {
  alert('Sorry, I\'ve actually only been coding for about 2 months!');
  console.log('The user\'s score is ' + score + '/7.');
};

//Q#2 asking the user where I live
var myResidence = prompt('I live in Seattle, WA. Yes or no? Y or N?');
myResidence = myResidence.toUpperCase();
console.log('The user\'s answer to if I live in Seattle was ' + myResidence);

if (myResidence === 'Y' || myResidence === 'YES') {
  alert('Great job. I have lived here in Seattle a little over a year.');
  score = score + 1;
  console.log('The user\'s score is ' + score + '/7.');
} else {
  alert('You\'re wrong!:( But partially right... I would like to move to New York.');
  console.log('The user\'s score is ' + score + '/7.');
};

//Q#3 asking the user if i want a dog
var iWantAPuppy = prompt('I really, really, really want a dog. Yes or No? Y or N?');
iWantAPuppy = iWantAPuppy.toUpperCase();
console.log('The user\'s answer to if I want a puppy was ' + iWantAPuppy);

if (iWantAPuppy === 'Y' || iWantAPuppy === 'YES') {
  alert('DUHHHHHHHHHHHHHHHHH, OF COURSE I DO!!!');
  score = score + 1;
  console.log('The user\'s score is ' + score + '/7.');
} else {
  alert('What is wrong with you? Everyone should want a doggy!');
  console.log('The user\'s score is ' + score + '/7.');
};

//Q#4 asking the user if I walk to school
var rideTheBus = prompt('I walk to school. Yes or No? Y or N?');
rideTheBus = rideTheBus.toUpperCase();
console.log('The user\'s answer to if I ride the bus is ' + rideTheBus);

if (rideTheBus === 'N' || rideTheBus === 'NO') {
  alert('Correct, correct, correct. I take the bus or my hubby drops me off.');
  score = score + 1;
  console.log('The user\'s score is ' + score + '/7.');
} else {
  alert('NO! I ain\'t walking from Ballard!');
  console.log('The user\'s score is ' + score + '/7.');
};

//Q# 5asking the user if I am tired of thinking of questions to ask
var numberToes = prompt('I have 6 toes on each foot. Yes or No? Y or N?');
numberToes = numberToes.toUpperCase();
console.log('The user\'s answer to how many toes I have is ' + numberToes);

if (numberToes === 'Y' || numberToes === 'YES') {
  alert('Um... no. I only have 10 total.');
  console.log('The user\'s score is ' + score + '/7.');
} else {
  alert('I\'m normal... Only 10 toes.');
  score = score + 1;
  console.log('The user\'s score is ' + score + '/7.');
};

// Q#6 guess a number game
alert('Alright, here is a guessing game. You have 4 tries to get the correct answer. In the next window, please enter your guess of a number between 1 and 10.');

var randomNumber = Math.floor(Math.random() * 10) + 1;
console.log('The correct answer is ' + randomNumber);

var numberGuesses = 0;
var whileRunCount = 0;

while (numberGuesses < 4 && guessNumber !== randomNumber) {
  numberGuesses++;
  var guessNumber = parseInt(prompt('Enter guess.'));
  if (guessNumber !== 1 && guessNumber !== 2 && guessNumber !== 3 && guessNumber !== 4 && guessNumber !== 5 && guessNumber !== 6 && guessNumber !== 7 && guessNumber !== 8 && guessNumber !== 9 && guessNumber !== 10) {
    alert('Sorry, that is not a number between 1 and 10.');
  };
  console.log('The user guessed the number ' + guessNumber);
  if (guessNumber < randomNumber) {
    alert('Your answer was too low.');
  } else if (guessNumber > randomNumber) {
    alert('Your answer was too high.');
  } else {

  };
  whileRunCount = whileRunCount + 1;
  console.log('The user has guessed ' + whileRunCount + ' time/s.');
}

if (guessNumber === randomNumber) {
  alert('Congrats!!! You guessed the right answer, which was ' + ' ' + randomNumber + '.');
  score = score + 1;
  console.log('The user\'s score is ' + score + '/7.');
} else {
  alert('Better luck next time. The correct answer was ' + ' ' + randomNumber + '.');
  console.log('The user\'s score is ' + score + '/7.');
};

//Q#7 asking which instruments I play
alert('Ok, one more guessing game. You have 6 tries to guess at least one instrument I know how to play.');

var guesses = 0;
var guessing = true;
var instrument = ['clarinet', 'piano', 'trombone', 'trumpet', 'bells', 'flute', 'bass clarinet'];

while (guesses < 6 && guessing) {
  guesses++;
  console.log('The user has guessed ' + guesses + ' times.');
  var instrumentGuess = prompt('Enter guess.').toLowerCase();
  for (var i = 0; i < instrument.length; i++ ) {
    if (instrumentGuess === instrument[i]) {
      alert('Yo, you got it right. I play ' + instrument + '.');
      score = score + 1;
      console.log('The user\'s score is ' + score + '/7.');
      guessing = false;
    }
    console.log('The user guessed the instrument ' + instrumentGuess );
  }
};

if (guesses >= 6) {
  alert('Wow, you\'re really talented to have not guessed any of the instruments right... The list of instruments I know how to play are ' + instrument + '.');
  console.log('The user\'s score is ' + score + '/7.');
};

var percent = Math.floor((score / 7) * 100);

if (percent > 0.5) {
  alert('Great JOB ' + username + '!!!!!!!! You got ' + score + ' out of the 7 questions correct. That\'s %' + percent + '.');
} else {
  alert('Man, ' + username + ' you didn\'t do too well. You got ' + score + ' out of 7. That\'s only %' + percent + '!! Better luck next time!');
};
