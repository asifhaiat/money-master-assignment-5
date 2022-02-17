document.getElementById("calculate").addEventListener("click", function () {
    const income = document.getElementById("income-input-field");

    // for expenses:
    const foodCostText = document.getElementById("food");
    const foodCostTextValue = foodCostText.value;
    const foodCostAmount = parseFloat(foodCostTextValue);
    const rentCostText = document.getElementById("rent");
    const rentCostTextValue = rentCostText.value;
    const rentCostAmount = parseFloat(rentCostTextValue);
    const clothesCostText = document.getElementById("clothes");
    const clothesCostTextValue = clothesCostText.value;
    const clothesCostAmount = parseFloat(clothesCostTextValue);

    // totalExpense:
    const totalExpenses = document.getElementById("total-expenses");
    totalExpenses.textContent = foodCostAmount + rentCostAmount + clothesCostAmount;

    // totalBalance:
    const totalBalance = document.getElementById("total-balance");
    totalBalance.textContent = parseFloat(income.value) - totalExpenses.textContent;

    /*clear the input fields:
    income.value = "";
    foodCostText.value = "";
    rentCostText.value = "";
    clothesCostText.value = "";*/
});

// for saving:
document.getElementById("save-button").addEventListener("click", function () {
    const save = document.getElementById("save-input");
    const saveAmountText = save.value;
    const saveAmountValue = parseFloat(saveAmountText);

    // set the savingAmount:
    const income = document.getElementById("income-input-field");
    const savingAmount = document.getElementById("saving-amount");
    savingAmount.textContent = parseFloat(income.value) * (saveAmountValue / 100);

    // totalExpenses:
    // for expenses:
    const foodCostText = document.getElementById("food");
    const foodCostTextValue = foodCostText.value;
    const foodCostAmount = parseFloat(foodCostTextValue);
    const rentCostText = document.getElementById("rent");
    const rentCostTextValue = rentCostText.value;
    const rentCostAmount = parseFloat(rentCostTextValue);
    const clothesCostText = document.getElementById("clothes");
    const clothesCostTextValue = clothesCostText.value;
    const clothesCostAmount = parseFloat(clothesCostTextValue);

    // totalExpense:
    const totalExpenses = document.getElementById("total-expenses");
    totalExpenses.textContent = foodCostAmount + rentCostAmount + clothesCostAmount;
    const totalBalance = document.getElementById("balance");
    totalBalance.textContent = parseFloat(income.value) - totalExpenses.textContent;
    const remainingBalance = document.getElementById("remaining-balance");
    remainingBalance.textContent = totalBalance.textContent - savingAmount.textContent;
});
