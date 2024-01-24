import fetchData from "./fetchData.js";
import updateUI from "./updateUI.js";

const amountInput = document.getElementById("amount");

const sendConversion = (convertBtn) => {
    convertBtn.addEventListener("click", async () => {
        try {
            const fromCurrency = document.getElementById("from").value;
            const toCurrency = document.getElementById("to").value;
            
            const data = {
                amount: parseFloat(amountInput.value.replace(/,/g, '')),
                fromCurrency: fromCurrency,
                toCurrency: toCurrency,
            };
            
            const result = await fetchData(
                data,
                "convert",
                "Conversion request failed"
            );
            
            const convertedCurrency = result.rates[toCurrency];
            const amountToDisplay = `${fromCurrency} ${amountInput.value} =`;
            const convertedResult = `${toCurrency} ${convertedCurrency}`;
            
            updateUI(amountToDisplay, convertedResult);
        
        } catch (error) {
            console.log(error);
        }
    });

    const form = document.getElementById("conversionForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    });
};

    export default sendConversion;

