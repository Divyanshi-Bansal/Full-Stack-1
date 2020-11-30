var form =  document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password1 =  document.getElementById("password1");
var password2 =  document.getElementById("password2");
var small =  document.getElementById("small");
var wrong = document.getElementById("wrong");
var right = document.getElementById("right");


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInput();
});

function checkInput(){
    if (username.value ===''){
        username.style.borderBottomColor = "red";
        small.innerHTML = "username can't be blank";
        small.style.visibility = 'visible';
        wrong.style.visibility = "visible";
    }
    else if(username.value.match(/^[a-z0-9A-Z]+$/g)){
        username.style.borderBottomColor =  'green';
        right.style.visibility  = 'visible';
    }
    else{
        username.style.borderBottomColor = "red";
        small.innerHTML = "Username must contain small letters and no special symbols!";
        small.style.visibility = 'visible';
        wrong.style.visibility = "visible";
    }
    if(email.value ===''){
        email.style.borderBottomColor = "red";
        small.innerHTML = "email-id can't be blank";
        small.style.visibility = 'visible';
        wrong.style.visibility = "visible";
    }
    else if((email.value).match(/@gmail.com$/gim)){
        email.style.borderBottomColor =  'green';
        right.style.visibility  = 'visible';
    }
    else{
        email.style.borderBottomColor = "red";
        small.innerHTML = "enter a valid email id";
        small.style.visibility = 'visible';
        wrong.style.visibility = "visible";
    }
    if(password1.value ===''){
        password1.style.borderBottomColor = "red";
        small.innerHTML = "Field can't be blank";
        small.style.visibility = 'visible';
        wrong.style.visibility = "visible";
    }
    else{
        password1.style.borderBottomColor = 'green';
        right.style.visibility='visible';
    }
    if(password2.value ===''){
        password2.style.borderBottomColor = "red";
        small.innerHTML = "Field can't be blank";
        small.style.visibility = 'visible';
        wrong.style.visibility = "visible";
    }
    else if((password2.value)===(password1.value)){
        password2.style.borderBottomColor = 'green';
        right.style.visibility = 'visible';
        
    }
    else{
        password2.style.borderBottomColor = "red";
        small.innerHTML = "password can't match!";
        small.style.visibility = 'visible';
        wrong.style.visibility = "visible";
    }
}

