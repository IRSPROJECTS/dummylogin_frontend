// src/App.js
import React from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dummy Login</h1>
        <div style={{ display: 'flex', gap: '50px' }}>
          <Register />
          <Login />
        </div>
      </header>
    </div>
  );
}

export default App;