const getRateHistory = (visualizeHistoryBtn) => {
    visualizeHistoryBtn.addEventListener("click", async () => {
        try {
            const currencyCode = document.getElementById("currencies").value;
            const historicalDate = document.getElementById("historical-rates").value;

            const data = {
                currency: currencyCode,
                historicalDate: historicalDate
            }

            const response = await fetch("/historical", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                const historicalRates = result;
            } else {
                console.error("Historical rate visualization failed:", response.statusText);
            }

        } catch (error) {
            console.log(error)
        }
    }) 

    const form = document.getElementById("historyForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    });
}

export default getRateHistory