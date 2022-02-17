document.getElementById("calculate").addEventListener("click", function () {
  const foodAmount = getInputValue("food");
  const rentAmount = getInputValue("rent");
  const clotheAmount = getInputValue("clothes");

  // calculate total Expense:
  const totalExpenses = totalCalculateValue(
    foodAmount,
    rentAmount,
    clotheAmount
  );

  // calculate total total Balance:
  const income = parseFloat(
    document.getElementById("income-input-field").value
  );
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
  const saveAmountValue = getInputValue("save-input");
  // set the savingAmount:
  const income = document.getElementById("income-input-field");
  const savingAmount = document.getElementById("saving-amount");
  savingAmount.textContent = parseFloat(income.value) * (saveAmountValue / 100);

  // totalExpenses:
  // for expenses:
  const foodCostAmount = getInputValue("food");
  const rentCostAmount = getInputValue("rent");
  const clothesCostAmount = getInputValue("clothes");

  

  // totalExpense:
  const totalExpenses = totalCalculateValue(
    foodCostAmount,
    rentCostAmount,
    clothesCostAmount
  );
  const totalBalance = document.getElementById("balance");
  totalBalance.textContent = parseFloat(income.value) - totalExpenses;
  const remainingBalance = document.getElementById("remaining-balance");
  remainingBalance.textContent =
    totalBalance.textContent - savingAmount.textContent;
});

function getInputValue(text) {
  const getText = document.getElementById(text);
  const textValue = getText.value;
  const amount = parseFloat(textValue);
  return amount;
}

function totalCalculateValue(food, rent, cloth) {
  const totalExpenses = document.getElementById("total-expenses");
  total = food + rent + cloth;
  totalExpenses.textContent = total;
  return total;
}
