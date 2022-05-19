import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../Hook/useFirebase';
import icn5 from "../Images/icn5.png";
import "./Navbars.css";

const Navbars = () => {
  const {user,logout} = useFirebase();
    return (
        <>
        
          <Navbar className="nav-bar shadow sticky-top  " expand="lg">
          <Container>
            
            <Navbar.Brand className="animate__animated animate__backInLeft"><img className='p-3' src={icn5} alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav " className='nav-toggle' />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto d-flex align-items-center animate__animated animate__backInRight">
                <Nav.Link as={NavLink} to="/" className="nav-link" >
                  Home
                </Nav.Link>
                <Nav.Link className="nav-link" as={NavLink} to="/ticket" >
                  Tour List
                </Nav.Link>
                <Nav.Link className="nav-link" as={NavLink} to="/about ">
                  About US
                </Nav.Link>
               
                <Nav.Link className="nav-link" as={NavLink} to="/contact">
                  Contact US
                </Nav.Link>
                
                {/* <Nav.Link className="nav-link" as={NavLink} to="/signup">
                <i class="fa-solid fa-user text-light mx-2"></i> Sign Up
                </Nav.Link> */}

                {!user?.email && (
                <Nav.Link
                as={NavLink}
                className="nav-link animate__animated animate__fadeInDownBig text-light"
                to="/signup  "
              >
              <i class="fa-solid fa-user text-light mx-2"></i> Sign Up
              </Nav.Link>
              )}
              

              {user?.email && (
                
                 <Nav.Link
                 onClick={logout}
                
                 className="nav-link animate__animated animate__fadeInDownBig text-light"
                 to="/signup  "
                 as={NavLink}
               >
               LogOut<span>
                {user?.photoURL ? (
                  <img className="user-img" src={user.photoURL} alt="" />
                ) : (
                  <small className="text-light ms-3">{user?.displayName}</small>
                )}
              </span>
               </Nav.Link>
              )}


              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
    );
};

export default Navbars;