import React, { useEffect, useState } from 'react'
import './Filter.css'
import { useNavigate , useParams} from 'react-router-dom';
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
    const value=["All Property","Flat","Plot","Psp"  ];
    const [locationvalue,setlocationvalue ]= useState("All Location")
    const location=["All Location","Vijay nagar","nipaniya","LIG" ,"Vijay nagar"   ];
    const [Propertyupdate,setPropertyupdate ]= useState(" Property type")
    const [budjetvalue,setbudjetvalue ]= useState("Budget")
    const budjet=["Budget","2Lakh Rs - 3Lakh Rs","3Lakh Rs - 4Lakh Rs","4Lakh Rs - 5Lakh Rs","5Lakh Rs - 6Lakh Rs"];
    
   

    const [filtersearch,setfiltersearch]= useState("")
    useEffect(() => {
      setfiltersearch([Propertytype,locationvalue,budjetvalue]);
      }, []);
     
const navigate = useNavigate();

  const [open,setOpen]= useState(false);
  const [searchTerm,setSearchTerm] =useState('')
    return (
   
      <div className="filter">
        <div className="dropdown-input">
         
          <div className="col-filter">
            <div className="row-filter">
            <p>{Propertyupdate}</p>
         
          <p onClick={()=>setOpen(!open)} className="pfilter-color">{Propertytype}      <Icon /> </p>
         
         {/* <i className="gg-search"/> */}
   {
            open &&(
            <div className="dropdown-content">
             
              <form action="search">
              <input placeholder="search..." 
              onChange={event => {setSearchTerm(event.target.value)}}
              name="search_criteria"  id="inputsize" type="text" />
               </form>
               
             <div onClick={()=>setOpen(false)}  >
    
    {/* for calling all property with js */}                                                    
  {value.filter((item)=>{
   if(searchTerm==""){
    return item

   }else if(item.toLowerCase().includes(searchTerm.toLowerCase())){
    return item
   }
  }).map(item =>{
    console.log(item);
          return(
  <div className="dropdownnew" onClick={()=>setPropertytype(item)} >{item}</div> )
 } )}
  </div>
  </div>)
          }
         
          </div>
          </div>
          <div className="col-filter">
          <div className="row-filter">
            <p>Location</p>
            <p onClick={()=>setOpen(!open)} className="pfilter-color">{locationvalue}  <Icon /></p>
        {/* <span className="bottom-filter">all types</span> */}
         {open &&(
           <div className="dropdown-content">
            <form action="search">
              <input placeholder="search..." 
              onChange={event => {setSearchTerm(event.target.value)}}
              name="search_criteria"  type="text" />
            </form>
             <div onClick={()=>setOpen(false)} >

  
    {/* for calling all Location with js */}   
    {location.filter((item)=>{
   if(searchTerm==""){
    return item

   }else if(item.toLowerCase().includes(searchTerm.toLowerCase())){
    return item
   }
  }).map(item =>{
    return(
  <div  className="dropdownnew" onClick={()=>setlocationvalue(item)}>{item}</div> )
 } )}
  </div> 
  </div> )  } 
            </div>
            </div>
            <div className="col-filter">
            <div className="row-filter">
            <p>Price</p>
        
              <p onClick={()=>setOpen(!open)} className="pfilter-color">{budjetvalue}  <Icon /></p>
              {/* <span className="bottom-filter">all types</span> */}
           {open &&( 
            <div className="dropdown-content">
            <form action="search">
              <input placeholder="search..." 
              onChange={event => {setSearchTerm(event.target.value)}}
              name="search_criteria"  type="text" />
            </form>
           <div onClick={()=>setOpen(false)} >
      {budjet.filter((item)=>{
   if(searchTerm==""){
    return item

   }else if(item.toLowerCase().includes(searchTerm.toLowerCase())){
    return item
   }
  }).map(item =>{
    return(
  <div  className="dropdownnew" onClick={()=>setbudjetvalue(item)}>{item}</div> )
 } )} 
  </div>
  </div> )}
              
 
    </div>
    </div>
            <div className="col-filter1"
             onClick={()=>{
      navigate(`/Afterfilter/:${Propertytype}/:${locationvalue}/:${budjetvalue}` )
    }}>
           <button className="butt-color">Search</button>
            </div>
             </div>
       </div>
    );
  };
export default Dropdown

