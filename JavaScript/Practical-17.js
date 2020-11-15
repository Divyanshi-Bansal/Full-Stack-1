function digitalClock(){

    let date = new Date();

    let hour = date.getHours();
    let time = date.toString().slice(16, 24);
    let today = date.toString().slice(0,15);

    let ampm = hour >= 12 ? 'PM' : 'AM';


    document.getElementById('time').innerHTML = time;
    document.getElementById(ampm).innerHTML = ampm;
    document.getElementById('today').innerHTML = today;





    setTimeout(digitalClock,500);
}




digitalClock();