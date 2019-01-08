let ol = document.querySelector(".ol");
ol.style.cssText = `
font-size:1.2rem;
list-style-type:none;
padding-left:3rem;
font-family:Arial;
`;
const addList = document.querySelector(".button-1");
addList.style.cssText = `
color:green;
font-size:1rem;
font-family:Arial;
`;
const removeList = document.querySelector(".button-2");
removeList.style.cssText = `
color:red;
font-size:1rem;
font-family:Arial;
`;
addList.addEventListener("click", runEventAdd);
let i = 8;
function runEventAdd() {
  let newLi = document.createElement("li");
  x = newLi.textContent = "List " + i;
  i++;
  ol.appendChild(newLi);
}

removeList.addEventListener("click", removeEvent);

function removeEvent() {
  let z = document.querySelector("li");
  z.remove();
}
