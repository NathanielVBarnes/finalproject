// NavbarComponent.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavbarComponent() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">House Management</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/houses">Houses</Nav.Link>
                    <Nav.Link as={Link} to="/create">Create House</Nav.Link>
                    <Nav.Link as={Link} to="/edit">Edit House</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
