import React, {useState,useEffect} from "react";
import styled from "styled-components/macro";
// import { NavLink } from "react-router-dom";

// TODO: Handle very small screen sizes
const Container = styled.article`
	position: fixed;
	height: 30px;
	width: 100%;
	z-index: 1;
	display: grid;
	grid-template-areas:
		'. title . buy about books gallery .  mail facebook .';
	grid-template-columns: min-content max-content auto repeat(4, max-content) auto repeat(2, max-content) min-content;
	grid-column-gap: 3%;
	align-items: center;
	justify-items: center;
	background-color: ${({scroll}) => scroll < 100 ? "none" : "black"};
`;

const Item = styled.a`
	grid-area: ${({area}) => area};
	color: white;
	font-size: 16px;
`;


const NavBar = () => {
	const [scroll, setScroll] = useState(0);
	// console.log(scroll);
	useEffect(() => {
		const onScroll = ({target}) => 
			setScroll(target.documentElement.scrollTop);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}
	, [scroll]);

	return (
		<Container scroll={scroll}>
			<Item area='title'>P.K Balakrishnan</Item>

			<Item area='buy'>Buy Books</Item>
			<Item area='about'>About</Item>
			<Item area='books'>Books</Item>
			<Item area='gallery'>Gallery</Item>

			<Item area='mail'>EM</Item>
			<Item area='facebook'>FB</Item>
		</Container>
	);
};

export default NavBar;