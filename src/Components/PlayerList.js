import React from 'react';
import Player from './Player'; // Importing the Player component
import players from './Players'; // Importing the players array
import './Player.css'; // Importing the Player CSS file

const PlayerList = () => {
  return (
    <div className="player-list-container">
      {/* Mapping over the players array and rendering Player component for each player */}
      {players.map((player, index) => (
        <Player key={index} {...player} /> // Passing player data as props to the Player component
      ))}
    </div>
  );
};

export default PlayerList;