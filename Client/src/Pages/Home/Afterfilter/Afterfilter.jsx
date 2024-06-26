import React, { useEffect, useState } from "react";
import "./Afterfilter.css";
import HouseBox from "../../../Components/HouseBox/HouseBox";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import PageNum from "../../../Components/PageNum/PageNum";
import SideFilter from "../../../Components/SideFilter/SideFilter";
import { useData } from "../../../Context/DataContext";
import { getUniqueValueOFPropertyFields } from "../../../Action";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterQuery,
  setFilteredData,
  setUniqueValues,
} from "../../../redux/slices/filter.slice";
import { filterKeys } from "../../../types/types";

function Afterfilter(props) {
  // const { Propertytype,location,budget } = useParams();
  const { propertyData } = useData();
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const contentPerPage = 9;
  let { id } = useParams();
  const [content, setContent] = useState([]);

  const filteredData = useSelector((state) => state.filter.filteredData);
  const filterQuery = useSelector((state) => state.filter.filterQuery);
  // const[allproperty,setallproperty]=useState([]);

  const callapi = async () => {
    var type = "";
    var place = "";
    var lprice = 0;
    var uprice = 0;
    // console.log(id)
    var i = 0;
    for (; i < id.length; i++) {
      if (id[i] === "&") {
        break;
      }
      type += id[i];
    }

    i++;

    for (; i < id.length; i++) {
      if (id[i] === "&") {
        break;
      }
      place += id[i];
    }

    i++;

    for (; i < id.length; i++) {
      if (id[i] === "&") {
        break;
      }
      lprice += id[i];
    }

    i++;

    for (; i < id.length; i++) {
      if (id[i] === "&") {
        break;
      }
      uprice += id[i];
    }
    lprice = parseInt(lprice);
    uprice = parseInt(uprice);
    dispatch(
      setFilterQuery({
        key: "all",
        value: {
          propertyType: type,
          location: place,
          min: lprice,
          max: uprice,
        },
      })
    );
    await axios.get(`/propertyapi/`).then((res) => {
      console.log("now", type, place, lprice, uprice);
      setContent(
        res.data.filter(
          (item) =>
            item.propertytype === type &&
            item.location === place &&
            item.price >= lprice &&
            item.price <= uprice
        )
      );
    });
  };

  const lastIndex = currentPage * contentPerPage;
  const startIndex = lastIndex - contentPerPage;
  const currentContent = content.slice(startIndex, lastIndex);
  const totalContent = content.length;

  // console.log(id)
  useEffect(() => {
    callapi();
  }, []);

  useEffect(() => {
    (async () => {
      const uniqueValue = await getUniqueValueOFPropertyFields(propertyData);
      console.log(uniqueValue);
      dispatch(setUniqueValues(uniqueValue));
      // let maxValue = Math.max(uniqueValue?.price)
      // let minValue = Math.min(uniqueValue?.price)
      // console.log(maxValue,minValue)
      // dispatch(setFilterQuery({key:filterKeys.maxPrice,value:maxValue}))
    })();
  }, [propertyData]);

  useEffect(() => {
    dispatch(setFilteredData(propertyData));
  }, [propertyData, filterQuery]);
  
  // console.log(content)

  return (
    <div className="main-after-filter">
      <div className="left-filter">
        <div className="house-card-section">
          {filteredData.map((item) => {
            return (
              <HouseBox
              key={item._id}
                id={item._id}
                title={item.title}
                gallery={item.Gallery}
                location={item.location}
                price={item.price}
                location_url={item.location_url}
                houseboximgUrl={item.houseboximgUrl}
                Purpose={item.Purpose}
                bedRoom={item.bedRoom}
                bathRoom={item.bathRoom}
                areaSqFt={item.areaSqFt}
              />
            );
          })}
        </div>
        <div className="house-pageNumber">
          <PageNum
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalContent={totalContent}
            contentPerPage={contentPerPage}
          />
        </div>
      </div>
      <aside className="w-[30%]  my-5 mr-3 rounded-lg">
        <div className="w-full rounded-2xl bg-gray-400 shadow-xl top-[10px]">
          <SideFilter />
        </div>
      </aside>
    </div>
  );
}

export default Afterfilter;

// ye arnav ne kia the bhanu ne comment ke diA

