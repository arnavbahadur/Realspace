const DataReducer = (state,action)=>{
    // console.log(action)
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
            const rentFeatured = action.payload.property.filter((item)=>{
                return (item.purpose === 'rent' )
            })
            const saleFeatured = action.payload.property.filter((item)=>{
                return (item.purpose === 'sale' )
            })
            return {
                ...state,
                propertyData : action.payload.property,         
                projectData : action.payload.project,
                isLoading : false,
                rentFeatured : rentFeatured,
                saleFeatured : saleFeatured,
            }
        default:
            return{
                ...state
            }
    }
}

export default DataReducer