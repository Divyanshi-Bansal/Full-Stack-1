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
        small.innerHTML = "Field can't be blank";
        small.style.visibility = 'visible';
        wrong.style.visibility = "visible";
    }
    else if(username.value.match(/^[a-z0-9]+$/g)){
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
        small.innerHTML = "Field can't be blank";
        small.style.visibility = 'visible';
        wrong.style.visibility = "visible";
    }
    else if(email.value.match(/@gmail.com$/gim)){
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
    else if(password2.value.match(/password1/g)){
        password2.style.borderBottomColor = 'green';
        right.style.visibility = 'visible';
    }
    else{
        password2.style.borderBottomColor = "red";
        small.innerHTML = "password can't match!";
        small.style.visibility = 'visible';
        wrong.style.visibility = "visible";
    }
    
    
    


















    var usernameValue = username.value;
    var emailValue = email.value;
    var password1Value = password1.value;
    var password2Value = password2.value;

    var list = ['username','email','password1','password2'];
    for (let index = 0; index < list.length; index++) {
        var input = list[index];
        if(input.value ===""){
            showError(input);
        }
        else{
            if(input.value.match(/^[a-z0-9]+$/g)){
                showSuccess(input);
            }
            else{
                small.innerHTML = "username must contain small letters and no special symbols!";
            }
        }
    } 
}

function showError(msg){
    msg.style.borderBottomColor = "red";
    small.innerHTML = "Field can't be blank";
    small.style.visibility = 'visible';
    wrong.style.visibility = "visible";
}

function showSuccess(msg){
    msg.style.borderBottomColor = "green";
    right.style.visibility = "visible";
}