//DOM ATTRIBUTES PROPERIES

//(1) setAttribute;

let x = document.querySelectorAll(".container1-wrapper");
x[0].style.fontFamily = "arial";
x[0].style.textAlign = "center";
function myFunction() {
  document.getElementsByTagName("h2")[0].setAttribute("class", "democlass");
}
// function myFunction() {
//   document.getElementsByTagName("INPUT")[0].setAttribute("type", "button");
// }

// let input = document.querySelector("input");

// input.setAttribute("id", "id");
// alert(input.id);

//(2) getAttribute;

// function myFunction() {
//   var x = document.getElementsByTagName("h3")[0].getAttribute("id");
//   document.getElementById("demo").innerHTML = x;
// }

// function myFunction() {
//   var x = document.getElementById("myBtn").getAttribute("onclick");
//   document.getElementById("demo").innerHTML = x;
// }

// let input = document.querySelector("input");
// input.id = "newId";
// console.log(input.getAttribute("id"));

// let input = document.querySelectorAll("input");

// input.setAttribute("value", "text");
// alert(input.value);

// input.value = "newValue";
// alert(input.getAttribute("value"));

//hasAttribute

// let x;
// x = input[1].hasAttribute("type");
// console.log(x);

// x = input[0].hasAttribute("type");
// console.log(x);

//removeAttribute

// input[0].removeAttribute("value");
// console.log(input);
// input[1].removeAttribute("name");
// console.log(input[1]);
