const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const todos = [];

function saveTodos() {
    localStorage.setItem("todos", todos);
}

function deleteTodo(event) {
    const targetLi = event.target.parentElement;
    targetLi.remove();    
}

function paintTodo(newTodo) {
    console.log("i will paint", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;    
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();

    const newTodo = todoInput.value;
    todoInput.value = "";
    todos.push(newTodo);
    paintTodo(newTodo);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit)