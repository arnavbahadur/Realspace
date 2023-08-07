import React, { useEffect, useLayoutEffect, useState } from 'react'

const PriceShow = (props) => {
    const [price, setPrice] = useState();
    // console.log(price)
    useLayoutEffect(()=>{
        setPrice(Price())
    },[])
    const Price = ()=>{
        return( Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(props.price))
    }
  return (
    <div>
      {price}
    </div>
  )
}

export default PriceShow
