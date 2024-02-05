import createAndAppendElement from "./createAndAppendElement.js";

const createTableBody = (table, data, currencyCode) => {
    const tableBody = document.createElement("tbody");

    for (const [date, rateObj] of Object.entries(data)) {
        const rate = rateObj[currencyCode] || '';
        const row = document.createElement("tr");

        createAndAppendElement(
            "td", 
            date, 
            "tableCell", 
            row);

        createAndAppendElement(
            "td", 
            rate, 
            "tableCell", 
            row);

        tableBody.appendChild(row);
        table.appendChild(tableBody);
    }

    return tableBody;
}

export default createTableBody;