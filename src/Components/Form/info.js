import React, { Component } from 'react';
import { Form, Button, option, Col, ToggleButton } from 'react-bootstrap';
import './info.css';
import Home from '../../Home/Home';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Switch,
  Link,
} from 'react-router-dom';




<<<<<<< HEAD
class Info extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formShow: true,
      eventNameInput: '',
      addressInput: '',
      cityInput: '',
      stateInput: '',
      zipInput: '',
      eventDetailsInput: '',
    }

    
  }
=======
// class Info extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       formShow: true,
//       eventNameInput: '',
//       addressInput: '',
//       cityInput: '',
//       stateInput: '',
//       zipInput: '',
//       eventDetailsInput: '',
//     }

//     // this.handleSubmit = this.handleSubmit.bind(this);
//   }
>>>>>>> ab6f03b830ec3601dd1eefc849f12433604e736b

    

<<<<<<< HEAD
//   // handleSubmit(event) {
//   // event.preventDefault();
//   // }
=======
  // handleSubmit(event) {
  // event.preventDefault();
  // }
>>>>>>> 6e19706ee6f1feb9cae9fdaf2f04d687767b42af


//   closeEventCard() {
//     this.setState({ formShow: false })
//   }
  

  


<<<<<<< HEAD
//     closeEventCard() {
//       this.setState({ formShow: false })
//     }

   

//     render() {

//       console.log(this.props.location);

//       return (
      
//         <div>
//           {this.state.formShow ?
//         <div className="card">
//           <Form>

//             <Link as={Link} to='/'>
//             <Button className='closeEventCard' onClick={() => this.closeEventCard()}>X</Button></Link>

//             <Form.Group controlId="eventName">
//               <Form.Label {...this.state.eventName}>Event Name</Form.Label>
//               <Form.Control />
//             </Form.Group>

//             <Form.Group controlId="formPartyTime">
//               <Form.Label>Party Time</Form.Label>
//               <Form.Control />
//             </Form.Group>


//             <Form.Group controlId="formGridAddress2">
//               <Form.Label {...this.state.address}>Address</Form.Label>
//               <Form.Control />
//             </Form.Group>


//             <Form.Row>
//               <Form.Group as={Col} controlId="formGridCity">
//                 <Form.Label {...this.state.city}>City</Form.Label>
//                 <Form.Control />
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridState">
//                 <Form.Label {...this.state.state}>State</Form.Label>
//                 <Form.Control as="select">
//                   <option selected disabled value='0'>Choose...</option>
//                   <option>Alabama</option>
//                   <option>Alaska</option>
//                   <option>Arizona</option>
//                   <option>Arkansas</option>
//                   <option>California</option>
//                   <option>Colorado</option>
//                   <option>Connecticut</option>
//                   <option>Delaware</option>
//                   <option>Florida</option>
//                   <option>Georgia</option>
//                   <option>Hawaii</option>
//                   <option>Idaho</option>
//                   <option>Illinois</option>
//                   <option>Indiana</option>
//                   <option>Iowa</option>
//                   <option>Kansas</option>
//                   <option>Kentucky</option>
//                   <option>Louisiana</option>
//                   <option>Maine</option>
//                   <option>Maryland</option>
//                   <option>Massachusetts</option>
//                   <option>Michigan</option>
//                   <option>Minnesota</option>
//                   <option>Mississippi</option>
//                   <option>Missouri</option>
//                   <option>Montana</option>
//                   <option>Nebraska</option>
//                   <option>Nevada</option>
//                   <option>New Hampshire</option>
//                   <option>New Jersey</option>
//                   <option>New Mexico</option>
//                   <option>New York</option>
//                   <option>North Carolina</option>
//                   <option>North Dakota</option>
//                   <option>Ohio</option>
//                   <option>Oklahoma</option>
//                   <option>Oregon</option>
//                   <option>Pennsylvania</option>
//                   <option>Rhode Island</option>
//                   <option>South Carolina</option>
//                   <option>South Dakota</option>
//                   <option>Tennessee</option>
//                   <option>Texas</option>
//                   <option>Utah</option>
//                   <option>Vermont</option>
//                   <option>Virginia</option>
//                   <option>Washington</option>
//                   <option>West Virginia</option>
//                   <option>Wisconson</option>
//                   <option>Wyoming</option>
//                 </Form.Control>
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridZip">
//                 <Form.Label {...this.state.zip}>Zip</Form.Label>
//                 <Form.Control />
//               </Form.Group>
//             </Form.Row>

//             <div>
//               <input className='eventDetailsBox' type='text' placeholder='Enter event details' />
//             </div>

//             <div className="radioPublic">
//               <label>
//                 <input type="radio" value="option1" checked={true}  />
//                 Public
//           </label>
//             </div>

//             <div className="radioPrivate">
//               <label>
//                 <input type="radio" value="option2" />
//                 Private
//             </label>
//             </div>
//             <div>
//               <Form.Group className="privatePassword">
//                 <input type="password" placeholder="*Password Required*" onInput={this.validate} />
//               </Form.Group>
//             </div>
//             <div>
//               <Button className='submitButton' variant="primary" type="submit" onSubmit={this.props.location.infoProps.handleSubmit}>
//                 Submit
//               </Button>
//             <div className='button'>
//               <Link as={Link} to='/'><Button className='submitButton' variant="primary" type="submit">
//                 Submit
//               </Button></Link>
//             </div>
//           </Form>

//           <div>
//             <Route path="/info" component={Info} />
//           </div>
//         </div>
//           : null }

//           <Switch>
//             <Route exact path='/' component={Home} />
//           </Switch>
//       </div>
      


//     );
//   }
// }

// export default Info;
=======

   

    render() {

      console.log(this.props.location);

      return (
        <div>
          {this.state.formShow ?
        <div className="card">
          <Form>

            <Link as={Link} to='/'>
            <Button className='closeEventCard' onClick={() => this.closeEventCard()}>X</Button></Link>

            <Form.Group controlId="eventName">
              <Form.Label {...this.state.eventName}>Event Name</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group controlId="formPartyTime">
              <Form.Label>Party Time</Form.Label>
              <Form.Control />
            </Form.Group>


            <Form.Group controlId="formGridAddress2">
              <Form.Label {...this.state.address}>Address</Form.Label>
              <Form.Control />
            </Form.Group>


            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label {...this.state.city}>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label {...this.state.state}>State</Form.Label>
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
                <Form.Label {...this.state.zip}>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <div>
              <input className='eventDetailsBox' type='text' placeholder='Enter event details' />
            </div>

            <div className="radioPublic">
              <label>
                <input type="radio" value="option1" checked={true}  />
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
              {/* <Button className='submitButton' variant="primary" type="submit" onSubmit={this.props.location.infoProps.handleSubmit}>
                Submit
              </Button> */}
            </div>
          </Form>

          <div>
            <Route path="/info" component={Info} />
          </div>
        </div>
          : null }

          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
      </div>


    );
  }
}

export default Info;
>>>>>>> 6e19706ee6f1feb9cae9fdaf2f04d687767b42af
