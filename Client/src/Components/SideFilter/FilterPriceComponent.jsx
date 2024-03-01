import React, { useEffect, useState } from 'react';
import { formatPrice } from '../../Action';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterQuery } from '../../redux/slices/filter.slice';

const FilterPriceComponent = ({  onFilterChange }) => {
    const dispatch = useDispatch();
    const { maxPrice, minPrice , range} = useSelector((state) => state.filter.filterQuery.price);
  const [selectedMinPrice, setSelectedMinPrice] = useState(range?.min);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(range?.max);

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    if (name === 'minPrice') {
      setSelectedMinPrice(value);
    } else if (name === 'maxPrice') {
      setSelectedMaxPrice(value);
    }
    onFilterChange(selectedMinPrice, selectedMaxPrice); // Call a callback function to pass the selected prices to the parent component
  };

  useEffect(() => {
      dispatch(setFilterQuery({ key: "range", value: { min: selectedMinPrice, max: selectedMaxPrice } }));
  },[selectedMaxPrice,selectedMinPrice]);
console.log(range)
  return (
    <div className="w-full p-4 border border-gray-300 rounded-md bg-white">
      <h2 className="text-lg font-semibold mb-4">Filter by Price Range</h2>
      <div>
        <div>
            <p>MIN</p>
      <div className="flex items-center">
        <input
          type="range"
          name="minPrice"
          min={minPrice}
          max={maxPrice}
          value={selectedMinPrice}
          onChange={handlePriceChange}
          className="w-full h-3 appearance-none rounded-full bg-gray-300 cursor-pointer focus:outline-none"
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span className="text-gray-500 ml-2">{formatPrice(minPrice)}</span>
        <span className="text-gray-500 mr-2">{formatPrice(maxPrice)}</span>        
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>Min Price</span>
        <span>Max Price</span>
      </div>
      </div>
      <div className='mt-4'>
        <p>MAX</p>
      <div className="flex items-center ">
        <input
          type="range"
          name="maxPrice"
          min={minPrice}
          max={maxPrice}
          value={selectedMaxPrice}
          onChange={handlePriceChange}
          className="w-full h-3 appearance-none rounded-full bg-gray-300 cursor-pointer focus:outline-none"
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span className="text-gray-500 mr-2">{formatPrice(minPrice)}</span>        
        <span className="text-gray-500 ml-2">{formatPrice(maxPrice)}</span>
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>Min Price</span>
        <span>Max Price</span>
      </div>
      </div>
      <div className='mt-3'>
        <p>range</p>
        <p>{formatPrice(range?.min)} - {formatPrice(range?.max)}</p>
      </div>
      </div>
    </div>
  );
};

export default FilterPriceComponent;
