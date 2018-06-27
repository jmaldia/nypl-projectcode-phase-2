console.log('JS is working');

var message = document.getElementById('message1');
var celebrant = document.getElementById('birthdayPerson');
var age = document.getElementById('birthdayNumber');
var you = document.getElementById('yourName');
var bdayH1 = document.getElementById('birthday-h1');
var myClass = document.getElementsByClassName('my-class');
console.log(document.getElementsByClassName('my-class'));


message.innerHTML = 'It\'s been replaced';

setTimeout(() => { celebrant.innerHTML = 'CADENCE' }, 1000);
setTimeout(() => { age.innerHTML = '8' }, 3000);
setTimeout(() => { you.innerHTML = 'JON' }, 5000);

document.write("WTF!");

for (let x = 0; x < myClass.length; x++) {
    x.style.color = 'red';
};


// Use remove child to delete an element
setTimeout(() => { bdayH1.removeChild(celebrant) }, 7000);

const myString = "Jon Maldia";

// Class 9
document.write(`The string is: ${myString}<br>`);
document.write(`String length: ${myString.length}<br>`); // string length
document.write(`The character at position 3 is: ${myString.charAt(2)}<br>`); // character at
document.write(`The char at range 3-5 are: ${myString.slice(2, 5)}<br>`);
document.write(`Let's replace Jon with Cadence: ${myString.replace('Jon', 'Cadence')}<br>`);
document.write(`Uppercase: ${myString.toUpperCase()}<br>`);
document.write(`lowercase: ${myString.toLowerCase()}<br>`);
document.write(`PI: ${Math.PI.toFixed(7)}<br>`);
document.write(`Square Root: ${Math.sqrt(36).toFixed(2)}<br>`);
document.write(`Exponent: ${Math.pow(2, 3)}<br>`);
document.write(`Round: ${Math.round(7.98347294729347239)}<br>`);
document.write(`Round up: ${Math.ceil(7.98347294729347239)}<br>`);
document.write(`Round down: ${Math.floor(7.98347294729347239)}<br>`);
document.write(`Random: ${Math.floor(Math.random() * 10) + 1}<br>`);

message.style.color = 'red';

// Random color game
const colors = ['blue', 'red', 'green', 'orange', 'brown'];
const colorTag = document.querySelector('#color');
const colorButton = document.querySelector('#color-button');

function randomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    colorTag.innerHTML = colors[randomIndex].toUpperCase();
}

colorButton.addEventListener('click', randomColor);

