import fetchData from "./fetchData.js";
import displayHisotricalRates from "./displayHistoricalRates.js";

const getRateHistory = (visualizeHistoryBtn) => {
    visualizeHistoryBtn.addEventListener("click", async () => {
        try {
            const currencyCode = document.getElementById("currencies").value;
            const historicalDate = document.getElementById("historical-rates").value;

            const data = {
                currency: currencyCode,
                historicalDate: historicalDate,
            }

            const result = await fetchData(
                data,
                "historical", 
                "Historical rate visualization failed:");

            const historicalRates = result.historicalRates;
            displayHisotricalRates(
                historicalRates, 
                currencyCode)

        } catch (error) {
            console.log(error);
        }
    });
    
        const form = document.getElementById("conversionForm");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
        });

}

export default getRateHistory