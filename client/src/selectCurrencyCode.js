const selectCurrencyCode = (keyword) => { 
    const selectedCurrencyCode = document.getElementById("from").value;
    const amountInput = document.getElementById("amount");
    let currentAmount = amountInput.value.split(" ");
    
    if (keyword = "currencyChanged") {
        currentAmount = currentAmount.pop()
        amountInput.value = `${selectedCurrencyCode} ${currentAmount}`;
    } else {
        amountInput.value = `${selectedCurrencyCode} ${currentAmount}`;
    }
}

export default selectCurrencyCode