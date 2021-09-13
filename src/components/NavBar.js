import React, {useState,useEffect} from "react";
import styled from "styled-components/macro";
import { Link as UnstyledNavLink } from "react-router-dom";

// TODO: Handle very small screen sizes
const Container = styled.div`
	grid-area: nav;
	position: fixed;
	height: 50px;
	width: 100%;
	z-index: 1;
	display: grid;
	grid-template-areas:
		'. title . buy about books . .  mail facebook .';
	grid-template-columns: min-content max-content auto repeat(4, max-content) auto repeat(2, max-content) min-content;
	grid-column-gap: 3%;
	align-items: center;
	justify-items: center;
	background-color: black;
	// opacity: ${({scroll}) => scroll < 100 ? "1" : "1"};
	opacity: ${({page}) => page == "home" ? "0.6" : "1"};
`;

const Item = styled.a`
	grid-area: ${({area}) => area};
	color: white;
	font-size: 16px;
	text-decoration: none;
	&:hover {
		text-decoration: none;
	}
`;

const NavLink = styled(UnstyledNavLink)`
	grid-area: ${({area}) => area};
	color: white;
	font-size: 16px;
	text-decoration: none;
	&:hover {
		text-decoration: none;
	}
`;


const NavBar = ({ page }) => {
	const [scroll, setScroll] = useState(0);
	useEffect(() => {
		const onScroll = ({target}) => 
			setScroll(target.documentElement.scrollTop);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}
	, [scroll]);

	return (
		<Container scroll={scroll} page={page}>
			<NavLink area='title' to='/'>P.K Balakrishnan</NavLink>

			<Item area='buy' target='_blank' href='https://dcbookstore.com/authors/balakrishnan-p-k'>Buy Books</Item>
			<NavLink area='about' to='/about'>About</NavLink>
			<NavLink area='books'to='/books'>Books</NavLink>
			{/* <NavLink area='gallery' to='/gallery'>Gallery</NavLink> */}

			<Item area='mail'>EM</Item>
			<Item area='facebook'>FB</Item>
		</Container>
	);
};

export default NavBar;