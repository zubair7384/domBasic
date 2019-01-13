function addtask() {
  let ul, input, li, text, del;
  ul = document.getElementById("myul");
  input = document.getElementById("input");
  li = document.createElement("li");
  li.className = "item";
  text = document.createElement("p");
  del = document.createElement("h2");
  del.className = "delete-item items";
  li.appendChild(text);
  if (input.value === "") {
    alert("Add a Task First");
  } else {
    text.appendChild(document.createTextNode(input.value));
    li.appendChild(text);
    ul.appendChild(li);
    li.appendChild(del);
    del.textContent = "X";
    storeTaskInLocalStorage(input.value);
    input.value = "";
  }
}
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

document.body.addEventListener("click", removeList);
function removeList(e) {
  if (e.target.classList.contains("items")) {
    if (confirm("Are you sure?")) e.target.parentElement.remove();
  }
}
document.body.addEventListener("click", removeAll);
function removeAll(e) {
  if (e.target.className === "btn") {
    if (confirm("Are You Sure?")) {
      let rem = document.querySelector("ul");
      rem.innerHTML = "";
    }
  }
}
