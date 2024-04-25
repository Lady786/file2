const input = document.querySelector(".input");
const form = document.querySelector(".form");
const box = document.querySelector(".box");

let arr = [];

const render = () => {
  box.innerHTML = arr
    .map(
      (item) => `
    <div class="list_container">
      <h1 class="title">${item.title}</h1>
      <button class="btn" className="btn" onclick="deleteItem(${item.id})">Delete</button>
      <button class="btn" onclick="editItem(${item.id})">Edit</button>
    </div>
  `
    )
    .join("");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  arr.push({ id: Date.now(), title: input.value });
  input.value = "";
  render();
});

const deleteItem = (id) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      arr.splice(i, 1);
    }
  }
  render();
};

const editItem = (id) => {
  let newStr = prompt("You can edit your list here");
  for (let i = 0; i < arr.length; i++) {
    if (id === arr[i].id) {
      arr[i].title = newStr;
    }
  }

  render();
};
