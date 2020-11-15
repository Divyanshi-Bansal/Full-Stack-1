function digitalClock(){

    let date = new Date();

    let hour = date.getHours();
    let time = date.toString().slice(16, 24);
    let today = date.toString().slice(0,15);
    document.getElementById('time').innerHTML = time;
    document.getElementById('today').innerHTML = today;






}




digitalClock();