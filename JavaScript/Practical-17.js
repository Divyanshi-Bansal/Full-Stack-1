function digitalClock(){

    let date = new Date();

    let hour = date.getHours();
    console.log(hour);
    let time = date.toString().slice(16, 24);
    let today = date.toString().slice(0,15);

    let ampm = hour >= 12 ? 'PM' : 'AM';
    let greeting = hour >=4 & hour <12 ? 'Good Morning' : hour >=12 & hour <= 16 ? 'Good Afternoon' : hour >= 17 & hour <= 18 ? "Good Evening" : "Good Night";


    document.getElementById('time').innerHTML = time;
    document.getElementById('ampm').innerHTML = ampm;
    document.getElementById('greeting').innerHTML = greeting;
    document.getElementById('today').innerHTML = today;
    var text = document.getElementById('text');
    text.onclick = () => {
        text.innerHTML = text;
    }





    setTimeout(digitalClock,500);
}




digitalClock();