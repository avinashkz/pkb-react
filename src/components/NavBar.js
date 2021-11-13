import React from "react";
import { FaEnvelope, FaFacebookSquare } from 'react-icons/fa';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";


const NavBar = () => (
	<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
		<Container>
			<Navbar.Brand as={Link} to="/">P.K BALAKRISHNAN</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link area='buy' target='_blank' href='https://dcbookstore.com/authors/balakrishnan-p-k'>Buy Books</Nav.Link>
					<Nav.Link area='about' as={Link} to='/about'>About</Nav.Link>
					<Nav.Link area='books' as={Link} to='/books'>Books</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link area='mail' target='_blank' href='mailto:pkjaya@hotmail.com'><FaEnvelope size={25} /></Nav.Link>
					<Nav.Link area='facebook' target='_blank' href='https://www.facebook.com/pkbauthor'><FaFacebookSquare size={25} /></Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
);

export default NavBar;