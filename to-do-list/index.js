const translations = {
  en: {
    title: "To-Do List",
    placeholder: "Enter a new task...",
    add: "Add",
    delete: "Delete"
  },
  hi: {
    title: "कार्य सूची",
    placeholder: "नया कार्य दर्ज करें...",
    add: "जोड़ें",
    delete: "हटाएं"
  }
  ci:{
    title: "कार्य सूची",
    placeholder: "नया कार्य दर्ज करें...",
    add: "जोड़ें",
    delete: "हटाएं"
  }
};

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const currentLang = document.getElementById("language").value;
  const li = document.createElement('li');
  li.innerHTML = `${taskText} <button class="delete-btn" onclick="deleteTask(this)">${translations[currentLang].delete}</button>`;

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}

function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
}

function changeLanguage() {
  const lang = document.getElementById("language").value;
  document.getElementById("title").textContent = translations[lang].title;
  document.getElementById("taskInput").placeholder = translations[lang].placeholder;
  document.getElementById("addBtn").textContent = translations[lang].add;

  // Update delete button labels
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(btn => btn.textContent = translations[lang].delete);
}
