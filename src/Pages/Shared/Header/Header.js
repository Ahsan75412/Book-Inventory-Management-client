import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar  collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={40} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/inventory">Inventory</Nav.Link>
                            <Nav.Link href="/blogs">Blog</Nav.Link>
                            <>
                                <Nav.Link as={Link} to="add">Add Item</Nav.Link>
                                <Nav.Link as={Link} to="manage">Manage Item</Nav.Link>
                                <Nav.Link as={Link} to="orders">My Item</Nav.Link>
                            </>
                        </Nav>
                     
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;