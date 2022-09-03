function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const valueInfield = inputField.value;
  const value = parseFloat(valueInfield);
  inputField.value = "";
  return value;
}

function getInnerTextValue(fieldId) {
  const fieldTag = document.getElementById(fieldId);
  const fieldValueInText = fieldTag.innerText;
  const value = parseFloat(fieldValueInText);
  return value;
}

function updateTotal(fieldId, amount) {
  const previousTotal = getInnerTextValue(fieldId);
  const newTotal = previousTotal + amount;
  document.getElementById(fieldId).innerText = newTotal;
}

function updateBalance(amount, isAdding) {
  const perviousBalance = getInnerTextValue("balance-total");
  let newBalance;
  if (isAdding == true) {
    newBalance = perviousBalance + amount;
  } else {
    newBalance = perviousBalance - amount;
  }

  document.getElementById("balance-total").innerText = newBalance;
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const amount = getInputValue("deposit-input");
    if (amount > 0) {
      updateTotal("deposit-total", amount);
      updateBalance(amount, true);
    }
  });

//handle withdraw
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const amount = getInputValue("withdraw-input");
    const balance = getInnerTextValue("balance-total");
    if (amount > 0 && amount <= balance) {
      updateTotal("withdraw-total", amount);
      updateBalance(amount, false);
    }
  });
