let resultBox = document.querySelector("#resultbox");
let buttons = document.querySelectorAll("button");
let allClear = document.querySelector("#allclear");

let result = "";
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "AC") {
      resultBox.value = "";
    } else if (e.target.innerHTML === "=") {
      result = eval(result);
      resultBox.value = result;
    } else if (e.target.value === "del") {
      result = result.substring(0, result.length - 1);
      resultBox.value = result;
    } else {
      resultBox.value = result += button.value;
    }
  });
});

