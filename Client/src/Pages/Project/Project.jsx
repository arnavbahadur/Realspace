import React,{useState,useEffect} from "react";
import "./Project.css";
import Gallery from "../Gallery/Gallery";
import { NavLink }  from "react-router-dom";
import axios from "axios";
import CompareSideBtn from "../../Components/CompareSideBtn/CompareSideBtn";
import { useParams} from "react-router-dom";
import GalleryBunch from "../Gallery/GalleryBunch";


const Project = ({Content}) => {
  let { id } = useParams();
//   const [checked, setChecked] = React.useState(false); 
//    function handleChange(e) {
//       setChecked(e.target.checked);
//    }

// to bypass the erroe i have put the data which will automatically change as it get a new id
   const [content,setContent]=useState({
    "_id": "64b684475dc905ac06d46dde",
    "title": "mahanvhjjjjjjjjjjjjjjj",
    "description": "afjjjjjjjtaa na jata ",
    "created_at": "2023-07-18T12:23:35.567Z",
    "imageContainer": "bharathjkg mata",
    "Rooms": "xvsdsdf",
    "Photos": [
        {
            "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAwyRWo5hmiqv3TvuIptNcDrfulFlamWdguolqMTrCXqme39w56lCBNHviD9irxJwiuw&usqp=CAU",
            "_id": "64b684475dc905ac06d46ddf"
        },
        {
            "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXynVMaQc0zP51HkZhebM97xrFeyLWxaXQGzj5GnzGQwBZ_d0wZm5Hqbh3S2iI3fWnVs&usqp=CAU",
            "_id": "64b684475dc905ac06d46de0"
        }
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
      //  console.log(pro.data)
     });
   };   

useEffect(() => {
 projectapi();
}, []);
  return ( 
    <div>
      <CompareSideBtn/>
      <div className="container-project">
        <div className="row">
          <div className="left-box">
            <div className="car property-single-slider">
              <div className="samar-slider ">
                <div
                  id="samarsliderz"
                  className="carousel slide"
                  data-ride="carousel" >
                    <img src={content.Photos?content?.Photos[0]?.imgUrl:null} alt="houseimage" />
                  {/* <img className="img-box"  src="https://wallpapercave.com/wp/wp4110657.jpg" alt="house" />   */}
                </div>
              </div>
            </div>
            <div className="left-card">
              <div className="card-body">
                <h5 className="card-title mb-3"> {content.title}</h5>
                <p>{content.description} </p>
                <h5 className="card-title mb-3">{content.Note}</h5>
                <p className="mb-0">
                {content.CurrentStatus}
                </p>
              </div>
            </div>

            <div className="left-card">
              <div className="card-body">
                <h5 className="card-title mb-3">Features</h5>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <ul className="sidebar-card-list">
                      <li>
                        <a href="#">
                          Grand Entrance Gate
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <ul className="sidebar-card-list">
                      <li>
                        <a href="#">
                          Gazebo
                        </a>
                      </li>
                      <li>
                        <a href="#">
                           
                          Senior Citizen Area
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="left-card">
              <div className="card-body">
                <h5 className="card-title mb-3">Location</h5>
                <div className="row mb-3">
                  <div className="col-lg-6 col-md-6">
                    <p>
                      <strong className="text-dark">Address:</strong> 
                      {content.location}
                    </p>
                    <p>
                      <strong className="text-dark">City :</strong> {content.City}
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <p>
                      <strong className="text-dark">Area:</strong> {content.Area}
                    </p>
                    <p>
                      <strong className="text-dark">Zip/Postal Code :</strong> {content.Postalcode}
                    </p>
                  </div>
                </div> 
              </div>
            </div>
          </div>

          <div className="right-box">
            <div className="right-card">
              <div className="card-body-about">
                <h5 className="card-title mb-4">About</h5>
                <div className="row-about">
                  <div className="about-box">
                    <div className="list-icon">
                      <img
                        src="https://media.istockphoto.com/id/1404442412/vector/redirecting-link-line-art-icon-redirect-vector-illustration.jpg?s=612x612&w=0&k=20&c=wYDk3y70RFdT2mL6IvbrwhlMGr3YjrkIQkUlStV-NBU="
                        alt="area"
                        width={"50px"}
                        height={"50px"} />
                      <strong>Area:</strong>
                      <p className="mb-0"> {content.Area} sq ft</p>
                    </div>
                  </div>
                  <div className="about-box">
                    <div className="list-icon">
                      <img
                        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRSX412nFuVe1blEphYKMiP6fxEwskhU2C-U00k0izJEMWRegy5"
                        alt="garage"
                        width={"50px"}
                        height={"50px"}
                      />
                      <strong>Rooms</strong>
                      <p className="mb-0"> {content.Rooms} Bedrooms</p>
                    </div>
                  </div>
                  <div className="about-box">
                    <div className="list-icon">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="floor"
                        width={"50px"}
                        height={"50px"}
                      />
                      <strong>Floors:</strong>
                      <p className="mb-0"> {content.Floors} Floors</p>
                    </div>
                  </div>
                  <div className="about-box">
                    <div className="list-icon">
                      <img
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSyFg1awgeMyCUlVtNGe464hpIQz0_PSy1Q7sQQQFlg1aiugutn"
                        alt="parking"
                        width={"50px"}
                        height={"50px"}
                      />
                      <strong>Parking:</strong>
                      <p className="mb-0"> {content.Parking}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-card">
              <div className="card-body-floor">
                <h5 className="card-title mb-4">Floor Plans</h5>
                <div className="row-floor">
                  <div className="floor-plan-box">
                    <div className="floor-plan">
                      <a href="#">
                        <div className="card-img">
                          <img className="card-img-top" src= {content.Floorplan[0].imgUrl} alt="Card image cap" />
                        </div>
                        <div className="card-body-floor">
                          <h5 className="card-title mb-2">Block A</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row-floor">
                  <div className="floor-plan-box">
                    <div className="floor-plan">
                      <a href="#">
                        <div className="card-img">
                          <img className="card-img-top" src={content.Floorplan[1].imgUrl} alt="Card image cap" />
                        </div>
                        <div className="card-body-floor">
                          <h5 className="card-title mb-2">Block B</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="view-more-floor"> 
              <NavLink to="/Viewmore" >View More</NavLink> 
              </div>
            </div>
          </div>
        </div>

      <div className="video-map-container">
        <div className="video-container">
        <div className='video-videoSection video-iframe-section'>
          <h3 className="video-h3">Project Video</h3>
          <div className="housePreview-video housePreview-iframeContainer">
            <iframe src={content.Video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
          </div>
        </div>
        </div>
        <div className="map-container">
        <div className='map-mapSection map-iframe-section'>
          <h3 className="map-h3">Project Location</h3>
          <div className="housePreview-map housePreview-iframeContainer">
          {/* <a href={content.location_url}></a> */}
            <iframe src={content.location_url} width="800" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
          </div>
        </div>
        </div>
      </div>
    
      
      <Gallery gallery={content.Gallery}/>
      {/* GalleryBunch */}
      {/* <GalleryBunch  gallery={content.Gallery} /> */}
      {/* {content.Gallery.map(item=>{
          return <Gallery imgUrl={item}  />
         })} */}
      </div>
    </div>
  );
};

export default Project;
