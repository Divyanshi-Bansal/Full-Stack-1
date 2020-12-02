var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
var form3 = document.getElementById('form3');

var next1 = document.getElementById('next1');
var next2 = document.getElementById('next2');
var back1 = document.getElementById('back1');
var back2 = document.getElementById('back2');

var progress = document.getElementById('progress');

next1.onclick = function(){
    form1.style.left = '-500px';
    form2.style.left = '40px';
    progress.style.width = '236px';
}
next2.onclick = function(){
    form2.style.left = '-500px';
    form3.style.left = '40px';
    progress.style.width = '100%';
}

back1.onclick = function(){
    form1.style.left = '40px';
    form2.style.left = '500px';
    progress.style.width = '128px';
}
back2.onclick = function(){
    form2.style.left = '40px';
    form3.style.left = '500px';
    progress.style.width = '236px';
}