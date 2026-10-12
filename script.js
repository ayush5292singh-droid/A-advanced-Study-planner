// Default initial tasks matching modern study planning layouts
let tasks = [
    { title: "Calculus Review", time: "2:00 PM - 3:30 PM", priority: "High" },
    { title: "English Essay Writing", time: "4:00 PM - 5:15 PM", priority: "Medium" },
    { title: "Physics Mechanics Notes", time: "6:00 PM - 7:00 PM", priority: "Low" }
];

const taskListEl = document.getElementById('task-list');
const taskModal = document.getElementById('taskModal');
const taskForm = document.getElementById('task-form');

function renderTasks() {
    taskListEl.innerHTML = '';
    tasks.forEach((task, index) => {
        let priorityClass = 'priority-low';
        if (task.priority === 'High') priorityClass = 'priority-high';
        if (task.priority === 'Medium') priorityClass = 'priority-medium';

        const item = document.createElement('div');
        item.classList.add('task-item');
        item.innerHTML = `
            <div class="task-details">
                <h4>${task.title}</h4>
                <span><i class="fa-regular fa-clock"></i> ${task.time}</span>
            </div>
            <span class="priority-badge ${priorityClass}">${task.priority}</span>
        `;
        taskListEl.appendChild(item);
    });
}

function openModal() {
    taskModal.style.display = 'flex';
}

function closeModal() {
    taskModal.style.display = 'none';
}

taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('task-title').value;
    const time = document.getElementById('task-time').value;
    const priority = document.getElementById('task-priority').value;

    tasks.unshift({ title, time, priority });
    renderTasks();
    closeModal();
    taskForm.reset();
});

// Initial render
renderTasks();
