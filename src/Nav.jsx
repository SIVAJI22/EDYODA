import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import { Login } from './login';
export const Navs=()=>{




  return (

    <Fragment>
      
<div className='container-fluid'>
{/* 
<div  id=' navbar'className='container'>
    <h1>h1</h1>
</div> */}
    <Navbar id='navbar'  collapseOnSelect expand="lg" className="bg">
      <Container   >
        <Navbar.Brand  className='me-2' id='navbar' href="#home">EDYODA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>  */}

{/* 
             <NavDropdown 


               title="Courses"   className='course' id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> 
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> 
            </NavDropdown> */}


<li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle text-light me-2  " href="#" role="button" 
          data-bs-toggle="dropdown" aria-expanded="false">
    Courses
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

            <Nav.Link id='navbar' className='me-2'  href="#deets">Programs</Nav.Link>
            <Nav.Link id='navbar'   className='me-2' href="#deets">Certifications</Nav.Link>
          </Nav>
          <Nav>
          <link rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

{/* <!-- The form --> */}
<form class="example" action="action_page.php">
  {/* <input type="text" placeholder="Search.." name="search"/> */}
  <button id='search' type="submit"><i class="fa fa-search"></i></button>
</form>
          </Nav>
          <Nav>

        <Link to="/login">  <button  id='login'   className='border-0  me-4 bg-0'>Log In</button></Link>
            <button  id='navbar'  type='button' className='btn btn-primary' >JOIN NOW </button> 
         {/* <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>  */}
           </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </div>


    </Fragment>
 
  );
}

export default Navs;