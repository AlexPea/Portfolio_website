// Adds and removes classes from element
const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

// Takes percentages and changes style of the span element
const counters = document.querySelectorAll(".progress__percent"),
  lines = document.querySelectorAll(".progress__item-bar span");

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
