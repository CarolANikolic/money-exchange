import selectCurrencyCode from "./selectCurrencyCode.js";
import sendConversion from "./sendConversion.js";

document.addEventListener("DOMContentLoaded", () => {
    const convertButton = document.getElementById("convert");
    
    selectCurrencyCode();
    
    document.getElementById('from').addEventListener('change', () => {
        selectCurrencyCode("currencyChanged");
    });

    sendConversion(convertButton)
})