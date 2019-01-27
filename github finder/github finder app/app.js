// ---------- API SECTION ----------
class Tokan {
  constructor() {
    this.client_id = "8cb10047d9eeaa7e3528";
    this.client_secret = "4fd4c31468e780a0e514c4c961dce6b367a859c5";
    this.repos_count = 15;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );
    const repos = await repoResponse.json();
    const profile = await profileResponse.json();
    return {
      profile,
      repos
    };
  }
}
// ---------- INTERFACE SECTION ----------
class Interface {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  userProfile(user) {
    this.profile.innerHTML = `
    
    <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
    <img class="activator" src="${user.avatar_url}"></div><a href="${
      user.html_url
    }" target="_blank" class="btn">Profile</a></div>
    <h3 class="heading">User Repos</h3>
    <div id="repos"></div>

    `;
  }
  showRepos(repos) {
    let output = "";
    repos.forEach(function(repo) {
      output += `
      <div class="list">
             <ul class ="repo-list"> <li><a href="${
               repo.html_url
             }" target="_blank">${repo.name}</a><li><ul>  </div> 
      `;
    });
    document.getElementById("repos").innerHTML = output;
  }
}
const tokan = new Tokan();
const interface = new Interface();
const searchUser = document.getElementById("search-user");
searchUser.addEventListener("keyup", event => {
  const userText = event.target.value;
  if (userText !== "") {
    tokan.getUser(userText).then(data => {
      interface.userProfile(data.profile);
      interface.showRepos(data.repos);
    });
  }
});
