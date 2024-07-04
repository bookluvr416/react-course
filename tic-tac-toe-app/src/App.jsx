import { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import Header from './components/Header';
import Players from './components/Players';
import Log from './components/Log';
import GameOver from './components/GameOver';
import { WINNING_COMBINATIONS } from './winning-combinations';

const INITIAL_GAME_BOARD = new Array(3).fill(null);
initialGameBoard[0] = new Array(3).fill(null);
initialGameBoard[1] = new Array(3).fill(null);
initialGameBoard[2] = new Array(3).fill(null);

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
}

const derivedActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') currentPlayer = 'O'; 
  return currentPlayer;
};

const deriveWinner = (gameBoard, players) => {
  let winner = null;
  
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  };

  return winner;
};

const createGameBoard = (gameTurns) => {
  const gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
  gameTurns.forEach((turn) => {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  });

  return gameBoard
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);
  
  const gameBoard = createGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns(prevState => {
      let currentPlayer = derivedActivePlayer(prevState);

      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer,
        },
        ...prevState,
      ];

      return updatedTurns;
    });
  };

  const handleRematch = () => {
    setGameTurns([]);
  }

  const onEditName = (name, symbol) => {
    setPlayers(prevState => {
      return {
        ...prevState,
        [symbol]: name,
      }
    })
  }

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <Players
            activePlayer={derivedActivePlayer(gameTurns)}
            onEditName={onEditName}
            players={players}
          />
          {(winner || hasDraw) && (
            <GameOver winner={winner} handleRematch={handleRematch} />
          )}
          <GameBoard
            handleSelectSquare={handleSelectSquare}
            gameBoard={gameBoard}
          />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
    
  )
}

export default App
