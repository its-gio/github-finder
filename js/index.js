import { ID , SECRET } from "./keys.js";

document.querySelector("form").addEventListener("submit", (e) => e.preventDefault());
const profileUI = document.querySelector("#profile");
const reposUI = document.querySelector("#repos");

class Github {
  getInfo(userTyped) {
    const milk = fetch(`https://api.github.com/users/i-gio?client_id=${ID}&client_secret=${SECRET}`)
      .then(blob => blob.json());
    const shake = fetch(`https://api.github.com/users/its-gio/repos?client_id=${ID}&client_secret=${SECRET}`)
      .then(blob => blob.json());
    
    return Promise.all([milk, shake]);
  }

  createProfile(user) {
    console.log(user)
    profileUI.innerHTML = `${user.id}`;
  }
  
  createRepos(repos) {
    console.log(repos)
    reposUI.innerHTML = `${repos.length}`;
  }

  check(username) {
    console.log(`"${username}" does not exist`);
  }
}

document.getElementById("name").addEventListener("keyup", (e) => {
  const GH = new Github;
  
  GH.getInfo(e.target.value)
    .then(([user, repos]) => {
      if (!e.target.value) return;
      if (user.message === "Not Found") {
        GH.check(e.target.value);
        throw new Error(`"${e.target.value}" does not exist`);
      }
      GH.createProfile(user);
      GH.createRepos(repos);
    })
    .catch((err) => {
        console.error(err);
    })
})