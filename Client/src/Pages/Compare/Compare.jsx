import React, { useEffect, useState } from 'react'
import './Compare.css'
import axios from 'axios';
const Compare = () => {
    const [content,setContent] = useState([]);
    const items = localStorage.getItem('compareItem')
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
    
    // let compareItems;
    // if(items!=null) {
    //   items.forEach((e)=>{
    //     return  compareItems = content.filter((item)=>{
    //       return item._id = e;
    //     })
    //   })
    // } 
    // const compareItemDetail =[
    //     {
    //         image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    //         features:['all the features'],
    //         propretyId:"id1",
    //         location:"loaction1",
    //         name:"name1",
    //         amount:"50,000",
    //         forSale:true,
    //     },
    //     {
    //         image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    //         features:['all the features'],
    //         propretyId:"id2",
    //         location:"loaction2",
    //         name:"name2",
    //         amount:"40,000",
    //         forSale:false,
    //     },
    //     {
    //         image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    //         features:['all the features'],
    //         propretyId:"id3",
    //         location:"loaction3",
    //         name:"name3",
    //         amount:"56,000",
    //         forSale:false,
    //     },

    // ]
    const feature = ["Garages","parking","Bike Path","Emergency Exit","Fire Alarm","Fire Place","Jog Path","Lawn","Marble Floors","Swimming Pool","Elevators","CCTV Cameras","Generator backup","24*7 Security","Adequate water supply","Intercom Facility"]
    const titles =[ "Type","Location","Builtup area","superBuiltup area","Property ID","Year Built","Bedrooms","Bathrooms"]; 
    const titlesEle = titles.map((item)=>{
        return(
            <div className="compareTitle"><p>{item}</p></div>
        )
    })
    const compareHead = content.map((item)=>{
        // if(item.image != null){
            return(
                <div className="compare-headings-section">
                    {/* heading/ section */}
                    <img src={item.Photos[0].imgUrl} alt="house" />
                    {/* <p className="compare-item-name">{item.name}</p> */}
                    <p className="compare-item-sale/rent">{`For  ${item.Purpose}`}</p>
                    <p className="compare-item-amount">{item.price}</p>
                </div>
            )
        // }
    })
    const itemDetails = content.map((item)=>{
      return(
        <div className="compare-itemsContainer">
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
                return item.Feature.includes(title)? <div className="compareItemDetail"><p><i class="fa-solid fa-check" style={{color:"green"}}/></p></div> :<div className="compareItemDetail"><p><i class="fa-solid fa-xmark" style={{color:"red"}}/></p></div>
              } )
            }
            <div className="compareItemDetail"><p><i class="fa-solid fa-check" style={{color:"green"}}/></p></div>
            <div className="compareItemDetail"><p><i class="fa-solid fa-xmark" style={{color:"red"}}/></p></div>
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
            <div className="copare-container-detailsSection">  
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
