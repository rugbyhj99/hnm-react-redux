import React from 'react'
import { useNavigate } from 'react-router-dom'


const ProductCard = ( {item} ) => {
    const navigate = useNavigate();
    const showDetail = () => {
      navigate(`/product/${item.id}`)
    }
  return (
    <div>
        <img src={item?.img} className="card-img" onClick={showDetail} />
        <div style={{ color: 'red', fontWeight: '600', fontSize: '1.3rem'}}>{item?.choice === true ? "Concious Choice" : ""} {item?.new === true? "신제품" : ""}</div>
        <div style={{ fontSize: '1.8rem'}}>{item?.title}</div>
        <div>{item?.price.toLocaleString()}원</div>
        <div></div>
    </div>
  )
}

export default ProductCard