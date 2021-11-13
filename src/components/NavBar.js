import React, { useState, useEffect } from "react";
import { FaEnvelope,FaFacebookSquare } from 'react-icons/fa';
import styled from "styled-components/macro";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";

// TODO: Handle very small screen sizes
// const Container = styled(Navbar)`
// 	grid-area: nav;
// 	position: fixed;
// 	height: 50px;
// 	width: 100%;
// 	z-index: 1;
// 	display: grid;
// 	grid-template-areas:
// 		'. title . buy about books . .  mail facebook .';
// 	grid-template-columns: min-content max-content auto repeat(4, max-content) auto repeat(2, max-content) min-content;
// 	grid-column-gap: 3%;
// 	align-items: center;
// 	justify-items: center;
// 	background-color: black;
// 	// opacity: ${({ scroll }) => scroll < 100 ? "1" : "1"};
// 	opacity: ${({ page }) => page == "home" ? "0.6" : "1"};
// `;

// const Item = styled.a`
// 	grid-area: ${({ area }) => area};
// 	color: white;
// 	font-size: 16px;
// 	text-decoration: none;
// 	&:hover {
// 		text-decoration: none;
// 	}
// 	font-weight: 500;
// 	font-size: 18px;
// `;

// const Icon = styled(Item)`
// 	font-size: 22px;
// `;

// const NavLink = styled(UnstyledNavLink)`
// 	grid-area: ${({ area }) => area};
// 	color: white;
// 	font-size: 16px;
// 	text-decoration: none;
// 	&:hover {
// 		text-decoration: none;
// 	}
// 	font-weight: 500;
// 	font-size: 18px;
// `;

// const HomeLink = styled(NavLink)`
// 	font-weight: 600;
// 	font-size: 20px;
// `;


const NavBar = ({ page }) => {
	// const [scroll, setScroll] = useState(0);
	// useEffect(() => {
	// 	const onScroll = ({ target }) =>
	// 		setScroll(target.documentElement.scrollTop);
	// 	window.addEventListener("scroll", onScroll);
	// 	return () => window.removeEventListener("scroll", onScroll);
	// }
	// 	, [scroll]);

	return (
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
						<Nav.Link area='mail' target='_blank' href='mailto:pkjaya@hotmail.com'><FaEnvelope size={25}/></Nav.Link>
						<Nav.Link area='facebook' target='_blank' href='https://www.facebook.com/pkbauthor'><FaFacebookSquare size={25} /></Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;