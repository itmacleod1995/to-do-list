const task = document.querySelector("#task");

const addButton = document.querySelector(".add");

const output = document.querySelector(".output");

function clear() {
    task.value = "";
}

addButton.addEventListener("click", function () {
    output.textContent = task.value;
    clear();
});


