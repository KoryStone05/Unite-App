import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './SignIn.css';
import {
    Switch,
    Link,
  } from 'react-router-dom';


class Signin extends Component {
    closeEventCard() {
        this.setState({ formShow: false })
      }
    render() {
        return (

            <div className='signInCard'>
                <Form >
                    <Link as={Link} to='/'>
                        <Button className='closeEventCard' onClick={() => this.closeEventCard()}>X</Button></Link>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Signin;