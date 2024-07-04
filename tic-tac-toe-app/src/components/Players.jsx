import { useState } from 'react';
import Player from './Player';

const Players = ({ activePlayer, onEditName, players }) => {
  const li = (playerName, symbol, isActive) => {
    return (
      <li className={isActive ? 'active' : undefined}>
        <Player
          playerName={playerName}
          symbol={symbol}
          onEditName={onEditName}
        />
      </li>
    )
  }
  
  return (
    <ol id="players" className="highlight-player">
      {li(players['X'], 'X', 1, activePlayer === 'X')}
      {li(players['O'], 'O', 2, activePlayer === 'O')}
    </ol>
  )
}

export default Players;
