import React, { Component } from 'react';
import { Form, Button, option, Col, ToggleButton } from 'react-bootstrap';
import './info.css';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';



class Info extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formShow: true,
    }
<<<<<<< HEAD
  }

  closeEventCard() {
    this.setState({ formShow: false })
  }

  render() {
    return (
      <div>


        {this.state.formShow ?
          <div className="card">
            <Form>
              <Button className='closeEventCard' onClick={() => this.closeEventCard()}>X</Button>

              <Form.Group controlId="eventName">
                <Form.Label>Event Name</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Address</Form.Label>
                <Form.Control />
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
                <input className='eventDetailsBox' type='text' placeholder='Enter event details' />
              </div>

              <div className="radioPublic">
                <label>
                  <input type="radio" value="option1" checked={true} />
                  Public
                </label>
              </div>

              <div className="radioPrivate">
                <label>
                  <input type="radio" value="option2" />
                  Private
                  </label>
              </div>
              <div>
                <Form.Group className="privatePassword">
                  <input type="password" placeholder="*Password Required*" onInput={this.validate} />
                </Form.Group>
              </div>
              <div>
                <Button className='submitButton' variant="primary" type="submit">
                  Submit
                  </Button>
              </div>
            </Form>
=======

    closeEventCard(event) {
      event.preventDefault();
      this.setState({ closeEventCard: false });
    }
    
  

  
    render() {
        return(
        <div className="card">
  <Form>

    {/* <Button>{event.props.closeEventCard}</Button> */}

  <Form.Group controlId="eventName">
    <Form.Label>Event Name</Form.Label>
    <Form.Control/>
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address</Form.Label>
    <Form.Control />
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
  <input className='eventDetailsBox' type='text' placeholder='Enter event details' />
</div>

        <div className="radioPublic">
          <label>
            <input type="radio" value="option1" checked={true}/>
            Public
          </label>
        </div>

        <div className="radioPrivate">
          <label>
            <input type="radio" value="option2"/>
            Private
            </label>
        </div>
        <div>
        <Form.Group className="privatePassword">
          <input type="password" placeholder="*Password Required*" onInput={this.validate}/>
          </Form.Group>
        </div>
<div>
  <Button className='submitButton' variant="primary" type="submit">
    Submit
  </Button>
  </div>
</Form>

>>>>>>> ab737ae6107a9a79b985c1cdabd416e765d0e1eb
            <div>
              <Route path="/info" component={Info} />
            </div>
          </div>
          : null }
      </div>


    );
  }
}

export default Info;