
document.getElementById('calculate-btn').addEventListener('click', function () {
 const foodText=inputValue('food-inputText');
 const colthText=inputValue('cloth-inputText');
 const rentText=inputValue('rent-inputText');
  const totalExpenses=foodText+colthText+rentText;
  const totalIncome=inputValue('total-Income');
  const saveBalance=totalIncome-totalExpenses;
   
     setText('total-Expenses-text',totalExpenses);
     setText('Balance-text', saveBalance);

})

// button no 2 saving
document.getElementById("saving-btn").addEventListener('click', function () {

    const savingParsentage=inputValue('saving-input');
   const expensesText=textValue('total-Expenses-text');
   const balance=textValue('Balance-text');
   
   const totalbalance= expensesText+balance;
   
   
    const savingAmount= totalbalance * (savingParsentage/100);
    setText('save-amount',savingAmount);

    const remaingBalance=balance-savingAmount;
    setText('remaing-balance',remaingBalance);

})