import { useDispatch } from "react-redux";

const getUniqueValueOFPropertyFields = (arr = []) => {
  // this function gets unique values from array of objects based on keys, on the 0th level inside the object --- [{},{},{},{},{}]
  // unique values are generated from location, propertytype, price
  try {
    if (arr.length === 0) return;
    const genlocation = new Set();
    const genproperty = new Set();
    const genprice = new Set();
    const genPurpose = new Set();
    const genBHK = new Set();

    arr.map((item) => {
      genlocation.add(item.location);
      genproperty.add(item.propertytype);
      genprice.add(item.price);
      genPurpose.add(item.Purpose);
      genBHK.add(convertIntoBHK(item,true))
    });
    //  console.log(genlocation)
    return {
      location: Array.from(genlocation),
      propertyType: Array.from(genproperty),
      price: Array.from(genprice),
      purpose: Array.from(genPurpose),
      BHK: Array.from(genBHK),
    };
  } catch (error) {
    console.log(error);
  }
  return null;
};

const convertIntoBHK = (value,intoBHK=false) => {
  try {
    if(intoBHK){
        let resultStr = value?.bedRoom;      
        resultStr += ' BHK'
        return resultStr;
    }
    else{
        return Number(value[0][0])
    }
  } catch (error) {
      console.log(error)
  }
}

export { getUniqueValueOFPropertyFields,convertIntoBHK };
