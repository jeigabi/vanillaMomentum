const TODOS_KEY = "todos";

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const targetLi = event.target.parentElement;
    targetLi.remove();
    // todos = todos.filter((todo) => { 
    //     return todo.id !== parseInt(targetLi.id)
    // });    
    todos = todos.filter(todo => todo.id !== parseInt(targetLi.id));
    saveTodos();
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodoObj.text;    
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();

    const newTodo = todoInput.value;
    const newTodoObj = {
        "id":Date.now()
        , "text": newTodo
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();

    todoInput.value = "";    
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(todo => {
        paintTodo(todo);
    });    
}