//  const flat=["ALL Flat","1RK ","1Bhk ","2Bhk ","3Bhk ","4Bhk ","5Bhk ","6Bhk ","7Bhk " ];
//  const Plot=["ALL Size","1000 sqft ","2000 sqft","3000 sqft ","4000 sqft ","5000 sqft ","6000 sqft ","7000 sqft " ];
//  const Office=["ALL Size","300 sqft ","400 sqft","500 sqft ","600 sqft ","700 sqft ","800 sqft ","900 sqft " ];
//  const Shop=["ALL Size","300 sqft ","400 sqft","500 sqft ","600 sqft ","700 sqft ","800 sqft ","900 sqft " ];
//  const Showroom=["ALL Size","300 sqft ","400 sqft","500 sqft ","600 sqft ","700 sqft ","800 sqft ","900 sqft " ];
//  const Industrialproperty=["ALL Size","300 sqft ","400 sqft","500 sqft ","600 sqft ","700 sqft ","800 sqft ","900 sqft " ];
//  const Warehouse=["ALL Size","300 sqft ","400 sqft","500 sqft ","600 sqft ","700 sqft ","800 sqft ","900 sqft " ];
//  const Duplex=["ALL Size","300 sqft ","400 sqft","500 sqft ","600 sqft ","700 sqft ","800 sqft ","900 sqft " ];
//  const Bungalows=["ALL Size","300 sqft ","400 sqft","500 sqft ","600 sqft ","700 sqft ","800 sqft ","900 sqft " ];
//  const Rowhouse=["ALL Size","300 sqft ","400 sqft","500 sqft ","600 sqft ","700 sqft ","800 sqft ","900 sqft " ];

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

// < className="right-filter">
//        <div className="secondfilter">Filter</div>

//       {/* {DisplayMessage()} */}
//          {/* {  if(Propertytype=="flat"){}

//              { flat.map((item) =>{
//               return(
//           <button className="afterfilter-button">{item}</button>
//       )
//       } )}
//       }      */}

// {/*
//       {Propertytype===":Flat"?
//       <>
//          { flat.map((item) =>{
//           console.log(item)
//           return(
//       <button className="afterfilter-button">{item}</button>
//   )
//   } )}
//   </>:<></>
//    } */}

//   {/* for sub filtering Plot */}
//       {/* {Propertytype===":Plot"?
//       <>
//          { Plot.map((item) =>{
//           console.log(item)
//           return(
//       <button className="afterfilter-button">{item}</button>
//   )
//   } )}
//   </>:<></>
//    } */}

// {/* for sub filtering Office */}
//      {/* {Propertytype===":Office"?
//       <>
//          { Office.map((item) =>{
//           console.log(item)
//           return(
//       <button className="afterfilter-button">{item}</button>
//   )
//   } )}
//   </>:<></>
//    }   */}

//    {/* for sub filtering shop */}
//      {/* {Propertytype===":Shop"?
//       <>
//          { Shop.map((item) =>{
//           console.log(item)
//           return(
//       <button className="afterfilter-button">{item}</button>
//   )
//   } )}
//   </>:<></>
//    }      */}

//    {/* for sub filtering showroom */}
//    {/* {Propertytype===":Showroom"?
//       <>
//          { Showroom.map((item) =>{
//           console.log(item)
//           return(
//       <button className="afterfilter-button">{item}</button>
//   )
//   } )}
//   </>:<></>
//    }      */}

//    {/* for sub filtering Industrialproperty */}
//    {/* {Propertytype===":Industrialproperty"?
//       <>
//          { Industrialproperty.map((item) =>{
//           console.log(item)
//           return(
//       <button className="afterfilter-button">{item}</button>
//   )
//   } )}
//   </>:<></>
//    }      */}

//    {/* for sub filtering Warehouse */}
//    {/* {Propertytype===":Warehouse"?
//       <>
//          { Warehouse.map((item) =>{
//           console.log(item)
//           return(
//       <button className="afterfilter-button">{item}</button>
//   )
//   } )}
//   </>:<></>
//    }      */}

//    {/* for sub filtering Duplex */}
//    {/* {Propertytype===":Duplex"?
//       <>
//          { Duplex.map((item) =>{
//           console.log(item)
//           return(
//       <button className="afterfilter-button">{item}</button>
//   )
//   } )}
//   </>:<></>
//    }      */}

//    {/* for sub filtering Bungalows */}
//    {/* {Propertytype===":Bungalows"?
//       <>
//          { Bungalows.map((item) =>{
//           console.log(item)
//           return(
//       <button className="afterfilter-button">{item}</button>
//   )
//   } )}
//   </>:<></>
//    }      */}

//    {/* for sub filtering Rowhouse */}
//    {/* {Propertytype===":Rowhouse"?
//       <>
//          { Rowhouse.map((item) =>{
//           console.log(item)
//           return(
//       <button className="afterfilter-button">{item}</button>
//   )
//   } )}
//   </>:<></>
//    }      */}
