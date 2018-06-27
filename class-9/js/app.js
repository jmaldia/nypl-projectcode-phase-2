console.log('JS is working');

var message = document.getElementById('message1');
var celebrant = document.getElementById('birthdayPerson');
var age = document.getElementById('birthdayNumber');
var you = document.getElementById('yourName');


message.innerHTML = 'It\'s been replaced';

setTimeout(() => { celebrant.innerHTML = 'CADENCE' }, 1000);
setTimeout(() => { age.innerHTML = '8' }, 3000);
setTimeout(() => { you.innerHTML = 'JON' }, 5000);