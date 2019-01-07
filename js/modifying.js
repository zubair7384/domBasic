//----------feature-modifing-dom----------

//----------Creating an element----------

// let section = document.createElement("section");
// section.className = "container";
// section.id = "container";
// let div = document.createElement("div");
// div.className = "container-wrapper";
// div.innerHTML = "<h2> hello</h2>";
// // div.textContent = "hello world";
// section.appendChild(div);
// console.log(section);

//----------Append property----------

let newli = document.createElement("li");
newli.innerHTML = "Aliya";
list.appendChild(newli);
// list.insertBefore(newli, list.firstChild);
// list.insertBefore(newli, list.children[1]);
// list.insertBefore(newli, list.children[2]);
// list.insertBefore(newli, list.children[3]);
// list.insertBefore(newli, list.children[4]);
// list.insertBefore(newli, list.lastChild);

//----------Resetting the style property----------

let z = document.querySelector("ul");
z.style.cssText = `
display:flex;
flex-direction:column;
padding-left:4rem;
color:green;
font-size:1.3rem;
font-family:arial;
list-style-type:square;
`;

//----------Insertion methods----------
//----------Creating List in Using DOM--------

let newlist = document.createElement("ol");
newlist.id = "ol";
let li1, li2, li3;
li1 = document.createElement("li");
li1.textContent = "0";
li2 = document.createElement("li");
li2.textContent = "1";
li3 = document.createElement("li");
li3.textContent = "2";

newlist.appendChild(li1);
newlist.appendChild(li2);
newlist.appendChild(li3);

//----------prepend/append/before/after----------

let prepend = document.createElement("li");
prepend.textContent = "before";
newlist.prepend(prepend);

let append = document.createElement("li");
append.textContent = "after";
newlist.append(append);
console.log(newlist);

//----------insertAdjacentHTML/Text/Element----------

div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>");
// div.insertAdjacentHTML("afterbegin", "<h2>hellow</h2>");
// div.insertAdjacentHTML("beforeend", "<h2>hellow</h2>");
// div.insertAdjacentHTML("afterend", "<h2>hellow</h2>");

// -----------CLONING THE NODES--------------

// let div2 = box.cloneNode(true); // clone the message
// div2.querySelector("strong").innerHTML = "Good Bye!"; // change the clone

// div.after(div2);

//----------Removal methods----------

let box = document.createElement("box");
box.className = "text text-success";
box.innerHTML = "<strong>Hello!</strong> This is  an important message.";

document.body.append(box);
setTimeout(() => box.remove(), 1000);

//----------A word about “document.write”----------

let bigBox = document.createElement("div");
bigBox.className = "main-heading";

let x = (bigBox.innerHTML = "<h2>feature-modifing-dom</h2>");
document.write(x);
alert(document.body.div.className);
