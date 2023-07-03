import React, { useState ,  useEffect} from "react";
import MyModal from "./ShowModal";
// import HousePreview from "../HousePreview/HousePreview";
import HouseBox from "../../Components/HouseBox/HouseBox";
import './Popup.css'

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const handleCloseButton = (
    <button className="model-btn" onClick={closeModal}>
    Close Me
    </button>
  );

  const mainModal = (
    <MyModal  handleCloseButton={handleCloseButton}>
     
      <h2 className="latest-offer">Latest offers</h2>
      <HouseBox/>
      
     <p>complete loan facility</p>
    </MyModal>
    
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
  //  <HouseBox/>
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showModal && mainModal}
    </>
  );
};

export default Modal;