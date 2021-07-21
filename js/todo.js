const todoForm=document.querySelector("#todo-form");
const todoInput=todoForm.querySelector("input");
const todoList=document.querySelector("#todo-list");

let toDos=[];

const TODOS_KEY="todos";

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
function deleteTodo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    saveTodos();
    li.remove();
}
function modifyTodo(span,li){
    const form = document.createElement("form");
    const input = document.createElement("input");
    
    form.appendChild(input);
    li.appendChild(form);

    form.addEventListener("submit",event=>{
        event.preventDefault();
        span.innerText=input.value;
        changeId=event.target.parentElement.id;
        toDos.filter(todo=>{
            if(todo.id==changeId){
                todo.text=input.value;
            }
        });
        saveTodos();
        input.classList.add("hidden");
    })
}
function selectPriority(){

}
function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText=newTodo.text;

    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteTodo);

    const morebutton = document.createElement("button");
    const modify = document.createElement("button");
    const modifyImage = document.createElement("img");
    modifyImage.src="./img/pencil.png";
    modifyImage.className="button-image";
    const priority = document.createElement("button");
    const priorityImage = document.createElement("img");
    priorityImage.src="./img/numbered-information.png";
    priorityImage.className="button-image";

    modify.appendChild(modifyImage);
    priority.appendChild(priorityImage);

    morebutton.innerText="...";
    modify.classList.add("hidden");
    priority.classList.add("hidden");

    morebutton.addEventListener("mouseenter",event=>{
        modify.classList.remove("hidden");
        priority.classList.remove("hidden");
    });
    modify.addEventListener("click",event=>{
        modifyTodo(span,li);
    });
    priority.addEventListener("click",selectPriority);
    morebutton.addEventListener("mouseleave",event=>{
        modify.classList.add("hidden");
        priority.classList.add("hidden");
    });

    morebutton.appendChild(modify);
    morebutton.appendChild(priority);
    li.appendChild(span);
    li.appendChild(button);
    li.appendChild(morebutton);
    todoList.appendChild(li);

    span.addEventListener("click",function(){
        span.classList.toggle("line-through");
    });
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    console.log(newTodo);
    todoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

//paintTodos();
todoForm.addEventListener("submit",handleToDoSubmit);

const saveToDos = localStorage.getItem(TODOS_KEY);
if(saveToDos != null){
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}