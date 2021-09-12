import React, {useState} from "react";
import { Link as UnstyledLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const WIDTH = 200;
const HEIGHT = 1.55 * WIDTH;

const Container = styled.div`
	background-image: ${({ cover }) => `url(${cover})`};
	background-size: cover;
	justify-items: center;
	height: ${`${HEIGHT}px`};
	width: ${`${WIDTH}px`};
	border-radius: 10px;
	box-shadow: 0 1px 0 rgba(8, 11, 14, 0.06), 
		0 16px 16px -1px rgba(8, 11, 14, 0.1);
`;

const Link = styled(UnstyledLink)`
	grid-area: ${({ area }) => area};
	border-radius: 8px;
	padding: 5px 20px;
	font-size: 18px;
	display: inline-block;
	color: black;
	background-color: white;
	z-index: 1;
	text-decoration: none;
	&:hover {
		text-decoration: none;
	}
	margin: auto;
`;

const BlurContainer = styled.div`
	display: grid;
	grid-template-areas:
		'. .     .       . '
		'. buy   details . '
		'. .     .       . ';
	grid-template-rows: 1fr max-content 0.15fr;
	height: ${`${HEIGHT}px`};
	width: ${`${WIDTH}px`};
	border-radius: 10px;
	position: absolute;
	background: rgba(0,0,0,0.3);
`;

function Card({ book }) {
	const [display, setDisplay] = useState(false);
	return (
		<Container 
			cover={book.cover} 
			onMouseEnter={() => setDisplay(true)} 
			onMouseLeave={() => setDisplay(false)}
		>
			{/* <Image alt="" src={book.cover}/> */}
			{/* <div>{book?.contents()}</div> */}
			{/* <Description>{book.overview.slice(0,200)}</Description> */}
			{display && (
				<BlurContainer>
					<Link area="buy">Buy</Link>
					<Link area="details" to={`books/${book.id}/`}>Details</Link>
				</BlurContainer>
			)}
		</Container>
	);
}

Card.propTypes = {
	book: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		overview: PropTypes.string,
		cover: PropTypes.string
	}).isRequired
};
export default Card;