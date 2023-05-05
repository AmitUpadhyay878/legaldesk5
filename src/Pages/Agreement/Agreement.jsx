import React, { useState } from "react";
import { Col, Container, Row, Button, Form, Modal } from "react-bootstrap";
import stamImg from "../../assets/images/stamp-img.png";
import "../../assets/scss/DocDetail.scss";
import "../../assets/scss/agreement.scss";
import "../../assets/scss/dashboard.scss";

const Agreement = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Col md={12} lg={6} className="my-2">
            <div className="left-part">
              <div className="stamp-img">
                <div>
                  <img src={stamImg} className="img-fluid" alt=""></img>
                </div>
                <div className="signature-content">
                  <div className="signature-button">
                    <Button
                      className="btn btn-signature my-3"
                      onClick={handleShow}
                    >
                      Click to Signature
                    </Button>
                    <Button className="btn btn-lightgreen mt-2">
                      Harshit Gurnani
                    </Button>
                  </div>
                  <div className="signature-button">
                    <Button
                      className="btn btn-signature my-3"
                      onClick={handleShow}
                    >
                      Click to Signature
                    </Button>
                    <Button className="btn btn-lightgreen mt-2">
                      Rahul Kumar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {/* after "Add Signature" show this button */}
          <Col md={12} lg={6} className="my-2 d-none">
            <div className="d-flex align-items-end justify-content-center h-100">
                <Button className="btn btn-save">Proceed</Button>
            </div>
          </Col>
        </Row>
      </div>
      {/* modal signature  */}
      <Modal show={show} onHide={handleClose} centered className="stamp-modal">
        <Modal.Header closeButton>
          <Modal.Title className="btn btn-back border-0">Signature</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <div>
            <div className="mb-3 row align-items-center">
              <div className="col-md-8">
                <div className="d-flex align-items-center justify-content-center bg-gray agreement-div fw-semibold fs-5 flex-wrap flex-column"><span>Sign here </span><span> or</span><span> Upload</span></div>
              </div>
              <div className="col-md-4">
                <Button className="btn btn-save mx-auto">Upload</Button>
              </div>
            </div>
            <Form.Group className="row mb-3 mt-4">
              <div className="col-12 text-center">
                <Button className="btn btn-save mx-auto" onClick={handleClose}>
                  Add Signature
                </Button>
              </div>
            </Form.Group>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Agreement;
