import selectCurrencyCode from "./selectCurrencyCode.js";
import sendConversion from "./sendConversion.js";
import getRateHistory from "./getRateHistory.js";
import disableSameCurrencyConversion from "./disableSameCurrencyConversion.js";

document.addEventListener("DOMContentLoaded", async () => {
    const convertButton = document.getElementById("convert");
    const visualizeHistoryBtn = document.getElementById("visualize-history");
    const fromCurrency = document.getElementById("from"); 
    const toCurrency = document.getElementById("to");
    const selectedCurrencyState = { optionToRemove: null};

    selectCurrencyCode();

    disableSameCurrencyConversion(
        fromCurrency, 
        selectedCurrencyState, 
        toCurrency.value);

    fromCurrency.addEventListener("change", () => {
        disableSameCurrencyConversion(
            toCurrency, 
            selectedCurrencyState, 
            fromCurrency.value);
    });

    toCurrency.addEventListener("change", () => {
        disableSameCurrencyConversion(
            fromCurrency, 
            selectedCurrencyState, 
            toCurrency.value);
    });

    document.getElementById('from').addEventListener('change', () => {
        selectCurrencyCode("currencyChanged");
    });

    sendConversion(convertButton);
    getRateHistory(visualizeHistoryBtn)
})


