import createTableHead from "./createTableHead.js";
import createTableBody from "./createTableBody.js";

const displayHistoricalRates = (data, currencyCode) => {

    const historyForm = document.getElementById("historyForm");
    const ratesSection = document.getElementById("historicalRatesResult");
    const table = document.createElement("table");
    const columnNames = ["Date", "Rate"];

    if (ratesSection) {
        ratesSection.remove();
    }

    const historicalRatesResult = document.createElement("section");
    historicalRatesResult.id = "historicalRatesResult";
    
    createTableHead(table, columnNames);
    createTableBody(table, data, currencyCode)

    historicalRatesResult.appendChild(table);
    historyForm.appendChild(historicalRatesResult);
};

export default displayHistoricalRates;  