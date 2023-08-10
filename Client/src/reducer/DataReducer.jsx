const DataReducer = (state,action)=>{
    console.log(action)
    switch (action.type) {
        case "SET_ERROR":
            return{
                ...state,
                isError : true,
                isLoading : false
            }
        case "SET_LOADING" :
            return{
                ...state,
                isLoading : true,
            }        
        case "SET_DATA" :
            return {
                ...state,
                propertyData : action.payload.property,
                projectData : action.payload.project,
                isLoading : false,
            }
        default:
            return{
                ...state
            }
    }
}

export default DataReducer