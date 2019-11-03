import { ID , SECRET } from "./keys.js";

document.querySelector("form").addEventListener("submit", (e) => e.preventDefault());
const profileUI = document.querySelector("#profile");
const reposUI = document.querySelector("#repos");
const notFound = document.querySelector("#four0four");

class Github {
  getInfo(userTyped) {
    const milk = fetch(`https://api.github.com/users/${userTyped}?client_id=${ID}&client_secret=${SECRET}`)
      .then(blob => blob.json());
    const shake = fetch(`https://api.github.com/users/${userTyped}/repos?client_id=${ID}&client_secret=${SECRET}`)
      .then(blob => blob.json());
    
    return Promise.all([milk, shake]);
  }

  createProfile(user) {
    console.log(user)
    profileUI.innerHTML = ``;
  }
  
  createRepos(repos) {
    console.log(repos)
    reposUI.innerHTML = ``;
  }
  
  check(username) {
    notFound.innerHTML = `"${username}" does not exist`;
    notFound.classList.add("show");

    setTimeout(() => notFound.classList.remove("show"), 5000);
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