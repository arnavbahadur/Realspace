import { Table } from 'lucide-react'
import React from 'react'

const FilterInputTypeComponent = ({
    className="",
    options=[],
    name,
    type,
    ...props
}) => {
  console.log("className",className)
  console.log("name",name)
  return (
    <div className={`${className}`}>
      <p>{name}</p>
      <div >
        {
          options?.map((option)=>{
            return(
                <div key={option?.value}>            
              <input type={type} id={option?.value} name={name} value={option?.value}  />
              <label htmlFor={option?.value} className='hover:cursor-pointer'>{option?.label}</label>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FilterInputTypeComponent
