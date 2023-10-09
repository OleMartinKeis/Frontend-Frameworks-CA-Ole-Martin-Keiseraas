import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartIcon from "../ui/CartIcon";

function MyNavbar({ title, links, cartCount }) {
    return (
        <Navbar expand="sm" className="bg-body-tertiary">
            <Container>
                <LinkContainer to="/home">
                    <Navbar.Brand href="home">MyLittleShop</Navbar.Brand>
                </LinkContainer>
                    <Nav className="me-auto justify-content-between w-100">
                    {links.map((link, index) => (
                    <LinkContainer key={index} to={link.url}>                   
                        <Link lg={4}>{link.label}</Link>
                    </LinkContainer>

                    ))}
                        <Link to="/cart">
                            <CartIcon cartCount={cartCount} /> 
                        </Link>
                    </Nav>
            </Container>
 
        </Navbar>
    )
}

export default MyNavbar;