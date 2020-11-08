var todoInput = document.querySelector("todo-input");
var todoButton = document.querySelector("todo-button");
var todoList = document.querySelector("todo-List");


todoButton.onClick = create;

function create(){
    var newdiv = document.createElement("div");
    newdiv.classList.add('todo');

    var newLi = document.createElement('li');
    newLi.classList.add('todo-item');
    newdiv.appendChild(newLi);

    var checkbtn = document.createElement('button');
    checkbtn.classList.add('check-btn');
    checkbtn.innerHTML = '<i class = "fa fa-check"></i>';
    newdiv.appendChild(checkbtn);

    var deletebtn = document.createElement('button');
    deletebtn.classList.add('delete-btn');
    deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
    newdiv.appendChild(deletebtn);

    todoList.appendChild(newdiv);
}