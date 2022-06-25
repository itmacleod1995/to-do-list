const task = document.querySelector("#task");

const addButton = document.querySelector(".add");

const outputs = document.querySelector(".outputs");
outputs.style.cssText = "cursor: pointer";

const clearTasks = document.querySelector(".reset");

addButton.addEventListener("click", function () {
    const newTask = document.createElement("p");
    newTask.textContent = task.value;
    newTask.classList.add(".task-style");
    outputs.appendChild(newTask);

    newTask.addEventListener("click", function () {
        newTask.style.cssText = "text-decoration: line-through;";
    });

    newTask.addEventListener("dblclick", function () {
        newTask.style.cssText = "text-decoration: none;";
    });
});


clearTasks.addEventListener("click", function () {
    outputs.textContent = "";
});



