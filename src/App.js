import React from 'react';
import PlayerList from './Components/PlayerList'; // Importing the PlayerList component
import './App.css'; // Importing the App CSS file
import Container from 'react-bootstrap/Container'; // Importing the Container component from react-bootstrap
import Navbar from 'react-bootstrap/Navbar'; // Importing the Navbar component from react-bootstrap
import Navbars from './Components/Navbar'; // Importing the Navbars component

function App() {
  return (
    <div className="App">
      {/* Rendering the Navbars component */}
      <Navbars />

      {/* Rendering the PlayerList component */}
      <PlayerList />
    </div>
  );
}

export default App;
