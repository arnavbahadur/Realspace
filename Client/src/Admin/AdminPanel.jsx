import React, { useEffect, useState } from 'react'
import Login from './Pages/Login/Login'
import AdminBody from './AdminBody/AdminBody';
import axios from 'axios';
// import Header from './Pages/Universal/Header/Header'
export default function AdminPanel(props) {
    console.log("admin")  
    const [authentic, setauthentic] = useState(false);
      useEffect(() => {
         axios.get("/adminapi/isauth")
        // .then((res)=>{setauthentic(res.data)});
      }, [])
       props.setauthentic(true);
      //  console.log("admin", props.data)

      
  return (
    <div style={{padding:"10vh"}}>
        {authentic?<AdminBody/>:<Login setauthentic={setauthentic}/>}
        {/* {authentic?<AdminBody/>:<Login />} */}
        
        
    </div>
  )
}








  
    


    // const existingUser = await User.findOne({ email });
    
    
   

  

    

   
 
