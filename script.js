let resultBox = document.querySelector("#resultbox");
let buttons = document.querySelectorAll("button");
let und = undefined
let result = "";
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "back") {
      result = result.substring(0, result.length - 1);
      resultBox.value = result;
    } else if (e.target.innerHTML === "=") {
      result = eval(result);
      resultBox.value = result;
    } else if (e.target.id === "allclear") {
      result = "";
      resultBox.value = result;
    }else if(resultBox.value == 'undefined'){
      resultBox.value = 0
    }else {
      result += e.target.innerHTML;
      resultBox.value = result;
    }
  });
});