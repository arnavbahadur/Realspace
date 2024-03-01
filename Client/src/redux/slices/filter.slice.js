import { createSlice } from "@reduxjs/toolkit";
import { convertIntoBHK } from "../../Action";

const filterQuerySet = (state, action) => {
  const { key } = action.payload;
  if (key === "all") {
    const { purpose, propertyType, location, max, min } = action.payload.value;
    state.filterQuery.purpose = purpose;
    if (propertyType?.trim() !== "" && location?.trim() !== "") {
      state.filterQuery.propertyType = [propertyType];
      state.filterQuery.location = [location];
    }
    state.filterQuery.price.range.max = max;
    state.filterQuery.price.range.min = min;
  }
  if (key === "purpose") {
    state.filterQuery[key] = action.payload.value;
  } else if (key === "maxPrice" || key === "minPrice") {
    state.filterQuery.price[key] = action.payload.value;
  } else if (key === "range") {
    state.filterQuery.price.range.max = action.payload.value.max;
    state.filterQuery.price.range.min = action.payload.value.min;
  } else if (
    (key === "propertyType" || key === "location" || key === "BHK") &&
    action.payload.value.length > 0 &&
    action.payload.value[0] !== ""
  ) {
    if (action.payload.value.trim() === "") {
      console.log("empty", action.payload.value);
    }
    if (state.filterQuery[key]?.includes(action.payload.value)) {
      state.filterQuery[key] = state.filterQuery[key].filter(
        (item) => item !== action.payload.value
      );
    } else
      state.filterQuery[key] = [
        ...state.filterQuery[key],
        action.payload.value,
      ];
  }
};

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    uniqueValues: {
      propertyType: [],
      location: [],
      price: [],
      purpose: [],
      BHK: [],
    },
    filteredData: [],
    filterQuery: {
      propertyType: [],
      location: [],
      price: {
        maxPrice: 0,
        minPrice: 0,
        range: {
          max: 0,
          min: 0,
        },
      },
      purpose: "",
      BHK: [],
    },
    isErr: false,
    errMsg: "",
  },
  reducers: {
    setFilteredData: (state, action) => {
      const { purpose, propertyType, location, BHK } = state.filterQuery;
      console.log(action.payload);
      let filteredData = [...action.payload];
      if (purpose) {
        console.log("purpose");
        filteredData = filteredData?.filter((item) => {
          return purpose === item.Purpose;
        });
      }
      if (propertyType.length > 0 && propertyType[0] !== "") {
        filteredData = filteredData.filter((item) => {
          return state.filterQuery.propertyType.includes(item.propertytype);
        });
      }
      console.log("propertyType", state.filterQuery.propertyType);
      if (location.length > 0 && location[0] !== "") {
        filteredData = filteredData.filter((item) => {
          return location.includes(item.location);
        });
      }
      if (
        state.filterQuery.price.range.min > 0 &&
        state.filterQuery.price.range.max > 0
      ) {
        console.log("range");
        filteredData = filteredData.filter((item) => {
          return (
            item.price >= state.filterQuery.price.range.min &&
            item.price <= state.filterQuery.price.range.max
          );
        });
      }
      if (BHK.length > 0 && BHK[0] !== "") {
        filteredData = filteredData.filter((item) => {
          return convertIntoBHK(BHK)===item.bedroom?true:false;
        });
      }
      state.filteredData = filteredData;
    },
    setFilterQuery: (state, action) => {
      filterQuerySet(state, action);
    },
    setUniqueValues: (state, action) => {
      state.uniqueValues = action.payload;
      const price = action.payload?.price;
      if (price?.length > 0){
        state.filterQuery.price.maxPrice = Math.max(...price);
        state.filterQuery.price.minPrice = Math.min(...price);
      }
    },
  },
});

export default filterSlice.reducer;
export const { setFilteredData, setFilterQuery, setUniqueValues } =
  filterSlice.actions;
