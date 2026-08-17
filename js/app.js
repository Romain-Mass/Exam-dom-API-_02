const form = document.querySelector("form");
const title1 = document.querySelector("#titre");
const url1 = document.querySelector("#url");
const desc = document.querySelector("#description");

const container = document.querySelector(".favoris-container");

async function API() {
  const response = await fetch("http://10.69.4.8:8100/bookmarks", {
    method: "GET",
    header: {
      "Content-type": "application/json",
      Authorization: "Bearer e1e681e30a0291eddc2db0670bf9f421",
    },
  });

  const data = await response.json();

  return data;
}

function load(TabAPI) {
  for (let i = 0; i < API.length; i++) {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.textContent = TabAPI[i].title1.value;
    a.setAttribute("href", TabAPI[i].URL.value);

    const p = document.createElement("p");
    p.textContent = TabAPI[i].desc.value;

    li.append(a, p);
    container.appendChild(li);

    return container;
  }
}

function favos() {
  const li = document.createElement("li");

  const a = document.createElement("a");
  a.textContent = title1.value;
  a.setAttribute("href", URL.value);

  const p = document.createElement("p");
  p.textContent = desc.value;

  li.append(a, p);
  container.appendChild(li);

  return container;
}

document.addEventListener("DOMContentLoaded", async () => {
  const resAPI = await API();
  load(resAPI);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  favos();
  API();
});
