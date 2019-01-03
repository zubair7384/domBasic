// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;
//console.log(val)

let val;

val = document.querySelector(".navbar-brand");
val.style.background = "black";
val.style.color = "#fff";
val.textContent = "LOGO";

val = document.querySelector(".container > h1");
val.textContent = "Wellcome to Dom Basic";
val.style.color = "green";

val = document.querySelector(".container > p");
val.style.color = "red";

let btn = document.getElementById("custom-btn");
btn.style.background = "black";
btn.style.padding = "1rem 4rem";
btn.style.display = "flex";
btn.style.justifyContent = "center";

let heading;
heading = document.querySelectorAll(".col-md-4 >h2");
heading[1].textContent = "New Heading";
heading[2].textContent = "New Heading";
heading[2].style.color = "Green";
heading[1].style.color = "red";

// heading = document.getElementsByClassName("col-md-4");
// heading[1].textContent = "New Heading";
// heading[2].textContent = "New Heading";
// heading[2].style.color = "Green";
// heading[1].style.color = "red";

// heading = document.getElementsByTagName("h2");
// heading[0].style.margin = "2rem";

// heading = document.getElementsByName("col-md-4");
// heading[2].style.color = "green";
