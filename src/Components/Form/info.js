import React, {Component} from 'react';
import {Form, Button, option, Col} from 'react-bootstrap';
import './info.css';
import {Route} from 'react-router-dom';



class Info extends Component {

//   constructor() {
//     super();
//     this.state = {
//         open: false
//     }
//     this.handleDropDown = this.handleDropDown.bind(this);
// } 
// handleDropDown() {
//     this.setState({ open: !this.state.open }) 
// }

    render() {
        return(
        <div className="card">
  <Form>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Event Name</Form.Label>
    <Form.Control placeholder="party" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Street location" />
  </Form.Group>


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

<div>
  <textarea className='eventDetails' placeholder='Enter event details'></textarea>
</div>

  <Button className='submitButton' variant="primary" type="submit">
    Submit
  </Button>
</Form>

            <div>
                <Route  path="/info" component={Info}  />
             </div>
       </div>


        );
    }
}

export default Info;