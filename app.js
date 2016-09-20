'use strict';

// asking the user's name
var username = prompt('First off, what is your name?');
console.log('The user\'s name is ' + username);
alert('Hello ' + username + '. My name is Rachel, and I have a guessing game for you.');

//asking the user how long i've been coding
var codingYears = prompt('I\'ve been coding for 3 years. Yes or No? Y or N?');
var codingYearsUpper = codingYears.toUpperCase();
console.log('The user\'s answer to if I\'ve been coding for 3 years was ' + codingYearsUpper);

if (codingYearsUpper === 'N' || codingYearsUpper === 'NO') {
  alert('YOU\'RE CORRECT! I have only been coding for about 2 months.');
} else {
  alert('Sorry, I\'ve actually only been coding for about 2 months!');
};

//asking the user where I live
var myResidence = prompt('I live in Seattle, WA. Yes or no? Y or N?');
var myResidenceUpper = myResidence.toUpperCase();
console.log('The user\'s answer to if I live in Seattle was ' + myResidenceUpper);

if (myResidenceUpper === 'Y' || myResidenceUpper === 'YES') {
  alert('Great job. I have lived here in Seattle a little over a year.');
} else {
  alert('You\'re wrong!:( But partially right... I would like to move to New York.');
};

//asking the user if i want a dog
var iWantAPuppy = prompt('I really, really, really want a dog. Yes or No? Y or N?');
var iWantAPuppyUpper = iWantAPuppy.toUpperCase();
console.log('The user\'s answer to if I want a puppy was ' + iWantAPuppyUpper);

if (iWantAPuppyUpper === 'Y' || iWantAPuppyUpper === 'YES') {
  alert('DUHHHHHHHHHHHHHHHHH, OF COURSE I DO!!!');
} else {
  alert('What is wrong with you? Everyone should want a doggy!');
};

//asking the user if I walk to school
var rideTheBus = prompt('I walk to school. Yes or No? Y or N?');
var rideTheBusUpper = rideTheBus.toUpperCase();
console.log('The user\'s answer to if I want a puppy was ' + rideTheBusUpper);

if (rideTheBusUpper === 'N' || rideTheBusUpper === 'NO') {
  alert('Correct, correct, correct. I take the bus or my hubby drops me off.');
} else {
  alert('NO! I ain\'t walking from Ballard!');
};

//asking the user if I am tired of thinking of questions to ask
var enoughQuestionsAlready = prompt('I am tired of thinking of questions to ask you. Yes or No? Y or N?');
var enoughQuestionsAlreadyUpper = enoughQuestionsAlready.toUpperCase();
console.log('The user\'s answer to if I want a puppy was ' + enoughQuestionsAlreadyUpper);

if (enoughQuestionsAlreadyUpper === 'Y' || enoughQuestionsAlreadyUpper === 'YES') {
  alert('YESSSS!! Thank goodness we are done! Now check out my portfolio.');
} else {
  alert('i. have. no. more. questions. Just go check out my portfolio page. Thanks for playing!!!');
};
