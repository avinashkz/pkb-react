import React from "react";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components/macro";
import { books } from "data/books/books";

const Container = styled.div`
	// height: calc(100%-50px);
	display: grid;
	grid-template-areas:
	'.     contents'
	'image contents'
	'.     contents';
	grid-column-gap: 25px;
	margin: 50px 20px 0 20px;
	text-align: justify;
	text-justify: inter-word;
`;
const Contents = styled.div`
	grid-area: contents;
	// height: calc(100% - 50px);
	// overflow: auto;
`;

const Image = styled.img`
	grid-area: image;
	// height: 466px;
	// width: 300px;
	display: fixed;
`;

const Book = () => {
	const { params: { book } } = useRouteMatch();
	return (
		<Container>
			<Image alt="" src={books[book].cover} />
			<Contents>{books[book].contents()}</Contents>
		</Container>
	);
};

export default Book;
