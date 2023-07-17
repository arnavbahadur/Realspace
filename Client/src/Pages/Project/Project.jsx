import React,{useState,useEffect} from "react";
import "./Project.css";
import Gallery from "../Gallery/Gallery";
import { NavLink }  from "react-router-dom";
import axios from "axios";
import CompareSideBtn from "../../Components/CompareSideBtn/CompareSideBtn";
import { useParams} from "react-router-dom";

const Project = (props) => {
//   let { id } = useParams();
//   const [checked, setChecked] = React.useState(false); 
//    function handleChange(e) {
//       setChecked(e.target.checked);
//    }


//    const [content,setContent]=useState([]);
//    const projectapi = async () => {
//      await axios.get(`/projectapi/${id}`).then((pro) => {
//        setContent(pro.data);
//        console.log(pro.data)
//      });
//    };
   
// useEffect(() => {
//  projectapi();
// }, []);




  return (
   
    <div>
      <CompareSideBtn/>
      <div class="container-project">
        <div class="row">
          <div class="col-lg-8 col-md-8">
            <div class="car property-single-slider">
              <div class="samar-slider ">
                <div
                  id="samarsliderz"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <img className="img-box"  src="https://wallpapercave.com/wp/wp4110657.jpg" 
                  alt="house" />
                
                </div>
              </div>
            </div>

            <div class="card padding-card property-single-slider">
              <div class="card-body">
                <h5 class="card-title mb-3"> {props.title}</h5>
                <p>
                  
                  {props.description}
                  
                </p>
                <h5 class="card-title mb-3"> {props.title}</h5>

                <p>
                {props.description}
                </p>

                <h5 class="card-title mb-3">{props.Note}</h5>
                <p class="mb-0">
                {props.CurrentStatus}
                </p>
              </div>
            </div>

            <div class="card padding-card property-single-slider">
              <div class="card-body">
                <h5 class="card-title mb-3">Features</h5>
                <div class="row">
                  <div class="col-lg-4 col-md-4">
                    <ul class="sidebar-card-list">
                      <li>
                        <a href="#">
                            
   
                          Grand Entrance Gate
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            
   
                          Jogging Track
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            
   
                          Indoor Games
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            
   
                          24x7 Security
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            
   
                          Street Lights
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            
   
                          Birds Park
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-4 col-md-4">
                    <ul class="sidebar-card-list">
                      <li>
                        <a href="#">
                            
   
                          Gazebo
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            
   
                          Elevators{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                           
                          Car Wash Area
                        </a>
                      </li>
                      <li>
                        <a href="#">
                           
                          Drivers Lounge
                        </a>
                      </li>
                      <li>
                        <a href="#">
                           
                          Senior Citizen Area
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-4 col-md-4">
                    <ul class="sidebar-card-list">
                      <li>
                        <a href="#">
                            
   
                          Ample Parking Space
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            
   
                          CCTV Cameras
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            
   
                          Generator Backup
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            
   
                          Adequate Water Supply
                        </a>
                      </li>
                      <li>
                        <a href="#">
                            
   
                          Underground Drainage
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="card padding-card property-single-slider">
              <div class="card-body">
                <h5 class="card-title mb-3">Location</h5>
                <div class="row mb-3">
                  <div class="col-lg-6 col-md-6">
                    <p>
                      <strong class="text-dark"> {props.location} </strong> Scheme
                      No 78-II
                    </p>
                    <p>
                      <strong class="text-dark">City :</strong> Indore, MP
                    </p>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <p>
                      <strong class="text-dark">City :</strong> Vijay Nagar
                    </p>
                    <p>
                      <strong class="text-dark">Zip/Postal Code :</strong>{" "}
                      452001
                    </p>
                  </div>
                </div>
               
              </div>
            </div>

            {/* <!--<div class="card padding-card property-single-slider">
                     <div class="card-body">
                        <h5 class="card-title mb-4">Video</h5>
                        <a href="#"><img class="rounded img-fluid" src="img/video.jpg" alt="Card image cap"></a>
                     </div>
                  </div>--> */}
          </div>

          <div class="col-lg-4 col-md-4">
            <div class="card sidebar-card property-single-slider">
              <div class="card-body">
                <h5 class="card-title mb-4">About</h5>
                {/* <!--<div class="about-agent">
                           <div class="carousel-inner">
                              <div class="carousel-item active">
                                 <div class="card card-list">
                                    <a href="#">
                                       <img class="card-img-top" src="img/agent.jpg" alt="Card image cap">
                                       <div class="card-body pb-0 about-agent-info">
                                          <h5 class="card-title mb-4">Samar Hunjan</h5>
                                          <h6 class="card-subtitle mb-3 text-muted"><i class="mdi mdi-phone"></i> (950) 491-570-180</h6>
                                          <h6 class="card-subtitle mb-3 text-muted"><i class="mdi mdi-email"></i> support@example.com</h6>
                                          <h6 class="card-subtitle text-muted"><i class="mdi mdi-link"></i> www.Giftechies.com</h6>
                                       </div>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>--> */}

                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="list-icon">
                      <img
                        src="https://media.istockphoto.com/id/1404442412/vector/redirecting-link-line-art-icon-redirect-vector-illustration.jpg?s=612x612&w=0&k=20&c=wYDk3y70RFdT2mL6IvbrwhlMGr3YjrkIQkUlStV-NBU="
                        alt="area"
                        width={"50px"}
                        height={"50px"}
                      />
                      <strong>Area:</strong>
                      <p class="mb-0">  sq ft</p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="list-icon">
                      <img
                        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRSX412nFuVe1blEphYKMiP6fxEwskhU2C-U00k0izJEMWRegy5"
                        alt="garage"
                        width={"50px"}
                        height={"50px"}
                      />
                      <strong>Rooms</strong>
                      <p class="mb-0">2/3 Bedrooms</p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="list-icon">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="floor"
                        width={"50px"}
                        height={"50px"}
                      />
                      <strong>Floors:</strong>
                      <p class="mb-0">8 Floors</p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="list-icon">
                      <img
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSyFg1awgeMyCUlVtNGe464hpIQz0_PSy1Q7sQQQFlg1aiugutn"
                        alt="parking"
                        width={"50px"}
                        height={"50px"}
                      />
                      <strong>Parking:</strong>
                      <p class="mb-0">Covered Parking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card sidebar-card property-single-slider">
              <div class="card-body">
                <h5 class="card-title mb-4">Floor Plans</h5>
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="card card-list">
                      <a href="#">
                        <div class="card-img">
                          {/* <!-- <div class="badge images-badge"><i class="mdi mdi-image-filter"></i> 12</div> --> */}
                          {/* <!-- <span class="badge badge-primary">For Sale</span> --> */}
                          <img
                            class="card-img-top"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJFggSqWZU_5OxKu65jcuuOqUlEJ9nQXfBmeWunTLejBerdDOR3grYytP4R5ZnB9ilJs4&usqp=CAU"
                            alt="Card image cap"
                          />
                        </div>
                        <div class="card-body">
                          {/* <!-- <h2 class="text-primary mb-2 mt-0">$130,000 <small>/Month</small></h2> --> */}
                          <h5 class="card-title mb-2">Block A</h5>
                          {/* <!-- <h6 class="card-subtitle mt-1 mb-0 text-muted"><i class="mdi mdi-home-map-marker"></i> 127 Kent Sreet, Sydny, NEW 2000</h6> --> */}
                        </div>
                        {/* <!-- <div class="card-footer"> --> */}
                        {/* <!-- <span><i class="mdi mdi-sofa"></i> Beds : <strong>3</strong></span> --> */}
                        {/* <!-- <span><i class="mdi mdi-scale-bathroom"></i> Baths : <strong>2</strong></span> --> */}
                        {/* <!-- <span><i class="mdi mdi-move-resize-variant"></i> Area : <strong>587 sq ft</strong></span> --> */}
                        {/* <!-- </div> --> */}
                      </a>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="card card-list">
                      <a href="#">
                        <div class="card-img">
                          {/* <!-- <div class="badge images-badge"><i class="mdi mdi-image-filter"></i> 12</div> --> */}
                          {/* <!-- <span class="badge badge-primary">For Sale</span> --> */}
                          <img
                            class="card-img-top"
                            src="https://i.pinimg.com/originals/02/d9/2c/02d92c3c6859a9fe9c07e0cc5af75513.jpg"
                            alt="Card image cap"
                          />
                        </div>
                        <div class="card-body">
                          {/* <!-- <h2 class="text-primary mb-2 mt-0">$130,000 <small>/Month</small></h2> --> */}
                          <h5 class="card-title mb-2">Block B</h5>
                          {/* <!-- <h6 class="card-subtitle mt-1 mb-0 text-muted"><i class="mdi mdi-home-map-marker"></i> 127 Kent Sreet, Sydny, NEW 2000</h6> --> */}
                        </div>
                        {/* <!-- <div class="card-footer"> --> */}
                        {/* <!-- <span><i class="mdi mdi-sofa"></i> Beds : <strong>3</strong></span> --> */}
                        {/* <!-- <span><i class="mdi mdi-scale-bathroom"></i> Baths : <strong>2</strong></span> --> */}
                        {/* <!-- <span><i class="mdi mdi-move-resize-variant"></i> Area : <strong>587 sq ft</strong></span> --> */}
                        {/* <!-- </div> --> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="view-more-floor"> 
              <NavLink to="/Viewmore" >View More</NavLink>
                {/* <button className="view-more" >
                  <h3>View More</h3>
                </button> */}
               
              </div>
            </div>
          </div>
        </div>

      <div className="video-map-container">
        <div className="video-container">
        <div className='video-videoSection video-iframe-section'>
          <h3 className="video-h3">Property video</h3>
          <div className="housePreview-video housePreview-iframeContainer">
            {/* <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="house" />
            <div><p>Video Tour</p></div> */}
            <iframe src="https://www.youtube.com/embed/QP4CxBlbD7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
          </div>
        </div>
        </div>
        <div className="map-container">
        <div className='map-mapSection map-iframe-section'>
          <h3 className="map-h3">Map</h3>
          <div className="housePreview-map housePreview-iframeContainer">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117852.10298046564!2d75.65939514335936!3d22.62102239999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f958dcb7169d%3A0xd877c12078e50f0f!2sMedi-Caps%20University!5e0!3m2!1sen!2sin!4v1688136971443!5m2!1sen!2sin" width="800" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
          </div>
        </div>
        </div>
      </div>
      
      <Gallery/>
      </div>
    </div>
  );
};

export default Project;

