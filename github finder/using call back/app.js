document.querySelector(".search").addEventListener("click", function() {
  const input = document.querySelector(".form-input").value;
  class HTTP {
    constructor() {
      this.http = new XMLHttpRequest();
    }
    getPost(callback, url) {
      this.http.open("GET", url, true);
      this.http.onload = () => {
        callback(this.http.responseText);
      };
      this.http.send();
    }
  }
  const obj = new HTTP();
  obj.getPost(res => {
    const a = JSON.parse(res);
    for (const item of a) {
      let li = document.createElement("li");
      li.innerHTML = item.name;
      document.querySelector(".list").appendChild(li);
    }
  }, `https://api.github.com/users/${input}/repos`);
});
