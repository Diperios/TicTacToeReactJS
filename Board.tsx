import React = require('react');
import { Square } from './Square';

const boardNull:string = null;

export function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(boardNull));
  const [isX, setIsX] = React.useState(true);

  const handleClickMaker = (index: number) => {
    return () => {
      if (squares[index] != boardNull || hasWon(squares) != boardNull) {
        return;
      }
      squares[index] = isX ? 'X' : 'O';
      setSquares(squares);
      setIsX(!isX);
    };
  };

  const winner = hasWon(squares);
  var status;

  if (winner != boardNull) {
    status = `${winner} has won!!`;
  } else {
    status = 'player ' + (isX ? 'X' : 'O') + ', make your move';
  }

  function handleRestart(): void {
    setIsX(true);
    setSquares(Array(9).fill(boardNull));
  }

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={handleClickMaker(i)} />;
  };

  return (
    <div className="game-container">
      <div className="board-container">
        <ul className="board no-bullets">
          <li className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </li>
          <li className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </li>
          <li className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </li>
          <li className="status">{status}</li>
          <li>
            <button className="restart" onClick={handleRestart}>
              Restart Game!
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

function hasWon(board: string[]): string {
  //check horizontal
  for (var i = 0; i < 3; i++) {
    if (
      board[i * 3] !== boardNull &&
      board[i * 3] === board[i * 3 + 1] &&
      board[i * 3 + 1] === board[i * 3 + 2]
    ) {
      return board[i * 3];
    }
  }

  //check vertical
  for (var i = 0; i < 3; i++) {
    if (
      board[i] !== boardNull &&
      board[i] === board[i + 3] &&
      board[i + 3] === board[i + 6]
    ) {
      return board[i];
    }
  }

  //check diagonals
  if (board[0] !== boardNull && board[0] === board[4] && board[4] === board[8]) {
    return board[0];
  }
  if (board[2] !== boardNull && board[2] === board[4] && board[4] === board[6]) {
    return board[2];
  }

  return boardNull;
}
