const formatNumber = (number) => {
    return parseFloat(number).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export default formatNumber