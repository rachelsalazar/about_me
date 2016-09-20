var username = prompt('What is your name?');
  console.log('The user\'s name is ' + username);
    alert('Hello ' + username + '!');

var inputFavoriteAnimal = prompt('What is your favorite animal?');
  console.log('The user\'s favorite animal is a ' + inputFavoriteAnimal);
    alert('Oh my gosh ' + username + ', my favorite animal is also a ' + inputFavoriteAnimal + '!!!');

var inputBirthPlace = prompt('Where were you born?');
  console.log('The user was born in ' + inputBirthPlace);
    alert('So, let me get this right. Your name is ' + username + ', you were born in ' + inputBirthPlace + ', and your favorite animal is a ' + inputFavoriteAnimal + '... Alright, one more question.');

var inputDreamLocation = prompt('If you could travel anywhere, where would it be?');
  console.log('The user want\'s to travel to ' + inputDreamLocation);
    alert('Ok, I have all the info I need. So here is what I came up with. ' + username + ' rode a ' + inputFavoriteAnimal + ' all the way from ' + inputBirthPlace + ' to ' + inputDreamLocation + ". That poor " + inputFavoriteAnimal + '!:(' );
