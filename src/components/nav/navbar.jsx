import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function MyNavbar({ title, links }) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <LinkContainer to="/home">
                    <Navbar.Brand href="home">MyLittleShop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navnar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    {links.map((link, index) => (
                   
                   <Link key={index} to={link.url}>{link.label}</Link>

           ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
 
        </Navbar>
    )
}

export default MyNavbar;