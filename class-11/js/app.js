// jQuery variables
let headingTwo = $('h2');
let headingTwoNth = $('h2:nth-of-type(2)');
let paragraphOne = $('.para1');
let paragraphTwo = $('.para2');
let paragraphThree = $('.para3');

let buttonOne = $('.btn1');
let buttonTwo = $('.btn2');
let buttonThree = $('.btn3');
let buttonFour = $('.btn4');

let redDiv = $('.red');

$(document).ready(() => {
    buttonOne.on('click', () => {
        headingTwo.first().css({
            'color': 'red'
        });
        paragraphOne.fadeToggle();
    });

    buttonTwo.on('click', () => {
        headingTwoNth.css({
            'color': 'green'
        });
        paragraphTwo.fadeToggle();
    });

    buttonThree.on('click', function() {
        headingTwo.last().css({
            'color': 'blue'
        });
        paragraphThree.fadeToggle();
    });

    buttonFour.on('click', function(event) {
        console.log(event);
        // clientX and clientY provides the coordinates on the screen
        console.log(event.clientX);
        console.log(event.clientY);
        paragraphOne.fadeToggle();
        paragraphOne.append(`<br>${event.clientX} & ${event.clientY}`);
        paragraphTwo.fadeToggle();
        paragraphThree.fadeToggle();
        headingTwo.css({
            'color': 'black'
        });
    });

    document.addEventListener('keypress', (event) => {
        if (event.key === '1') {
            paragraphOne.fadeToggle();
            paragraphTwo.fadeToggle();
            paragraphThree.fadeToggle();
            headingTwo.css({
                'color': 'black'
            });
        }
    });

    redDiv.click(() => {
        redDiv.toggleClass('transform');
    });
});