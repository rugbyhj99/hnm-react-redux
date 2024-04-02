import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetail = () => {
  let {id} = useParams();
  const product = useSelector((state) => state.product.selectedItem);
  const [selectedSize, setSelectedSize] = useState(""); // 선택된 사이즈를 상태로 관리
  const dispatch = useDispatch();

  const getProductDetail = async() => {
    dispatch(productAction.getProductDetail(id))    
  }
  useEffect(() => {
    getProductDetail()
  }, [id])

  const handleSizeSelect = (size) => {
    setSelectedSize(size); // 선택된 사이즈 업데이트
  };
  return (
    <Container>
      <Row>
        <Col className="detail-img" >
          <img src={product?.img} style={{ width: '100%'}} />
        </Col>
        <Col className="detail-text">
          <div style={ {color: 'red', fontWeight: '600', fontSize: '1.3rem'}}>{product?.choice === true ? "Concious Choice" : null } {product?.new === true ? "신상품" : null }</div>
          <h1>{product?.title}</h1>
          <h1>{product?.price.toLocaleString()}원</h1>   
          
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="white" id="dropdown-basic">
                {selectedSize ? selectedSize : "Select Size"} {/* 선택된 사이즈 표시 */}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {/* product가 로드되었을 때에만 Dropdown 아이템들을 렌더링합니다. */}
                {product && product.size.map((size, index) => (
                  <Dropdown.Item key={index} onClick={() => handleSizeSelect(size)}>
                    {size}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>       
            </Dropdown>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail