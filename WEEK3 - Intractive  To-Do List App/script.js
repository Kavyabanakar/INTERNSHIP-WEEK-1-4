function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <div class="task-left">
      <input type="checkbox" onchange="toggleCheck(this)">
      <span class="task-text">${taskText}</span>
    </div>
    <span class="delete-btn" onclick="deleteTask(this)">🗑️</span>
  `;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function deleteTask(el) {
  el.parentElement.remove();
}

function toggleCheck(checkbox) {
  const text = checkbox.nextElementSibling;
  if (checkbox.checked) {
    text.style.textDecoration = "line-through";
    text.style.color = "#999";
  } else {
    text.style.textDecoration = "none";
    text.style.color = "#333";
  }
}
