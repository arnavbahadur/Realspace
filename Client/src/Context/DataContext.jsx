import React ,{ createContext, useContext, useEffect, useReducer } from "react"
import axios from "axios"
import reducer from './reducer/DataReducer'

const DataContext = createContext()

const API ={
    property : "/propertyapi",
    project : "/projectapi",
} 

const initialState = {
    isLoading : false,
    isError : false,
    propertyData : [],
    saleProperty : [],
    rentProperty : [],
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
            const res1 = await axios.get(url.property)
            const property = await res1.data
            const res2 = await axios.get(url.project)
            const project = await res2.data
            dispatch({type:"SET_DATA",payload:{project,property}})
        } catch (error) {
            dispatch({type : "SET_ERROR"})
        }
        
    }
    // console.log(state.projectData)

    useEffect(() => {
        getData(API)
    }, [])
    useEffect(()=>{
        dispatch({type : "SORT_DATA"})
    },[state.propertyData])
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