import React, { useState ,  useEffect} from "react";
import MyModal from "./ShowModal";
import './Popup.css'
import axios from "axios";

const Modal = () => {

  const [showModal, setShowModal] = useState(false);



  //api call
  const [Popup,setPopup]=useState([]);
   const popupapi = async () => {
     await axios.get(`/mypopupapi/mypopup`).then((pro) => {
      setPopup(pro.data);
      //  console.log("arnav",pro.data)
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


  //shows popup after some second
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)

    }, 5000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
    
       {showModal && mainModal}
       
       { /* <h2 className="latest-offer">Latest offers</h2>       
        {Popup.map((item) => { 
            console.log(item.Photos[0].imgUrl);
          return <img src= {item.Photos[0].imgUrl} alt="" />
          
         })} */}
  
    </>
  );
};

export default Modal;