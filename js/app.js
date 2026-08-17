const form = document.querySelector("form");
const title = document.querySelector("#titre");
const URL = document.querySelector("#url");
const desc = document.querySelector("#description");

async function API() {
  const response = await fetch("http://10.69.4.8:8100/bookmarks", {
    method: "GET",
    header: {
      "Content-type": "application/json",
      Authorization: "Bearer e1e681e30a0291eddc2db0670bf9f421",
    },
  });

  const data = await response.json();

  console.log(data);
}

function favos() {
  const container = document.querySelector(".favoris-container");
  const li = document.createElement("li");

  const a = document.createElement("a");
  a.textContent = title.value;
  a.setAttribute("href", URL.value);

  const p = document.createElement("p");
  p.textContent = desc.value;

  li.append(a, p);
  container.appendChild(li);

  return container;
}

document.addEventListener("DOMContentLoaded", () => {});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  favos();
  API();
  // console.log(title.value, URL.value, desc.value);
});
