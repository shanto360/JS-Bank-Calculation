document.getElementById('user-input-money-btn').addEventListener('click', function(){
    const userInput = document.getElementById('user-input-money');
    const userInputText = userInput.value;
    const userInputAmount = parseFloat(userInputText);
    // console.log(userInputAmount)
    // get current user input money
    const userInputTotal = document.getElementById('user-input-money-total');
    const userInputTotalMoney = userInputTotal.innerText;
    const previouserInputTotalMoney = parseFloat(userInputTotalMoney)
    userInputTotal.innerText = previouserInputTotalMoney + userInputAmount;
    // update balance
    const userTotalMoney = document.getElementById('user-input-output-total-money');
    const userTotalText = userTotalMoney.innerText;
    const previousUserTotalMoney = parseFloat(userTotalText);
    userTotalMoney.innerText = previousUserTotalMoney + userInputAmount;
    // clear input field
    userInput.value = '';
});
document.getElementById('user-output-money-btn').addEventListener('click', function(){
    const userOutput = document.getElementById(' user-output-money');
    const userOutputText = userOutput.value;
    const userOutputMoney = parseFloat(userOutputText)
    // get pdate user output money
    const useroutputTotal = document.getElementById('user-output-total-money');
    const userOutputTotalMoney = useroutputTotal.innerText;
    const previousOutputTotalMoney = parseFloat(userOutputTotalMoney);
    useroutputTotal.innerText = previousOutputTotalMoney + userOutputMoney;
    // update balance after withdraw
    const balanceTotal = document.getElementById('user-input-output-total-money');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotalMoney = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousbalanceTotalMoney - userOutputMoney;
    // clear withdraw field
    userOutput.value = '';
})