import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';
import './Navbars.css';

class Navbars extends Component {
    render() {
        return (
            <div>
                 <Navbar bg="light" expand="lg">
                    <Navbar.Brand className='title' href="#home">Unite</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home" className='homeButton'>Home</Nav.Link>
                            <Nav.Link className='sign-up' href="#link">Sign Up</Nav.Link><Nav.Link className='sign-in' href="#link">Sign In</Nav.Link>           
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="ZIP Code" className="mr-sm-2" />
                    <Button variant="dark">Search</Button>
                </Form>
                </Navbar.Collapse>
                </Navbar>    
            </div>
        );
    }
}

export default Navbars;