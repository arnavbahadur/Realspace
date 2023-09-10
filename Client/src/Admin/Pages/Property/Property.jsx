import React, { useEffect, useState } from 'react'
import './Property.css'
import SingleProperty from './SingleProperty'
import AddProperty from './AddProperty';
import axios from "axios"

const Property = () => {
const [openform,setopenform]=useState(false);
const [sign,setSign] =useState('plus');
const signChange = () => {
  console.log("openform = " +openform+ " sign = " + sign);
  openform? setSign('plus') : setSign('xmark');
}


const [property, setproperty] = useState([]);
const apicall=async ()=>{
    await axios.get("/propertyapi/")
    .then((res) => { setproperty(res.data) });
    
  }

  useEffect(() => {
    apicall();
  }, [])
  return (
    <div>
      <div className="blog-component">
        <h2 className='propertyhead'>Property</h2>
        <div className="add-icon" id='add-icon-blog' onClick={()=>{setopenform(!openform);signChange()}}>
            <i className={`fa-solid fa-${sign}`}/>

        </div>
       
        {openform?<AddProperty />:<></>}

        <div className="blogs">  

        </div>
      </div>
      <div className="blogs">
         {/* for temporary single property is commented so dont touch it please */}
         {property.map((item) => {
         return <SingleProperty id={item._id} title={item.title} houseboximgUrl={item.houseboximgUrl} description={item.description}   featured={item.featured}  location={item.location}
          price={item.price} location_url={item.location_url} Purpose={item.Purpose} bedRoom={item.bedRoom} bathRoom={item.bathRoom} areaSqFt={item.areaSqFt} />
        })}
      </div>
    </div>
  )
}

export default Property


// Photos={item.Photos}
// images={item.images}
// gallery={item.Gallery} 

// return <HouseBox title={item.title} gallery={item.Gallery} id={item._id} location={item.location} price={item.price} location_url={item.location_url}  Photos={item.Photos} Purpose={item.Purpose} bedRoom={item.bedRoom} bathRoom={item.bathRoom} areaSqFt={item.areaSqFt}  /> 
// property model
// title,location,property_url, propertytype,Nearby, Gallery,  Purpose,location_url, price, areaSqFt,
//  hall, bedRoom, bathRoom,Listingyear,imageContainer,Photos,Description
//  ,addMoreDetails,Feature,Note,Rating,CurrentStatus
      

       





// const Blog = () => {
//   const [blogs, setblogs] = useState([]);
//   const apicall=async ()=>{
//     await axios.get("/blog/allblogs").then((res) => { setblogs(res.data) });
//   }
//   useEffect(() => {
//     apicall();
//   }, [])

//   return (
//     <div className='blog-section'>
//       <div className="add">
//         <div className="add-icon" onClick={() => { document.getElementById('add_blog_area').style = 'dislplay:block' }}>
//           {/* icon of add */}
//           <i className="fa-solid fa-plus" />
//         </div>
//         <div className="add-area add_blog_area" id='add_blog_area'>
//           {/* html of blog to add */}
//           <form action="">
//             <input type="text" name="Title" id="" className='title' placeholder='Title' />
//             <textarea name="blog-txt" id="" cols="30" rows="10" placeholder='Write your blog' required />
//             <button type="submit" id='blog-txt-add'>Add</button>
//             <button type="reset">Clear</button>
//           </form>


//         </div>
//       </div>
//       <div className="blogs">
//         <p>Blogs</p>
//         {blogs.map((item) => {
//          return <Singleblog id={item._id} title={item.title} description={item.description} images={item.images} authername={item.authername} date={item.date}/>
//         })}
//       </div>
//     </div>
//   )
// }

// export default Blog
















// {/* <div className="blog-box">
//             <div className="blog-img">
//               <img src="https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152__480.jpg" alt="blog1" />
//             </div>
//             <div className="blog-content">
//               <div className="row1">
//                 <h3 className="title">Title</h3>
//                 <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
//               </div>
//               <div className='row-2'>
//                 <span className="publisher">XYZ</span> 
//                 <span className="date">10/4/2023</span>
//               </div>
//               <div className="btn-section row-3">          
//                 <button className='delete-btn'>Delete</button>
//               </div> 
//             </div>
//           </div> */}
//           {/* <div className="blog-box">
//             <div className="blog-img">
//               <img src="https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152__480.jpg" alt="blog1" />
//             </div>
//             <div className="blog-content">
//               <div className="row1">
//                 <h3 className="title">Title</h3>
//                 <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
//               </div>
//               <div className='row-2'>
//                 <span className="publisher">XYZ</span> 
//                 <span className="date">10/4/2023</span>
//               </div>
//               <div className="btn-section row-3">          
//                 <i className="fa fa-trash delete-btn" aria-hidden="true"/>
//               </div> 
//             </div>
//           </div> */}
//           {/* <div className="blog-box">
//             <div className="blog-img">
//               <img src="https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152__480.jpg" alt="blog1" />
//             </div>
//             <div className="blog-content">
//               <div className="row1">
//                 <h3 className="title">Title</h3>
//                 <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
//               </div>
//               <div className='row-2'>
//                 <span className="publisher">XYZ</span> 
//                 <span className="date">10/4/2023</span>
//               </div>
//               <div className="btn-section row-3">          
//                 <i className="fa fa-trash delete-btn" aria-hidden="true"/>
//               </div> 
//             </div>
//           </div> */}
//           {/* <div className="blog-box">
//             <div className="blog-img">
//               <img src="https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152__480.jpg" alt="blog1" />
//             </div>
//             <div className="blog-content">
//               <div className="row1">
//                 <h3 className="title">Title</h3>
//                 <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
//               </div>
//               <div className='row-2'>
//                 <span className="publisher">XYZ</span> 
//                 <span className="date">10/4/2023</span>
//               </div>
//               <div className="btn-section row-3">          
//                 <i className="fa fa-trash delete-btn" aria-hidden="true"/>
//               </div> 
//             </div>
//           </div> */}
//           {/* <div className="blog-box">
//             <div className="blog-img">
//               <img src="https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152__480.jpg" alt="blog1" />
//             </div>
//             <div className="blog-content">
//               <div className="row1">
//                 <h3 className="title">Title</h3>
//                 <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
//               </div>
//               <div className='row-2'>
//                 <span className="publisher">XYZ</span> 
//                 <span className="date">10/4/2023</span>
//               </div>
//               <div className="btn-section row-3">          
//                 <i className="fa fa-trash delete-btn" aria-hidden="true"/>
//               </div> 
//             </div>
//           </div> */}