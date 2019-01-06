// INTRODUCTION TO EVENTS

// document.querySelector("li").addEventListener("click", function(e) {
//   console.log("Hello World");
//   e.preventDefault();
// });

// document.querySelector(".logo").addEventListener("click", onClick);

// function onClick(e) {
//   let sirZahid;

//   sirZahid = e;

//   // Event target element
//   sirZahid = e.target;
//   sirZahid = e.target.id;
//   sirZahid = e.target.className;
//   sirZahid = e.target.classList;

//   // Event type
//   sirZahid = e.type;

//   // Timestamp
//   sirZahid = e.timeStamp;

//   // Coords event relative to the element
//   sirZahid = e.offsetY;
//   sirZahid = e.offsetX;

//   console.log(sirZahid);
// }

//  MOUSE EVENTS

const logo = document.querySelector(".logo");
const header = document.querySelector("header");
const list = document.querySelector("li");

// Click
logo.addEventListener("click", runEvent);
// Doubleclick
// logo.addEventListener("dblclick", runEvent);
// Mousedown
// document.body.addEventListener("mousedown", runEvent);
// Mouseup
// logo.addEventListener('mouseup', runEvent);
// Mouseenter
// header.addEventListener("mouseenter", runEvent);
// Mouseleave
// header.addEventListener("mouseleave", runEvent);
// Mouseover
// header.addEventListener("mouseover", runEvent);
// Mouseout
// header.addEventListener("mouseout", runEvent);
// Mousemove
// header.addEventListener("mousemove", runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
}
