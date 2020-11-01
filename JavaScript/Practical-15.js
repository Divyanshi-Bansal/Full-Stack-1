var minus = document.getElementById('minus');
var plus = document.getElementById('plus');

minus.addEventListener('click',decrease);
plus.addEventListener('click',increase);

function decrease(){
    plus.removeEventListener('click',increase);
    minus.style.background = 'darkgrey';
}

function increase(){
    minus.removeEventListener('click',decrease);
    plus.style.background = 'darkgrey';
    plus.style.fontWeight = 'bold';
}