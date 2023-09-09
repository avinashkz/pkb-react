import React from "react";
// import { FaEnvelope, FaFacebookSquare } from 'react-icons/fa';
// import Container from 'react-bootstrap/Container'
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
import styled from "styled-components/macro";
import { Link } from "react-router-dom";


const Nav = styled.nav`
   background-color: #bda27d;
   text-align: left;
   margin-bottom: 0; 
   display: flex;
   justify-content: space-between;
   align-items: center;
 `;
const Title = styled.h1`
   font-weight: bold;
   color: white;
   font-family: 'Dancing Script', cursive;
   margin-left: 160px;
   margin-right: 52rem;
   margin-bottom: 0px;

   &:hover  {
	color: black;
	cursor: pointer;
   }
`;
const NavSection = styled.nav`
   background-color: white;
   justify-content: center;
   text-align: center;
   padding-top: 15px;
   margin-top: 0;
   margin-bottom: 0;
`;
const Ul = styled.ul`
   list-style-type: none;
   margin: 0;
   padding: 0;
   display: flex;
   justify-content: center;
   overflow: hidden;
 `;
const Li = styled.li`
   margin: 0 145px;
   padding-bottom: 5px;
 `;
const NavLink = styled(Link)`
   color: black;
   text-decoration: none;
   font-size: 1.09rem;
   font-family: 'Playfair Display', serif;

   &:hover {
	color: #bda27d;
    font-weight: bold;
	font-size: 1.5rem;
 }
 `;

function NavBar() {
	return (
		<>
			<Nav>
				<Title to="/">P K Balakrishanan</Title>
			</Nav>
			<NavSection>
				<Ul>
					<Li>
						<NavLink area='buy' target='_blank' href='https://dcbookstore.com/authors/balakrishnan-p-k'>Buy Books</NavLink>
					</Li>
					<Li>
						<NavLink as={Link} to='/about'>About</NavLink>
					</Li>
					<Li>
						<NavLink as={Link} to='/books'>Books</NavLink>
					</Li>
					<Li>
						<NavLink as={Link} to='/gallery'>Gallery</NavLink>
					</Li>
				</Ul>
			</NavSection>
		</>
	);
}

export default NavBar;
