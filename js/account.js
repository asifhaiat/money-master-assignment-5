document.getElementById('calculate').addEventListener('click', function(){
    // food input field
    const foodInputField = document.getElementById('food');
    const foodInputText = foodInputField.value;
    const foodInputInt = parseFloat(foodInputText);
    // console.log();
    foodInputField.value = '';
    
    // rent input field
    const rentInputField = document.getElementById('rent');
    const rentInputText = rentInputField.value;
    const rentInputInt = parseFloat(rentInputText);
    rentInputField.value = '';
    
    // cloths input field
    const clothsInputField = document.getElementById('cloths');
    const clothsInputText = clothsInputField.value;
    const clothsInputInt = parseFloat(clothsInputText);
    clothsInputField.value = '';

    // calculate total expenses
    const totalExpensesInput = document.getElementById('total-expenses');
    const totalExpensesText = totalExpensesInput.innerText;
    const totalExpenses = parseFloat(totalExpensesText);
    totalExpensesInput.innerText = foodInputInt + rentInputInt + clothsInputInt ;

    


});
