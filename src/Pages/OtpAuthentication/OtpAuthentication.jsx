import React, { useState } from "react";
import { Col, Container, Row, Button, Form, Modal } from "react-bootstrap";
import "../../assets/scss/DocDetail.scss";
import "../../assets/scss/agreement.scss";
import "../../assets/scss/dashboard.scss";

const OtpAuthentication = () => {
  return (
    <Container>
      <div className="docdetail-container agrrement-container my-3">
        <Row>
          <Col sm={12} md={12} lg={12}>
            <div className="d-flex justify-content-between flex-column flex-md-row border-bottom pb-2 align-items-end">
              <div className="details-heading">
                <h3 className="title">
                  Document Preview &gt; Joint Venture agreement
                </h3>
                <small>
                  Upload your Document, We will Print on stamp paperand Deliver.
                </small>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="my-2">
          <Col md={12} lg={7} className="my-2">
            {/* otp authentication here */}
            <div className="left-part p-4 h-100">
              <div className="tab-title text-center">OTP Authentication</div>
              <Form className="row align-items-end my-md-5 my-3">
                <Form.Group className="mb-4 col-md-8">
                  <Form.Label>Please type OTP</Form.Label>
                  <Form.Control type="text" placeholder="OTP send on Phone" />
                </Form.Group>
                <Form.Group className="mb-4 col-md-4">
                  <Button className="btn btn-save">Authenticate</Button>
                </Form.Group>
              </Form>
            </div>
            {/* otp authentication */}
            <div className="left-part p-4 d-none">
            <div className="tab-title text-center">Signed Successfully</div>
            <div className="fs-6 text-center fw-semibold text-dark my-md-5 my-3">Thanks for Signing, the document has been signed successfully.</div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default OtpAuthentication;
