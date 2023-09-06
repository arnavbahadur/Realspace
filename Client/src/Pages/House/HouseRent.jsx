import React, {  useState } from "react";
import HomeSectionsHeading from "../../Components/HomeSectionsHeading/HomeSectionsHeading";
import CompareSideBtn from "../../Components/CompareSideBtn/CompareSideBtn";
import PageNum from "../../Components/PageNum/PageNum";
import HouseBox from "../../Components/HouseBox/HouseBox";
import "./House.css";
import { useData } from "../../Context/DataContext";

const HouseRent = () => {
  const { rentProperty } = useData();
  const [currentPage, setCurrentPage] = useState(1);
  const contentPerPage = 9;

  const lastIndex = currentPage * contentPerPage;
  const startIndex = lastIndex - contentPerPage;
  const currentContent = rentProperty.slice(startIndex, lastIndex);
  const totalContent = rentProperty.length; // posts.length is actual 100 is for test

  return (
    <div>
      <CompareSideBtn />
      {/* <div className="pic-filter">pic & filter</div> */}
      <div className="house-header">
        <HomeSectionsHeading purpose={`For Rent`} title="House" />
      </div>
      <div className="house-card-section">
        {currentContent.map((item) => {
          // return <HouseBox title={item.title} location={item.location} price={item.price} Purpose={item.Purpose} location_url={item.location_url} img={item.img} />
          return (
            <HouseBox
              key={item._id}
              title={item.title}
              gallery={item.Gallery}
              id={item._id}
              houseboximgUrl={item.houseboximgUrl}
              location={item.location}
              price={item.price}
              location_url={item.location_url}
              img={item.img}
              Purpose={item.Purpose}
              bedRoom={item.bedRoom}
              bathRoom={item.bathRoom}
              areaSqFt={item.areaSqFt}
            />
          ); //original
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
  );
};

export default HouseRent;
