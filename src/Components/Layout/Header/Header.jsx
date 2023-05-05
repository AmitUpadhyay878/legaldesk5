import React, { useState } from "react";
import "../../../assets/scss/header.scss";
import {
  Container,
  Nav,
  Navbar,
  ListGroup,
  Dropdown
} from "react-bootstrap";
import logo from "../../../assets/images/logo.png";
import settingsIcon from "../../../assets/images/icons/settings.png";
import userIcon from "../../../assets/images/icons/user-profile.png";
import logoutIcon from "../../../assets/images/icons/logout.png";
import notificationBellIcon from "../../../assets/images/icons/notification-bell.png";
import { Link, Navigate } from "react-router-dom";
import { docList, login } from "../../../config/routeConstances";

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const logIn = () => {
  setisLoggedIn(true);
  };
  const logOut = () => {
  setisLoggedIn(false);
  if (!isLoggedIn) {
    return <Navigate to={login} replace />;
    }
  };
  return (
    <header className="header">
      <Navbar expand="lg" className="p-0">
        <Container fluid>
          <Navbar.Brand href="./home">
            <img src={logo} alt="Logo" className="img-fluid"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <ListGroup horizontal className="align-items-center">
                {/* before login */}
                { !isLoggedIn ? (
                <>
                <ListGroup.Item className="border-0 bg-transparent">
                  <Dropdown className="notification-dropdown">
                    <Dropdown.Toggle id="notification" className="border-0 bg-transparent notification p-0">
                    <img
                    src={notificationBellIcon}
                    alt=""
                    className="img-fluid"
                  ></img>
                  <span className="notification-number">1</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="notification-list p-0">
                      <Dropdown.Item href="#">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil!
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil!
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  
                </ListGroup.Item>
                 {/* before login */}
                <ListGroup.Item className="border-0 bg-transparent">
                  <img src={settingsIcon} alt="" className="img-fluid"></img>
                </ListGroup.Item>
                </>
                ) :
                (
                <>
                 {/* after login */}
                 <ListGroup.Item className="border-0 bg-transparent nav-link">
                Print and Deliver
                </ListGroup.Item>
                {/* after login */}
                <ListGroup.Item as={Link} to={docList} className="border-0 bg-transparent nav-link">
                My Documents
                </ListGroup.Item>
                {/* before and after login */}
                <ListGroup.Item className="border-0 bg-transparent">
                <Dropdown className="user-profile">
                    <Dropdown.Toggle id="flag-dropdown" className="border-0 bg-transparent p-0">
                    <div className="d-flex align-items-center">
                    <div className="user-logo">
                      <img src="" alt="" className="img-fluid"></img>
                    </div>
                    <div className="user-name d-flex align-items-start flex-column ms-2">
                      <strong>Rahuk K.</strong>
                      <small>rahuldocs@mail.com</small>
                    </div>
                  </div>
                    </Dropdown.Toggle>
                    {/* after login */}
                    <Dropdown.Menu>
                      <Dropdown.Item href="#" className="nav-link">
                      <img src={userIcon} alt="" className="img-fluid me-2"></img>
                      My Profile
                      </Dropdown.Item>
                      <Dropdown.Item href="#" className="nav-link d-flex align-items-center">
                      <img src={logoutIcon} alt="" className="img-fluid me-2"></img>
                      <button className="btn p-0 border-0" onClick={()=>logOut()}>Logout</button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  
                </ListGroup.Item>
                </>)}
               
                {/* before login */}
                {! !isLoggedIn && 
                (
                <ListGroup.Item className="border-0 bg-transparent">
                <Dropdown className="flag_dropdown">
                    <Dropdown.Toggle id="flag-dropdown" className="flag-dropdown border-0">
                    En
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">En</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ListGroup.Item>
                )
                }
              </ListGroup>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
