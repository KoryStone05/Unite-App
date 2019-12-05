import React, {Component} from 'react';
import {Form, Button, option, Col} from 'react-bootstrap';
import './info.css'

class Info extends Component {


// function getSignInForm(event) {
//   var signInForm = document.getElementById('card');
  
// };

    render() {
        return(
        <div className="card">
            <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option selected disabled value='0'>Choose...</option>
        <option>Alabama</option>
        <option>Alaska</option>
        <option>Arizona</option>
        <option>Arkansas</option>
        <option>California</option>
        <option>Colorado</option>
        <option>Connecticut</option>
        <option>Delaware</option>
        <option>Florida</option>
        <option>Georgia</option>   
        <option>Hawaii</option>
        <option>Idaho</option>
        <option>Illinois</option>
        <option>Indiana</option>
        <option>Iowa</option>
        <option>Kansas</option>
        <option>Kentucky</option>
        <option>Louisiana</option>
        <option>Maine</option>
        <option>Maryland</option>
        <option>Massachusetts</option>
        <option>Michigan</option>
        <option>Minnesota</option>
        <option>Mississippi</option>
        <option>Missouri</option>
        <option>Montana</option>
        <option>Nebraska</option>
        <option>Nevada</option>
        <option>New Hampshire</option>
        <option>New Jersey</option>
        <option>New Mexico</option>
        <option>New York</option>
        <option>North Carolina</option>
        <option>North Dakota</option>
        <option>Ohio</option>
        <option>Oklahoma</option>
        <option>Oregon</option>
        <option>Pennsylvania</option>
        <option>Rhode Island</option>
        <option>South Carolina</option>
        <option>South Dakota</option>
        <option>Tennessee</option>
        <option>Texas</option>
        <option>Utah</option>
        <option>Vermont</option>
        <option>Virginia</option>
        <option>Washington</option>
        <option>West Virginia</option>
        <option>Wisconson</option>
        <option>Wyoming</option> 
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type='checkbox' label="Remember Me" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Sign Up
  </Button>
</Form>
       </div>
        );
    }
}

export default Info;