import React, { useEffect, useState } from 'react'
import './Compare.css'
import axios from 'axios';
import PriceShow from '../../Components/PriceShow/PriceShow';
const Compare = () => {
    const [content,setContent] = useState([]);
    const [compareitem,setCompareitem] = useState([]);
    const items = JSON.parse( localStorage.getItem('compareItem'))
    console.log("items",items)
    // const propertyapi = async () => {
    //   await axios.get(`/propertyapi`).then((property) => {
    //     setContent(property.data);
    //     console.log("bhanu",property.data)
    //     // console.log(property.data)
    //   });
    // };   


    // useEffect(() => {
    //     propertyapi();
    // }, []);
    const callapi = async () => {
      let i = 0;
      await axios.get(`/propertyapi/`).then((res) => {
        setContent(res.data);
        console.log(res.data,i)
        i++;
      });
    };
      
      // const cureentContent = content.slice(0,4);
      // const currentContent = content.find((item)=>{
      //   // return items.includes(item._id)
      //   return items.filters(item._id)
      // });
      // console.log("currentcontent",currentContent)
      useEffect(() => {
        callapi();
      }, []);
    
    let compareItems = {};
    let a;
    const GetCompare = ()=>{
        compareItems = content.filter((item)=>{
          return items.itemsId.includes(item._id)         
        })
        console.log("compareitem",compareItems)

    }
    GetCompare()
    // useEffect(()=>{

    //   if(items!=null) {
    // //     // a = items.itemsId.map((e)=>{
    // //     //   console.log('e',e);
    // //     //   return compareItems = content.filter((item)=>{
    // //     //     return item._id === e;
    // //     //   })
    // //     // })
    // //     console.log("a",a)
    //     compareItems = content.filter((item)=>{
    //       return items.itemsId.includes(item._id)         
    //     })
    //     setCompareitem(compareItems)
    //   } 
    // },[content])

    console.log("compareitem",compareItems)
    const feature = ["Garages","parking","Bike Path","Emergency Exit","Fire Alarm","Fire Place","Jog Path","Lawn","Marble Floors","Swimming Pool","Elevators","CCTV Cameras","Generator backup","24*7 Security","Adequate water supply","Intercom Facility"]
    const titles =[ "Type","Location","Builtup area","superBuiltup area","Property ID","Year Built","Bedrooms","Bathrooms"]; 
    const titlesEle = titles.map((item,index)=>{
        return(
            <div className="compareTitle" key={index}><p>{item}</p></div>
        )
    })
    const compareHead = compareItems.map((item,index)=>{
        // if(item.image != null){
            return(
                <div className="compare-headings-section" key={index}>
                    {/* heading/ section */}
                    {/* <img src={item.Photos[0].imgUrl} alt="house" /> */}
                    <img src={item.houseboximgUrl} alt="house" />
                    {/* <p className="compare-item-name">{item.name}</p> */}
                    <p className="compare-item-sale/rent">{`For  ${item.Purpose}`}</p>
                    <p className="compare-item-amount"><PriceShow price = {item.price}/></p>
                </div>
            )
        // }
    })
    const itemDetails = compareItems.map((item,index)=>{
      return(
        <div className="compare-itemsContainer" key={index}> 
          <div className="compare-itemDetails">
            <div className="compareItemDetail"><p>{item.propertytype}</p></div>
            <div className="compareItemDetail"><p>{item.location}</p></div>
            <div className="compareItemDetail"><p>{`${item.builtup_area} single floor`}</p></div>
            <div className="compareItemDetail"><p>{`${item.superBuiltup_area} 2 floor`}</p></div>
            <div className="compareItemDetail"><p>{item._id}</p></div>
            <div className="compareItemDetail"><p>{new Date( item.created_at).getFullYear()}</p></div>
            {/* <div className="compareItemDetail"><p>{item.created_at}</p></div> */}
            <div className="compareItemDetail"><p>{item.bedRoom}</p></div>
            <div className="compareItemDetail"><p>{item.bathRoom}</p></div>
            { 
              feature.map((title)=>{          
                return item.Feature.includes(title)? <div className="compareItemDetail"><p><i className="fa-solid fa-check" style={{color:"green"}}/></p></div> :<div className="compareItemDetail"><p><i className="fa-solid fa-xmark" style={{color:"red"}}/></p></div>
              } )
            }
            <div className="compareItemDetail"><p><i className="fa-solid fa-check" style={{color:"green"}}/></p></div>
            <div className="compareItemDetail"><p><i className="fa-solid fa-xmark" style={{color:"red"}}/></p></div>
          </div>
        </div>     
      )
    })
  return (
    <div>
      <div className="compare-headSection">
        <h2>Compare</h2>
      </div>
      <div className="compare-section2">
        <div className="compare-container">
            <div className="compare-container-top">
                <div className="compare-headings-section"></div>
                {compareHead}
            </div>
            <div className="compare-container-detailsSection">  
              <div className="compare-titles-container">
                <div className="compare-titles">
                  {/* base properties for compare */}
                    {titlesEle }   
                      
                    {
                      feature.map((item)=>{
                        return(
                          <div className="compareTitle"><p>{item}</p></div>
                      )
                      })
                    }                                           
                </div>
              </div>
                {
                  itemDetails
                }
            </div>
            
        </div>
        
      </div>
    </div>
  )
}

export default Compare
