import React, { useEffect, useState } from 'react'
import'./Afterfilter.css'
import HouseBox from '../../../Components/HouseBox/HouseBox'
import { useLocation, useParams  } from 'react-router-dom';
import axios from 'axios';
import PageNum from '../../../Components/PageNum/PageNum';

function Afterfilter( props) {
  //  const flat=["ALL Flat","1RK ","1Bhk ","2Bhk ","3Bhk ","4Bhk ","5Bhk ","6Bhk ","7Bhk " ];
  //  const Plot=["ALL Size","1000 sqft ","2000 sqft","3000 sqft ","4000 sqft ","5000 sqft ","6000 sqft ","7000 sqft " ];
  //  const Office=["ALL Size","300 sqft ","400 sqft","500 sqft ","600 sqft ","700 sqft ","800 sqft ","900 sqft " ];
  //  const Shop=["ALL Size","300 sqft ","400 sqft","500 sqft ","600 sqft ","700 sqft ","800 sqft ","900 sqft " ];
  //  const Showroom=["ALL Size","300 sqft ","400 sqft","500 sqft ","600 sqft ","700 sqft ","800 sqft ","900 sqft " ];
  //  const Industrialproperty=["ALL Size","300 sqft ","400 sqft","500 sqft ","600 sqft ","700 sqft ","800 sqft ","900 sqft " ];
  //  const Warehouse=["ALL Size","300 sqft ","400 sqft","500 sqft ","600 sqft ","700 sqft ","800 sqft ","900 sqft " ];
  //  const Duplex=["ALL Size","300 sqft ","400 sqft","500 sqft ","600 sqft ","700 sqft ","800 sqft ","900 sqft " ];
  //  const Bungalows=["ALL Size","300 sqft ","400 sqft","500 sqft ","600 sqft ","700 sqft ","800 sqft ","900 sqft " ];
  //  const Rowhouse=["ALL Size","300 sqft ","400 sqft","500 sqft ","600 sqft ","700 sqft ","800 sqft ","900 sqft " ];
 
//   console.log( Propertytype,location,budget)

const[currentPage,setCurrentPage]=useState(1);
  //fetch data from api and
const contentPerPage = 9;

const [content,setContent]=useState([]);
const callapi = async () => {
  await axios.get(`/propertyapi/`).then((res) => {
    setContent(res.data);
    console.log(res.data)
  });
};

const lastIndex = currentPage * contentPerPage;
const startIndex = lastIndex - contentPerPage
const currentContent =  content.slice(startIndex,lastIndex);
const totalContent=content.length;// posts.length is actuall 100 is for test


useEffect(() => {
  callapi();
}, []);



console.log(content)
// total values in backend to be filtered
// location, propertytype , Nearby, price, areaSqFt,




//   const DisplayMessage = () => {
//     if(Propertytype === ":Flat"){
     
// console.log("chalgya")
//         flat.map((item) =>{
          
//           return(
//             <>
//             {console.log(item)}
//       <button className="afterfilter-button">{item}</button>   
//       </>
//       )
//        } )
      
//     }
   
//   }
  return (
    <div className="main-after-filter">
      <div className="left-filter">
         <div className="house-card-section">
            {currentContent.map(item=>{
              return <HouseBox title={item.title} gallery={item.Gallery} id={item._id} location={item.location} price={item.price} location_url={item.location_url} img={item.img} Purpose={item.Purpose} bedRoom={item.bedRoom} bathRoom={item.bathRoom} areaSqFt={item.areaSqFt}  />
            })}
          </div>  
          <div className="house-pageNumber">
        <PageNum setCurrentPage={setCurrentPage} currentPage={currentPage} totalContent={totalContent} contentPerPage={contentPerPage}/>
      </div>
      </div>
      <div className="right-filter">
       <div className="secondfilter">Filter</div>
      
      {/* {DisplayMessage()} */}
         {/* {  if(Propertytype=="flat"){}
         
             { flat.map((item) =>{
              return(
          <button className="afterfilter-button">{item}</button>   
      )
      } )}
      }      */}


{/* 
      {Propertytype===":Flat"?
      <>
         { flat.map((item) =>{
          console.log(item)
          return(
      <button className="afterfilter-button">{item}</button>   
  )
  } )}
  </>:<></>
   } */}


  {/* for sub filtering Plot */}
      {/* {Propertytype===":Plot"?
      <>
         { Plot.map((item) =>{
          console.log(item)
          return(
      <button className="afterfilter-button">{item}</button>   
  )
  } )}
  </>:<></>
   } */}


   
{/* for sub filtering Office */}
     {/* {Propertytype===":Office"?
      <>
         { Office.map((item) =>{
          console.log(item)
          return(
      <button className="afterfilter-button">{item}</button>   
  )
  } )}
  </>:<></>
   }   */}


   {/* for sub filtering shop */}
     {/* {Propertytype===":Shop"?
      <>
         { Shop.map((item) =>{
          console.log(item)
          return(
      <button className="afterfilter-button">{item}</button>   
  )
  } )}
  </>:<></>
   }      */}

   {/* for sub filtering showroom */}
   {/* {Propertytype===":Showroom"?
      <>
         { Showroom.map((item) =>{
          console.log(item)
          return(
      <button className="afterfilter-button">{item}</button>   
  )
  } )}
  </>:<></>
   }      */}


   {/* for sub filtering Industrialproperty */}
   {/* {Propertytype===":Industrialproperty"?
      <>
         { Industrialproperty.map((item) =>{
          console.log(item)
          return(
      <button className="afterfilter-button">{item}</button>   
  )
  } )}
  </>:<></>
   }      */}


   {/* for sub filtering Warehouse */}
   {/* {Propertytype===":Warehouse"?
      <>
         { Warehouse.map((item) =>{
          console.log(item)
          return(
      <button className="afterfilter-button">{item}</button>   
  )
  } )}
  </>:<></>
   }      */}


   {/* for sub filtering Duplex */}
   {/* {Propertytype===":Duplex"?
      <>
         { Duplex.map((item) =>{
          console.log(item)
          return(
      <button className="afterfilter-button">{item}</button>   
  )
  } )}
  </>:<></>
   }      */}


   {/* for sub filtering Bungalows */}
   {/* {Propertytype===":Bungalows"?
      <>
         { Bungalows.map((item) =>{
          console.log(item)
          return(
      <button className="afterfilter-button">{item}</button>   
  )
  } )}
  </>:<></>
   }      */}


   {/* for sub filtering Rowhouse */}
   {/* {Propertytype===":Rowhouse"?
      <>
         { Rowhouse.map((item) =>{
          console.log(item)
          return(
      <button className="afterfilter-button">{item}</button>   
  )
  } )}
  </>:<></>
   }      */}

      </div>
    </div>
  )
}

export default Afterfilter
