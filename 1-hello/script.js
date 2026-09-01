const btns = document.querySelectorAll("button[data-toggle-state]");
const box = document.querySelector("[data-panda-box]");
const btnHello = document.querySelector(".btn");
const countEl = document.querySelector("[data-count]");

let count = 0;
const coolCount = 3;

btns.forEach((btn) => btn.addEventListener("click", toggleState));

btnHello.addEventListener("click", addToCount);

function toggleState() {
  box.classList.toggle("hide");
  btnHello.classList.toggle("hide");
}

function addToCount() {
  count++;

  countEl.innerHTML = count;

  count === coolCount && countEl.classList.add("cool");
}
