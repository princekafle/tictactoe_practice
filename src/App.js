import React, { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  // board euta state ho jsle 9 ota null value vayeko array create garxa
  const [isXNext, setIsXNext] = useState(true);
// yesle chai aba ksko turn dinxa if true vo vane x ko turn falase vo vane O ko turn

  const handleClick = (index) => {
    //This function is triggered whenever a square on the board is clicked
    if (board[index] || calculateWinner(board)) return;
    //if: This checks if either of the two conditions are true:
// The square is already filled (board[index] is not null).
// A winner is already determined (calculateWinner(board) returns 'X' or 'O').
// return;: If either condition is true, the function stops executing further (nothing happens),

    const newBoard = board.slice();
    // current board ko copy banako using slice() to avoid directly changing the original board).
    newBoard[index] = isXNext ? 'X' : 'O';
    //If it's X's turn (isXNext is true), we place an 'X' in the clicked square (newBoard[index]).
// If it's O's turn (isXNext is false), we place an 'O' in the clicked square
    setBoard(newBoard); // board state ko value update garxa jun value null vako thau ma x or O rakhera
    setIsXNext(!isXNext); // This switches the turn to the next player (if it was 'X', it becomes 'O', and vice versa).
  };

  const calculateWinner = (board) => {

    //It lists all possible winning combinations (rows, columns, and diagonals)
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    // We loop through all possible winning lines
    for (let line of lines) {

      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];

      }
    }
    return null;
  };

  //board[a]: This checks if the square at position a is not empty (null). If the square is empty, it skips the check
  //If all three conditions are true, it means that the squares a, b, and c all contain the same value, meaning either 'X' or 'O' occupies those squares, and that player has won.

// return board[a];: If the above conditions are true, this line returns the value of board[a], which will either be 'X' or 'O'. This means the player ('X' or 'O') is the winner.

// return null;: If none of the winning conditions are met, the function returns null, meaning there is no winner yet.

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="status">{status}</div>
      <div className="board">
        {board.map((value, index) => (
          <button key={index} className="square" onClick={() => handleClick(index)}>
            {value}
          </button>

          //We loop over the board array to create the 9 buttons (one for each square).
// value: This is either 'X', 'O', or null (empty).
// index: The position of the square on the board.
// onClick={() => handleClick(index)}: When a square is clicked, we call handleClick to handle the move.
        ))}
      </div>
      <button className="reset" onClick={() => setBoard(Array(9).fill(null))}>
        Reset Game
      </button>
    </div>
  );
}

export default App;
