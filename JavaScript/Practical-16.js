var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");

todoButton.onclick = create;
todoList.onclick = checkDelete;

function create(e){
    e.preventDefault(); //to stop reloading  the page after clicking
    if(todoInput.value){
        var newdiv = document.createElement("div");
    newdiv.classList.add('todo');

    var newLi = document.createElement('li');
    newLi.classList.add('todo-item');
    newLi.innerHTML = todoInput.value; //defalut
    newdiv.appendChild(newLi);

    var checkbtn = document.createElement('button');
    checkbtn.classList.add('check-btn');
    checkbtn.innerHTML = '<i class="fa fa-check"></i>';
    newdiv.appendChild(checkbtn);

    var deletebtn = document.createElement("button");
    deletebtn.classList.add('delete-btn');
    deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
    newdiv.appendChild(deletebtn);

    todoList.appendChild(newdiv);
    todoInput.value='';
    }
    else{
        alert("input can't be empty.");
    }
}

function checkDelete(e){
    var item = e.target;
    if(item.classList[0] === 'delete-btn'){
        var parent = item.parentNode;
        parent.remove();
    }
    if(item.classList[0] === 'check-btn'){
        var parent = item.parentNode;
        parent.classList.toggle('completed');
    }
}