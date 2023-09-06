import { useEffect } from "react";
import ReactDOM from "react-dom";

const MyModal = ({ closeModal, handleCloseButton ,data}) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return ReactDOM.createPortal(

     <>
   
      <div className="modal-wrapper" onClick={closeModal}></div>
      
           <div className="modal-container">
           <h2 className="latest-offer">Latest offers (scroll to close)</h2>
       {data.map((item,i) => { 
           
          return   <img className="popup-photo" src= {item?.imgUrl} key={i} alt="our current fearure" />  
         })}
          {handleCloseButton}
             </div>
             

    </>
     ,
    document.querySelector(".myPortalModalDiv")
  );
};

export default MyModal;