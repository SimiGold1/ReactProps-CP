import React from 'react';
import Card from 'react-bootstrap/Card'; // Importing the Card component from react-bootstrap

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card className="player-card" style={{ width: '18rem', backgroundColor: 'black', border: '6px solid black' }}>
      {/* Displaying the player image */}
      <Card.Img variant="top" src={imageUrl} />

      <Card.Body>
        {/* Displaying the player name */}
        <Card.Title>{name}</Card.Title>

        <Card.Text>
          {/* Displaying player details */}
          Team: {team}<br />
          Nationality: {nationality}<br />
          Jersey Number: {jerseyNumber}<br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  // Setting default values for props
  name: 'Unknown',
  team: 'Unknown',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 0,
  imageUrl: '',
};

export default Player;