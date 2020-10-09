import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: 'rgb(1, 136, 73)', margin: '0' }} variant="dark">
      <Container>
        <div className="nav-bar">
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            StudentsLife
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
