import React, { Component } from 'react';
import './Home.css';
import {
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Info from '../Components/Form/info';




class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showEventBoard: true
        }
    }

    getEventBoard() {
        
        if (this.setState({ formShow: false})) {
            return this.state.showventBoard;
        }
    }

    render() {
        return(
        <div>
           <div className='welcome'>
                <h1>Welcome to <span className='unite'>Unite</span>!</h1>
            </div>
            {this.state.showEventBoard}
            <div className='containerHome'>
                <h3 className='eventBoardTitle'>Events Board</h3>
                <div>
                    <Link as={Link} to='/about'><button className='createEventButton'>Create Event</button></Link>
                </div>
                <div className='eventBoardContainers'>
                    <h1>qiwnefonqwfe</h1>
                    <h1>qiwnefonqwfe</h1>
                    <h1>qiwnefonqwfe</h1>
                    <h1>qiwnefonqwfe</h1>
                    <h1>qiwnefonqwfe</h1>
                    <h1>qiwnefonqwfe</h1>
                    <h1>qiwnefonqwfe</h1>
                    <h1>qiwnefonqwfe</h1>
                    <h1>qiwnefonqwfe</h1>
                    <h1>qiwnefonqwfe</h1>
                    <h1>qiwnefonqwfe</h1>
                    <h1>qiwnefonqwfe</h1>
                    <h1>qiwnefonqwfe</h1>
                    <h1>qiwnefonqwfe</h1>
                    <h1>qiwnefonqwfe</h1>
                    <h1>qiwnefonqwfe</h1>
                    <h1>qiwnefonqwfe</h1>
                    <h1>qiwnefonqwfe</h1>
                    <h1>qiwnefonqwfe</h1>
                    <h1>jnsdkjfnskjfns</h1>
                    <h1>jnsdkjfnskjfns</h1>
                    <h1>jnsdkjfnskjfns</h1>
                    <h1>jnsdkjfnskjfns</h1>
                    <h1>jnsdkjfnskjfns</h1>
                    <h1>jnsdkjfnskjfns</h1>
                    <h1>jnsdkjfnskjfns</h1>
                    <h1>jnsdkjfnskjfns</h1>
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