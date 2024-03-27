import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container , Row, Col } from "react-bootstrap";
// Api호출하는 법
// useEffect에서 호출한다
const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  // APi호출
  const getProducts = async() => {
    let url = `http://localhost:5000/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div>
      {/* 부트스트랩에서 아이템을 가운데로 있게 해주는건 Container*/}
      <Container>        
        <Row>
          {
            productList.map((menu) => (
              <Col lg={3}><ProductCard item={menu} /></Col>              
            ))            
          }
          
        </Row>       
      </Container>
      
    </div>
  )
}

export default ProductAll