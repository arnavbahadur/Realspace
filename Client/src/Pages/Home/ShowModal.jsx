import { Children } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
// import {Scrollbars} from 'react-custom-scrollbars';

const MyModal = ({ closeModal, children, handleCloseButton }) => {
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
       
        {children}
        {handleCloseButton}
             </div>

    </>
     ,
    document.querySelector(".myPortalModalDiv")
  );
};

export default MyModal;