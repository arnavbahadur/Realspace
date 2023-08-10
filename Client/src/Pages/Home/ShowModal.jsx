import { useEffect } from "react";
import ReactDOM from "react-dom";

const MyModal = ({ closeModal, handleCloseButton ,data}) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
//  console.log("bhanu",data);
 {/* console.log(item.Photos[0].imgUrl); */}
  return ReactDOM.createPortal(

     <>
   
      <div className="modal-wrapper" onClick={closeModal}></div>
      
           <div className="modal-container">
           <h2 className="latest-offer">Latest offers (scroll to close)</h2>
       {data.map((item,i) => { 
           
          return   <img className="popup-photo" src= {item.Photos[0].imgUrl} key={i} alt="bhanubhand" />  
         })}
          {handleCloseButton}
             </div>
             

    </>
     ,
    document.querySelector(".myPortalModalDiv")
  );
};

export default MyModal;