import React, { useEffect, useState } from "react";
import "../../assets/scss/DocList.scss";
import { Container, Nav, Button, Table, Col,Row } from "react-bootstrap";
import msgIcon from "../../assets/images/icons/msg.png";
import editIcon from "../../assets/images/icons/edit.png";
import deleteIcon from "../../assets/images/icons/delete.png";
import uploadIcon from "../../assets/images/icons/upload.png";

import { home } from "../../config/routeConstances";
import { Link } from "react-router-dom";

const DocList = () => {
  const [docs, setDocs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:6060/Docs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDocs(data);
      });
     
  }, []);

  return (
    <Container>
      <div className="document-content my-3">
      {docs?.length >0 ?
        <>
        <div className="d-flex justify-content-between flex-column flex-md-row border-bottom pb-2">
          <h3 className="title">All Documents</h3>
          <Link to={home}>
            <Button variant="success" className="document-btn">
              + New Document
            </Button>
          </Link>
        </div>
           {/* document table */}
           <div className="document-table">
          <Table hover className="border-0">
            <thead>
              <tr>
                <th className="border-0">Doc ID</th>
                <th className="border-0">Document</th>
                <th className="border-0">Status</th>
                <th className="text-end border-0">Action</th>
              </tr>
            </thead>
            <tbody>
              { docs?.map((doc, i) => (
                <tr key={i}>
                  <td className="border-0"></td>
                  <td className="border-0">{doc.DocType}</td>
                  <td className="border-0">
                    <span>{doc.status}</span>
                  </td>
                  <td className="border-0">
                    <div className="action">
                      <Nav>
                        <Nav.Item>
                          <Nav.Link href="#">
                            <img src={msgIcon} className="img-fluid" alt="" />
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link href="#">
                            <img src={editIcon} className="img-fluid" alt="" />
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link href="#">
                            <img
                              src={deleteIcon}
                              className="img-fluid"
                              alt=""
                            />
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link href="#">
                            <img
                              src={uploadIcon}
                              className="img-fluid"
                              alt=""
                            />
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </td>
                </tr>
              )) }
            </tbody>
          </Table>
        </div>
        </>  
        
        :

        <>
          {/* create document and upload print */}
          <div className="upload-content my-5">
          <Row className="justify-content-center align-items-center">
            <Col sm={12} md={10} lg={10}>
              <div className="upload-bg">
              <Link to={home}>
                <Button className="btn btn-upload btn-save">
                  Create document from templates
                </Button></Link>
                <Button className="btn btn-upload btn-save">
                  Upload Print and Deliver
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        </>
        }
      </div>
    </Container>
  );
};

export default DocList;
