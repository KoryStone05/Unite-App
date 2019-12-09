import React, { Component } from 'react';
import './Home.css';




class Home extends Component {
    render() {
        return(
        <div>
            <div className='welcome'>
                <h1>Welcome to <span className='unite'>Unite</span>!</h1>
            </div>
            <div className='containerHome'>
                <h3 className='eventBoardTitle'>Events Board</h3>
            </div>
        </div>
        );
    }
}

export default Home;