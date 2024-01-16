const updateUI = (amount, currencyResult) => {
    const homePage = document.getElementById("homePage");

    const existingResultSection = document.getElementById("resultSection");
    if (existingResultSection) {
        existingResultSection.remove();
    }

    const resultSection = document.createElement("section");
    resultSection.id = "resultSection";

    const createAndAppendElement = (tag, text) => {
        const element = document.createElement(tag);
        element.innerText = text;
        resultSection.appendChild(element);
    };

    createAndAppendElement("p", amount);
    createAndAppendElement("h2", currencyResult);

    homePage.appendChild(resultSection);
};

export default updateUI;
