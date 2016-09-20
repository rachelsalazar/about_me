'use strict';

// asking the user's name
var username = prompt('First off, what is your name?');
console.log('The user\'s name is ' + username);
alert('Hello ' + username + '. My name is Rachel, and I have a guessing game for you.');

//asking the user how long i've been coding
var codingYears = prompt('I\'ve been coding for 3 years. Yes or No?');
var codingYearsUpper = codingYears.toUpperCase();
console.log('The user\'s answer was ' + codingYearsUpper);

if (codingYearsUpper === 'N' || codingYearsUpper === 'NO') {
  alert('YOU\'RE CORRECT! I have only been coding for about 2 months.');
} else {
  alert('Sorry, I know my code looks good. But I\'m not a coding master yet.');
};
console.log(codingYearsUpper);

//asking the user
var codingYears = prompt('I\'ve been coding for 3 years. Yes or No? ');
var codingYearsUpper = codingYears.toUpperCase();
console.log('The user\'s answer was ' + codingYearsUpper);

if (codingYearsUpper === 'N' || codingYearsUpper === 'NO') {
  alert('YOU\'RE CORRECT! I have only been coding for about 2 months.');
} else {
  alert('Sorry, I know my code looks good. But I\'m not a coding master yet.');
};
console.log(codingYearsUpper);

/* console.log('The user\'s name is ' + username);
alert('Hello ' + username + '. So, I want to play a little guessing game with you. Let\'s see how well you know me.');

var inputFavoriteAnimal = prompt('');
console.log('The user\'s favorite animal is a ' + inputFavoriteAnimal);
alert('Oh my gosh ' + username + ', my favorite animal is also a ' + inputFavoriteAnimal + '!!!');

var inputBirthPlace = prompt('Where were you born?');
console.log('The user was born in ' + inputBirthPlace);
alert('So, let me get this right. Your name is ' + username + ', you were born in ' + inputBirthPlace + ', and your favorite animal is a ' + inputFavoriteAnimal + '... Alright, one more question.');

var inputDreamLocation = prompt('If you could travel anywhere, where would it be?');
console.log('The user want\'s to travel to ' + inputDreamLocation);
alert('Ok, I have all the info I need. So here is what I came up with. ' + username + ' rode a ' + inputFavoriteAnimal + ' all the way from ' + inputBirthPlace + ' to ' + inputDreamLocation + ". That poor " + inputFavoriteAnimal + '!:(' ); */
