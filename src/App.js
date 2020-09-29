import React from 'react';
import logo from './logo.svg';
import './App.css';
import Morpion from './components/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Morpion de la night
       <Morpion/>
       {/* TODO : integrer notre morpion ici */}
      </header>
    </div>
  );
}

export default App;
