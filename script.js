
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;
  taskItem.className = 'task-item';

  taskItem.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });
  taskList.appendChild(taskItem);
  taskInput.value = '';
});