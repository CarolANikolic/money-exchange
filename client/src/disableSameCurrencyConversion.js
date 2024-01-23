const disableSameCurrencyConversion = (allCurrencies, selectedCurrencyState, currencyCode) => {
    
    selectedCurrencyState.optionToRemove && (selectedCurrencyState.optionToRemove.disabled = false);
    selectedCurrencyState.optionToRemove = [...allCurrencies.options].find((option) => option.value === currencyCode);
    selectedCurrencyState.optionToRemove && (selectedCurrencyState.optionToRemove.disabled = true);
}

export default disableSameCurrencyConversion