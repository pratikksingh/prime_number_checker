const inputNumber = document.querySelector("#input-number");
const checkButton = document.querySelector("#check-number");
const resultOutput = document.querySelector("#output-result");

checkButton.addEventListener("click", primeOrNot);

function primeOrNot() {
  console.log(typeof inputNumber.value);
  const inputNum = Number(inputNumber.value);

  if (inputNum === 1) {
    var res = "Non-prime";
    document.getElementById("output-result").innerText = res;
    return;
  }
  if (inputNum === 2) {
    var res = "Prime";
    document.getElementById("output-result").innerText = res;
    return;
  } else if (inputNum < 1) {
    var res = "Non-prime";
    document.getElementById("output-result").innerText = res;
  } else {
    for (let i = 2; i < inputNum; i++) {
      if (inputNum % i === 0) {
        var res = "Non-prime";
        break;
      } else {
        var res = "Prime";
      }
    }
    document.getElementById("output-result").innerText = res;
  }
}
