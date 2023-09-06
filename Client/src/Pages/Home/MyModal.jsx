import React, { useState ,  useEffect} from "react";
import MyModal from "./ShowModal";
import './Popup.css'
import axios from "axios";

const Modal = () => {

  const [showModal, setShowModal] = useState(false);



  
  const [Popup,setPopup]=useState([]);
   const popupapi = async () => {
     await axios.get(`/mypopupapi/mypopup`).then((pro) => {
      setPopup(pro.data);
     });
   };   

useEffect(() => {
 popupapi();
}, []);


  const closeModal = () => setShowModal(false);

  const handleCloseButton = (
    <button className="model-btn" onClick={closeModal}>
    Close Me
    </button>
  );

  const mainModal = (    
    <MyModal  handleCloseButton={handleCloseButton} data={Popup} /> 
    
  );



  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)

    }, 5000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
    
       {showModal && mainModal}
    </>
  );
};

export default Modal;