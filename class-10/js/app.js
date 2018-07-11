$(document).ready(function() {
    $('p:nth-child(odd)').css({
        'color': 'red', 
        'text-transform': 'uppercase'
    });
});

const myPar = document.querySelectorAll('p');

for (let i = 0; i < myPar.length; i++) {
    myPar[i].style.color = 'grey';
}

