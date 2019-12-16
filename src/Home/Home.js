import React, { Component } from 'react';
import './Home.css';
import {
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Info from '../Components/Form/info';
import { Dropdown } from 'react-bootstrap';
import { Form, Button, option, Col, ToggleButton } from 'react-bootstrap';




class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openEvent: true,
            showForm: false,
            name: '',
            address: "",
            city: "",
            state: "",
            zipCode: "",
            eventDetails: "",
            events: [
                // {
                //     eventName: "",
                //     address: "",
                //     city: "",
                //     state: "",
                //     zip: ""
                // }
            ]
        }
    }

    
    // addNewEvent(eventName, address, state) {
    //     this.setState({ events: [this.state.events, { eventName, address, state }]});
    // }

    showEvent() {
        this.setState({ openEvent: true })
    }

    renderEvents() {

        const { events } = this.state;

        if (events.length > 0) {
            return events.map((event) => (
                <li>
                    <h1 className='eventName'>{event.name}</h1>
                    <h3 className='eventAddress'>{event.address}</h3>
                    <h3 className='eventCity'>{event.city}</h3>
                    <h3 className='eventState'>{event.state}</h3>
                    <h3 className='eventZip'>{event.zip}</h3>
                    <Dropdown>
                        <Dropdown.Toggle className="dropDownbottom" variant="primary" id="dropdown-basic">
                            Event Details
                        </Dropdown.Toggle>
    
                        <Dropdown.Menu>
                            <Dropdown.Item className='eventDetails' href="#/action-1">{this.state.eventDetails}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            ));
        }
    }

    addToEvents() {

        const { name, address, city, state, zipCode, events } = this.state;
        const eventObject = {
            name: name,
            address: address,
            city: city,
            state: state,
            zipCode: zipCode
        };
        const newEvents = events;

        newEvents.push(eventObject);

        this.setState({ events: newEvents });
    }

    

    renderForm() {

        console.log(this.state);
        return (
            <div>
                {this.state.showForm ?
                    <div className="card">
                        <Form>
                        <Button className='closeEventCard' onClick={() => this.setState({showForm: false})}>X</Button>

                        <Form.Group controlId="eventName">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control  value={this.state.name} onChange={event => this.setState({ name: event.target.value})}/>
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address</Form.Label>
                            <Form.Control  value={this.state.address} onChange={event => this.setState({ address: event.target.value})}/>
                        </Form.Group>


                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control  value={this.state.city} onChange={event => this.setState({ city: event.target.value})}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" value={this.state.state} onChange={event => this.setState({ state: event.target.value})}>
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
                            <Form.Control  value={this.state.zipCode} onChange={event => this.setState({ zipCode: event.target.value})}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                        <Form.Group as={Col} controlId='formGridEventDetails'>
                        <Form.Label>Event Details</Form.Label>
                            <Form.Control value={this.state.eventDetails} onChange={event => this.setState({ eventDetails: event.target.value })}/>
                        </Form.Group>
                        </Form.Row>

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
                            <Button 
                                className='submitButton' 
                                variant="primary" 
                                onClick={() => this.addToEvents()}
                            >
                            Submit
                            </Button>
                        </div>
                        </Form>
                    </div>
                : null }
            </div>
        )
    }



    render() {

        return (
            <div>
                <div className='welcome'>
                    {/* <Confetti spread={360} startVelocity={100} numberOfPieces={1000} duration={10000} elementCount={109} run={3} recycle={false} /> */}
                    <h1>Welcome to <span className='unite'>Unite</span>!</h1>
                </div>
                <div className='containerHome'>
                    <h3 className='eventBoardTitle'>Events Board</h3>
                    <div>
                        {/* <Link as={Link} to={{
                            pathname: '/about',
                            infoProps: {
                                handleSubmit: this.addNewEvent
                            }
                        }}>
                        </Link> */}
                        {this.renderForm()}
                        <button className='createEventButton' onClick={() => this.setState({showForm: true})}>Create Event</button>
                    </div>
                    <div className='eventBoardContainers col-lg-4'>
                        <ul>  
                            <div className='openEventContainer'>
                                {this.renderEvents()}
                            </div>
                        </ul>
                    </div>
                </div>
                <div>
                    {/* <Switch>
                        <Route exact path='/about' component={Info} />
                    </Switch> */}
                </div>
            </div >


        );
    }
}

export default Home;