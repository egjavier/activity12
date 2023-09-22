const addTask = document.querySelector('#addTask');
const todoInput = document.querySelector('#todoInput');
const taskList = document.querySelector('#taskList');

addTask.addEventListener('click', () => {
  const newList = document.createElement('li');
  const newTask = document.createTextNode(`${todoInput.value}`);
  newList.appendChild(newTask);
  taskList.appendChild(newList);

})