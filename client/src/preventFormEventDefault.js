const preventFormEventDefault = (formId) => {
    const form = document.getElementById(formId);
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    });
}


export default preventFormEventDefault