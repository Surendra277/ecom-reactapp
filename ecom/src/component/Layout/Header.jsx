import React from 'react'
import './Headers.css';
import{ Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
   <div>
       
    <Navbar expand="lg" className="bg-body-tertiary" >
      <div style={{backgroundColor:"beige",display:"flex",width:"100%",padding:"5px 30px"}}>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link to='/'  style={{color:"black",padding:"10px", textDecoration:"none",fontWeight:"bold"}}>Home</Link>
            <Link to='/about'style={{color:"black",padding:"10px" ,textDecoration:"none",fontWeight:"bold"}} >About</Link>
            <Link to='/login' style={{color:"black",padding:"10px" ,textDecoration:"none",fontWeight:"bold"}}>Login</Link>
           
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  
   </div>
  )
}

export default Header