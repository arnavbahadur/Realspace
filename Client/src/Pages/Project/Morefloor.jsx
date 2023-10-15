import React,{useState,useEffect} from 'react'
import "./Morefloor.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';




  const Morefloor = ({Content}) => {
    let { id } = useParams();
const [content,setContent]=useState({
  "_id": "64b684475dc905ac06d46dde",
  "title": "m",
  "description": "a ",
  "created_at": "2023-07-18T12:23:35.567Z",
  "imageContainer": "bharathjkg mata",
  "Rooms": "xvsdsdf",
  "Photos": [
      // {
      //     "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAwyRWo5hmiqv3TvuIptNcDrfulFlamWdguolqMTrCXqme39w56lCBNHviD9irxJwiuw&usqp=CAU",
      //     "_id": "64b684475dc905ac06d46ddf"
      // },
      // {
      //     "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXynVMaQc0zP51HkZhebM97xrFeyLWxaXQGzj5GnzGQwBZ_d0wZm5Hqbh3S2iI3fWnVs&usqp=CAU",
      //     "_id": "64b684475dc905ac06d46de0"
      // }
  ],
  "Floorplan": [
      {
          "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAwyRWo5hmiqv3TvuIptNcDrfulFlamWdguolqMTrCXqme39w56lCBNHviD9irxJwiuw&usqp=CAU",
          "_id": "64b684475dc905ac06d46de1"
      },
      {
          "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXynVMaQc0zP51HkZhebM97xrFeyLWxaXQGzj5GnzGQwBZ_d0wZm5Hqbh3S2iI3fWnVs&usqp=CAU",
          "_id": "64b684475dc905ac06d46de2"
      }
  ],
  "Gallery": [],
  "addMoreDetails": [],
  "Feature": [],
  "Featured": "bojhyylo",
  "Parking": "sfdsffd",
  "Floors": "kbkjk",
  "location": "jakjbbbbby",
  "Address": "sdfsd",
  "Area": "sdfsewf",
  "City": "dsfsa",
  "Postalcode": "vsssdfds",
  "Video_url": "fdsdsff",
  "location_url": "siyauhi",
  "Note": "ram",
  "CurrentStatus": "ki",
  "__v": 0
  
});
 const projectapi = async () => {
   await axios.get(`/projectapi/${id}`).then((pro) => {
     setContent(pro.data);
   });
 };   

useEffect(() => {
projectapi();
}, []);

  return (
    <div>
        <div className="floor">
            <h2>Floor plan</h2>
           {/* <div className="floor-many">
              <div className="plan">
                <h3>Block A</h3>
                <div className="floor-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJFggSqWZU_5OxKu65jcuuOqUlEJ9nQXfBmeWunTLejBerdDOR3grYytP4R5ZnB9ilJs4&usqp=CAU" alt="" />
                <img src={content.Floorplan[0]} alt="" />
                </div>
              </div>
              <div className="plan">
                <h3>Block B</h3>
                <div className="floor-img">
                <img src={content.Floorplan[1]} alt="" />
                    <img src="https://i.pinimg.com/originals/02/d9/2c/02d92c3c6859a9fe9c07e0cc5af75513.jpg" alt="" />
                </div>
              </div>
              <div className="plan">
                <h3>Block C</h3>
                <div className="floor-img">
                <img src={content.Floorplan[2]} alt="" />
                    <img src="https://i.pinimg.com/564x/da/0f/94/da0f940e4e73987c1d5cbd561cafcf58.jpg" alt="" />
                </div>
              </div>
              <div className="plan">
                <h3>Block D</h3>
              <div className="floor-img">
                </div><div className="floor-img">
                <img src={content.Floorplan[3]} alt="" />
                    <img src="https://i.pinimg.com/736x/78/0f/4c/780f4c38a6dce21ab0c32d1d82fd4d1a.jpg" alt="" />
                </div>
              </div>
           </div> */}
           <div className="floorrow">{content.Floorplan && content.Floorplan.map((item,index)=>{
                return (
         
            <div className="floor-many">
              <div className="plan">
                
                <h3>Block {++index} </h3>
                <div className="floor-img"> 
                <img src={item} alt="" />
                </div>
                </div>
                
              </div>
            ) })} </div>
            
        </div>
    </div>
  )
}

export default Morefloor