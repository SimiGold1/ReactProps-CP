import React from 'react';
import Container from 'react-bootstrap/Container'; // Importing the Container component from react-bootstrap
import Navbar from 'react-bootstrap/Navbar'; // Importing the Navbar component from react-bootstrap

function Navbars() {
  return (
    <Navbar className="custom-navbar">
      {/* Wrapping the Navbar content in a Container */}
      <Container>
        {/* Displaying the Navbar Brand */}
        <Navbar.Brand href="#home">
          {/* Displaying the brand logo */}
          <img src='fifalogo.jpg' className="brand-logo"/> 
          FIFA Cards
        </Navbar.Brand>

        {/* Rendering the Navbar Toggle */}
        <Navbar.Toggle />

        {/* Rendering the Navbar Collapse */}
        <Navbar.Collapse className="justify-content-end">
          {/* Displaying the signed-in user */}
          <Navbar.Text>
            Signed in: <a href="#login"> Peter Doe</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
