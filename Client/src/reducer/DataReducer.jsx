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
            // const rentProperty = action.payload.property.filter((item)=>{
            //     return (item.purpose === 'rent' )
            // })
            // const saleProperty = action.payload.property.filter((item)=>{
            //     return (item.purpose === 'sale' )
            // })
            return {
                ...state,
                propertyData : action.payload.property,         
                projectData : action.payload.project,
                isLoading : false,
                // rentFeatured : rentFeatured,
                // saleFeatured : saleFeatured,
            }
        case "SORT_DATA":
            let newPropertyDataList = [...state.propertyData]
            let saleProperty = newPropertyDataList.filter(item=>item.Purpose==="sell")
            let rentProperty = newPropertyDataList.filter(item=>item.Purpose==="rent")
            console.log(rentProperty)
            return{
                ...state,
                saleProperty,
                rentProperty,
            }
        default:
            return{
                ...state
            }
    }
}

export default DataReducer