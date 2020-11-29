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
    var usernameValue = username.value;
    var emailValue = email.value;
    var password1Value = password1.value;
    var password2Value = password2.value;

    var list = ['usernameValue','emailValue','password1Value','password2Value'];
    for (let index = 0; index < list.length; index++) {
        var input = list[index];
        if(usernameValue ===""){
            showError(input);
        }
        else{
            if(input.match(/^[a-z0-9]+$/g)){
                showSuccess(input);
            }
            else{
                
            }
        }
    } 
}

function showError(){
    username.style.borderBottomColor = "red";
    small.innerHTML = "Field can't be blank";
    small.style.visibility = 'visible';
    wrong.style.visibility = "visible";
}

function showSuccess(msg){
    msg.style.borderBottomColor = "green";
    right.style.visibility = "visible";
}