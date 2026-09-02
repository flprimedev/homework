const calendar = document.querySelector("[data-calendar]");
const daysName = calendar.querySelector("[data-days-name]");

const dayNumberEl = document.querySelector("[data-day-number]");
const dayWeekEl = document.querySelector("[data-day-week]");
const dayInfoEl = document.querySelector("[data-day-info]");

calendar.addEventListener("click", (event) => {
  const target = event.target;
  target.closest("td") && selectElement(target);
});

function selectElement(elem) {
  calendar.querySelector(".selected")
    ?.classList.remove('selected');

  elem.classList.add("selected");
  printSelectedDay(elem);
}

function printSelectedDay(elem) {
  const dayNumber = elem.textContent;
  const indexElem = Array.from(elem.parentElement.children).indexOf(elem) + 1;
  const dayInfo = daysName.querySelector(`th:nth-child(${indexElem})`).getAttribute("title");

  dayNumberEl.textContent = dayNumber;
  dayWeekEl.textContent = dayInfo;

  indexElem >= 6
    ? dayInfoEl.classList.add('accent')
    : dayInfoEl.classList.remove('accent');
}
