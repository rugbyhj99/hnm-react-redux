import React from 'react'

const ProductCard = ( {item} ) => {
    
  return (
    <div>
        <img src={item?.img} className="card-img card-img-hover"/>
        <div>{item?.choice === true ? "Concious Choice" : ""}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new === true? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard