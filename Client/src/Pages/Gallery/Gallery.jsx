import React from 'react'
import "./Gallery.css";

const Gallery = (props) => {
    
    console.log("are".props);
  return (
    <div>
        <div class="row-gallery">
          <div class="col-lg-9 col-md-9 section-title text-left mb-4">
    <h2>Gallery</h2>
    
           </div>
              {props.gallery && props.gallery.map(item=>{
                return   <div className="gallery-page">
                 <div class="gallery-box"> 
                         <a href="#">
                              <div class="card-img">                          
                                 <img src={item} alt="img" />                         
                              </div>
                              <div class="gallery-name">     
                                  <h5 class="gallery-name-title">{item.imgname}</h5>         
                              </div>    
                          </a>                
                </div>          
              </div>  })}           
             </div>
    </div> 
  )
}

export default Gallery


















// import React from 'react'
// import "./Gallery.css";

// const Gallery = (props) => {
    
//     console.log(props);
//   return (
//     <div>
//         <div class="row-gallery">
//         <div class="col-lg-9 col-md-9 section-title text-left mb-4">
//                      <h2>Gallery</h2>
//      </div>
//          {props.gallery.map(item=>{
            
//          return   <div className="gallery-page"> 
        
//                  <div class="gallery-box">           
//                      {/* <div class="gallery-card"> */}
//                      <div class="col-lg-4 col-md-4">
//                         <div className="gallerybunch">
//                        <div className="gallery  gallery-container">
//                              <a href="#">
//                                  <div class="card-img">                          
//                                     <img src={item.imgUrl} alt="img" />                         
//                                  </div>
//                                  <div class="gallery-name">     
//                                      <h5 class="gallery-name-title">{item.imgname}</h5>         
//                                  </div>    
//                              </a>
//                          </div>
//                          </div>
//                      </div>
//                      </div>
//              </div>
//  })} 
                     
//              </div>
//     </div>
    
//   )
// }

// export default Gallery





