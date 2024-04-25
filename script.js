const counterBtn = document.querySelector(".counter-btn");
const columnEven = document.querySelector(".col-even");
const columnOdd = document.querySelector(".col-odd");
const columnDiv3 = document.querySelector(".col-div3");
const columnDiv5 = document.querySelector(".col-div5");
const columnDiv15 = document.querySelector(".col-div15");

let count = 0;

const checkNumber = (number, button) => {
  if (number % 15 === 0) {
    columnDiv15.appendChild(button);
  } else if (number % 5 === 0) {
    columnDiv5.appendChild(button);
  } else if (number % 3 === 0) {
    columnDiv3.appendChild(button);
  } else if (number % 2 === 0) {
    columnEven.appendChild(button);
  } else {
    columnOdd.appendChild(button);
  }
};

const createButton = () => {
  const numberBtn = document.createElement("button");
  numberBtn.classList.add("number-btn");
  numberBtn.innerText = count;
  checkNumber(count, numberBtn);
};

counterBtn.addEventListener("click", () => {
  count++;
  counterBtn.innerText = count;
  createButton();
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("number-btn")) {
    e.target.remove();
  }
});