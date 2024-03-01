import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Compare.css";
import axios from "axios";
import PriceShow from "../../Components/PriceShow/PriceShow";
import CompareContext from "../../Context/CompareContext";

const Compare = () => {
  const { ItemsId, handleAllRemove } = useContext(CompareContext);
  const [content, setContent] = useState([]);
  const navigate = useNavigate();

  const [compareitem, setCompareitem] = useState([]);
  const items = JSON.parse(localStorage.getItem("compareItem"));
  const callapi = async () => {
    let i = 0;
    await axios.get(`/propertyapi/`).then((res) => {
      setContent(res.data);
      console.log(res.data, i);
      i++;
    });
  };
  useEffect(() => {
    callapi();
  }, []);

  let compareItems = {};
  const GetCompare = () => {
    compareItems = content.filter((item) => {
      return items.ItemsId.includes(item._id);
    });
  };
  GetCompare();
  
  // list of all, only feature array of compare items
  const OnlyFeaturesLIST = compareItems.map((item) => {
    return item.Feature.map((elem) => {
      console.log(elem);
      return elem;
    });
  });
  // list of all(unique) features of compare items
  let feature;
  feature = [...new Set(OnlyFeaturesLIST.flat())];

  // console.log("compareitem",compareItems)
  const titles = [
    "Type",
    "Location",
    "Builtup area",
    "superBuiltup area",
    "Property ID",
    "Year Built",
    "Bedrooms",
    "Bathrooms",
  ];
  const titlesEle = titles.map((item, index) => {
    return (
      <div className="compareTitle" key={index}>
        <p>{item}</p>
      </div>
    );
  });
  const compareHead = compareItems.map((item, index) => {
    // if(item.image != null){
    return (
      <div className="compare-headings-section" key={index}>
        {/* heading/ section */}
        {/* <img src={item.Photos[0].imgUrl} alt="house" /> */}
        <img src={item.houseboximgUrl} alt="house" />
        {/* <p className="compare-item-name">{item.name}</p> */}
        <p className="compare-item-sale/rent">{`For  ${item.Purpose}`}</p>
        <p className="compare-item-amount">
          <PriceShow price={item.price} />
        </p>
      </div>
    );
    // }
  });
  const itemDetails = compareItems.map((item, index) => {
    return (
      <div className="compare-itemsContainer" key={index}>
        <div className="compare-itemDetails">
          <div className="compareItemDetail">
            <p>{item.propertytype}</p>
          </div>
          <div className="compareItemDetail">
            <p>{item.location}</p>
          </div>
          <div className="compareItemDetail">
            <p>{`${item.builtup_area} single floor`}</p>
          </div>
          <div className="compareItemDetail">
            <p>{`${item.superBuiltup_area} 2 floor`}</p>
          </div>
          <div className="compareItemDetail">
            <p>{item._id}</p>
          </div>
          <div className="compareItemDetail">
            <p>{new Date(item.created_at).getFullYear()}</p>
          </div>
          {/* <div className="compareItemDetail"><p>{item.created_at}</p></div> */}
          <div className="compareItemDetail">
            <p>{item.bedRoom}</p>
          </div>
          <div className="compareItemDetail">
            <p>{item.bathRoom}</p>
          </div>
          {/* feature array of compare items */}
          {feature.map((e, index) => {
            // console.log(item.Feature, e, item.Feature.includes(e));
            return item.Feature.includes(e) ? (
              <div key={index} className="compareItemDetail">
                <p>
                  <i className="fa-solid fa-check" style={{ color: "green" }} />
                </p>
              </div>
            ) : (
              <div className="compareItemDetail">
                <p>
                  <i className="fa-solid fa-xmark" style={{ color: "red" }} />
                </p>
              </div>
            );
          })}
          {/* <div className="compareItemDetail"><p><i className="fa-solid fa-check" style={{color:"green"}}/></p></div>
            <div className="compareItemDetail"><p><i className="fa-solid fa-xmark" style={{color:"red"}}/></p></div> */}
        </div>
      </div>
    );
  });

  const handleClick = () => {
    // localStorage.removeItem()
    navigate("/");
    handleAllRemove();
  };
  return (
    <div>
      <div className="compare-headSection">
        <h2>Compare</h2>
        <div>
          <button onClick={handleClick}>Clear Compare</button>
        </div>
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
                {titlesEle}

                {feature.map((item) => {
                  return (
                    <div className="compareTitle">
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            {itemDetails}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
