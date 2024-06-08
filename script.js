let toDoTask = JSON.parse(localStorage.getItem("tasks")) || [];

display_task();

function add_task(){
    const inputElement = document.querySelector(".to-do-input");
    const userTask = inputElement.value;
    const dateElement = document.querySelector(".to-do-date");
    const userDate = dateElement.value;

    if (userTask === "" && userDate === ""){
        alert("Input's Cannot be Empty");
        return;
    } else {
        if (userTask === ""){
            alert("Enter a Valid Task Name")
            return;
        }
        else if (userDate === ""){
            alert("Select a Due Date")
            return;
        }
    }

    toDoTask.push({
        userTask,
        userDate
    });

    display_task();
}

function display_task(){
    let toDoHTML = "";

    for (let i = 0; i < toDoTask.length; i++){
        const toDoObject = toDoTask[i];
        const { userTask, userDate } = toDoObject;
        const html = `
            <div class="task-user">${userTask}</div>
            <div class="date-user">${userDate}</div>
            <button onclick="
            toDoTask.splice(${i}, 1);
            display_task();"
            class="delete-button">Delete</button>`;
        toDoHTML += html;
    }

    document.querySelector(".to-do-tasks").innerHTML = toDoHTML;
    save_data();
}

function save_data() {
    localStorage.setItem("tasks", JSON.stringify(toDoTask));
}