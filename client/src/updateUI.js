import createAndAppendElement from "./createAndAppendElement.js";

const updateUI = (amount, currencyResult) => {
    const conversionForm = document.getElementById("conversionForm");
    const existingResultSection = document.getElementById("resultSection");
    
    if (existingResultSection) {
        existingResultSection.remove();
    }

    const resultSection = document.createElement("section");
    resultSection.id = "resultSection";

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

export default updateUI;
