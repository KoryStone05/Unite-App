import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './SignUp.css';
import {
    Switch,
    Link,
} from 'react-router-dom';


class SignUp extends Component {
    closeEventCard() {
        this.setState({ formShow: false })
    }
    render() {
        return (
            <div className='signUpCard'>
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
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        <Form.Text className="text-muted">
                            Password must be at least six characters.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="confirmBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
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

export default SignUp;