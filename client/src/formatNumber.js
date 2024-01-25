const formatNumber = (number) => {
    const parsedNumber = parseFloat(number);

    if (!isNaN(parsedNumber)) {
        return parsedNumber.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
        console.log("Invalid input");
    }
};

export default formatNumber