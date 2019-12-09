import React, { Component } from 'react';
import './Home.css';
import $ from 'jquery';
import {
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Info from '../Components/Form/info';




class Home extends Component {
    

    render() {
        return(
        <div>
           <div className='welcome'>
                <h1>Welcome to <span className='unite'>Unite</span>!</h1>
            </div>
            <div className='containerHome'>
                <h3 className='eventBoardTitle'>Events Board</h3>
                <div>
                    <Link as={Link} to='/about'><button className='createEventButton'>Create Event</button></Link>
                </div>
                <div className='eventBoardContainers'>
<<<<<<< HEAD
=======

>>>>>>> 89fd21f54e3e5c244a94ebc70cb8768276c49b47
                </div>
            </div>
            <div>
                <Switch>
                    <Route exact path='/about' component={Info}/>
                </Switch>
            </div>
        </div>

        
        );
    }
}

export default Home;