var form =  document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password1 =  document.getElementById("password1");
var password2 =  document.getElementById("password2");
var small =  document.getElementById("small");


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInput();
});

function checkInput(){
    var usernameValue = username.value;
    var emailValue = email.value;
    var password1Value = password1.value;
    var password2Value = password2.value;

    if(usernameValue ===""){
        showError(username,"Username can't be blank!");
    }
    else{
        showSuccess(username);
    }
}