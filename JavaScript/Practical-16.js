var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");

todoButton.onclick = create;


function create(e){
    e.preventDefault(); //to stop reloading  the page after clicking

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