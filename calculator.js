window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let initialAmount = document.querySelector("#loan-amount");
  let initialYears = document.querySelector("#loan-years");
  let initialRate = document.querySelector("#loan-rate");
  initialAmount.value = "5000";
  initialYears.value = "12";
  initialRate.value = "5";
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let newValues = getCurrentUIValues();
  let monthPay = calculateMonthlyPayment(newValues);
  updateMonthly(monthPay);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount;
  let i = values.rate / 100 / 12;
  let n = values.years * 12;
  let pay = (p * i) / (1 - (1 + i) ** -n);
  pay = pay.toFixed(2);
  return pay;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let finalPay = document.querySelector("#monthly-payment");
  finalPay.innerText = "$" + monthly;
}
