const desc = document.querySelector(".js-desc"),
  credit = document.querySelector(".js-credit");

const OPENED_CLASS = "js-open",
  CLOSED_CLASS = "js-closed";

function init() {
  desc.querySelector(".js-desc>i").addEventListener("click", handleClick);
  credit.querySelector(".js-credit>i").addEventListener("click", handleClick);
}

function handleClick(event) {
  const work = [
    event.target.parentNode.querySelector("h3"),
    event.target.parentNode.querySelector("i"),
    event.target.parentNode.querySelector("div"),
  ];
  work.forEach((element) => {
    let i = 0;
    if (element.classList.contains(OPENED_CLASS)) i++;
    if (element.classList.contains(CLOSED_CLASS)) i++;
    if (i !== 1) return false;
    element.classList.toggle(OPENED_CLASS);
    element.classList.toggle(CLOSED_CLASS);
  });
  work[1].classList.toggle("fa-chevron-left");
  work[1].classList.toggle("fa-chevron-down");
}

init();
