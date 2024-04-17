const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", addTask);

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something.");
    } else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = "";
        saveData();
    }
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
       e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});