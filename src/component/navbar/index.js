import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../authContext";

const  NavBarHeaderView=()=>{
  const { isAuthenticated, logout } = useAuth();
  const navigate=useNavigate();
  const [loginName,setLoginName]=useState()

  const getLogout=()=>{
    logout("false");
    navigate("/login");
    localStorage.removeItem("LoginData")
  }
  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem("LoginData"));
    if(data === null){
      setLoginName(null);
    }
    else{
      setLoginName(data);
    }

  },[])

  return (
    <div style={{"height":"10%"}} >
    <Navbar expand="lg" fixed="top" bg="dark" data-bs-theme="dark">
      <Container fluid >
        <Navbar.Brand href="#" className='text-uppercase'>Tailortrix</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '80px' }}
            navbarScroll
          >
            <div className='d-flex '>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
            </div>
          </Nav>
          {loginName &&
          <div className='mt-2'>
            <h5 className='text-white mx-2'>{loginName.name}</h5>
          </div>
          }
          <div>
          <button className='profile_info text-center' onClick={getLogout}>
            S 
          </button>
          <p class="hide">Logout</p>
          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBarHeaderView;