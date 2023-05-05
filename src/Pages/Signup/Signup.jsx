import React, { useState } from "react";
import { Col, Container, Form,Row, Button } from "react-bootstrap";
import "../../assets/scss/Signup.scss";
import signupImg from "../../assets/images/signup-bg.webp";
import logo from "../../assets/images/logo.png";
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { otpauthentication } from "../../config/routeConstances";

const Signup = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [registeruser, setregisterUser] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    address: "",
    email: "",
    pincode: "",
    password: "",
    tc: false,
  })

  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const handleChange = (e) => {
    if (e.target.name === "tc") {
      setregisterUser({ ...registeruser, [e.target.name]: e.target.checked });
    }
    setregisterUser({ ...registeruser, [e.target.name]: e.target.value });
  };
 


  const onSubmit = (e) => 
  {
    //  fetch("https://nodeapi-roan.vercel.app/api/auth/register",{
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({...registeruser})      
      //   })      
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({...registeruser}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      navigate("/otpauthentication")
        // dispatch(userRegisterSuccess(registeruser))
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
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first Name"
                  autoFocus
                  name="firstname"
                  {...register("firstname", {
                    onChange: (e) => {
                      handleChange(e);
                    },
                    required: true
                  })}
                />
                  {errors.firstname?.type === 'required' && <span style={{ color: "red" }}>First Name  is required</span>}
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last Name"
                  autoFocus
                  name="lastname"
                  {...register("lastname", {
                    onChange: (e) => {
                      handleChange(e);
                    },
                    required: true
                  })}
                />
                 {errors.lastname?.type === 'required' && <span style={{ color: "red" }}>Last Name  is required</span>}
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>E-mail ID</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your E-mail ID"
                  autoFocus
                  name="email"
                  {...register("email", {
                    onChange: (e) => {
                      handleChange(e);
                    },
                    required: true
                  })}
                />
                 {errors.email?.type === 'required' && <span style={{ color: "red" }}>Email  is required</span>}
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your Phone Number"
                  autoFocus
                  
                  name="phone"
                  {...register("phone", {
                    onChange: (e) => {
                      handleChange(e);
                    },    
                    required: true
                  })}
                
                />
                {errors.phone?.type === 'required' && <span style={{ color: "red" }}>Phone No is required</span>}
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Address"
                  autoFocus
                  name="address"
                  {...register("address", {
                    onChange: (e) => {
                      handleChange(e);
                    },
                    required: true
                  })}
                />
                {errors.address?.type === 'required' && <span style={{ color: "red" }}>Address is required</span>}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Pin Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Pin Code"
                  autoFocus
                  name="pincode"
                  {...register("pincode", {
                    onChange: (e) => {
                      handleChange(e);
                    },
                    required: true
                  })}
                />
                {errors.pincode?.type === 'required' && <span style={{ color: "red" }}>Pincode is required</span>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I accept your all terms and conditions" name="tc" autoFocus
                {...register("tc", {
                  onChange: (e) => {
                    handleChange(e);
                  },
                  required: true
                })}
              />
                {errors.tc?.type === 'required' && <span style={{ color: "red" }}>Please select TC</span>}
              </Form.Group>
              <Button className="btn btn-save w-100" type="submit">
                Submit
              </Button>
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

export default Signup;
