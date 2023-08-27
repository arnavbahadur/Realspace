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
    projectData : [],
    saleFeatured :[],
    rentFeatured : [],
    compared : [],
    // singleData : {},
    // houseSale : [],
    // house
}

const DataProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const getData = async(url)=>{

        dispatch({type : "LOADING"})
        try {
            //get property data 
            const res1 = await axios.get(url.property)
            const property = await res1.data
            // console.log(res1)
            //get project data 
            const res2 = await axios.get(url.project)
            const project = await res2.data
            // console.log(res2)
            // set property ,project
            dispatch({type:"SET_DATA",payload:{project,property}})
        } catch (error) {
            dispatch({type : "SET_ERROR"})
        }
        
    }
    // console.log(state.projectData)

    useEffect(() => {
        getData(API)
    }, [])
    const getSingleData = async(url)=>{
        dispatch({type : "SET_SINGLE_LOADING"})
        try {
            const res = await axios.get(url)
            const singleData = await res.data
            dispatch({type : "SET_SINGLE_DATA", payload : singleData})
        } catch (error) {
            dispatch({type : "SET_SINGLE_ERROR"})
        }
    }
    return(
        <DataContext.Provider value = {{...state,getSingleData}}>
            {children}
        </DataContext.Provider>
    )
}

const useData = ()=>{
    return useContext(DataContext);
}

const useGetSingleData = (type,id)=>{
    const {getSingleData} = useData();
    useEffect(() => {
      getSingleData()
    }, [])
    
}

export {DataProvider,DataContext,useData}