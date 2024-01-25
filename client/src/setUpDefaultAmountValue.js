const setUpDefaultAmountValue = (ammountInput, currencyCodeSpan, fromCurrency, keyword) => {
    
    if (keyword === "currencyChanged") {
        currencyCodeSpan.textContent = fromCurrency.value;
    } else {
        ammountInput.value = "1.00";
        currencyCodeSpan.textContent = fromCurrency.value;
    }
}

export default setUpDefaultAmountValue