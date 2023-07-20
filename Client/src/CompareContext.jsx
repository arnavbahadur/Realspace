import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const CompareContext = createContext();

function CompareContextProvider(props) {
    const[Count,setCount] = useState(0);

    useEffect(()=>{
      // Count = a.itemsId.length;
      let a =JSON.parse(localStorage.getItem("compareItem"))
      setCount(a.itemsId.length)
  
    },[]);
  return (
    <CompareContext.Provider value={{Count,setCount }}>
      {props.children}
    </CompareContext.Provider>
  );
}

export default CompareContext;
export { CompareContextProvider };