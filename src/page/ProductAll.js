import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container , Row, Col } from "react-bootstrap";
import { useSearchParams } from 'react-router-dom';
// Api호출하는 법
// useEffect에서 호출한다
const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  // 쿼리 찾아내는 useSearchParams 
  const [query, setQuery] = useSearchParams();
  // APi호출
  const getProducts = async() => {
    // 쿼리 호출
    let searchQuery = query.get("q") || ""; 
    console.log("쿼리값은?", searchQuery);
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }
  useEffect(() => {
    getProducts()
  }, [query])

  return (
    <div>
      {/* 부트스트랩에서 아이템을 가운데로 있게 해주는건 Container*/}
      <Container>        
        <Row>
          {
            productList.map((menu) => (
              <Col lg={3} md={6} xs={12}><ProductCard item={menu} /></Col>              
            ))            
          }
          
        </Row>       
      </Container>
      
    </div>
  )
}

export default ProductAll