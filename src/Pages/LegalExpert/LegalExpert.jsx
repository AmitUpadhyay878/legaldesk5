import React from "react";
import { Col, Container, Row, Button, Form, Table } from "react-bootstrap";
import "../../assets/scss/Legalexpert.scss";
import "../../assets/scss/DocDetail.scss";

const LegalExpert = () => {
  return (
    <Container>
      <div className="docdetail-container legal-container my-3">
        <Row>
          <Col sm={12} md={12} lg={12}>
            <div className="d-flex justify-content-between flex-column flex-md-row border-bottom pb-2 align-items-md-end">
              <div className="details-heading">
                <h3 className="title">Talk to Legal Expert</h3>
                <small>Talk to our legal expert and resolve your queries</small>
              </div>

              <Button className="btn btn-save mt-3">Talk to Legal Expert</Button>
            </div>
          </Col>
        </Row>
        <Row className="my-2">
          <Col md={12} lg={5} className="my-2">
            <div className="left-part">
              {/* fill detail */}
              <div className="">
                <div className="step-content">
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Query Type</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Type of Query"
                        autoFocus
                        value="Renta; Agreement"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Subject of Query</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Subject of Query"
                        autoFocus
                        value="Stamp duty on rental Agreement"
                      />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Query</Form.Label>
                      <textarea
                        className="form-control"
                        placeholder="Subject of Query"
                        rows={10}
                        autoFocus
                        value="Please connect and let me know the clause and details of stamp duty"
                      ></textarea>
                    </Form.Group>
                    <div className="button d-flex align-items-center justify-content-center">
                      <button className="btn btn-save text-center">
                        Review and Pay
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
          <Col md={12} lg={7} className="my-2">
            <div className="right-part">
              {/* before review and pay screen */}
              <div className="p-4 d-none">
                <div className="tab-title">Order Summary</div>
                <Table responsive className="mt-md-4 mt-2">
                  <tbody>
                    <tr className="legal-charge">
                      <td>
                        <span>Legal Expert Charges</span>
                      </td>
                      <td className="text-center">
                        <span className="fw-semibold text-dark">₹499</span>
                      </td>
                    </tr>
                    <tr className="legal-charge">
                      <td>
                        <span className="shadow-none border-0">Subtotal</span>
                      </td>
                      <td className="text-center price-border">
                        <span className="shadow-none border-0 fw-semibold text-dark">
                          ₹499
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              {/* after review and pay screen */}
              <div className="p-4 w-100 h-100">
                <div className="d-flex align-items-center justify-content-center w-100 h-100">
                  <p className="mb-0 text-center fs-4 fw-semibold">
                    Thanks for the Payment.<span className="d-block"> Our legal expert will reachout
                    witihin 24 hours</span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default LegalExpert;
