document.getElementById("calculate").addEventListener("click", function () {
  const foodAmount = getInputValue("food") || 0;
  const rentAmount = getInputValue("rent") || 0;
  const clotheAmount = getInputValue("clothes") || 0;

  // calculate total Expense:
  const totalExpenses = totalCalculateValue(
    foodAmount,
    rentAmount,
    clotheAmount
  );

  // calculate total total Balance:
  const income =
    parseFloat(document.getElementById("income-input-field").value) || 0;
  const totalBalance = document.getElementById("total-balance");
  totalBalance.textContent = income - totalExpenses;

  /*clear the input fields:
    income.value = "";
    foodCostText.value = "";
    rentCostText.value = "";
    clothesCostText.value = "";*/
});

// for saving:
document.getElementById("save-button").addEventListener("click", function () {
  const saveAmountValue = getInputValue("save-input") || 0;
  // set the savingAmount:
  const income =
    parseFloat(document.getElementById("income-input-field").value) || 0;
  const savingAmount = document.getElementById("saving-amount") || 0;
  savingAmount.textContent = income * (saveAmountValue / 100);

  // totalExpenses:
  // for expenses:
  const foodCostAmount = getInputValue("food") || 0;
  const rentCostAmount = getInputValue("rent") || 0;
  const clothesCostAmount = getInputValue("clothes") || 0;

  // totalExpense:
  const totalExpenses = totalCalculateValue(
    foodCostAmount,
    rentCostAmount,
    clothesCostAmount
  );
  const totalBalance = document.getElementById("balance") || 0;
  const total = income - totalExpenses;
  if (balance > 0) {
    totalBalance.textContent = total;
    // const errorBalance = document.getElementById("error-balance");
    // errorBalance.style.display = "none";
  } else {
    const errorBalance = document.getElementById("error-balance");
    errorBalance.style.display = "block";
  }

  const remainingBalance = document.getElementById("remaining-balance");
  const balance = totalBalance.textContent - savingAmount.textContent;

  if (balance < 0) {
    const errorRemaining = document.getElementById("error-remaining");
    errorRemaining.style.display = "block";
  } else {
    remainingBalance.textContent = balance;
    const errorRemaining = document.getElementById("error-remaining");
    errorRemaining.style.display = "none";
  }
});

function getInputValue(text) {
  const getText = document.getElementById(text);
  const textValue = getText.value;

  const amount = parseFloat(textValue);
  if (textValue != "") {
    if (isNaN(textValue)) {
      const errorMessage = document.getElementById("error-message");
      errorMessage.style.display = "block";
    } else {
      const errorMessage = document.getElementById("error-message");
      errorMessage.style.display = "none";
      return amount;
    }
  }
}

function totalCalculateValue(food, rent, cloth) {
  const totalExpenses = document.getElementById("total-expenses");
  total = food + rent + cloth;
  totalExpenses.textContent = total;
  return total;
}
