const addTask = document.querySelector('#addTask');
const todoInput = document.querySelector('#todoInput');
const taskList = document.querySelector('#taskList');

addTask.addEventListener('click', () => {
  if (todoInput.value === '') {
    // if input field is emplty, there will be an alert
    alert('You must enter a task first!');
  } else {
    // created <li> element under <ul>
    const li = document.createElement('li');
    const newTask = document.createTextNode(`${todoInput.value}`);
    li.appendChild(newTask);
    taskList.appendChild(li);

    // whenever <li> or added task is clicked, a line through the task will appear
    li.addEventListener('click', () => {
      li.classList.toggle('done');
    })

    // added <button> x
    const xBtn = document.createElement('button');
    const x = document.createTextNode('x');
    xBtn.appendChild(x);
    li.appendChild(xBtn);

    // when x button is clicked, <li> will be removed from <ul>
    xBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    })
  }

  // after adding task, input field will be empty
  todoInput.value = '';
})


