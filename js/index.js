import { ID , SECRET } from "./keys.js";

document.querySelector("form").addEventListener("submit", (e) => e.preventDefault());

class Github {
  getInfo(userTyped) {
    const milk = fetch(`https://api.github.com/users/its-gio?client_id=${ID}&client_secret=${SECRET}`)
      .then(blob => blob.json());
    const shake = fetch(`https://api.github.com/users/its-gio/repos?client_id=${ID}&client_secret=${SECRET}`)
      .then(blob => blob.json());
    
    return Promise.all([milk, shake]);
  }
}

document.getElementById("name").addEventListener("keyup", (e) => {
  const GH = new Github;
  
  GH.getInfo(e.target.value)
    .then(([user, repos]) => [user, repos]);
})