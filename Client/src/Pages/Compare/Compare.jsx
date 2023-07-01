import React from 'react'
import './Compare.css'
const Compare = () => {
    const compareItemDetail =[
        {
            image:null
        },
        {
            img:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            features:['all the features'],
            propretyId:"id1",
            location:"loaction1",
            name:"name1",
            amount:"50,000",
            forSale:true,
        },
        {
            image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            features:['all the features'],
            propretyId:"id2",
            location:"loaction2",
            name:"name2",
            amount:"40,000",
            forSale:false,
        },
        {
            img:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            features:['all the features'],
            propretyId:"id1",
            location:"loaction1",
            name:"name1",
            amount:"56,000",
            forSale:true,
        },

    ]
    const titles =[ "Type","Location","Lot Size","Property Size","Property ID","Year Built","Bedrooms","Bathrooms","Garages","2 Stories","26' Ceilings","Bike Path","Central Cooling","Central Heating","Dual Sinks","Electric Range","Emergency Exit","Fire Alarm","Fire Place","Home Theater","Hurricane Shutters","Jog Path","Laundry Room","Lawn","Marble Floors","Next to busy way","Swimming Pool"];
    const titlesEle = titles.map((item)=>{
        return(
            <div className="compareTitle"><p>{item}</p></div>
        )
    })
    const compareHead = compareItemDetail.map((item,posi)=>{
        if(item.image != null){
            console.log("enter in " + posi) 
            return(
                <div className="compare-headings-section">
                    {/* heading/ section */}
                    <img src={item.image} alt="house" />
                    <p className="compare-item-name">{item.name}</p>
                    <p className="compare-item-sale/rent">{`For  ${(item.forSale)?"Sale":"Rent"}`}</p>
                    <p className="compare-item-amount">{item.amount}</p>
                </div>
            )
        }
    })
  return (
    <div>
      <div className="compare-headSection">
        pic and filter
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
                        {titlesEle}                    
                    </div>
                </div>   
                <div className="compare-itemsContainer">
                    <div className="compare-itemDetails">
                        <div className="compareItemDetail"><p>Details</p></div>
                        <div className="compareItemDetail"><p><i class="fa-solid fa-check" style={{color:"green"}}/></p></div>
                        <div className="compareItemDetail"><p><i class="fa-solid fa-xmark" style={{color:"red"}}/></p></div>
                    </div>
                </div>     
                <div className="compare-itemsContainer">
                    <div className="compare-itemDetails">
                        <div className="compareItemDetail"><p>Details</p></div>
                        <div className="compareItemDetail"><p>Details</p></div>
                        <div className="compareItemDetail"><p>Details</p></div>
                    </div>
                </div>    
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Compare
