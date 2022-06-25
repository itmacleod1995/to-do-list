const task = document.querySelector("#task");

const addButton = document.querySelector(".add");

const outputs = document.querySelector(".outputs");

function clear() {
    task.value = "";
}

addButton.addEventListener("click", function () {
    const newTask = document.createElement("p");
    newTask.style.cssText = "font-size: 20px; margin-bottom: 20px;";
    newTask.textContent = task.value;
    outputs.appendChild(newTask);
    clear();
});

outputs.addEventListener("click", function () {
    outputs.style.cssText = "text-decoration: line-through";
});


