const numberValue = document.getElementById("number-value");
const addBtn = document.getElementById("button-add");
const argBtn = document.getElementById("button-arrange");
const rndBtn = document.getElementById("btn-random");
const newArrDisplay = document.getElementById("new-array");
const arrangeArray = document.getElementById("arrange-array");
const arrayDisplay = document.getElementById("array-display");
const generalArrayDisplay = document.getElementById("general-array-display");
const smArrayDisplay = document.getElementById("sm-array-display");
const mdArrayDisplay = document.getElementById("md-array-display");
const lgArrayDisplay = document.getElementById("lg-array-display");
const arraySplitter = document.getElementById("range-splitter");
const clrBtn = document.getElementById("button-clear");

let randomNumbersArray = [];
let newNum;
let inputValue;
let smallNumArr = [];
let mediumNumArr = [];
let largeNumArr = [];

function clearArr() {
  randomNumbersArray = [];
  smallNumArr = [];
  mediumNumArr = [];
  largeNumArr = [];
  render(smallNumArr, smArrayDisplay);
  render(mediumNumArr, mdArrayDisplay);
  render(largeNumArr, lgArrayDisplay);
  render(randomNumbersArray, generalArrayDisplay);
}

addBtn.addEventListener("click", function () {
  addUserNum(randomNumbersArray, numberValue);
  render(randomNumbersArray, generalArrayDisplay);
});

arraySplitter.addEventListener("click", function () {
  console.log(randomNumbersArray);
  filterArray(randomNumbersArray, smallNumArr, mediumNumArr, largeNumArr);

  if (smallNumArr) {
    sortNumbers(randomNumbersArray);
    render(smallNumArr, smArrayDisplay);
  }
  if (mediumNumArr) {
    sortNumbers(randomNumbersArray);
    render(mediumNumArr, mdArrayDisplay);
  }
  if (largeNumArr) {
    sortNumbers(randomNumbersArray);
    render(largeNumArr, lgArrayDisplay);
  }
});

argBtn.addEventListener("click", function () {
  sortNumbers(randomNumbersArray);

  render(randomNumbersArray, generalArrayDisplay);
  if (smallNumArr) {
    sortNumbers(randomNumbersArray);
    render(smallNumArr, smArrayDisplay);
  }
  if (mediumNumArr) {
    sortNumbers(randomNumbersArray);
    render(mediumNumArr, mdArrayDisplay);
  }
  if (largeNumArr) {
    sortNumbers(randomNumbersArray);
    render(largeNumArr, lgArrayDisplay);
  }
});

rndBtn.addEventListener("click", function () {
  addNewNum(randomNumbersArray);
  render(randomNumbersArray, generalArrayDisplay);
});

clrBtn.addEventListener("click", clearArr);

function getRandomNumber() {
  newNum = Math.floor(Math.random() * 100);
  console.log(newNum);
}
function getValue(arr, userValue) {
  userValue = Number(userValue.value);
  arr.push(userValue);
}

function addNewNum(arr) {
  getRandomNumber();
  arr.push(newNum);
  console.log(arr);
  console.log(newNum);
}

function addUserNum(arr, userValue) {
  getValue(arr, userValue);
  console.log(userValue);
  console.log(arr);
}

// function clearHtml(arrDisplay) {
//   arrDisplay.innerHTML = "";
// }

function sortNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Number(arr[i]) > Number(arr[j])) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}

function filterArray(arr) {
  smallNumArr = arr.filter((someNumber) => someNumber < 31);

  mediumNumArr = arr.filter((someNumber) => someNumber < 61 && someNumber > 30);

  largeNumArr = arr.filter((someNumber) => someNumber > 60);
}
function render(array, container) {
  container.innerHTML = `<li class="list-group-item ">${array.join()}</li>`;
  console.log(array, container.innerHTML);
  // for (let item of array) html = `<li>${item}</li>`;
  // container.innerHTML = html;
}
