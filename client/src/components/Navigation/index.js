import React from "react";
import { Link } from "react-router-dom";

function Navigation (){
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Now We're Talking</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link className = "nav-item nav-link" to="/">Home</Link>
      <Link href="#link">Link</Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    )
}