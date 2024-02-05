import createTableHead from "./createTableHead.js";
import createTableBody from "./createTableBody.js";
import createAndAppendElement from "./createAndAppendElement.js";

const displayHistoricalRates = (data, currencyCode) => {
    const historyForm = document.getElementById("historyForm");
    const ratesSection = document.getElementById("historicalRatesResult");

    if (ratesSection) {
        ratesSection.remove();
    }

    const historicalRatesResult = document.createElement("section");
    historicalRatesResult.id = "historicalRatesResult";

    const table = document.createElement("table");
    const columnNames = ["Date", "Rate"];

    if (Object.keys(data).length === 0) {
        createAndAppendElement(
            "span", 
            "No historical rates available.",
            "errorMessage",
            historicalRatesResult);
    } else {
        createTableHead(table, columnNames);
        createTableBody(table, data, currencyCode);
    }

    historicalRatesResult.appendChild(table);
    historyForm.appendChild(historicalRatesResult);
};

export default displayHistoricalRates;