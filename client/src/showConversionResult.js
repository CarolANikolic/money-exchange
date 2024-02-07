import createAndAppendElement from "./createAndAppendElement.js";

const showConversionResult = (amount, currencyResult) => {
    const conversionForm = document.getElementById("conversionForm");
    const existingResultSection = document.getElementById("resultSection");
    
    if (existingResultSection) {
        existingResultSection.remove();
    }

    const resultSection = document.createElement("section");
    resultSection.id = "resultSection";
    resultSection.classList.add("conversionResult");

    createAndAppendElement(
        "p", 
        amount, 
        "amount",
        resultSection);
    createAndAppendElement(
        "h2", 
        currencyResult, 
        "convertedResult",
        resultSection);

    conversionForm.appendChild(resultSection);
};

export default showConversionResult;
