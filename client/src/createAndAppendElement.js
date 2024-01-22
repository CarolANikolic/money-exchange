const createAndAppendElement = (tag, text, parentElement) => {
    const element = document.createElement(tag);
    element.innerText = text;
    parentElement.appendChild(element);
};

export default createAndAppendElement