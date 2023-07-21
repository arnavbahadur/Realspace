import React from 'react'
import'./Afterfilter.css'
import HouseBox from '../../../Components/HouseBox/HouseBox'
import { useLocation, useParams  } from 'react-router-dom';

function Afterfilter() {
   const flat=["2Bhk ","3Bhk ","4Bhk ","5Bhk ","6Bhk ","7Bhk " ];
   const plot=["1000 sqft ","2000 sqft","3000 sqft ","4000 sqft ","5000 sqft ","6000 sqft ","7000 sqft " ];
   const Office=["300 sqft ","400 sqft","500 sqft ","600 sqft ","700 sqft ","800 sqft ","900 sqft " ];
 
  const {Propertytype,location,budget}=useParams();
  console.log( Propertytype,location,budget)



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
<HouseBox/>
      </div>
      <div className="right-filter">
        
      {/* {DisplayMessage()} */}
         {/* {  if(Propertytype=="flat"){}
         
             { flat.map((item) =>{
              return(
          <button className="afterfilter-button">{item}</button>   
      )
      } )}
      }      */}


{/* for sub filtering flat */}
      {console.log(Propertytype)} 
      {Propertytype==":Flat"?
      <>
         { flat.map((item) =>{
          console.log(item)
          return(
      <button className="afterfilter-button">{item}</button>   
  )
  } )}
  </>:<></>
   }


   
{/* for sub filtering Office */}
     {Propertytype==":Office"?
      <>
         { Office.map((item) =>{
          console.log(item)
          return(
      <button className="afterfilter-button">{item}</button>   
  )
  } )}
  </>:<></>
   }  


   {/* for sub filtering Plot */}
     {Propertytype==":Plot"?
      <>
         { plot.map((item) =>{
          console.log(item)
          return(
      <button className="afterfilter-button">{item}</button>   
  )
  } )}
  </>:<></>
   }     

      </div>
    </div>
  )
}

export default Afterfilter
