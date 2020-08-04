import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from './Component/CounterGroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CounterGroup/>
      </header>
    </div>
  );
}

export default App;
