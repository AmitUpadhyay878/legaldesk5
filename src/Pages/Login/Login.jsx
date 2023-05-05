import React, { useState } from "react";
import "../../assets/scss/Signup.scss";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import signupImg from "../../assets/images/signup-bg.png";
import googleIcon from "../../assets/images/icons/icon-google.png";
import {useForm} from 'react-hook-form'
import { Link, useNavigate } from "react-router-dom";
import { docList, home, signup } from "../../config/routeConstances";
export const Login = () => {

const navigate=  useNavigate()

  const [loginuser,setloginUser] = useState({
        email:"",
        password:""
  })

  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const handleChange = (e) => {
    setloginUser({ ...loginuser, [e.target.name]: e.target.value });
  };

  const onSubmit = (data) =>{
    
    //  fetch("https://nodeapi-roan.vercel.app/api/auth/login",{
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)      
    //     })   
        
  }


  return (
    <Container fluid className="px-0">
      <Row className="mx-0 signup-container">
        <Col sm={12} xl={6} lg={12} className="signup-content px-0">
          <div className="logo py-4 text-center">
            <img src={logo} className="img-fluid" alt=""></img>
          </div>
          <div className="signup-img d-block d-xl-none">
            <img src={signupImg} className="img-fluid" alt=""></img>
          </div>
          <div className="signup-form px-5 pb-3 pt-4">
            <div className="login-title">
                <h2>Welcome back</h2>
                <h4>Welcome back! Please enter your details.</h4>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your Email"
                  autoFocus
                  name="email"
                  {...register("email", {
                    onChange: (e) => {
                      handleChange(e);
                    },
                    required: true 
                  })}
                />
                {errors.email?.type === 'required' && <span style={{color:"red"}}>Email  is required</span>}              
              </Form.Group>
              <Form.Group
                className="mb-5"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  autoFocus
                  name="password"            
                  {...register("password", {
                    onChange: (e) => {
                      handleChange(e);
                    },
                    required: true 
                  })}
                />
                {errors.password?.type === 'required' && <span style={{color:"red"}}>Password  is required</span>}
              </Form.Group>
              <Row className="mx-0 mb-3">
                <Col sm={6} md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>
                </Col>
                <Col sm={6} md={6} lg={6}>
                    <div className="text-end"><a href='*' className="forgot-link">Forgot password ?</a></div>
                </Col>
              </Row>
              <Form.Group className="mb-2">
              <Button className="btn btn-save w-100" type="submit">
                Sign in
              </Button>
              </Form.Group>
              <Form.Group className="mb-3">
              <Button variant="outline-secondary" className="btn w-100" type="submit">
              <img src={googleIcon} className="img-fluid me-2" width={20} alt=""></img> Sign in with Google
              </Button>
              </Form.Group>
              <div className="mb-2">
              <div className="free-content">Don’t have an account? <Link to={signup} className="sign-link">Sign up fo free!</Link></div>
              </div>
            </Form>
          </div>
        </Col>
        <Col sm={12} xl={6} lg={12} className="px-0 d-none d-xl-block">
          <div className="signup-img">
            <img src={signupImg} className="img-fluid" alt=""></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
