import { useSelector } from "react-redux";
const useDataFetchHook =   (url,storeStateName='',fetchOnly= false) => {
    if(!fetchOnly){
        let data = useSelector(state => state[storeStateName]);
        if(data.length !== 0){
            return data
        }        
    }
    
    return 
}