import React from "react";
import { Col, Container, Row,  Form, Table,Button } from "react-bootstrap";
import "../../assets/scss/DocDetail.scss";
import "../../assets/scss/dashboard.scss";
import rightArrow from '../../assets/images/icons/right-arrow.png'

const DocPayment = () => {
  return (
    <Container>
      <div className="docdetail-container my-3">
        <Row>
          <Col sm={12} md={12} lg={12}>
            <div className="d-flex justify-content-between flex-column flex-md-row border-bottom pb-2 align-items-end">
              <div className="details-heading">
                <h3 className="title">
                  Document Details
                  <span className="btn btn-gray ms-md-5 ms-1">Print and Deliver</span>
                </h3>
                <small>
                  Upload your Document, We will Print on stamp paperand Deliver.
                </small>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="my-2">
          <Col md={12} lg={5} xl={4} className="my-2">
            <div className="left-part">
              {/* fill detail */}
              <div className="">
                <div className="step-content pt-0">
                  <Form>
                    <Form.Group className="my-3">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter the state for which stamp is required"
                      />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Stamp paper Denomiation</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Stamp paper amount"
                      />
                    </Form.Group>
                    <Form.Group className="mb-md-5 mb-4">
                      <Form.Label>Number of copies</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Stamp paper amount"
                      />
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center">
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check
                          type="checkbox"
                          label="Courier the document"
                        />
                      </Form.Group>
                      <div className="button">
                        <button className="btn btn-save text-center">
                          Pay
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
              <div className="legal-expert mt-md-5 mt-3">
                <div className="legal-img">
                  <h4 className="mb-lg-5 mb-4">Do you want to consult a Legal Expert ?</h4>
                  <Button className="btn btn-learn">Learn more <img src={rightArrow} className="img-fluid ms-2"></img></Button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={12} lg={7} xl={8} className="my-2">
            <div className="right-part">
              <div className="p-md-4 p-2">
                <div className="tab-title">Order Summary</div>
                <Table responsive className="mt-md-4 mt-2">
                  <tbody>
                    <tr>
                      <td>Legal Documents</td>
                      <td className="text-center">₹99</td>
                    </tr>
                    <tr>
                      <td>Stamp Paper cost</td>
                      <td className="text-center">₹100</td>
                    </tr>
                    <tr>
                      <td>Legal Documents</td>
                      <td className="text-center">₹99</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td className="text-center price-border">₹298</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default DocPayment;
