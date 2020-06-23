import React from 'react';
import logo from './logo.svg';
import './App.css';
import IncreaseCounter from './Components/IncreaseCounter';
import SayHello from './Components/SayHello';
import ToDoList from './Components/ToDoList';
import Game from './Components/TicTacToe/Game'

function App() {
  return (
    <div className="App">
      <IncreaseCounter />
      <br></br>
      <br></br>
      <SayHello />
      <br></br>
      <br></br>
      <ToDoList />
      <br></br>
      <br></br>
      <Game />
    </div>
  );
}

export default App;
