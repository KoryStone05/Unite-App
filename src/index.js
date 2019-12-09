import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
=======
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
>>>>>>> 89fd21f54e3e5c244a94ebc70cb8768276c49b47

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
