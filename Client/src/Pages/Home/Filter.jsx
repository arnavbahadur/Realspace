import React, { useState } from 'react'
import './Filter.css'
//import Select from "react-select";
const Icon = () => {
    return (
      <svg height="20" width="20" viewBox="0 0 20 20">
        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
      </svg>
    );
  };
  
  const Dropdown = ({ placeHolder }) => {
    const getDisplay = () => {
      return placeHolder;
    };
      const [Propertytype,setPropertytype ]= useState("All Property")
    // const value=["All Property","Flat","Plot","Psp"  ];
    const [locationvalue,setlocationvalue ]= useState("All Location")
    const location=[
      {value : "vijaynagar", label:"Vijaynagar"},
      {value : "nipaniya",label:"Nipaniya"},
      {value : "lig",label:"LIG"}
    ];
    
    const [budjetvalue,setbudjetvalue ]= useState("Budjet")
    const Budjet=["Budjet","2000000 Rs","3000000 Rs","4000000 Rs","5000000 Rs"];
    const [selectedOptions, setSelectedOptions] = useState();

  const [isActive, setIsActive]= useState(false)

  const [open,setOpen]= useState(false);
  // function handleSelect(data) {
  //   setSelectedOptions(data);
  // }
    return (
      <div className="filter">
        <div className="dropdown-input">
         
          <div className="col-filter">
            <div className="row-filter">
            <p>Property Type</p>
          
          <p onClick={()=>setOpen(!open)} className="pfilter-color">{Propertytype}   <Icon /></p>
         
 {/* <span className="bottom-filter">all types</span> */}
   {
            open &&( <div onClick={()=>setOpen(false)}  class="dropdown-content">
  {/* <p onClick={()=>setPropertytype("flat")}> Flat</p>
  <p onClick={()=>setPropertytype("Plot")}>Plot</p>
  <p>psp</p>
  <p>Cold storage</p> */}



    {/* for calling all property with js */}                                                    
  {/* {value.map(item =>{
    return(
  <div className="dropdownnew" onClick={()=>setPropertytype(item)}>{item}</div> )
 } )} */}
  </div>)
          }
         
          </div>
          </div>
          <div className="col-filter">
          <div className="row-filter">
            <p>Location</p>
            <p onClick={()=>setOpen(!open)} className="pfilter-color">{locationvalue}  <Icon /></p>
        {/* <span className="bottom-filter">all types</span> */}
         {open &&( <div onClick={()=>setOpen(false)}  class="dropdown-content">

  {/* <Select
  class="dropdown-content"
 options={location}
 placeholder="Select color" 
 value={selectedOptions}
//  onChange={handleSelect}
 isSearchable={true}/> */}
    {/* for calling all Location with js */}   
    {/* {location.map(item =>{
    return(
  <div  className="dropdownnew" onClick={()=>setlocationvalue(item)}>{item}</div> )
 } )} */}
  </div> )  } 
            </div>
            </div>
            <div className="col-filter">
            <div className="row-filter">
            <p>Price</p>
        
              <p onClick={()=>setOpen(!open)} className="pfilter-color">{budjetvalue}  <Icon /></p>
              {/* <span className="bottom-filter">all types</span> */}
           {open &&( <div onClick={()=>setOpen(false)}  class="dropdown-content">
           {Budjet.map(item =>{
    return(
  <div  className="dropdownnew" onClick={()=>setbudjetvalue(item)}>{item}</div> )
 } )} 
  </div> )}
              
 
    </div>
    </div>
            <div className="col-filter1">
           <button className="butt-color">Search</button>
            </div>
             </div>
       </div>
    );
  };
export default Dropdown

