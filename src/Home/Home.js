import React, { Component } from 'react';
import './Home.css';



class Home extends Component {
    render() {
        return(
            <div className='welcome'>
                <h1>Welcome to <span className='unite'>Unite</span>!</h1>
            </div>
        );
    }
}

export default Home;