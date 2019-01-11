//----------EVENT BUBBLING----------
document.querySelector(".container-one").addEventListener("click", function(e) {
  console.log("I am box 1");
});
document.querySelector(".container-two").addEventListener("click", function(e) {
  console.log("I am box 2");
  e.stopPropagation();
});
document
  .querySelector(".container-three")
  .addEventListener("click", function(e) {
    console.log("I am box 3");
    e.stopImmediatePropagation();
  });
