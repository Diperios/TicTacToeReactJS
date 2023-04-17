import * as React from 'react';
import { Board } from './Board';
import { Square } from './Square';
import './style.css';

export default function App() {

  return (
    <div 
    style={{
        position: 'absolute',
        left: '50%',
        top: '30%',
        transform: 'translate(-50%, -50%)',
    }}
    >
      <h1>Tic Tac Toe</h1>
      <p>this is a tic tac toe game</p>
      <Board />
    </div>
  );
}
