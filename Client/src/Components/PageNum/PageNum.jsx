import React from 'react'
import './PageNum.css'
const PageNum = ({totalContent,contentPerPage,setCurrentPage}) => {
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(totalContent/contentPerPage);i++){      // dynamically counting and adding number of page in array
        pageNumber.push(i);
    }
    
    return (
        <div className='pageNum-section'>
            {pageNumber.map(item=>{
                return(
                    <div className="pageNum-individual" onClick={()=>{setCurrentPage(item)}}>{item}</div>
                )
            })}
        </div>
    )
}

export default PageNum
