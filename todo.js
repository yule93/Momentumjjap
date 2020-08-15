const todoForm = document.querySelector(".js-toDoForm"),
  todoInput = form.querySelector("input"),
  toDoList = document.querySelector("js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text) {
  console.log(text);
  
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  paintToDo(currentValue);
  todoInput.value = ""; 
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
  if(toDos !== null) {

  }
}

function init() {
  loadToDos();
  todoForm.addEventListener("submit", handleSubmit);
}

init();