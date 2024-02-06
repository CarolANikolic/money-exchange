const createTableHead = (table, columnNames) => {

    const tableHead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    columnNames.forEach(name => {
        const headerColum = document.createElement("th");
        headerColum.textContent = name;
        headerColum.classList.add("column" + name);
        headerRow.appendChild(headerColum);
        tableHead.appendChild(headerRow);
        table.appendChild(tableHead);
    });
};

export default createTableHead