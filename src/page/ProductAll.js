import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container , Row, Col } from "react-bootstrap";
import { useSearchParams } from 'react-router-dom';
import { productAction } from "../redux/actions/productAction.js"
import { useDispatch, useSelector } from 'react-redux';
// Api호출하는 법
// useEffect에서 호출한다
const ProductAll = () => {
  const productList = useSelector((state)=> state.product.productList)
  // 쿼리 찾아내는 useSearchParams 
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const getProducts = () => {
    // 쿼리 호출
    let searchQuery = query.get("q") || ""; 
    console.log("쿼리값은?", searchQuery);
    dispatch(productAction.getProducts(searchQuery))
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