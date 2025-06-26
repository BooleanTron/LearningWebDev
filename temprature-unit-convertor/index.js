const temprature = document.getElementById("tempratureInput");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert() {
  temp = Number(temprature.value);
  if (toFahrenheit.checked) {
    temp = temp * 9 / 5 + 32;
    result.textContent = temp.toFixed(1) + " Degree Fahrenheit";
  }
  else if (toCelsius.checked) {
    temp = (temp - 32) * 5 / 9;
    result.textContent = temp.toFixed(1) + " Degree Celsius"
  }
  else {
    result.textContent = "Select a Unit";
  }
}
