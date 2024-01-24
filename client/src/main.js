import setUpDefaultAmountValue from "./setUpDefaultAmountValue.js";
import disableSameCurrencyConversion from "./disableSameCurrencyConversion.js";
import sendConversion from "./sendConversion.js";
import getRateHistory from "./getRateHistory.js";

document.addEventListener("DOMContentLoaded", async () => {
    const convertButton = document.getElementById("convert");
    const currencyCodeSpan = document.getElementById('currencyCode');
    const amount = document.getElementById("amount")
    const fromCurrency = document.getElementById("from"); 
    const toCurrency = document.getElementById("to");
    const visualizeHistoryBtn = document.getElementById("visualize-history");
    const selectedCurrencyState = { optionToRemove: null};

    setUpDefaultAmountValue(amount, currencyCodeSpan, fromCurrency)

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
        setUpDefaultAmountValue(amount, currencyCodeSpan, fromCurrency, "currencyChanged")
    });
    
    sendConversion(convertButton);  
    (amount.length > 0  && amount.value !== ".") && (sendConversion(convertButton));   
    getRateHistory(visualizeHistoryBtn)
})


