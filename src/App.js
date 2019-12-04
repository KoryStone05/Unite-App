import React from 'react';
import './App.css';
import Home from './Home/Home';
import Navbars from './Components/Navbars/Navbars';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className='background'>
      <Navbars />
      <Home />
    </div>
  );
}

export default App;
