import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';


const ProductDetail = () => {
  let {id} = useParams();
  const[product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(""); // 선택된 사이즈를 상태로 관리
  const getProductDetail = async() => {
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail()
  }, [])

  const handleSizeSelect = (size) => {
    setSelectedSize(size); // 선택된 사이즈 업데이트
  };
  return (
    <Container>
      <Row>
        <Col className="detail-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <h4>{product?.title}</h4>
          <p>{product?.price}</p>
          <p>{product?.choice === true ? "Concious Choice" : null }</p>
          <p>{product?.new === true ? "신상품" : null }</p>
          <p>
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
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail