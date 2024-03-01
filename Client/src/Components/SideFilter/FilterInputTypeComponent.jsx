import { Table } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterQuery } from "../../redux/slices/filter.slice";

const FilterInputTypeComponent = ({
  className = "",
  options = [],
  name,
  type,
  filterKey = "",
  ...props
}) => {
  const dispatch = useDispatch();
  const filterQueryValue = useSelector(
    (state) => state.filter.filterQuery[filterKey]
  );
  const changeHandler = (e) => {
    dispatch(setFilterQuery({ key: filterKey, value: e.target.value }));
  };
  return (
    <div className={` mt-3  ${className}`}>
      <p className="text-lg font-medium underline">{name}</p>
      <form {...props}>
        {options?.map((option, index) => {
          return (
            <div key={option + index} className="">
              <input
                type={type}
                id={option}
                name={name}
                value={option}
                className="hover:cursor-pointer"
                checked={filterQueryValue?.includes(option)}
                onClick={changeHandler}
              />
              <label htmlFor={option} className="hover:cursor-pointer ml-2">
                {option}
              </label>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default FilterInputTypeComponent;
