import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartIcon from "../ui/CartIcon";
import styles from "../../scss/navbar/Navbar.module.scss"

function MyNavbar({ title, links, cartCount }) {
    return (
        <Navbar expand="sm" className={styles["custom-navbar"]}>
            <Container>
                <LinkContainer to="/home">
                    <Navbar.Brand className={styles.navbarlogo} href="home">Find</Navbar.Brand>
                </LinkContainer>
                    <Nav className={`me-auto justify-content-between w-100`}>
                    {links.map((link, index) => (
                    <LinkContainer  key={index} to={link.url}>                   
                        <Link className={styles.navbaranchor} lg={4}>{link.label}</Link>
                    </LinkContainer>

                    ))}
                        <Link className={styles.navbaranchor} to="/cart">
                            <CartIcon cartCount={cartCount} /> 
                        </Link>
                    </Nav>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;