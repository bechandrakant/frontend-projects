const searchTodo = document.querySelector(".search-term");
const addTodo = document.querySelector(".add");
const todos = document.querySelector(".todos");

function generateTemplate(term) {
  term = term.trim();
  let html = `
    <div class="todo">
      ${term}  <span class="delete">X</span>
    </div>
  `;
  todos.innerHTML += html;
}

searchTodo.addEventListener("keyup", (e) => {
  e.preventDefault();
  let term = e.target.value.trim().toLowerCase();
  // add filtered class
  Array.from(todos.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  // remove filtered class
  Array.from(todos.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
});

addTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = e.target.querySelector(".new-todo").value.trim();
  if(todo.length) {
    generateTemplate(todo);
    addTodo.reset();
  }
});

todos.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});