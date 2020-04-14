import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Tasks from './components/Tasks/Tasks';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Tasks/>
    </div>
  );
}

export default App;
