let tasks = [];
let priority;
let count = 0;

function init() {
    loadTasks();
}

function logTasks() {
    console.log(tasks)
}

async function loadTasks() {
    try {
        tasks = JSON.parse(await getItem('tasks'));
    } catch (e) {
        console.error('Loading error:', e);
    };
    getLastTaskId();
}

function getLastTaskId() {
    try {
        count = tasks[tasks.length - 1]['id'];        
    } catch (error) {
        console.log('no tasks')        
    }   
}

function deleteAllTasks() {
    tasks = [];
    updateStorage();
    count = 0;
}



async function addTask(event) {    
    event.preventDefault();
    let newTask = new Task(count, `${inputTitle.value}`, `${taskDesc.value}`, `${assignedTo.value}`, `${dueDate.value}`, `${priority}`, `${taskCategory.value}`, 'open');
    tasks.push(newTask);
    count++;
    console.log(tasks)
    await setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('tasksUpdated', Date.now());
    localStorage.removeItem('tasksUpdated');
    resetInputValues();
}

async function updateStorage() {
    await setItem('tasks', JSON.stringify(tasks));

}

function setPrio(newPriority) {
    priority = newPriority;
}

function resetInputValues() {
    inputTitle.value = '';
    taskDesc.value = '';
    assignedTo.value = '';
    dueDate.value = '';
    taskCategory.value = '';
}


