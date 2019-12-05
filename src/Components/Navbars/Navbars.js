import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';
import './Navbars.css';

class Navbars extends Component {
    render() {
        return (
            <div>
                 <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home" className='homeButton'>Home</Nav.Link>
                            <Nav.Link href="#link">Sign Up</Nav.Link><div className='slash'>/</div><Nav.Link href="#link">Sign In</Nav.Link>           
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="dark">Search</Button>
                </Form>
                </Navbar.Collapse>
                </Navbar>    
            </div>
        );
    }
}

export default Navbars;