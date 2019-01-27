// ---------- ASYN AWAIT ---------- //

const getPosts = async url => {
  const res = await fetch(url);
  return await res.json();
};
document.querySelector(".click-btn").addEventListener("click", function(e) {
  let users = document.querySelector(".rep-input").value;
  getPosts(`https://api.github.com/users/${users}/repos`)
    .then(res => res.map(result => result.name))
    .then(repo =>
      repo.forEach(element => {
        let list = document.querySelector("ul");
        let li = document.createElement("li");
        li.innerHTML = element;
        list.append(li);
      })
    )
    .then(res => console.log(res));
  e.preventDefault();
});
