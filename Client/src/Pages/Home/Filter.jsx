import React, { useEffect, useState } from 'react'
import './Filter.css'
import { useNavigate , useParams} from 'react-router-dom';
import axios from 'axios';
const Icon = () => {
    return (
      <svg height="20" width="20" viewBox="0 0 20 20">
        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
      </svg>
    );
  };
  
  const Dropdown = ({ placeHolder }) => {


    const [Propertytype,setPropertytype ]= useState("All Property")
    const [locationvalue,setlocationvalue ]= useState("All Location")
    // const [budjetvalue,setbudjetvalue ]= useState("Budget")
    const [price,setprice]=useState("Price Range")
    const [Propertyupdate,setPropertyupdate ]= useState(" Property type")
    const[value,setvalue]=useState(["All Property","Flat","Plot","Office","Shop","Showroom","Industrial property","Warehouse","Duplex"," Bungalows","Row house"]);
    const[location, setlocation]=useState(["All Location","Vijay nagar","nipaniya","LIG" ,"Vijay nagar" ]); 
    const budjet=[" below 5 Lakh Rs","5Lakh Rs - 15Lakh Rs","15Lakh Rs - 40Lakh Rs","40Lakh Rs - 1cr Rs","1+cr Rs"];
  

    // const [content,setContent]=useState([]);
    let { id } = useParams();
   const callapi = async () => {
    await axios.get(`/propertyapi/`).then((res) => {
      // setContent(res.data)
      var propertydata=res.data;
      const genlocation=new Set();
      const genproperty=new Set();
      const genprice=new Set();
        propertydata.map((item)=>{
        genlocation.add(item.location)
        genproperty.add(item.propertytype)
        genprice.add(item.price)
      })
  //  console.log(genlocation)
     setlocation(Array.from(genlocation))
     setvalue(Array.from(genproperty))
    //  setprice(Array.from(genprice))
    });
 };

  useEffect(() => {
    callapi();
   }, [])


    const getDisplay = () => {
      return placeHolder;
    };
    
   

    const [filtersearch ,setfiltersearch]= useState("")
    useEffect(() => {
      setfiltersearch([Propertytype,locationvalue,price]);
      }, []);
     
const navigate = useNavigate();


  const onsearch=()=>{
    // console.log(searchTerm,searchTerm1,searchTerm2)
    var lprice=0
    var uprice=9999999999

    if(searchTerm2===" below 5 Lakh Rs"){
      lprice=0
      uprice=500000
    }
    if(searchTerm2==="5Lakh Rs - 15Lakh Rs"){
      lprice=500000
      uprice=1500000
    }
    if(searchTerm2==="40Lakh Rs - 1cr Rs"){
      lprice=4000000
      uprice=10000000
    }
    if(searchTerm2==="1+cr Rs"){

      lprice=10000000
      uprice=999999999999
    }

    navigate(`/Afterfilter/${searchTerm}&${searchTerm1}&${lprice}&${uprice}`)


  }

  const [open,setOpen]= useState(false);
  const [open1,setOpen1]= useState(false);
  const [open2,setOpen2]= useState(false);
  const [searchTerm,setSearchTerm] =useState('')
  const [searchTerm1,setSearchTerm1] =useState('')
  const [searchTerm2,setSearchTerm2] =useState('')






    return (
   
      <div className="filter">
        <div className="dropdown-input">
          <div className="col-filter">
            <div className="row-filter">
             <p className="filter-text">{Propertyupdate}</p>
               <p onClick={()=>setOpen(!open)} className="pfilter-color">{Propertytype}<Icon /> </p>
                { open &&( <div className="dropdown-content">
                  <form action="search">
                   <input placeholder="search..." 
                    onChange={event => {console.log(event.target.value)}}
                   name="search_criteria"  id="inputsize" type="text" />
                  </form>
                 <div onClick={()=>setOpen(false)}  >
                                         
           {value.filter((item)=>{
            if(searchTerm===""){
            return item
        }
        else if(item.toLowerCase().includes(searchTerm.toLowerCase())){
        return item
          }
           }).map(item =>{
          return(
           <div className="dropdownnew" onClick={()=>{setPropertytype(item);setSearchTerm(item)}} >{item}</div> )
           } )}
           </div>
        </div>)
          }
          </div>
          </div>



          <div className="col-filter">
          <div className="row-filter">
            <p className="filter-text">Location</p>
            <p onClick={()=>setOpen1(!open1)} className="pfilter-color">{locationvalue}  <Icon /></p>
        {/* <span className="bottom-filter">all types</span> */}
         {open1 &&(
           <div className="dropdown-content">
            <form action="search">
              <input placeholder="search..." 
              onChange={event => {setSearchTerm1(event.target.value)}}
              name="search_criteria"  type="text" />
            </form>
             <div onClick={()=>setOpen1(false)} >

  
              {location.filter((item)=>{
              if(searchTerm1===""){
               return item
           
              }else if(item.toLowerCase().includes(searchTerm1.toLowerCase())){
               return item
              }
             }).map(item =>{ return(
             <div  className="dropdownnew" onClick={()=>{setlocationvalue(item);setSearchTerm1(item)}}>{item}</div> ) } )}
                 </div> 
               </div> )  } 
            </div>
            </div>




            <div className="col-filter">
            <div className="row-filter">
            <p className="filter-text">Price</p>
        
              <p onClick={()=>setOpen2(!open2)} className="pfilter-color">{price}  <Icon /></p>
           {open2 &&( 
            <div className="dropdown-content">
            <form action="search">
              <input placeholder="search..." 
              onChange={event => {setSearchTerm2(event.target.value)}}
              name="search_criteria"  type="text" />
            </form>
           <div onClick={()=>setOpen2(false)} >
      {budjet.filter((item)=>{
   if(searchTerm2===""){
    return item
   }else if(item.toLowerCase().includes(searchTerm2.toLowerCase())){
    return item
   }
  }).map(item =>{
    return(
  <div  className="dropdownnew" onClick={()=>{setprice(item);setSearchTerm2(item)}}>{item}</div> )
 } )} 
  </div>
  </div> )}
          
    </div>
    </div>


        {/* <div className="col-filter1" onClick={()=>{ navigate(`/Afterfilter/:${Propertytype}/:${locationvalue}/:${price}` ) }}> */}
        <div className="col-filter1" onClick={()=>{ onsearch() }}>
                                   
           <button className="butt-color">Search</button>
            </div>
             </div>
       </div>
    );
  };
export default Dropdown



