document.querySelector(".click-btn").addEventListener("click", function(e) {
  let userInput = document.querySelector(".rep-input").value;
  if (userInput == "") {
    alert("input must be filled with user name");
  } else {
    class Myhttp {
      constructor() {
        this.http = new XMLHttpRequest();
      }
      getPost(url) {
        return new Promise((resolve, reject) => {
          this.http.open("GET", url, true);
          this.http.onload = () => {
            if (this.http.status === 200) {
              let repo = [];
              repo = JSON.parse(this.http.responseText);
              let repos = repo.map(item => item.name);
              repos.forEach(element => {
                let list = document.querySelector("ul");
                let li = document.createElement("li");
                li.innerHTML = element;
                list.appendChild(li);
              });
              resolve();
            } else {
              reject("Something Went Wrong");
            }
          };
          this.http.send();
        });
      }
    }
    const obj = new Myhttp();

    obj
      .getPost(`https://api.github.com/users/${userInput}/repos`)
      .then(response => {})
      .catch(err => console.log(err));
  }
  e.preventDefault();
});
