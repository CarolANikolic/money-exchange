const defineHistoricalDate = (date) => {
    const today = new Date();
    
    let historicalDateOriginal = new Date();
    historicalDateOriginal.setDate(today.getDate() - date);

    const historicalDateWithoutTime = historicalDateOriginal.toLocaleDateString();
    const historicalDateString = historicalDateWithoutTime.toLocaleString();
    const dateParts = historicalDateString.split("/");
    const historicalDate = dateParts[2] + "-" + dateParts[0] + "-" + dateParts[1];

    return historicalDate
}

export default defineHistoricalDate