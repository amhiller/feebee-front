import React from 'react';
import logo from './logo1.svg';
import './App.css';

function App() {
  return (
    
    <div className="App">
        <div className="circle"></div>
        
        <header className="top">
        <img src={logo} className="App-logo1" alt="logo"/>
          <p>FeeBee</p>
        </header>
        <header className="App-header">
          <p>FeeBee - Construction Pending</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Coming Soon</p>
        </header>
    </div>
  );
}

export default App;
