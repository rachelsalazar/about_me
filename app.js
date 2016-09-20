'use strict';

// asking the user's name
var username = prompt('First off, what is your name?');
console.log('The user\'s name is ' + username);
alert('Hello ' + username + '. My name is Rachel, and I have a guessing game for you.');

//asking the user how long i've been coding
var codingYears = prompt('I\'ve been coding for 3 years. Yes or No?');
var codingYearsUpper = codingYears.toUpperCase();
console.log('The user\'s answer to if I\'ve been coding for 3 years was ' + codingYearsUpper);

if (codingYearsUpper === 'N' || codingYearsUpper === 'NO') {
  alert('YOU\'RE CORRECT! I have only been coding for about 2 months.');
} else {
  alert('Sorry, I\'ve actually only been coding for about 2 months!');
};

//asking the user where I live
var myResidence = prompt('I live in Seattle, WA. Yes or no?');
var myResidenceUpper = myResidence.toUpperCase();
console.log('The user\'s answer to if I live in Seattle was ' + myResidenceUpper);

if (myResidenceUpper === 'Y' || myResidenceUpper === 'YES') {
  alert('Great job. I have lived here in Seattle a little over a year.');
} else {
  alert('You\'re wrong!:( But partially right... I would like to move to New York.');
};

//asking the user if i want a dog
var iWantAPuppy = prompt('I really, really, really want a dog. Y or N?');
var iWantAPuppyUpper = iWantAPuppy.toUpperCase();
console.log('The user\'s answer to if I want a puppy was ' + iWantAPuppyUpper);

if (iWantAPuppyUpper === 'Y' || iWantAPuppyUpper === 'YES') {
  alert('DUHHHHHHHHHHHHHHHHH, OF COURSE I DO!!!');
} else {
  alert('What is wrong with you? Everyone should want a doggy!');
};
