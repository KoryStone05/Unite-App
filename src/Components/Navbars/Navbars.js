import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import './Navbars.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link,
} from 'react-router-dom';
import Home from '../../Home/Home';
import Info from '../Form/info';


class Navbars extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand className='title' href="#home">Unite</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="ZIP Code" className="mr-sm-2" />
                            <Button variant="dark">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <div>
                    <Router>
                        <Link className='homeButton' to='/'>Home</Link>
                        <Link className='sign-in' to='/about'>Sign Up</Link>
                        <Link className='sign-in'>Sign In</Link>
                        <Switch>
                            <Route exact path='/'>
                                <Home />
                            </Route>

                            <Route path='/about'>
                                <Info />
                            </Route>

                        </Switch>
                    </Router>
                </div>
            </div>


        );
    }
}

export default Navbars;