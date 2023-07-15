import React from 'react'
import './PageNum.css'
const PageNum = ({totalPost,PostPerPage,currentPage,setCurrentPage}) => {
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(totalPost/PostPerPage);i++){
        pageNumber.push(i);
    }
    
    return (
        <div className='pageNum-section'>
            {pageNumber.map(e=>{
                return(
                    <div className="pageNum-individual" onClick={()=>{setCurrentPage(e)}}>{e}</div>
                )
            })}
        </div>
    )
}

export default PageNum
