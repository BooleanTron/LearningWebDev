
const myCheckbox = document.getElementById("myCheckbox");
const VisaBtn = document.getElementById("VisaBtn");
const MasterBtn = document.getElementById("MasterBtn");
const PaypalBtn = document.getElementById("PaypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
const result = document.getElementById("result");


mySubmit.onclick = function (e) {
  e.preventDefault();
  if (myCheckbox.checked) {
    subResult.textContent = `You are Subscribed!`;
  }
  else {
    subResult.textContent = `You are not Subscribed`;
  }

  if (VisaBtn.checked) {
    paymentResult.textContent = `You are payign with Visa`;
  }
  else if (MasterBtn.checked) {
    paymentResult.textContent = `You are paying with MasterCard`;
  }
  else if (PaypalBtn.checked) {
    paymentResult.textContent = `You are paying with Paypal`;
  }
  else {
    paymentResult.textContent = `You need to select a payment method`;
  }

}

