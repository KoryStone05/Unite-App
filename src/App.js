import React from 'react';
import './App.css';
import Home from './Home/Home';
import Navbars from './Components/Navbars/Navbars';
import 'bootstrap/dist/css/bootstrap.css';
import Info from './Components/Form/info';




function App() {
  return (
    <div className='background'>
      <Navbars />
      <Home />
      <Info />
    </div>
  );
}

export default App;
