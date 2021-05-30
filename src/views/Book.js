import React from "react";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components/macro";
import {books} from "data/books/books";

const Container = styled.div`
display: grid;
grid-template-areas:
'image'
'contents';
`;
const Contents = styled.div`
grid-area: contents;
`;

const Image = styled.img`
grid-area: image;
height: 466px;
width: 300px;
display: block;
`;

const Book = () => {
	const { params: { book } } = useRouteMatch();
	return (
		<Container>
			<Image alt="" src={books[book].thumbnail}/>
			<Contents>{books[book].contents()}</Contents>
		</Container>
	);
};

export default Book;
