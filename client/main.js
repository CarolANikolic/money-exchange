import selectCurrencyCode from "./selectCurrencyCode.js";

document.addEventListener("DOMContentLoaded", () => {
    selectCurrencyCode();
    
    document.getElementById('from').addEventListener('change', () => {
        selectCurrencyCode("currencyChanged");
    });
})