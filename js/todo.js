const todoForm=document.querySelector("#todo-form");
const todoInput=todoForm.querySelector("input");
const todoList=document.querySelector("#todo-list-box #todo-list");

let toDos=[];
let flag=false;
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
function modifyTodo(modify,highlighter,span,li){
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.classList.add("hidden");
    
    form.appendChild(input);
    li.appendChild(form);

    modify.addEventListener("click",event=>{
        input.classList.toggle("hidden");
    });
    highlighter.addEventListener("click",event=>{
        span.classList.toggle("highlighter")
    });
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
        flag=false;
        input.value="";
    });
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
    const highlighter = document.createElement("button");
    const highlighterImage = document.createElement("img");
    highlighterImage.src="./img/star.png";
    highlighterImage.className="button-image";

    modify.appendChild(modifyImage);
    highlighter.appendChild(highlighterImage);

    morebutton.innerText="...";
    modify.classList.add("hidden");
    highlighter.classList.add("hidden");

    morebutton.addEventListener("mouseenter",event=>{
        modify.classList.remove("hidden");
        highlighter.classList.remove("hidden");
    });
    morebutton.addEventListener("mouseleave",event=>{
        modify.classList.add("hidden");
        highlighter.classList.add("hidden");
    });

    morebutton.appendChild(modify);
    morebutton.appendChild(highlighter);
    li.appendChild(span);
    li.appendChild(button);
    li.appendChild(morebutton);
    todoList.appendChild(li);

    span.addEventListener("click",function(){
        span.classList.toggle("line-through");
    });
    
    modifyTodo(modify,highlighter,span,li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
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
console.log(todoList);