import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import {useForm} from 'react-hook-form'

const Popup = ({perpose,show,setShow}) => {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const handleClose = () => setShow(false);

      switch(perpose){
        case "Add_signer":
          return (
            <Modal show={show} onHide={handleClose} centered className="stamp-modal">
            <Modal.Header closeButton>
              <Modal.Title className="btn btn-back border-0">
                Signer Details
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
              <Form onSubmit={handleSubmit(onSubmit)}>
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
                    <Form.Control type="tel" placeholder="signerphone" 
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
                    <Button className="btn btn-save mx-auto" onClick={handleClose}>
                      Add Signer
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            </Modal.Body>
          </Modal>
          )
        case "Add_Tages":
            return (
              <Modal
        show={show}
        onHide={handleClose}
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
          )    
        case "Add_DeadLine":
                return(
                  <Modal
                  show={show}
                  onHide={handleClose}
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
          )
        case "Add_Signature":
            return(
              <Modal
        show={show}
        onHide={handleClose}
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
                  onClick={handleClose}
                >
                  Add Signature
                </Button>
              </div>
            </Form.Group>
          </div>
        </Modal.Body>
      </Modal>
          )
        case "Add_Finalise_and_Send" :
        return(
          <Modal
          show={show}
          onHide={handleClose}
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
                    onClick={handleClose}
                  >
                    Send
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
        )        
        default: return (
                  <Modal show={show} onHide={handleClose} centered className="stamp-modal">
                  <Modal.Header closeButton>
                    <Modal.Title className="btn btn-back border-0">
                     Title
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="show-grid">
                    Body
                  </Modal.Body>
                </Modal>
          )
      }


}

export default Popup