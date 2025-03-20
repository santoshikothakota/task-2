function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskList = document.getElementById('task-list');

  if (taskInput.value === '') {
      alert('Please enter a task');
      return;
  }

  const listItem = document.createElement('li');
  listItem.innerHTML = `
      ${taskInput.value}
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(listItem);
  taskInput.value = '';
}

function deleteTask(button) {
  const listItem = button.parentElement;
  listItem.remove();
}