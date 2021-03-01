import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Navbar.css"

function NavBar(){
    return (
        <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home" style ={{color: "white"}}>Timothy Balascak-Huber</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/#" style ={{color: "white"}} className = "navLink"> Home </Link>
            <Link to="/portfolio" style ={{color: "white"}} className = "navLink">About</Link>
            <Link to="/portfolio" style ={{color: "white"}} className = "navLink">Portfolio</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
export default NavBar;