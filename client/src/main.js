import selectCurrencyCode from "./selectCurrencyCode.js";
import sendConversion from "./sendConversion.js";
import getRateHistory from "./getRateHistory.js";

document.addEventListener("DOMContentLoaded", () => {
    const convertButton = document.getElementById("convert");
    const visualizeHistoryBtn = document.getElementById("visualize-history");
    
    selectCurrencyCode();
    
    document.getElementById('from').addEventListener('change', () => {
        selectCurrencyCode("currencyChanged");
    });

    sendConversion(convertButton);
    getRateHistory(visualizeHistoryBtn)
})