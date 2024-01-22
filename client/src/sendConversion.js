import fetchData from "./fetchData.js";
import updateUI from "./updateUI.js";

const sendConversion = (convertBtn) => {
    convertBtn.addEventListener("click", async () => {
        try {
            const amount = document.getElementById("amount").value.split(" ");
            const fromCurrency = document.getElementById("from").value;
            const toCurrency = document.getElementById("to").value;
            const data =  { 
                amount: amount, 
                fromCurrency: fromCurrency, 
                toCurrency: toCurrency 
            };
            
            const result = await fetchData(
                data, 
                "convert");
            
            const convertedCurrency = result.rates[toCurrency];
            const ammoutToDisplay = `${amount.join(" ").replace(/,/g, "")} =`;
            const convertedResult = `${toCurrency} ${convertedCurrency}`;
                
            updateUI(
                ammoutToDisplay, 
                convertedResult);

        } catch (error) {
            console.log(error)
        }
    })

    const form = document.getElementById("conversionForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    });
}

export default sendConversion