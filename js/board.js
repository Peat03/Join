
let tasks = [];
let priority;
let count = 0;
let taskList = document.getElementById('addTaskDivTest');
let currentId;
let currentDraggedElement;



function init() {
    loadTasks();
}


async function loadTasks() {
    try {
        tasks = JSON.parse(await getItem('tasks'));
    } catch (e) {
        console.error('Loading error:', e);
    }
    updateHTML();

}


window.addEventListener('storage', function (event) {
    if (event.key === 'tasksUpdated') {
        location.reload();
    }
});


function renderTaskFullSize() {
    document.getElementById('content').classList.remove('content');
    document.getElementById(`${currentId}`).classList.add('fullSizeTodDo');
    document.body.classList.add('noScroll');
}


function handleClick(event) {
    let element = event.target; toDoWkflTasks
    while (element) {
        if (element.id) {
            currentId = element.id
            break;
        }
        element = element.parentElement;
    }
}


function updateHTML() {
    renderOpenTasks();
    renderInProgressTasks();
    renderAwaitTasks();
    renderDoneTasks();
}


function startDragging(id) {
    currentDraggedElement = id;
}


function allowDrop(ev) {
    ev.preventDefault();
}


async function updateStorage() {
    await setItem('tasks', JSON.stringify(tasks));

}


function moveTo(category) {
    tasks[currentDraggedElement]['status'] = category;
    updateHTML();
    updateStorage();
}


function renderOpenTasks() {
    let open = tasks.filter(t => t['status'] == 'open');
    document.getElementById('toDoWkflTasks').innerHTML = '';
    open.forEach(openTask => {
        document.getElementById('toDoWkflTasks').innerHTML += generateTodoHTML(openTask);
    });
}


function renderInProgressTasks() {
    let inProgress = tasks.filter(t => t['status'] == 'inProgress');
    document.getElementById('inProgressWkflTasks').innerHTML = '';
    inProgress.forEach(progress => {
        document.getElementById('inProgressWkflTasks').innerHTML += generateTodoHTML(progress);
    });
}


function renderAwaitTasks() {
    let awaitFeedback = tasks.filter(t => t['status'] == 'awaitFeedback');
    document.getElementById('awaitFeedbackTasks').innerHTML = '';
    awaitFeedback.forEach(await => {
        document.getElementById('awaitFeedbackTasks').innerHTML += generateTodoHTML(await);
    });
}


function renderDoneTasks() {
    let done = tasks.filter(t => t['status'] == 'done');
    document.getElementById('doneTasks').innerHTML = '';
    done.forEach(doneTask => {
        document.getElementById('doneTasks').innerHTML += generateTodoHTML(doneTask);
    });
}

function generateTodoHTML(element) {
    return `<div id="${element['id']}" draggable="true"  ondragstart="startDragging(${element['id']})" onclick="handleClick(event), renderTaskFullSize()" class="toDoTasks font" id='open${count}'>
    <div class="userStory center d-flex">User Story</div>
     <h2> ${element['title']}</h2>
      <div class="taskContent">
     <p>Description: ${element['description']}</p>
     <p>Assigned to: ${element['assignedTo']}</p>
     <p>Due Date: ${element['dueDate']}</p>
     <p>Priority: ${element['prio']}s</p>
     <p>Category: ${element['category']}</p>
     <p>Status: ${element['status']}</p>
     </div> 
     </div>`
}


/* function highlight(id) {
    document.getElementById(id).classList.add('drag-area-highlight');
}


function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highlight');
} */

toDoWkflTasks