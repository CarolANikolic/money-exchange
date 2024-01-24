import createAndAppendElement from "./createAndAppendElement.js";

const validateInput = (inputValue, container) => {
    // Extract the numeric part and remove non-numeric characters
    const numericValue = inputValue.replace(/[^0-9.]/g, "");

    // Allow only integer or float numbers, no empty values.
    const isIntegerOrFloat = /^(\d+(\.\d*)?|\.\d+)$/.test(numericValue);
    const errorMessageSpan = container.querySelector("span.errorMessage");

    if (!isIntegerOrFloat) {
        if (!errorMessageSpan) {
            createAndAppendElement("span", "Please enter a valid number.", "errorMessage", container);
        }
        return false;
    } else {
        if (errorMessageSpan) {
            container.removeChild(errorMessageSpan);
        }
        return true;
    }
};

export default validateInput