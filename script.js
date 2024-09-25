const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.querySelector("button");

addBtn.addEventListener("click", addTask);

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = "\u00d7"; 
        li.innerHTML = `${inputBox.value} `;
        li.appendChild(span);
        listContainer.appendChild(li);
        inputBox.value = "";
        saveData();
    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    try {
        localStorage.setItem("data", listContainer.innerHTML);
    } catch (e) {
        console.error("Error saving data:", e);
    }
}

function showTask() {
    try {
        listContainer.innerHTML = localStorage.getItem("data");
    } catch (e) {
        console.error("Error retrieving data:", e);
    }
}

showTask();

