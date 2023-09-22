const addTask = document.querySelector('#addTask');
const todoInput = document.querySelector('#todoInput');
const taskList = document.querySelector('#taskList');

addTask.addEventListener('click', () => {
  const li = document.createElement('li');
  const newTask = document.createTextNode(`${todoInput.value}`);
  li.appendChild(newTask);
  taskList.appendChild(li);

  li.addEventListener('click', () => {
    li.classList.toggle('done');
  })

})


