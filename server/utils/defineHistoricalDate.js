const defineHistoricalDate = (date) => {
    const today = new Date();
    
    let historicalDateOriginal = new Date();
    historicalDateOriginal.setDate(today.getDate() - date);

    const day = historicalDateOriginal.getDate().toString().padStart(2, '0');
    const month = (historicalDateOriginal.getMonth() + 1).toString().padStart(2, '0');
    const year = historicalDateOriginal.getFullYear();

    const historicalDate = `${year}-${month}-${day}`;
    
    console.log("historical date:", historicalDate);

    return historicalDate;
}

export default defineHistoricalDate;
