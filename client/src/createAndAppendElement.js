const createAndAppendElement = (tag, text, className, parentElement) => {
    const element = document.createElement(tag);
    element.innerText = text;
    element.classList.add(className)
    parentElement.appendChild(element);
};

export default createAndAppendElement