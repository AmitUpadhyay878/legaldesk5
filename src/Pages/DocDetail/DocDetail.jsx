import React from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import "../../assets/scss/DocDetail.scss";
import "../../assets/scss/dashboard.scss";

const DocDetail = () => {
  return (
    <Container>
      <div className="docdetail-container my-3">
        <Row>
          <Col sm={12} md={12} lg={12}>
            <div className="d-flex justify-content-between flex-column flex-md-row border-bottom pb-2 align-items-end">
              <div className="details-heading">
                <h3 className="title">
                  Document Details
                  <span className="btn btn-gray ms-5">Print and Deliver</span>
                </h3>
                <small>
                  Upload your Document, We will Print on stamp paperand Deliver.
                </small>
              </div>

              <Button className="btn btn-save">Talk to Legal Expert</Button>
            </div>
          </Col>
        </Row>
        <Row className="my-2">
          <Col md={12} lg={4} className="my-2">
            <div className="left-part">
              {/* fill detail */}
              <div className="">
                <div className="step-content">
                  <div className="text-end mb-3 step">Step 1/2</div>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Document Type</Form.Label>
                      <Form.Select>
                        <option></option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>State</Form.Label>
                      <Form.Select>
                        <option></option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Name of Party 1</Form.Label>
                      <Form.Select>
                        <option></option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Name of Party 2</Form.Label>
                      <Form.Select>
                        <option></option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Upload Your Document</Form.Label>
                      <div className="d-flex align-items-center">
                        <div class="file">
                          <label for="input-file" className="btn btn-save">
                            Upload
                          </label>
                          <input id="input-file" type="file" />
                        </div>
                        <div className="btn btn-gray ms-2">
                          Supporting formates : Docx, Docx
                        </div>
                      </div>
                    </Form.Group>
                  </Form>
                </div>
                <div className="button mt-3">
                  <button className="btn btn-save text-center">
                    Save and Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={12} lg={8} className="my-2">
            <div className="right-part">
              <p className="mb-0 text-center instruction">Instructions</p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default DocDetail;
