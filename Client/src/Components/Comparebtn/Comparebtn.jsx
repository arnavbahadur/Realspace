import React, { useContext, useEffect, useState } from "react";
import CompareContext from "../../Context/CompareContext";

const Comparebtn = (props) => {
  // let id = 1 // id = props.id;
  const { ItemsId, handleAdd, handleRemove } = useContext(CompareContext);
  const [compared, setCompared] = useState(false);

  useEffect(()=>{
      setCompared(ItemsId.includes(props.id));
  },[ItemsId])
  
  const compareBtn = () => {
    try {
      let compareItem = [...ItemsId]
      if(compared){       //

      }
      else{

      }
      if (!compared && compareItem.length === 4) {
        props.setWarned(true);
        setTimeout(() => {
          props.setWarned(false);
        }, 5000);
      } else {
        if (compared) {
            //to remove the item
            handleRemove(props.id);
        } else {
          // to add the item
          handleAdd(props.id)
        }
        setCompared(!compared);
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <div>
      <i
        className="fa-solid fa-arrows-turn-to-dots"
        onClick={compareBtn}
        style={{ color: `${compared ? "black" : "#aaadb1"}` }}
      />
      <div className="iLabel">
        <div className="iLabel-up-arrow"></div>
        <div className="iLabel-text ">
          <p>Compare</p>
        </div>
      </div>
    </div>
  );
};

export default Comparebtn;
