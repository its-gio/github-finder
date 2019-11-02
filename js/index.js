import { ID , SECRET } from "./keys.js";

class Github {
  // promise.all([arrayOf, fetches])
  getInfo(user) {
    let milk = fetch(`https://api.github.com/users/its-gio?client_id=${ID}&client_secret=${SECRET}`)
      .then(blob => blob.json());
    let shake = fetch(`https://api.github.com/users/its-gio/repos?client_id=${ID}&client_secret=${SECRET}`)
      .then(blob => blob.json());
    
    Promise.all([milk, shake])
      .then(([data1, data2]) => console.log(data1, data2));
  }
}

document.getElementById("name").addEventListener("keyup", (e) => {
  const GH = new Github;

  GH.getInfo(e.target.value);
})