import React, { useState } from "react";
import "../../../assets/scss/footer.scss";
import { Container, Nav, Row, Col } from "react-bootstrap";
import facebookIcon from "../../../assets/images/icons/facebook.png";
import linkedinIcon from "../../../assets/images/icons/linkedin.png";
import twitterIcon from "../../../assets/images/icons/twitter.png";
import mailIcon from "../../../assets/images/icons/mail-white.png";
import phoneIcon from "../../../assets/images/icons/phone-white.png";
import footerLogo from "../../../assets/images/footer-logo.png";

const Footer = () => {

  const [isLoggedIn, setisLoggedIn] = useState(true);

  return (
    <div>
        { !isLoggedIn ? (
            <>
    <footer className="footer">
      <Container fluid>
        {/* before login */}
        <Row>
          <Col xs={12} lg={9}>
            <Row className="justify-content-xl-end">
              <Col xs={12}>
                <div>
                  <img src={footerLogo} className="img-fluid flogo" alt="" />
                </div>
              </Col>
              <Col xs={12} xl={3} md={4} sm={4} className="my-2 mt-md-4 mt-sm-3">
                <div className="footer-list">
                  <h4 className="footer-title">Company</h4>
                  <Nav className="flex-column">
                    <Nav.Item>
                      <Nav.Link href="#">About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#">Support</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#">Request Demo</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#">Media Press</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </Col>
              <Col xs={12} xl={4} md={4} sm={4} className="my-2 mt-md-4 mt-sm-3">
                <div className="footer-list">
                  <h4 className="footer-title">Products</h4>
                  <Nav className="flex-column">
                    <Nav.Item>
                      <Nav.Link href="#">Enterpries</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#">Support</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#">Professionals</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </Col>
              <Col xs={12} xl={4} md={4} sm={4} className="my-2 mt-md-4 mt-sm-3">
                <div className="footer-list">
                  <h4 className="footer-title">Tools</h4>
                  <Nav className="flex-column">
                    <Nav.Item>
                      <Nav.Link href="#">Stamp Duty Calculator</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#">Talk to Legal Expert</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#">Template Center</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={3} className="my-2 mt-md-5">
            <div className="social-detail">
              <Nav>
                <Nav.Item>
                  <Nav.Link href="#">
                    <img
                      src={facebookIcon}
                      className="img-fluid flogo"
                      alt=""
                    />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">
                    <img
                      src={linkedinIcon}
                      className="img-fluid flogo"
                      alt=""
                    />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#">
                    <img src={twitterIcon} className="img-fluid flogo" alt="" />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <div className="contact-detail my-3 mt-md-5">
                <h4 className="footer-title">Contact Us</h4>
                <p>Address</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
            </>
        ):(
              <>
   {/* after login */}
   <footer className="footer pb-0">
      <Container fluid>
        <Row>
          <Col xs={12} md={12} lg={4} className="my-2 mt-lg-4">
            <div className="">
              <Nav className="flex-column">
                <Nav.Item>
                  <Nav.Link href="#"><img src={mailIcon} className="img-fluid me-2" alt="" /> contact@complianceeasy.in</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
          <Col xs={12} md={12} lg={5} className="my-2 mt-lg-4 text-lg-center">
          <div className="">
              <Nav className="flex-column">
                <Nav.Item>
                  <Nav.Link href="#" className="d-inline-flex px-2">Privacy</Nav.Link>
                  <span className="text-white">|</span>
                  <Nav.Link href="#" className="d-inline-flex px-2">Terms and conditions</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
          <Col xs={12} md={12} lg={3} className="my-2 mt-lg-4 text-lg-end">
          <div className="">
              <Nav className="flex-column">
                <Nav.Item>
                  <Nav.Link href="#" className="d-inline-flex"><img src={phoneIcon} className="img-fluid me-2" alt="" /> 98-37410617</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-white">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={12} lg={12} className="text-center my-3">
            <div className="bottom-footer">
            © Copyrights 2022 by ComplianceEasy.in. All rights Reserved
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
              </>
        )}
    </div>
  );
};

export default Footer;
