var minus = document.getElementById('minus');
var plus = document.getElementById('plus');
var counter = document.getElementById('counter');

minus.addEventListener('click',decrease);
plus.addEventListener('click',increase);
plus.style.background = 'grey';
minus.style.background = 'rgb(187, 184, 184)';

var count =0;

function decrease(){
    if(count != 0){
        //plus.removeEventListener('click',increase);
        minus.style.background = 'black';
        plus.style.background = 'grey';
        count = count -1;
        counter.innerHTML = count;
    }
}

function increase(){
    //minus.removeEventListener('click',decrease);
    minus.style.background = 'grey';
    plus.style.background = 'black';
    plus.style.fontWeight = 'bold';
    count = count +1;
    counter.innerHTML = count;
}

counter.onclick = function(){
    counter.style.border = 'none';
};
 
