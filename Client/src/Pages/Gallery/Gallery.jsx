import React from 'react'
import "./Gallery.css";

const Gallery = (props) => {
    
    console.log(props);
  return (
    <div>
        <div class="row">
        <div class="col-lg-9 col-md-9 section-title text-left mb-4">
                     <h2>Gallery</h2>
     </div>
         {props.gallery.map(item=>{
         return <div>  
                 <div class="gallery-box">
                     <div class="col-lg-4 col-md-4">
                       <div className="gallery  gallery-container">
                             <a href="#">
                                 <div class="card-img">                          
                                    <img src={item.imgUrl} alt="img" />                         
                                 </div>
                                 <div class="gallery-name">     
                                     <h5 class="gallery-name-title">{item.imgname}</h5>         
                                 </div>    
                             </a>
                         </div>
                     </div>
                 </div> 
             </div>
      
        
    })} 
                     
             </div>
    </div>
  )
}

export default Gallery

