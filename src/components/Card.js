import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const SIZE = "300px";

const Container = styled.article`
display: grid;
grid-template-areas:
	'image image image image'
	'title title title title'
	'. buy   details. ';

grid-column-gap: 20px;
justify-items: center;
width: ${SIZE};
border-radius: 5px;
box-shadow: 0 1px 0 rgba(8, 11, 14, 0.06), 
	0 16px 16px -1px rgba(8, 11, 14, 0.1);
padding-bottom: 30px;
`;

const Image = styled.img`
grid-area: image;
height: ${SIZE};
width: ${SIZE};
display: block;
border-radius: 15px 15px 0px 0px;
`;

const Title = styled.h1`
grid-area: title;
padding: 0px 30px;
`;

// const Description = styled.p`
// padding: 0px 30px;
// `;

const Button = styled.button`
grid-area: ${({area}) => area};
border-radius: 20px;
width: 120px;
height: 45px;
font-size: 18px;
display: inline-block;
background-color: white;
`;

function Card ({book}) {
	return (
		<Container>
			<Image alt="" src={book.thumbnail}/>
			<Title>{book.title}</Title>
			{/* <Description>{book.overview.slice(0,200)}</Description> */}
			<Button type="button" area="buy">Buy</Button>
			<Button type="button" area="details">Details</Button>
		</Container>
	);
}

Card.propTypes = {
	book: PropTypes.shape({
		title: PropTypes.string,
		overview: PropTypes.string,
		thumbnail: PropTypes.string
	}).isRequired
};
export default Card;