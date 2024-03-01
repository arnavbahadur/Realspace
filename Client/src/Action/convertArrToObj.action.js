const convertArrToObj = (arr, key) => {
    return arr.reduce((obj, item) => {
        obj[item[key]] = item;
        return obj;
    }, {});
};
export default convertArrToObj