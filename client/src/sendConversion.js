import updateUI from "./updateUI.js";

const fetchConversionData = async (data, endPoint) => {

    const response = await fetch(`/${endPoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        return await response.json()
    } else {
        throw new Error(`Conversion request failed: ${response.statusText}`)
    }
}

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
            
            const result = await fetchConversionData(
                data, 
                "convert");
            
            const convertedCurrency = result.rates[toCurrency];
            const convertedResult = `${toCurrency} ${convertedCurrency}`;
            const ammoutToDisplay = `${amount.join(" ").replace(/,/g, "")} =`;
                
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