import React from 'react';
import './App.css';
import Temperature from "./Temperature";



function App() {
  return (
    <div className="App">
      <div className="container">
      <Temperature defaultCity="Chicago"/>
      <footer>
        <a href="https://github.com/Franzi-4" target="_blank" rel="noopener noreferrer"> Open-source code</a> by Franzi
      </footer>
      </div>
      </div>
  );
}

export default App;