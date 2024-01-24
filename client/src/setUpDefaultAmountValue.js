import formatNumber from "./formatNumber.js";

const setUpDefaultAmountValue = (ammountInput, currencyCodeSpan, fromCurrency, keyword) => {
    
    if (keyword === "currencyChanged") {
        currencyCodeSpan.textContent = fromCurrency.value;
    } else {
        ammountInput.value = formatNumber(1);
        currencyCodeSpan.textContent = fromCurrency.value;
    }
}

export default

setUpDefaultAmountValue