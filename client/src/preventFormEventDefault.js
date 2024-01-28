const preventFormEventDefault = () => {
    const form = document.getElementById("conversionForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    });
}


export default preventFormEventDefault