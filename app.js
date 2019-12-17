const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const taskInput = document.querySelector("#task");
const filterInput = document.querySelector("#filter");
const clearBtn = document.querySelector(".clear-tasks");

loadEventListeners();

function loadEventListeners(){
    //Add a task event
    form.addEventListener('submit', addTask);
    //Remove task
    taskList.addEventListener('click', removeTask);
    //clear all tasks
    clearBtn.addEventListener('click', clearTasks);
    //filter tasks
    filterInput.addEventListener('keyup', filterTasks);
}

function addTask(event){
    //check for empty input
    if(taskInput.value === ''){
        alert('Enter a task');
    }

    //create an li element to add to the ul
    const li = document.createElement('li');
    //add a class name to the li element
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    //create a new anchor element
    const link = document.createElement('a');
    //add a class to the a element
    link.className = 'delete-item secondary-content';
    link.innerHTML = 'X';
    li.appendChild(link);
    taskList.appendChild(li);
    event.preventDefault();
}

function removeTask(event){
   
    if(event.target.classList.contains('delete-item')){
        if(confirm('Are you sure you want to delete the task?')){
            event.target.parentElement.remove();
        }
    }
}

function clearTasks(){
    if(confirm("Clear the task list?")){
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
    }
}

function filterTasks(event){
    const userFilter = event.target.value.toLowerCase();
    
    document.querySelectorAll(".collection-item").forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(userFilter) != -1){
            task.style.display = 'block';
        }else {
            task.style.display = 'none';
        }
    });

}