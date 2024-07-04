import { useState } from "react";

const Player = ({ playerName, symbol, onEditName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(playerName);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEditName(editedName, symbol)
    setIsEditing(false);
  };

  const handleChangeName = (event) => {
    setEditedName(event.target.value);
  };

  const nameDisplay = () => {
    if (isEditing) {
      return <input type="text" required defaultValue={playerName} onChange={handleChangeName} />;
    }
    
    return <span className="player-name">{playerName}</span>;
  };

  return (
    <>
      <span className="player">
        {nameDisplay()}
        <span className="player-symbol">{symbol}</span>
      </span>
      <span>
        <button onClick={handleEditClick} hidden={isEditing}>Edit</button>
        <button onClick={handleSaveClick} hidden={!isEditing}>Save</button>
      </span>
    </>
  )
};

export default Player;
