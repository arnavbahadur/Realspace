import React ,{ createContext, useContext, useEffect, useReducer } from "react"
import axios from "axios"
import reducer from '../reducer/DataReducer'

const DataContext = createContext()

const API ={
    property : "/propertyapi",
    project : "/projectapi",
} 

const initialState = {
    propertyData : [],
    isLoading : false,
    isError : false,
    projectData : []
    
}

const DataProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const getData = async(url)=>{

        dispatch({type : "LOADING"})
        try {
            //get property data 
            const res1 = await axios.get(url.property)
            const property = await res1.data
            console.log(res1)
            //get project data 
            const res2 = await axios.get(url.project)
            const project = await res2.data
            console.log(res2)
            // set property ,project
            dispatch({type:"SET_DATA",payload:{project,property}})
        } catch (error) {
            dispatch({type : "SET_ERROR"})
        }
        
    }
    console.log(state.projectData)

    useEffect(() => {
        getData(API)
    }, [])
    
    return(
        <DataContext.Provider value = {{...state}}>
            {children}
        </DataContext.Provider>
    )
}

const useData = ()=>{
    return useContext(DataContext);
}

export {DataProvider,DataContext,useData}