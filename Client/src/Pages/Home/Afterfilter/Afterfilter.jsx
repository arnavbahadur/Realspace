import React from 'react'
import'./Afterfilter.css'
import HouseBox from '../../../Components/HouseBox/HouseBox'
import { useLocation  } from 'react-router-dom';

function Afterfilter() {
   const flat=["2Bhk ","3Bhk ","4Bhk ","5Bhk ","6Bhk ","7Bhk " ];
   const plot=["1000 sqft ","2000 sqft","3000 sqft ","4000 sqft ","5000 sqft ","6000 sqft ","7000 sqft " ];
   const location=useLocation()
   const flatname=location.state.Propertytype;
   console.log("location.state.key")
   console.log(location.state.Propertytype)
   console.log("location",location)
  return (
    <div className="main-after-filter">
      <div className="left-filter">
<HouseBox/>
      </div>
      <div className="right-filter">
        {flatname}
        {/* <button className="afterfilter-button">{value}</button> */}
      { flat.map((item) =>{
    return(
//   <div className="dropdownnew" onClick={()=>setPropertytype(item)} >{item}</div>
<button className="afterfilter-button">{item}</button>   
)
 } )}
      </div>
    </div>
  )
}

export default Afterfilter
