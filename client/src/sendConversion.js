const sendConversion = (convertBtn) => {
    convertBtn.addEventListener("click", () => {
        try {
            const amount = document.getElementById("amount").value;
            const fromCurrency = document.getElementById("from").value;
            const toCurrency = document.getElementById("to").value;

            const params = new URLSearchParams();
            params.append("amount", amount);
            params.append("fromCurrency", fromCurrency);
            params.append("toCurrency", toCurrency);
            
            fetch(`/convert`, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: params.toString()
            })

        } catch (error) {
            console.log(error)
        }
    })
}

export default sendConversion