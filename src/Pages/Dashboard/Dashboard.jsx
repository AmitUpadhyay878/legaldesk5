import React, { useEffect, useState } from "react";
import "../../assets/scss/dashboard.scss";
import {
  Container,
  Form,
  Row,
  Col,
  Table,
  Button,
  Tabs,
  Tab,
  Accordion,
  Modal,
} from "react-bootstrap";
import stamImg from "../../assets/images/stamp-img.png";
import { useNavigate } from "react-router-dom";

import {useForm} from 'react-hook-form'
import QAstepOne from "../../Components/QAstepOne/QAstepOne";
const Dashboard = () => {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const navigate = useNavigate();

  const mysteps = ["choosedocument","filldetail", "payment", "stemp", "doorDelivery"];

  const [selected, setSelected] = useState({});
  const [activekey, setactivekey] = useState("filldetail");
  const [steps, setSteps] = useState(1);
  const [fetchSigners, setfetchSigners] = useState([])
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    fetch("http://localhost:3000/signers")
      .then((res) => res.json())
      .then((data) => setfetchSigners(data));
  }, []);


  const handleChange = (e) => {
    setSelected({ ...selected, [e.target.name]: e.target.value });
  };

  const [show, setShow] = useState(false);
  const [showSignature, setShowSignature] = useState(false);
  const [showTag, setShowTag] = useState(false);
  const [showDeadline, setShowDeadline] = useState(false);
  const [showFinalise, setShowFinalise] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseTag = () => setShowTag(false);
  const handleShowTag = () => setShowTag(true);

  const handleCloseDeadline = () => setShowTag(false);
  const handleShowDeadline = () => setShowDeadline(true);

  const handleCloseSignature = () => setShowSignature(false);
  const handleShowSignature = () => setShowSignature(true);

  const handleCloseFinalise = () => setShowFinalise(false);
  const handleShowFinalise = () => setShowFinalise(true);


  const handlenext = (e) => {
    e.preventDefault();
    setactivekey(mysteps[steps]);
    if (steps < 5) {
      setSteps(steps + 1);
    }
  };

  const saveSigner = (e) => {
    e.preventDefault();
        fetch("http://localhost:3000/signers",{
          method: 'POST',
          body: JSON.stringify(e),
          headers: {
            "Content-Type": "application/json"
          },
        })
      
  };

  return (
    <Container>
      <Row className="my-2">
        <Col md={12} lg={4} className="my-2">
          <div className="left-part">
            {/* fill detail */}
          {activekey === "filldetail" && (
           <QAstepOne handlenext={handlenext} selected={selected} setSelected={setSelected} />
          )}
            {/* payment */}
            {activekey === "payment" && (
            <div className="">
              <div className="step-content">
                <Form>
                  <Form.Group className="my-3">
                    <Form.Label>State</Form.Label>
                    <Form.Select>
                    <option value="">state1</option>
                    <option value="">state2</option>
                    <option value="">state3</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Stamp paper Amount</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Stamp paper amount"
                    />
                  </Form.Group>
                  <Form.Group className="mb-1" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Print on Stamp Paper" id="printonstamppaper" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Courier the document" id="courierthedocument" />
                  </Form.Group>
                </Form>
              </div>
              <div className="button mt-3">
                <button className="btn btn-save text-center">Pay</button>
              </div>
            </div>
            )}
            {/* stamp */}
            {activekey === "stemp" && (
            <div className="stamp-content">
              <div className="more-header d-flex align-items-start justify-content-between pb-3 mb-md-5 mb-3">
                <div className="title">
                  <h4 className="mb-0">Add more details</h4>
                  <p className="mb-0">Add your signers, titles and deadlines</p>
                </div>
                <div className="step-more">Step 2/3</div>
              </div>
              <div>
                <div className="step-content">
                  <Form.Label>Invite Signer</Form.Label>
                  <div className="stamp-btn-group">
                    {/* before add signer */}
                    <Button
                      className="btn btn-lightgreen w-100 mt-2"
                      onClick={handleShow}
                    >
                      + Add Signer
                    </Button>
                    {/* after add signer */}
                    <Button className="btn btn-lightgreen mt-2 me-2 d-none">
                      Harshit Gurnani
                    </Button>
                    <Button className="btn btn-lightgreen mt-2 me-2 d-none">
                      Rahul Kumar
                    </Button>
                    <Button
                      className="btn btn-lightgreen mt-2 me-2 d-none"
                      onClick={handleShow}
                    >
                      + Add
                    </Button>
                  </div>
                </div>
                <div className="step-content mt-4">
                  <Form.Label>Title, Tags</Form.Label>
                  <div className="stamp-btn-group">
                    {/* before add signer */}
                    <Button
                      className="btn btn-lightgreen w-100 mt-2 d-none"
                      onClick={handleShowTag}
                    >
                      + Add Tags
                    </Button>
                    {/* after add signer */}
                    <Button className="btn btn-lightgreen mt-2 me-2">
                      Human Resource
                    </Button>
                    <Button
                      className="btn btn-lightgreen mt-2 me-2"
                      onClick={handleShowTag}
                    >
                      + Add
                    </Button>
                  </div>
                </div>
                <div className="step-content mt-4">
                  <Form.Label>Deadline</Form.Label>
                  <div className="stamp-btn-group">
                    <div className="d-flex align-items-center justify-content-between w-100 d-none">
                      {/* before add signer */}
                      <Button
                        className="btn btn-lightgreen w-100 mt-2 me-2 "
                        onClick={handleShowDeadline}
                      >
                        Date
                      </Button>
                      <Button className="btn btn-lightgreen w-100 mt-2 ms-2">
                        Time
                      </Button>
                    </div>
                    {/* after add signer */}
                    <Button className="btn btn-lightgreen mt-2 me-2">
                      19.09.2022
                    </Button>
                  </div>
                </div>
              </div>
              <div className="button d-flex align-items-center justify-content-between mt-md-5 mt-3">
                <button className="btn btn-back text-center w-100 me-2">
                  Back
                </button>
                <button
                  className="btn btn-save text-center w-100 ms-2"
                  onClick={handleShowFinalise}
                >
                  Next
                </button>
              </div>
            </div>
            )}
          </div>
        </Col>
        <Col md={12} lg={8} className="my-2">
          <div className="right-part">
            {/* Desktop view */}
            <div className="d-none d-md-block">
              <Tabs defaultActiveKey="filldetail"
                activeKey={activekey} className="tab-button"
                onSelect={(r) => setactivekey(r)}
                >
                <Tab eventKey="choosedocument" title="Choose Document" id="choosedocument" disabled>
                  <div className="p-4"></div>
                </Tab>
                <Tab eventKey="filldetail" title="Fill Details" id="filldetail">
                  <div className="p-4">
                    <div className="tab-title mb-2">Fill Details</div>
                    <div className="fill-content">
                      <p>
                        Type of Joint venture ?{" "}
                        <strong>{selected?.item0}</strong>
                      </p>
                      <p>
                        Date of Joint venture ?{" "}
                        <strong>
                          {selected?.venturedate || selected?.item1}
                        </strong>
                      </p>
                      <p>
                        Place of Joint venture ?{" "}
                        <strong>{selected?.item2}</strong>
                      </p>
                      <p>
                        Name of the company ? <strong>{selected?.item3}</strong>
                      </p>
                      <p>
                        Party name ? <strong>{selected?.item4}</strong>
                      </p>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="payment" title="Payment" id="payment">
                  {/* payment */}
                  <div className="p-4">
                    <div className="tab-title">Order Summary</div>
                    <Table responsive className="mt-4">
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
                </Tab>
                <Tab eventKey="stemp" title="Stamping" id="stemp">
                  <div>
                    <div className="stamp-img">
                      <div>
                        <img src={stamImg} className="img-fluid" alt=""></img>
                      </div>
                      <div className="signature-content">
                        <div className="signature-button">
                          <Button
                            className="btn btn-signature my-3"
                            onClick={handleShowSignature}
                          >
                            Click to Signature
                          </Button>
                          <Button className="btn btn-lightgreen mt-2">
                            Harshit Gurnani
                          </Button>
                        </div>
                        <div className="signature-button">
                          <Button className="btn btn-signature my-3"></Button>
                          <Button className="btn btn-lightgreen mt-2">
                            Rahul Kumar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="doorDelivery" title="Doorstep Delivery" id="doorDelivery">
                  <div className="p-4">
                    <Form>
                      <Row>
                        <Col sm={12} md={6}>
                        <Form.Group className="mb-3">
                        <Form.Label>Address Line 1</Form.Label>
                          <Form.Control
                            type="text"
                            name="address"
                            placeholoder="Enter Address"
                            className="shadow-none"
                          />
                          </Form.Group>
                        </Col>
                        <Col sm={12} md={6}>
                        <Form.Group className="mb-3">
                        <Form.Label>Address Line 2</Form.Label>
                          <Form.Control
                            type="text"
                            name="address"
                            placeholoder="Enter Address"
                            className="shadow-none"
                          />
                          </Form.Group>
                        </Col>
                        <Col sm={12} md={6}>
                        <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                          <Form.Control
                            type="text"
                            name="city"
                            placeholoder="Enter City"
                            className="shadow-none"
                          />
                          </Form.Group>
                        </Col>
                        <Col sm={12} md={6}>
                        <Form.Group className="mb-3">
                        <Form.Label>Pin Code</Form.Label>
                          <Form.Control
                            type="text"
                            name="pincode"
                            placeholoder="Enter Pin Code"
                            className="shadow-none"
                          />
                          </Form.Group>
                        </Col>
                        <Col sm={12} md={6}>
                        <Form.Group className="mb-3">
                        <Form.Label>State</Form.Label>
                          <Form.Control
                            type="text"
                            name="state"
                            placeholoder="Enter State"
                            className="shadow-none"
                          />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Tab>
              </Tabs>
            </div>
            {/* mobile view */}
            <div className="d-block d-md-none">
              <Accordion defaultActiveKey={['1']}>
                <Accordion.Item eventKey="0" className="mb-3 border-0">
                  <Accordion.Header>Choose Document</Accordion.Header>
                  <Accordion.Body className="tab-pane"></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="mb-3 border-0">
                  <Accordion.Header>Fill Details</Accordion.Header>
                  <Accordion.Body className="tab-pane">
                  <div>
                    <div className="tab-title mb-2">Fill Details</div>
                    <div className="fill-content">
                      <p>
                        Type of Joint venture ?{" "}
                        <strong>{selected?.item0}</strong>
                      </p>
                      <p>
                        Date of Joint venture ?{" "}
                        <strong>
                          {selected?.venturedate || selected?.item1}
                        </strong>
                      </p>
                      <p>
                        Place of Joint venture ?{" "}
                        <strong>{selected?.item2}</strong>
                      </p>
                      <p>
                        Name of the company ? <strong>{selected?.item3}</strong>
                      </p>
                      <p>
                        Party name ? <strong>{selected?.item4}</strong>
                      </p>
                    </div>
                  </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="mb-3 border-0">
                  <Accordion.Header>Payment</Accordion.Header>
                  <Accordion.Body className="tab-pane">
                    {/* payment */}
                  <div className="p-4">
                    <div className="tab-title">Order Summary</div>
                    <Table responsive className="mt-4">
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
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="mb-3 border-0">
                  <Accordion.Header>Stamping</Accordion.Header>
                  <Accordion.Body className="tab-pane">
                  <div>
                    <div className="stamp-img">
                      <div>
                        <img src={stamImg} className="img-fluid" alt=""></img>
                      </div>
                      <div className="signature-content">
                        <div className="signature-button">
                          <Button
                            className="btn btn-signature my-3"
                            onClick={handleShowSignature}
                          >
                            Click to Signature
                          </Button>
                          <Button className="btn btn-lightgreen mt-2">
                            Harshit Gurnani
                          </Button>
                        </div>
                        <div className="signature-button">
                          <Button className="btn btn-signature my-3"></Button>
                          <Button className="btn btn-lightgreen mt-2">
                            Rahul Kumar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="border-0">
                  <Accordion.Header>Doorstep Delivery</Accordion.Header>
                  <Accordion.Body className="tab-pane">
                  <div className="p-4">
                    <Form>
                      <Row>
                        <Col sm={12} md={6}>
                        <Form.Group className="mb-3">
                        <Form.Label>Address Line 1</Form.Label>
                          <Form.Control
                            type="text"
                            name="address"
                            placeholoder="Enter Address"
                            className="shadow-none"
                          />
                          </Form.Group>
                        </Col>
                        <Col sm={12} md={6}>
                        <Form.Group className="mb-3">
                        <Form.Label>Address Line 2</Form.Label>
                          <Form.Control
                            type="text"
                            name="address"
                            placeholoder="Enter Address"
                            className="shadow-none"
                          />
                          </Form.Group>
                        </Col>
                        <Col sm={12} md={6}>
                        <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                          <Form.Control
                            type="text"
                            name="city"
                            placeholoder="Enter City"
                            className="shadow-none"
                          />
                          </Form.Group>
                        </Col>
                        <Col sm={12} md={6}>
                        <Form.Group className="mb-3">
                        <Form.Label>Pin Code</Form.Label>
                          <Form.Control
                            type="text"
                            name="pincode"
                            placeholoder="Enter Pin Code"
                            className="shadow-none"
                          />
                          </Form.Group>
                        </Col>
                        <Col sm={12} md={6}>
                        <Form.Group className="mb-3">
                        <Form.Label>State</Form.Label>
                          <Form.Control
                            type="text"
                            name="state"
                            placeholoder="Enter State"
                            className="shadow-none"
                          />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </Col>
      </Row>
      {/* modal signer detail  */}
      <Modal show={show} onHide={handleClose} centered className="stamp-modal">
        <Modal.Header closeButton>
          <Modal.Title className="btn btn-back border-0">
            Signer Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Form>
            <Form.Group
              className="mb-3 row"
              controlId="exampleForm.ControlInput1"
            >
              <div className="col-md-5">
                <Form.Label className="btn btn-back p-1">
                  Name of Signer
                </Form.Label>
              </div>
              <div className="col-md-7">
                <Form.Control type="text" placeholder="Signer Name" 
               autoFocus
               name="signername"
               {...register("signername", {
                onChange: (e) => {
                  handleChange(e);
                },
                required: true
              })}
               />
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3 row"
              controlId="exampleForm.ControlInput1"
            >
              <div className="col-md-5">
                <Form.Label className="btn btn-back p-1">E-mail ID</Form.Label>
              </div>
              <div className="col-md-7">
                <Form.Control
                  type="email"
                  placeholder="Signer email"
                  autoFocus
                  name="signeremail"
                  {...register("signeremail", {
                    onChange: (e) => {
                      handleChange(e);
                    },
                    required: true
                  })}
                />
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3 row"
              controlId="exampleForm.ControlInput1"
            >
              <div className="col-md-5">
                <Form.Label className="btn btn-back p-1">Phone</Form.Label>
              </div>
              <div className="col-md-7">
                <Form.Control type="tel" placeholder="Phone" 
                autoFocus
                name="signerphone"
                {...register("signerphone", {
                  onChange: (e) => {
                    handleChange(e);
                  },
                  required: true
                })}
                />
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3 row"
              controlId="exampleForm.ControlInput1"
            >
              <div className="col-md-5">
                <Form.Label className="btn btn-back p-1">Sign Type</Form.Label>
              </div>
              <div className="col-md-7">
                <Form.Control
                  type="text"
                  placeholder="Digital, Aadhar, DSC"
                  autoFocus
                  name="signtype"
                  {...register("signtype", {
                    onChange: (e) => {
                      handleChange(e);
                    },
                    required: true
                  })}
                />
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3 row"
              controlId="exampleForm.ControlInput1"
            >
              <div className="col-md-5">
                <Form.Label className="btn btn-back p-1">Party Type</Form.Label>
              </div>
              <div className="col-md-7">
                <Form.Control
                  type="text"
                  placeholder="First Party/Second Party/Witness"
                  autoFocus
                  name="signerpartytype"
              {...register("signerpartytype", {
                onChange: (e) => {
                  handleChange(e);
                },
                required: true
              })}
                />
              </div>
            </Form.Group>
            <Form.Group className="row mb-3">
              <div className="col-12 text-center">
                {/* <Button className="btn btn-save mx-auto" onClick={handleClose}> */}
                <Button className="btn btn-save mx-auto" onClick={saveSigner}> 
                
                  Add Signer
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
      {/* modal tag details  */}
      <Modal
        show={showTag}
        onHide={handleCloseTag}
        centered
        className="stamp-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="btn btn-back border-0">
            Tag details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Form>
            <Form.Group
              className="mb-3 row"
              controlId="exampleForm.ControlInput1"
            >
              <div className="col-md-5">
                <Form.Label className="btn btn-back p-1">
                  Name of Document
                </Form.Label>
              </div>
              <div className="col-md-7">
                <Form.Control
                  type="text"
                  placeholder="Document Name"
                  autoFocus
                />
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3 row"
              controlId="exampleForm.ControlInput1"
            >
              <div className="col-md-5">
                <Form.Label className="btn btn-back p-1">
                  Document Type
                </Form.Label>
              </div>
              <div className="col-md-7">
                <Form.Control
                  type="text"
                  placeholder="Type of Doument"
                  autoFocus
                />
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3 row"
              controlId="exampleForm.ControlInput1"
            >
              <div className="col-md-5">
                <Form.Label className="btn btn-back p-1">Department</Form.Label>
              </div>
              <div className="col-md-7">
                <Form.Control
                  type="text"
                  placeholder="Document Department"
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="row mb-3">
              <div className="col-12 text-center">
                <Button
                  className="btn btn-save mx-auto"
                  onClick={handleCloseTag}
                >
                  Add Tag
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
      {/* modal Document Deadline */}
      <Modal
        show={showDeadline}
        onHide={handleCloseDeadline}
        centered
        className="stamp-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="btn btn-back border-0">
            Document Deadline
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Form>
            <Form.Group
              className="mb-3 row"
              controlId="exampleForm.ControlInput1"
            >
              <div className="col-md-5">
                <Form.Label className="btn btn-back p-1">Date</Form.Label>
              </div>
              <div className="col-md-7">
                <Form.Control
                  type="text"
                  placeholder="Signature Deadline Date"
                  autoFocus
                />
              </div>
            </Form.Group>
            <Form.Group className="row mb-3">
              <div className="col-12 text-center">
                <Button
                  className="btn btn-save mx-auto"
                  onClick={handleCloseDeadline}
                >
                  Add Deadline
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
      {/* modal signature  */}
      <Modal
        show={showSignature}
        onHide={handleCloseSignature}
        centered
        className="stamp-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="btn btn-back border-0">Signature</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <div>
            <div className="mb-3 row align-items-center">
              <div className="col-md-8">
                <div className="d-flex align-items-center justify-content-center bg-gray agreement-div fw-semibold fs-5 flex-wrap flex-column">
                  <span>Sign here </span>
                  <span> or</span>
                  <span> Upload</span>
                </div>
              </div>
              <div className="col-md-4">
                <Button className="btn btn-save mx-auto">Upload</Button>
              </div>
            </div>
            <Form.Group className="row mb-3 mt-4">
              <div className="col-12 text-center">
                <Button
                  className="btn btn-save mx-auto"
                  onClick={handleCloseSignature}
                >
                  Add Signature
                </Button>
              </div>
            </Form.Group>
          </div>
        </Modal.Body>
      </Modal>
      {/* modal Finalise and Send */}
      <Modal
        show={showFinalise}
        onHide={handleCloseFinalise}
        centered
        className="stamp-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="btn btn-back border-0">
            Finalise and Send
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Form>
            <Form.Group
              className="mb-3 row"
              controlId="exampleForm.ControlInput1"
            >
              <div className="col-md-5">
                <Form.Label className="btn btn-back p-1">
                  Signatory 1
                </Form.Label>
              </div>
              <div className="col-md-7">
                <Form.Control type="text" placeholder="Signatory 1" autoFocus />
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3 row"
              controlId="exampleForm.ControlInput1"
            >
              <div className="col-md-5">
                <Form.Label className="btn btn-back p-1">
                  Signatory 2
                </Form.Label>
              </div>
              <div className="col-md-7">
                <Form.Control type="text" placeholder="Signatory 2" autoFocus />
              </div>
            </Form.Group>
            <Form.Group className="row mb-3">
              <div className="col-12 text-center">
                <Button
                  className="btn btn-save mx-auto"
                  onClick={handleCloseFinalise}
                >
                  Send
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Dashboard;
