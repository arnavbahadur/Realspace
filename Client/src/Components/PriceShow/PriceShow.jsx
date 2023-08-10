import React, { useEffect, useLayoutEffect, useState } from 'react'

const PriceShow = (props) => {
    
    const Price = ()=>{
        return
    }
  return Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(props.price)
}

export default PriceShow
