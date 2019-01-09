function addtask() {
  let ul = document.getElementById("myul");
  let input = document.getElementById("input");
  let li = document.createElement("li");
  let text = document.createElement("p");
  let del = document.createElement("h2");

  li.appendChild(text);

  let empty = input.value;

  if (empty != "") {
    li.setAttribute("id", input.value);
    text.appendChild(document.createTextNode(input.value));
    li.appendChild(text);
    ul.appendChild(li);

    del.setAttribute("onclick", "removetask()");
    li.appendChild(del);
    del.textContent = "X";
    console.log(li);
  } else {
    alert("Add a Task");
  }
}
function removetask() {
  let z = document.querySelector("li");

  z.remove("input.value");
}
// function removeAll() {
//   let x = document.querySelectorAll("ul");
//   x.remove();
// }
