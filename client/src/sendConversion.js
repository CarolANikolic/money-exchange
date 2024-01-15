import updateUI from "./updateUI.js";

const sendConversion = (convertBtn) => {
    convertBtn.addEventListener("click", async () => {
        try {
            let amount = document.getElementById("amount").value.split(" ");
            const fromCurrency = document.getElementById("from").value;
            const toCurrency = document.getElementById("to").value;

            const params = new URLSearchParams();
            params.append("amount", amount);
            params.append("fromCurrency", fromCurrency);
            params.append("toCurrency", toCurrency);
            
            const response = await fetch(`/convert`, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: params.toString()
            });

            if (response.ok) {
                const result = await response.json();
                const convertedCurrency = result.rates[toCurrency];
                updateUI(`${toCurrency} ${convertedCurrency}`)

            } else {
                console.error("Conversion request failed:", response.statusText);
            }
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