import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import './Navbars.css';
import {
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Home from '../../Home/Home';
import Info from '../Form/info';
import Signin from '../SignIn/SignIn';


class Navbars extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand className='title' href="#home">Unite</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to='/' className='homeButton'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/about' className='sign-in' >Add Your Event</Nav.Link>
                            <Nav.Link as={Link} to='/sign'className='sign-in'>Sign In</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Event?" className="mr-sm-2" />
                            <Button variant="dark">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            
                <div>
                    <Switch>
                        <Route exact path='/' component={Home}/>

                        <Route path='/about' component={Info}/>  

                        <Route path='/sign' component={Signin} />                       

                    </Switch>
                </div>
            </div>


        );
    }
}

export default Navbars;