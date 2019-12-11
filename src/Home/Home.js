import React, { Component } from 'react';
import './Home.css';
import {
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Info from '../Components/Form/info';
import { Dropdown, } from 'react-bootstrap';
import {useWindowSize} from 'react-dom';
import Confetti from 'react-confetti';




class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openEvent: true
        }
    }

    showEvent() {
        this.setState({ openEvent: true })
    }

   


    render() {

        return (
            <div>
                <div className='welcome'>
                        <Confetti spread={360} startVelocity={100} numberOfPieces={1000} duration={10000} elementCount={109} run={3} recycle={false}/>
                    <h1>Welcome to <span className='unite'>Unite</span>!</h1>
                </div>
                <div className='containerHome'>
                    <h3 className='eventBoardTitle'>Events Board</h3>
                    <div>
                        <Link as={Link} to='/about'><button className='createEventButton'>Create Event</button></Link>
                    </div>
                    <div className='eventBoardContainers col-lg-4'>
                        <ul>

                            {this.state.openEvent ? 
                            <div className='openEventContainer' onClick={() => this.showEvent()}>
                            <li>
                                <h1>Anime Party</h1>
                                <h3>12 pokemon lane</h3>
                                <h3>kentucky</h3>
                                <Dropdown>
                                    <Dropdown.Toggle className="dropDownButton" variant="primary" id="dropdown-basic">
                                        Event Details
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">vdvjnxv,dxbnv,dnv,cdnvjkcdnlvfdnlvjfxclvbnfdkjbvkfdjvfndfknvdanvkdnlavn</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            </div>
                            : null }
                             {this.state.openEvent ? 
                            <div className='openEventContainer' onClick={() => this.showEvent()}>
                            <li>
                                <h1>Anime Party</h1>
                                <h3>12 pokemon lane</h3>
                                <h3>kentucky</h3>
                                <Dropdown>
                                    <Dropdown.Toggle className="dropDownButton" variant="primary" id="dropdown-basic">
                                        Event Details
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">vdvjnxv,dxbnv,dnv,cdnvjkcdnlvfdnlvjfxclvbnfdkjbvkfdjvfndfknvdanvkdnlavn</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            </div>
                            : null }
                             {this.state.openEvent ? 
                            <div className='openEventContainer' onClick={() => this.showEvent()}>
                            <li>
                                <h1>Anime Party</h1>
                                <h3>12 pokemon lane</h3>
                                <h3>kentucky</h3>
                                <Dropdown>
                                    <Dropdown.Toggle className="dropDownButton" variant="primary" id="dropdown-basic">
                                        Event Details
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">vdvjnxv,dxbnv,dnv,cdnvjkcdnlvfdnlvjfxclvbnfdkjbvkfdjvfndfknvdanvkdnlavn</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            </div>
                            : null }
                             {this.state.openEvent ? 
                            <div className='openEventContainer' onClick={() => this.showEvent()}>
                            <li>
                                <h1>Anime Party</h1>
                                <h3>12 pokemon lane</h3>
                                <h3>kentucky</h3>
                                <Dropdown>
                                    <Dropdown.Toggle className="dropDownButton" variant="primary" id="dropdown-basic">
                                        Event Details
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">vdvjnxv,dxbnv,dnv,cdnvjkcdnlvfdnlvjfxclvbnfdkjbvkfdjvfndfknvdanvkdnlavn</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            </div>
                            : null }
                             {this.state.openEvent ? 
                            <div className='openEventContainer' onClick={() => this.showEvent()}>
                            <li>
                                <h1>Anime Party</h1>
                                <h3>12 pokemon lane</h3>
                                <h3>kentucky</h3>
                                <Dropdown>
                                    <Dropdown.Toggle className="dropDownButton" variant="primary" id="dropdown-basic">
                                        Event Details
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">vdvjnxv,dxbnv,dnv,cdnvjkcdnlvfdnlvjfxclvbnfdkjbvkfdjvfndfknvdanvkdnlavn</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            </div>
                            : null }





                        </ul>


                    </div>
                </div>
                <div>
                    <Switch>
                        <Route exact path='/about' component={Info} />
                    </Switch>
                </div>
            </div >


        );
    }
}

export default Home;