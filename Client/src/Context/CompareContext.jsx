import React, { createContext, useEffect, useReducer, useState } from "react";
import { CompareActionTypes } from "../types/types.js";
import reducer from './reducer/CompareReducer'

const CompareContext = createContext();

const initialState = {
    ItemsId : []
}

function CompareContextProvider({children}) {
    const[Count,setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
      if(localStorage.getItem("compareItem") !== undefined){
        const data = localStorage.getItem("compareItem")
        dispatch({type : CompareActionTypes.SetCompareItem, payload : JSON.parse(data)})
      }
    },[])


    // add item to compare list
    const handleAdd = (itemid)=>{
      dispatch({type:CompareActionTypes.AddCompareItem ,payload:itemid})
    }
    // remove item from compare list
    const handleRemove = (itemid)=>{
      dispatch({type:CompareActionTypes.RemoveCompareItem ,payload:itemid})
    }
    // remove all item
    const handleAllRemove = ()=>{
      dispatch({type: CompareActionTypes.DeleteCompareItems})
    }
    useEffect(()=>{
      // Count = a.itemsId.length;
        
      localStorage.setItem("compareItem",JSON.stringify(state));
      // let a =JSON.parse(localStorage.getItem("compareItem"))
      setCount(state.ItemsId.length)
  
    },[state]);
  return (
    <CompareContext.Provider value={{...state,Count,setCount,handleAdd,handleAllRemove,handleRemove}}>
      {children}
    </CompareContext.Provider>
  );
}

export default CompareContext;
export { CompareContextProvider };