import {CompareActionTypes} from '../types/types'


const CompareReducer = (state,action)=>{
    switch (action.type) {
        case CompareActionTypes.AddCompareItem:
            return{
                ItemsId : [...state.ItemsId,action.payload]
            }
        case CompareActionTypes.RemoveCompareItem:
            let newList = state.ItemsId.filter(item=>item!==action.payload)
            return{
                ItemsId : [...newList]
            }
        case CompareActionTypes.DeleteCompareItems:
            return{
                ItemsId : []
            }
        default:
            return state
    }
}

export default CompareReducer