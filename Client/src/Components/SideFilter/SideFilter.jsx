import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import FilterInputTypeComponent from "./FilterInputTypeComponent.jsx";
import { location, propertyTypes } from "../../types/constants.js";
import { useData } from "../../Context/DataContext.jsx";
import { convertArrToObj, getUniqueValueOFPropertyFields } from "../../Action/index.js";
import FilterPriceComponent from "./FilterPriceComponent.jsx";
import { filterKeys } from "../../types/types.js";
import { useDispatch, useSelector } from "react-redux";

const SideFilter = () => {
  const dispatch = useDispatch();
  const { propertyData } = useData();
  const [filterTypes, setFilterTypes] = useState({});
  
  const uniqueValues = useSelector((state) => state.filter.uniqueValues);

  useEffect(() => {
    setFilterTypes(getUniqueValueOFPropertyFields(propertyData))    
  }, [propertyData]);

  useEffect(() => {
    
  },[propertyData,])
  return (
    <div className="w-full overflow-y-auto">
      <div className="mx-auto max-w-7xl px-2 py-10 lg:px-10">
        {/* Top */}
        <div className="flex flex-col items-start justify-between">
          <div className="mx-auto">
            <h1 className="text-xl font-bold">More Filter</h1>
          </div>
            <div className="mx-auto w-full">
          <div className="mt-6 pr-4 flex flex-col   pt-2 md:mt-0 md:space-x-4  md:pt-0">
            <button
              type="button"
              className="hidden items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:inline-flex"
              >
              Sort <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <div>
            <div className="">
              <FilterInputTypeComponent
                options={uniqueValues?.propertyType||[]}
                name={'Property Type'}
                type={"checkbox"}
                filterKey={filterKeys.propertyType}
                />
            </div>
            <div className="">
              <FilterInputTypeComponent
                options={uniqueValues?.location||[]}
                name={'Location'}
                type={"checkbox"}
                filterKey={filterKeys.location}
                />
            </div>
            <div className="">
              <FilterInputTypeComponent
                options={uniqueValues?.purpose||[]}
                name={'Purpose'}
                type={"radio"}
                filterKey={filterKeys.purpose}
                />
            </div>
            <div className="">
              <FilterInputTypeComponent
              options={uniqueValues?.BHK||[]}
              name={'BHK'}
              type={"checkbox"}
              filterKey={filterKeys.BHK}
              />
            </div>
                </div>
            </div>
                <FilterPriceComponent  onFilterChange={(e)=>console.log(e)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideFilter;
