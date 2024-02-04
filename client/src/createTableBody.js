import createAndAppendElement from "./createAndAppendElement.js";

const createTableBody = (table, data, currencyCode) => {
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
        createAndAppendElement(
            "span", 
            "No historical rates available.",
            "errorMessage",
            historyForm)
    }
    
    table.appendChild(tableBody);
}

export default createTableBody