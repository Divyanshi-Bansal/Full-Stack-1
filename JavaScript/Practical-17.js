function digitalClock(){

    let date = new Date();

    let hour = date.getHours();
    console.log(hour);
    let time = date.toString().slice(16, 24);
    let today = date.toString().slice(0,15);

    let ampm = hour >= 12 ? 'PM' : 'AM';
    let greeting = hour >=4 & hour <12 ? 'Good Morning' : hour >=12 & hour <= 16 ? 'Good Afternoon' : hour >= 17 & hour <= 18 ? "Good Evening" : "Good Night";
    let mood = hour >=4 & hour <12 ? String.fromCodePoint(128519) : hour >=12 & hour <= 16 ? String.fromCodePoint(128513) : hour >= 17 & hour <= 18 ? String.fromCodePoint(129488) : hour >18 & hour <=23 ? String.fromCodePoint(128520) : String.fromCodePoint(128564) ;

    document.getElementById('time').innerHTML = time;
    document.getElementById('ampm').innerHTML = ampm;
    document.getElementById('greeting').innerHTML = greeting;
    document.getElementById('today').innerHTML = today;
    var text = document.getElementById('text');
    document.getElementById('mood').innerHTML = mood;

    text.onclick = (e) => {
        e.preventDefault();
        if (text == null){
            text.innerHTML = 'Enter Text';
        }
        else{
            text.innerHTML = text;
        }
        text.style.opacity = '0.7';
    }

    document.body.style.backgroundImage = hour>=4 & hour <=6 ? "URL('../image/earlyMorningimg.jpg')" : hour >=7 & hour <12 ? "URL('../image/morningimg.jpg')" : hour >=12 & hour <= 16 ? "URL('../image/afternoonimg.jpg')" : hour >= 17 & hour <= 18 ? "URL('../image/eveningimg.jpg')" : hour >18 & hour <=23 ? "URL('../image/nightImg.jpg')" : "URL('../image/lateNightimg.jpg')" ;



    setTimeout(digitalClock,500);
}




digitalClock();