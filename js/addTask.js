let tasks = [];
let priority;

function init(){
    loadTasks();
}

async function loadTasks() {
    try {
        tasks = JSON.parse(await getItem('tasks'));
    } catch (e) {
        console.error('Loading error:', e);
    }
}

async function addTask(event) {
    event.preventDefault();   
   let newTask = new Task(`${inputTitle.value}`, `${taskDesc.value}`, `${assignedTo.value}`, `${dueDate.value}`, `${priority}`, `${taskCategory.value}`);
   tasks.push(newTask);
   console.log(tasks)
   await setItem('tasks', JSON.stringify(tasks));
}

function setPrio(newPriority) {
    priority = newPriority; // Use assignment operator (=) instead of comparison operator (===)
}

