import React, { useContext,  useState } from 'react'
import CompareContext from '../../CompareContext';

const Comparebtn = (props) => {
    // let id = 1 // id = props.id;
    const { setCount } = useContext(CompareContext);
    const [compared,setCompared] = useState(false);
    // const [compared,setCompared] = useState(props.isCompare);    //
    if(localStorage.compareItem === undefined){
        let temp = {
        itemsId : []
        }
        localStorage.setItem("compareItem",JSON.stringify(temp));
    }
    try {
            let compareItem = JSON.parse(localStorage.getItem('compareItem'))
            // console.log("compareitem",compareItem)
            // console.log("compareItem.itemsId",compareItem.itemsId)
            // console.log("id : ",props.id)
            // console.log(compareItem.itemsId.includes(props.id))
            // setCompared(compareItem.itemsId.includes(props.id)) //
        } catch (error) {
            console.warn(error)
        }
        const compareBtn = () =>{
            console.log("props", props)
            try{
                let compareItem = JSON.parse(localStorage.getItem('compareItem'))
                
            if(!compared && compareItem.itemsId.length === 4){
                // warnRef.classlist.add('.active')
                props.setWarned(true)
                setTimeout(() => {
                    // warnRef.classlist.remove('.active')  
                    props.setWarned(false)              
                }, 5000);
            }
            else{
                if(compared){
                    for(let i = 0; i < 4|| i < compareItem.itemsId.length;i++){      //to remove the item
                        compareItem.itemsId[i]===props.id?compareItem.itemsId.splice(i,1):console.log("compare id is not removed,some error is there");
                        break;
                    }    
                    console.log("compareItem",compareItem.itemsId)
                }
                else{       // to add the item
                    compareItem.itemsId.push(props.id)
                    console.log("compareItem",compareItem.itemsId)
                }
                setCount(compareItem.itemsId.length);
                console.log("compareItem",compareItem.itemsId)
                localStorage.setItem("compareItem",JSON.stringify(compareItem))
                setCompared(!compared)
            }
        }
        catch(err){
            console.warn(err)
        }
    }
  return (
    <div>
        <i className="fa-solid fa-arrows-turn-to-dots" onClick={compareBtn} style={{color:`${compared?'black':'#aaadb1'}`}}/>    
        <div className="iLabel">
            <div className="iLabel-up-arrow"></div>
            <div className="iLabel-text ">
                <p>Compare</p>
            </div>
        </div>
    </div>
  )
}

export default Comparebtn
