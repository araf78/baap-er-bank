// function use
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear the deposit input field
    inputField.value = '';
    return amountValue;
};
function updateTotalField(totalFieldId, inputAmount){
    const totalField = document.getElementById(totalFieldId);
    const totalText = totalField.innerText;
    const totalValue = parseFloat(totalText);
    totalField.innerText = totalValue + inputAmount;

    return totalField.innerText;
};
function depositBalanceField(balanceFieldId, inputAmount){
    debugger;
    const balanceField = document.getElementById(balanceFieldId);
    const balanceTotalText = balanceField.innerText;
    const balanceTotal = parseFloat(balanceTotalText);
    balanceField.innerText  = balanceTotal + inputAmount;
    
}
function withdrawBalanceField(balanceFieldId, inputAmount){
    debugger;
    const balanceField = document.getElementById(balanceFieldId);
    const balanceTotalText = balanceField.innerText;
    const balanceTotal = parseFloat(balanceTotalText);
    balanceField.innerText  = balanceTotal - inputAmount;
    
}

// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositAmountText);
    const depositAmount = getInputValue('deposit-input');

    // update deposit total
  /*   const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositTotal + depositAmount; */
    const newDepositTotal = updateTotalField('deposit-total', depositAmount);

    // update account balance 
/*     const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + depositAmount; */
    depositBalanceField('balance-total', depositAmount);
  
});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
  /*   const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount); */
    const withdrawAmount = getInputValue('withdraw-input');
    

    // set withdraw total
/*     const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal; */
    updateTotalField('withdraw-total', withdrawAmount)

    // update balance
/*     const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - withdrawAmount;

    balanceTotal.innerText = newBalanceTotal; */
    withdrawBalanceField('balance-total', withdrawAmount);

})