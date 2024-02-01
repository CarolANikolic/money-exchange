import validateInput from "./validateInput.js";
import fetchData from "./fetchData.js";
import formatNumber from "./formatNumber.js";
import updateUI from "./updateUI.js";

const decimalRegex = /\.00$/;
const commaPeriodRegex = /[,.]/g;

const sendConversion = (convertBtn, amountContainer) => {
    convertBtn.addEventListener("click", async () => {
        const amountInput = document.getElementById("amount");
        const fromCurrency = document.getElementById("from").value;
        const toCurrency = document.getElementById("to").value;

        const isValid = validateInput(
            amountInput.value,
            amountContainer);

        try {
            if (!isValid) {
                return;
            }

            const data = {
                amount: parseFloat(amountInput.value.replace(decimalRegex, "").replace(commaPeriodRegex, "")),
                fromCurrency: fromCurrency,
                toCurrency: toCurrency,
            };
            
            const result = await fetchData(
                data,
                "convert",
                "Conversion request failed."
            );

            const convertedCurrency = formatNumber(result.rates[toCurrency]);
            const formattedAmount = formatNumber(amountInput.value);
            amountInput.value = formattedAmount;
            const amountToDisplay = `${fromCurrency} ${formattedAmount} =`;
            const convertedResult = `${toCurrency} ${convertedCurrency}`;
            
            updateUI(amountToDisplay, convertedResult);
        
        } catch (error) {
            console.log(error);
        }

    });

};

    export default sendConversion;

