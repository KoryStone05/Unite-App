import React, { Component } from 'react';
import './Home.css';
import {
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Info from '../Components/Form/info';
import { Dropdown, } from 'react-bootstrap';




class Home extends Component {


    render() {
        return (
            <div>
                <div className='welcome'>
                    <html>
                        <head>
                            <link href="https://fonts.googleapis.com/css?family=Lilita+One&display=swap" rel="stylesheet" />
                        </head>
                    </html>
                    <h1>Welcome to <span className='unite'>Unite</span>!</h1>
                </div>
                <div className='containerHome'>
                    <h3 className='eventBoardTitle'>Events Board</h3>
                    <div>
                        <Link as={Link} to='/about'><button className='createEventButton'>Create Event</button></Link>
                    </div>
                    <div className='eventBoardContainers col-lg-4'>
                        <ul>
                            <li>
                                <h1>Anime Party</h1>
                                <h3>12 pokemon lane</h3>
                                <h3>kentucky</h3>
                                <Dropdown>
                                    <Dropdown.Toggle className="dropDownButton" variant="primary" id="dropdown-basic">
                                        Dropdown Button
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">vdvjnxv,dxbnv,dnv,cdnvjkcdnlvfdnlvjfxclvbnfdkjbvkfdjvfndfknvdanvkdnlavn</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li>

                                <h1>Kory Crib</h1>
                                <h3>Coffie lane</h3>
                                <h3>kentucky</h3>
                                <Dropdown>
                                    <Dropdown.Toggle className="dropDownButton" variant="success" id="dropdown-basic">
                                        Dropdown Button
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">vdvjnxv,dxbnv,dnv,cdnvjkcdnlvfdnlvjfxclvbnfdkjbvkfdjvfndfknvdanvkdnlavn</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li>

                                <h1>Kory Crib</h1>
                                <h3>Coffie lane</h3>
                                <h3>kentucky</h3>
                                <Dropdown>
                                    <Dropdown.Toggle className="dropDownButton" variant="success" id="dropdown-basic">
                                        Dropdown Button
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">vdvjnxv,dxbnv,dnv,cdnvjkcdnlvfdnlvjfxclvbnfdkjbvkfdjvfndfknvdanvkdnlavn</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li>

                                <h1>Kory Crib</h1>
                                <h3>Coffie lane</h3>
                                <h3>kentucky</h3>
                                <Dropdown>
                                    <Dropdown.Toggle className="dropDownButton" variant="success" id="dropdown-basic">
                                        Dropdown Button
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">vdvjnxv,dxbnv,dnv,cdnvjkcdnlvfdnlvjfxclvbnfdkjbvkfdjvfndfknvdanvkdnlavn</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>




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