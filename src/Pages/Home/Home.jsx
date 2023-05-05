import React from 'react'
import "../../assets/scss/Home.scss"
import {Container, Nav, Row, Col, Form, Button} from "react-bootstrap";
import backgroundImage from "../../assets/images/DocList/bg-img.webp";
import listIcon from "../../assets/images/icons/list-icon.png";
import { dashboard } from '../../config/routeConstances';
import CategoryList from '../../Components/CategoryList';

const Home = () => {
  return (
    <Container>
      <Row className="align-items-center my-4">
        <Col md={6} lg={5}>
          <div className="legal_content">
            <h2 className="mb-3">Legal Document Template and Deeds</h2>
            <p className="mb-md-5 mb-3">
              Choose a document and Category Choose a document and
              CategoryChoose a document and Category
            </p>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 shadow-sm border-0"
                aria-label="Search"
              />
            </Form>
          </div>
        </Col>
        <Col md={6} lg={7}>
          <div>
            <img src={backgroundImage} className="img-fluid flogo" alt="" />
          </div>
        </Col>
      </Row>

      <div className="categories-content">
        <div className="d-flex justify-content-between flex-column flex-md-row border-bottom pb-2">
          <h3 className="title">Categories</h3>
          <Button variant="light" className="document-btn">
            + Request Document Addition
          </Button>
        </div>
        <Row>
           <CategoryList /> 
          {/* <Col xs={12} md={6} lg={4} className="px-lg-5 my-3">
            <div className="category-list">
              <h4>Rental & Lease</h4>
              <Nav className="flex-column">
                <Nav.Item>
                
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                
              </Nav>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="px-lg-5 my-3">
            <div className="category-list">
              <h4>Rental & Lease</h4>
              <Nav className="flex-column">
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                
              </Nav>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="px-lg-5 my-3">
            <div className="category-list">
              <h4>Rental & Lease</h4>
              <Nav className="flex-column">
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                
              </Nav>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="px-lg-5 my-3">
            <div className="category-list">
              <h4>Rental & Lease</h4>
              <Nav className="flex-column">
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                
              </Nav>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="px-lg-5 my-3">
            <div className="category-list">
              <h4>Rental & Lease</h4>
              <Nav className="flex-column">
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#"><img src={listIcon} alt="" className="img-fluid me-2" width="18px"></img>
                    Flat and Rental Ag.</Nav.Link>
                </Nav.Item>
                
              </Nav>
            </div>
          </Col> */}
        </Row>
      </div>
    </Container>
  )
}

export default Home