import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';
const Login = ( {setAuthenticate} ) => {
  // 입력받은 정보를 가지고 백엔드로 보내고 싶을 떄 쓰는게 form
  // 버튼에 type을 submit으로 적으면 새로고침이 된다 (onSubmit)
  // 이럴경우는 form에 onSubmit 이벤트를 사용한다
  // 폼을 사용할 때에는 preventDefault();을 써서 새로고침하는걸 막아주자

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = (event) => {    
    event.preventDefault();
    console.log("login user")
    dispatch(authenticateAction.login(id, password))
    navigate("/");
  }
  return (
    <Container>           
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setId(e.target.value)}}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  )
}

export default Login