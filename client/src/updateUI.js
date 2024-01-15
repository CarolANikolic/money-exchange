const updateUI = (currencyResult) => {
    const homePage = document.getElementById("homePage");

    const existingResultSection = document.getElementById("resultSection");
    if (existingResultSection) {
        existingResultSection.remove();
    }

    const resultSection = document.createElement("section");
    resultSection.id = "resultSection"; 

    const conversionResult = document.createElement("h2");
    conversionResult.innerText = currencyResult;

    resultSection.appendChild(conversionResult);
    homePage.appendChild(resultSection);
};

export default updateUI;
