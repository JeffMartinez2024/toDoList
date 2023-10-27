class Task {
    constructor(title, description, dueDate, dueTime) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.completed = false;
    }

    // Completar la tarea
    complete() {
        this.completed = true;
    }
}

// Agregar una tarea al DOM
function addTaskToDOM(task) {
    const taskList = document.getElementById("task-list");

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <br>
       <div class="bg-white rounded-lg p-4 shadow-md">
            <h3 class="text-lg font-semibold">${task.title}</h3>
            <p class="text-gray-600">${task.description}</p>
            <p class="text-blue-500">Due Date: ${task.dueDate}</p>
            <p class="text-blue-500">Due Time: ${task.dueTime}</p>
            <br>
            <button class="complete-button bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 mr-2">Complete</button>
            <button class="delete-button bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">Delete</button>
        </div>
    `;

    taskList.appendChild(taskItem);

    // Buttons
    const completeButton = taskItem.querySelector(".complete-button");
    completeButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
    });

    const deleteButton = taskItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
    });
}

// Formulario de agregar tarea
document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("task-form");

    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const taskTitleInput = document.getElementById("task-title");
        const taskDescriptionInput = document.getElementById("task-description");
        const dueDateInput = document.getElementById("due-date");
        const dueTimeInput = document.getElementById("due-time");

        const taskTitle = taskTitleInput.value.trim();
        const taskDescription = taskDescriptionInput.value.trim();
        const dueDate = dueDateInput.value;
        const dueTime = dueTimeInput.value;

        if (taskTitle === "") {
            alert("Mandatory! Add a title.");
            return;
        }

        const newTask = new Task(taskTitle, taskDescription, dueDate, dueTime);
        addTaskToDOM(newTask);

        // Limpiar el formulario
        taskTitleInput.value = "";
        taskDescriptionInput.value = "";
        dueDateInput.value = "";
        dueTimeInput.value = "";
    });
});
