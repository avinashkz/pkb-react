import React from "react";
import styled from "styled-components/macro";
import Card from "components/Card";
import books from "data/books/books";

const Container = styled.article`
	display: grid;
	grid-template-areas:
		' title '
		' books ';
	grid-template-columns: auto;
	align-items: center;
	justify-items: center;
	padding-bottom: 75px;
	margin: 0px 50px;
`;

const Title = styled.h1`
	grid-area: title;
`;

const Shelf = styled.article`
	grid-area: books;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	justify-self: stretch;
	justify-items: center;
	grid-row-gap: 50px;
	grid-column-gap: 100px;
`;

function Books() {
	return (
		<Container id="books">
			<Title>Books</Title>
			<Shelf>
				{books.map(book => (
					<Card key={book.title} book={book}/>
				))}
			</Shelf>
		</Container>
		
	);
}

export default Books;
