const formatPrice = (price) => {
    return Intl.NumberFormat('en-IN',{style:'currency',maximumFractionDigits:0,currency:'INR'}).format(price)
};
export default formatPrice