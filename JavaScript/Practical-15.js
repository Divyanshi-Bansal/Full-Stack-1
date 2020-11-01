var minus = document.getElementById('minus');
var plus = document.getElementById('plus');

minus.addEventListener('click',decrease);
plus.addEventListener('click',increase);

var count =0;
function decrease(){
    if(count != 0){
        //plus.removeEventListener('click',increase);
        minus.style.background = 'darkgrey';
        count = count -1;
        document.getElementById('counter').innerHTML = count;
    }
}

function increase(){
    //minus.removeEventListener('click',decrease);
    plus.style.background = 'darkgrey';
    plus.style.fontWeight = 'bold';
    count = count +1;
    document.getElementById('counter').innerHTML = count;
}