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
    const [price,setprice]=useState("Budget")
    const [Propertyupdate,setPropertyupdate ]= useState(" Property type")

    const[value,setvalue]=useState(["All Property","Flat","Plot","Office","Shop","Showroom","Industrial property","Warehouse","Duplex"," Bungalows","Row house"]);
    const[location, setlocation]=useState(["All Location","Vijay nagar","nipaniya","LIG" ,"Vijay nagar" ]); 
    const budjet=[" below 5 Lakh Rs","5Lakh Rs - 15Lakh Rs","15Lakh Rs - 40Lakh Rs","40Lakh Rs - 1cr Rs","1+cr Rs"];
  

    // console.log(Propertytype)
    // console.log(value)
    // console.log(locationvalue)
    // console.log(location)
    // console.log(budjet)

    // const [content,setContent]=useState([]);
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
            { open &&(
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
        }
        else if(item.toLowerCase().includes(searchTerm.toLowerCase())){
        return item
          }
           }).map(item =>{
          {/* console.log(item); */}
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

  
    {/* for calling all Location with js */}   
              {location.filter((item)=>{
              if(searchTerm1==""){
               return item
           
              }else if(item.toLowerCase().includes(searchTerm1.toLowerCase())){
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
            <p className="filter-text">Price</p>
        
              <p onClick={()=>setOpen2(!open2)} className="pfilter-color">{price}  <Icon /></p>
              {/* <span className="bottom-filter">all types</span> */}
           {open2 &&( 
            <div className="dropdown-content">
            <form action="search">
              <input placeholder="search..." 
              onChange={event => {setSearchTerm2(event.target.value)}}
              name="search_criteria"  type="text" />
            </form>
           <div onClick={()=>setOpen2(false)} >
      {budjet.filter((item)=>{
   if(searchTerm2==""){
    return item

   }else if(item.toLowerCase().includes(searchTerm2.toLowerCase())){
    return item
   }
  }).map(item =>{
    return(
  <div  className="dropdownnew" onClick={()=>setprice(item)}>{item}</div> )
 } )} 
  </div>
  </div> )}
          
    </div>
    </div>


        <div className="col-filter1" onClick={()=>{ navigate(`/Afterfilter/:${Propertytype}/:${locationvalue}/:${price}` ) }}>
           <button className="butt-color">Search</button>
            </div>
             </div>
       </div>
    );
  };
export default Dropdown








// import React, { useState } from 'react'
// import { FetchContext } from '../../contex/FetchContext'
// import { useContext } from 'react'

// const Filter = ({callback}) => {

//   const propdata=useContext(FetchContext)
//   const[filtercontent,setFiltercontent]=useState([])
   
//   function filter1(cityy) {
//       console.log("in city filter");
//       const arr=[]
//       propdata.map(i=>(
//           ((i.data.City).toUpperCase() === cityy.toUpperCase())?(arr.push(i)):console.log("nodata")
//           ))
//           setFiltercontent(arr)
//   }
//   function filter2(pt) {
//       console.log("in pt filter");
//       const arr=[]
//       propdata.map(i=>(
//           (i.data.Property_type === pt)?(arr.push(i)):""
//           ))
//           setFiltercontent(arr)
//   }
//   function filter3(bud){
//       console.log("in bud");
//       const arr=[]

//       propdata.map(i=>(

          
        
//           (bud === "under 5000") ?
//               ((Number(i.data.Rent) <=5000) ? (arr.push(i)):"nodata"):
//               (bud === "5000-10000") ? 
//                   ((Number(i.data.Rent)>= 5000 && Number(i.data.Rent)<= 10000)? arr.push(i):"nodata"):
//                   (bud === "10000-15000")?
//                       ((i.data.Rent>= 10000 && Number(i.data.Rent)<= 15000)? arr.push(i):"nodata"):
//                           (bud === "400000")?
//                           ((Number(i.data.Rent)>= 15000 && Number(i.data.Rent)<= 400000)?arr.push(i):"nodata"):""
          


//           ))
//           setFiltercontent(arr)
      
//   }
//   function filter(cityy,pt) {
//       console.log("in ctpt filter");
//       const arr=[]
//       propdata.map(i=>(
//           (((i.data.City).toUpperCase() === cityy.toUpperCase())&&(i.data.Property_type === pt))?(arr.push(i)):console.log("no data")
//           ))
//           setFiltercontent(arr)
          
    
//   }
//   function filter4(cityy,pt,bd) {
//       console.log("in ctptbd filter");
//       const arr=[]
//       propdata.map(i=>(
//           (((i.data.City).toUpperCase() === cityy.toUpperCase())&&(i.data.Property_type === pt)&&(
//               (bd === "under 5000") ?
//               ((Number(i.data.Rent) <=5000) ? true:false):
//               (bd === "5000-10000") ? 
//                   ((Number(i.data.Rent)>= 5000 && Number(i.data.Rent)<= 10000)? true:false):
//                   (bd === "10000-15000")?
//                       ((i.data.Rent>= 10000 && Number(i.data.Rent)<= 15000)? true:false):
//                           (bd === "400000")?
//                           ((Number(i.data.Rent)>= 15000 && Number(i.data.Rent)<= 400000)?true:false):""
//           ))?arr.push(i):console.log("no data")
//           ))
//           setFiltercontent(arr)
          
    
//   }
 

//   const handelsub = (e) =>{
//       e.preventDefault();
//       console.log(e)
//       let city = e.target[0].value;
//       let ptype = e.target[1].value;
//       let budget = e.target[2].value;
//       console.log(city + " " +  ptype + " " + budget);
//       if (ptype === "None" && city !== "" && budget === "None") {
          
//           filter1(city)
//       }else if(ptype !== "None" && city !== "" && budget === "None"){
         
//         filter(city,ptype) 
         
//       }else if(ptype !=="None" && city === "" && budget === "None"){
//                   filter2(ptype);
//       }
//       else if(ptype ==="None" && city === "" && budget !== "None"){
//           filter3(budget);
//       }else if(ptype !== "None" && city !== "" && budget !== "None"){
         
//           filter4(city,ptype,budget) 
           
//         }

//         callback(filtercontent)
    
     
//   }
//   return (
  
//        <div className="search">
//             <div className="note">
//                 <p>Find a home you'll &nbsp;</p>
//                 <span>love</span>
//             </div>
//             <div className="sebar">
//                 <div className="oval">
//                     <form onSubmit={handelsub}>
//                         <div className="location">
//                             {/* <img src={locate} alt="" /> */}
//                             <input type="text" placeholder='city' id="first" />
//                         </div>
//                         <div className="proptyp">
//                             {/* <img src={home} alt="" /> */}
//                             <label for="property"></label>

//                             <select className='selectform' id="Property" name="Property_type">
                            
//                                 <option value="None">Property Type</option>
//                                 <option value="1BHK Flat">1BHK Flat</option>
//                                 <option value="2BHK Flat">2BHK Flat</option>
//                                 <option value="3BHK Flat">3BHK Flat</option>
//                                 <option value="4BHK Flat">4BHK Flat</option>
//                                 <option value="5+BHK Flat">5+BHK Flat</option>
//                                 <option value="Single Rooms">Single Rooms</option>
//                                 <option value="House/villa">House/villa</option>
//                             </select>
//                         </div>
//                         <div className="budget">
//                             {/* <img src={rupee} alt="" /> */}
//                             <label for="budgett"></label>

//                             <select className='selectform' id="budgett" name="budgett">
//                                 <option  value="None">Budget</option>
//                                 <option value="under 5000">under 5000</option>
//                                 <option value="5000-10000">5000-10000</option>
//                                 <option value="10000-15000">10000-15000</option>
//                                 <option value="400000">400000</option>
//                                 <option value="80K">80K</option>
//                             </select>
//                         </div>
//                         <button className='srchbtn' type='submit'>Search</button>
//                     </form>
//                 </div>
//             </div>
        
    
//     </div>
//   )
// }

// export default Filter




     
