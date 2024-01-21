const displayHistoricalRates = (data, currencyCode) => {

    const historyForm = document.getElementById("historyForm");
    const ratesSection = document.getElementById("historicalRatesResult");

    if (ratesSection) {
        ratesSection.remove();
    }


    const historicalRatesResult = document.createElement("section");
    historicalRatesResult.id = "historicalRatesResult";


    const table = document.createElement("table");

    const tableHead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const headerDate = document.createElement("th");
    headerDate.textContent = "Date";
    headerRow.appendChild(headerDate);

    const headerRate = document.createElement("th");
    headerRate.textContent = "Rate";
    headerRow.appendChild(headerRate);

    tableHead.appendChild(headerRow);
    table.appendChild(tableHead);

    const tableBody = document.createElement("tbody");

    if (data && Object.keys(data).length > 0) {
    
        for (const [date, rateObj] of Object.entries(data)) {
            const rate = rateObj[currencyCode] || '' ;

            const row = document.createElement("tr");

            const dateCell = document.createElement("td");
            dateCell.textContent = date;
            row.appendChild(dateCell);

            const rateCell = document.createElement("td");
            rateCell.textContent = rate;
            row.appendChild(rateCell);

            tableBody.appendChild(row);
        }
    } else {
        tableBody.remove()
        const errorMessage = document.createElement("span");
        errorMessage.textContent = "No historical rates available."
    }

    table.appendChild(tableBody);

    historicalRatesResult.appendChild(table);

    historyForm.appendChild(historicalRatesResult);
};

export default displayHistoricalRates;
