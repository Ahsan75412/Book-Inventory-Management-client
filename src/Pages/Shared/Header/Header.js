import React from 'react';
import logo from '../../../Images/logo/logo.jpg';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className='logos' height={50} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto ">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <>
                                <Nav.Link as={Link} to="/add">Add Item</Nav.Link>
                                <Nav.Link as={Link} to="/manage">Manage Item</Nav.Link>
                                <Nav.Link as={Link} to="/orders">My Item</Nav.Link>
                            </>
                        </Nav>
                        <Nav>


                            {
                                user
                                    ?

                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>

                                    :

                                    <Nav.Link eventKey={2} as={Link} to="login">
                                        Login
                                    </Nav.Link>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;