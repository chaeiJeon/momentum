const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm_2 = document.querySelector("#todo-form");
const todoListBox = document.querySelector("#todo-list-box");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    todoForm_2.classList.remove(HIDDEN_CLASSNAME);
    todoListBox.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();
}
console.log(loginForm)
function paintGreetings(){
    const username=localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

loginInput.addEventListener("click",event=>{
    loginInput.placeholder="";
})
if(saveUsername===null){
    //show form, hide todo
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    todoForm_2.classList.add(HIDDEN_CLASSNAME);
    todoListBox.classList.add(HIDDEN_CLASSNAME);
}else{
    paintGreetings();
    console.log("hihi");
}