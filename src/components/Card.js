import React from "react";
import styled from "styled-components/macro";

const Container = styled.article`

`;

const Card = ({book}) => {
	console.log(book);
	return (
		<Container>
			<img alt="" src={book.thumbnail}/>
			<span>{book.title}</span>
			<span>{book.overview.slice(0,200)}</span>
			<button type="primary">Buy</button>
			<button>Goodreads</button>
		</Container>
	);
};

export default Card;