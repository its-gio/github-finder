import { ID , SECRET } from "./keys.js";

class Github {
  // promise.all([arrayOf, fetches])
  getInfo(user) {
    fetch(`https://api.github.com/users/its-gio?client_id=${ID}&client_secret=${SECRET}`)
      .then(blob => blob.json())
      .then(data => console.log(data));
  }
}

document.getElementById("name").addEventListener("keyup", (e) => {
  const GH = new Github;

  GH.getInfo(e.target.value);
})