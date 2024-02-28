import React from "react";
import { ChevronDown } from "lucide-react";
import FilterInputTypeComponent from "./FilterInputTypeComponent.jsx";
import { location, propertyTypes } from "../../types/constants.js";

const SideFilter = () => {
  const filters = [
    {
      id: "color",
      name: "Color",
      options: [
        { value: "white", label: "White" },
        { value: "beige", label: "Beige" },
        { value: "blue", label: "Blue" },
        { value: "brown", label: "Brown" },
        { value: "green", label: "Green" },
        { value: "purple", label: "Purple" },
      ],
    },
    {
      id: "category",
      name: "Category",
      options: [
        { value: "new-arrivals", label: "All New Arrivals" },
        { value: "tees", label: "Tees" },
        { value: "crewnecks", label: "Crewnecks" },
        { value: "sweatshirts", label: "Sweatshirts" },
        { value: "pants-shorts", label: "Pants & Shorts" },
      ],
    },
    {
      id: "sizes",
      name: "Sizes",
      options: [
        { value: "xs", label: "XS" },
        { value: "s", label: "S" },
        { value: "m", label: "M" },
        { value: "l", label: "L" },
        { value: "xl", label: "XL" },
        { value: "2xl", label: "2XL" },
      ],
    },
  ];
  return (
    <div w-full>
      <div className="mx-auto max-w-7xl px-2 py-10 lg:px-10">
        {/* Top */}
        <div className="flex flex-col items-start justify-between">
          <div className="mx-auto">
            <h1 className="text-xl font-bold">More Filter</h1>
          </div>
          <div className="mt-6 flex flex-col items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0">
            <button
              type="button"
              className="hidden items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:inline-flex"
            >
              Sort <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <div>
            <div className="">
              <FilterInputTypeComponent
                options={propertyTypes}
                name={'Property Type'}
                type={"checkbox"}
                />
            </div>
            <div className="">
              <FilterInputTypeComponent
                options={location}
                name={'Location'}
                type={"checkbox"}
                />
            </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideFilter;
